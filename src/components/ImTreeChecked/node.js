
let nodeIdSeed = 0;

/**
 * 子节点选中状态
 * 
 */
function getChildStatus(node){
    let all = true; //是否全选中,true：全选中
    let none = true; //是否全没选中，true:全没选中
    // let disabledWithoutChecked = false; //有禁用且没选中,true：有
    let children = node.childrenNodes;
    for(let i=0;i<children.length;i++){
        // 有选中的或者有半选状态的，则none=false
        if( children[i].checked || children[i].indeterminate ){
            none = false;
        }
        // 有没选中的或者有半选状态的，则all=false
        if( !children[i].checked || children[i].indeterminate ){
            all = false;
            // if(children[i].disabled){
            //     disabledWithoutChecked = true;
            // }
        }

    }
    return {all,none,half:!all&&!none};
}

/**
 * 重新设置父级选框状态
 */
function reInnitChecked(node){
    let {all,none,half} = getChildStatus(node);
    if(all){
        node.checked = true;
        node.indeterminate = false;
    }else if(none){
        node.checked = false;
        node.indeterminate = false;
    }else if(half){
        node.checked = false;
        node.indeterminate = true;
    }

    let parent = node.parent;
    if(parent){
        reInnitChecked(parent);
    }
}
export default class Node{
    constructor(options){

        this.id = nodeIdSeed++; //当前节点id
        this.data = null; //当前节点数据
        this.isLeaf = false;//是否是叶子节点
        this.level = 0; //节点级别
        this.parent = null;//当前节点的父节点

        this.indeterminate = false;//表示复选框为不确定状态
        this.checked = false; //当前节点是否选中

        this.expanded = false; //当前节点是否展开,false：折叠，true:展开

        for(let name in options){
            if(options.hasOwnProperty(name)){
              this[name] = options[name];
            }
        }

        // 1、计算级别
        if( this.parent ){
            this.level = this.parent.level + 1;
        }
        
        this.childrenNodes = []; //存储当前节点的子节点

        if( !this.data ){
            return ;
        }
        
        // 2、将节点存入映射对象
        if( this.level>0 && this.store.key ){ //不是根节点&数据有key未键值的数据
            this.store.registerNode(this);//将当前节点存入节点映射对象
        }

        // 3、获取子节点数据
        let children = [];
        if( this.level == 0 ){
            children = this.data;
         }else{
            children = this.data.children || []; //没有子节点返回空数组
        }
        
        // 4、当前节点是否是默认展开项，是则展开
        let key = this.store.key; //唯一标识字段名
        let defaultKeys = this.store.defaultExpandKeys; //默认展开项数组列表
       if( this.level>0 && key && defaultKeys && defaultKeys.indexOf(this.data.key)!==-1 ){
            this.expand();
        }


        // 遍历子节点
        for(let i=0;i<children.length;i++){
            this.insertChild({data:children[i]});
        }
    } //construstor-----end

    /**
     * 取值函数
     * 取disabled值  --- 在调试工具中，这个值是看不到的
     */
    get disabled(){
        return this.data.disabled;
    }

    /**
     * 取值函数
     * 取label值 --- 在调试工具中，这个值是看不到的
     */
    get label(){
       return this.data.label;
    }

    /**
     * 递归调用
     * 生成Node类型的子节点。
     */
    insertChild(data){
        let node_data = data.data;
        // 生成新节点--递归调用
        let child = new Node({
            data:node_data,
            parent:this, //子节点的父节点（是当前已生成的节点）
            // label:node_data.label,
            store:this.store, //(1)在生成节点映射对象时需要，在构造函数里：store.registerNode
            isLeaf:!(node_data.children)
        });
        this.childrenNodes.push(child);
    }


    /**
     * 展开节点以及父节点
     */
    expand(){
        let parent = this.parent;
        while(parent){
            parent.expanded = true;
            parent = parent.parent;
        }
        this.expanded = true;
    }

    /**
     * 折叠节点
     */
    collapse(){
        this.expanded = false;
    }

    /**
     * 节点选中状态设置
     * val:选中状态值，true:选中，false:未选中
     * recursion:是否往上遍历父及祖先节点，并设置选中状态
     */
    setChecked(val,recursion){

        // 设置当前被点击节点
        this.checked = val;
        
        // 遍历子节点
        let children = this.childrenNodes;
        for(let i=0;i<children.length;i++){
            // 查询并设置子节点-------------------------------------disabled拿到的是undifined
            children[i].checked = val && !children[i].disabled;
            if(children[i].childrenNodes.length>0){
                children[i].setChecked(val,false); //不需要往上遍历父节点
            }
        }

        // 遍历父节点
        if( this.parent && recursion ){
            reInnitChecked(this.parent);
        }
    }
}
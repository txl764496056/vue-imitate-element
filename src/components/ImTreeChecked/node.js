let nodeIdSeed = 0;
export default class Node{
    constructor(options){

        this.id = nodeIdSeed++; //当前节点id
        this.data = null; //当前节点数据
        this.isLeaf = false;//是否是叶子节点
        this.level = 0; //节点级别
        this.parent = null;//当前节点的父节点

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
            label:node_data.label,
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
}
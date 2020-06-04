let nodeIdSeed = 0;
export default class Node{
    constructor(options){

        this.id = nodeIdSeed++; //当前节点id
        this.data = null; //当前节点数据
        this.isLeaf = false;//是否是叶子节点
        this.level = 0; //节点级别
        this.parent = null;//当前节点的父节点

        for(let name in options){
            if(options.hasOwnProperty(name)){
                this[name] = options[name];
            }
        }

        // 计算级别
        if( this.parent ){
            this.level = this.parent.level + 1;
        }

        this.childrenNodes = []; //存储当前节点的子节点

        if( !this.data ){
            return ;
        }

        // 获取子节点数据
        let children = [];
        if( this.level == 0 ){
            children = this.data;
         }else{
            children = this.data.children || []; //没有子节点返回空数组
        }

        // 遍历子节点
        for(let i=0;i<children.length;i++){
            this.insertChild({data:children[i]});
        }
    }

    /**
     * 生成Node类型的子节点。
     */
    insertChild(data){
        let node_data = data.data;
        // 生成新节点--递归调用
        let child = new Node({
            data:node_data,
            parent:this, //子节点的父节点（是当前已生成的节点）
            // id:node_data.id,
            label:node_data.label,
            isLeaf:!(node_data.children)
        });
        this.childrenNodes.push(child);
    }

    /**
     * 
     * 设置属性控件每个复选框状态（递归调用）
     * 说明：会从被点击的选项开始，向上遍历祖先辈，向下遍历子孙辈
     * 
     * element源码setChecked(value,deep,recursion,passValue)有4个参数如下：
     * @param value:点击选项时，传入值
     * @param deep:是否深度遍历（子节点），并设置选中状态
     * @param recursion:是否往上遍历父及祖先节点，并设置选中状态
     * @param passValue:--------分析不精确，需要继续考究^_^
     *                  当前节点/父节点/祖先节点的选中状态，
     *                  (1) 没有传入值时，会根据当前节点的value值计算
     *                  说明：这个是判断子节点或者孙子节点选框状态的判断条件之一
     */
    setChecked(value){
        // console.log(value);
    }
}
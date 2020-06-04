let nodeIdSeed = 0;
export default class Node{
    constructor(options){

        this.id = nodeIdSeed++; //当前节点id，作为每个节点的索引,将节点存入数组
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
     * 
     */
    insertChild(data){
        let node_data = data.data;
        // 生成新节点--递归调用
        let child = new Node({
            data:node_data,
            parent:this, //子节点的父节点（是当前已生成的节点）
            label:node_data.label,
            isLeaf:!(node_data.children)
        });
        this.childrenNodes.push(child);
    }
}
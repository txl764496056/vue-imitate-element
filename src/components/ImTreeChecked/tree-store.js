import Node from "./node.js"

/**
 * 1、有节点映射对象，便于对指定节点做默认展开或者选中操作
 *    (1) 默认展开操作时在tree-store中进行的
 */
export default class TreeStore{
    constructor(options){

        for(let option in options){
            if(options.hasOwnProperty(option)){
                this[option] = options[option];
            }
        }

        //节点映射对象，键值：传入的key的值，作用：便于指定节点，默认展开或者选中
         this.nodesMap = {}; 

         this.treeNode = new Node({
            data:this.data,
            store:this
        });

    }
    /**
     * 将生成的节点存入节点映射对象
     */
    registerNode(node){
       let key = this.key; //节点唯一标识的字段名,用户在调用组件时，指定
       if( !key ) return ;
       this.nodesMap[node.data.key] = node;
    }
}
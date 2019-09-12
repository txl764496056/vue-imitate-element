let nodeIdSeed = 0;
export default class Node{
    constructor(options){
        this.id = nodeIdSeed++;
        this.data = null;

        for(let name in options){
            if(options.hasOwnProperty(name)){
                this[name] = options[name];
            }
        }
        
    }
}
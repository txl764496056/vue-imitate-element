export default function merge(target){
    for(let i=1;i<arguments.length;i++){
        let source = arguments[i] || {};
        for(let key in source){
            // 忽略掉那些从原型链上继承到的属性
            if(source.hasOwnProperty(key)){
                let value = source[key];
                if(value !== undefined){
                    target[key] = value;
                }
            }
        }
    }
    return target;
}
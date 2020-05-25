/* function broadcast(componentName, eventName, params) {
    this.$children.forEach(child => {
      var name = child.$options.componentName;
  
      if (name === componentName) {
        child.$emit.apply(child, [eventName].concat(params));
      } else {
        broadcast.apply(child, [componentName, eventName].concat([params]));
      }
    });
  } */

  function broadcast(componentName,eventName,params){
      this.$children.forEach(child => {
          var name = child.$options.componentName;
          if( name === componentName ){
            child.$emit.apply(child,[eventName].concat(params));
          }else{
            //   先将componentName,eventName 放入一个数组中，再链接参数
              broadcast.apply(child,[componentName,eventName].concat([params]));
          }
          console.log(child);
      })
  }

  export default {
      methods: {
          broadcast(componentName,eventName,params){
              broadcast.call(this,componentName,eventName,params);
          }
      }
  };
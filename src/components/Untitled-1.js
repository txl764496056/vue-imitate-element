/**
 * 以下是一个展开收起动画：高度从0到300，然后从300到0是一个动画的来回，是2个动画
 * 2、beforeEnter、enter、afterEnter  是从0到300动画的钩子函数
 * 3、beforeLeave、leave、afterleave 是从300到0动画的钩子函数
 */
class Transition {

    // 进入动画之前（展开开始之前）
    beforeEnter(el){
        el.style.height = "0px";
        el.style.overflow = "hidden";
        console.log("before-enter",el)
    }

    // 动画执行过程中（展开过程中）
    enter(el,done){
        el.style.transition = "height 1s";
        setTimeout(function(){
            done(); //手动200ms后进入afterEnter,否则1s后才会进入并执行动画（即1s后开始动画）
        },100)
        console.log('enter');
    }

    // 完成动画之后（展开后）
    afterEnter(el){
        
        el.style.height="300px";

        console.log("after-enter");
    }

    // 恢复状态动画开始之前（（收起开始前）
    beforeLeave(el){
        el.style.transition = "";
        console.log("before-leave");
    }

    // 恢复状态动画中（收起过程中）
    leave(el){
        el.style.transition = "height 1s";
        el.style.height="0px";
        // setTimeout(function(){
        //     done(); //手动200ms后进入afterLeave,否则1s后才会进入并执行动画（即1s后开始动画）
        // },200)
        console.log("leave");
    }

    // 恢复动画完成后（收起之后）
    afterLeave(el){
        // el.style.height="0px";
        // console.log("after-leave");
    }
}
export default {
    name:"ImCollapseTransition",
    functional:true,
    // children来自组件包裹的内容，
    // 如： <im-collapse-transition>
    //          <div>fdjfkdjfkdjfkdj</div> //这个节点就是children
    //      </im-collapse-transition>
    render(h,{children}){
        const transition = new Transition();
        const data = {
            on:{
                beforeEnter:transition.beforeEnter,
                enter:transition.enter,
                afterEnter:transition.afterEnter,
                beforeLeave:transition.beforeLeave,
                leave:transition.leave,
                afterLeave:transition.afterLeave,
            }
        };
        return h("transition",data,children);
    }
}; 
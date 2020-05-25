/**
 * 获取元素高度(包括height+border+padding);
 */
// function getcoumputedHeight(el){
//     if( !el ){return "需要传入元素";}
//     const t_border_w = el.style.borderTopWidth || 0;
//     const b_border_w = el.style.borderBottomWidth || 0;
//     const t_padding = el.style.paddingTop || 0;
//     const b_padding = el.style.paddingBottom || 0;
//     const h = el.clientHeight;
//     return parseInt(t_border_w)+parseInt(b_border_w)+parseInt(t_padding)+parseInt(b_padding)+parseInt(h);
// }
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
        
        console.log("before-enter")
    }

    // 动画执行过程中（展开过程中）
    enter(el){
        setTimeout(function(){
            el.style.transition = "height 0.3s ease-in-out";
            el.style.height = el.scrollHeight+'px'; //获取当前列表的高度并设置
        },100)
        console.log('enter');
    }

    // 完成动画之后（展开后）
    afterEnter(el){
        el.style.transition = "";

        setTimeout(function(){
            el.style.height = "";//取消高度设置，避免展开下一级时，不能全部显示
        },300)
        console.log("after-enter");
    }

    // 恢复状态动画开始之前（（收起开始前）
    beforeLeave(el){
        el.style.height = el.scrollHeight+'px'; //由于展开后高度设置被设为""，需要再次获取并设置才能使收起动画生效
        el.style.overflow = "hidden";
        el.style.transition = "height 0.3s ease-in-out";
        console.log("before-leave");
    }

    // 恢复状态动画中（收起过程中）
    leave(el){
        
        setTimeout(function(){
            el.style.height="0px"; //避免与收起前的准备同时执行，动画为执行完，高度已经变为0；
        },50)

        console.log("leave");
    }

    // 恢复动画完成后（收起之后）
    afterLeave(el){
        el.style.height = "";
        el.style.transition = "";
        console.log("after-leave");
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
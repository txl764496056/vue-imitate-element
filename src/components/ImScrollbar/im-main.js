import Bar from "./im-bar"
import ResizeObserver from 'resize-observer-polyfill'
export default {
    name:"ImScrollbar",
    props:{
        wrapClass:{
            type:String,
            default:''
        },
        viewClass:{
            type:String,
            default:''
        },
        hoverShowBar:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            // 滚动条移动距离，宽度/高度，都是以备份比为单位
            moveX:0,
            moveY:0,
            barH:"",
            barW:"",
            viewStyle:"",
            barIsShow:true
        }
    },
    computed:{
        wrap(){
            return this.$refs.wrap;
        },
    },
    render(h){
        const view = h('div',{
            class:['im-scrollbar-view',this.viewClass],
            ref:'resize',
            style:this.viewStyle
        },this.$slots.default);
        const wrap = (
            <div class={[this.wrapClass,"im-scrollbar-wrap"] }
                ref="wrap"
                onScroll={ this.handleScroll }
                onmouseenter={ this.hoverShowBar ? this.handleMouseenter:'' }
                onmouseleave={ this.hoverShowBar ? this.handleMouseleave:'' }
                >
                {[view]}
            </div>
        )
        // const wrap = (
        //     <div 
        //         ref="wrap"
        //         class="im-scrollbar-wrap"
        //         onScroll={ this.handleScroll }
        //         >
        //         {this.$slots.default}
        //     </div>
        // )
        let nodes = ([
            wrap,
            <Bar 
             show={ this.barIsShow }
             move={ this.moveX }
             size={ this.barW }></Bar>,
            <Bar 
            vertical
             move={ this.moveY }
             size={ this.barH }></Bar>
        ])
        return h('div',{class:'im-scrollbar'},nodes);
    },
    methods:{
        handleScroll(){
            const wrap = this.wrap;
            
            // *100，是百分比计算,计算出百分比即可
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
        },
        /**
         * 滚动条高度或者宽度，百分比（以父为基础），不是定宽值
         */
        update(){
            const wrap = this.wrap;
            if(!wrap) return;
            let barHPercentage = ((wrap.clientHeight * 100) / wrap.scrollHeight);
            let barWPercentage = ((wrap.clientWidth * 100) / wrap.scrollWidth);
            this.barH = (barHPercentage<100) ?  (barHPercentage+ "%") : '';
            this.barW = (barWPercentage<100) ?  (barWPercentage+ "%") : '';
        },
        /**
         * 当div ref='resize' 宽高发生变化时，更新滚动条
         */
        resizeStatus(){
            let observer = new ResizeObserver(()=>{
                this.update();
            });
            observer.observe(this.$refs.resize);
        },
        /**
         * 鼠标移入
         */
        handleMouseenter(){
            if(this.barIsShow) return;
            this.barIsShow = true;
            console.log('enter');
        },
        /**
         * 鼠标移出
         */
        handleMouseleave(){
            if(!this.barIsShow) return;
            this.barIsShow = false;
            console.log('leave');
        }
    },
    mounted(){
        this.$nextTick(function(){
            this.resizeStatus();
            this.update(); //首次加载时，滚动条计算
        })
    }
}

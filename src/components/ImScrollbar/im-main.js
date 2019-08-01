import Bar from "./im-bar"
export default {
    name:"ImScrollbar",
    data(){
        return {
            moveX:0,
            moveY:0
        }
    },
    computed:{
        wrap(){
            return this.$refs.wrap;
        }
    },
    render(h){
        // const view = h('div',{class:'im-scrollbar-view'},this.$slots.default);
        // const wrap = (
        //     <div class="im-scrollbar-wrap">
        //         {[view]}
        //     </div>
        // )
        // const wrap = h('div',{class:'im-scrollbar-wrap'},this.$slots.default)
        const wrap = (
            <div 
                ref="wrap"
                class="im-scrollbar-wrap"
                onScroll={ this.handleScroll }>
                {this.$slots.default}
            </div>
        )
        let nodes = ([
            wrap,
            <Bar 
             move={ this.moveX }></Bar>,
            <Bar 
            vertical
             move={ this.moveY }></Bar>
        ])
        return h('div',{class:'im-scrollbar'},nodes);
    },
    methods:{
        handleScroll(){
            const wrap = this.wrap;
            
            // *100，是百分比计算
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
        },
        update(){
            const wrap = this.wrap;
            let barH,barW;
            
        }
    },
    mounted(){
        this.$nextTick(this.update);
    }
}

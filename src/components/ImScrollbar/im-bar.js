import {renderThumbStyle,BAR_MAP} from './until'

export default {
    name:"Bar",
    props:{
        // 滚动条方向
        vertical:{
            type:Boolean,
            default:false
        },
        // 滚动条高度或者宽度
        size:{
            type:String,
            default:""
        },
        // 滚动鼠标时移动的距离
        move:{
            type:Number,
            default:0
        },
        show:{
            type:Boolean,
            defalut:true
        }
    },
    data(){
        return{
            cursorDown:false //鼠标拖动滚动条，true，拖动中，false，未拖动
        }
    },
    computed:{
        bar(){
            return  BAR_MAP[this.vertical ? 'v':'h'];
        },
        wrap() {
           return this.$parent.wrap;
        }
    },
    render(h){
        // const nodes = ([
        //     <div 
        //     class={["im-scrollbar-thumb"]}
        //    ></div>
        // ]);
        // return h('div',{class:["im-scrollbar-bar",'im-bar-'+this.barType]},nodes);

        const {size,move,bar,show} = this;
        return (
            <div class={['im-scrollbar-bar','im-bar-'+bar.key]}
                style={ {opacity:( show ? 1:0)} }
                onmousedown={ this.clickTrackHandler }
                >
                <div 
                ref="thumb"
                class="im-scrollbar-thumb"
                onmousedown={ this.clickThumbHandler }
                style={ renderThumbStyle({size,move,bar}) }
                ></div>
            </div>
        )
    },
    methods:{
        clickThumbHandler(e){
            this.startDrag(e);
            this[this.bar.axis] = Math.abs( 
                (
                    e[this.bar.client] - 
                    e.target.getBoundingClientRect()[this.bar.direction] 
                ) 
            );
        },
        startDrag(e){
            e.stopImmediatePropagation();
            this.cursorDown = true;
            this.$emit('changeIsShow',true);
            document.addEventListener('mousemove',this.mouseMoveDocumentHandler);
            document.addEventListener('mouseup',this.mouseUpDocumentHandler);
            document.onselectstart = ()=>false; //禁止选择文本
        },
        clickTrackHandler(e){

            let offset = Math.abs(
                    e[this.bar.client] - 
                    this.$el.getBoundingClientRect()[this.bar.direction]
                );
            let thumbHalf = (this.$refs.thumb[this.bar.offset]/2);

            let percent = (offset-thumbHalf)/this.$el[this.bar.offset];
            // if(percent<0||percent>1){return;}

            this.wrap[this.bar.scroll] = percent*this.wrap[this.bar.scrollSize];
        },
        mouseMoveDocumentHandler(e){
            if(!this.cursorDown) return;
            
            let offset = (
                    e[this.bar.client] - 
                    this.$el.getBoundingClientRect()[this.bar.direction] -
                    this[this.bar.axis]
                );

            let percent = offset/this.$el[this.bar.offset];
            if(percent<0||percent>1){return;}

            this.wrap[this.bar.scroll] = percent*this.wrap[this.bar.scrollSize];
        },
        mouseUpDocumentHandler(){
            this.cursorDown = false;
            this.$emit('changeIsShow',false);
            document.removeEventListener('mousemove',this.mouseMoveDocumentHandler);
            document.onselectstart = null;
        }
    }
}
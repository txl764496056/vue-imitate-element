import {renderThumbStyle,BAR_MAP} from './until'

export default {
    name:"Bar",
    props:{
        vertical:{
            type:Boolean,
            default:false
        },
        size:{
            type:String,
            default:""
        },
        move:{
            type:Number,
            default:0
        },
        show:{
            type:Boolean,
            defalut:true
        }
    },
    computed:{
        bar(){
            return  BAR_MAP[this.vertical ? 'v':'h'];
        }
    },
    render(h){
        // const nodes = ([
        //     <div 
        //     class={["im-scrollbar-thumb"]}
        //    ></div>
        // ]);
        // return h('div',{class:["im-scrollbar-bar",'im-bar-'+this.barType]},nodes);

        const {size,move,bar} = this;
        return (
            <div class={['im-scrollbar-bar','im-bar-'+bar.key]}
                style={ {opacity:(size!=''? 1:0)} }>
                <div 
                class="im-scrollbar-thumb"
                style={ renderThumbStyle({size,move,bar}) }
                ></div>
            </div>
        )
    }
}
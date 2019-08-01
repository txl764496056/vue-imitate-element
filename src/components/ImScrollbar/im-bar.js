
const BAR_MAP = {
    v:{
        axis:'Y'
    },
    h:{
        axis:"X"
    }
}

export default {
    name:"Bar",
    props:{
        vertical:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        barType(){
            return this.vertical ? 'v':'h';
        }
    },
    render(h){
        const nodes = ([
            <div 
            class={["im-scrollbar-thumb"]}
           ></div>
        ]);
        return h('div',{class:["im-scrollbar-bar",'im-bar-'+this.barType]},nodes);
    }
}
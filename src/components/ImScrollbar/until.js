
export const BAR_MAP = {
    v:{
        axis:'Y',
        size:"height",
        key:"v",
        client:'clientY',
        offset:'offsetHeight',
        direction:'top',
        scroll:'scrollTop',
        scrollSize:'scrollHeight'
    },
    h:{
        axis:"X",
        size:"width",
        key:"h",
        client:'clientX',
        offset:'offsetWidth',
        direction:'left',
        scroll:'scrollLeft',
        scrollSize:'scrollWidth'
    }
}

export function renderThumbStyle({size,move,bar}){
    let style = {};
    style[bar.size] = size;
    style.transform = `translate${bar.axis}(${move}%)`;
    return style;
}
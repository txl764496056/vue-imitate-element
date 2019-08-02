
export const BAR_MAP = {
    v:{
        axis:'Y',
        size:"height",
        key:"v",
    },
    h:{
        axis:"X",
        size:"width",
        key:"h"
    }
}

export function renderThumbStyle({size,move,bar}){
    let style = {};
    style[bar.size] = size;
    style.transform = `translate${bar.axis}(${move}%)`;
    return style;
}
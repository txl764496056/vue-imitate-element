
let hiddenTextarea;

const HIDEN_STYLE = `z-index:-1000;opacity:0;position:relative;`

const CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
  ];

// 计算文本行数
function calculateNodeStyle(targetElement){
    
    const style = window.getComputedStyle(targetElement);

    const boxSizing = style.getPropertyValue('box-sizing');

    const paddingSize = (
        parseFloat(style.getPropertyValue('padding-bottom'))+
        parseFloat(style.getPropertyValue('padding-top'))
    );
    
    const borderSize = (
        parseFloat(style.getPropertyValue('border-top'))+
        parseFloat(style.getPropertyValue('border-bottom'))
    );
    
    const contextStyle = CONTEXT_STYLE
    .map((name)=>`${name}:${style.getPropertyValue(name)}`)
    .join(";");

    return {boxSizing,paddingSize,borderSize,contextStyle};

}

export default function textareaHeight(targetElement, minRows = 1 ,maxRows = null){
    // let rows = calculateTextRows(targetElement);
    // let h = targetElement.clientHeight;
    if(!hiddenTextarea){
        hiddenTextarea = document.createElement('textarea');
        document.body.appendChild(hiddenTextarea);
    }
    
    let {
        boxSizing,
        borderSize,
        paddingSize,
        contextStyle
    } = calculateNodeStyle(targetElement);

    hiddenTextarea.setAttribute('style',`${contextStyle};${HIDEN_STYLE}`);
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";

    let height = hiddenTextarea.scrollHeight; //scrollHeight=padding-top+padding-bottom+content(内容高)
    const result = {};

    // 算出实际设置的高度;
    if(boxSizing === 'border-box'){
        height = height + borderSize;
    }else if(boxSizing === 'content-box'){
        height = height - paddingSize;
    }

    hiddenTextarea.value = '';
    let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;//内容高度

    singleRowHeight = singleRowHeight / 2;

    if(minRows!==null){
        let minHeight = singleRowHeight * minRows;
        if(boxSizing === 'border-box'){
            minHeight = minHeight + paddingSize + borderSize;
        }
        height = Math.max(minHeight,height);
        result.minHeight = `${minHeight}px`;
    }

    if(maxRows!==null){
        let maxHeight = singleRowHeight * maxRows;
        if(boxSizing === 'border-box'){
            maxHeight = maxHeight + paddingSize + borderSize;
        }
        height = Math.min(maxHeight,height);
        result.maxHeight = `${maxHeight}px`;
    }

    result.height = `${height}px`;

    hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
    hiddenTextarea = null;
    return result;
}
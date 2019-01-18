var dragged;

function dragstart_handler(event) {
    console.log('start')
    dragged = event.target;
    event.target.style.opacity = .5;

    event.dropEffect = "move";
}

function bindEvent(ele, event, func) {
    if (ele.addEventListener) {
        ele.addEventListener(event, func, false);
    }
    else {
        ele.attachEvent("on" + event, func);
    }
}

/* var draggables = document.getElementsByClassName('draggable');
for (let index = 0; index < draggables.length; index++) {
    const element = draggables[index];

    element.addEventListener('selectstart', function (evt) {
        console.log('selectstart')

        this.dragDrop();
        return false;
    }, false);
} */

bindEvent(document, "dragend", function (event) {
    console.log('dragend')
    // 重置透明度
    event.target.style.opacity = "";
});

/* 放置目标元素时触发事件 */
bindEvent(document, "dragover", function (event) {
    console.log('dragover')
    // 阻止默认动作以启用drop
    event.preventDefault();

    event.dataTransfer.dropEffect = "move"
});

bindEvent(document, "dragenter", function (event) {
    // 当可拖动的元素进入可放置的目标时高亮目标节点
    console.log('dragenter')

    if (canDrop(event.target)) {
        event.target.style.background = "purple";
    } else {
        event.target.style.background = "";
    }
});

bindEvent(document, "dragleave", function (event) {
    console.log('dragleave');
    // 当拖动元素离开可放置目标节点，重置其背景
    event.target.style.background = "";
});

bindEvent(document, "drop", function (event) {
    console.log('drop');

    // 阻止默认动作（如打开一些元素的链接）
    event.preventDefault();
    // 将拖动的元素到所选择的放置目标节点中

    if (canDrop(event.target)) {
        event.target.style.background = "";

        dragged.parentNode.removeChild(dragged);
        if (event.target.tagName == 'TD') {
            event.target.innerHTML = "";
        }
        event.target.appendChild(dragged);
    }
});

function canDrop(target) {
    console.log(target.tagName)
    if (target.tagName != 'TD') {
        return false;
    }

    if (target.innerHTML.indexOf('draggable') !== -1 && target.className.indexOf('draggable-container') == -1) {
        return false;
    }

    return true;
}
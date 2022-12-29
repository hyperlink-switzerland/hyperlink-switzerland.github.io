const element = document.getElementById('horizontalContentScroll');
let isDragging = false;
let currentX;
let initialX;
let xOffset = 0;

element.addEventListener("mousedown", dragStart);
element.addEventListener("mouseup", dragEnd);
element.addEventListener("mousemove", drag);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    isDragging = true;
}

function dragEnd(e) {
    isDragging = false;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        xOffset = currentX;
        element.scrollLeft = -currentX;
    }
    checkXOffset();
}

function horizontalContentLeft() {
    let horizontalContent = document.getElementById('horizontalContentScroll');
    horizontalContent.scrollLeft -= 50;
    xOffset += 50;
    checkXOffset();
}

function horizontalContentRight() {
    let horizontalContent = document.getElementById('horizontalContentScroll');
    horizontalContent.scrollLeft += 50;
    xOffset -= 50;
    checkXOffset();
}

function checkXOffset() {
    let maxScrollLeft = -(element.scrollWidth - element.clientWidth);
    if (xOffset > 0) {
        xOffset = 0;
    }
    if (xOffset < maxScrollLeft) {
        xOffset = maxScrollLeft;
    }
}
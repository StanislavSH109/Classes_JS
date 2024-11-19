const createElement = (tag, className, text = '') => {
    element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}
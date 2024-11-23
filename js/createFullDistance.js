export function createFullDistance(tag, text) {
    const fullDistanceElement = document.querySelector('.full-distance');
    const fullDistanceText = document.createElement(tag);
    fullDistanceText.textContent = `Общее расстояние: ${text} км.`;
    fullDistanceElement.append(fullDistanceText);
    
    return fullDistanceElement;
}
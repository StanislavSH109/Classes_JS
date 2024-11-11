export default class Delivery {
    constructor(name, adress, distance) {
        this.name = name;
        this.adress = adress;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = document.createElement('div');
        this.divElement.classList.add('card');
        this.sectionElement.append(this.divElement);
        
        return this.divElement;
    }

    createTitle(titleName = 'Имя:', titleAdress = 'Адрес', titleDistance = 'Расстояние') {
        this.getCard = document.querySelector('.card');
        this.createTitleDiv = document.createElement('div');
        this.createTitleDiv.classList.add('card__title');

    }
}

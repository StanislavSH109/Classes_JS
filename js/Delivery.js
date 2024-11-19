import { createElement } from './createElement.js';

export default class Delivery {

    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = createElement('div', 'card');
        
        this.titleNameElement = createElement('h2', 'card__title-name', 'Имя: ');
        this.textNameElement = createElement('p', 'card__title-text', this.name);
        
        this.titleAddressElement = createElement('h2', 'card__title-address', 'Адрес: ');
        this.textAddressElement = createElement('p', 'card__title-text', this.address);
        
        this.titleDistanceElement = createElement('h2', 'card__title-distance', 'Расстояние: ');
        this.textDistanceElement = createElement('p', 'card__title-text', `${this.distance} км.`);

        this.sectionElement.append(this.divElement);
        this.divElement.append(this.titleNameElement, this.textNameElement, this.titleAddressElement, this.textAddressElement, this.titleDistanceElement, this.textDistanceElement);
        return this.divElement;
    }

    set updateName(name) {
        if(this.name) {
            this.textNameElement.textContent = name;
        }
    }

    get updateName() {
        return this.textNameElement;
    }

    set updateAddress(address) {
        if(this.address) {
            this.textAddressElement.textContent = address;
        }
    }

    get updateAdress() {
        return this.textAddressElement;
    }

    set updateDistance(distance) {
        if(this.distance){
            this.textDistanceElement.textContent = `${distance} км.`;
        }
    }

    get updateDistance() {
        this.textDistanceElement;
    }

}


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
        this.textAdressElement = createElement('p', 'card__title-text', this.address);
        
        this.titleDistanceElement = createElement('h2', 'card__title-distance', 'Расстояние: ');
        this.textDistanceElement = createElement('p', 'card__title-text', `${this.distance} км.`);

        this.sectionElement.append(this.divElement);
        this.divElement.append(this.titleNameElement, this.textNameElement, this.titleAddressElement, this.textAdressElement, this.titleDistanceElement, this.textDistanceElement);
        return this.divElement;
    }

    // set updateName(name) {
    //     if(this.name) {
    //         this.nameTextElement.textContent = name;
    //     }
    // }

    // get updateName() {
    //     return this.nameTextElement;
    // }

    // set updateAdress(adress) {
    //     if(this.adress) {
    //         this.adressTextElement.textContent = adress;
    //     }
    // }

    // get updateAdress() {
    //     return this.adressTextElement;
    // }

    // set updateDistance(distance) {
    //     if(this.distance){
    //         this.distanceTextElement.textContent = `${distance} км.`;
    //     }
    // }

    // get updateDistance() {
    //     this.distanceTextElement;
    // }

}


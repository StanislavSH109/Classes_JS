import { createElement } from './createElement.js';

export default class Delivery {

    constructor(name, adress, distance) {
        this.name = name;
        this.adress = adress;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = document.createElement('div');

        

        this.sectionElement.append(this.divElement);
        return this.divElement;
    }

    set updateName(name) {
        if(this.name) {
            this.nameTextElement.textContent = name;
        }
    }

    get updateName() {
        return this.nameTextElement;
    }

    set updateAdress(adress) {
        if(this.adress) {
            this.adressTextElement.textContent = adress;
        }
    }

    get updateAdress() {
        return this.adressTextElement;
    }

    set updateDistance(distance) {
        if(this.distance){
            this.distanceTextElement.textContent = `${distance} км.`;
        }
    }

    get updateDistance() {
        this.distanceTextElement;
    }

}


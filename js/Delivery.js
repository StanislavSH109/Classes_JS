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
        
        this.nameElement = document.createElement('h2');
        this.nameElement.textContent = `Имя:\n${this.name}`;
        this.divElement.append(this.nameElement);
       
        this.nameElement = document.createElement('h2');
        this.nameElement.textContent = `Адрес:\n${this.adress}`;
        this.divElement.append(this.nameElement);
       
        this.nameElement = document.createElement('h2');
        this.nameElement.textContent = `Расстояние:\n${this.distance} км.`;
        this.divElement.append(this.nameElement);


        this.sectionElement.append(this.divElement);
        return this.divElement;
    }



}


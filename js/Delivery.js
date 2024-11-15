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
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Имя';
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement.textContent = `${this.name}`);
       
        this.nameElement = document.createElement('h2');
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Адрес:';
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement.textContent = `${this.adress}`);
       
        this.nameElement = document.createElement('h2');
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Расстояние';
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement.textContent = `${this.distance} км.`);


        this.sectionElement.append(this.divElement);
        return this.divElement;
    }

}


export default class Delivery {
    static idCount = 1;

    constructor(name, adress, distance) {
        this.name = name;
        this.adress = adress;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = document.createElement('div');
        this.divElement.id = `${Delivery.idCount}`;
        Delivery.idCount++;

        this.divElement.classList.add('card');
        
        this.nameElement = document.createElement('h2');
        this.nameTextElement = document.createElement('p');
        this.nameElement.textContent = 'Имя';
        this.nameTextElement.textContent = `${this.name}`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.nameTextElement);
       
        this.nameElement = document.createElement('h2');
        this.adressTextElement = document.createElement('p');
        this.nameElement.textContent = 'Адрес';
        this.adressTextElement.textContent = `${this.adress}`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.adressTextElement);
       
        this.nameElement = document.createElement('h2');
        this.distanceTextElement = document.createElement('p');
        this.nameElement.textContent = 'Расстояние';
        this.distanceTextElement.textContent = `${this.distance} км.`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.distanceTextElement);

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

    set align(option) {
        if(this.divElement) {
            this.divElement.style.alignItems = option;
        }
    }

    get align() {
        return this.divElement.style.alignItems || '';
    }
}


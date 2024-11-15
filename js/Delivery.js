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
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Имя';
        this.textElement.textContent = `${this.name}`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement);
       
        this.nameElement = document.createElement('h2');
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Адрес';
        this.textElement.textContent = `${this.adress}`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement);
       
        this.nameElement = document.createElement('h2');
        this.textElement = document.createElement('p');
        this.nameElement.textContent = 'Расстояние';
        this.textElement.textContent = `${this.distance} км.`
        this.divElement.append(this.nameElement);
        this.divElement.append(this.textElement);

        this.sectionElement.append(this.divElement);
        return this.divElement;
    }

    // set updateName(name){
    //     if(this.textElement){
    //         this.cardElement = document.getElementById(`${id}`);
    //         this.cardElement.textElement.textContent = name;
    //     }
    // }

    // get updateName() {
    //     return this.textElement;
    // }

    set align(option) {
        if(this.divElement) {
            this.divElement.style.alignItems = option;
        }
    }

    get align() {
        return this.divElement.style.alignItems || '';
    }
}


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
        
        this.addTitleName = this.createTitle('Имя:', this.name);
        this.addTitleAdress = this.createTitle('Адрес:', this.adress);
        this.addTitleDistance = this.createTitle('Расстояние:', this.distance);
        
        this.sectionElement.append(this.divElement);
        this.divElement.append(this.addTitleName, this.addTitleAdress, this.addTitleDistance);
        
        return this.divElement;
    }

    createTitle(titleName, value) {
        this.getCard = document.querySelector('.card');
        this.createTitleDiv = document.createElement('div');
        this.createTitleDiv.classList.add('card__title');
        this.createTitleH2 = document.createElement('h2');
        this.createTitleH2.textContent = titleName;
        this.createTitleText = document.createElement('p');
        this.createTitleText.textContent = value;
        this.createTitleDiv.append(this.createTitleH2, this.createTitleText);

        return this.createTitleDiv;
    }
}

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
        
        this.addTitleName = this.createTitle('Имя:')
        this.addTitleAdress = this.createTitle('Адрес:');
        this.addTitleDistance = this.createTitle('Расстояние:');
        
        this.sectionElement.append(this.divElement);
        this.divElement.append(this.addTitleName, this.addTitleAdress, this.addTitleDistance);
        
        return this.divElement;
    }

    createTitle(titleName) {
        this.getCard = document.querySelector('.card');
        this.createTitleDiv = document.createElement('div');
        this.createTitleDiv.classList.add('card__title');
        this.createTitleH2 = document.createElement('h2');
        this.createTitleH2.textContent = titleName;

        this.createTitleDiv.append(this.createTitleH2);

        return this.createTitleDiv;
    }

    // set titleName(name) {
    //     this.addTitleName = this.createTitle('Имя:', this.name);
    // }

    set positionText(value) {
        this.createTitleDivAll = document.querySelectorAll('.card__title');
        this.createTitleDivAll.forEach(element => {
            element.style.alignItems = value;
        });
    }

    get positionText() {
        return this.createTitleDiv.style.alignItems;
    }
}

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
        
        this.addTitleName = this.createTitle('Имя:', 'card__title-name')
        this.addTitleAddress = this.createTitle('Адрес:', 'card__title-address');
        this.addTitleDistance = this.createTitle('Расстояние:', 'card__title-distance');
        
        this.sectionElement.append(this.divElement);
        this.divElement.append(this.addTitleName, this.addTitleAddress, this.addTitleDistance);
        
        return this.divElement;
    }

    createTitle(titleName, classAdd) {
        this.getCard = document.querySelector('.card');
        this.createTitleDiv = document.createElement('div');
        this.createTitleDiv.classList.add('card__title', classAdd);
        this.createTitleH2 = document.createElement('h2');
        this.createTitleH2.textContent = titleName;

        this.createTitleDiv.append(this.createTitleH2);

        return this.createTitleDiv;
    }

    createText() {
        this.titleDiv = document.querySelector('.card__title-name');

        if(this.titleDiv.getElementsByTagName('p').length === 0){
            this.titleText = document.createElement('p');
            this.titleDiv.append(this.titleText);
            return this.titleDiv;
        } else {
            return this.titleDiv;
        }
    }

    set titleName(name) {
        if(this.createText())  {
            this.titleDiv.getElementsByTagName('p').textContent = name;
            
        } else {
            console.log('Error');
        }
    }

    get titleName() {
        return this.titleDiv;
    }

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


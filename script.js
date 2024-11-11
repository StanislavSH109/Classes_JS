class Delivery {
    constructor(name, adress, distance) {
        this.name = name;
        this.adress = adress;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = document.createElement('div');
        this.divElement.classList.add('card');
        this.sectionElement.append(this.divElement);
        
        return this.divElement;
    }

    createTitle(titleName = 'Имя:', titleAdress = 'Адрес', titleDistance = 'Расстояние') {
        this.getCard = document.querySelector('.card');
        this.createTitleDiv = document.createElement('div');
        this.createTitleDiv.classList.add('card__title');

        // const 
        // getCard.append(createTitleDiv);

        this.tagP = document.createElement('p');
        this.tagP.textContent = this.name;
        this.createTitleDiv.append(this.tagP);
    }
}

const card1 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card1.getCard();
console.log(card1);
card1.createTitle();


const card2 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card2.getCard();

const card3 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card3.getCard();
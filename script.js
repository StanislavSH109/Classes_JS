class Delivery {
    constructor(name, adress, distance) {
        this.name = name;
        this.adress = adress;
        this.distance = distance;
    }

    getCard() {
        const sectionElement = document.querySelector('.main-section'); 
        const divElement = document.createElement('div');
        divElement.classList.add('card');
        sectionElement.append(divElement);
        
        return divElement;
    }

    createTitle(titleName, titleAdress, titleDistance) {
        const getCard = document.querySelector('.card');
        const createTitleDiv = document.createElement('div');
        getCard.append(createTitleDiv);

        const tagP = document.createElement('p');
        tagP.textContent = this.name;
        createTitleDiv.append(tagP);
    }
}

const card1 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card1.createTitle('Имя:', 'Адрес:', 'Расстояние:');
card1.getCard();

const card2 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card2.getCard();

const card3 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card3.getCard();
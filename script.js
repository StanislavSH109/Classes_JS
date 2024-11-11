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
}

const card1 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card1.getCard();

const card2 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card2.getCard();

const card3 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card3.getCard();
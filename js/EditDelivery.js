import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status = '') {
        super(name, address, distance);
        this.status = status;
    }

    getCard() {
        const card = super.getCard();
        
        if(this.status === 'Доставляется') {
            card.classList.add('card--delivery');
        } else if (this.status === 'Доставлен') {
            card.classList.add('card--delivered');
        } else if (this.status === 'Отменён') {
            card.classList.add('card--canceled');
        }
        
        console.log(this.status);
        return card;
    }
    
    set updateStatus(status) {
        this.status = status;
        const card = this.divElement;

        card.classList.remove('card--delivery', 'card--delivered', 'card--canceled');

        if(this.status === 'Доставляется') {
            card.classList.add('card--delivery');
        } else if (this.status === 'Доставлен') {
            card.classList.add('card--delivered');
        } else if (this.status === 'Отменён') {
            card.classList.add('card--canceled');
        }
    }

    get updateStatus() {
        return this.status;
    }
}
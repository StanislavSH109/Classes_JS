import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status) {
        super(name, address, distance);
        this.status = status;
    }

    getCard() {
        const card = super.getCard();
        if(this.status.value === 'Доставляется') {
            card.classList.add('card--delivery');
        } else if (this.status.value === 'Доставлен') {
            card.classList.add('card--delivered');
        } else if (this.status.value === 'Отменён') {
            card.classList.add('card--canceled');
        }

        
        return card;
    }
}
import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status = '') {
        super(name, address, distance);
        this.status = status;
    }

    getCard() {
        const card = super.getCard(); 

        if(this.status === 'delivery') {
            card.classList.add('card--delivery');
        } else if (this.status === 'delivered') {
            card.classList.add('card--delivered');
        } else if (this.status === 'canceled') {
            card.classList.add('card--canceled');
        }

        return card;
    }

    // set updateStatus(status) {
    //     const selectStatus = document.querySelector('#status-delivery');
        

    //     if(this.status === 'delivery') {
    //         card.classList.add('card--delivery');
    //     } else if (this.status === 'delivered') {
    //         card.classList.add('card--delivered');
    //     } else if (this.status === 'canceled') {
    //         card.classList.add('card--canceled');
    //     }

    //     return card;
    // }

    // get updateStatus() {
    //     return this.status;
    // }
}
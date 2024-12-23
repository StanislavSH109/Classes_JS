import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
    constructor(name, address, distance, status = '') {
        super(name, address, distance);
        this.status = status;
    }

    getCard() {
        const card = super.getCard(); 
        card.classList.add(`card--${this.status}`)

        return card;
    }

    static getTotalDistance(arr) {
        return arr.reduce((acc, currentValue) => {
            if(currentValue.status !== 'canceled') {
                return acc + currentValue.distance;
            }
            return acc;
        }, 0); 
    }
}
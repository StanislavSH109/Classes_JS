import Delivery from "./Delivery.js";
import EditDelivery from "./EditDelivery.js";

const deliveryArray = [
    new Delivery('', ''),
    new EditDelivery('Михаил', 'ул. Воронежская, д. 38/43', 5),
    new EditDelivery('Алексей', 'ул. Солнечный проезд, д. 22', 18)
];


const card1 = deliveryArray[0];
card1.getCard();

const card2 = deliveryArray[1];
card2.getCard();

const card3 = deliveryArray[2];
card3.getCard();

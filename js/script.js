import Delivery from "./Delivery.js";

const deliveryArray = [
    new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
    new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
    new Delivery('Мария', 'ул. Ткачей, д. 43', 11)
];

const card1 = deliveryArray[0];
card1.getCard();
card1.updateName = 'Светлана';

const card2 = deliveryArray[1];
card2.getCard();
card2.updateName = 'Василий';


const card3 = deliveryArray[2];
card3.getCard();
card3.updateName = 'Геннадий';
card3.updateAdress = 'ул. Мира 28, д. 35';
card3.updateDistance = 23;

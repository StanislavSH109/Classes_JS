import Delivery from "./Delivery.js";

const card1 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card1.getCard();
card1.positionText = 'flex-start';
console.log(card1.titleName);

const card2 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card2.getCard();

const card3 = new Delivery('Ольга', 'ул. Вымыслов, д.12', 8);
card3.getCard();
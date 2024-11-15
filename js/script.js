import Delivery from "./Delivery.js";

const deliveryArray = [
    new Delivery('Ольга', 'ул. Вымыслов, д. 12', 8),
    new Delivery('Дмитрий', 'ул. Задачная, д. 7', 3),
    new Delivery('Мария', 'ул. Ткачей, д. 43', 11)
];

deliveryArray.forEach(delivery => {
    const card = delivery;
    card.getCard();
});

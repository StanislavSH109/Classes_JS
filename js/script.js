import EditDelivery from "./EditDelivery.js";
import { createFullDistance } from "./createFullDistance.js";

const deliveryArray = [
    new EditDelivery('Ольга', 'ул. Вершителе д. 23', 3, 'canceled'),
    new EditDelivery('Михаил', 'ул. Воронежская, д. 38/43', 5, 'delivery'),
    new EditDelivery('Алексей', 'ул. Солнечный проезд, д. 22', 18, 'delivered')
];

deliveryArray.forEach(delivery => {
    delivery.getCard();
});


const buttonFullDistance = document.querySelector('.full-distance__btn');
buttonFullDistance.addEventListener('click',  () => {
    const totalDistance = EditDelivery.getTotalDistance(deliveryArray);
    const result = createFullDistance('p', totalDistance);

    return result;
});
import { createElement } from './createElement.js';

export default class Delivery {

    constructor(name, address, distance) {
        this.name = name;
        this.address = address;
        this.distance = distance;
    }

    getCard() {
        this.sectionElement = document.querySelector('.main-section'); 
        this.divElement = createElement('div', 'card');
        
        this.titleNameElement = createElement('h2', 'card__title-name', 'Имя: ');
        this.textNameElement = createElement('p', 'card__title-text', this.name);
        
        this.titleAddressElement = createElement('h2', 'card__title-address', 'Адрес: ');
        this.textAddressElement = createElement('p', 'card__title-text', this.address);
        
        this.titleDistanceElement = createElement('h2', 'card__title-distance', 'Расстояние: ');
        this.textDistanceElement = createElement('p', 'card__title-text', `${this.distance} км.`);

        this.editButton = createElement('button', 'card__btn-edit', 'Изменить');
        this.editButton.addEventListener('click',  () => {
            this.openEditForm();
        });
        
        this.sectionElement.append(this.divElement);
        this.divElement.append(
            this.editButton,
            this.titleNameElement, 
            this.textNameElement, 
            this.titleAddressElement, 
            this.textAddressElement, 
            this.titleDistanceElement, 
            this.textDistanceElement
        );

        return this.divElement;
    }

    openEditForm() {
        const modal = document.querySelector('.modal');
        modal.classList.add('modal--active');

        //Закрытие окна формы
        const closeElement = document.querySelector('.modal__form-close');
        closeElement.addEventListener('click',  () => {
            modal.classList.remove('modal--active');
        });

        //Вносим текущие данные
        const form = document.querySelector('.form');

        form.querySelector('.form__input-name').value = this.name;
        form.querySelector('.form__input-address').value = this.address;
        form.querySelector('.form__input-distance').value = this.distance;
        form.querySelector('#status-delivery').value = this.status || '';

        const statusSelect = form.querySelector('#status-delivery');

        //Сохраняем новые данные
        const saveButton = form.querySelector('.form__btn-save');
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();

            if(!form.checkValidity()) {
                alert('Пожалуйста, заполните все поля формы!');
                return;
            }

            this.updateName = form.querySelector('.form__input-name').value;
            this.updateAddress = form.querySelector('.form__input-address').value;
            this.updateDistance = form.querySelector('.form__input-distance').value;
            this.status = form.querySelector('#status-delivery').value;

            this.divElement.classList.remove('card--delivery', 'card--delivered', 'card--canceled');
            if (this.status === 'delivery') {
                this.divElement.classList.add('card--delivery');
            } else if (this.status === 'delivered') {
                this.divElement.classList.add('card--delivered');
            } else if (this.status === 'canceled') {
                this.divElement.classList.add('card--canceled');
            }

            modal.classList.remove('modal--active');
        });

    }

    set updateName(name) {
        this.name = name;
        this.textNameElement.textContent = name;
    }

    get updateName() {
        return this.name;
    }

    set updateAddress(address) {
        this.address = address;
        this.textAddressElement.textContent = address;
    }

    get updateAddress() {
        return this.address;
    }

    set updateDistance(distance) {
        this.distance = distance;
        this.textDistanceElement.textContent = `${distance} км.`
    }

    get updateDistance() {
       return this.distance;
    }

}


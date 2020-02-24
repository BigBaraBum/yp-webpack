import "../pages/index.css";
import Card from './Card.js';
import API from './API.js';
import CardList from './CardList.js';
import FormValidator from './FormValidator.js';
import Popup from './Popup.js';
import PopupCard from './PopupCard.js';
import UserInfo from './UserInfo.js';
import PopupImage from './PopupImage.js';
import PopupProfile from './PopupProfile.js';


const listPlaces = document.querySelector('.places-list');
const api = new API('cdf51db9-783b-4d27-aa55-42701dc041cc', 'cohort7');
let initialCards = null;
const card = new Card();
const cardList = new CardList(listPlaces, card, api);
cardList.render();
const user = new UserInfo(api);
user.updateUserInfo();
const photoPopup = new PopupImage();
const validation = new FormValidator();
const profilePopup = new PopupProfile(user, validation);
const cardPopup = new PopupCard(cardList, validation);



document.querySelector('.user-info__edit-button').addEventListener('click', function(event) {
    profilePopup.open('popup-profile');
    profilePopup.setEventListeners();
})
document.querySelector('.popup-profile__close').addEventListener('click', function(event) {
    profilePopup.close();
})
document.querySelector('.user-info__button').addEventListener('click', function(event) {
    cardPopup.open('popup-place');
    cardPopup.setEventListeners();
})
document.querySelector('.popup-place__close').addEventListener('click', function(event) {
    cardPopup.close();
})
listPlaces.addEventListener('click', function(event) {
    if (event.target.classList.contains('place-card__image')) {
        photoPopup.add();
        photoPopup.open('popup-image');
    } else if (event.target.classList.contains('place-card__like-icon')) {
        card.like(event);
    } else if (event.target.classList.contains('place-card__delete-icon')) {
        card.remove(listPlaces, event);
    }
})
document.querySelector('.popup-image__close').addEventListener('click', function(event) {
    photoPopup.delete();
    photoPopup.close();
})
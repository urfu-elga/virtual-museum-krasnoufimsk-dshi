const images = document.querySelectorAll('.gallery__image');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupUrl = document.querySelector('.popup__image');

function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeModalOnEsc);
}

function closeModal(event) {
    const popupClose = event.target.closest('.popup');
    popupClose.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeModalOnEsc);
}

function closeModalOnClick(event) {
    if (event.target.classList.contains('popup_is-opened')) {
        closeModal(event);
    }
}

function closeModalOnEsc(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        if (openedPopup) {
            openedPopup.classList.remove('popup_is-opened');
            document.removeEventListener('keydown', closeModalOnEsc);
        }
    }
}

popupCloseButtons.forEach(function(button){
    button.addEventListener('click', closeModal);
});

images.forEach(function(image) {
    image.addEventListener('click', function() {
        imagePopupUrl.src = image.src;
        openModal(imagePopup);
    });
});

imagePopup.addEventListener('click', closeModalOnClick);

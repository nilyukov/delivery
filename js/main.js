const cartButton = document.querySelector("#cart-button");
const authButton = document.querySelector('.button-auth');
const modal = document.querySelector(".modal");
const authModal = document.querySelector('.modal-auth');
const close = document.querySelector(".close");
const authClose = document.querySelector(".close-auth");
const logInForm = document.querySelector('#logInForm');
const logInInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const outButton = document.querySelector('.button-out');

let login =  localStorage.getItem('delivery');

const toggleModal = (modalElement) => {
    modalElement.classList.toggle("is-open");
};

const clickModalHandler = () => {
    toggleModal(modal);
};

const clickAuthModalHandler = () => {
    toggleModal(authModal);
};

const submitLogInHandler = (evt) => {
    evt.preventDefault();
    login = logInInput.value;
    if(login){
      localStorage.setItem('delivery', login);
      toggleModal(authModal);

      authButton.removeEventListener("click", clickAuthModalHandler);
      authClose.removeEventListener("click", clickAuthModalHandler);
      logInForm.removeEventListener('submit', submitLogInHandler);
      logInForm.reset();
      logInInput.style.border = '';
      logInInput.placeholder = '';
    } else {
      logInInput.style.border = '1px solid red';
      logInInput.placeholder = 'Логин пуст.';
    }



    checkAuth();
};

const clickLogOutHandler = () => {
    login = null;
    localStorage.removeItem('delivery');
    checkAuth();

    authButton.style.display = "";
    userName.style.display = "";
    outButton.style.display = "";

    outButton.removeEventListener('click', clickLogOutHandler);
};

const authorized = () => {
    userName.textContent = login;
    authButton.style.display = "none";
    userName.style.display = "inline";
    outButton.style.display = "block";

    outButton.addEventListener('click', clickLogOutHandler);
};

const notAuthorized = () => {
    authButton.addEventListener("click", clickAuthModalHandler);
    authClose.addEventListener("click", clickAuthModalHandler);
    logInForm.addEventListener('submit', submitLogInHandler);
};

const checkAuth = () => {
    if (login) {
        authorized();
    } else {
        notAuthorized();
    }
};


checkAuth();

cartButton.addEventListener("click", clickModalHandler);
close.addEventListener("click", clickModalHandler);



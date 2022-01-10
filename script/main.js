const buttonMoreHistory = document.querySelector("#button_history");
const buttonMoreThanks = document.querySelector("#button_thanks");
const buttonMoreThanksIconMore = document.querySelector(".button_thanks_more_icon");
const buttonMoreThanksIconLess = document.querySelector(".button_thanks_less_icon");
const blockButtonMargin = document.querySelector(".button_history");
const blockMoreThanks = document.querySelector(".column_thanks");
const blockMoreHistory = document.querySelectorAll(".more_history");
const buttonHistory = document.querySelectorAll(".button_history");
const buttonHistoryLess = document.querySelectorAll(".button_history_less");
const buttonHistoryMore = document.querySelectorAll(".button_history_more");
const buttonMoreNow = document.querySelector(".more2");
const blockCardMore = document.querySelector(".more_card");
const buttonLess = document.querySelector(".less");
const cards = document.querySelectorAll(".card_itm");
const modalCardBlock = document.querySelectorAll(".modal");
const close = document.querySelectorAll(".close");
const buttonPayDoc = document.querySelectorAll(".pay_doc");
const madalPay = document.querySelector(".madal_pay");

//відкриття "наклейок"
for (let i = 0; i < 4; i++) {
   cards[i].addEventListener("click", function () {
      modalCardBlock[i].classList.toggle("add");
   });  
}

//хрестик на модальному вікні "наклейок"
for (let i = 0; i < 5; i++){
   close[i].addEventListener("click", function () {
      modalCardBlock[i].classList.toggle("add");
   });
   
};

// скирипт для розгорення історій
buttonMoreHistory.addEventListener("click", moreHistory);

function moreHistory() {
   blockMoreHistory[0].classList.toggle("add");
   buttonMoreHistory.classList.toggle("none");
   blockMoreThanks.classList.remove("add");
}
for (let i = 0; i < 2; i++){
   buttonHistoryMore[i].addEventListener("click", function () {
      blockMoreHistory[i+1].classList.add("add");
      buttonHistoryMore[i].classList.toggle("none");
   });
   
}

// скрипт для Умови внесення пожертви
// buttonPayDoc.addEventListener("click", docPay);
for (let i = 0; i < 4; i++) {
   buttonPayDoc[i].addEventListener("click", function () {
      madalPay.classList.toggle("add");
   });  
}

// buttonPayDoc.addEventListener("click", docPay);
// function docPay() {
//    madalPay.classList.toggle("add");
// }


for (let i = 0; i < 3; i++){
   buttonHistoryLess[i].addEventListener("click", function () {
      blockMoreHistory[i].classList.remove("add");
      buttonMoreHistory.classList.toggle("none");
   });
   
}
//скирипт для подяк
buttonMoreThanks.addEventListener("click", moreThanks);
function moreThanks() {
   blockMoreThanks.classList.toggle("add");
   buttonMoreThanksIconMore.classList.toggle("none");
   buttonMoreThanksIconLess.classList.toggle("addi");
   blockButtonMargin.style.marginBottom = "30px";
   blockMoreHistory[0].classList.remove("add");
   buttonMoreHistory.classList.remove("none");  
}
//більше "наклейок" у розділі ми вже допомогли
buttonMoreNow.addEventListener("click", addCard);

function addCard() {
   blockCardMore.classList.toggle("add");
   buttonMoreNow.classList.toggle("none");
   buttonLess.classList.toggle("add");
}

buttonLess.addEventListener("click", lessCard);

function lessCard() {
   blockCardMore.classList.toggle("add");
   buttonMoreNow.classList.toggle("none");
   buttonLess.classList.toggle("add");
}

//скрип для трансформації меню в хреситк
var menuButton = document.querySelector('.header_manu_s');
var menu = document.querySelector('.header_manu_s_block');
const link = document.querySelectorAll("#menu_link_s");
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('header_manu_s-active');
    menu.classList.toggle('add');
})
for (let i = 0; i < 5; i++){
   link[i].addEventListener("click", function () {
      menuButton.classList.remove('header_manu_s-active');
      menu.classList.remove('add');
   });
};
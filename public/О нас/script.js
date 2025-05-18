
// Получаем элементы для первого модального окна (вопрос)
var questionModal = document.getElementById("question-modal");
var openQuestionModalButton = document.getElementById("open-modal"); // кнопка для первого модального окна
var closeQuestionModalButton = document.getElementById("close-modal"); // крестик для первого модального окна

// Получаем элементы для второго модального окна (заявка)
var requestModal = document.getElementById("request-modal");
var openRequestModalButton = document.getElementById("open-request-modal"); // кнопка для второго модального окна
var closeRequestModalButton = document.getElementById("close-request-modal"); // крестик для второго модального окна

// Получаем элементы для модального окна с контактами
var contactModal = document.getElementById("contact-modal");
var openContactModalButton = document.getElementById("open-contact-modal"); // кнопка для открытия модального окна с контактами
var closeContactModalButton = document.getElementById("close-contact-modal"); // крестик для закрытия модального окна с контактами

// Открыть первое модальное окно при нажатии на кнопку
openQuestionModalButton.onclick = function() {
    questionModal.style.display = "block";
}

// Закрыть первое модальное окно при нажатии на крестик
closeQuestionModalButton.onclick = function() {
    questionModal.style.display = "none";
}

// Открыть второе модальное окно при нажатии на кнопку
openRequestModalButton.onclick = function() {
    requestModal.style.display = "block";
}

// Закрыть второе модальное окно при нажатии на крестик
closeRequestModalButton.onclick = function() {
    requestModal.style.display = "none";
}

// Открыть модальное окно с контактами при нажатии на кнопку
openContactModalButton.onclick = function() {
    contactModal.style.display = "block";
}

// Закрыть модальное окно с контактами при нажатии на крестик
closeContactModalButton.onclick = function() {
    contactModal.style.display = "none";
}

// Закрыть оба модальных окна при клике вне их
window.onclick = function(event) {
    if (event.target == questionModal) {
        questionModal.style.display = "none";
    }
    if (event.target == requestModal) {
        requestModal.style.display = "none";
    }
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}

// Получаем элементы для модального окна заявки
var requestModal = document.getElementById("request-modal");
var openRequestModalButton = document.getElementById("open-request-modal");
var closeRequestModalButton = document.getElementById("close-request-modal");

// Получаем элементы для модального окна консультации
var consultationModal = document.getElementById("consultation-modal");
var openConsultationModalButton = document.getElementById("open-consultation-modal");
var closeConsultationModalButton = document.getElementById("close-consultation-modal");

// Получаем элементы для модального окна замены окна
var windowReplacementModal = document.getElementById("window-replacement-modal");
var openWindowReplacementModalButton = document.getElementById("open-window-replacement-modal");
var closeWindowReplacementModalButton = document.getElementById("close-window-replacement-modal");

// Получаем элементы для модального окна москитной сетки
var antiDustNetModal = document.getElementById("anti-dust-net-modal");
var openAntiDustNetModalButton = document.getElementById("open-anti-dust-net-modal");
var closeAntiDustNetModalButton = document.getElementById("close-anti-dust-net-modal");

// Получаем элементы для модального окна застекления балкона
var balconyGlazingModal = document.getElementById("balcony-glazing-modal");
var openBalconyGlazingModalButton = document.getElementById("open-balcony-glazing-modal");
var closeBalconyGlazingModalButton = document.getElementById("close-balcony-glazing-modal");

// Получаем элементы для модального окна дверной сетки
var doorNetModal = document.getElementById("door-net-modal");
var openDoorNetModalButton = document.getElementById("open-door-net-modal");
var closeDoorNetModalButton = document.getElementById("close-door-net-modal");

// Получаем элементы для модального окна всех услуг
var allServicesModal = document.getElementById("all-services-modal");
var openAllServicesModalButton = document.getElementById("open-all-services-modal");
var closeAllServicesModalButton = document.getElementById("close-all-services-modal");

// Открыть модальное окно заявки
if (openRequestModalButton) {
    openRequestModalButton.onclick = function() {
        requestModal.style.display = "block";
    };
}

// Закрыть модальное окно заявки
if (closeRequestModalButton) {
    closeRequestModalButton.onclick = function() {
        requestModal.style.display = "none";
    };
}

// Открыть модальное окно консультации
if (openConsultationModalButton) {
    openConsultationModalButton.onclick = function() {
        consultationModal.style.display = "block";
    };
}

// Закрыть модальное окно консультации
if (closeConsultationModalButton) {
    closeConsultationModalButton.onclick = function() {
        consultationModal.style.display = "none";
    };
}

// Открыть модальное окно замены окна
if (openWindowReplacementModalButton) {
    openWindowReplacementModalButton.onclick = function() {
        windowReplacementModal.style.display = "block";
    };
}

// Закрыть модальное окно замены окна
if (closeWindowReplacementModalButton) {
    closeWindowReplacementModalButton.onclick = function() {
        windowReplacementModal.style.display = "none";
    };
}

// Открыть модальное окно москитной сетки
if (openAntiDustNetModalButton) {
    openAntiDustNetModalButton.onclick = function() {
        antiDustNetModal.style.display = "block";
    };
}

// Закрыть модальное окно москитной сетки
if (closeAntiDustNetModalButton) {
    closeAntiDustNetModalButton.onclick = function() {
        antiDustNetModal.style.display = "none";
    };
}

// Открыть модальное окно застекления балкона
if (openBalconyGlazingModalButton) {
    openBalconyGlazingModalButton.onclick = function() {
        balconyGlazingModal.style.display = "block";
    };
}

// Закрыть модальное окно застекления балкона
if (closeBalconyGlazingModalButton) {
    closeBalconyGlazingModalButton.onclick = function() {
        balconyGlazingModal.style.display = "none";
    };
}

// Открыть модальное окно дверной сетки
if (openDoorNetModalButton) {
    openDoorNetModalButton.onclick = function() {
        doorNetModal.style.display = "block";
    };
}

// Закрыть модальное окно дверной сетки
if (closeDoorNetModalButton) {
    closeDoorNetModalButton.onclick = function() {
        doorNetModal.style.display = "none";
    };
}

// Открыть модальное окно всех услуг
if (openAllServicesModalButton) {
    openAllServicesModalButton.onclick = function() {
        allServicesModal.style.display = "block";
    };
}

// Закрыть модальное окно всех услуг
if (closeAllServicesModalButton) {
    closeAllServicesModalButton.onclick = function() {
        allServicesModal.style.display = "none";
    };
}

// Закрыть все модальные окна при клике вне их
window.onclick = function(event) {
    if (event.target == requestModal) {
        requestModal.style.display = "none";
    }
    if (event.target == consultationModal) {
        consultationModal.style.display = "none";
    }
    if (event.target == windowReplacementModal) {
        windowReplacementModal.style.display = "none";
    }
    if (event.target == antiDustNetModal) {
        antiDustNetModal.style.display = "none";
    }
    if (event.target == balconyGlazingModal) {
        balconyGlazingModal.style.display = "none";
    }
    if (event.target == doorNetModal) {
        doorNetModal.style.display = "none";
    }
    if (event.target == allServicesModal) {
        allServicesModal.style.display = "none";
    }
};
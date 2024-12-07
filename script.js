const result = document.getElementById('result');
const algoritm = document.getElementById('algoritm');
const buttons = document.querySelectorAll('button');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popup-message');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button);
    });
});

function handleButtonClick(button) {
    const buttonText = button.textContent;

    if (buttonText === 'CE') {
        algoritm.value = '';
        result.value = '';
    } else if (buttonText === '=') {
        try {
            const calculationResult = eval(algoritm.value);
            result.value = calculationResult;
            algoritm.value = '';


            showPopup(calculationResult);
        } catch (error) {
            result.value = 'Error';
        }
    } else {
        algoritm.value += buttonText;
    }
}
function showPopup(calculationResult) {
    const messages = {
        4: '¡HOLA MUNDO!',
        3: 'Significa que sos violín',
        5: 'Que mierda calculas pelotudo',
        6: 'En serio necesitas calcularlo?',
        7: 'me mide',
        8: 'El culo te abrocho',
        9: 'El culo te llueve',
        10: 'posta?',
        11: '11cm mide el tracto vaginal promedio',
        12: 'Decís eso y te caen 10 años de cárcel',
        13: '¿Eso querías calcular? ¿No te da vergüenza?',
        14: 'Te felicito, no te sabías esa?',
        15: 'Ni siquiera sabes lo que significa esto',
        16: '¿Estás seguro de que querías saber esto?',
        17: 'La calculadora tiene mejores habilidades sociales que vos',
        18: 'Si con eso no impresiona, ya no sé qué más decirte',
        420: 'Dos calculos más y terminas en las nubes',
        20: 'puto el que lee',
        25: 'creo que dio bien, no sé. No soy matematico',
        0: 'si multiplicas por 0 da 0, media pila',
    };

    const message = messages[calculationResult] || 'Ni idea, no configure este número';

    popupMessage.textContent = message;

    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}



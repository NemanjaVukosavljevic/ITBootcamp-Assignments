import Chatroom from "./chats.js";
import ChatUI from "./ui.js";



// DOM
const messagesDisplayList = document.getElementById(`messagesDisplayList`);
const sendMessageButton = document.getElementById(`sendMessageButton`);
const messageField = document.getElementById(`messageField`);
const updateButton = document.getElementById(`updateButton`);
const updateField = document.getElementById(`updateField`);
const roomNames = document.querySelectorAll(`.roomNames`);

const generalButton = document.getElementById('generalButton');
const jsButton = document.getElementById('jsButton');
const homeworksButton = document.getElementById('homeworksButton');
const testsButton = document.getElementById('testsButton');




// OBJEKTI

const prviChat = new Chatroom(`#js`, `nemanja`);
const drugiChat = new Chatroom(`#general`, `john`);
const treciChat = new Chatroom(`#homeworks`, `roberts`);
const cetvrtiChat = new Chatroom(`#tests`, `max`);
let chatUI = new ChatUI(messagesDisplayList);

// APLICIRANJE

// BUTTONS MARKING

generalButton.classList.add('bg-indigo-600', 'text-white');

generalButton.addEventListener('click', () => {
    setActiveButton(generalButton);
});

jsButton.addEventListener('click', () => {
    setActiveButton(jsButton);
});

homeworksButton.addEventListener('click', () => {
    setActiveButton(homeworksButton);
});

testsButton.addEventListener('click', () => {
    setActiveButton(testsButton);
});

function setActiveButton(clickedButton) {
    generalButton.classList.remove('bg-indigo-600', 'text-white');
    jsButton.classList.remove('bg-indigo-600', 'text-white');
    homeworksButton.classList.remove('bg-indigo-600', 'text-white');
    testsButton.classList.remove('bg-indigo-600', 'text-white');

    clickedButton.classList.add('bg-indigo-600', 'text-white');
}

// CHATS IMPLEMENTATION

let currentUser = drugiChat.username;

drugiChat.getChats(data => {
    chatUI.lista.append(chatUI.templateLI(data.username, data.message, data.created_at, currentUser));
});

roomNames.forEach(element => {
    element.id = element.innerText;

    element.addEventListener(`click`, () => {
        
        
        let imeSobe = element.innerText;
        
        drugiChat.room = imeSobe

        messagesDisplayList.innerHTML = '';

        drugiChat.getChats(data => {
            chatUI.lista.append(chatUI.templateLI(data.username, data.message, data.created_at));
        });
    });
});



sendMessageButton.addEventListener('click', (event) => {
    event.preventDefault();

    let message = messageField.value.trim();

    if (!message) {
        alert(`Ne mozete poslati praznu poruku!`);
    } else {
        drugiChat.addChat(message).then(() => {
            console.log(`Poruka uspesno dodata u bazu podataka!`);
            messageField.value = ''; 
        }).catch(error => {
            console.log(`Desila se greska`, error);
        });
    }
});

updateButton.addEventListener('click', (event) => {
    event.preventDefault();

    let newUsername = updateField.value;
    if (newUsername.length > 2) {
        currentUser = newUsername;
        drugiChat.username = newUsername;
        drugiChat.localStorageSaveUsername();

        const updatedUsernameElement = document.createElement('div');
        updatedUsernameElement.textContent = `Your username has been updated to: ${newUsername}`;
        updatedUsernameElement.className = 'bg-green-500 text-white p-2 rounded-md fixed top-5 left-1/2 -translate-x-1/2 transform transition duration-200';
        document.body.appendChild(updatedUsernameElement);
        setTimeout(() => {
            updatedUsernameElement.remove();
        }, 3000);

        updateField.value = ''; 
    }
});


function updateColor() {
    const colorPicker = document.getElementById('colorPicker');
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
    localStorage.setItem('selectedColor', selectedColor);
  }
  
  const savedColor = localStorage.getItem('selectedColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
  
  const updateColorButton = document.getElementById('updateColorButton');
  updateColorButton.addEventListener('click', updateColor);
  




export {prviChat, drugiChat, treciChat, cetvrtiChat};
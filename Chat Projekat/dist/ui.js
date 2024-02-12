class ChatUI {
    constructor(lista){
        this.lista = lista;
    }

    // setter

    set lista(lista){
        this._lista = lista;
    }

    // getter

    get lista(){
        return this._lista;
    }


    // metode

    templateLI(name, message, time, currentUser) {
        const containerDiv = document.createElement('div');
        containerDiv.className = 'message flex flex-col p-2 my-3 rounded-md min-w-[4rem] bg-purple-500 h-auto max-w-[400px]';
    
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="text-gray-200">${name}:</span> <span class="break-all">${message}</span>`;
    
        const secondListItem = document.createElement('li');
        secondListItem.className = 'text-gray-200 text-sm';
        const formattedTime = this.formatDate(time);
        secondListItem.textContent = formattedTime;
    
        if (name === currentUser) {
            containerDiv.classList.add('self-end', 'bg-purple-500');
        } else {
            containerDiv.classList.add('self-start', 'bg-blue-500');
        }
    
        containerDiv.append(listItem, secondListItem);
    
        return containerDiv;
    }
    
    
    
    
    formatDate(timestamp) {
        if (!timestamp || !timestamp.seconds) {
        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
    
        return `${month}/${day}/${year} ${formattedHours}:${minutes}${meridiem}`;
        }
    
        const date = new Date(timestamp.seconds * 1000);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
    
        return `${month}/${day}/${year} ${formattedHours}:${minutes}${meridiem}`;
    }
    
}


export default ChatUI;
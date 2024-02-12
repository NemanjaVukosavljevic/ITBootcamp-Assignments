


class Chatroom {
    constructor(room, username){
        this.room = room;
        this.localStorageLoadUsername();
        if(!this.username){
            this.username = username || `anonymous`;
        }
        this.chats = db.collection(`chats`);
        this.unsub = false;
    }


    // METHODS

    async addChat(message){
        try {
            await this.chats.add({
                message: message,
                username: this.username,
                room: this.room,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            })
            console.log(`Uspesno dodat chat`);
        } catch(error){
            console.error(`Doslo je do greske prilikom dodavanja chat-a!`)
        }
    }

    getChats(callback) {
        // Unsubscribe from the previous room's snapshot listener if it exists
        if (this.unsub) {
            this.unsub();
        }
        
        // Subscribe to the new room's snapshot listener
        this.unsub = this.chats
            .where(`room`, `==`, this.room)
            .orderBy(`created_at`)
            .onSnapshot(snapshot => {
                console.log(`Promena u bazi`);
        
                snapshot.docChanges().forEach(element => {
                    if (element.type === `added`) {
                        callback(element.doc.data());
                    }
                });
            });
    }
    


    localStorageLoadUsername(){
        const storedUsername = localStorage.getItem("username");
        if(storedUsername){
            this.username = storedUsername;
        }
    }

    localStorageSaveUsername () {
        localStorage.setItem("username", this.username);
    }

    // setteri

    set room(room){
        this._room = room;
        if(this.unsub){
            this.unsub();
        }
    }

    set username(username){
        if(username.length > 2 && username.length < 10 ){
            this._username = username;
        } else {
            alert(`Duzina korisnickog imena mora biti duza od 2 i manja od 10 karaktera!`)
        }
    }

    // getteri

    get room(){
        return this._room;
    }

    get username(){
        return this._username;
    }
}




export default Chatroom;
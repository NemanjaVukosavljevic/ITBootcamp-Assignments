// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let createdList = document.getElementById(`unorderedList`);
let brojacJedan = 1;

for (let i = 1; i <= 10; i++){
    if (i % 2 != 0 ) {
        let createdListItem = document.createElement(`li`);
        createdListItem.innerText = `Element ${brojacJedan}`;
        brojacJedan++;

        createdList.appendChild(createdListItem);
        console.log(`nesto`);

        if (brojacJedan > 10) {
            break;
        }
        
    } else if (i % 2 == 0){
        let createdListItemTwo = document.createElement(`li`);
        createdListItemTwo.innerText = `Element ${brojacJedan}`;
        brojacJedan++;

        let nestedList = document.createElement(`ul`);
        let nestedListItem = document.createElement(`li`);
        nestedListItem.innerText = `Element ${brojacJedan}`;
        brojacJedan++;

        nestedList.appendChild(nestedListItem);
        createdListItemTwo.appendChild(nestedList);

        createdList.appendChild(createdListItemTwo);

        if (brojacJedan > 10) {
            break;
        }
    }

}


// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
// U realizaciji ovog zadatka koristiti for petlju. 


let brojacSpanova = 1;

for (let i = 1; i <= 64; i++){
    if (i % 2 != 0){
        document.write(`<span style="padding: 10px 20px; display: inline-block; margin: 0 0 5px 0;">${brojacSpanova}</span>`);
        brojacSpanova++;
    } else if (i % 2 == 0){
        document.write(`<span style="background-color: black; color: white; padding: 10px 20px; display: inline-block; margin: 0 0 5px 0;">${brojacSpanova}</span>`);
        brojacSpanova++;
        if(i % 8 == 0){
            document.write(`</br>`);
        }
    }
}


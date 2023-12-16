// 1. Zadatak
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let shoppingItems = [`Air Jordan 4 "Fear Pack"`, `Air Jordan 4 "Fire Red"`, `Air Jordan 4 "Military Blue"`];

const pravljenjeListeFunction = () => {
    let createdList = document.createElement(`ul`);
    
    for (let shoppingItem of shoppingItems){
        let createdItem = document.createElement(`li`);
        createdItem.innerText = `${shoppingItem}`;
        createdList.appendChild(createdItem);
    }
    
    document.body.appendChild(createdList);
}

pravljenjeListeFunction();


// 2. Zadatak
// Dat je niz imena košarkaških timova. Prolaskom kroz niz formirati tabelu gde svaki od redova ima ćeliju u kojoj se nalazi naziv tima. 
// Tabelu ispisati u html dokument.

let teamNames = [`"Denver Nuggets"`, `"Los Angeles Lakers"`, `"Miami Heat"`, `"Golden State Warriors"`];

const basketballTableFunction = () => {
    let createdTable = document.createElement(`table`);
    createdTable.style.border = `1px solid black`;

    for (let teamName of teamNames){
        let createdRow = document.createElement(`tr`);
        let createdData = document.createElement(`td`);

        createdData.innerText = `${teamName}`;

        createdRow.appendChild(createdData);
        createdTable.appendChild(createdRow);
    }

    document.body.appendChild(createdTable);
}

basketballTableFunction();


// 3. Zadatak
// Dat je niz stringova čiji su članovi putanje do slika. 
// Prikazati sve slike u html dokumentu, pri čemu su putanje da slika one putanje koje su navedene u nizu.

let pictures = [`https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png`, `https://miro.medium.com/v2/resize:fit:512/1*JEHLmWo6_SrpHPiP4AimIw.png`, `https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png`];

const displayPicsFunction = () => {
    for (let picture of pictures){
        document.write(`<img src="${picture}" style="height: 100px; width: 120px;">`);
    }
}

displayPicsFunction();



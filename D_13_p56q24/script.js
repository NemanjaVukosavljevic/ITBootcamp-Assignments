// Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
// Naziv knige,
// Autora knjige,
// Putanja do sličice,
// Polje – indikator da li je knjiga pročitana ili ne (true ili false).
// Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
// U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
// Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
// Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.

let book1 = {
    name: `The Secret`,
    author: `Rhonda Bryne`,
    url: `https://m.media-amazon.com/images/M/MV5BMGE0OWUyMTktNjNjNi00ZTg0LWE1N2MtMzEzYjdhNjM5M2M5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg`,
    user_has_read: true,
};
let book2 = {
    name: `Meditations`,
    author: `Marcus Aurelius`,
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOniwOsnNV5f7k13_xRDof05DZmXOgiqeLgmgNlxcY-fmBZHP`,
    user_has_read: true,
};
let book3 = {
    name: `Moral Letters to Lucilius`,
    author: `Lucius Annaeus Seneca`,
    url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7gJYimo9agyT1KZemnk270mtZxU-Etm2oKT8zCutXieppifY`,
    user_has_read: false,
};


let books = [book1, book2, book3];

const pageCreationFunction = (array) => {
    let createdTable = document.createElement(`table`);
    let headerRow = document.createElement(`tr`);
    let tableHeaderOne = document.createElement(`th`);
    let tableHeaderTwo = document.createElement(`th`);

    tableHeaderOne.innerText = `Image of the Book`;
    tableHeaderTwo.innerText = `Book name and Author`;
    headerRow.appendChild(tableHeaderOne);
    headerRow.appendChild(tableHeaderTwo);
    createdTable.appendChild(headerRow);
    
    array.forEach(element => {
        let row = document.createElement(`tr`);
        let colOne = document.createElement(`td`);
        let colTwo = document.createElement(`td`);
        let createdImage = document.createElement(`img`);
        createdImage.src = `${element.url}`;
        createdImage.style.width = `100px`;

        colOne.appendChild(createdImage);

        let createdParagraph = document.createElement(`p`);
        createdParagraph.innerText = `${element.name}, ${element.author}`;    

        colTwo.appendChild(createdParagraph);

        if (element.user_has_read == true){
            row.style.color = `blue`;
            row.style.backgroundColor = `green`;
        } else {
            row.style.color = `gray`;
            row.style.backgroundColor = `yellow`;
        }
        
        row.appendChild(colOne);
        row.appendChild(colTwo);
        createdTable.appendChild(row);
    });

    document.body.appendChild(createdTable);
};


pageCreationFunction(books);
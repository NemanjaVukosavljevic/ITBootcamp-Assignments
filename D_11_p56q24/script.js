// 1. Zadatak
// Dat je niz temperatura merenih u jednom gradu u toku 24 časa (svaki element niza može biti decimalan broj, a niz ima najmanje 5 elemenata). 
// Napisati funkciju kojoj se prosleđuje niz temperatura, a funkcija vraća onu vrednost temperature koja je bila najbliža prosečnoj temperaturi toga dana. U izradi zadatka možete koristiti i neke pomoćne funkcije, ali za iteracije nizom koristite for each petlju. 4.3


let temperature = [5, 2.5, 7, 1, 6];

const prosekTemperaturaFunction = (array) => {
    let suma = 0;

    temperature.forEach(element => {
        suma += element;
    })

    return suma / temperature.length;
}

const najblizaProseku = (array) => {
    let razlika = 100000;
    let temp = temperature[0];
    let prosek = prosekTemperaturaFunction(array);

    temperature.forEach(element => {
        if (Math.abs(element - prosek) < razlika){
            razlika = Math.abs(element - prosek);
            temp = element;
        }
    });

    return temp;

}

console.log(najblizaProseku(temperature));


// 2. Zadatak
// Napisati funkciju kojoj se prosleđuje niz temperatura, a funkcija na ekranu ispisuje sve vrednosti iz niza temperatura, svaku u novom redu.
// Ispis izvršiti na sledeći način:
// Maksimalnu vrednost temperature ispisati crvenom bojom
// Minimalnu vrednost temperature ispisati plavom bojom
// Temperature najbližu prosečnoj vrednosti ispisati žutom bojom
// Sve ostale vrednosti ispisati crnom bojom


const ispisTemperaturaFunction = (array) => {

    // max
    
    let maks = array[0];

    array.forEach(element => {
        if (element > maks){
            maks = element;
        }
    });

    // min

    let min = array[0];

    array.forEach(element => {
        if (element < min){
            min = element;
        }
    });

    // najbliza proseku

    let blizuProseka = najblizaProseku(array);
    

    // forEach za ispis

    array.forEach(element => {
        if (element == maks){
            document.write(`<p style="color: red;">Maksimalna temperatura je ${maks}</p>`);
        } else if (element == min){
            document.write(`<p style="color: blue;">Minimalna temperatura je ${min}</p>`);
        } else if (element == blizuProseka){
            document.write(`<p style="color: yellow;">Temperatura najbliza proseku je ${blizuProseka}</p>`);
        } else {
            document.write(`<p>Temperatura je ${element}</p>`)
        }
    });

}



ispisTemperaturaFunction(temperature);




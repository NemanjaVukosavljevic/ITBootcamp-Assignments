import Knjiga from "./knjiga.js";

let knjiga1 = new Knjiga(`Juzni vetar`, `Nemanja Vukosavljevic`, 2023, 601, 8500);
let knjiga2 = new Knjiga(`Pink Panter`, `Olivera Cirkovic`, 2020, 255, 3500);
let knjiga3 = new Knjiga(`Esmeralda 973`, `Aleksandar Bilanovic`, 2017, 150, 1900);

let nizKnjiga = [knjiga1, knjiga2, knjiga3];



nizKnjiga.forEach(element => {
    if (element.dugackoIme()){
        console.log(`Dugacko ime ima ${element.autor}`);
    }

    if (element.skupa() && element.obimna()){
        console.log(`${element.naslov} je i skupa i obimna!`);
    }
});



const ukupnaCena = (array) => {
    let ukupno = 0;
    array.forEach(element => {
        ukupno += element.cena;
    });

    return ukupno;
};


const prosecnaCena = (array) => {
    let ukupno = ukupnaCena(array);

    return ukupno / array.length;
}


const prosecnaStranica = (array) => {
    let ukupnaCenaSvihKnjiga = ukupnaCena(array);

    let brojStranica = 0;

    array.forEach((element) => {
        brojStranica += element.brojStrana;
    });

    return ukupnaCenaSvihKnjiga / brojStranica;
}




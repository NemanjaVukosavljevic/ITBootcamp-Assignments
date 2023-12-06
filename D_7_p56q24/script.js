// 1. Zadatak
// Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve v i n određujete sami. 
// Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
// Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena.

let v = 40;
let n = 15;
let minimum = n * 3;

if (v < minimum){
    let ostatak = minimum - v;
    let ukupnoLjudiOstatak = Math.ceil(ostatak / 3); // racuna se kolika je razlika u m3 pa se ta razlika deli sa 3 jer je dozvoljeno 3 m2 po coveku.
    document.write(`<p style="background-color: red;">NE, Vas lokal mora da napusti ${ukupnoLjudiOstatak} ljudi!</p>`);
} else {
    document.write(`<p style="background-color: green;">DA!</p>`);
}


// 2. Zadatak
// Ministarstvo zdravlja jedne zemlje je povodom pandemije virusa donelo sledeću odredbu:
// "Ukoliko je procenat pozitivno testiranih stanovnika u odnosu na ukupno testirane stanovnike u jednom danu veći od 30%, i ako je pored toga i procenat pozitivno testiranih stanovnika veći od 10% ukupnog broja stanovnika te zemlje, automatski se uvodi vanredno stanje."
// Za proizvoljno unete vrednosti: ukupan broj stanovnika zemlje, ukupan broj testiranih u jednom danu i ukupan broj pozitivno testiranih u tom danu, na ekranu crvenom bojom ispisati VANREDNO STANJE, ukoliko treba automatski uvesti vanredno stanje prema odredbi koju je ministarstvo donelo (u suprotnom ne ispisivati ništa).

let ukupanBrojStanovnika = 1000;
let brojTestiranihDan = 500;
let brojPozitivnihDan = 250;

let procentiPozitivni = (brojPozitivnihDan / brojTestiranihDan) * 100;
let procentiPozitivniUkupno = (brojPozitivnihDan / ukupanBrojStanovnika) * 100;

if (procentiPozitivni > 30 && procentiPozitivniUkupno > 10) {
    document.write(`<p style="color: red;">VANREDNO STANJE</p>`);
}




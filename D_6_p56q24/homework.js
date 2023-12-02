// 1. Zadatak
// Putnik je na put poneo n dinara. Petinu novca je potrošio na autobusku kartu, dok je trećinu ukupne sume novca potrošio na smeštaj. Koliko novca mu je ostalo za preostali boravak?

let putnikDinari = 2500;
let cenaAutobuskeKarte = putnikDinari / 5;
let cenaSmestaja = putnikDinari / 3;

let krajnjaSuma = Math.floor(putnikDinari - cenaAutobuskeKarte - cenaSmestaja);

console.log(krajnjaSuma);

// 2. Zadatak
// Knjiga ima n poglavlja (broj n unosite sami). 
// Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
// Na osnovu dodeljenih vrednosti, na ekranu ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.

let ukupnoPoglavlja = 10;
let poglavljaPrviDan = 2;
let poglavljaDrugiDan = 4;

let preostaloPoglavlja = ukupnoPoglavlja - poglavljaPrviDan - poglavljaDrugiDan;

console.log(preostaloPoglavlja);

// 3. Zadatak
// Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
// Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.
// Pretpostaviti da ni Pera ni Mika nisu dali manje novca nego što je cena džempera koji treba da plate. 

let peraDatiNovac = 3000;
let mikaDatiNovac = 4700;
let cenaDzempera = 2000;

let peraKusur = peraDatiNovac - cenaDzempera;
let mikaKusur = mikaDatiNovac - cenaDzempera;

console.log(peraKusur);
console.log(mikaKusur);


// 1. Zadatak
// Napisati funkciju kojoj se prosleđuje ceo broj i string, a ona ispisuje taj string u paragrafu koji ima prosleđenu veličinu fonta.

const brojStringFunction = (broj, string) => {
    document.write(`<p style="font-size: ${broj}px">${string}</p>`);
}

brojStringFunction(40, `Test string`);

// 2. Zadatak
// Napraviti funkciju kojoj se prosleđuje n ceo broj veći od nule, jedan string koji će predstavljati boju, drugi string koji će takođe predstavljati boju i treći string koji će predstavljati putanju do neke slike.
// Funkcija treba da na stranicu dodaje n puta sliku čiju smo putanju prosledili funkciji. Slikama koje su na parnim pozicijama postavljati okvir koji je obojen prvom prosleđenom bojom, slikama koje su na neparnim pozicijama postavljati okvir koji je obojen drugom prosleđenom bojom.

const pravljenjeSlikaFunciton = (n, bojaStringJedan, bojaStringDva, url) => {
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0){
            document.write(`<img src="${url}" style="border: 2px solid ${bojaStringJedan}; height: 100px; width: 100px">`)
        } else {
            document.write(`<img src="${url}" style="border: 2px solid ${bojaStringDva}; height: 100px; width: 100px">`)
        }
    }
}


pravljenjeSlikaFunciton(6, `red`, `yellow`, `https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png`);
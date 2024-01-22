const request = new XMLHttpRequest();


request.addEventListener(`readystatechange`, () => {
    console.log(request.readyState);
    if (request.readyState == 4 && request.status == 200){
        let data = JSON.parse(request.responseText);
        console.log(data);
        
        let suma = 0;
        let najmanjeTimova = data[0];
        data.forEach(element => {
            suma += element.visina;
            if (element.timovi.length < najmanjeTimova.timovi.length){
                najmanjeTimova = element;
            }

            element.timovi.forEach(secondElement => {
                if (secondElement.includes(`Lakers`)){
                    console.log(`Za Lakerse je igrao ${element.imePrezime}`);
                }
            });
        });

        console.log(`Prosecna visina je ${suma / data.length}`);
        console.log(`Za najmanje timova je igrao ${najmanjeTimova.imePrezime}`);
    } else if (request.readyState == 4){
        console.log(`Primili smo odgovor ali se desila neka greska!`);
    }

});
request.open(`GET`, `./sportisti.json`);
request.send();
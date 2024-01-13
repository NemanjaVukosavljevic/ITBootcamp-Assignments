class Knjiga {
    constructor(naslovArg, autorArg, godIzdanjaArg, brojStranaArg, cenaArg){
        this.naslov = naslovArg;
        this.autor = autorArg;
        this.godIzdanja = godIzdanjaArg;
        this.brojStrana = brojStranaArg;
        this.cena = cenaArg;
    };

    // SETTER

    set naslov(naslovArg){
        this._naslov = naslovArg;
    }

    set autor(autorArg){
        this._autor = autorArg;
    }

    set godIzdanja(godIzdanjaArg){
        this._godIzdanja = godIzdanjaArg;
    }

    set brojStrana(brojStranaArg){
        this._brojStrana = brojStranaArg;
    }

    set cena(cenaArg){
        this._cena = cenaArg;
    }

    // GETTER

    get naslov(){
        return this._naslov;
    };

    get autor(){
        return this._autor;
    }

    get godIzdanja(){
        return this._godIzdanja;
    }

    get brojStrana(){
        return this._brojStrana;
    }

    get cena(){
        return this._cena;
    }

    // METODE

    stampaj(){
        console.log(`Naslov: ${this.naslov}, Autor: ${this.autor}, Godina izdanja: ${this.godIzdanja}, Broj stranica: ${this.brojStrana}, Cena knjige: ${this.cena}`);
    };

    obimna(){
        return (this.brojStrana > 600);
    };

    skupa(){
        return (this.cena > 8000);
    };

    dugackoIme(){
        return (this.autor.length > 18);
    }
    
};


export default Knjiga;
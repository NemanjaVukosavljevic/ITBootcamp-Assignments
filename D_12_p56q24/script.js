let dan = {
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],

    // 1. Zadatak
    // Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.

    tropski_dan: function(){
        for(let i = 0; i < this.temperature.length; i++){
            if (this.temperature[i] < 24) {
                return false;
            }
        };

        return true;
    },

    // 2. Zadatak
    // Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

    neuobicajen_dan: function(){
        for (let i = 0; i < this.temperature.length; i++){
            if ((this.kisa == true && this.temperature[i] < -5) || (this.oblacno == true && this.temperature[i] > 25) || (this.kisa == true && this.oblacno == true && this.sunce == true)){
                return true;
            }
        };

        return false;
    },

};

console.log(dan.tropski_dan());
console.log(dan.neuobicajen_dan());
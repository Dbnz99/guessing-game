class GuessingGame {

    constructor() {}



    setRange(min, max) {
m0=min;
m1=max;

    }



    guess() {
 guess1=((m0+m1)%+m0+m1)/2;
if (guess1<this) {
    lower();
}
        if (guess1<this){
            greater();
        }

    }



    lower() {
m1=guess1;


    }



    greater() {

m0=guess1;

    }

}



module.exports = GuessingGame;

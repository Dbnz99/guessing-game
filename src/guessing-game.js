class GuessingGame {
 var min0;
 var max0;   
 constructor() {}  
   setRange(min, max) {

 min0=min; max0=max;   

  } 
  guess() {
 return ((minnow+maxnow)%2+minnow+maxnow)/2; 
 }       
lower() { 

 max0=guess();   
  }  
    greater() { 
 min0=guess();
}

}

module.exports = GuessingGame;

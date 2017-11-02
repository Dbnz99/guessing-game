class GuessingGame {
 var min;
 var max;   
 constructor() {}  
   setRange(min1, max1) {

 min=min1; max=max1;   

  } 
  guess() {
 return ((minnow+maxnow)%2+minnow+maxnow)/2; 
 }       
lower() { 

 max=guess();   
  }  
    greater() { 
 min=guess();
}

}

module.exports = GuessingGame;

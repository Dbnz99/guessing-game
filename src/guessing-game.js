class GuessingGame {
 var min;
 var max;   
 constructor() {}  
   setRange(min1, max1) {

 min=min1; max=max1;   

  } 
  guess() {
 return ((min0+max0)%2+min0+max0)/2; 
 }       
lower() { 

 max=guess();   
  }  
    greater() { 
 min=guess();
}

}

module.exports = GuessingGame;

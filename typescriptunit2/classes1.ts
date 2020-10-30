class car {
   protected num : number ;
    constructor (num:number){
        this.num = num ;
    }

    numname() {
        
        console.log(this.num);
    }
}

class van extends car {
    printNum (){
    console.log(this.num*2);
    }
}

var lexus = new car(1);
var mercy = new van (1);
//console.log(lexus);
//console.log(lexus.num);
console.log(mercy.printNum());
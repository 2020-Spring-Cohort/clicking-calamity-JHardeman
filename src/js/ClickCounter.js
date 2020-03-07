class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        // this.compounderCount = 0;
        // this.compounderCost = 10;
    }

    countClick() {
        this.clickCount++;
    }

    displayclickCount(){
        return this.clickCount;
    }

    getCompanionCount(){
        return this.companionCount;
    }
 

    buyCompanion(){
        if (this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost;
            this.companionCount++;
          
        }
    }

       companionCost(){
        if(this.clickCount >= this.companionCost){
            this.clickCount -= this.companionCost;
            this.companionCost += Math.floor((this.companionCost * 1.1)); 
        }
            
    }

  }
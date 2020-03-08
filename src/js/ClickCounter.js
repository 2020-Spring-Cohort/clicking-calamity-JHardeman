class ClickCount {
    constructor() {
        this.clickCount = 0;
        // this.clickValue = 1;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
    }

    countClick() {
        this.clickCount++;
    }

    displayClickCount(){
        return this.clickCount;
    }

    // getclickValue(){
    //     return this.clickValue;
    // }

    getCompanionCount(){
        return this.companionCount;
    }

    getCompanionCost(){
        return this.companionCost;
    } 

    getCompounderCount(){
        return this.compounderCount;
    }

    getCompounderCost(){
        return this.compounderCost
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

    buyCompounder(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCount++;
        }
    }

    compounderCost(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCost += Math.floor((this.compounderCost * 1.1));
        }
    }

  }
class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
        this.compounderCount = 0;
        this.compounderCost = 10;
        this.clickValue = 1;
   
    }

    countClick() {
        this.clickCount++;
    }

    displayClickCount(){
        return this.clickCount;
    }

    getClickValue(){
        return this.clickValue;
    }

    getCompanionCount(){
        return this.companionCount;
    }

    getCompanionCost(){
        return this.companionCost;
    } 

    getCompounderCount(){
        return this.compounderCount;
    }

    getCompoundedClickCount(){
        return this.getcompoundedClickCount;
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
            this.clickValue = 1.2;
        }
    }

    compounderCost(){
        if(this.clickCount >= this.compounderCost){
            this.clickCount -= this.compounderCost;
            this.compounderCost += Math.floor((this.compounderCost * 1.1));
        }
    }

    getCompoundedClickValue(){
        this.clickValue = Math.pow(1.2, this.getCompoundedClickCount());
    }



    // Math.pow(1.2, compounderCount)


  }
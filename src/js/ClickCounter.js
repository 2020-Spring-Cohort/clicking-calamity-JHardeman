class ClickCount {
    constructor() {
        this.clickCount = 0;
        this.companionCount = 0;
        this.companionCost = 100;
    }

    countClick() {
        this.clickCount++;
    }

    getCompanionCount(){
        return 0;
    }


    buyCompanion(){
        if(this.clickCount >= this.companionCost)
            return this.clickCount -= this.companionCost;
    }



}
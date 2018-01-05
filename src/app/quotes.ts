export class Quotes {
    public showRatings:boolean;
    constructor(public id: number, public name: string,public rating: string,public completeDate:Date){
        this.showRatings=false
    }
}


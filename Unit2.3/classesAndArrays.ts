class Bird {
    //parameters
    name: string; 
    canFly: boolean; 
    hasFeathers: boolean = true; 
    //constructor
    constructor(name:string, canFly: boolean) {
        this.name = name; 
        this.canFly = canFly; 
    }
    //methods
    flapWings() {
        if(this.canFly)
        console.log(`${this.name} flaps its wings and takes off into the sunset how romantic`); 
        else 
        console.log(`${this.name} is a flightless bird dont rub it in`); 
    }; 
}; 

let birds: Array<Bird> = [
    new Bird("Toucan", true), 
    new Bird("Penguin", false), 
    new Bird("Dove", true), 
    new Bird("Emu", false)
]; 

birds.forEach((item:Bird) => {
    item.flapWings()
});
import { twoReview } from "./reviewPage";
const two = new twoReview(); 

class Intern {
    name: string; 
    phone: number; 
    title: string; 

    constructor(name:string, phone: number, title: string){
        this.name= name; 
        this.phone = phone; 
        this.title = title; 
    }; 
}; 

let newInterns: Array<Intern> = [
    new Intern("Noel", 8018018801, "Host"), 
    new Intern("Prue", 8018018801, "Judge"),
    new Intern("Matt", 8018018801, "Host"),
    new Intern("Paul", 8018018801, "Handshake Master")
];

let addInterns = async (newInterns) => {
    await two.click(two.addEm); 
    await two.click(two.newEm); 
    await two.setInput(two.namInp, newInterns.name); 
    await two.setInput(two.phoInp, newInterns.phone); 
    await two.setInput(two.titleInp, newInterns.title); 
    await two.click(two.saveBtn); 
    await two.driver.sleep(3000); 
};

test('can add the bake off crew',async () => {
    await two.navigate(); 
    await two.getElement(two.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await two.driver.quit(); 
})
function getSpecials(weekDay: string): string {
    switch(weekDay){
        case "Monday":
            return "Cup of Mud Mondays 25% off a cup of mud"
            break;
        case "Tuesday": 
            return "Taco Tuesday 50% off Tacos"
            break; 
        case "Wednesday": 
            return "Waffle Wednesday 30 % off all Waffles"
            break; 
        case "Thursday": 
            return "Boneless Thursdays 50% off all boneless wings"
            break; 
        case "Friday": 
            return "Fajita Fridays 60% off Fajitas"
            break; 
        default: 
        return "Happy weekend 30% off all Ice Cream"
    }
}

console.log(getSpecials("Monday")); 
console.log(getSpecials("Tuesday")); 
console.log(getSpecials("Wednesday")); 
console.log(getSpecials("Thursday")); 
console.log(getSpecials("Friday")); 
console.log(getSpecials("Sunday")); 
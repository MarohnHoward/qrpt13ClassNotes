// List of video games to play for our loop 
var videoGames: Array<string> = [
    "Red Dead Redemption 2",
    "Jedi: Fallen Order", 
    "Jedi: Suvivor", 
    "Call of Duty", 
    "Fortnite", 
    "Mario Kart", 
]; 

for (let i = 0; i < videoGames.length; i++) {
    console.log(`Game to Play: ${i + 1}: ${videoGames[i]}`); 
}

videoGames.forEach((game) => {
    console.log(`You should check out this game to play ${game}`); 
});
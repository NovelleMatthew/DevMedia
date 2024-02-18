/*//admin password
const password = "12345";
let passwordPrompt = "12345";
let result = "";

if (passwordPrompt === password) {
  result = "welcome admin";
} else {
  result = "wrong password";
}

console.log(result);

// leap year checker
let year = 2008;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
*/

let players = {
  user1: { name: "NovellePlayz", level: 1, hp: 100, damage: 20 },
};
let enemies = {
  zombie: { name: "zombie", level: 1, hp: 150, damage: 25 },
  ghost: { name: "ghost", level: 1, hp: 50, damage: 30 },
};

let playerDamageReceive = enemies.ghost.damage;

let playerHp = players.user1.hp - playerDamageReceive;

let levelMultiplier = players.user1.hp && players.user1.damage * 0.25;
console.log(levelMultiplier);

if (playerHp < 1) {
  console.log("YOU ARE DEAD \nDamageReceived:" + playerDamageReceive);
} else {
  console.log("HP:" + playerHp + "\nDamageReceived:" + playerDamageReceive);
}

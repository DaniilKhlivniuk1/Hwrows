const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const myEmail = "superstardana@gmail.com";
const correctEmail = myEmail.includes("@");
if (correctEmail === true) {
  console.log("Все добре");
} else {
  console.log("У вас не має @");
}

console.log("Тут є @?", myEmail.includes("@"))
console.log("Довжина емейла", myEmail.length)

const textMy = "My";
const textName = "name";
const textIs = "is";
const fullName = `${textMy} ${textName} ${textIs}`;
console.log(`${fullName} Daniil`);

const myName = "Bogdan";
const payment = 300;
alert(`Дякуємо, ${myName}! До сплати ${payment} гривень`);
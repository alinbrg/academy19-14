//homework
// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const myString = "example text";
const myNum = 10;
let myUndefined = undefined;
const myBool = true;
const myNull = null;
// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ
// თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.
const myName = "alina",
	myHobby = "coding",
	yearOfBirth = 1996,
	currentYear = 2023;
// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ name ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ hobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.
const result1 =
	" My name is " +
	myName +
	" I am " +
	(currentYear - yearOfBirth) +
	" old and my hobby is " +
	myHobby;
const result2 = ` My name is ${myName} I am ${
	currentYear - yearOfBirth
} old and my hobby is ${myHobby}`;

// console.log(result1);
// console.log(result2);

// const btn = document.querySelector(".btn");

const colors = [
	"blue",
	"black",
	"purple",
	"darkblue",
	"darkgreen",
	"orange",
	"#880e4f",
	"#bf360c",
	"#004d40",
	"#263238",
];

// btn.addEventListener("click", () => {
// 	const randomIndex = Math.floor(Math.random() * 10);

// 	const randomColor = colors[randomIndex];

// 	btn.style.backgroundColor = randomColor;
// 	// btn.innerText = "background-color: " + randomColor;
// 	btn.innerText = `background-color:  ${randomColor}`;
// });

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.1744",
		diffFormated: "0.0121",
		rate: 7.1744,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0121,
		date: "2023-02-23T17:45:01.708Z",
		validFromDate: "2023-02-24T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.7394",
		diffFormated: "0.0222",
		rate: 6.7394,
		name: "სომხური დრამი",
		diff: -0.0222,
		date: "2023-02-23T17:45:01.708Z",
		validFromDate: "2023-02-24T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rateFormated: "1.5501",
		diffFormated: "0.0026",
		rate: 1.5501,
		name: "აზერბაიჯანული მანათი",
		diff: -0.0026,
		date: "2023-02-23T17:45:01.708Z",
		validFromDate: "2023-02-24T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.1708",
		diffFormated: "0.0189",
		rate: 3.1708,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: -0.0189,
		date: "2023-02-23T17:45:01.708Z",
		validFromDate: "2023-02-24T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.6351",
		diffFormated: "0.0045",
		rate: 2.6351,
		name: "აშშ დოლარი",
		diff: -0.0045,
		date: "2023-02-23T17:45:01.708Z",
		validFromDate: "2023-02-24T00:00:00.000Z",
	},
];

//array

const prices = [10, 20, 30, 40];
const myArr = [
	1,
	2,
	"text",
	,
	5,
	true,
	yearOfBirth,
	undefined,
	null,
	"some other text",
];

// console.log(prices);
console.log(myArr);

// console.error("some error");
// console.table(prices);

// console.log(typeof prices);
const myNum1 = 1;

// console.log(myArr[0], myArr["myNum1"], myArr[myNum1]);

const firstEl = myArr[0];

const myArrLength = myArr.length;

const lastEl = myArr[myArrLength - 1];

const lastElAt = myArr.at(-1);

// console.log(lastEl, lastElAt);

myArr.push(100);
// console.log(myArr);

const removedLastEl = myArr.pop();
// console.log(removedLastEl, myArr);

myArr.unshift("first element");
// console.log(myArr);

const removedFirstEl = myArr.shift();
// console.log(removedFirstEl, myArr);

const myArr2 = [[1, 2, 3], [10, 20], [[5, 15, 25], 20, 25], 24, 35];
// console.log(myArr2, myArr2[2][0][0]);

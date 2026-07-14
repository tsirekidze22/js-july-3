// // Switch-ის დახმარებით დაწერეთ მარტივი ლოგიკა ბანკომატისთვის. თავდაპირველად ბალანსი იყოს 1000. prompt ფუნქციის დახმარებით ჰკითხეთ მომხმარებელს რომელი ოპერაციის შესრულება სურს - 1. შეამოწმე ბალანსი, 2. თანხის შეტანა, 3. თანხის გატანა, 4. გამოსვლა. დაგჭირდებათ - let userChoice = prompt("აირჩიე ოპერაცია:\n1 - შეამოწმე ბალანსი\n2 - შეტანა\n3 - გატანა\n4 - გამოსვლა");  \n ის საშუალებით ახალი ხაზიდან დაიწყება ტექსტი. switchის გამოყენებით შეამოწმეთ თითოეული ქეისი, მაგალითად: თუ userChoice არის "2" მაშინ უნდა ვაჩვენოთ ახალი prompt მესიჯი, თუ რა თანხის შეტანა სურს მომხმარებელს. ამ მნიშვნელობას შეინახავთ ცვლადში და გამოიყენებთ იმისათვის რომ ბალანსს დაუმატოთ ეს მნიშვნელობა. ბოლოს alert ის დახმარებით აჩვენებთ განახლებულ ბალანსს. case "2" ის მაგალითი:
// // case "2":
// // let depositAmount = +prompt("შეიყვანეთ დასამატებელი თანხა:");
// // balance += depositAmount;
// // alert("განახლებული ბალანსი: " + balance);
// // break;

// let balance = 1000;
// let response = prompt(
//   "რა ოპერაციის განხორციელება გსურთ? \n 1. ბალანსის შემოწმება. \n 2. თანხის გატანა.\n 3. თანხის შეტანა.\n 4. ოპერაციის დასრულება.",
// );

// // NaN - Not a Number

// switch (response) {
//   case "1":
//     // alert("შენი ამჟამინდელი ბალანსია " + balance + " ლარი");
//     alert(`შენი ამჟამინდელი ბალანსია ${balance} ლარი`);
//     break;
//   case "2":
//     response = +prompt("რა თანხის გატანა გსურთ?");
//     if (Number.isNaN(response)) {
//       alert("გთხოვთ შეიყვანოთ ვალიდური რიცხვი");
//     } else if (response > balance) {
//       alert(
//         `მოთხოვნილი თანხა მეტია არსებულ ბალანსზე. არსებული ბალანსია: ${balance}`,
//       );
//     } else {
//       balance = balance - response;
//       alert(
//         `ოპერაცია წარმატებით შესრულდა. შენი ამჟამინდელი ბალანსია ${balance} ლარი`,
//       );
//     }
//   case "3":
//     response = +prompt("რა თანხის შეტანა გსურთ?");
//     if (Number.isNaN(response) || response < 0) {
//       alert("გთხოვთ შეიყვანოთ ვალიდური რიცხვი");
//     } else {
//       balance = balance + response;
//       alert(
//         `ოპერაცია წარმატებით შესრულდა. შენი ამჟამინდელი ბალანსია ${balance} ლარი`,
//       );
//     }
//     break;
//   default:
//     alert(`ოპერაცია დასრულებულია.`);
// }

// let number = 0;
// number++;
// console.log(number);

// for ("ინიციალიზაცია"; "პირობა"; "განახლება")
// for (let i = 1; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// i = 1 - 1 <= 3 - true
// i = 2 - 2 <= 3 - true
// i = 3 - 3 <= 3 - true
// i = 4 - 4 <= 3 - false

// 1. ინიციალიზაცია
// 2. პირობის შედარება - true/false
// 3. ბლოკში შესვლა, კოდის აღსრულება
// 4. განახლება
// 5. გამეორება

// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let password = prompt("შეიყვანეთ პაროლი:");
// let attemptsLeft = 3;

// while (password !== "123") {
//   password = prompt(`პაროლი არასწორია. დარჩა ${attemptsLeft} ცდა`);
//   attemptsLeft--;
//   if (attemptsLeft === 0) {
//     alert("ყველა მცდელობა გამოყენებულია, სცადეთ 30 წუთში.");
//     break;
//   }
// }

// if (password === "123") {
//   alert("პაროლი სწორია. კეთილი იყოს თქვენი მობრძანება!");
// }

// let password;
// do {
//   password = prompt("შეიყვანეთ სწორი პაროლი:");
// } while (password !== "123");

// let city = "Tbilisi";
// let city2 = "Batumi";

// Array - მასივი
// let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Barcelona"];
// cities[0] = "Gori";
// console.log(cities[2]);

// console.log(cities);

// console.log(cities.indexOf("Barcelona"));

// if (cities.indexOf("Barcelona") === -1) {
//   alert("ბარსელონა სიაში არ არის.");
// }

// let citiesLength = cities.length;
// console.log(citiesLength);
// console.log(cities[citiesLength - 1]);

// for (let i = 0; i < citiesLength; i++) {
//   console.log(cities[i]);
// }

// let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"];
// console.log(cities);
// // push - მასივში ახალი ელემენტის ბოლო ელემენტად ჩამატება
// cities.push("Barcelona");
// console.log(cities);

// // pop - ბოლო ელემენტის წაშლა
// cities.pop();
// console.log(cities);

// // unshift - მასივში ახალი ელემენტის პირველ ელემენტად ჩამატება
// cities.unshift("Paris");
// console.log(cities);

// // shift - პირველი ელემენტის წაშლა
// cities.shift();
// console.log(cities);

// let scores = [10, 15, 65, 100, 75];
// console.log(scores);
// let isPaid = [true, false, false, true];
// console.log(isPaid);
// let myArray = [1, "George", false, null];
// console.log(myArray);

let fruits = ["Mango", "Apple", "Banana", "Orange"];
console.log(fruits);
// slice
// let newArr = fruits.slice(1, 3);
// fruits.slice(1, 3);

// console.log(fruits);
// console.log(newArr);

// splice
fruits.splice(1, 2, "Kiwi");
console.log(fruits);

let student = {
  name: "George",
  age: 27,
  address: "Tbilisi",
};

console.log(student.name);

let studentInfo = `მოსწავლის სახელია ${student.name}, ასაკი: ${student.age} და მისამართია ${student.address}`;
console.log(studentInfo);

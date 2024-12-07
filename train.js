// // 21-dars
// console.log("Jack Ma maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingizga ishlashingizni boshlang", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling, foydasi yo'q", // 60~
//     ""
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5])
//         }, 5000);
        
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log("javob", data);
//     }
// })
// console.log('passed here 1');






// // 22-dars

// console.log("Jack Ma maslahatlari:");
// const list = [
//     "Yaxshi talaba bo'ling", // 0-20
//     "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "O'zingizga ishlashingizni boshlang", // 30-40
//     "Siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling, foydasi yo'q", // 60~
//     ""
// ];

// // CALLBACK functios
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5])
//         }, 1000);
        
//     }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log('ERROR:', err);
//     else {
//         console.log("javob", data);
//     }
// })
// console.log('passed here 1');






// ASYNC functions
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return list[0]
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//             // setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });

//         // setTimeout(function () {
//         //     return list[5];
//         // }, 5000);
        
//     }
// }

// call via then/catch
// console.log('passed here 0');
// maslahatBering(25)
// .then(data => {
//     console.log("javob:", data);
// })
// .catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

// call via asyn/await
// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
// }
// run();

// Tayyor


// // // A-TASK
// console.log("A-TASK:");
// function countLetter(letter, word) {
//     letter = letter.toLowerCase();
//     word = word.toLowerCase();
//     let count = 0;
//     for (let char of word) {
//         if (char === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log("Avtomobilsozlik so'zida nechta O harfi borligini hisoblaymiz:");

// console.log("Javob:",countLetter("o", "avtomobilsozlik"), "ta");

// // DEFINE
// function qoldiqBolish(a, b, callback) {
//     if (b === 5) {
//       callback("Mahraj nolga teng bolmasin!", null);
//     } else {
//       const c = a % b;
//       callback(null, c);
//     }
//   }
  
//   // CALL
//   qoldiqBolish(11, 5, (err, data,) => {
//     if (err) {
//       console.log("ERROR:", err);
//     } else {
//       console.log("data:", data);
//       console.log("ANY LOGIC");
//     }
//   });

// // B-TASK
// console.log("B-TASK:");
// function countDigits(inputString) {
//   let count = 0;
//   for (let char of inputString) {
//       if (!isNaN(char) && char !== ' ') {
//           count++;
//       }
//   }
//   return count;
// }
// const result = countDigits("0b6s8jc7s9b3m1cx8zfq2j1d7");
// console.log("Javob: Raqamlar soni", result, "ta");

// // C-TASK

// function checkContent(str1, str2) {
//   const normalize = (str) => Array.from(new Set(str.split('').sort())).join('');
//   return normalize(str1) === normalize(str2);
// }

// console.log(checkContent("mercedes", "sedemerc")); // true
// console.log(checkContent("muzlatkich", "lchatmuzk")); // false
// console.log(checkContent("onajon", "njonao")); // true

// // D-TASK

// class Shop {
//   constructor(cola, pepsi, aqua) {
//       this.products = {
//           Cola: cola,
//           Pepsi: pepsi,
//           Aqua: aqua,
//       };
//   }
//   getCurrentTime() {
//       const now = new Date();
//       const hours = now.getHours().toString().padStart(2, "0");
//       const minutes = now.getMinutes().toString().padStart(2, "0");
//       return `${hours}:${minutes}`;
//   }
//   qoldiq() {
//       const time = this.getCurrentTime();
//       console.log(
//           `Hozir ${time}da ${this.products.Cola}ta Cola, ${this.products.Pepsi}ta Pepsi va ${this.products.Aqua}ta Aqua mavjud!`
//       );
//       return this.products;
//   }
//   sotish(mahsulot, soni) {
//       if (this.products[mahsulot] === undefined) {
//           console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
//           return;
//       }
//       if (this.products[mahsulot] < soni) {
//           console.log(
//               `Hozirgi vaqtda ${mahsulot}dan yetarlicha mavjud emas. Faqat ${this.products[mahsulot]}ta qolgan!`
//           );
//           return;
//       }
//       this.products[mahsulot] -= soni;
//       console.log(
//           `Hozir ${this.getCurrentTime()}da ${soni}ta ${mahsulot} sotildi!`
//       );
//   }
//   qabul(mahsulot, soni) {
//       if (this.products[mahsulot] === undefined) {
//           console.log(`Bunday mahsulot mavjud emas: ${mahsulot}`);
//           return;
//       }
//       this.products[mahsulot] += soni;
//       console.log(
//           `Hozir ${this.getCurrentTime()}da ${soni}ta ${mahsulot} qabul qilindi!`
//       );
//   }
// }
// const shop = new Shop(8, 1, 9);
// shop.qoldiq();
// shop.sotish("Cola", 3);
// shop.qabul("Aqua", 4);
// shop.qoldiq();

// // E-TASK

// function getReverse(str) {
//     return str.split("").reverse().join("");
// }

// console.log("KEVIN so'zining teskarisi:", getReverse("KEVIN"));
// console.log("BANANA so'zining teskarisi:", getReverse("BANANA"));
// console.log("AVTOMOBIL so'zining teskarisi:", getReverse("AVTOMOBIL"));

// F-TASK

console.log("F-TASK:");
function findDoublers(str) {
    const seen = new Set();
    for (let char of str) {
        if (seen.has(char)) {
            return true;
        }
        seen.add(char);
    }
    return false;
}

console.log("telefon:", findDoublers("telefon"));
console.log("olma:", findDoublers("olma"));
console.log("avtomobil:", findDoublers("avtomobil"));
console.log("muzlatkich:", findDoublers("muzlatkich"));
console.log("monster:", findDoublers("monster"));
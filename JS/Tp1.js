// function Addition(a, b) {
//   return a + b;
// }

// console.log(Addition(5, 3));
// console.log(Addition("5", "3"));

// console.log(typeof 5);
// console.log(typeof "5");

// console.log(5 === "5");

// const getSurface = (b, h) => {
//   return (b * h) / 2;
// };

// console.log(getSurface(6, 3));

// const strReverse = (str) => {
//   return str.split("").reverse().join("");
// };

// console.log(strReverse("BonjourCava"));

/*const minuteToSecond = (m) => {
  if (typeof m === "number") {
    return m * 60;
  } else {
    return "paramater not a number";
  }
};
const hoursToMinuts = (h) => {
  if (typeof h === "number") {
    return h * 60;
  } else {
    return "paramater not a number";
  }
};
const hAndMinToSec = (h, m) => {
  return minuteToSecond(hoursToMinuts(h) + m);
};
console.log(hAndMinToSec(5, 14));*/
/*const strReverse = (str) => {
  let str2 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    str2 += str[i];
  }
  return str2;
};
let x;
const arrayReverse = (t) => {
  //   let revT = [];
  for (let i = t.length - 1; i >= 0; i--) {
    t.push(t[i]);
  }
  return t.splice(t.length / 2, t.length / 2);
};
console.log(strReverse("abcdef"));
console.log(arrayReverse([1, 2, 3, 4]));*/

const subarray = (t1, t2) => {
  let t3 = [];
  let k = 0;
  for (let i = 0; i <= t2.length - 1; i++) {
    let v = false;
    for (let j = 0; j <= t1.length - 1; j++) {
      if (t1[j] == t2[i]) {
        v = true;
      }
    }
    if (!v) {
      t3[k] = t2[i];
      k++;
    }
  }
  return t3;
};
const subarray2 = (t1, t2) => {};
let t2 = [1, 5, 4, 2, 8, 9, 3, 11, 2, 5];
let t1 = [1, 2, 3];
console.log(subarray(t1, t2));

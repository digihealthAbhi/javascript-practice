'use strict';

// let a = 2;
// let b = 2.2;

// // console.log(typeof a);
// // console.log(typeof b);

// a = 'not a number!!';

// // console.log(typeof a);

// const pi = 3.14;

// let str = 'abhi';
// let str2 = "abhi";
// let str3 = `${str} is fast!! ${a + b} ' '' " """ 😂 ॐ ₹ ©`;

// console.log(str, str2, str3);

// console.log('2'+'2'+2);

// console.log('2'+'2');
// console.log('2'-'2');
// console.log('2'*'2');
// console.log('2'/'2');
// console.log('2'%'2');

// const MIFirstPlayer = Number(prompt('Enter first players run'));
// const MISecondPlayer = Number(prompt('Enter second players run'));

// const RCBFirstPlayer = Number(prompt('Enter first players run'));
// const RCBSecondPlayer = Number(prompt('Enter second players run'));

// if((MIFirstPlayer + MISecondPlayer) > (RCBFirstPlayer + RCBSecondPlayer))
// {
//     console.log('MI wins');
//     if(MIFirstPlayer > MISecondPlayer) console.log('MIFirstPlayer is MOTM');
//     else console.log('MISecondPlayer is MOTM');
// }
// else 
// {
//     console.log('RCB wins');
// if(RCBFirstPlayer > RCBSecondPlayer) console.log('RCBFirstPlayer is MOTM');
// else console.log('RCBSecondPlayer is MOTM');
// }

// a = false;

// if (true) b = true;
// if (b) console.log('b is initialized');

function traditional (){
    return 'traditional function no parameter';
}

function traditional (number,name){
    return `traditional function with number : ${number} and name : ${name}`;
}

// console.log(traditional(2,'abhi'));

const expressionFunction = function (){
    let a = 2, b = 3;
    let c = a + b;
    return 'traditional function no parameter';
}

const expressionFunctionWithPara = function (number,name){
    return `expression function with number : ${number} and name : ${name}`;
}

// console.log(expressionFunction());
// console.log(expressionFunctionWithPara(3,'abhishek'));

const arrowFun = (a,b) => {
    console.log(`this is how we can write multiple line`);
    return (a < b) ? `b : ${b} is greater` : `a : ${a} is greater`;
}

console.log('arrow ',arrowFun(10,12));

const expressionfun = function(a,b){
    if(a<b) return `b : ${b} is greater`;
    else return `a : ${a} is greater`;
}
console.log('expression ',expressionfun(10,12));

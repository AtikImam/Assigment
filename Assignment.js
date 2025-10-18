// ১. Variable কি ?
// Variable হলো একটি container যা ডাটা বা মান সংরক্ষণ করার জন্য ব্যবহৃত হয়। এটি একটি নামযুক্ত স্থান যা প্রোগ্রামে বিভিন্ন ধরণের তথ্য সংরক্ষণ করতে পারে, যেমন সংখ্যা, স্ট্রিং, বুলিয়ান ইত্যাদি। ভেরিয়েবল ব্যবহার করে আমরা ডাটাকে সহজে অ্যাক্সেস এবং ম্যানিপুলেট করতে পারি।

// ২. Variable কিভাবে লিখতে হয় ?
// ভেরিয়েবল লিখতে হলে প্রথমে "var", "let" বা "const" কীওয়ার্ড ব্যবহার করতে হয়, তারপর ভেরিয়েবলের নাম দিতে হয় এবং প্রয়োজন হলে মান অ্যাসাইন করতে হয়। উদাহরণস্বরূপ:
let a = 25;
const name = "John";
var isStudent = true;

// ৩. string type variable কি ও কি ভাবে লিখতে হয় ?
// স্ট্রিং টাইপ ভেরিয়েবল হলো এমন একটি ভেরিয়েবল যা অক্ষর, শব্দ বা বাক্য সংরক্ষণ করে। স্ট্রিং ভেরিয়েবল লিখতে হলে ডাবল কোটেশন (" ") বা সিঙ্গেল কোটেশন (' ') ব্যবহার করতে হয়। উদাহরণস্বরূপ:
var greeting = "Hello, World!";
var farewell = 'Goodbye!';  

// ৪. number type variable কি ও কি ভাবে লিখতে হয় ?
// নাম্বার টাইপ ভেরিয়েবল হলো এমন একটি ভেরিয়েবল যা সংখ্যাসূচক মান সংরক্ষণ করে। নাম্বার ভেরিয়েবল লিখতে হলে সরাসরি সংখ্যা ব্যবহার করতে হয়, ডাবল বা সিঙ্গেল কোটেশন ছাড়া। উদাহরণস্বরূপ:
var age = 30;
let price = 99.99;
const year = 2024;

// ৫. Boolan type variable  কি ও কি ভাবে লিখতে হয় ?
// বুলিয়ান টাইপ ভেরিয়েবল হলো এমন একটি ভেরিয়েবল যা শুধুমাত্র দুটি মান ধারণ করতে পারে: true (সত্য) বা false (মিথ্যা)। বুলিয়ান ভেরিয়েবল লিখতে হলে সরাসরি true বা false ব্যবহার করতে হয়। উদাহরণস্বরূপ:
var isAvailable = true;
let isCompleted = false;
const hasAccess = true;

// ৬. toUpperCase() & toLowerCase() এর ব্যাবহার কি ভাবে করতে হয় ? 
// toUpperCase() মেথডটি একটি স্ট্রিংকে বড় হাতের অক্ষরে রূপান্তর করে, এবং toLowerCase() মেথডটি একটি স্ট্রিংকে ছোট হাতের অক্ষরে রূপান্তর করে। উদাহরণস্বরূপ:
var text = "Hello, World!";
var upperText = text.toUpperCase();
console.log(upperText); // "HELLO, WORLD!"

var lowerText = text.toLowerCase();
console.log(lowerText); // "hello, world!"

// ৭. JavaScript এর মোট কয়টি অপারেটর আছে ও কি কি ?
// JavaScript এ মোট ৭টি প্রধান অপারেটর আছে:
// ১. অ্যারিথমেটিক অপারেটর (Arithmetic Operators): +, -, *, /, %, ++, --
// ২. এসাইনমেন্ট অপারেটর (Assignment Operators): =, +=, -=, *=, /=, %=
// ৩. কম্পারিজন অপারেটর (Comparison Operators): ==, ===, !=, !==, >, <, >=, <=
// ৪. লজিক্যাল অপারেটর (Logical Operators): &&, ||, !
// ৫. বিটওয়াইজ অপারেটর (Bitwise Operators): &, |, ^, ~, <<, >>, >>>
// ৬. স্ট্রিং অপারেটর (String Operators): +
// ৭. টাইপ অপারেটর (Type Operators): typeof, instanceof

// ৮. Math.abs() এর ব্যাবহার লিখুন । 
// Math.abs() মেথডটি একটি সংখ্যার পরম মান (absolute value) প্রদান করে, অর্থাৎ এটি সংখ্যাটিকে ধনাত্মক করে দেয়। উদাহরণস্বরূপ:
var negativeNumber = -10;
var absoluteValue = Math.abs(negativeNumber);
console.log(absoluteValue); // 10

// ৯. Math.celi()  এর ব্যাবহার লিখুন । 
// Math.ceil() মেথডটি একটি সংখ্যাকে উপরের দিকে পূর্ণসংখ্যায় রূপান্তর করে, অর্থাৎ এটি সংখ্যাটিকে সবচেয়ে কাছের বড় পূর্ণসংখ্যায় রাউন্ড আপ করে দেয়। উদাহরণস্বরূপ:
var decimalNumber = 4.3;
var roundedUp = Math.ceil(decimalNumber);
console.log(roundedUp); // 5

// ১০. Math.Floor() এর ব্যাবহার লিখুন । 
// Math.floor() মেথডটি একটি সংখ্যাকে নিচের দিকে পূর্ণসংখ্যায় রূপান্তর করে, অর্থাৎ এটি সংখ্যাটিকে সবচেয়ে কাছের ছোট পূর্ণসংখ্যায় রাউন্ড ডাউন করে দেয়। উদাহরণস্বরূপ:
var decimalNumber = 4.7;
var roundedDown = Math.floor(decimalNumber);
console.log(roundedDown); // 4

// ১১. Math.round() এর ব্যাবহার লিখুন ।
// Math.round() মেথডটি একটি সংখ্যাকে সবচেয়ে কাছের পূর্ণসংখ্যায় রাউন্ড করে দেয়। যদি দশমিক অংশ 0.5 বা তার বেশি হয়, তাহলে এটি উপরের দিকে রাউন্ড করে, অন্যথায় নিচের দিকে রাউন্ড করে। উদাহরণস্বরূপ:
var number1 = 4.5;
var rounded1 = Math.round(number1);
console.log(rounded1); // 5

// ১২. Math.random() এর ব্যাবহার লিখুন ।
// Math.random() মেথডটি 0 (সমেত) থেকে 1 (অসমেত) এর মধ্যে একটি র্যান্ডম দশমিক সংখ্যা প্রদান করে। উদাহরণস্বরূপ:
var randomNum = Math.random();
console.log(randomNum); // উদাহরণস্বরূপ: 0.5345678901234567     
// asignment.js - GitHub Link 
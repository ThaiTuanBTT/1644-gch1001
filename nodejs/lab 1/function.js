//1. Hàm không có tham số (parameter) và không có return(giá trị trả về)
function hello() {
    console.log("Hello Greenwich!")
}
hello()

//2.Hàm có tham số và không có return
function sum(a, b) {
    console.log(a + b)
}
sum(20, 30)

//3. Hàm không có tham số nhưng có return.
function year() {
    return 2022
}
console.log("Current year is" + year())
console.log(`Current year is`, year())

//4.Hàm có cả tham sốvà có cả return
var output

function sayHello(name, age) {
    output = ("Hello " + name + ". You are " + age + " year old")
    return output;
    // console.log("Hello " + name)
    // console.log("you are " + age + "year old")
}

function sayHi(name, age) {
    return output;
    // console.log("Hello " + name)
    // console.log("you are " + age + "year old")
}
sayHello("Minh", 40)
sayHi("Hoang", 40)

//var: phạm vi tác dụng là trong toàn bộ file code => global variable 
//let: phạm vi tác dụng chỉ trong 1 đoạn code (function) =>local variabl
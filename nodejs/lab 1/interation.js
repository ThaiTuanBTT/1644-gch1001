//for loop
for (var i = 1; i <= 10; i++) {
    console.log(i)
}

//In ra dãy số từ 1-10 nhưng dừng ở số 5
for (var i = 1; i <= 10; i++) {
    console.log(i)
    if (i == 5) {
        break //stop
    }
}

//In ra dãy số từ 1-10 nhưng bỏ qua số 5
for (var i = 1; i <= 10; i++) {
    if (i == 5) {
        continue //skip
    }
    console.log(i)
}

//do while
let a = 3
do {
    console.log(a)
} while (a <= 10)

//while
let b = 1
while (b <= 10) {
    console.log(b)
    b++
}

var x = 10
    //post-fix operation
    //x++: gán giá trị của x cho y rồi mới tăng x lên 1 đơn vị
var y = x++
    //post-fix operation
    //++x: tăng x lên 1 đơn vị rồi mới gán giá trị của x cho x
    var z = ++x
console.log("x = " + x)
console.log("y = " + y)
console.log("z = " + z)
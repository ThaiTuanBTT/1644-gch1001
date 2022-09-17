var grade = 7.5
if (grade >= 5.0) {
    console.log('Passed')
} else {
    console.log("Failed")
}
let point = 8.5
if (point >= 9.0 && point <= 10) {
    console.log('Grade: Distintion')
} else if (point >= 7.0 && point < 8.0) {
    console.log('Grade: Merit')
} else if (point >= 5.0 && point < 7.0) {
    console.log('Grade: Passed')
} else if (point >= 0 && point < 5.0) {
    console.log('Grade: Failed ')
} else {
    console.log('Invalid grade')
}
let gender = 'm'
if (gender == 'm' || gender == "M") {
    console.log('You are male')
} else if (gender == 'f' || gender == "F") {
    console.log('You are female')
}

var menu = 1
switch (menu) {
    case 1:
        console.log('you have selected menu 1')
        break
    case 2:
        console.log('you have selected menu 2')
        break
    case 3:
        console.log('you have selected menu 3')
        break
    default:
        console.log('Invalid menu')
        break

}
// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
let yourName = "Caroline Konrad"
// Code to update name display
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`


let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = document.querySelector('#qty-total')


let qtyGb = document.querySelector('#qty-gb')
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb += 1
    qtyGb.textContent = gb
    total.textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(){
    if (gb > 0) {
        gb -= 1
        qtyGb.textContent = gb
        total.textContent = gb + cc + sugar
    } else {
        console.log("We're sorry, we can't make negative cookies!")
        gb = 0
    }
})


let qtyCc = document.querySelector('#qty-cc')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    cc += 1
    qtyCc.textContent = cc
    total.textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0) {
        cc -= 1
        qtyCc.textContent = cc
        total.textContent = gb + cc + sugar
    } else {
        console.log("We're sorry, we can't make negative cookies!")
        cc = 0
    }
})


let qtySugar = document.querySelector('#qty-sugar')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar += 1
    qtySugar.textContent = sugar
    total.textContent = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Sugar cookies
sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0) {
        sugar -= 1
        qtySugar.textContent = sugar
        total.textContent = gb + cc + sugar
    } else {
        console.log("We're sorry, we can't make negative cookies!")
        sugar = 0
    }
})
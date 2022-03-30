let displayInput = document.getElementById("input")


let metersleft = document.getElementById("metersDisplayLeft")

let metersRight = document.getElementById("metersDisplayRight")

let feetLeft = document.getElementById("feetDisplayLeft")

let feetRight = document.getElementById("feetDisplayRight")

let litresLeft = document.getElementById("litresDisplayLeft")

let litresRight = document.getElementById("litresDisplayRight")

let gallonsLeft = document.getElementById("gallonsDisplayLeft")

let gallonsRight = document.getElementById("gallonsDisplayRight")

let kilosLeft = document.getElementById("kilosDisplayLeft")

let kilosRight = document.getElementById("kilosDisplayRight")

let poundsLeft = document.getElementById("poundsDisplayLeft")

let poundsRight = document.getElementById("poundsDisplayRight")

let demo = document.getElementById('demo')

let metersConversion = 3.281

let feetConversion = 0.304

let litresConversion = 0.264

let gallonsConversion = 3.785

let kilogramsConversion = 2.205

let poundsConversion = 0.454


// let input = parseInt(displayInput.value)


function functionOne() {

    metersleft.textContent = parseInt(displayInput.value)

    let sum1 = parseInt(displayInput.value) * 3.281

    feetLeft.textContent = sum1

    feetRight.textContent = parseInt(displayInput.value)

    let sum2 = parseInt(displayInput.value) * 0.304

    metersRight.textContent = sum2

    ///////

    litresLeft.textContent = parseInt(displayInput.value)

    let sum3 = parseInt(displayInput.value) * 0.264

    gallonsLeft.textContent = sum3

    litresRight.textContent = parseInt(displayInput.value)

    let sum4 = parseInt(displayInput.value) * 3.785

    gallonsRight.textContent = sum4

    ///////

    kilosLeft.textContent = parseInt(displayInput.value)

    let sum5 = parseInt(displayInput.value) * 2.205

    poundsLeft.textContent = sum5

    kilosRight.textContent = parseInt(displayInput.value)

    let sum6 = parseInt(displayInput.value) * 0.454

    poundsRight.textContent = sum6


    ///////

}
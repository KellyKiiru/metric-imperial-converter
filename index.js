let displayInput = document.getElementById("input")

let displayInput2 = document.getElementById("input2")

let displayInput3 = document.getElementById("input3")

let displayInput4 = document.getElementById("inpu4")

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

///////

let metersleft2 = document.getElementById("metersDisplayLeft2")

let metersRight2 = document.getElementById("metersDisplayRight2")

let feetLeft2 = document.getElementById("feetDisplayLeft2")

let feetRight2 = document.getElementById("feetDisplayRight2")

let litresLeft2 = document.getElementById("litresDisplayLeft2")

let litresRight2 = document.getElementById("litresDisplayRight2")

let gallonsLeft2 = document.getElementById("gallonsDisplayLeft2")

let gallonsRight2 = document.getElementById("gallonsDisplayRight2")

let kilosLeft2 = document.getElementById("kilosDisplayLeft2")

let kilosRight2 = document.getElementById("kilosDisplayRight2")

let poundsLeft2 = document.getElementById("poundsDisplayLeft2")

let poundsRight2 = document.getElementById("poundsDisplayRight2")

let demo = document.getElementById('demo')

let metersConversion = 3.281

let feetConversion = 0.304

let litresConversion = 0.264

let gallonsConversion = 4.546

let kilogramsConversion = 2.205

let poundsConversion = 0.454


// let input = parseInt(displayInput.value)


function functionOne() {

    metersleft.textContent = parseInt(displayInput.value)

    let sum1 = parseInt(displayInput.value) * metersConversion

    feetLeft.textContent = sum1

    feetRight.textContent = parseInt(displayInput.value)

    let sum2 = parseInt(displayInput.value) * feetConversion

    metersRight.textContent = sum2

    ///////

    litresLeft.textContent = parseInt(displayInput.value)

    let sum3 = parseInt(displayInput.value) * litresConversion

    gallonsLeft.textContent = sum3

    gallonsRight.textContent = parseInt(displayInput.value)

    let sum4 = parseInt(displayInput.value) * gallonsConversion

    litresRight.textContent = sum4

    ///////

    kilosLeft.textContent = parseInt(displayInput.value)

    let sum5 = parseInt(displayInput.value) * kilogramsConversion

    poundsLeft.textContent = sum5

    poundsRight.textContent = parseInt(displayInput.value)

    let sum6 = parseInt(displayInput.value) * poundsConversion

    kilosRight.textContent = sum6


    ///////

}

function functionTwo(){

    metersleft2.textContent = parseInt(displayInput2.value)

    let sum7 = parseInt(displayInput2.value) * metersConversion

    feetLeft2.textContent = sum7

    feetRight2.textContent = parseInt(displayInput2.value)

    let sum8 = parseInt(displayInput2.value) * feetConversion

    metersRight2.textContent = sum8

    ///////

    litresLeft2.textContent = parseInt(displayInput2.value)

    let sum9 = parseInt(displayInput2.value) * litresConversion

    gallonsLeft2.textContent = sum9

    gallonsRight2.textContent = parseInt(displayInput2.value)

    let sum10 = parseInt(displayInput2.value) * gallonsConversion

    litresRight2.textContent = sum10

    ///////

    kilosLeft2.textContent = parseInt(displayInput2.value)

    let sum11 = parseInt(displayInput2.value) * kilogramsConversion

    poundsLeft2.textContent = sum11

    poundsRight2.textContent = parseInt(displayInput2.value)

    let sum12 = parseInt(displayInput2.value) * poundsConversion

    kilosRight2.textContent = sum12


    ///////

}
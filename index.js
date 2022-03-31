let displayInput = document.getElementById("input")

let displayInput2 = document.getElementById("input2")

let displayInput3 = document.getElementById("input3")

//////

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

//////

let metersleft3 = document.getElementById("metersDisplayLeft3")

let metersRight3 = document.getElementById("metersDisplayRight3")

let feetLeft3 = document.getElementById("feetDisplayLeft3")

let feetRight3 = document.getElementById("feetDisplayRight3")

let litresLeft3 = document.getElementById("litresDisplayLeft3")

let litresRight3 = document.getElementById("litresDisplayRight3")

let gallonsLeft3 = document.getElementById("gallonsDisplayLeft3")

let gallonsRight3 = document.getElementById("gallonsDisplayRight3")

let kilosLeft3 = document.getElementById("kilosDisplayLeft3")

let kilosRight3 = document.getElementById("kilosDisplayRight3")

let poundsLeft3 = document.getElementById("poundsDisplayLeft3")

let poundsRight3 = document.getElementById("poundsDisplayRight3")

///////

let displayInput4 = document.getElementById("input4")

let metersleft4 = document.getElementById("metersDisplayLeft4")

let metersRight4 = document.getElementById("metersDisplayRight4")

let feetLeft4 = document.getElementById("feetDisplayLeft4")

let feetRight4 = document.getElementById("feetDisplayRight4")

let litresLeft4 = document.getElementById("litresDisplayLeft4")

let litresRight4 = document.getElementById("litresDisplayRight4")

let gallonsLeft4 = document.getElementById("gallonsDisplayLeft4")

let gallonsRight4 = document.getElementById("gallonsDisplayRight4")

let kilosLeft4 = document.getElementById("kilosDisplayLeft4")

let kilosRight4 = document.getElementById("kilosDisplayRight4")

let poundsLeft4 = document.getElementById("poundsDisplayLeft4")

let poundsRight4 = document.getElementById("poundsDisplayRight4")

/////

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

function functionThree(){

    metersleft3.textContent = parseInt(displayInput3.value)

    let sum13 = parseInt(displayInput3.value) * metersConversion

    feetLeft3.textContent = sum13

    feetRight3.textContent = parseInt(displayInput3.value)

    let sum14 = parseInt(displayInput3.value) * feetConversion

    metersRight3.textContent = sum14

    ///////

    litresLeft3.textContent = parseInt(displayInput3.value)

    let sum15 = parseInt(displayInput3.value) * litresConversion

    gallonsLeft3.textContent = sum15

    gallonsRight3.textContent = parseInt(displayInput3.value)

    let sum16 = parseInt(displayInput3.value) * gallonsConversion

    litresRight3.textContent = sum16

    ///////

    kilosLeft3.textContent = parseInt(displayInput3.value)

    let sum17 = parseInt(displayInput3.value) * kilogramsConversion

    poundsLeft3.textContent = sum17

    poundsRight3.textContent = parseInt(displayInput3.value)

    let sum18 = parseInt(displayInput3.value) * poundsConversion

    kilosRight3.textContent = sum18


    ///////
}

function functionFour(){

    metersleft4.textContent = parseInt(displayInput4.value)

    let sum19 = parseInt(displayInput4.value) * metersConversion

    feetLeft4.textContent = sum19

    feetRight4.textContent = parseInt(displayInput4.value)

    let sum20 = parseInt(displayInput4.value) * feetConversion

    metersRight4.textContent = sum20

    ///////

    litresLeft4.textContent = parseInt(displayInput4.value)

    let sum21 = parseInt(displayInput4.value) * litresConversion

    gallonsLeft4.textContent = sum21

    gallonsRight4.textContent = parseInt(displayInput4.value)

    let sum22 = parseInt(displayInput4.value) * gallonsConversion

    litresRight4.textContent = sum22

    ///////

    kilosLeft4.textContent = parseInt(displayInput4.value)

    let sum23 = parseInt(displayInput4.value) * kilogramsConversion

    poundsLeft4.textContent = sum23

    poundsRight4.textContent = parseInt(displayInput4.value)

    let sum24 = parseInt(displayInput4.value) * poundsConversion

    kilosRight4.textContent = sum24

    ///////

}
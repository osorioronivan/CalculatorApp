const txtInput = document.getElementById("input-El")
const txtEqual = document.getElementById("result-El")
const btnOne = document.getElementById("btnOne")
const btnTwo = document.getElementById("btnTwo")
const btnThree = document.getElementById("btnThree")
const btnFour = document.getElementById("btnFour")
const btnFive = document.getElementById("btnFive")
const btnSix = document.getElementById("btnSix")
const btnSeven = document.getElementById("btnSeven")
const btnEight = document.getElementById("btnEight")
const btnNine = document.getElementById("btnNine")
const btnZero = document.getElementById("btnZero")
const btnAdd = document.getElementById("btnAdd")
const btnSubtract = document.getElementById("btnSubtract")
const btnDivide = document.getElementById("btnDivide")
const btnTimes = document.getElementById("btnTimes")
const btnClear = document.getElementById("btnClear")
const btnEqual = document.getElementById("btnEqual")
const btnToggle = document.getElementById("toggle")
const sliderEl = document.getElementById("slider")
let btnContainer = document.getElementById("btn-container")
let Container = document.getElementById("container")
let btnTxtContainer = document.getElementById("textContainer")
txtEqual.textContent = ""
let inputNum = ""
let isEqualClicked = false
const operator = ['+', '-', '÷', 'x']

function checkEqual() {
    if (isEqualClicked) {
        clearTextbox(txtInput)
        isEqualClicked = false
    }
}
// inputNum.push(txtInput.textContent)

btnOne.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "1"
    inputNum += "1"
})

btnTwo.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "2"
    inputNum += "2"
})

btnThree.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "3"
    inputNum += "3"
})

btnFour.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "4"
    inputNum += "4"
})

btnFive.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "5"
    inputNum += "5"
})

btnSix.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "6"
    inputNum += "6"
})

btnSeven.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "7"
    inputNum += "7"
})

btnEight.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "8"
    inputNum += "8"
})

btnNine.addEventListener("click", function () {
    checkEqual()
    txtInput.textContent += "9"
    inputNum += "9"
})

btnZero.addEventListener("click", function () {
    if (txtInput.textContent != "") {
        checkEqual()
        txtInput.textContent += "0"
        inputNum += "0"
    }

})

btnAdd.addEventListener("click", function () {
 
    let numItems = txtInput.textContent.length - 2
    let num = txtInput.textContent[numItems]
    if (txtInput.textContent != "" && !operator.includes(num)) {
        if (txtEqual.textContent != "") {
            inputNum = ""
            txtInput.textContent = ""
            inputNum = txtEqual.textContent
            txtEqual.style.display = "none"
            inputNum += " + "
            txtInput.textContent += inputNum
            isEqualClicked = false
            txtEqual.textContent = ""
        } else {
            checkEqual()
            txtInput.textContent += " + "
            inputNum += " + "
        }
    }
})
btnSubtract.addEventListener("click", function () {
   
    let numItems = txtInput.textContent.length - 2
    let num = txtInput.textContent[numItems]
    if (txtInput.textContent != "" && !operator.includes(num)) {
        if (txtEqual.textContent != "") {
            inputNum = ""
            txtInput.textContent = ""
            inputNum = txtEqual.textContent
            txtEqual.style.display = "none"
            inputNum += " - "
            txtInput.textContent += inputNum
            isEqualClicked = false
            txtEqual.textContent = ""
        } else {
            checkEqual()
            txtInput.textContent += " - "
            inputNum += " - "
        }
    }
})
btnTimes.addEventListener("click", function () {
    
    let numItems = txtInput.textContent.length - 2
    let num = txtInput.textContent[numItems]
    if (txtInput.textContent != "" && !operator.includes(num)) {
        if (txtEqual.textContent != "") {
            inputNum = ""
            txtInput.textContent = ""
            inputNum = txtEqual.textContent
            txtEqual.style.display = "none"
            txtInput.textContent += inputNum + " x "
            inputNum += " * "
            isEqualClicked = false
            txtEqual.textContent = ""
        } else {
            checkEqual()
            txtInput.textContent += " x "
            inputNum += " * "
        }
    }
})

btnDivide.addEventListener("click", function () {
    let numItems = txtInput.textContent.length - 2
    let num = txtInput.textContent[numItems]
    if (txtInput.textContent != "" && !operator.includes(num)) {
        if (txtEqual.textContent != "") {
            inputNum = ""
            txtInput.textContent = ""
            inputNum = txtEqual.textContent
            txtEqual.style.display = "none"
            txtInput.textContent += inputNum + " ÷ "
            inputNum += " / "
            isEqualClicked = false
            txtEqual.textContent = ""
        } else {
            checkEqual()
            txtInput.textContent += " ÷ "
            inputNum += "/"
        }
    }
})

btnClear.addEventListener("click", function () {
    clearTextbox(txtInput)
})

btnEqual.addEventListener("click", function () {
    txtEqual.style.display = "Block"
    txtEqual.textContent = eval(inputNum)
    isEqualClicked = true
})

function clearTextbox() {
    txtInput.textContent = ""
    txtEqual.textContent = ""
    txtEqual.style.display = "none"
    inputNum = ""
}

btnToggle.addEventListener("click", function(){
    if (sliderEl.style.cssFloat === "right"){
        sliderEl.style.cssFloat = "left"
        darkmode()
    }else{
        sliderEl.style.cssFloat = "right"
        lightmode()
    }
})

function lightmode(){
    for (i = 0; i<btnContainer.children.length; i++){
        btnContainer.children[i].classList.add('Light-btn-bg') 
    }
    btnContainer.style.backgroundColor = "#F9F9F9"
    txtInput.classList.add("Light")
   txtEqual.classList.add("Light")
   btnTxtContainer.classList.add("Light")
   Container.classList.add("Light") 

   // btnContainer.classList.add('.Light-btn-bg') 
}
function  darkmode(){
    let btnContainer = document.getElementById("btn-container")
    for (i = 0; i<btnContainer.children.length; i++){
        btnContainer.children[i].classList.remove('Light-btn-bg') 
    }
    btnContainer.style.backgroundColor = "#292D36"
    txtInput.classList.remove("Light")
    txtEqual.classList.remove("Light")
    btnTxtContainer.classList.remove("Light")
    Container.classList.remove("Light") 
   
}


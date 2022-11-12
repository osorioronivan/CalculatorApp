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
txtEqual.textContent = ""
let inputNum = ""
let isEqualClicked = false
const operator = ['+', '-', '÷', 'x']

function checkEqual() {
    txtInput.style.fontSize = "2em"
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
    txtInput.style.fontSize = "2em"
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
        } else {
            checkEqual()
            txtInput.textContent += " + "
            inputNum += " + "
        }
    }
})
btnSubtract.addEventListener("click", function () {
    txtInput.style.fontSize = "2em"
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
        } else {
            checkEqual()
            txtInput.textContent += " - "
            inputNum += " - "
        }
    }
})
btnTimes.addEventListener("click", function () {
    txtInput.style.fontSize = "2em"
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
        } else {
            checkEqual()
            txtInput.textContent += " x "
            inputNum += " * "
        }
    }
})

btnDivide.addEventListener("click", function () {
    txtInput.style.fontSize = "2em"
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
    txtInput.style.fontSize = "1em"
    txtEqual.textContent = eval(inputNum)
    isEqualClicked = true
})

function clearTextbox() {
    txtInput.textContent = ""
    txtEqual.textContent = ""
    txtEqual.style.display = "none"
    inputNum = ""
}
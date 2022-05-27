const jsConfetti = new JSConfetti()
const shareEmoji = ['⬛', '🟩', '⬇️', '⬆️']

buildSearchList()

let guessNumber = 1
let gameComplete = false
let guessLockout = false
let shareResults = []

function buildSearchList() {
    let list = document.getElementById('cars')
    const sortedVehicles = allVehiclesDetails.sort(function(a,b) {
        const bigA = a.name.toUpperCase();
        const bigB = b.name.toUpperCase();
        if(bigA < bigB) {
            return -1;
        }
        if(bigA > bigB) {
            return 1;
        }
        return 0;
    })
    sortedVehicles.forEach(function(item){
        let option = document.createElement('option')
        option.value = item.name
        list.appendChild(option)
     })
}

function submitCheck(event) {
    if(event.key === 'Enter') {
        answerSubmitted()
    }
}

function answerSubmitted() {
    if (gameComplete || guessLockout) {
        return
    }

    guessLockout = true

    // Get the input
    let input = document.getElementById('car-selector').value
    document.getElementById('car-selector').value = ""
    console.log("The user attempted to guess: " + input)
    // Call guessLogics
    let result = makeGuess(input)
    if(result === 'invalid') {
        iqwerty.toast.toast('Please choose a car from the list!');
    } else {
    // Update board
        document.getElementById('row' + guessNumber + 'col0-guess').innerHTML = input;

        carDetails = allVehiclesDetails.filter(obj => { return obj.name === input })[0]

        details1 = document.createElement('p')
        details1.classList.add("details")
        details1.innerHTML = carDetails?.yearOfManufacture || "-"
        let elementOne = document.getElementById('row' + guessNumber + 'col1')
        elementOne.style.animation="spin2 2s"
        elementOne.onanimationend = () => {
            getColourFromResult(document.getElementById('row' + guessNumber + 'col1'), result[0])
            document.getElementById('row' + guessNumber + 'col1').appendChild(details1)
        }

        details2 = document.createElement('p')
        details2.classList.add("details")
        details2.innerHTML = (carDetails?.co2Emissions || "-") + " g/km"
        let elementTwo = document.getElementById('row' + guessNumber + 'col2')
        elementTwo.style.animation="spin2 2s 0.15s"
        elementTwo.onanimationend = () => {
            getColourFromResult(document.getElementById('row' + guessNumber + 'col2'), result[1])
            document.getElementById('row' + guessNumber + 'col2').appendChild(details2)
        }

        details3 = document.createElement('p')
        details3.classList.add("details")
        details3.innerHTML = (carDetails?.cylinderCapacity || "-") + " cc"
        let elementThree = document.getElementById('row' + guessNumber + 'col3')
        elementThree.style.animation="spin2 2s 0.3s"
        elementThree.onanimationend = () => {
            getColourFromResult(document.getElementById('row' + guessNumber + 'col3'), result[2])
            document.getElementById('row' + guessNumber + 'col3').appendChild(details3)
        }

        details4 = document.createElement('p')
        details4.classList.add("details")
        details4.innerHTML = carDetails?.fuelType || "-"
        let elementFour = document.getElementById('row' + guessNumber + 'col4')
        elementFour.style.animation="spin2 2s 0.45s"
        elementFour.onanimationend = () => {
            getColourFromResult(document.getElementById('row' + guessNumber + 'col4'), result[3])
            document.getElementById('row' + guessNumber + 'col4').appendChild(details4)
        }

        details5 = document.createElement('p')
        details5.classList.add("details")
        details5.innerHTML = carDetails?.motFails || "-"
        let elementFive = document.getElementById('row' + guessNumber + 'col5')
        elementFive.style.animation="spin2 2s 0.6s"
        elementFive.onanimationend = () => {
            getColourFromResult(document.getElementById('row' + guessNumber + 'col5'), result[4])
            document.getElementById('row' + guessNumber + 'col5').appendChild(details5)

            guessNumber++
            guessLockout = false

            shareResults.push(result)
            checkWinOrLoss(result)
        }
        }
    }

    function getColourFromResult(element, result) {
        if (result == 0) {
            element.style.backgroundColor = "#797c7e" // No Match
        } else if (result == 1) {
            element.style.backgroundColor = "#79a76b" // Match
        } else if (result == 2) {
            element.style.backgroundColor = "#c6b466" // Lower
            let arrow = document.createElement('div')
            arrow.classList.add("arrow-down")
            element.appendChild(arrow)
        } else if (result == 3) {
            element.style.backgroundColor = "#c6b466" // Higher
            let arrow = document.createElement('div')
            arrow.classList.add("arrow-up")
            element.appendChild(arrow)
    }
}

function checkWinOrLoss(result) {
    if (result.every((el) => el == 1)) {
        gameComplete = true
        document.getElementById('popup-title').innerHTML = "You Won!"
        document.getElementById('popup-correct').innerHTML = vehicleToGuess.name
        document.getElementById('popup').style.display = 'block'
        document.getElementById('opaque').style.display = 'block'
        winSound()
        carfetti()
    } else if (guessNumber > 6) {
        gameComplete = true
        document.getElementById('popup-title').innerHTML = "You Lost :("
        document.getElementById('popup-correct').innerHTML = vehicleToGuess.name
        document.getElementById('popup').style.display = 'block'
        document.getElementById('opaque').style.display = 'block'
        loseSound()
        lossfetti()
    }
}

function carfetti() {
    jsConfetti.addConfetti({
        confettiNumber: 50,
        emojis: ['🏎', '🚌', '🚐', '🚕', '🚙', '🚗', '🚲', '🏍'],
    })
    jsConfetti.addConfetti()
}

function lossfetti() {
    jsConfetti.addConfetti({
        confettiNumber: 50,
        emojis: ['❌'],
    })
}

function share() {
    let indexOfVehicle = allVehiclesDetails.indexOf(allVehiclesDetails.filter(obj => { return obj.name === vehicleToGuess.name })[0])

    let output = "Cardle-" + indexOfVehicle + " " + shareResults.length + "/6" + "\n"

    for (let outValue of shareResults) {
        output += "\n" + shareEmoji[outValue[0]] + shareEmoji[outValue[1]] + shareEmoji[outValue[2]] + shareEmoji[outValue[3]] + shareEmoji[outValue[4]]
    }

    copyTextToClipboard(output)
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!')
        document.getElementById('popup-share-text').style.display = 'block'
    }, function(err) {
        console.error('Async: Could not copy text: ', err)
    });
}

function winSound() {
    let winAudio = new Audio('assets/mixkit-instant-win-2021.wav')
    winAudio.play()
}

function loseSound() {
    let loseAudio = new Audio('assets/fail-trombone-02.mp3')
    loseAudio.play()
}

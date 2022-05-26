const jsConfetti = new JSConfetti()
const shareEmoji = ['⬛', '🟩', '⬇️', '⬆️']

buildSearchList()

let guessNumber = 1
let gameComplete = false
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

function answerSubmitted() {
    if (gameComplete) {
        return
    }

    // Get the input
    let input = document.getElementById('car-selector').value
    document.getElementById('car-selector').value = ""
    console.log("The user attempted to guess: " + input)
    // Call guessLogics
    let result = makeGuess(input)
    // Update board
    document.getElementById('row' + guessNumber + 'col0-guess').innerHTML = input;

    carDetails = allVehiclesDetails.filter(obj => { return obj.name === input })[0]

    getColourFromResult(document.getElementById('row' + guessNumber + 'col1'), result[0])
    details = document.createElement('p')
    details.classList.add("details")
    details.innerHTML = carDetails?.yearOfManufacture || "-"
    document.getElementById('row' + guessNumber + 'col1').appendChild(details)

    getColourFromResult(document.getElementById('row' + guessNumber + 'col2'), result[1])
    details = document.createElement('p')
    details.classList.add("details")
    details.innerHTML = (carDetails?.co2Emissions || "-") + " g/km" 
    document.getElementById('row' + guessNumber + 'col2').appendChild(details)

    getColourFromResult(document.getElementById('row' + guessNumber + 'col3'), result[2])
    details = document.createElement('p')
    details.classList.add("details")
    details.innerHTML = (carDetails?.cylinderCapacity || "-") + " cc"
    document.getElementById('row' + guessNumber + 'col3').appendChild(details)

    getColourFromResult(document.getElementById('row' + guessNumber + 'col4'), result[3])
    details = document.createElement('p')
    details.classList.add("details")
    details.innerHTML = carDetails?.fuelType || "-"
    document.getElementById('row' + guessNumber + 'col4').appendChild(details)

    getColourFromResult(document.getElementById('row' + guessNumber + 'col5'), result[4])
    details = document.createElement('p')
    details.classList.add("details")
    details.innerHTML = carDetails?.motFails || "-"
    document.getElementById('row' + guessNumber + 'col5').appendChild(details)

    guessNumber++

    shareResults.push(result)
    checkWinOrLoss(result)
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
        carfetti()
    } else if (guessNumber > 6) {
        gameComplete = true
        document.getElementById('popup-title').innerHTML = "You Lost :("
        document.getElementById('popup-correct').innerHTML = vehicleToGuess.name
        document.getElementById('popup').style.display = 'block'
        document.getElementById('opaque').style.display = 'block'
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
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text)
        return
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!')
        document.getElementById('popup-share-text').style.display = 'block'
    }, function(err) {
        console.error('Async: Could not copy text: ', err)
    });
}

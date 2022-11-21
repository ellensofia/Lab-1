/**
 * The main function that calls functions eventlisteners and getElementsFromDOM
 */
 function main() {
    addEventlisteners();
    getElementsFromDOM();
}

function getElementsFromDOM() {
    button = document.querySelector('.btn');
    option1 = document.querySelector('.option-1');
    option2 = document.querySelector('.option-2');
    container = document.querySelector('.container');
    input = document.querySelector('#input');
    title = document.querySelector('#title');
    text = document.querySelector('#text');
    video = document.querySelector('#video');
    videoSrc = document.querySelector('#video-src');
    img = document.querySelector('img');
}

function addEventlisteners(){

    getElementsFromDOM();
    
    // Start getUserName function on both click and if the user press enter
    button.addEventListener('click', getUserName);
    input.addEventListener('keypress', function(event) {
        if(event.key === "Enter") {
            console.log("keypress active")
            getUserName();
        }
    });
}

/**
 * Gets input from user and stores it in the variable userName
 * 
 */

function getUserName() {
    // Assign userName the value of inputfield
    userName = input.value;

    // Empty inputfield
    input.value = "";

    // Get elements from DOM and assign value of
    let user = document.getElementById('text');
    let welcomeUser = document.getElementById('title');

    // Change inner text of the text and title elements
    welcomeUser.textContent = "Welcome " + userName;
    user.textContent = "Let's go";

    // Call the function that removes the input field
    removeInputField();
}

/**
 * Adds a invisible class to inputfield and the connected button
 */
function removeInputField() {

    // Remove inputfield
    input.classList.add('invisible');
    button.classList.add('invisible');

    // call changeStartText function in one second
    setTimeout(start, 1000);
}

/**
 * The function that displays optionbuttons and video background 
 * and then calls function updateContentForScene
 */
function start() {
    // Display option buttons
    option1.classList.remove('invisible');
    option2.classList.remove('invisible');
    video.classList.remove('opacity');
    
    updateContentForScene(0)
}

/**
 * @param {number} index is the index number of the array 
 * Function that 
 */

function updateContentForScene(index) {
    loadCommonThings(index);
    loadSpecificThingsForScene(index);
}

function loadCommonThings(index) {

    // Get new copy of getStates array
    const states = getStates();

    title.textContent = states[index].title;
    text.textContent = states[index].message;
    option1.textContent = states[index].option1;
    option2.textContent = states[index].option2;
    video.src = states[index].video;
    img.src = states[index].img;
    console.log(index)
    
    const option1NextState = states[index].option1NextState;
    const option2NextState = states[index].option2NextState;
    
    option1.addEventListener('click', () => updateContentForScene(option1NextState))
    option2.addEventListener('click', () => updateContentForScene(option2NextState))

} 

function loadSpecificThingsForScene(index) {

    if (index == 10 || index == 11 || index == 12) {
        endScene();
    }

    if(index == 9) {
        displayImg();
    }

}

function endScene() {
    console.log("slutscen");
    removeBtns();
    displayImg();
}

// Remove display-none class from images
function displayImg() {
    img.classList.remove('display-none');
}

// Remove option buttons
function removeBtns() {
    option1.classList.add('invisible');
    option2.classList.add('invisible');
}

main();
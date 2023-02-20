/**
 * The main function that calls functions eventlisteners and getElementsFromDOM
 */
 function main() {
    addEventlisteners();
    getElementsFromDOM();
}

/**
 * Get elements from HTML document and assign them variable names
 */
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

/**
 * Connects input field and button to function
 */
function addEventlisteners(){

    getElementsFromDOM();
    
    // Start getUserName function on both click and if the user press enter
    button.addEventListener('click', getUserName);
    input.addEventListener('keypress', function(event) {
        if(event.key === "Enter") {
            getUserName();
        }
    });
}

/**
 * Gets input from user and stores it in the variable userName
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

    // Call start function in one second
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

    // Display video
    video.classList.remove('opacity');
    
    updateContentForScene(0)
}

/**
 * Function that passes the index number from getStates
 * calls commonThingsFunction and loadSpecificThingsForScene.
 * @param {number} index is the index number of the array of states 
 */
function updateContentForScene(index) {
    loadCommonThings(index);
    loadSpecificThingsForScene(index);
}

/**
 * Function that gets a copy of getStates array with the different scenes of the game.
 * Every scene contains a title, text and some form of media (images or video)
 * Most scenes also contains two option buttons that lets the user load a new scene.
 * When the user clicks on a button the updateContentForScene function is called.
 * 
 * @param {Number} index - number of the array
 */
function loadCommonThings(index) {

    // Get new copy of getStates array
    const states = getStates();

    // change the text content of html element connected to variable
    title.textContent = states[index].title;
    text.textContent = states[index].message;
    option1.textContent = states[index].option1;
    option2.textContent = states[index].option2;
    video.src = states[index].video;
    img.src = states[index].img;
    
    // Variable change the value depending on the current index
    const option1NextState = states[index].option1NextState;
    const option2NextState = states[index].option2NextState;

    
    // The option button calls a different function depending on current index
    option1.onclick = () => updateContentForScene(option1NextState);
    option2.onclick = () => updateContentForScene(option2NextState);

} 

/**
 * Function that ether removes option buttons and/or displays image
 * calls displayImg or endScene depending on index number
 * @param {number} index number of the array
 */
function loadSpecificThingsForScene(index) {

    if (index == 10 || index == 11 || index == 12 || index == 13) {
        endScene();
    }

    if(index == 9) {
        displayImg();
    }
}

/**
 * Shows the background image and removes option buttons
 * Calls removeBtn and displayImg
 */
function endScene() {
    removeBtns();
    displayImg();
}

/** 
 * Remove display-none class from images
 */
function displayImg() {
    img.classList.remove('display-none');
}

/** 
 * Add invisible class to option buttons
 */
function removeBtns() {
    option1.classList.add('invisible');
    option2.classList.add('invisible');
}

main();
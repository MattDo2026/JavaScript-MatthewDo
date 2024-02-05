// Assignment 1 | COMP1073 Client-Side JavaScript
document.addEventListener('DOMContentLoaded', function () {
    /* Variables
    -------------------------------------------------- */
    // Constants for main button query selectors
    const noun1Button = document.querySelector('#noun1');
    const verbButton = document.querySelector('#verb');
    const adjectiveButton = document.querySelector('#adjective');
    const noun2Button = document.querySelector('#noun2');
    const settingButton = document.querySelector('#setting');

    // Constants for p tag to display query selectors
    const chosenNoun1 = document.querySelector('#choosenNoun1');
    const chosenVerb = document.querySelector('#choosenVerb');
    const chosenAdjective = document.querySelector('#choosenAdjective');
    const chosenNoun2 = document.querySelector('#choosenNoun2');
    const chosenSetting = document.querySelector('#choosenSetting');

    // Constants for final buttons and p tags
    const playbackButton = document.querySelector('#playback');
    const randomButton = document.querySelector('#random');
    const storyParagraph = document.querySelector('#story');

    // Variables for pre-defined arrays
    const nouns1 = ['cat', 'dog', 'bird', 'fish', 'elephant'];
    const verbs = ['ran', 'jumped', 'flew', 'swam', 'danced'];
    const adjectives = ['happy', 'sad', 'funny', 'serious', 'excited'];
    const nouns2 = ['tree', 'mountain', 'ocean', 'city', 'moon'];
    const settings = ['forest', 'beach', 'space', 'castle', 'desert'];

    // Variables for count to grab array elements
    let noun1Count = 0;
    let verbCount = 0;
    let adjectiveCount = 0;
    let noun2Count = 0;
    let settingCount = 0;

    /* Functions
    -------------------------------------------------- */
    function noun1_on_click() {
        chosenNoun1.textContent = getRandomElement(nouns1);
        // if-else to change count setting
        if (noun1Count === nouns1.length - 1) {
            noun1Count = 0;
        } else {
            noun1Count++;
        }
        console.log('Noun 1 clicked');
    }

    function verb_on_click() {
        chosenVerb.textContent = getRandomElement(verbs);
        // if-else to change count setting
        if (verbCount === verbs.length - 1) {
            verbCount = 0;
        } else {
            verbCount++;
        }
    }

    function adjective_on_click() {
        chosenAdjective.textContent = getRandomElement(adjectives);
        // if-else to change count setting
        if (adjectiveCount === adjectives.length - 1) {
            adjectiveCount = 0;
        } else {
            adjectiveCount++;
        }
    }

    function noun2_on_click() {
        chosenNoun2.textContent = getRandomElement(nouns2);
        // if-else to change count setting
        if (noun2Count === nouns2.length - 1) {
            noun2Count = 0;
        } else {
            noun2Count++;
        }
    }

    function setting_on_click() {
        chosenSetting.textContent = getRandomElement(settings);
        // if-else to change count setting
        if (settingCount === settings.length - 1) {
            settingCount = 0;
        } else {
            settingCount++;
        }
    }

    function reset_on_click() {
        chosenNoun1.textContent = '';
        chosenVerb.textContent = '';
        chosenAdjective.textContent = '';
        chosenNoun2.textContent = '';
        chosenSetting.textContent = '';
        storyParagraph.textContent = '';

        // Reset the counts to 0
        noun1Count = 0;
        verbCount = 0;
        adjectiveCount = 0;
        noun2Count = 0;
        settingCount = 0;

        //Remove student number
        const studentIdParagraph = document.querySelector('#studentId');
        studentIdParagraph.textContent = '';
    }



    // Function to print student number
    function printStudentId() {
        const studentIdParagraph = document.querySelector('#studentId');
        // Replace 'YOUR_STUDENT_ID' with your actual student ID
        const studentId = '1222903'; 
        studentIdParagraph.textContent = `Student ID: ${studentId}`;
    }

    

    // Concatenate the user story and display
    function playback_on_click() {
        const userStory = `${chosenNoun1.textContent} ${chosenVerb.textContent} ${chosenAdjective.textContent} ${chosenNoun2.textContent} in ${chosenSetting.textContent}.`;
        storyParagraph.textContent = userStory;
    }

    // Grabbing random element from arrays, concatenate, and display
    function random_on_click() {
        noun1_on_click();
        verb_on_click();
        adjective_on_click();
        noun2_on_click();
        setting_on_click();

        playback_on_click(); // Call the playback function to display the random story immediately
    }

    /* Event Listeners
    -------------------------------------------------- */
    noun1Button.addEventListener('click', noun1_on_click);
    verbButton.addEventListener('click', verb_on_click);
    adjectiveButton.addEventListener('click', adjective_on_click);
    noun2Button.addEventListener('click', noun2_on_click);
    settingButton.addEventListener('click', setting_on_click);
    
    playbackButton.addEventListener('click', function () {
        printStudentId();
        playback_on_click();
    });

    randomButton.addEventListener('click', function () {
        printStudentId();
        random_on_click();
    });

    randomButton.addEventListener('click', random_on_click);
    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', reset_on_click);

    // Helper function to get a random element from an array
    function getRandomElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
});

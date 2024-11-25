// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


function loadPreferences() { // named the function "loadPreferences"
    const personName = localStorage.getItem('personName'); // "personName" is the variable that is being declared. local.Storage lets people store data in the browser. .getItem('personName') gives you access to the value that has been declared to "personName" from the local storage
    const backgroundColor = localStorage.getItem('backgroundColor'); // this is similar to the "personName" declaration
    const foregroundColor = localStorage.getItem('foregroundColor') //this is also similar as the other two above. It will store data associated with "mainColor" in the browser


    if (personName) {  //an if-statement, the "personName" is the variable that is being evaluated
        document.getElementById('greeting').innerText = `Hello, ${personName}!`;  //the "document." is the webpage that is being displayed on the web browser. "getElementById('greeting')" refers to the "greeting" id shown on on the html document. ".innerText = `Hello, ${person.Name}!`" means that the code is changing the inner text of the element that has the "greeting" id to "Hello, {personName}!"
    }

    if (backgroundColor) {
        document.body.style.backgroundColor = backgroundColor; //"document.body" refers to the body element on the html page, "style" gives access to CSS styling for the body element. and the "backgroundColor" refers to the CSS property. the "backgroundColor" on the right side of the = sign is the variable
    }

    if (foregroundColor) {
        document.body.style.color = foregroundColor; // this is also similar to the code above the only difference is the word "color" at the end of "style" and the variable "foregroundColor" this code will only change the color of the text while the code above will change the background color
    }

}

document.getElementById('preferences-form').addEventListener('submit', function (e) { // "document.getElementId('preferences-form')" gets the id "preferences-form" from the html document. and ".addEventListener('submit', function (e)" adds an event listener to the submit function, allowing to function when pressed.
    e.preventDefault(); //This prevents the default settings of the submit button executing (the default setting is that each time you press the submit button, it reloads the page)

    const personName = document.getElementById('name').value;
    const backgroundColor = document.getElementById('background-color').value;
    const foregroundColor = document.getElementById('foreground-color').value;

    localStorage.setItem('personName', personName);
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('foregroundColor', foregroundColor);

    loadPreferences(); //this will apply the preferences

    const notify = document.createElement('div') //this will create a new element called "div" on the memory and it will get stored in the variable "notify"
    
    notify.innerText = 'Your preference has been saved'; // each time the person gets a notification of their saved preference it will say "Your preference has been saved"
    notify.style.backgroundColor = 'pink'; //this will make the background color of the notification pink
    notify.style.color = 'purple'; //this will make the color of the text purple.
    notify.style.padding = '15px'; //this will make the text 15px away from the border
    notify.style.marginTop = '10px'; // this will make the top of the notification 20px away from the top of the webpage
    notify.style.textAlign = 'center'; //this will align the text to the center of the notification box
    document.body.appendChild(notify); //the "document.body" refers to the body element on the html page. "appendChild(notify)" is a way to add a new child element. so the "document.body" is considered the parent element and "notify" is the child element


    setTimeout(() => { // this allows people to execute the code after a certain time has passed
        notify.style.display = 'none';  //this is what helps hide the notification 
    }, 5000); //5000 milliseconds = 5 seconds, so after 5 seconds the notification will disappear/hide.
});

loadPreferences(); //this will call the function on the page
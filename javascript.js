
/*CONSTANTS*/

const today = new Date();
const currentYear = today.getFullYear();
const currentHours = today.getHours();


/* Footer and Copyright */
document.getElementById("MainFooter").innerHTML = "(c) Sarah Parker " + currentYear;


/* Portfolio Greeting */
if (currentHours < 12) {
    document.getElementById("Greetings").innerHTML = "Good Morning!";
    document.getElementById("Greetings").classList.add("morning");
}

if (12 <= currentHours && currentHours < 17){
    document.getElementById("Greetings").innerHTML = "Good Afternoon!";
    document.getElementById("Greetings").classList.add("afternoon");
}
if (currentHours >= 17) {
    document.getElementById("Greetings").innerHTML = "Good Evening!";
    document.getElementById("Greetings").classList.add("evening");
}
/* -------------------- */

console.log(today.toDateString());
console.log("Javascript File Loaded");         

/* TODO:
ALERT BUTTON: create button with the ID: "btn-alert"
-> When button is cllicked use the alert() function to display a message

Hover Button: Use Javaascrtipt to change the appeaaranace of thhe alert button so the text of the button c hanges  when
the mouse hovers over it, anad then reverts when it leaves. May use DOM APII method:
- getElementByID()
- onmouseover
- innerHTMLL or innerText

For loops
- Create a new ordered list with the id "numbers" in your HTML.
- Using JS, create a for loop that populates the ordered list with 12 child elements of <li>List item</li>.
- Now set the <li> text with either even or odd, to appropriately match the list item's index number.
- Bonus: find a more efficient syntax for incrementing the counter variable used in the for loop.




*/
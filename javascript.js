document.addEventListener("DOMContentLoaded", () => {
/*It is at this moment I am happy I already have some comp sci and coding knowledge 
under my belt :D */

/*CONSTANTS*/
const today = new Date();
const currentYear = today.getFullYear();
const currentHours = today.getHours();
const button = document.getElementById("btn-alert");
const initialValue = 1; /* Used in odd/even for loop */
const stopValue = 12;   /* Used in odd/even for loop */
const orderedList = document.getElementById("numbers");

/* Self-made Functions */





/**BUTTON ALERT and MOUSE HOVER CHANGES : */

button.addEventListener("click", function(){alert("Hello World!"); console.log("btn-alert functional");}); /* When button is clicked, it runs the funcitons alert and console.log. */
button.addEventListener("mouseover", event => { /* When mouse hovers over the button it changes.*/ 
    event.target.style.backgroundColor="pink";
    event.target.textContent = "IM WARNING YOU";
});

button.addEventListener("mouseout", event=>{ /* When mouse hover LEAVES the button it reverts back to normal. */
    event.target.style.backgroundColor="white";
    event.target.textContent = "Don't Touch!";
});

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

/* ORDERED LIST FOR LOOP: */

for (let i = initialValue; i <= stopValue; i++) { /* guessing i++ the more efficient method? Thats how I did it with python / java */

    let li = document.createElement("li")
    // set the text content of the new <li> element:
    if (i % 2 === 0) {
    li.textContent = "Even";
    } else {
    li.textContent = "Odd";
    }
    // append the <li> element to your ordered list:
    orderedList.appendChild(li);
}

/* Footer and Copyright */
document.getElementById("MainFooter").innerHTML = "(c) Sarah Parker " + currentYear;



/*-----------------CONSOLE FUNCTIONS-------------------- */

console.log(today.toDateString());
console.log("Javascript File Loaded");         

/* TODO:
ALERT BUTTON: create button with the ID: "btn-alert"
-> When button is clicked use the alert() function to display a message

Hover Button: Use Javascrtipt to change the appearance of thhe alert button so the text of the button c hanges  when
the mouse hovers over it, anad then reverts when it leaves. May use DOM API method:
- getElementByID()
- onmouseover
- innerHTMLL or innerText

For loops
- Create a new ordered list with the id "numbers" in your HTML.
- Using JS, create a for loop that populates the ordered list with 12 child elements of <li>List item</li>.
- Now set the <li> text with either even or odd, to appropriately match the list item's index number.
- Bonus: find a more efficient syntax for incrementing the counter variable used in the for loop.


*/
});
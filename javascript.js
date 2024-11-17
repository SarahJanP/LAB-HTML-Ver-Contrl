/*It is at this moment I am happy I already have some comp sci and coding knowledge under my belt :D, this was the easiest part for me. */

/*----------CONSTANTS-------------*/
const today = new Date();
const currentYear = today.getFullYear();
const currentHours = today.getHours();
const button = document.getElementById("btn-alert");
const initialValue = 1; /* Used in odd/even for loop */
const stopValue = 12;   /* Used in odd/even for loop */
const orderedList = document.getElementById("numbers");
/*------------------------------------------------------ */



/*------------ Self-made Functions------------- */

/*--------------------------------------------- */



/**-----BUTTON ALERT and MOUSE HOVER CHANGES :-----*/
button.addEventListener("click", function(){alert("Did I scare ya?"); console.log("btn-alert functional");});/* When button is clicked, it runs the funcitons alert and console.log. */
button.addEventListener("mouseover", event => {                                                           /* When mouse hovers over the button it changes color + text.*/ 
    event.target.style.backgroundColor="pink";
    event.target.textContent = "IM WARNING YOU";
    button.style.textDecoration = "underline";
});

button.addEventListener("mouseout", event=>{                                                              /* When mouse hover LEAVES the button it reverts back to normal. */
    event.target.style.backgroundColor="white";
    event.target.textContent = "Don't Touch!";
    button.style.textDecoration = "none";
});/*------------------------------------------------------ */



/* ------------PORTFOLIO GREETING-------------- */
if (currentHours < 12) {                                                                                  /*if before noon good morning*/
    document.getElementById("Greetings").innerHTML = "Good Morning!";
    document.getElementById("Greetings").classList.add("morning");
    console.log("current time " + currentHours +":00");
}

if (12 <= currentHours && currentHours < 17){                                                             /*If before 5pm good afternoon*/
    document.getElementById("Greetings").innerHTML = "Good Afternoon!";
    document.getElementById("Greetings").classList.add("afternoon");
    console.log("current time " + currentHours +":00");
}
if (currentHours >= 17) {                                                                                 /* If after 5pm good evening :> */
    document.getElementById("Greetings").innerHTML = "Good Evening!";
    document.getElementById("Greetings").classList.add("evening");
    console.log("current hours: " + currentHours +":00h");
}/*------------------------------------------------------ */



/* --------------ORDERED LIST FOR LOOP:---------------- */
for (let i = initialValue; i <= stopValue; i++) {                                                         /* guessing i++ the more efficient method? Thats how I did it with python / java */
    let li = document.createElement("li") /* Temporary element */
    
    if (i % 2 === 0) {                                                                                    /* If there is no remainder after dividing by 2 then the number must be even. */
    li.textContent = "Even";
    } else {
    li.textContent = "Odd";                                                                               /* If there is any remainder after dividing by 2 then must be odd.*/
    }
    orderedList.appendChild(li);                                                                          /* At the end of every iteration append the element.*/
}/*------------------------------------------------------ */
console.log("'numbers' ordered list created");


/* ----------------FOOTER AND COPYRIGHT------------------*/
document.getElementById("MainFooter").innerHTML = "(c) Sarah Parker " + currentYear;
/*------------------------------------------------------ */
console.log("MainFooter creation successful");


/*-----------------CONSOLE FUNCTIONS-------------------- */

console.log(today.toDateString());
console.log("Javascript File Loaded");
/*------------------------------------------------------ */
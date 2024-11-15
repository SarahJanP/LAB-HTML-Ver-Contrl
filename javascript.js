
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
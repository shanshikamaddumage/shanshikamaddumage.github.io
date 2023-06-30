//alert('Hello World!');  //creates an alert



//document.querySelector('p');

//document.getElementById('skills').innerHTML = 'List of Skills';

//document.querySelector('#about').style.backgroundColor='blue';

/*
let newSkill = document.createElement('li');
newSkill.id = 'javascript';
newSkill.innerHTML = 'This is JavaScript';
document.getElementById('skills').appendChild(newSkill);
*/


//document.getElementById('skills').hidden = true;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function openMenu() {

    var x = document.getElementById("portfolioTopnav");

    if (x.className === "topnav") {

      x.className += " responsive";

    } else {

      x.className = "topnav";

    }
}

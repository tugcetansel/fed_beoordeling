/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var knop = document.getElementById("save");

function aanLijst() {
    knop.classList.toggle("likebuttonnew");
}

knop.addEventListener('click', aanLijst);


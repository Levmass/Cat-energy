let petName = document.getElementById('petName');
let petWeight = document.getElementById('petWeight');
let petAge = document.getElementById('petAge');
let userEmail = document.getElementById('userEmail');
let userPhone = document.getElementById('userPhone');
let icon = document.querySelectorAll(".contactdetails__icon");

let petNameValue = petName.value;
let petWeightValue = petWeight.value;
let petAgeValue = petAge.value;
let userEmailValue = userEmail.value;
let userPhoneValue = userPhone.value;


// let programSelectionArray = [petName, petWeight, petAge];
// let programSelectionArrayValue = [petNameValue, petWeightValue, petAgeValue];

// document.getElementById('main-form').addEventListener("submit", checkForm);
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const correct = userEmailValue.length >= 6
    && userEmailValue.includes('@')
    && userEmailValue.includes('.');

$(document).ready(function () {
    $('.extra__btn').click(function (event) {
        event.preventDefault();

        // petName.style.border = "1px solid #cdcdcd";
        // petWeight.style.border = "1px solid #cdcdcd";
        // petAge.style.border = "1px solid #cdcdcd";
        // userPhone.style.border = "1px solid #cdcdcd";
        // userEmail.style.border = "1px solid #cdcdcd";

        if (petNameValue == "") {
            petName.style.border = "2px solid #FF8282";
        }
        if (petWeightValue == "") {
            petWeight.style.border = "2px solid #FF8282";
        }
        if (petAgeValue == "") {
            petAge.style.border = "2px solid #FF8282";
        }
        if (userPhoneValue == "") {
            userPhone.style.border = "2px solid #FF8282";
            $(".contactdetails__icon-2").addClass( "fail");
        }
        if (userEmailValue == "") {
            userEmail.style.border = "2px solid #FF8282";
            $(".contactdetails__icon-1").addClass( "fail");
        } else if (!correct){
            userEmail.style.border = "2px solid #FF8282";
            $(".contactdetails__icon-1").addClass( "fail");
        }
    })
});
// function checkForm(event) {
//     event.preventDefault();
//     if (petNameValue == "") {
//         petName.style.border = "2px solid #FF8282";
//     }
//     if (petWeightValue == "") {
//         petWeight.style.border = "2px solid #FF8282";
//     }
//     if (petAgeValue == "") {
//         petAge.style.border = "2px solid #FF8282";
//     }
//     if (userPhoneValue == "") {
//         userPhone.style.border = "2px solid #FF8282";
//     }
//     if (userEmailValue == "") {
//         userEmail.style.border = "2px solid #FF8282";
//         icon.style.cssText = "svg line, svg path {stroke: #FF8282;}";
//     } else if (!correct){
//         userEmail.style.border = "2px solid #FF8282";
//     }
//     // let string = '';
//     // for (let i = 0; i < programSelectionArrayValue.length; i ++ ) {
//     //     string += programSelectionArrayValue[i];
//     //     if (programSelectionArrayValue[i] == "") {
//     //         programSelectionArray[0].style.borderColor = "#FF8282";
//     //     }
//     // }
// }

// let inputSelection = document.querySelectorAll('.selection__text');
// petAge.style.borderColor = "#FF8282";
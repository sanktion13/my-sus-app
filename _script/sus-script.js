// This JavaScript is written by Weinan Li

var btnCal = document.getElementById("btn-calc"),
    myForm = document.getElementById("form-area"),
    modal = document.getElementById("myModal"),
    span = document.getElementsByClassName("close")[0],
    icon = document.getElementById("fas");


document.addEventListener("DOMContentLoaded", function(){
    btnCal.disabled = true;
    document.getElementById("btn-reset").addEventListener("click", function(){
        btnCal.disabled = true;
        document.getElementsByClassName("result")[0].innerHTML = "";
    })
    myForm.addEventListener("change", btnShow);
    myForm.addEventListener("submit", SUSCalc);
    span.addEventListener("click", function(){
        modal.style.display = "none";
    })
    window.addEventListener("click", function(evt){
        if (evt.target == modal) {
            modal.style.display = "none";
        }
    })
})

function btnShow() {
    var result = 1;
    for (var i = 1; i <= 10; i++) {
        var x = "[name=q" + i + "]:checked",
            y = 0;
        if (document.querySelector(x) != null) {
            y = parseInt(document.querySelector(x).value, 10);
        }
        result *= y;
    }
    if (result != 0) {
        btnCal.disabled = false;
    }
}

function SUSCalc(evt) {
    evt.preventDefault();
    var addOdd = 0,
        addEven = 0;
    for (var i = 1; i <= 10; i++) {     
        if (i % 2 == 1) {
            var x = "[name=q" + i + "]:checked";
            addOdd += parseInt(document.querySelector(x).value, 10);
        } else if (i % 2 == 0) {
            var x = "[name=q" + i + "]:checked";
            addEven += parseInt(document.querySelector(x).value, 10);
        }
    }
    var result = ((addOdd - 5) + (25 - addEven)) * 2.5;
    modal.style.display = "block";
    document.getElementsByClassName("result")[0].innerHTML = "The System Usability score is " + result + " out of 100.";
    if (result > 83) {
        icon.className = "far fa-smile";
    } else if (result > 68 && result <= 83) {
        icon.className = "far fa-meh";
    } else {
        icon.className = "far fa-frown";
    }
}
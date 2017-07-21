$(document).foundation();


function ShowContent(d) {
    document.getElementById(d).style.visibility = "visible";
}

function ReverseDisplay(d) {
    if (document.getElementById(d).style.visibility == "hidden") {
        document.getElementById(d).style.visibility = "visible";
    } else {
        document.getElementById(d).style.visibility = "hidden";
    }
}

$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        centerMode: true
    });
});
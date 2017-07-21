$(document).foundation();


function ShowContent(d) {
    document.getElementById(d).style.visibility = "visible";
}

function ReverseDisplay(d) {
    if (document.getElementById(d).style.visibility == "hidden") { document.getElementById(d).style.visibility = "visible"; } else { document.getElementById(d).style.visibility = "hidden"; }
}

// $(document).ready(function() {
//     $('.slides').slick({
//         arrows: false,
//         dots: true,
//         fade: true,
//         responsive: [{
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     });
// });


// $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [{
//             breakpoint: 768,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 3
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 arrows: false,
//                 centerMode: true,
//                 centerPadding: '40px',
//                 slidesToShow: 1
//             }
//         }
//     ]
// });
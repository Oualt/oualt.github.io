/*!
=========================================================
* Landing page
=========================================================
*/

// Var
var blured = document.querySelector('.blured');
var infosBorderWrapper = document.querySelector('.infos-border-wrapper');


// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio filters
// $(window).on("load", function() {
//     var t = $(".portfolio-container");
//     t.isotope({
//         filter: ".new",
//         animationOptions: {
//             duration: 750,
//             easing: "linear",
//             queue: !1
//         }
//     }), $(".filters a").click(function() {
//         $(".filters .active").removeClass("active"), $(this).addClass("active");
//         var i = $(this).attr("data-filter");
//         return t.isotope({
//             filter: i,
//             animationOptions: {
//                 duration: 750,
//                 easing: "linear",
//                 queue: !1
//             }
//         }), !1
//     });
// });


// google maps
// function initMap() {
// // Styles a map in night mode.
//     var map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 40.674, lng: -73.945},
//         zoom: 12,
//         scrollwheel:  false,
//         navigationControl: false,
//         mapTypeControl: false,
//         scaleControl: false,
//       styles: [
//         {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//         {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//         {
//           featureType: 'administrative.locality',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'geometry',
//           stylers: [{color: '#263c3f'}]
//         },
//         {
//           featureType: 'poi.park',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#6b9a76'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry',
//           stylers: [{color: '#38414e'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#212a37'}]
//         },
//         {
//           featureType: 'road',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#9ca5b3'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry',
//           stylers: [{color: '#746855'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'geometry.stroke',
//           stylers: [{color: '#1f2835'}]
//         },
//         {
//           featureType: 'road.highway',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#f3d19c'}]
//         },
//         {
//           featureType: 'transit',
//           elementType: 'geometry',
//           stylers: [{color: '#2f3948'}]
//         },
//         {
//           featureType: 'transit.station',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#d59563'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'geometry',
//           stylers: [{color: '#17263c'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.fill',
//           stylers: [{color: '#515c6d'}]
//         },
//         {
//           featureType: 'water',
//           elementType: 'labels.text.stroke',
//           stylers: [{color: '#17263c'}]
//         }
//       ]
//     });
// }

function afficheCV(){
  reveal(cvBox);
  cvPng.addEventListener("click", agrandi);
}

function agrandi(e){
  item = e.target;
  var img_src = item.src;
  item.removeEventListener("click", agrandi);
  item.addEventListener("click", hide);
}

function retreci(e){
  item = e.target;
  item.removeEventListener("click", retreci);
  item.addEventListener("click", hide);
}

var portfolioItems = document.getElementsByClassName("portfolio-item");

for (var i = 0, len = portfolioItems.length; i < len; i++) {
    portfolioItems[i].addEventListener("click", revealImgWatcher);    
}


window.addEventListener("hashchange", function () {
  window.scrollTo(window.scrollX, window.scrollY - 100);
});

function hide(e){
  e.style.display = "none";
}

function reveal(e){
  e.style.display = "block";
}

var poster = document.querySelector('#poster');

function revealImgWatcher(e){
  item = e.target;
  // get parent div
  itemDiv = item.parentNode;
  // get img src
  itemSrc = itemDiv.getElementsByTagName('img')[0].src;
 // blured.style.display = "block";
  infosBorderWrapper.style.display = "block";
  poster.src= itemSrc;
  reveal(infosBorderWrapper);
  poster = document.querySelector('#poster');
  poster.addEventListener('click', hideBorderWrapper);
  
}

function hideBorderWrapper(){
  infosBorderWrapper.style.display = "none";
}


function retrieveSrcInArray(itemToRetrieve){
  var indexToRetrieve = portfolioItems.prototype.indexOf(itemToRetrieve);
  return srcArray[indexToRetrieve];
}

function hideImgWatcher(e){
 // blured.style.display = "none";
  infosBorderWrapper.style.display = "none";
  //setClassName(startdiv, 'startdiv');
}

//hideImgWatcher();






// change header picture on mouse over/out

var head = document.querySelector(".header");
var downloadBtnCV = document.querySelector("#download_cv");
var downloadBtnCVFr = document.querySelector('#download_cvfr');

downloadBtnCV.addEventListener("mouseover", changeClass);
downloadBtnCVFr.addEventListener("mouseover", changeClass);

function changeClass(e) { 
  item = e.target;
  //head.className = "header-filtered"
  head.style.backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(public_html/assets/imgs/headFiltered.jpg)";
  item.removeEventListener("mouseover", changeClass);
  item.addEventListener("mouseout", lastClass);
 }

function lastClass(e){
  item = e.target;
  //head.className = "header"
  head.style.backgroundImage="linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(public_html/assets/imgs/head.jpg)";
  item.removeEventListener("mouseout", lastClass);
  item.addEventListener("mouseover", changeClass);
}


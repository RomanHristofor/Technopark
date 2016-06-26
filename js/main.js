popup( productArrayObj );
function popup( productArrayObj ){
var blocks = document.querySelectorAll(".thumb"),
    j;
  for (j = 0; j < productArrayObj.length; j++) {
    var div = document.createElement("div");
    div.setAttribute("class",  "modal");
    div.innerHTML = '<div class="popup">' +
                        '<img class="close" src="svg/close_dark.svg" alt="close">'+
                        '<div class="popup-img">'+productArrayObj[j].img+'</div>'+
                        '<div class="popup-title">'+productArrayObj[j].title+'</div>'+
                        '<div class="popup-price">'+productArrayObj[j].price+'</div>'+
                        '<div class="popup-body">'+productArrayObj[j].body+'</div>' +
                        '<div class="popup-character">'+productArrayObj[j].character+'</div>' +
                        '<div class="line"></div>'+
                        '<div class="popup-link">'+productArrayObj[j].link+'</div>'+
                     '</div>';
    div.setAttribute("style", "display:none");
    blocks[j].appendChild(div);
  }
}

showPopup( document.querySelectorAll(".thumb") );
function isInside(node, target) {
  for (; node !== null; node = node.parentNode)
    if (node == target) return true;
}
function showPopup(divs){
  [].forEach.call(divs, function(div){
    var timeout;
    div.addEventListener("click", function(event) {
        if (!isInside(event.relatedTarget, div)){
          clearTimeout(timeout);
          timeout = setTimeout(function() {
            div.children[2].style.display = "block";
          }, 300);
        }
    });
  });
}

hidePopup( document.querySelectorAll(".close") );
function hidePopup(imgs){
  [].forEach.call(imgs, function(img){
    img.addEventListener("click", function(event) {
      img.parentNode.parentNode.style.display = "none";
      event.stopPropagation();
    });
  });
}

$('#layer').hide();
$('.thumb').click(function(){
    $('#layer').show();
    $('#layer').animate({
        opacity: 0.5
    });
});
$('.close').click(function(){
    $('#layer').fadeOut(500);
});

$(function(){
  $('.icon-menu').on('click', function(){
    $('.navbar').slideToggle();
  });
  $(window).resize(function() {
    if( $(window).width() > 992 ) {
      $('.navbar').removeAttr('style');
    }
  });
});


$(function(){
  $('#layer').hide();
  $('.icon-filter').on('click', function(){
    $('.menu-filter').slideToggle();
    $('#layer').show();
    $('#layer').animate({
        opacity: 0.5
    });
    $('.active-page').css("background-color","#ccc");
  });
  $('.icon-close-filter').on('click', function(){
    $('.menu-filter').hide();
    $('#layer').fadeOut(500);
    $('.active-page').css("background-color","#fff");
  });
  $(window).resize(function() {
    if( $(window).width() > 992 ) {
      $('.menu-filter').removeAttr('style');
      $('#layer').hide();
      $('.active-page').css("background-color","#fff");
    }
  });
});

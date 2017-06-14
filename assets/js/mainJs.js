// $('#butSectThree').click(function(event) {
// 			$('.SectionFourContainerText').toggle();
			
// 		});
// слайдер
 $('.sl').slick();


// моб меню
$(document).ready(function(){
			var touch = $('#touch-menu');
		    var menu = $('.nav');
		 
		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
});

$(document).ready(function(){
			// Фикмированная шапка при скролле
			$(".header .wrap__island").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 50) {
					$(".header .wrap__island").addClass("default").fadeIn('fast');
				} else {
					$(".header .wrap__island").removeClass("default").fadeIn('fast');
				};
			});
		});
// якорь
$('a[href^="#"]').click(function(){
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 1500);
return false;
});

// ховер при наведение 
$('.team .basic .items__ul .item__btn').hover(
function(){
  $('.team .basic .items__ul .item__btn').css('background-color','#49cbcd');
  $('.team .basic .items__ul .li1').css('background-color','#49cbcd');
},
function(){
   $('.team .basic .items__ul .item__btn').css('background-color','#788492');
  $('.team .basic .items__ul .li1').css('background-color','#485460');;
});

$('.team .pro .items__ul .item__btn').hover(
function(){
  $('.team .pro .items__ul .item__btn').css('background-color','#49cbcd');
  $('.team .pro .items__ul .li1').css('background-color','#49cbcd');
},
function(){
   $('.team .pro .items__ul .item__btn').css('background-color','#788492');
  $('.team .pro .items__ul .li1').css('background-color','#485460');;
});

$('.team .premium .items__ul .item__btn').hover(
function(){
  $('.team .premium .items__ul .item__btn').css('background-color','#49cbcd');
  $('.team .premium .items__ul .li1').css('background-color','#49cbcd');
},
function(){
   $('.team .premium .items__ul .item__btn').css('background-color','#788492');
  $('.team .premium .items__ul .li1').css('background-color','#485460');;
});


    function validate() {
        var userName = document.getElementById("name");
        var userEmail= document.getElementById("email");


        if(!userName.value) {
            userName.style.border = "2px solid red";
            return false;
        }

        if(!userEmail.value) {
            userEmail.style.border = "2px solid red";
            return false;
        }


        return true;

    }


	





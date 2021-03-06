$(document).ready(function(){	

	//Default so only the first page of the side bar is filled while the others are still transparent until clicked
	$(function(){
		$("#page1").addClass("fill");
		$("#page2, #page3, #page4").removeClass("fill");
	});

	//Brings up information about me 
	$("#aboutMe-button").click(function()
	{
		$("#content-after").show();
	});

	//Brings up the modal box when clicking on the apps (personal projects) in the iPhone
	$("#portfolio-app").click(function(){
        setTimeout(function(){$(".backdrop").show();}, 500);
        setTimeout(function(){$(".modal").fadeIn();}, 1000);
        $("#portfolio-modal").show();
        $("#pokemonAR-modal").hide();
        $(".backdrop").click(function(){
       		$(".backdrop").hide();
       		$(".modal").hide();
       	});
       	$("#X").click(function(){
       		$(".backdrop").hide();
       		$(".modal").hide();
       	});
    });

	//Brings up the modal box when clicking on the apps (personal projects) in the iPhone
	$("#pokemonAR-app").click(function(){
        setTimeout(function(){$(".backdrop").show();}, 500);
        setTimeout(function(){$(".modal").fadeIn();}, 1000);
        $("#portfolio-modal").hide();
        $("#pokemonAR-modal").show();
        $(".backdrop").click(function(){
       		$(".backdrop").hide();
       		$(".modal").hide();
       	});
       	$(".X").click(function(){
       		$(".backdrop").hide();
       		$(".modal").hide();
       	});
    });

	//Scrolls to 1st (home) page and side bar only fills first diamond 
	$("#page1").click(function(){
		var firstPage = $("#home").position();
		$('html, body').animate({scrollTop: firstPage.top}, 'slow');
		$("#page1").addClass("fill");
		$("#page2, #page3, #page4").removeClass("fill");
	});

	//Scrolls to 2nd page and side bar only fills second diamond
	$("#page2").click(function(){
		var secondPage = $("#aboutMe").position();
		$('html, body').animate({scrollTop: secondPage.top}, 'slow');
		$("#page2").addClass("fill");
		$("#page1, #page3, #page4").removeClass("fill");
	});

	//Scrolls to 3rd page and side bar only fills third diamond
	$("#page3").click(function(){
		var thirdPage = $("#skills").position();
		$('html, body').animate({scrollTop: thirdPage.top}, 'slow');
		$("#page3").addClass("fill");
		$("#page1, #page2, #page4").removeClass("fill");
	});

	//Scrolls to 4th page and side bar only fills fourth diamond
	$("#page4").click(function(){
		var fourthPage = $("#projects").position();
		$('html, body').animate({scrollTop: fourthPage.top}, 'slow');
		$("#page4").addClass("fill");
		$("#page1, #page2, #page3").removeClass("fill");
	});

	//Changes the side bar navigation as you scroll
	$(window).scroll(function(){
		var scrollPosition = $(window).scrollTop();
		if(scrollPosition < 900) {
			$("#page1").addClass("fill");
			$("#page2, #page3, #page4").removeClass("fill");
		} else if (scrollPosition < 1800) {
			$("#page2").addClass("fill");
			$("#page1, #page3, #page4").removeClass("fill");
		} else if (scrollPosition < 2700) {
			$("#page3").addClass("fill");
			$("#page1, #page2, #page4").removeClass("fill");
		} else {
			$("#page4").addClass("fill");
			$("#page1, #page2, #page3").removeClass("fill");
		}
	});

});
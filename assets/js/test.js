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
    $("#app").click(function(){
        setTimeout(function(){$(".backdrop").show();}, 500);
        setTimeout(function(){$(".modal").fadeIn();}, 1000);
        $(".backdrop").click(function(){
            $(".backdrop").hide();
            $(".modal").hide();
        });
        $("#X").click(function(){
            $(".backdrop").hide();
            $(".modal").hide();
        });
    });

    //Scrolls to 1st (home) page and side bar only fills first diamond 
    $("#page1").click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        $("#page1").addClass("fill");
        $("#page2, #page3, #page4").removeClass("fill");
    });

    //Scrolls to 2nd page and side bar only fills second diamond
    $("#page2").click(function(){
        $('html, body').animate({scrollTop: 950}, 'slow');
        $("#page2").addClass("fill");
        $("#page1, #page3, #page4").removeClass("fill");
    });

    //Scrolls to 3rd page and side bar only fills third diamond
    $("#page3").click(function(){
        $('html, body').animate({scrollTop: 1900}, 'slow');
        $("#page3").addClass("fill");
        $("#page1, #page2, #page4").removeClass("fill");
    });

    //Scrolls to 4th page and side bar only fills fourth diamond
    $("#page4").click(function(){
        $('html, body').animate({scrollTop: 2850}, 'slow');
        $("#page4").addClass("fill");
        $("#page1, #page2, #page3").removeClass("fill");
    });

    //Changes the side bar navigation as you scroll
    $(window).scroll(function(){
        var scrollPosition = $(window).scrollTop();
        if(scrollPosition < 950) {
            $("#page1").addClass("fill");
            $("#page2, #page3, #page4").removeClass("fill");
        } else if (scrollPosition < 1900) {
            $("#page2").addClass("fill");
            $("#page1, #page3, #page4").removeClass("fill");
        } else if (scrollPosition < 2850) {
            $("#page3").addClass("fill");
            $("#page1, #page2, #page4").removeClass("fill");
        } else if(scrollPosition <3800){
            $("#page4").addClass("fill");
            $("#page1, #page2, #page3").removeClass("fill");
        }
    });

});
// sidenav hide 
$("#close").click(function(){
    let navWidth=$("#sideNav").outerWidth();
    if($("#sideNav").css("left")==`0px`){
        $(".menu-btn").animate({left:`15px`},500);
        $(".title").animate({left:`0px`},500);
        $("#sideNav").animate({left:`-250px`},500);
    }  

});

// sidenav  show
$(".menu-btn").click(function () { 
    let navWidth=$("#sideNav").outerWidth();
    if($("#sideNav").css("left")<`${navWidth}px`){
        $(".menu-btn").animate({left:`${navWidth}px`},500);
        $(".title").animate({left:`${navWidth-30}px`},500);
        $("#sideNav").animate({left:"0px"},500);
    }    
});

// singer btn toggle
$("#singers h3").click(function () {
    let singerBtn=$(this).siblings();
    singerBtn.slideToggle(500);
    $(".singer-info").not(singerBtn).slideUp(500);     
});

// sections transition 
$(".nav-link").click(function(){
    let href=$(this).attr("href");
    let sectionTop=$(href).offset().top;
    $("html,body").animate({scrollTop:sectionTop},1000);
});

// counter of letters in textarea
let counter= 100;
$("textarea").keypress(function () {
    counter--;
    if(counter>0){
        $(".letter-count").text(counter);
    }else{
        $(".letter-count").text(`your available character finished`);
    }
    
});


// event counter
function passedEventCounter(){
    let currentDay=new Date();
    let eventDay=new Date(2019,11,17);
    currentTime=currentDay.getTime();
    eventTime=eventDay.getTime();
    passedTime=currentTime-eventTime;
    let sec=Math.floor(passedTime/1000);
    let min=Math.floor(sec/60);
    let hours=Math.floor(min/60);
    let days=Math.floor(hours/24);
    hours%=24;
    min%=60;
    sec%=60;
    hours=(hours<10)? "0"+hours:hours;
    min=(min<10)? "0"+min:min;
    sec=(sec<10)? "0"+sec:sec;

    $("#days").text(days+" D");
    $("#hours").text(hours+" h");
    $("#min").text(min+" m");
    $("#sec").text(sec+" s");
    setTimeout(passedEventCounter,1000);

}
passedEventCounter();
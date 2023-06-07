 


//  scroll top


$(document).ready(function () {
    $("#top").css({display:"none"});
    $(window).scroll(function(){
        var z=$(document).scrollTop();
            if(z>200){
                $("#top").show();
            }
            else{
                $("#top").hide();
            }
    });
    $("#top").click(function(){
        $("html, body").animate({ scrollTop: "0"},2000);
    });
    //Dynamic Year
    const d = new Date();
    let year = d.getFullYear();
    document.getElementsByClassName("year")[0].innerHTML=year;
});


    



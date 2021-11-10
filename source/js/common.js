
$(function(){

    menu();
    coverimage();
    maintab();
    outlink();



    
    $("section .login-type input[name=type]").on("click", function(){
        
        var check = $(this).attr("id"); 

        $("div.login-box").removeClass("on");
        $("div.login-box."+ check).addClass("on");
    });
    
    $("section.main-list .data-type input[name=type]").on("click", function(){
        
        var check = $(this).attr("id"); 

        $("div.data-box").removeClass("on");
        $("div.data-box."+ check).addClass("on");
    });
    
    $("section.main-reserv .data-type input[name=reservType]").on("click", function(){
        
        var check = $(this).attr("id"); 

        $("div.search-box").removeClass("on");
        $("div.search-box."+ check).addClass("on");
        console.log(check);
    });
    
    
    $("section.sub-contents #sub-menu li.on a").on("click", function(e){

        $("nav#sub-menu").toggleClass("active");
        e.preventDefault();

    });
    
    
    


    $(window).on("resize", function(){
        $("nav#main-menu h3 a").unbind();
        menu();
        coverimage();
    });



});


/* ----- Window Size ----- */
var windowh = $(window).height();
var windowW = $(window).width();

$(window).on("resize", function(){
    windowh = $(window).height();
    windowW = $(window).width();
});


/* ----- menu ----- */
function menu() {

    $(document).on("mousemove", function(e){
        if (windowW > 1200 && e.pageY > 410) {
            $("nav#main-menu").removeClass("on");
            $("#header").removeClass("on");
        }
    });

    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("on");
    });

    $("nav#main-menu h3 a").on("click", function (e) {
        
        $("nav#main-menu h3").removeClass("on");



        if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

            $(this).parent().addClass("on");
            e.preventDefault();

        }
        else {
            $("nav#main-menu h3 a").unbind();

        }
    });

    $("nav#main-menu div.menus").on("mouseenter", function(){
        $(this).parent().addClass("on");
        $("#header").addClass("on");
    });

}

/* ----- cover image ----- */ 
function coverimage() {


    $(".main-issue .slide").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-content .news p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".main-equipment .slide p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });

    $(".sub-content .sub-agency-detail p.image").each(function(){
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });
}

/* ----- main tab ----- */ 
function maintab() {

    $(".main-content .news h3").on("click", function(){
        $(".main-content .news h3").removeClass("active");
        $(this).addClass("active");

        $(".main-content .news .tab-data").removeClass("active");
        
        $(".main-content .news ."+ $(this).attr("data") +"").addClass("active");

    });
}

/* ----- outlink ----- */ 
function outlink() {
    $(".agency-open").click(function() {
        console.log("클릭");
        $(this).toggleClass("on");
    });
}

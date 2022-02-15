
$(function(){

    menu();
    coverimage();
    maintab();
    outlink();



    
    
    
    $("section.sub-contents #sub-menu li.on a").on("click", function(e){

        $("nav#sub-menu").toggleClass("active");
        e.preventDefault();

    });
    
    
    $("section.history dt").on("click", function(e){
        $("section.history dt").removeClass("on");
        $(this).addClass("on");

    });
    
    $("table button.pop").on("click", function(){
        $("div.layerPop").addClass("on");
    });

    $("button.pop").on("click", function(){
        $("div.layerPop").addClass("on");
    });
    
    $("div.layerPop button.close").on("click", function(){
        $("div.layerPop").removeClass("on");
    });


    $(window).on("resize", function(){
        $("nav#main-menu h3 a").unbind();
        menu();
        coverimage();
    });




    function getRandom(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }
    
    

    function getRandomArray(min, max, count) {
 
        // 종료
        if (max - min + 1 < count) return;
     
        // 배열 생성
        var rst = [];
        
        while (1) {
            var index = getRandom(min, max);
     
            // 중복 여부를 체크
            if (rst.indexOf(index) > -1) {
                continue;
            }
     
            rst.push(index);
     
            // 원하는 배열 갯수가 되면 종료
            if (rst.length == count) {
                break;
            }
        }
     
        // 정렬
        return rst.sort(function (a, b) {
            return a - b;
        });
    }
    
    

    $(".memorial-info button").on('click', function(){

        var nums = getRandomArray(1, 7, 1);
        var pos = getRandomArray(1, 80, 1);

        $(".memorial-info div.flowers").append("<span class='flower0"+ nums +"' style='left:"+ pos +"%'></span>")
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


    $("button.main-menu").on("click", function () {
        $("nav#main-menu").toggleClass("menu");
        $("nav#main-menu").toggleClass("allMenu");
        $("#header").toggleClass("on");
    });

    $("nav#main-menu button.close").on("click", function () {
        $("nav#main-menu").toggleClass("menu");
        $("nav#main-menu").toggleClass("allMenu");
        $("#header").toggleClass("on");
    });

    // $("nav#main-menu h3 a").on("click", function (e) {
        
    //     $("nav#main-menu h3").removeClass("on");



    //     if (windowW < 1200 && $(this).parent().parent().find("ul").length) {

    //         $(this).parent().addClass("on");
    //         e.preventDefault();

    //     }
    //     else {
    //         $("nav#main-menu h3 a").unbind();

    //     }
    // });

    $("nav#main-menu div.menus h3 a").on("mouseenter", function(){
        $("nav#main-menu div.menus>ul>li").removeClass("on");
        $(this).parent().parent().addClass("on");
    });

    $("nav#main-menu div.menus>ul>li ul").on("mouseleave", function(){
        $(this).parent().removeClass("on");
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

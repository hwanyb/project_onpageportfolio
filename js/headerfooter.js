$(document).ready(function () {
    $("header").find("#home").addClass("fontweight500");





    $(window).scroll(function () {
        var sct = $(document).scrollTop();

        $winHeight = 0; // 브라우저 창 높이
        $oPage = []; // 원페이지 시작 위치 배열
        $oIdx = 0; // 현재 원페이지 인덱스
        $isScroll = false; // 현재 스크롤 여부
        $isOpage = true; // 현재 원페이지 여부
        $isNone = false;
        $posScroll = 0; // 현재 스크롤 위치





        if (oIdx === 0) {
            $("header").find("#home").addClass("fontweight500");
            $("header").css("background-color", "rgba(255, 255, 255, 0)");
            $("header").css("box-shadow", "none");
            $("header").find("li").css("color", "#fff");
            $("header").find("#headerLogo").attr("src", "img/headerlogowhite.png");
            $("header").find(".btnNav>span>div").css("background-color", "#fff");
            $("header").find("nav>ul>li").removeClass("changed");
        } else {
            $("header").css("background-color", "#fff");
            $("header").css("box-shadow", "0 3px 5px rgba(0, 0, 0, 0.1)");
            $("header").find("li").css("color", "#6E6E6E");
            $("header").find("#headerLogo").attr("src", "img/headerlogogrey.png");
            $("header").find(".btnNav>span>div").css("background-color", "#6E6E6E");
            $("header").find("nav>ul>li").addClass("changed");
        }

        if (oIdx === 1) {
            $("header").find("#home").removeClass("fontweight500");
            $("header").find("#about").addClass("fontweight500");

        } else {
            $("header").find("#about").removeClass("fontweight500");
        }
        //projects
        if (oIdx === 2) {
            $("header").find("#about").removeClass("fontweight500");
            $("header").find("#projects").addClass("fontweight500");
        } else {
            $("header").find("#projects").removeClass("fontweight500");
        }

        //works
        if (oIdx === 3) {
            $("header").find("#projects").removeClass("fontweight500");
            $("header").find("#works").addClass("fontweight500");
        } else {
            $("header").find("#works").removeClass("fontweight500");
        }
        //contact
        if (oIdx === 4) {
            $("header").find("#works").removeClass("fontweight500");
            $("header").find("#contact").addClass("fontweight500");
        } else {
            $("header").find("#contact").removeClass("fontweight500");
        };


    });



    $("header").delay(1500).animate({
        top: "0",
        opacity: "1"
    }, 800);

    $("header").find(".btnNav").mouseenter(function () {
        $("#btnNav1").animate({
            width: "30px",
            marginLeft: "0"
        }, 500)
        $("#btnNav2").animate({
            width: "18px",
            marginLeft: "12px"
        }, 500)

        $("#btnNav3").animate({
            width: "21px",
            marginLeft: "9px"
        }, 500)
    })

    $("header").find(".btnNav").mouseleave(function () {
        $("#btnNav1").animate({
            width: "21px",
            marginLeft: "9"
        }, 500)
        $("#btnNav2").animate({
            width: "30px",
            marginLeft: "0"
        }, 500)

        $("#btnNav3").animate({
            width: "15px",
            marginLeft: "15px"
        }, 500)
    });

    $("header").find("#home").click(function () {
        $('body').animate({
            scrollTop: oPage[0]
        }, 500);
    });
    $("header").find("#about").click(function () {
        $('body').animate({
            scrollTop: oPage[1]
        }, 500);
    });
    $("header").find("#projects").click(function () {
        $('body').animate({
            scrollTop: oPage[2]
        }, 500);
    });
    $("header").find("#works").click(function () {
        $('body').animate({
            scrollTop: oPage[3]
        }, 500);
    });
    $("header").find("#contact").click(function () {
        $('body').animate({
            scrollTop: oPage[4]
        }, 500);
    });
    $("footer").find(".btnTop").click(function () {
        $('body').animate({
            scrollTop: oPage[0]
        }, 500, function () {
            isScroll = false;
        });
        return;
    });





})

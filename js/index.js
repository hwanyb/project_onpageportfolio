$(document).ready(function () {
    $(".intro").children(".logo").delay(500).animate({
        width: "1800px",
        top: "-457px"
    }, 1000);
    $(".intro").delay(1100).fadeOut(800);

    $(".mainsec1").find("h2").delay(2000).animate({
        marginLeft: "0",
        opacity: "1"
    }, 1000, "easeInOutQuart");
    $(".mainsec1").find("p").delay(2200).animate({
        marginLeft: "0",
        opacity: "1"
    }, 1000, "easeInOutQuart");
    $(".mainsec1").find(".bottomCenter").delay(2300).animate({
        bottom: "0",
        opacity: "1"
    }, 1000, "easeInOutQuart");
    $(".mainsec1").find(".bottomRight").delay(2300).animate({
        bottom: "0",
        opacity: "1"
    }, 1000, "easeInOutQuart");

    $(".mainsec1").find(".scrollWrap").on("click", function () {
        $('body').animate({
            scrollTop: oPage[1]
        }, 500);
    });



    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt>ul>li").length;
    var del = -1;
    var repeatInt = null;
    var tyInt = null;


    // 타이핑될 텍스트를 가져온다 
    var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 

    if (typingBool == false) {
        // 타이핑이 진행되지 않았다면 
        typingBool = true;
        tyInt = setInterval(typing, 200); // 첫번재 반복동작 
    }

    function typing() {
        if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복 
            $(".typing").append(typingTxt[typingIdx]);
            // 한글자씩 이어준다. 
            typingIdx++;
            if (typingIdx == typingTxt.length) {
                //첫번째 단어가 써지면 1초쉰다.
                clearInterval(tyInt);
                setTimeout(function () {
                    tyInt = setInterval(typing, 200);
                }, 1000);
            }
        } else {

            //한문장이끝나면
            if (-typingTxt.length - 1 < del) {
                //한글자씩 지운다.
                $(".typing").html(typingTxt.slice(0, del))
                del--;
            } else {
                if (liIndex >= liLength - 1) {
                    liIndex = 0;
                } else {
                    liIndex++;
                }

                //변수초기화 
                typingIdx = 0;
                del = -1;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //1초후 다음분장 타이핑 
                clearInterval(tyInt);
                setTimeout(function () {
                    tyInt = setInterval(typing, 200);
                }, 1000);
            }


        }
    }
    $winHeight = 0; // 브라우저 창 높이
    $oPage = []; // 원페이지 시작 위치 배열
    $oIdx = 0; // 현재 원페이지 인덱스
    $isScroll = false; // 현재 스크롤 여부
    $isOpage = true; // 현재 원페이지 여부
    $isNone = false;
    $posScroll = 0; // 현재 스크롤 위치

    //                isOpage = true;
    //                isScroll = true;
    //                $('body').animate({
    //                    scrollTop: oPage[oIdx]
    //                }, 500, function () {
    //                    isScroll = false;
    //                });
    //                return;

    $(".mainsec2_btnwrap").css("display", "none");
    console.log(oIdx);
    console.log(oPage);

    $(window).scroll(function () {
        var sct = $(document).scrollTop();
        console.log(sct);

        if (oIdx === 1) {
            $(".mainsec2_intro_img").animate({
                opacity: "1"
            }, 1000);
            $(".mainsec2").find("#mainsec2_intro_img1").delay(300).animate({
                opacity: "1"
            }, 1000);
            $(".mainsec2").find("#mainsec2_intro_img2").delay(500).animate({
                opacity: "1",
                left: "9px"
            }, 1000);
            $(".mainsec2_intro_txt").delay(500).animate({
                opacity: "1"
            }, 1000);

            $(".mainsec2_intro2_first").find("h2").delay(600).animate({
                opacity: "1",
                bottom: "0"
            }, 500);
            $(".mainsec2_intro2_first").find("p").delay(800).animate({
                opacity: "1",
                bottom: "0"
            }, 500);

            $(".mainsec2_btnwrap").delay(1000).fadeIn('slow');
        }



        if (sct >= 1900) {
            $(".education").find("#educationTitle").animate({
                opacity: "1",
                left: "0"
            });
            $(".education").find(".green").delay(200).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".education").find(".duk").delay(300).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".education").find(".it").delay(400).animate({
                opacity: "1",
                bottom: "0"
            });
        }



        if (sct >= 2000) {
            $(".license").find(".licenseTitle").animate({
                opacity: "1",
                left: "0"
            });
            $(".license").find(".jungbo").delay(200).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".license").find(".visual").delay(300).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".license").find(".computer").delay(400).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".license").find(".drive").delay(500).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".license").find(".web").delay(600).animate({
                opacity: "1",
                bottom: "0"
            });
        }
        if (sct >= 2300) {
            $(".skills").find(".skillsTitle").animate({
                opacity: "1",
                left: "0"
            });
            $(".skills").find(".discript_l>p").delay(200).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".skills").find(".discript_r>p").delay(400).animate({
                opacity: "1",
                bottom: "0"
            });
        }

        if (sct >= 2500) {
            $(".mainsec2").find("#overbar1").animate({
                width: "350px"
            }, 200);
            $(".mainsec2").find("#overbar2").delay(150).animate({
                width: "350px"
            }, 200);
            $(".mainsec2").find("#overbar2").delay(200).animate({
                width: "350px"
            }, 200);
            $(".mainsec2").find("#overbar3").delay(250).animate({
                width: "340px"
            }, 200);
            $(".mainsec2").find("#overbar4").delay(300).animate({
                width: "330px"
            }, 200);
            $(".mainsec2").find("#overbar5").delay(350).animate({
                width: "300px"
            }, 200);
            $(".mainsec2").find("#overbar6").delay(400).animate({
                width: "280px"
            }, 200);
            $(".mainsec2").find("#overbar7").delay(450).animate({
                width: "250px"
            }, 200);
            $(".mainsec2").find("#overbar8").delay(500).animate({
                width: "240px"
            }, 200);
            $(".mainsec2").find("#overbar9").delay(550).animate({
                width: "240px"
            }, 200);
            $(".mainsec2").find("#overbar10").delay(600).animate({
                width: "220px"
            }, 200);
            $(".mainsec2").find("#overbar11").delay(650).animate({
                width: "220px"
            }, 200);
        }


        if (oIdx === 2) {
            $(".mainsec3").find(".title").animate({
                opacity: "1",
                left: "0"
            });
        }

        if (sct >= 4200) {
            $(".projectDetail").find(".closeBtn>img").attr("src", "img/closeBtnGrey.png");
        } else {
            $(".projectDetail").find(".closeBtn>img").attr("src", "img/closeBtn.png");
        }



        if (oIdx === 3) {
            $(".mainsec4").find(".title").animate({
                opacity: "1",
                left: "0"
            });
            $(".mainsec4").find(".lelabo").delay(200).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".mainsec4").find(".rounda").delay(300).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".mainsec4").find(".eoyeomo").delay(400).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".mainsec4").find(".pollex").delay(500).animate({
                opacity: "1",
                bottom: "0"
            });
        }


        if (oIdx === 4) {
            $(".mainsec5").find(".title").animate({
                opacity: "1",
                left: "0"
            });
            $(".mainsec5").find(".content").delay(200).animate({
                opacity: "1",
                bottom: "0"
            });
            $(".mainsec5").find(".right").delay(200).animate({
                opacity: "1",
                right: "214px"
            }, 1000);

        }
    });









    $(".vips").mouseenter(function () {
        $(".vipsHover").animate({
            bottom: "0",
            opacity: "1"
        }, 500);
    });
    $(".vips").mouseleave(function () {
        $(".vipsHover").animate({
            bottom: "-501px",
            opacity: "0"
        }, 500);
    });



    $(".seomun").mouseenter(function () {
        $(".seomunHover").animate({
            bottom: "0",
            opacity: "1"
        }, 500);
    });
    $(".seomun").mouseleave(function () {
        $(".seomunHover").animate({
            bottom: "-501px",
            opacity: "0"
        }, 500);
    });

    $(".vipsHover").find(".btnArrow").on("click", function () {
        $(".project1").fadeIn(100);
        $(".project1").animate({
            right: "0",
            opacity: "1"
        }, 500);
        $('body').animate({
            scrollTop: 4857
        }, 500);
    });

    $(".seomunHover").find(".btnArrow").on("click", function () {
        $(".project2").fadeIn(100);
        $(".project2").animate({
            right: "0",
            opacity: "1"
        }, 500);
        $('body').animate({
            scrollTop: 4857
        }, 500);
    });




    $(".projectDetail").find(".closeBtn").on("click", function () {

        $(".projectDetail").animate({
            right: "-100%",
            opacity: "0"
        });
        $(".projectDetail").fadeOut(100);
        $('body').animate({
            scrollTop: oPage[2]
        }, 500);
    });




});

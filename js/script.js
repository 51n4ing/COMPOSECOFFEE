$(document).ready(function() { 
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    /* 스와이퍼 */

    $('.sec_2_btn_list:nth-child(1)').addClass("active");

    $(".sec_2_con_list").each(function(ii){

        $(this).attr("data-num", ii);

    });

    $(".sec_2_btn_list").each(function(i){

        $(this).attr("data-index", i);

    }).click(function(event){

        event.preventDefault();

        $('.sec_2_btn_list').removeClass("active");
        $(this).addClass("active");

        var iii = $(this).attr("data-index");

    
        $(".sec_2_con_list").css("display", "none");

        $(".sec_2_con_list[data-num='" + iii + "']").fadeIn(200).css("display", "flex");
            
    });


/*     if ($(window).width() < 800 ) {

        var swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: "auto",
            
            pagination: {
            clickable: true,
            },
        });

    }
 */

    var swiper2 = null; // Swiper 변수를 전역으로 선언하고 초기화

function initSwiper() {
    if ($(window).width() < 800) {
        swiper2 = new Swiper(".mySwiper2", {
            slidesPerView: "auto",
            /* spaceBetween: 30, */
            pagination: {
                clickable: true,
            },
        });
    }
}

// 초기화 함수 호출
initSwiper();

// 윈도우 사이즈 변경 이벤트 리스너 추가
$(window).on('resize', function() {
    if ($(window).width() >= 800) {
        // 윈도우 너비가 800 이상일 때 Swiper 삭제 및 초기화
        if (swiper2 !== null) {
            swiper2.destroy(); // Swiper 삭제
            swiper2 = null; // Swiper 변수 초기화
        }
    } else {
        // 윈도우 너비가 800 미만일 때 Swiper 초기화
        if (swiper2 === null) {
            initSwiper(); // Swiper 재초기화
        }
    }
});



 $(function(){

    $("html, body").animate({scrollTop: 0}, "fast");

 });



});


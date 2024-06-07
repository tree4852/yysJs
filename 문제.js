
//제이쿼리 jquery
document.ready(function(){
    $("#gnb li").eq(0).addClass("on");

    $("h1 a").attr("href","http://www.naver.com").html("링크");

    $('#gnb h1 a img').hover(
        function() {
            $(this).attr("src","logoover.jpg"); //img의 속성 src의 이미지를 바꾼다 
        },
        function() {
            // 마우스 아웃 시 배경 이미지를 원래대로 되돌림
            $(this).attr("src"," "); // 기존 이미지는 이미 HTML에서 지정되었으므로 속성을 삭제하여 원래대로 복원
        }
    );
    

});

//javascript

window.onload = function(){
        // document.querySelector("#gnb li:nth-child(1)").classList.add("on");

        document.querySelectorAll("#gnb li")[0].classList.add("on");
    
        // var an = document.querySelector("h1 a");
        // an.setAttribute("href","http://www.naver.com");

        // document.querySelector("h1 a").innerHTML=
        // `<a href = "http://www.naver.com"></a>`

        document.querySelector("h1 a").setAttribute("href", "http://www.naver.com"); //GPT Pick 내가만든 최적화된식 

    
        var myover = document.querySelector("h1 img");
        
        myover.addEventListener("mouseover",function(){
            myover.src = "logoover.jpg";
        });

        myover.addEventListener("mouseout",function(){
            myover.src = " ";
        })
        
    

}
// $(".box").addClass("highlight");
// document.querySelector(".box").classList.add("highlight");


// $("p").css("color", "red");
// document.querySelector("p").classList.add("color", "red");


// $(".item").hide();
// document.querySelector(".item").


// $(".button").click(function() {
//     $("body").css("background-color", "yellow");
//   });

//   document.querySelectorAll(".button").forEach(function(){
//     button.addEventListener("click",function(){
//         body.classList.add("background-color", "yellow")
//     })
//   })


//   $(".button").click(function() {
//     alert("버튼이 클릭되었습니다!");
//   });

//   document.querySelectorAll(".button").forEach(function(button){
//     button.addEventListener("click",function(){
//         alert("버튼이 클릭되었습니다!")
//     })
//   })


//   $(".button").click(function() {
//     var buttonText = $(this).text();
//     alert(buttonText);
//   });

//   document.querySelectorAll(".button").forEach(function(button){
//     const buttonText = this text();
//     button.addEventListener()
//   })


//gnb li 들중 첫번째 객체에 class on  을 넣어라

document.querySelectorAll("#gnb li")(0).classList.add("on");

$("#gnb li").eq(0).addClass("on");



//로고의 링크 주소를 http//:www.naver.com 으로 바꾸어라

document.querySelector("h1 a").setAttribute("href","http//:www.naver.com");

$("h1 a").attr("href","http//:www.naver.com");



//로고의 배경이미지를 마우스 오버 했을때만 logoover.jpg 로 바뀌게 하여라

 var myhover = document.querySelector("h1 img")

 myhover.addEventListener("mouseover",function(){
    myhover.src = "logoover.jpg";
 });
 myhover.addEventListener("mouseout",function(){
    myhover.src = "";
 });

    $("h1 img").hover(
        function(){
            $("this").attr("src", "logoover.jpg");
        },

        function(){
            $("this").attr("src", "");
            
        },


    )


    
 


// 

//초기 값, 설정값 ,증감식
for(var i = 0; i < 5; i++ ){
    // console.log("나는 다섯번 실행되지");
}

let count = 10;
    count -= 100;
    count =1;
    ++count;
    count++;

// console.log(count); //113

let multy = 10;
    multy = multy * 3 ; //곱하기
    multy = multy / 3 ; //나누기
//문자 연산식

let mystudy = "리엑트";
    mystudy = "리엑트" + "뷰";


let startj = 10;
    startj = 10; // 20
    startj += "원"; // 20원(문자가 되어버림)
    startj += 100;
    startj += 100; //20원 100100

console.log(

)

let meg = "";
for( i=0 ; i<10 ; i++){
    meg += "나 \"열번\" 나오게 해줘 \n";
     
}
// console.log(meg)


const nav_data = [
    {
        gnb_li_a : "회사소개",
        gnb_li_href : "./company.html"
    },
    {
        gnb_li_a : "제품소개",
        gnb_li_href : "./product.html"
    },
    {
        gnb_li_a : "커뮤니티",
        gnb_li_href : "./board.html"
    }
]

// console.log(nav_data[1].gnb_li_href);
// console.log(nav_data[1]["gnb_li_href"]);
let mygnb = "";
 for(let liea = 0; liea < 3; liea ++){
   mygnb += nav_data[liea].gnb_li_href;
 }
console.log(mygnb); //정통 for문


let mygnb2 = "";
 for(let v in nav_data){
//    console.log("for in 문 처리:",v);
   mygnb2 += `${nav_data[v].gnb_li_href}\n`;
 }

console.log(mygnb2);


// document.getElementsByClassName("gnb").length; html에 쓰는식
// document.querySelectorAll(".gnb").length;
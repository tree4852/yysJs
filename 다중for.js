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

let mygnb = "";
 for(let liea = 0; liea < 3; liea ++){
   mygnb += nav_data[liea].gnb_li_href; 
 }
// console.log(mygnb); //정통 for문 


let mygnb2 = "";
 for(let v in nav_data[1]){
//    console.log("for in 문 처리:",v);
   mygnb2 += nav_data[1][v];
 }

console.log(mygnb2);
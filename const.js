let _month = ['3 개월 동안만','4개월동안만','7개월 동안만'];
let _study = ['피그마','뷰','리엑트'];
let myname = ['홍길동','나훈아', '조명섭'];
//메모리낭비


// const mytext = "그래 나도 한번 "+ study +" 해보자!!";
const mytext0 = `저는 ${_month[0]} ${_study[0]} 공부를 한 ${myname[0]}입니다,`;
const mytext1 = `저는 ${_month[1]} ${_study[1]} 공부를 한 ${myname[1]}입니다,`;
const mytext2 = `저는 ${_month[2]} ${_study[2]} 공부를 한 ${myname[2]}입니다,`;


// 저는 3개월 간의 피그마 공부를 한 홍길동입니다.
// 저는 4개월 간의 뷰 공부를 한 나훈아입니다.
// 저는 7개월 간의 리엑트 공부를 한 조명섭입니다.

//console.log(mytext0,mytext1,mytext2);

const myarr = [
    ["네이버","http://www.naver.com"],
    ["다음","http://www.daum.net"],
    ["구글","http://www.google.com"]
]
console.log("첫번째 배열",myarr[0] ,typeof(myarr[0]),
 "첫번째배열의 첫번째 값",myarr[0][0],typeof(myarr[0][0]) )

 console .log(`<a href = '${myarr[0][1]}'>${myarr[0][0]} </>`)
 console .log(`<a href = '${myarr[1][1]}'>${myarr[1][0]} </>`)
 console .log(`<a href = '${myarr[2][1]}'>${myarr[2][0]} </>`)

const myarrobj = {
    _month : ['3 개월 동안만','4개월동안만','7개월 동안만'],
    _study : ['피그마','뷰','리엑트'],
    myname : ['홍길동','나훈아', '조명섭'],


}
console .log(myarrobj._study[0])

const gnb ={
    d1:{
        text : "회사소개",
        href : "./company.html"
    },
    d2:[
        {
            text : "ceo 인사말",
            href : "./company.html" 

        },
        {
            text : "오시는길",
            href : "./company.html" 

        },
        {
            text : "공지사항",
            href : "./company.html" 

        }
    ]

}

console.log (`<a href = "${gnb.d1.href}">${gnb.d1.text}</a>`)

console.log (`<a href = "${gnb.d2[2].href}">${gnb.d2[2].text}</a>`)
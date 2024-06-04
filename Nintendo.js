

const hd_yys ={

    gnb : [
       {
        Text : "본체 및 amildo",
        href : "https://www.nintendo.co.kr/hardware/",
        cls : ["lino dac-n"],
        gnb_ul_li :[
            {
            Text : "닌텐도 스위치",
            href : "https://www.nintendo.co.kr/hardware/"
            },
            {
                Text : "닌텐도amildo",
                href : "https://www.nintendo.co.kr/hardware/"
             },
             {
                Text : "시계 같은거",
                href : "https://www.nintendo.co.kr/hardware/"
             },
            
        ] 

       },

       {
        Text : "소프트웨어",
        href : "https://www.nintendo.co.kr/hardware/",
        cls : ["lino dac-n"],
        gnb_ul_li :[
            {
            Text : "Nintendo Swich 소프트웨어",
            href : "https://www.nintendo.co.kr/hardware/"
            },
            {
                Text : "소프트웨어 발매 스케줄",
                href : "https://www.nintendo.co.kr/hardware/"
             },
             {
                Text : "스마트폰 앱용",
                href : "https://www.nintendo.co.kr/hardware/"
             },
            
        ] 

       },


       {
        Text : "고객지원",
        href : "https://www.nintendo.co.kr/hardware/",
        cls : ["lino dac-n"],
        gnb_ul_li :[
            {
            Text : "고객지원 홈페이지",
            href : "https://www.nintendo.co.kr/hardware/"
            },
            {
                Text : "점검안내",
                href : "https://www.nintendo.co.kr/hardware/"
             },
             {
                Text : "닌텐도e숍",
                href : "https://www.nintendo.co.kr/hardware/"
             },
             {
                Text : "온라인 서포트",
                href : "https://www.nintendo.co.kr/hardware/"
             },
            
        ] 

       },


       {
        Text : "콜라보소식",
        href : "https://www.nintendo.co.kr/hardware/",
        cls : ["lino dac-n"],
        gnb_ul_li :[
            {
            Text : "닌텐도 뉴스",
            href : "https://www.nintendo.co.kr/hardware/"
            },
            {
                Text : "유튜브",
                href : "https://www.nintendo.co.kr/hardware/"
             },
             
        ] 

       }

        


    ]

    

}

window.onload = function(){
    let gnbs ="";

    for(g in hd_yys.gnb){
        gnbs += `<li '${hd_yys.gnb[g].cls[0]}'>
            <a href = '${hd_yys.gnb[g].href}'>
            ${hd_yys.gnb[g].Text}</a>`;
        
        gnbs += `<ul>`;

        for(s in hd_yys.gnb[g].gnb_ul_li){
        
            gnbs += `<li>
            <a href = '${hd_yys.gnb[g].gnb_ul_li[s].href}'>
            ${hd_yys.gnb[g].gnb_ul_li[s].Text}</a></li>`

        }
        gnbs += `</ul>`;
        gnbs += `</li>`;



    }

    document.querySelector("#gnb").innerHTML = gnbs;
}
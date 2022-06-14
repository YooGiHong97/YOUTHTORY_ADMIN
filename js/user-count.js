expireDate = new Date
expireDate.setMonth(expireDate.getMonth()+6)
hitCt = eval(cookieVal("pageHit"))
hitCt++
document.cookie = "pageHit="+hitCt+";expires=" + expireDate.toGMTString()

function cookieVal(cookieName) {
        thisCookie = document.cookie.split("; ")
        for (i=0; i<thisCookie.length; i++) {
        if (cookieName == thisCookie[i].split("=")[0]) {
        return thisCookie[i].split("=")[1]
    }
}
return 0
}

document.write("제 홈페이지에 <font color=red>" + hitCt + "</font> 번째 방문자이시네요.")


$.ajax({
    url: "/visit/visit_record.do",
    data: { 

    },  
    method: "GET",  
    dataType: "json" 
})


// 쿠키, IP주소를 따오고 중복되는게 있으면 DB로 전송하지 않음
// 처음 접속하는 사용자를 구해서 DB를 호출하면 카운팅이 되어서 페이지로 전송되게

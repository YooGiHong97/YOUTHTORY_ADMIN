// const firebaseConfig = {
//     apiKey: "AIzaSyDNvZTWK5frqUpF43TLLKcCY-18K3dat7g",
//     authDomain: "hit-counter-bef28.firebaseapp.com",
//     projectId: "hit-counter-bef28",
//     storageBucket: "hit-counter-bef28.appspot.com",
//     messagingSenderId: "732467417978",
//     appId: "1:732467417978:web:acd0103f6d42a48bdd3cc3",
//   };
//   firebase.initializeApp(firebaseConfig);
function generateHitCount() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    
    fetch('http://115.85.180.96:8080/visit/visit_record.do', config)
    .then((res) => res.json())
    .then((data) => {
        hitCounter.innerHTML = data
        console.log(data)
    })
}
generateHitCount()
  
  const hitCounter = document.getElementById("hit-counter");
  hitCounter.style.display = "none";
  
//   const db = firebase.database().ref("totalHits");
//   db.on("value", (snapshot) => {
//     hitCounter.textContent = snapshot.val();
//   });
  
  const userCookieName = "returningVisitor";
  checkUserCookie(userCookieName);
  function checkUserCookie(userCookieName) {
    const regEx = new RegExp(userCookieName, "g");
    const cookieExists = document.cookie.match(regEx);
    if (cookieExists != null) {
      hitCounter.style.display = "inline-block";
    } else {
      createUserCookie(userCookieName);
      db.transaction(
        (totalHits) => totalHits + 1,
        (error) => {
          if (error) {
            console.log(error);
          } else {
            hitCounter.style.display = "inline-block";
          }
        }
      );
    }
  }
  
  function createUserCookie(userCookieName) {
    const userCookieValue = "Yes";
    const userCookieDays = 7;
    let expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + userCookieDays);
    document.cookie =
      userCookieName +
      "=" +
      userCookieValue +
      "; expires=" +
      expiryDate.toGMTString() +
      "path=/";
  }
  
  // function getIP(json) {
  //   document.getElementById("#tesk");
  //   document.write("My public IP address is: ", json.ip);
  // }

  // const date = new Date();
  // if(json.ip === data.IPv4) {
  //   date < date(24.0001) ==  
  // }

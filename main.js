// 0207 -- nam
// 로그인 팝업
var loginBtn = document.getElementById("login-btn");
var loginPopup = document.getElementById("login-popup");
var closeBtn = document.getElementsByClassName("close-btn")[0];

loginBtn.onclick = function() {
  loginPopup.style.display = "block";
}

closeBtn.onclick = function() {
  loginPopup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == loginPopup) {
    loginPopup.style.display = "none";
  }
}



// 카카오 로그인

Kakao.init('1bd83dd9c1eda15c89d6a9cc209d0a69');

function kakaoLogin() {
  Kakao.Auth.login({
    success: function(authObj) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(res) {
          console.log(res);
          // Store the user's information in your database
        },
        fail: function(error) {
          console.log(error);
        }
      });
    },
    fail: function(err) {
      console.log(err);
    }
  });
}

document.getElementById('kakao-login-btn').addEventListener('click', function() {
  kakaoLogin();
});
// .







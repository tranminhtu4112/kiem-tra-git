const username = document.querySelector("#txtUserName");
const password = document.querySelector("#txtpassword");
const btnsubmit = document.querySelector("#btnsubmit");
btnsubmit.addEventListener("click", () => {
    if(username.value == "admin" && password.value == "admin")
        location.href = 'home.html';
    else
        alert("Đăng nhập thất bại")

})
document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });


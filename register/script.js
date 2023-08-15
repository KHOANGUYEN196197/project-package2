$(document).ready(function () {
    //dang nhap
    $("#form-register").submit(function (e) {
        e.preventDefault();
        console.log(123);
        var userName = $("#register-username").val();
        var password = $("#register-password").val();

        var newUser = {
            userName: userName,
            password: password
        }
        localStorage.setItem(userName, JSON.stringify(newUser));
        alert("dang ky thanh cong");
        window.location.href = "../login/index.html"
    })
})
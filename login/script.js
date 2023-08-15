$(document).ready(function () {
    //dang nhap
    $("#form-login").submit(function (e) {
        e.preventDefault();
        console.log(123);
        var userName = $("#login-username").val();
        var password = $("#login-password").val();

        var storeLocalUser = localStorage.getItem(userName);
        if (storeLocalUser && JSON.parse(storeLocalUser).password === password) {
            alert("dang nhap thanh cong");
            localStorage.setItem('isLoggedIn', true);
            window.location.href = "../admin/index.html";
        } else {
            alert("dang nhap that bai")
        }
    })
})

function toPageRegister() {
    window.location.href = "../register/index.html"
}
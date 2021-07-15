
/* LOGIN */
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    $('#username').on('keydown', function() {
        $("#error-pass").css({ display: "none" });
    });
});




function Click() {
    if (!isFormValid()) {
        $("#error-pass" ).text("Username and password shoud be filled!");
        $("#error-pass").css({ display: "block" });
        return;
    }
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var fd = new FormData();
    /*
    username: rkg68946@zwoho.com
    password: Qwerty1!
    scope: openid profile Glister.WebUIAPI offline_access
    client_id: Glister.WebUIAPI
    grant_type: password */

    fd.append('username', username.value);
    fd.append('password', password.value);
    fd.append('scope', "openid profile Glister.WebUIAPI offline_access");
    fd.append('client_id', "Glister.WebUIAPI");
    fd.append('grant_type', "password");

    $.ajax({
        url: 'https://gcdevapi.azurewebsites.net/connect/token',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function () {
            window.location.href = "profile.html";
            //new ManageTodosView();
            self.undelegateEvents();
            delete self;
        },
        error: function (data, textStatus, jqXHR) {
            console.log(data.responseJSON.error_description);
            $("#error-pass" ).text(data.responseJSON.error_description);
            $("#error-pass").css({ display: "block" });
        }
    })
}

function isFormValid () {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    
    if (!username.value || !password.value) {
        return false;
    }
    
    return true;
}


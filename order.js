function emailSend(){


    var username = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;

    var messageBody = "Name" + username +
    "<br/>Phone" + phone + 
    "<br/>Email"+ email;
    

    email.send({
    Host : "smtp.elasticemail.com",
    Username : "patelnarmra2405@gmail.com",
    Password : "2EE3D130762128F6A86BC75FE84F4F7D983E",
    To : 'meetcoc1105@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Order",
    Body : messageBody
}).then(
  message => alert(message)
);
}
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}

let user = new User('exampleMail@gmail.com', 'easypassword');

//Login procedure
$('#signInButton').on('click', function(user) {
    let email = $("#inputEmail").val();
    let password = $('#inputPassword').val();
    if(email === '' || password === '')
        alert('Missing input values');
    else{
        $('#userSection').html('');
    }

    //login not working check it
    //if(email == user.email && password == user.password)
        $('#userSection').html('\
        <div class="nav-item dropdown mr-2">\
        <a class="nav-link dropdown-toggle text-muted" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          MyAccount\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
          <a class="dropdown-item" href="#">Favourite Places</a>\
          <a class="dropdown-item" href="#">Places to visit</a>\
          <div class="dropdown-divider"></div>\
          <a class="dropdown-item" id="logout" href="#">Logout</a>\
        </div>\
      </div>\
      ');
});

//logout user from website TO ADD
$('#logout').on('click', function(){
    
});

//==============REGISTRATION=======================
$('#submitRegistration').on('click', function(){
    let email = $('#registrationEmail').val();
    let username = $('#registrationUsername').val();
    let password = $('#registrationPassword').val();
    let repeatPassword = $('#registrationRepeatPassword').val();

    if(email === '' || username === '' || password === '' || repeatPassword === ''){
        alert('Missing input values');
    }

    if(password !== repeatPassword){
        alert('Values are not the same');
    }

});



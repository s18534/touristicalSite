class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
        this.username = 'User1';
        this.isUserLoged = false;
        this.isAdmin = true;
    }
}

var user = new User('exampleMail@gmail.com', '123');

//Like or dislike thing
$('#likeButton').on('click', function() {
    let text = $("#spanLike").text();
    if(text == 'Disslike'){
        $("#spanLike").text('Like');
    }else{
        $("#spanLike").text('Disslike');
    }
});

//comment
$('#submitComment').on('click', function() {
    let comment = $('#comment').val();

    if(user.isUserLoged){
        if(comment === '')
            window.alert('You can\'t insert empty comment');
        else{
            $("#comments").append('\
            <h5 class="mt-1 ">' +
            user.username +
            '</h5>\
            <p class="ml-3">' +
            comment +
            '</p>\
            ');
        }
    }else
        window.alert('You must be logged in to insert comment');

        $('#comment').val('');
});

//Login procedure
$('#signInButton').on('click', function() {
    let email = $("#inputEmail").val();
    let password = $('#inputPassword').val();
    if(email === '' || password === '')
        alert('Missing input values');
    else{
        $('#userSection').html('');
    }

    //login
    if(email === user.email && password === user.password) {
        $('#userSection').html('\
        <div class="nav-item dropdown mr-2">\
        <a class="nav-link dropdown-toggle text-muted" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\
          MyAccount\
        </a>\
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">\
          <a class="dropdown-item" href="#">Favourite Places</a>\
          <a class="dropdown-item" href="#">Places to visit</a>\
          <div class="dropdown-divider"></div>\
          <a class="dropdown-item"  id="logout" href="#">Logout</a>\
        </div>\
      </div>\
      ');
      user.isUserLoged = true;
    }

    if(user.isAdmin){
        window.open("admin.html");
    }

});


//logout user from website
$(document).on('click','#logout', function(){
    console.log('logout');
    $('#userSection').html('\
    <div class="form-group mb-2">\
    <label for="inputEmail" class="sr-only">Email address</label>\
    <input type="email" class="form-control" id="inputEmail" placeholder="Email address">\
  </div>\
  <div class="form-group mx-sm-3 mb-2">\
    <label for="inputPassword" class="sr-only">Password</label>\
    <input type="password" class="form-control" id="inputPassword" placeholder="Password">\
  </div>\
  <button type="submit" id="signInButton" class="btn btn-outline-primary bg-light mb-2 ">Sign in</button>\
  <button type="submit" id="registerButton" class="btn  btn-outline-primary bg-light mb-2 ml-2 ">\
    <a href="register.html" target="_blank">Register</a>\
  </button>');
  user.isUserLoged = false;
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

    //sending to base

});

//=================Admin Page======================

	
	// Edit row on edit button click to ADD
$(document).on("click", "#edit", function(){		
    
});

	// Delete row on delete button click
$(document).on("click", "#delete", function(){
    $(this).parents("tr").remove();
	$("#addNew").removeAttr("disabled");
});

function userAdd(email, password, username) {
    $("#productTable").append("<tr>" + 
        "<td>" + email + "</td>" +
        "<td>" + password + "</td>" +
        "<td>" + username + "</td>" +
        '<td>\
        <button type="submit" id="edit" class="btn btn-outline-primary bg-light mb-2 ">Edit</button>\
        <button type="submit" id="delete" class="btn  btn-outline-primary bg-light mb-2 ml-2 ">Delete</button>\
        </td>' +
        "</tr>");
}

 //adding user
$('#saveUser').on('click', function() {
    let email = $('#adminEmail').val();
    let username = $('#adminUsername').val();
    let password = $('#adminPassword').val();
    userAdd(email, username, password);
});

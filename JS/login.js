let Email = document.getElementById('email');
let Password = document.getElementById('password');
let Info = document.getElementById('info');


function register(){
    event.preventDefault();
   
    let details={
        'eemail' : Email.value,
        'ppasword' : Password.value,
    }
    let json = JSON.stringify(details);
    localStorage.setItem(Email.value,json);
    Info.textContent = alert('User is Registered Successfully!!!');
    console.log(details);
    Email.value = '';
    Password.value = '';
    window.location.href = 'dashboard.html';
}

let Mail = document.getElementById('mail');
let Pword = document.getElementById('pword');

function Enter(){
    event.preventDefault();
      
    let mmail = Mail.value;
    let ppword = Pword.value;
    let getUser = localStorage.getItem(mmail);
    let detail = JSON.parse(getUser);

    if(getUser == null){
        logininfo.textContent = alert('User does not Exist');
    }
    else if(mmail == detail.eemail && ppword == detail.ppasword){
        logininfo.textContent = alert('User is logged in Successfully!!!');
        window.location.href = ('dashboard.html');
    }
    else{
        logininfo.textContent = alert('Wrong Credentials');
    }
    mmail.value = '';
    ppword.value = '';


}

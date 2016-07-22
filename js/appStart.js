var startButton = document.getElementById('start');
name = '';
startButton.addEventListener('click', function(){
    name = prompt("What is your name?");
    while (!isNaN(parseInt(name))) {
    name = prompt("What is your name?");
    }
    console.log(name);
    var lastName = prompt("What is your last name?");
    while (!isNaN(parseInt(lastName))) {
        lastName = prompt("What is your last name?");
    }
    console.log(lastName);
    alert("Welcome, "+name+" "+lastName);
    var nextstep = document.getElementById('nextstep');
    nextstep.style.display = 'block';
});

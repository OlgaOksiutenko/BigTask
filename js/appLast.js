/**
 * Created by ol on 23.06.2016.
 */
var lastButton = document.getElementById('laststep');
lastButton.addEventListener('click', function() {
    var answer = prompt("Do you want to be a millioner?(y/n)");
    console.log(answer);
   while (!answer =='y'|| !answer=='n') {
       answer = prompt("Do you want to be a millioner?(y/n)");
   }
    if (answer != 'y') {
        alert(name + ", thank you for your time. Bey");
        lastButton.style.display = "none";
        startButton.style.display = "block";
    } else {
        alert("Please, answer the question. You have 3 tries. Good luck!");
        var answ1 = prompt("Consider the following code: typeof []. What is the output?");
        for (i = 1; i<3; i++){
            if (answ1 == "object"){
                alert("Correct! Next question");
                break;
            }
            else {
                answ1 = prompt("Consider the following code: typeof []. What is the output?");
            }
        }
        var answ2 = prompt("Consider the following code: typeof NULL. What is the output?");
        for (i = 1; i<3; i++){
            if (answ2 == "object"){
                alert("Correct! Next question");
                break;
            }
            else {
                answ2 = prompt("Consider the following code: typeof NULL. What is the output?");
            }
        }
        var answ3 = prompt("Consider the following code: console.log('1'+'2'+'3'). What is the output?");
        for (i = 1; i<3; i++){
            if (answ3 == "32"){
                alert("Correct! Well done");
                break;
            }
            else {
                answ3 = prompt("Consider the following code: console.log(1+ +'2'+'3'). What is the output?");
            }
        }
        alert("1. your answer: "+ answ1 +"   "+"correct answer: object \n 2. your answer: "+ answ2 +"   "+"correct answer: object \n 3. your answer: "+ answ3 +"   "+"correct answer: 32 \n");
        if (prompt("Do you want to start again? (y/n)") == "y"){
            lastButton.style.display = "none";
            startButton.style.display = "block";
        } else
            {
                window.location.href="https://edu.web-academy.com.ua";
            }



    }

});
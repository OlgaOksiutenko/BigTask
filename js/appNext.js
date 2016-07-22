/**
 * Created by ol on 21.06.2016.
 */
var nextButton = document.getElementById('nextstep');
nextButton.addEventListener('click', function(){
    var text = prompt("Write few numbers, separated by comma, and we put them in order for you")
    var arr = text.split(',');
    console.log(arr);
    var i = 0;
    var j = 0;
    var arr3 = [];
    for (i = 0; i < arr.length; i++){
        if (!isNaN(parseInt(arr[i]))){
         arr3[j] = parseInt(arr[i]);
            j++;
        }
    }
    console.log(arr3);
    var arr2 = arr3.sort(function(a, b){return a-b});
    alert("Your new array looks like this:  "+arr2);
    console.log(arr2);
    nextButton.style.display = 'none';
    var laststep = document.getElementById('laststep');
    laststep.style.display = 'block';

});
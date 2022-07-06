var guess = Math.ceil(Math.random()*100)
var count=0;
function check(){
    var num = parseInt(document.getElementById('input').value)
    if(num === '' || num>100 || num<1){
        document.getElementById('res').innerHTML = "Invalid input."
        count-=1
    }
    else if((num-guess) > 30){
        document.getElementById('res').innerHTML = "Your guess is too high."
    }
    else if((num-guess) < 30 && (num-guess) > 0){
        document.getElementById('res').innerHTML = "Your guess is a little high."
    }
    else if((guess - num) > 30){
        document.getElementById('res').innerHTML = "Your guess is too low."
    }
    else if((guess - num) < 30 && (guess - num) > 0){
        document.getElementById('res').innerHTML = "Your guess is little low."
    }
    else if(num==guess){
        document.getElementById('res').innerHTML = "Your guess is on point."
    }

    count+=1
    document.getElementById('count').innerHTML = "Number of tries: " + count
    
}
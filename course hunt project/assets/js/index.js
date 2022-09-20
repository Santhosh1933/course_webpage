
function fun(){
    if(document.getElementById('name').value==''||document.getElementById('date').value==''||document.getElementById('sub').value=='')
    {
    alert("please fill all the detail");
    }
}
let username=localStorage.getItem("name");
console.log(username);
function uname()
{
    document.getElementById("name").innerHTML="<i class='fa-solid fa-user'></i>"+username;

}

function greeting(){
    var today = new Date();
    var time = today.getHours();
    if(time>=1&&time<=12){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good Morning"+username));
    }
    else if(time>=12&&time<=16){
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good Afternoon"+username));
    }
    else{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance("Good Evening"+username));
    }
    console.log(time);
}

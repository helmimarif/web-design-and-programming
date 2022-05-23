window.onload = init;

function init(){
    var button = document.getElementById("addButton");
    button.onclick=handleButtonClick;
}
function handleButtonClick(){
    var textInput = document.getElementById("songTextInput");
    var judulLagu = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = judulLagu;
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    alert("Menabahkan "+judulLagu);
    return(0);
}

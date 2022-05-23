var belajarajax;
function buatajax(){
    if (window.XMLHttpRequest){

        return new XMLHttpRequest();
    }
    if (window.ActiveXObject){

        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}

function ambildata(nip){
    belajarajax = buatajax();
    var url="ambildata.php";
    url=url+"?q="+nip;
    url=url+"&sid"+Math.random();
    belajarajax.onreadystatechange=stateChanged;
    belajarajax.open("GET",url,true);
    belajarajax.send(null);
}

function stateChanged(){
    var data;
    if (belajarajax.readyState==4){

        data=belajarajax.responseText;
        if(data.lenght>0){

            document.getElementById("alamat").value = data
        } else {

            document.getElementById("alamat").value = "";
        }
    }
}

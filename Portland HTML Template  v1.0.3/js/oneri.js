

function oneriAl(){

    let textAlani = document.getElementById("oneriTxt");


    if( textAlani.style.display  == "none"){
        textAlani.style.display = "";
    }else{
        textAlani.style.display = "none";
    }
    


}

function kaydet(){

    let onerilenSarki = document.getElementById("oneriTxt").value;

    let onerilerAlani = document.getElementById("oneriler");

    onerilerAlani.innerHTML +=  '<div class="cloud cloud-1"> '+ onerilenSarki +'</div>';
    document.getElementById("albumler").innerHTML += onerilenSarki;

}
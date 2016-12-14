/*
* funzione utilizzata per mostrare o nascondere il form dei dati
*/
function sHform(){
    var form = document.getElementById("formInputData");
    //window.alert("funzione chiamata");
    //console.log(form.style.display);
    form.style.display = (form.style.display=='none' ? 'block' : 'none');
}
/*
* funzione per cancellare le textbox del form
*/
function clearForm(){
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("level").value = "";
    document.getElementById("salary").value = "";
}
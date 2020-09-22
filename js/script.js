var modal = document.getElementById('id01');
var modal = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
$(document).ready(function(){
    $('id01').modal('show')
});
$("toggleFunction").click(function(){
    $('id01').modal('hide')
    &('id02').modal('show')
});
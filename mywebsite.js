
document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.card').forEach(card =>{

            card.addEventListener('mouseenter', function(){

            card.classList.add('hover');

            });

            card.addEventListener('mouseleave', function(){
                card.classList.remove('hover');

            });
        });
    });

    
function showform() {
    var form = document.getElementById('signup');

    if (form.style.display === "none"){
        form.style.display = "block";
    }

    else{
        form.style.display = "none";
    }
}


require('uikit')

function goTo(id){
    document.getElementById(id).scrollIntoView();
    UIkit.modal(document.getElementById('navigation')).hide();
}

window.goTo = goTo;

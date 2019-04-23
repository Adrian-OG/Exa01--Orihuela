
function inicio(){
 document.getElementById("bienvenidos").style.display= "block";
 document.getElementById("ventas").style.display="none";
 document.getElementById("clientes").style.display= "none";
 document.getElementById("productos").style.display="none";

}

function ventas(){
    document.getElementById("bienvenidos").style.display= "none";
    document.getElementById("ventas").style.display="block";
    document.getElementById("clientes").style.display= "none";
    document.getElementById("productos").style.display="none";
}
function clientes(){
    document.getElementById("bienvenidos").style.display= "none";
    document.getElementById("ventas").style.display="none";
    document.getElementById("clientes").style.display= "block";
    document.getElementById("productos").style.display="none";
}
function productos(){
    document.getElementById("bienvenidos").style.display= "none";
    document.getElementById("ventas").style.display="none";
    document.getElementById("clientes").style.display= "none";
    document.getElementById("productos").style.display="block";
    
}

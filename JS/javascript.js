//funcion para verificar que se elimina las tareas en console.log
function eliminar(){
 sessionStorage.setItem("");
 document.getElementById("tarea5").value="";
 }
 const dias= ['Evaluar alcance del proyecto','Diseñar plantilla','Revisar y corregir','Testear funciones','Presentar proyecto'];
 delete(dias)
 console.log(dias)
function calcularNota(){
    const nota1 =parseFloat(document.getElementById("nota1").value)
    const nota2 =parseFloat(document.getElementById("nota2").value)
    const nota3 =parseFloat(document.getElementById("nota3").value)

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
        alert("Por favor, ingrese las notas.")
        return
    }

    const notafinal = nota1 + nota2 + nota3

    let mensaje
    if (notafinal < 60){
        mensaje = "Reprobado"
    } else if (notafinal>= 60 && notafinal < 80){
        mensaje = "Bueno"
    } else if (notafinal >= 80 && notafinal <90){
        mensaje = "Muy bueno"
    } else if (notafinal >= 90 && notafinal <= 100){
        mensaje = "Sobresaliente"
    } else{
        mensaje = "Nota no valida"
    }

    document.getElementById("resultado").innerText = `Nota final: ${notafinal}% - ${mensaje}`
}
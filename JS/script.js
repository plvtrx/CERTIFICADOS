const alerta = document.getElementById("alerta");
const inputCert = document.getElementById("certificado");
const btnReset = document.getElementById("reset");

const bd = "";

inputCert.addEventListener("input", () => {
    let resultado = inputCert.value;

    if(resultado != bd) {
        alerta.style.display = "block";
        alerta.innerHTML = "<div class='naoEncontrado'> ESSE CERTIFICADO NÃO EXISTE OU NÃO FOI ENCONTRADO </div>";

        } 
        else if (resultado == bd) {
        alerta.style.display = "flex";

        alerta.innerHTML = 
        `
        CONFIRA O CERTIFICADO
        <form action="#">
            <div> <button type='submit' class='downloadBtn'> 🔼 </button> </div>
        </form>
        `;
    } else {
        alerta.style.display = "none";
    }
});
function RodarDado()
{
    const min = parseInt(document.getElementById("dadoMin").value.trim());
    const max = parseInt(document.getElementById("dadoMax").value.trim());
    var texto = ""

    if (min > max)
        texto = "O número mínimo deve ser menor que o máximo!";
    else if (min < 0 || max < 0)
        texto = "Números devem ser positivos!";
    else   
        texto = "🎲 " + GetRandomInt(min, max).toString();
    
    document.getElementById("dadoBtnTexto").textContent = texto + " - Rode outro dado";
}

function IsNumber(event)
{
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;

    // Caracteres 0-31 são caracteres de controle 
    // 48-57 = '0'-'9'
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    
    return true;
}

function GetRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
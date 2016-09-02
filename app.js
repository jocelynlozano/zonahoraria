window.addEventListener("load", function() {
    function reloj() {
        horaActual = new Date ();
        hora = horaActual.getHours();
        minuto = horaActual.getMinutes();
        segundo = horaActual.getSeconds();
        horaAMostrar = hora + " : " + minuto + " : " + segundo;
        var horaPeru = document.getElementById("horaPeru");
        horaPeru.innerHTML = "<p class='texto'>" + horaAMostrar + "</p>";
        var horaInglaterra = document.getElementById("horaInglaterra");
        horaInglaterra.innerHTML = (hora+6) + " : " + minuto + " : " + segundo;
        setTimeout(reloj,1000);
    }
    reloj();
});
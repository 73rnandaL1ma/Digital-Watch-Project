const horas = document.getElementById ('horas');
const minutos = document.getElementById ('minutos');
const segundos = document.getElementById ('segundos');

const relogio = setInterval( function time () {
    let dateToday = new Date (); 
    let Hr = dateToday.getHours ();
    let Min = dateToday.getMinutes ();
    let Sg = dateToday.getSeconds ();

    if (Hr <10 ) Hr = '0' + Hr;
    if (Min <10 ) Min = '0' + Min;
    if (Sg < 10 ) Sg = '0' + Sg;

    horas.textContent = Hr; 
    minutos.textContent = Min;
    segundos.textContent = Sg;

    
    
})
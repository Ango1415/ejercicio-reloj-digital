const formatoNumeroHora = (valor) => {
    if (valor < 10) valor = '0'+valor
    return valor
}

const mostrarReloj = () => {
    let fecha = new Date()
    let hora = formatoNumeroHora(fecha.getHours())
    let minutos = formatoNumeroHora(fecha.getMinutes())
    let segundos = formatoNumeroHora(fecha.getSeconds())
    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate()
    let mes = meses[fecha.getMonth()]
    let año = fecha.getFullYear
    document.getElementById('fecha').innerHTML = `${diaSemana}, ${dia} ${mes}`

    //classList restorna todas las clases CSS que se le estén aplicando al elemento que estamos buscando
    //La función toggle me activa la clase CSS si no la encuetra o está desactivada, o la desactiva si la encuetra activada. Funciona como un interruptor
    document.getElementById('contenedor').classList.toggle('animar')
}

setInterval(mostrarReloj, 1000)
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar los cursos durante un mes',
    expert: 'puedes tomar los cursos durante un año',
    expertduo: 'tu y alguien más pueden tomar TODOS los cursos'
};

function conseguirTipoSuscripcion(suscripcion){
    if(tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('Este tipo de suscripciòn no existe')
}

conseguirTipoSuscripcion('frddee')
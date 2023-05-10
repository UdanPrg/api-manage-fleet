export default function calcularDistancia(coord1, coord2) {
    const radioTierra = 6371; // Radio de la Tierra en kilómetros

    const latitud1 = convertirARadianes(coord1.latitud);
    const longitud1 = convertirARadianes(coord1.longitud);
    const latitud2 = convertirARadianes(coord2.latitud);
    const longitud2 = convertirARadianes(coord2.longitud);

    const diferenciaLatitud = latitud2 - latitud1;
    const diferenciaLongitud = longitud2 - longitud1;

    const a = Math.sin(diferenciaLatitud / 2) ** 2 + Math.cos(latitud1) * Math.cos(latitud2) * Math.sin(diferenciaLongitud / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = radioTierra * c;
    console.log(`La distancia entre las coordenadas es de ${distancia.toFixed(2)} kilómetros.`);

    let validation = distancia <= 3;

    return validation;
}

function convertirARadianes(grados) {
    return (grados * Math.PI) / 180;
}

// calcularDistancia({ latitud: 39.521887, longitud: -75.068753 }, { latitud: 39.52034515793049, longitud: -75.03441081638398 });


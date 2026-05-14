function stoorBestellingsPlaaslik(naam, epos, adres, totaal, items) {
    // Kry bestellings
    let bestellings = JSON.parse(localStorage.getItem('bestellings')) || [];

    // Skep nuwe objek (bestelling)
    const bestelling = {
        id: Date.now(), // Unieke ID gebaseer op tyd
        klient: naam,
        kontak: epos,
        adres: adres,
        items: items,
        totaal: totaal,
        datum: new Date().toLocaleDateString()
    };

    // Voeg objek tot lys en stoor
    bestellings.push(bestelling);
    localStorage.setItem('bestellings', JSON.stringify(bestellings));

    console.log('Bestelling gestoor:', bestelling);
}
document.getElementById('kmForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const kmInicial = parseFloat(document.getElementById('kmInicial').value);
    const kmFinal = parseFloat(document.getElementById('kmFinal').value);
    const litros = parseFloat(document.getElementById('litros').value);

    if (kmFinal <= kmInicial) {
        alert('Km Final deve ser maior que Km Inicial.');
        return;
    }

    const media = (kmFinal - kmInicial) / litros;
    document.getElementById('media').value = media.toFixed(2);

    const historicoLista = document.getElementById('historicoLista');
    const item = document.createElement('li');
    const now = new Date();
    item.textContent = `Nome: ${name}, Km Inicial: ${kmInicial}, Km Final: ${kmFinal}, Litros: ${litros}, Média: ${media.toFixed(2)} km/l - Registrado em: ${now.toLocaleString()}`;
    historicoLista.appendChild(item);

    document.getElementById('kmForm').reset();
    document.getElementById('media').value = '';
});
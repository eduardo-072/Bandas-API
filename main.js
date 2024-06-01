// Função para buscar informações sobre a banda
async function searchBand() {
  const searchTerm = document.getElementById('searchInput').value;
  const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${searchTerm}&fmt=json`);
  const data = await response.json();
  displayBandInfo(data.artists);
}

// Função para exibir informações sobre a banda na página
function displayBandInfo(artists) {
  const bandInfoDiv = document.getElementById('bandInfo');
  bandInfoDiv.innerHTML = '';

  if (artists.length === 0) {
    bandInfoDiv.innerHTML = '<p>Nenhuma banda encontrada.</p>';
    return;
  }

  // Exibindo informações sobre a primeira banda encontrada
  const band = artists[0];
  const country = band.country ? band.country : 'Desconhecido';
  const type = band.type ? band.type : 'Desconhecido';
  const lifeSpan = band.life_span ? `${band.life_span.begin} - ${band.life_span.end}` : 'Desconhecido';
  const disambiguation = band.disambiguation ? band.disambiguation : 'N/A';

  const bandInfoHTML = `
    <h2 class="cx-title"><strong>${band.name}</strong></h2><br>
    <ul>
    <li><p><strong>País:</strong> ${country}</p><br></li>
    <p><strong>Tipo:</strong> ${type}</p><br>
    <p><strong>Período de atividade:</strong> ${lifeSpan}</p><br>
    <p><strong>Descrição:</strong> ${disambiguation}</p><br>
    </ul>
    <p><a href="https://musicbrainz.org/artist/${band.id}" target="_blank"><button type="button" class="mais-inf">Mais informações</button></a></p><br>
    
  `;
  bandInfoDiv.innerHTML = bandInfoHTML;
}
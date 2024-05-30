// Buscar bandas pelo nome
async function searchBands(query) {
    const response = await fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}&fmt=json`);
    const data = await response.json();
    return data.artists;
  }
  
  // Buscar músicas de uma banda pelo ID
  async function searchBandSongs(artistId) {
    const response = await fetch(`https://musicbrainz.org/ws/2/release/?artist=${artistId}&fmt=json`);
    const data = await response.json();
    return data.releases;
  }
  
  // Exemplo de uso
  const searchTerm = 'Metallica'; // Termo de busca para bandas
  searchBands(searchTerm)
    .then(bands => {
      // Exibir informações das bandas
      console.log('Bandas encontradas:', bands);
      // Supondo que queremos listar as músicas da primeira banda encontrada
      const firstBand = bands[0];
      return searchBandSongs(firstBand.id);
    })
    .then(songs => {
      // Exibir informações das músicas
      console.log('Músicas da banda:', songs);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  
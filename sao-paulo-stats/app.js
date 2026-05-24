// Application State
let appState = {
  players: [
    {"id": 1, "number": 12, "name": "Leandro", "position": "Goleiro", "age": 20, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 2, "number": 23, "name": "Rafael", "position": "Goleiro", "age": 36, "nationality": "Brasil", "games": 12, "goals": 0, "assists": 0, "yellow_cards": 2, "red_cards": 0},
    {"id": 3, "number": 40, "name": "João Pedro", "position": "Goleiro", "age": 19, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 4, "number": 50, "name": "Young", "position": "Goleiro", "age": 23, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 5, "number": 93, "name": "Jandrei", "position": "Goleiro", "age": 32, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 6, "number": 5, "name": "Robert Arboleda", "position": "Zagueiro", "age": 33, "nationality": "Equador", "games": 7, "goals": 1, "assists": 0, "yellow_cards": 2, "red_cards": 0},
    {"id": 7, "number": 6, "name": "Cédric Soares", "position": "Lateral-Direito", "age": 33, "nationality": "Portugal", "games": 10, "goals": 0, "assists": 1, "yellow_cards": 1, "red_cards": 0},
    {"id": 8, "number": 13, "name": "Enzo Díaz", "position": "Lateral-Esquerdo", "age": 29, "nationality": "Argentina", "games": 11, "goals": 0, "assists": 1, "yellow_cards": 3, "red_cards": 0},
    {"id": 9, "number": 18, "name": "Wendell", "position": "Lateral-Esquerdo", "age": 31, "nationality": "Brasil", "games": 8, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 10, "number": 28, "name": "Alan Franco", "position": "Zagueiro", "age": 28, "nationality": "Argentina", "games": 9, "goals": 0, "assists": 0, "yellow_cards": 1, "red_cards": 0},
    {"id": 11, "number": 32, "name": "Nahuel Ferraresi", "position": "Zagueiro", "age": 26, "nationality": "Venezuela", "games": 9, "goals": 0, "assists": 0, "yellow_cards": 2, "red_cards": 0},
    {"id": 12, "number": 34, "name": "Igão", "position": "Zagueiro", "age": 17, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 13, "number": 35, "name": "Sabino", "position": "Zagueiro", "age": 28, "nationality": "Brasil", "games": 6, "goals": 0, "assists": 0, "yellow_cards": 1, "red_cards": 0},
    {"id": 14, "number": 36, "name": "Patryck Lanza", "position": "Lateral-Esquerdo", "age": 22, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 15, "number": 41, "name": "Andrade", "position": "Zagueiro", "age": 20, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 16, "number": 42, "name": "Maik", "position": "Lateral-Direito", "age": 20, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 17, "number": 44, "name": "Guilherme Reis", "position": "Lateral-Esquerdo", "age": 19, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 18, "number": 8, "name": "Oscar", "position": "Meia", "age": 33, "nationality": "Brasil", "games": 3, "goals": 0, "assists": 0, "yellow_cards": 1, "red_cards": 0},
    {"id": 19, "number": 15, "name": "Rodriguinho", "position": "Meia", "age": 21, "nationality": "Brasil", "games": 5, "goals": 0, "assists": 0, "yellow_cards": 3, "red_cards": 0},
    {"id": 20, "number": 16, "name": "Luiz Gustavo", "position": "Volante", "age": 37, "nationality": "Brasil", "games": 1, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 21, "number": 20, "name": "Marcos Antônio", "position": "Volante", "age": 25, "nationality": "Brasil", "games": 8, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 22, "number": 21, "name": "Damián Bobadilla", "position": "Volante", "age": 23, "nationality": "Paraguai", "games": 8, "goals": 0, "assists": 0, "yellow_cards": 2, "red_cards": 0},
    {"id": 23, "number": 25, "name": "Alisson", "position": "Volante", "age": 32, "nationality": "Brasil", "games": 11, "goals": 0, "assists": 1, "yellow_cards": 3, "red_cards": 0},
    {"id": 24, "number": 29, "name": "Pablo Maia", "position": "Volante", "age": 23, "nationality": "Brasil", "games": 5, "goals": 0, "assists": 0, "yellow_cards": 2, "red_cards": 0},
    {"id": 25, "number": 33, "name": "Luan", "position": "Volante", "age": 26, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 26, "number": 43, "name": "Negrucci", "position": "Volante", "age": 21, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 27, "number": 46, "name": "Hugo Leonardo", "position": "Volante", "age": 19, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 28, "number": 47, "name": "Matheus Alves", "position": "Meia", "age": 20, "nationality": "Brasil", "games": 8, "goals": 0, "assists": 1, "yellow_cards": 0, "red_cards": 0},
    {"id": 29, "number": 7, "name": "Lucas Moura", "position": "Atacante", "age": 32, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 30, "number": 9, "name": "Jonathan Calleri", "position": "Atacante", "age": 31, "nationality": "Argentina", "games": 3, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 31, "number": 10, "name": "Luciano", "position": "Atacante", "age": 32, "nationality": "Brasil", "games": 11, "goals": 1, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 32, "number": 11, "name": "Ferreirinha", "position": "Atacante", "age": 27, "nationality": "Brasil", "games": 8, "goals": 3, "assists": 2, "yellow_cards": 0, "red_cards": 0},
    {"id": 33, "number": 17, "name": "André Silva", "position": "Atacante", "age": 28, "nationality": "Brasil", "games": 11, "goals": 3, "assists": 1, "yellow_cards": 0, "red_cards": 0},
    {"id": 34, "number": 19, "name": "Juan Dinenno", "position": "Atacante", "age": 30, "nationality": "Argentina", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 35, "number": 37, "name": "Henrique Carmo", "position": "Atacante", "age": 18, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 36, "number": 45, "name": "Lucca", "position": "Atacante", "age": 18, "nationality": "Brasil", "games": 3, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 37, "number": 48, "name": "Lucas Ferreira", "position": "Atacante", "age": 19, "nationality": "Brasil", "games": 12, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 38, "number": 49, "name": "Ryan Francisco", "position": "Atacante", "age": 18, "nationality": "Brasil", "games": 7, "goals": 2, "assists": 0, "yellow_cards": 0, "red_cards": 0},
    {"id": 39, "number": 53, "name": "Paulinho", "position": "Atacante", "age": 20, "nationality": "Brasil", "games": 0, "goals": 0, "assists": 0, "yellow_cards": 0, "red_cards": 0}
  ],
  matches: [
    {"date": "2025-04-15", "opponent": "Sport", "home": true, "result": "0-0", "competition": "Brasileirão"},
    {"date": "2025-04-22", "opponent": "Atlético-MG", "home": false, "result": "0-0", "competition": "Brasileirão"},
    {"date": "2025-04-29", "opponent": "Cruzeiro", "home": true, "result": "1-1", "competition": "Brasileirão"},
    {"date": "2025-05-06", "opponent": "Botafogo", "home": false, "result": "2-2", "competition": "Brasileirão"},
    {"date": "2025-05-13", "opponent": "Santos", "home": true, "result": "2-1", "competition": "Brasileirão"},
    {"date": "2025-05-20", "opponent": "Ceará", "home": false, "result": "1-1", "competition": "Brasileirão"},
    {"date": "2025-05-27", "opponent": "Fortaleza", "home": true, "result": "0-0", "competition": "Brasileirão"},
    {"date": "2025-06-03", "opponent": "Palmeiras", "home": false, "result": "0-1", "competition": "Brasileirão"},
    {"date": "2025-06-10", "opponent": "Grêmio", "home": true, "result": "2-1", "competition": "Brasileirão"},
    {"date": "2025-06-17", "opponent": "Mirassol", "home": true, "result": "0-2", "competition": "Brasileirão"},
    {"date": "2025-06-24", "opponent": "Bahia", "home": false, "result": "1-2", "competition": "Brasileirão"},
    {"date": "2025-07-01", "opponent": "Vasco", "home": true, "result": "1-3", "competition": "Brasileirão"}
  ],
  currentEditingPlayer: null,
  nextPlayerId: 40
};

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.content-section');
const playersTableBody = document.getElementById('playersTableBody');
const positionFilter = document.getElementById('positionFilter');
const nameSearch = document.getElementById('nameSearch');
const scorersTable = document.getElementById('scorersTable');
const assistsTable = document.getElementById('assistsTable');
const matchesList = document.getElementById('matchesList');

// Modal elements
const playerModal = document.getElementById('playerModal');
const matchModal = document.getElementById('matchModal');
const playerForm = document.getElementById('playerForm');
const matchForm = document.getElementById('matchForm');

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeModals();
  initializeFilters();
  renderPlayersTable();
  renderStatisticsTables();
  renderMatchesList();
  setupImageFallbacks();
});

// Navigation
function initializeNavigation() {
  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetSection = this.dataset.section;
      switchSection(targetSection);
    });
  });
}

function switchSection(sectionId) {
  // Update navigation buttons
  navButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
  
  // Update sections
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  
  // Refresh data when switching to statistics
  if (sectionId === 'estatisticas') {
    renderStatisticsTables();
  }
}

// Image fallback setup
function setupImageFallbacks() {
  const chartImages = document.querySelectorAll('.chart-image');
  
  chartImages.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      
      // Create fallback message
      const fallback = document.createElement('div');
      fallback.className = 'chart-fallback';
      fallback.style.cssText = `
        padding: 60px 20px;
        background: #f5f5f5;
        border-radius: 8px;
        text-align: center;
        color: #666;
        border: 2px dashed #ddd;
      `;
      fallback.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 16px;">📊</div>
        <p style="margin: 0; font-size: 16px;">Gráfico indisponível</p>
        <p style="margin: 8px 0 0 0; font-size: 14px;">Os dados estão disponíveis nas tabelas abaixo</p>
      `;
      
      this.parentNode.insertBefore(fallback, this.nextSibling);
    });
  });
}

// Player Management
function renderPlayersTable() {
  const filteredPlayers = getFilteredPlayers();
  playersTableBody.innerHTML = '';
  
  filteredPlayers.forEach(player => {
    const row = createPlayerRow(player);
    playersTableBody.appendChild(row);
  });
}

function createPlayerRow(player) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="player-number">${player.number}</td>
    <td>${player.name}</td>
    <td>${player.position}</td>
    <td>${player.age}</td>
    <td>${player.nationality}</td>
    <td>${player.games}</td>
    <td>${player.goals}</td>
    <td>${player.assists}</td>
    <td class="player-actions">
      <button class="btn-action btn-edit" onclick="editPlayer(${player.id})">Editar</button>
      <button class="btn-action btn-delete" onclick="deletePlayer(${player.id})">Excluir</button>
    </td>
  `;
  return row;
}

function getFilteredPlayers() {
  let filtered = [...appState.players];
  
  const positionValue = positionFilter.value;
  const nameValue = nameSearch.value.toLowerCase();
  
  if (positionValue) {
    filtered = filtered.filter(player => player.position === positionValue);
  }
  
  if (nameValue) {
    filtered = filtered.filter(player => 
      player.name.toLowerCase().includes(nameValue)
    );
  }
  
  return filtered.sort((a, b) => a.number - b.number);
}

function editPlayer(playerId) {
  const player = appState.players.find(p => p.id === playerId);
  if (!player) return;
  
  appState.currentEditingPlayer = player;
  populatePlayerForm(player);
  document.getElementById('modalTitle').textContent = 'Editar Jogador';
  showModal(playerModal);
}

function deletePlayer(playerId) {
  if (confirm('Tem certeza que deseja excluir este jogador?')) {
    appState.players = appState.players.filter(p => p.id !== playerId);
    renderPlayersTable();
    renderStatisticsTables();
  }
}

function populatePlayerForm(player) {
  document.getElementById('playerNumber').value = player.number;
  document.getElementById('playerName').value = player.name;
  document.getElementById('playerPosition').value = player.position;
  document.getElementById('playerAge').value = player.age;
  document.getElementById('playerNationality').value = player.nationality;
  document.getElementById('playerGames').value = player.games;
  document.getElementById('playerGoals').value = player.goals;
  document.getElementById('playerAssists').value = player.assists;
  document.getElementById('playerYellowCards').value = player.yellow_cards;
  document.getElementById('playerRedCards').value = player.red_cards;
}

function clearPlayerForm() {
  document.getElementById('playerNumber').value = '';
  document.getElementById('playerName').value = '';
  document.getElementById('playerPosition').value = 'Goleiro';
  document.getElementById('playerAge').value = '';
  document.getElementById('playerNationality').value = '';
  document.getElementById('playerGames').value = '0';
  document.getElementById('playerGoals').value = '0';
  document.getElementById('playerAssists').value = '0';
  document.getElementById('playerYellowCards').value = '0';
  document.getElementById('playerRedCards').value = '0';
}

// Statistics
function renderStatisticsTables() {
  renderScorersTable();
  renderAssistsTable();
}

function renderScorersTable() {
  const scorers = appState.players
    .filter(p => p.goals > 0)
    .sort((a, b) => b.goals - a.goals)
    .slice(0, 10);
  
  scorersTable.innerHTML = '';
  
  scorers.forEach((player, index) => {
    const row = document.createElement('tr');
    const average = player.games > 0 ? (player.goals / player.games).toFixed(2) : '0.00';
    
    row.innerHTML = `
      <td>${index + 1}º</td>
      <td>${player.name}</td>
      <td>${player.goals}</td>
      <td>${player.games}</td>
      <td>${average}</td>
    `;
    
    scorersTable.appendChild(row);
  });
  
  if (scorers.length === 0) {
    scorersTable.innerHTML = '<tr><td colspan="5" class="text-center">Nenhum jogador com gols</td></tr>';
  }
}

function renderAssistsTable() {
  const assisters = appState.players
    .filter(p => p.assists > 0)
    .sort((a, b) => b.assists - a.assists)
    .slice(0, 10);
  
  assistsTable.innerHTML = '';
  
  assisters.forEach((player, index) => {
    const row = document.createElement('tr');
    const average = player.games > 0 ? (player.assists / player.games).toFixed(2) : '0.00';
    
    row.innerHTML = `
      <td>${index + 1}º</td>
      <td>${player.name}</td>
      <td>${player.assists}</td>
      <td>${player.games}</td>
      <td>${average}</td>
    `;
    
    assistsTable.appendChild(row);
  });
  
  if (assisters.length === 0) {
    assistsTable.innerHTML = '<tr><td colspan="5" class="text-center">Nenhum jogador com assistências</td></tr>';
  }
}

// Matches
function renderMatchesList() {
  matchesList.innerHTML = '';
  
  const sortedMatches = [...appState.matches].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  sortedMatches.forEach(match => {
    const matchCard = createMatchCard(match);
    matchesList.appendChild(matchCard);
  });
}

function createMatchCard(match) {
  const card = document.createElement('div');
  card.className = 'match-card';
  
  const formattedDate = new Date(match.date).toLocaleDateString('pt-BR');
  const homeTeam = match.home ? 'São Paulo' : match.opponent;
  const awayTeam = match.home ? match.opponent : 'São Paulo';
  
  const result = getMatchResult(match);
  
  card.innerHTML = `
    <div class="match-info">
      <div class="match-competition">${match.competition}</div>
      <div class="match-teams-score">${homeTeam} ${match.result} ${awayTeam}</div>
      <div class="match-date-info">${formattedDate}</div>
    </div>
    <div class="match-result ${result}">${result.charAt(0).toUpperCase()}</div>
  `;
  
  return card;
}

function getMatchResult(match) {
  const scores = match.result.split('-');
  const homeScore = parseInt(scores[0]);
  const awayScore = parseInt(scores[1]);
  
  if (match.home) {
    if (homeScore > awayScore) return 'win';
    if (homeScore < awayScore) return 'loss';
    return 'draw';
  } else {
    if (awayScore > homeScore) return 'win';
    if (awayScore < homeScore) return 'loss';
    return 'draw';
  }
}

// Modal Management
function initializeModals() {
  // Player Modal
  document.getElementById('addPlayerBtn').addEventListener('click', function() {
    appState.currentEditingPlayer = null;
    clearPlayerForm();
    document.getElementById('modalTitle').textContent = 'Adicionar Jogador';
    showModal(playerModal);
  });
  
  document.getElementById('closeModal').addEventListener('click', function() {
    hideModal(playerModal);
  });
  
  document.getElementById('cancelBtn').addEventListener('click', function() {
    hideModal(playerModal);
  });
  
  // Match Modal
  document.getElementById('addMatchBtn').addEventListener('click', function() {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('matchDate').value = today;
    document.getElementById('matchOpponent').value = '';
    document.getElementById('matchHome').value = 'true';
    document.getElementById('matchResult').value = '';
    document.getElementById('matchCompetition').value = 'Brasileirão';
    showModal(matchModal);
  });
  
  document.getElementById('closeMatchModal').addEventListener('click', function() {
    hideModal(matchModal);
  });
  
  document.getElementById('cancelMatchBtn').addEventListener('click', function() {
    hideModal(matchModal);
  });
  
  // Form submissions
  playerForm.addEventListener('submit', handlePlayerSubmit);
  matchForm.addEventListener('submit', handleMatchSubmit);
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === playerModal) {
      hideModal(playerModal);
    }
    if (event.target === matchModal) {
      hideModal(matchModal);
    }
  });
}

function showModal(modal) {
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function hideModal(modal) {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function handlePlayerSubmit(event) {
  event.preventDefault();
  
  const playerData = {
    number: parseInt(document.getElementById('playerNumber').value),
    name: document.getElementById('playerName').value.trim(),
    position: document.getElementById('playerPosition').value,
    age: parseInt(document.getElementById('playerAge').value),
    nationality: document.getElementById('playerNationality').value.trim(),
    games: parseInt(document.getElementById('playerGames').value),
    goals: parseInt(document.getElementById('playerGoals').value),
    assists: parseInt(document.getElementById('playerAssists').value),
    yellow_cards: parseInt(document.getElementById('playerYellowCards').value),
    red_cards: parseInt(document.getElementById('playerRedCards').value)
  };
  
  // Basic validation
  if (!playerData.name || !playerData.nationality) {
    alert('Por favor, preencha todos os campos obrigatórios!');
    return;
  }
  
  if (playerData.number < 1 || playerData.number > 99) {
    alert('O número da camisa deve estar entre 1 e 99!');
    return;
  }
  
  // Check if number is already taken
  const existingPlayer = appState.players.find(p => 
    p.number === playerData.number && 
    (!appState.currentEditingPlayer || p.id !== appState.currentEditingPlayer.id)
  );
  
  if (existingPlayer) {
    alert('Número de camisa já está em uso!');
    return;
  }
  
  if (appState.currentEditingPlayer) {
    // Update existing player
    const index = appState.players.findIndex(p => p.id === appState.currentEditingPlayer.id);
    appState.players[index] = {
      ...appState.currentEditingPlayer,
      ...playerData
    };
  } else {
    // Add new player
    const newPlayer = {
      id: appState.nextPlayerId++,
      ...playerData
    };
    appState.players.push(newPlayer);
  }
  
  hideModal(playerModal);
  renderPlayersTable();
  renderStatisticsTables();
}

function handleMatchSubmit(event) {
  event.preventDefault();
  
  const matchData = {
    date: document.getElementById('matchDate').value,
    opponent: document.getElementById('matchOpponent').value.trim(),
    home: document.getElementById('matchHome').value === 'true',
    result: document.getElementById('matchResult').value.trim(),
    competition: document.getElementById('matchCompetition').value.trim()
  };
  
  // Basic validation
  if (!matchData.date || !matchData.opponent || !matchData.result || !matchData.competition) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  
  // Validate result format (should be like "2-1")
  const resultPattern = /^\d+-\d+$/;
  if (!resultPattern.test(matchData.result)) {
    alert('Formato do resultado inválido! Use o formato "2-1".');
    return;
  }
  
  // Check if date is not in the future beyond reasonable limits
  const matchDate = new Date(matchData.date);
  const today = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(today.getFullYear() + 1);
  
  if (matchDate > oneYearFromNow) {
    alert('Data da partida não pode ser mais de um ano no futuro!');
    return;
  }
  
  appState.matches.push(matchData);
  hideModal(matchModal);
  renderMatchesList();
  
  // Show success message
  alert('Partida adicionada com sucesso!');
}

// Filters
function initializeFilters() {
  positionFilter.addEventListener('change', renderPlayersTable);
  nameSearch.addEventListener('input', renderPlayersTable);
}

// Global functions for HTML onclick handlers
window.editPlayer = editPlayer;
window.deletePlayer = deletePlayer;
// Global application data
let appData = {
  "competitions": [
    {"id": "brasileirao", "name": "Brasileirão", "color": "#d60021"},
    {"id": "libertadores", "name": "Libertadores", "color": "#d60021"},
    {"id": "copa_do_brasil", "name": "Copa do Brasil", "color": "#d60021"},
    {"id": "paulistao", "name": "Paulistão", "color": "#d60021"}
  ],
  "players": [
    {
      "id": 23,
      "number": 23,
      "name": "Rafael",
      "position": "Goleiro",
      "photo": "https://pplx-res.cloudinary.com/image/upload/v1752079999/pplx_project_search_images/933affa07bbf21b53658e193342771aae1982ba8.jpg",
      "stats": {
        "brasileirao": {"jogos": 12, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 6, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 6, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    },
    {
      "id": 17,
      "number": 17,
      "name": "André Silva",
      "position": "Atacante",
      "photo": "https://pplx-res.cloudinary.com/image/upload/v1752079999/pplx_project_search_images/7577671ce4d2495df5263cbd0099f063b5b26878.jpg",
      "stats": {
        "brasileirao": {"jogos": 11, "gols": 3, "assistencias": 1, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 5, "gols": 3, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 10, "gols": 5, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    },
    {
      "id": 7,
      "number": 7,
      "name": "Lucas Moura",
      "position": "Atacante",
      "photo": "https://pplx-res.cloudinary.com/image/upload/v1752079998/pplx_project_search_images/cf815b7e75d712c1ccb30e1077266c68123590f8.jpg",
      "stats": {
        "brasileirao": {"jogos": 11, "gols": 1, "assistencias": 1, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 1, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 6, "gols": 2, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    },
    {
      "id": 8,
      "number": 8,
      "name": "Oscar",
      "position": "Meia",
      "photo": "https://pplx-res.cloudinary.com/image/upload/v1752079998/pplx_project_search_images/be447a3b05629fa4116d0bcfd8861ce0adb2ad11.jpg",
      "stats": {
        "brasileirao": {"jogos": 3, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 2, "gols": 0, "assistencias": 1, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 8, "gols": 2, "assistencias": 4, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    },
    {
      "id": 9,
      "number": 9,
      "name": "Calleri",
      "position": "Atacante",
      "photo": "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/04/calleri_sao_paulo_cb48cf-e1744913502888.jpg?w=1200&h=900&crop=1",
      "stats": {
        "brasileirao": {"jogos": 3, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 6, "gols": 3, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    },
    {
      "id": 11,
      "number": 11,
      "name": "Ferreirinha",
      "position": "Atacante",
      "photo": "https://pplx-res.cloudinary.com/image/upload/v1752079998/pplx_project_search_images/2a4ac3ff20105fee18302b18f32bf0ad8f71566a.jpg",
      "stats": {
        "brasileirao": {"jogos": 8, "gols": 3, "assistencias": 2, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "libertadores": {"jogos": 5, "gols": 2, "assistencias": 2, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "paulistao": {"jogos": 9, "gols": 3, "assistencias": 1, "cartoes_amarelos": 0, "cartoes_vermelhos": 0},
        "copa_do_brasil": {"jogos": 0, "gols": 0, "assistencias": 0, "cartoes_amarelos": 0, "cartoes_vermelhos": 0}
      }
    }
  ]
};

// Current editing player
let currentPlayer = null;
let currentCompetition = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  updateDashboard();
});

function initializeApp() {
  // Normalize player stats to ensure all competitions exist
  appData.players.forEach(player => {
    appData.competitions.forEach(competition => {
      if (!player.stats[competition.id]) {
        player.stats[competition.id] = {
          jogos: 0,
          gols: 0,
          assistencias: 0,
          cartoes_amarelos: 0,
          cartoes_vermelhos: 0
        };
      }
    });
  });
}

function setupEventListeners() {
  // Navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
    });
  });

  // Sidebar toggle
  document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
  });

  // Player management
  document.getElementById('addPlayerBtn').addEventListener('click', () => openPlayerModal());
  document.getElementById('playerModalClose').addEventListener('click', () => closePlayerModal());
  document.getElementById('cancelPlayerEdit').addEventListener('click', () => closePlayerModal());
  document.getElementById('playerForm').addEventListener('submit', handlePlayerSubmit);

  // Competition management
  document.getElementById('addCompetitionBtn').addEventListener('click', () => openCompetitionModal());
  document.getElementById('competitionModalClose').addEventListener('click', () => closeCompetitionModal());
  document.getElementById('cancelCompetitionEdit').addEventListener('click', () => closeCompetitionModal());
  document.getElementById('competitionForm').addEventListener('submit', handleCompetitionSubmit);

  // Photo upload
  document.getElementById('playerPhotoUpload').addEventListener('change', handlePhotoUpload);

  // Search and filter
  document.getElementById('playerSearch').addEventListener('input', filterPlayers);
  document.getElementById('positionFilter').addEventListener('change', filterPlayers);

  // Export/Import - Fixed event listeners
  document.getElementById('exportJsonBtn').addEventListener('click', function(e) {
    e.preventDefault();
    exportJSON();
  });
  
  document.getElementById('exportCsvBtn').addEventListener('click', function(e) {
    e.preventDefault();
    exportCSV();
  });
  
  document.getElementById('importBtn').addEventListener('click', function(e) {
    e.preventDefault();
    importData();
  });

  // File input change listener
  document.getElementById('importFileInput').addEventListener('change', function() {
    const importBtn = document.getElementById('importBtn');
    importBtn.disabled = !this.files.length;
  });

  // Close modals when clicking outside
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      closePlayerModal();
      closeCompetitionModal();
    }
  });
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });

  // Show selected section
  document.getElementById(sectionId).classList.add('active');

  // Update navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');

  // Load section content
  switch(sectionId) {
    case 'dashboard':
      updateDashboard();
      break;
    case 'players':
      renderPlayersTable();
      break;
    case 'competitions':
      renderCompetitionsGrid();
      break;
  }
}

function updateDashboard() {
  const totals = calculateSeasonTotals();
  
  document.getElementById('totalGames').textContent = totals.jogos;
  document.getElementById('totalWins').textContent = totals.vitorias;
  document.getElementById('totalDraws').textContent = totals.empates;
  document.getElementById('totalLosses').textContent = totals.derrotas;
  document.getElementById('totalGoalsFor').textContent = totals.gols_pro;
  document.getElementById('totalGoalsAgainst').textContent = totals.gols_contra;
  document.getElementById('goalDifference').textContent = totals.saldo;
  document.getElementById('efficiency').textContent = totals.aproveitamento + '%';

  renderCompetitionsTable();
}

function calculateSeasonTotals() {
  const totals = {
    jogos: 0,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    gols_pro: 0,
    gols_contra: 0,
    saldo: 0,
    aproveitamento: 0
  };

  // Calculate totals from player stats
  appData.players.forEach(player => {
    Object.values(player.stats).forEach(stats => {
      totals.gols_pro += stats.gols || 0;
    });
  });

  // For demo purposes, we'll calculate some basic stats
  // In a real application, you would track team games, wins, losses, etc.
  totals.jogos = Math.max(...appData.players.map(p => 
    Math.max(...Object.values(p.stats).map(s => s.jogos || 0))
  ));
  
  totals.vitorias = Math.round(totals.jogos * 0.6);
  totals.empates = Math.round(totals.jogos * 0.25);
  totals.derrotas = totals.jogos - totals.vitorias - totals.empates;
  totals.gols_contra = Math.round(totals.gols_pro * 0.7);
  totals.saldo = totals.gols_pro - totals.gols_contra;
  totals.aproveitamento = totals.jogos > 0 ? 
    Math.round(((totals.vitorias * 3 + totals.empates) / (totals.jogos * 3)) * 100) : 0;

  return totals;
}

function renderCompetitionsTable() {
  const tbody = document.getElementById('competitionsTableBody');
  tbody.innerHTML = '';

  appData.competitions.forEach(competition => {
    const stats = {
      jogos: 0,
      gols: 0,
      assistencias: 0,
      cartoes_amarelos: 0,
      cartoes_vermelhos: 0
    };

    appData.players.forEach(player => {
      const playerStats = player.stats[competition.id];
      if (playerStats) {
        stats.jogos = Math.max(stats.jogos, playerStats.jogos || 0);
        stats.gols += playerStats.gols || 0;
        stats.assistencias += playerStats.assistencias || 0;
        stats.cartoes_amarelos += playerStats.cartoes_amarelos || 0;
        stats.cartoes_vermelhos += playerStats.cartoes_vermelhos || 0;
      }
    });

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${competition.name}</td>
      <td>${stats.jogos}</td>
      <td>${stats.gols}</td>
      <td>${stats.assistencias}</td>
      <td>${stats.cartoes_amarelos}</td>
      <td>${stats.cartoes_vermelhos}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderPlayersTable() {
  const tbody = document.getElementById('playersTableBody');
  tbody.innerHTML = '';

  let players = [...appData.players];
  
  // Apply filters
  const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
  const positionFilter = document.getElementById('positionFilter').value;

  if (searchTerm) {
    players = players.filter(player => 
      player.name.toLowerCase().includes(searchTerm) ||
      player.number.toString().includes(searchTerm)
    );
  }

  if (positionFilter) {
    players = players.filter(player => player.position === positionFilter);
  }

  players.forEach(player => {
    const totals = calculatePlayerTotals(player);
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        ${player.photo ? 
          `<img src="${player.photo}" alt="${player.name}" class="player-photo">` :
          `<div class="player-photo-placeholder">Foto</div>`
        }
      </td>
      <td>${player.number}</td>
      <td>${player.name}</td>
      <td>${player.position}</td>
      <td>${totals.jogos}</td>
      <td>${totals.gols}</td>
      <td>${totals.assistencias}</td>
      <td>${totals.cartoes_amarelos}</td>
      <td>${totals.cartoes_vermelhos}</td>
      <td class="table-actions">
        <button class="btn btn--sm btn--secondary" onclick="openPlayerModal(${player.id})">Editar</button>
        <button class="btn btn--sm btn--danger" onclick="deletePlayer(${player.id})">Excluir</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function calculatePlayerTotals(player) {
  const totals = {
    jogos: 0,
    gols: 0,
    assistencias: 0,
    cartoes_amarelos: 0,
    cartoes_vermelhos: 0
  };

  Object.values(player.stats).forEach(stats => {
    totals.jogos += stats.jogos || 0;
    totals.gols += stats.gols || 0;
    totals.assistencias += stats.assistencias || 0;
    totals.cartoes_amarelos += stats.cartoes_amarelos || 0;
    totals.cartoes_vermelhos += stats.cartoes_vermelhos || 0;
  });

  return totals;
}

function filterPlayers() {
  renderPlayersTable();
}

function openPlayerModal(playerId = null) {
  const modal = document.getElementById('playerModal');
  const form = document.getElementById('playerForm');
  
  if (playerId) {
    currentPlayer = appData.players.find(p => p.id === playerId);
    document.getElementById('playerModalTitle').textContent = 'Editar Jogador';
    
    // Fill form with player data
    document.getElementById('playerName').value = currentPlayer.name;
    document.getElementById('playerNumber').value = currentPlayer.number;
    document.getElementById('playerPosition').value = currentPlayer.position;
    document.getElementById('playerPhotoUrl').value = currentPlayer.photo || '';
    
    // Show photo preview
    if (currentPlayer.photo) {
      document.getElementById('photoPreview').innerHTML = 
        `<img src="${currentPlayer.photo}" alt="Preview">`;
    }
  } else {
    currentPlayer = null;
    document.getElementById('playerModalTitle').textContent = 'Novo Jogador';
    form.reset();
    document.getElementById('photoPreview').innerHTML = '';
  }

  renderCompetitionStats();
  modal.classList.add('active');
}

function closePlayerModal() {
  document.getElementById('playerModal').classList.remove('active');
  currentPlayer = null;
}

function renderCompetitionStats() {
  const container = document.getElementById('competitionStats');
  container.innerHTML = '';

  appData.competitions.forEach(competition => {
    const stats = currentPlayer ? 
      currentPlayer.stats[competition.id] : 
      { jogos: 0, gols: 0, assistencias: 0, cartoes_amarelos: 0, cartoes_vermelhos: 0 };

    const div = document.createElement('div');
    div.className = 'competition-stat';
    div.innerHTML = `
      <h4>${competition.name}</h4>
      <div class="stats-form">
        <div class="form-group">
          <label class="form-label">Jogos:</label>
          <input type="number" name="jogos_${competition.id}" value="${stats.jogos}" min="0" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label">Gols:</label>
          <input type="number" name="gols_${competition.id}" value="${stats.gols}" min="0" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label">Assistências:</label>
          <input type="number" name="assistencias_${competition.id}" value="${stats.assistencias}" min="0" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label">Amarelos:</label>
          <input type="number" name="cartoes_amarelos_${competition.id}" value="${stats.cartoes_amarelos}" min="0" class="form-control">
        </div>
        <div class="form-group">
          <label class="form-label">Vermelhos:</label>
          <input type="number" name="cartoes_vermelhos_${competition.id}" value="${stats.cartoes_vermelhos}" min="0" class="form-control">
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

function handlePlayerSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const playerData = {
    name: formData.get('name'),
    number: parseInt(formData.get('number')),
    position: formData.get('position'),
    photo: formData.get('photoUrl') || currentPlayer?.photo || ''
  };

  // Validate unique number
  const existingPlayer = appData.players.find(p => 
    p.number === playerData.number && p.id !== currentPlayer?.id
  );
  
  if (existingPlayer) {
    alert('Número já está em uso por outro jogador!');
    return;
  }

  // Collect stats
  const stats = {};
  appData.competitions.forEach(competition => {
    stats[competition.id] = {
      jogos: parseInt(formData.get(`jogos_${competition.id}`)) || 0,
      gols: parseInt(formData.get(`gols_${competition.id}`)) || 0,
      assistencias: parseInt(formData.get(`assistencias_${competition.id}`)) || 0,
      cartoes_amarelos: parseInt(formData.get(`cartoes_amarelos_${competition.id}`)) || 0,
      cartoes_vermelhos: parseInt(formData.get(`cartoes_vermelhos_${competition.id}`)) || 0
    };
  });

  if (currentPlayer) {
    // Update existing player
    Object.assign(currentPlayer, playerData);
    currentPlayer.stats = stats;
  } else {
    // Add new player
    const newPlayer = {
      id: Date.now(),
      ...playerData,
      stats
    };
    appData.players.push(newPlayer);
  }

  closePlayerModal();
  renderPlayersTable();
  updateDashboard();
  
  // Show success message
  showMessage('Jogador salvo com sucesso!', 'success');
}

function handlePhotoUpload(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const preview = document.getElementById('photoPreview');
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
      document.getElementById('playerPhotoUrl').value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function deletePlayer(playerId) {
  if (confirm('Tem certeza que deseja excluir este jogador?')) {
    const index = appData.players.findIndex(p => p.id === playerId);
    if (index > -1) {
      appData.players.splice(index, 1);
      renderPlayersTable();
      updateDashboard();
      showMessage('Jogador excluído com sucesso!', 'success');
    }
  }
}

function renderCompetitionsGrid() {
  const container = document.getElementById('competitionsGrid');
  container.innerHTML = '';

  appData.competitions.forEach(competition => {
    const div = document.createElement('div');
    div.className = 'competition-card';
    div.style.borderLeftColor = competition.color;
    div.innerHTML = `
      <h3>${competition.name}</h3>
      <div class="competition-actions">
        <button class="btn btn--sm btn--secondary" onclick="openCompetitionModal('${competition.id}')">Editar</button>
        <button class="btn btn--sm btn--danger" onclick="deleteCompetition('${competition.id}')">Excluir</button>
      </div>
    `;
    container.appendChild(div);
  });
}

function openCompetitionModal(competitionId = null) {
  const modal = document.getElementById('competitionModal');
  
  if (competitionId) {
    currentCompetition = appData.competitions.find(c => c.id === competitionId);
    document.getElementById('competitionModalTitle').textContent = 'Editar Competição';
    document.getElementById('competitionName').value = currentCompetition.name;
    document.getElementById('competitionColor').value = currentCompetition.color;
  } else {
    currentCompetition = null;
    document.getElementById('competitionModalTitle').textContent = 'Nova Competição';
    document.getElementById('competitionForm').reset();
  }

  modal.classList.add('active');
}

function closeCompetitionModal() {
  document.getElementById('competitionModal').classList.remove('active');
  currentCompetition = null;
}

function handleCompetitionSubmit(e) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const competitionData = {
    name: formData.get('name'),
    color: formData.get('color')
  };

  if (currentCompetition) {
    // Update existing competition
    Object.assign(currentCompetition, competitionData);
  } else {
    // Add new competition
    const newCompetition = {
      id: Date.now().toString(),
      ...competitionData
    };
    appData.competitions.push(newCompetition);
    
    // Add empty stats for all players
    appData.players.forEach(player => {
      player.stats[newCompetition.id] = {
        jogos: 0,
        gols: 0,
        assistencias: 0,
        cartoes_amarelos: 0,
        cartoes_vermelhos: 0
      };
    });
  }

  closeCompetitionModal();
  renderCompetitionsGrid();
  updateDashboard();
  showMessage('Competição salva com sucesso!', 'success');
}

function deleteCompetition(competitionId) {
  if (confirm('Tem certeza que deseja excluir esta competição?')) {
    const index = appData.competitions.findIndex(c => c.id === competitionId);
    if (index > -1) {
      appData.competitions.splice(index, 1);
      
      // Remove stats from all players
      appData.players.forEach(player => {
        delete player.stats[competitionId];
      });
      
      renderCompetitionsGrid();
      updateDashboard();
      showMessage('Competição excluída com sucesso!', 'success');
    }
  }
}

function exportJSON() {
  try {
    const dataStr = JSON.stringify(appData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sao_paulo_fc_data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showMessage('Dados exportados em JSON com sucesso!', 'success');
  } catch (error) {
    showMessage('Erro ao exportar dados JSON!', 'error');
  }
}

function exportCSV() {
  try {
    // Export players CSV
    let playersCSV = 'ID,Número,Nome,Posição,Foto\n';
    appData.players.forEach(player => {
      playersCSV += `${player.id},${player.number},"${player.name}","${player.position}","${player.photo || ''}"\n`;
    });
    
    const playersBlob = new Blob([playersCSV], { type: 'text/csv;charset=utf-8;' });
    const playersUrl = URL.createObjectURL(playersBlob);
    const playersLink = document.createElement('a');
    playersLink.href = playersUrl;
    playersLink.download = 'jogadores.csv';
    document.body.appendChild(playersLink);
    playersLink.click();
    document.body.removeChild(playersLink);
    URL.revokeObjectURL(playersUrl);

    // Export stats CSV
    setTimeout(() => {
      let statsCSV = 'JogadorID,Competição,Jogos,Gols,Assistências,Amarelos,Vermelhos\n';
      appData.players.forEach(player => {
        Object.entries(player.stats).forEach(([competitionId, stats]) => {
          const competition = appData.competitions.find(c => c.id === competitionId);
          statsCSV += `${player.id},"${competition?.name || competitionId}",${stats.jogos},${stats.gols},${stats.assistencias},${stats.cartoes_amarelos},${stats.cartoes_vermelhos}\n`;
        });
      });
      
      const statsBlob = new Blob([statsCSV], { type: 'text/csv;charset=utf-8;' });
      const statsUrl = URL.createObjectURL(statsBlob);
      const statsLink = document.createElement('a');
      statsLink.href = statsUrl;
      statsLink.download = 'estatisticas.csv';
      document.body.appendChild(statsLink);
      statsLink.click();
      document.body.removeChild(statsLink);
      URL.revokeObjectURL(statsUrl);
    }, 500);
    
    showMessage('Dados exportados em CSV com sucesso!', 'success');
  } catch (error) {
    showMessage('Erro ao exportar dados CSV!', 'error');
  }
}

function importData() {
  const fileInput = document.getElementById('importFileInput');
  const file = fileInput.files[0];
  
  if (!file) {
    showMessage('Por favor, selecione um arquivo JSON.', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      
      // Validate imported data structure
      if (!importedData.players || !importedData.competitions) {
        throw new Error('Estrutura de dados inválida');
      }
      
      appData = importedData;
      initializeApp();
      updateDashboard();
      renderPlayersTable();
      renderCompetitionsGrid();
      fileInput.value = '';
      showMessage('Dados importados com sucesso!', 'success');
    } catch (error) {
      showMessage('Erro ao importar dados. Verifique se o arquivo é válido.', 'error');
    }
  };
  reader.readAsText(file);
}

function showMessage(message, type) {
  // Remove existing messages
  const existingMessages = document.querySelectorAll('.message');
  existingMessages.forEach(msg => msg.remove());

  // Create new message
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message--${type}`;
  messageDiv.textContent = message;
  
  // Insert at top of main content
  const mainContent = document.querySelector('.main-content');
  mainContent.insertBefore(messageDiv, mainContent.firstChild);
  
  // Remove after 3 seconds
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
}
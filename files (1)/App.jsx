import React, { useState, useEffect } from 'react';
import './App.css';

// BASE DE DONNÉES DES ÉLÉMENTS
const ELEMENTS = {
  // Niveau 1 - Éléments de base (débloqués au début)
  eau: { emoji: '💧', name: 'Eau', level: 1, rarity: 'common', category: 'nature' },
  feu: { emoji: '🔥', name: 'Feu', level: 1, rarity: 'common', category: 'nature' },
  terre: { emoji: '🌍', name: 'Terre', level: 1, rarity: 'common', category: 'nature' },
  air: { emoji: '💨', name: 'Air', level: 1, rarity: 'common', category: 'nature' },
  
  // Niveau 2 - Premières combinaisons
  vapeur: { emoji: '☁️', name: 'Vapeur', level: 2, rarity: 'common', category: 'nature' },
  lave: { emoji: '🌋', name: 'Lave', level: 2, rarity: 'common', category: 'nature' },
  boue: { emoji: '🟤', name: 'Boue', level: 2, rarity: 'common', category: 'nature' },
  poussiere: { emoji: '💨', name: 'Poussière', level: 2, rarity: 'common', category: 'nature' },
  
  // Niveau 3 - Plantes
  plante: { emoji: '🌱', name: 'Plante', level: 3, rarity: 'uncommon', category: 'vivant' },
  arbre: { emoji: '🌳', name: 'Arbre', level: 3, rarity: 'uncommon', category: 'vivant' },
  fleur: { emoji: '🌸', name: 'Fleur', level: 3, rarity: 'uncommon', category: 'vivant' },
  
  // Niveau 4 - Vie
  algue: { emoji: '🌿', name: 'Algue', level: 4, rarity: 'uncommon', category: 'vivant' },
  poisson: { emoji: '🐟', name: 'Poisson', level: 4, rarity: 'rare', category: 'animal' },
  insecte: { emoji: '🐛', name: 'Insecte', level: 4, rarity: 'uncommon', category: 'animal' },
  oiseau: { emoji: '🐦', name: 'Oiseau', level: 4, rarity: 'rare', category: 'animal' },
  
  // Niveau 5 - Humain & Civilisation
  humain: { emoji: '👤', name: 'Humain', level: 5, rarity: 'epic', category: 'humain' },
  village: { emoji: '🏘️', name: 'Village', level: 5, rarity: 'epic', category: 'civilisation' },
  outil: { emoji: '🔨', name: 'Outil', level: 5, rarity: 'rare', category: 'technologie' },
  
  // Niveau 6 - Science
  electricite: { emoji: '⚡', name: 'Électricité', level: 6, rarity: 'epic', category: 'science' },
  metal: { emoji: '⚙️', name: 'Métal', level: 6, rarity: 'rare', category: 'matiere' },
  verre: { emoji: '🪟', name: 'Verre', level: 6, rarity: 'rare', category: 'matiere' },
  
  // Niveau 7 - Technologie
  machine: { emoji: '🤖', name: 'Machine', level: 7, rarity: 'epic', category: 'technologie' },
  ordinateur: { emoji: '💻', name: 'Ordinateur', level: 7, rarity: 'legendary', category: 'technologie' },
  telephone: { emoji: '📱', name: 'Téléphone', level: 7, rarity: 'epic', category: 'technologie' },
  
  // Niveau 8 - Connaissances
  livre: { emoji: '📚', name: 'Livre', level: 8, rarity: 'rare', category: 'connaissance' },
  ecole: { emoji: '🏫', name: 'École', level: 8, rarity: 'epic', category: 'civilisation' },
  science: { emoji: '🔬', name: 'Science', level: 8, rarity: 'legendary', category: 'connaissance' },
  
  // Niveau 9 - Avancé
  energie: { emoji: '⚡', name: 'Énergie', level: 9, rarity: 'legendary', category: 'science' },
  lumiere: { emoji: '💡', name: 'Lumière', level: 9, rarity: 'epic', category: 'science' },
  son: { emoji: '🔊', name: 'Son', level: 9, rarity: 'epic', category: 'science' },
  
  // Niveau 10 - Concepts
  temps: { emoji: '⏰', name: 'Temps', level: 10, rarity: 'legendary', category: 'concept' },
  espace: { emoji: '🌌', name: 'Espace', level: 10, rarity: 'legendary', category: 'concept' },
  vie: { emoji: '❤️', name: 'Vie', level: 10, rarity: 'legendary', category: 'concept' },
  intelligence: { emoji: '🧠', name: 'Intelligence', level: 10, rarity: 'mythic', category: 'concept' }
};

// RECETTES DE FUSION
const RECIPES = [
  // Niveau 2
  { inputs: ['eau', 'feu'], output: 'vapeur', description: 'L\'eau chauffée se transforme en vapeur' },
  { inputs: ['feu', 'terre'], output: 'lave', description: 'Le feu fait fondre la terre' },
  { inputs: ['eau', 'terre'], output: 'boue', description: 'L\'eau mélangée à la terre fait de la boue' },
  { inputs: ['terre', 'air'], output: 'poussiere', description: 'Le vent érode la terre' },
  
  // Niveau 3
  { inputs: ['eau', 'plante'], output: 'arbre', description: 'Une plante bien arrosée devient un arbre' },
  { inputs: ['terre', 'eau'], output: 'plante', description: 'La vie commence dans la boue' },
  { inputs: ['plante', 'air'], output: 'fleur', description: 'Les plantes fleurissent à l\'air libre' },
  
  // Niveau 4
  { inputs: ['eau', 'plante'], output: 'algue', description: 'Les premières plantes aquatiques' },
  { inputs: ['eau', 'algue'], output: 'poisson', description: 'La vie aquatique évolue' },
  { inputs: ['air', 'insecte'], output: 'oiseau', description: 'Certains insectes ont évolué pour voler' },
  { inputs: ['terre', 'plante'], output: 'insecte', description: 'Les insectes vivent dans la terre' },
  
  // Niveau 5
  { inputs: ['terre', 'oiseau'], output: 'humain', description: 'L\'évolution crée l\'humanité' },
  { inputs: ['humain', 'arbre'], output: 'outil', description: 'L\'humain fabrique des outils' },
  { inputs: ['humain', 'terre'], output: 'village', description: 'Les humains se regroupent' },
  
  // Niveau 6
  { inputs: ['feu', 'terre'], output: 'metal', description: 'Le feu forge le métal' },
  { inputs: ['feu', 'air'], output: 'electricite', description: 'La foudre crée l\'électricité' },
  { inputs: ['feu', 'sable'], output: 'verre', description: 'Le sable fondu devient du verre' },
  
  // Niveau 7
  { inputs: ['metal', 'electricite'], output: 'machine', description: 'L\'électricité anime les machines' },
  { inputs: ['machine', 'intelligence'], output: 'ordinateur', description: 'Les machines deviennent intelligentes' },
  { inputs: ['electricite', 'metal'], output: 'telephone', description: 'La communication à distance' },
  
  // Niveau 8
  { inputs: ['arbre', 'outil'], output: 'livre', description: 'Le papier vient des arbres' },
  { inputs: ['humain', 'livre'], output: 'ecole', description: 'Les humains transmettent le savoir' },
  { inputs: ['livre', 'intelligence'], output: 'science', description: 'La connaissance organisée' },
  
  // Niveau 9
  { inputs: ['feu', 'electricite'], output: 'energie', description: 'Toute énergie vient de transformations' },
  { inputs: ['electricite', 'verre'], output: 'lumiere', description: 'L\'ampoule électrique' },
  { inputs: ['air', 'energie'], output: 'son', description: 'Les vibrations créent le son' },
  
  // Niveau 10 - Concepts ultimes
  { inputs: ['vie', 'intelligence'], output: 'temps', description: 'La conscience du temps' },
  { inputs: ['lumiere', 'temps'], output: 'espace', description: 'L\'univers se révèle' },
  { inputs: ['eau', 'energie'], output: 'vie', description: 'L\'origine de toute vie' },
  { inputs: ['humain', 'science'], output: 'intelligence', description: 'La connaissance suprême' }
];

function App() {
  const [discovered, setDiscovered] = useState(['eau', 'feu', 'terre', 'air']);
  const [inventory, setInventory] = useState(['eau', 'feu', 'terre', 'air']);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);
  const [totalDiscoveries, setTotalDiscoveries] = useState(4);
  const [message, setMessage] = useState('');
  const [showNewDiscovery, setShowNewDiscovery] = useState(null);
  const [filter, setFilter] = useState('all');

  // Tentative de fusion
  const tryFusion = () => {
    if (selected.length !== 2) {
      setMessage('❌ Sélectionne 2 éléments !');
      setTimeout(() => setMessage(''), 2000);
      return;
    }

    // Chercher une recette
    const recipe = RECIPES.find(r => 
      (r.inputs.includes(selected[0]) && r.inputs.includes(selected[1]))
    );

    if (recipe) {
      const output = recipe.output;
      
      if (!discovered.includes(output)) {
        // NOUVELLE DÉCOUVERTE !
        setDiscovered([...discovered, output]);
        setInventory([...inventory, output]);
        setTotalDiscoveries(totalDiscoveries + 1);
        
        const rarity = ELEMENTS[output].rarity;
        const points = {
          common: 10,
          uncommon: 25,
          rare: 50,
          epic: 100,
          legendary: 250,
          mythic: 500
        }[rarity];
        
        setScore(score + points);
        setShowNewDiscovery({ element: output, description: recipe.description });
        
        if (window.confetti) {
          window.confetti({
            particleCount: points / 2,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
        
        setTimeout(() => setShowNewDiscovery(null), 4000);
      } else {
        setMessage('✅ Fusion réussie !');
        setInventory([...inventory, output]);
        setTimeout(() => setMessage(''), 2000);
      }
    } else {
      setMessage('❌ Cette combinaison ne fonctionne pas...');
      setTimeout(() => setMessage(''), 2000);
    }
    
    setSelected([]);
  };

  const toggleSelect = (element) => {
    if (selected.includes(element)) {
      setSelected(selected.filter(e => e !== element));
    } else if (selected.length < 2) {
      setSelected([...selected, element]);
    } else {
      setSelected([selected[1], element]);
    }
  };

  const deleteFromInventory = (element, index) => {
    const newInventory = [...inventory];
    newInventory.splice(index, 1);
    setInventory(newInventory);
  };

  const progress = (discovered.length / Object.keys(ELEMENTS).length) * 100;

  const filteredDiscovered = filter === 'all' 
    ? discovered 
    : discovered.filter(e => ELEMENTS[e].category === filter);

  return (
    <div className="app brain-fusion">
      <div className="game-container">
        {/* Header */}
        <div className="header-game">
          <h1 className="game-title">🧠 BRAIN FUSION ⚡</h1>
          <p className="game-subtitle">Fusionne les concepts pour découvrir de nouvelles connaissances !</p>
          
          <div className="stats-bar">
            <div className="stat-item">
              <span className="stat-label">💎 Score</span>
              <span className="stat-value">{score}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">🔬 Découvertes</span>
              <span className="stat-value">{discovered.length}/{Object.keys(ELEMENTS).length}</span>
            </div>
          </div>

          <div className="progress-container">
            <div className="progress-bar-game" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Zone de Fusion */}
        <div className="fusion-zone">
          <h3 className="zone-title">🔮 Zone de Fusion</h3>
          
          <div className="fusion-slots">
            <div className={`fusion-slot ${selected[0] ? 'filled' : ''}`}>
              {selected[0] ? (
                <>
                  <span className="slot-emoji">{ELEMENTS[selected[0]].emoji}</span>
                  <span className="slot-name">{ELEMENTS[selected[0]].name}</span>
                </>
              ) : (
                <span className="slot-placeholder">?</span>
              )}
            </div>

            <div className="fusion-plus">+</div>

            <div className={`fusion-slot ${selected[1] ? 'filled' : ''}`}>
              {selected[1] ? (
                <>
                  <span className="slot-emoji">{ELEMENTS[selected[1]].emoji}</span>
                  <span className="slot-name">{ELEMENTS[selected[1]].name}</span>
                </>
              ) : (
                <span className="slot-placeholder">?</span>
              )}
            </div>

            <div className="fusion-equals">=</div>

            <button 
              className="fusion-button"
              onClick={tryFusion}
              disabled={selected.length !== 2}
            >
              FUSIONNER ! ⚡
            </button>
          </div>

          {message && (
            <div className={`fusion-message ${message.includes('❌') ? 'error' : 'success'}`}>
              {message}
            </div>
          )}
        </div>

        {/* Inventaire */}
        <div className="inventory-section">
          <h3 className="zone-title">🎒 Ton Inventaire</h3>
          <p className="inventory-hint">Clique sur 2 éléments pour les fusionner !</p>
          
          <div className="inventory-grid">
            {inventory.map((element, index) => (
              <div
                key={`${element}-${index}`}
                className={`inventory-item ${selected.includes(element) ? 'selected' : ''} rarity-${ELEMENTS[element].rarity}`}
                onClick={() => toggleSelect(element)}
              >
                <button 
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteFromInventory(element, index);
                  }}
                >
                  ×
                </button>
                <div className="item-emoji">{ELEMENTS[element].emoji}</div>
                <div className="item-name">{ELEMENTS[element].name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Collection */}
        <div className="collection-section">
          <h3 className="zone-title">📖 Ta Collection</h3>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tous
            </button>
            <button 
              className={`filter-btn ${filter === 'nature' ? 'active' : ''}`}
              onClick={() => setFilter('nature')}
            >
              Nature
            </button>
            <button 
              className={`filter-btn ${filter === 'vivant' ? 'active' : ''}`}
              onClick={() => setFilter('vivant')}
            >
              Vivant
            </button>
            <button 
              className={`filter-btn ${filter === 'science' ? 'active' : ''}`}
              onClick={() => setFilter('science')}
            >
              Science
            </button>
            <button 
              className={`filter-btn ${filter === 'technologie' ? 'active' : ''}`}
              onClick={() => setFilter('technologie')}
            >
              Tech
            </button>
          </div>

          <div className="collection-grid">
            {filteredDiscovered.map(element => (
              <div
                key={element}
                className={`collection-item rarity-${ELEMENTS[element].rarity}`}
                onClick={() => setInventory([...inventory, element])}
              >
                <div className="collection-emoji">{ELEMENTS[element].emoji}</div>
                <div className="collection-name">{ELEMENTS[element].name}</div>
                <div className="collection-level">Niv. {ELEMENTS[element].level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Nouvelle Découverte */}
      {showNewDiscovery && (
        <div className="discovery-overlay">
          <div className="discovery-card">
            <div className="discovery-badge">✨ NOUVELLE DÉCOUVERTE ! ✨</div>
            <div className="discovery-emoji">{ELEMENTS[showNewDiscovery.element].emoji}</div>
            <h2 className="discovery-name">{ELEMENTS[showNewDiscovery.element].name}</h2>
            <div className={`discovery-rarity rarity-${ELEMENTS[showNewDiscovery.element].rarity}`}>
              {ELEMENTS[showNewDiscovery.element].rarity.toUpperCase()}
            </div>
            <p className="discovery-description">{showNewDiscovery.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
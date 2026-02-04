# 🧠 BRAIN FUSION ⚡ - Guide Installation GitHub

## 🎮 LE JEU

**BRAIN FUSION** est un jeu de fusion éducatif ADDICTIF et UNIQUE !

### Concept :
- Fusionne 2 éléments pour en créer un nouveau
- Découvre 40+ concepts scientifiques
- Progresse des éléments basiques aux concepts ultimes
- Système de rareté (Common → Mythic)
- Scoring selon la rareté

### Gameplay :
1. Tu commences avec : 💧 Eau, 🔥 Feu, 🌍 Terre, 💨 Air
2. Fusionne-les pour découvrir de nouveaux éléments
3. Ex : 💧 Eau + 🔥 Feu = ☁️ Vapeur
4. Continue pour débloquer tous les 40+ éléments !

---

## 📋 FICHIERS DU PROJET

```
brain-fusion/
├── package.json         ✅ Dépendances
├── vite.config.js       ⚠️ À MODIFIER (ton repo)
├── index.html           ✅ Page HTML
├── src/
│   ├── main.jsx         ✅ Point d'entrée
│   ├── App.jsx          ✅ Code principal
│   └── App.css          ✅ Styles magnifiques
└── .github/workflows/
    └── deploy.yml       ✅ GitHub Actions
```

---

## 🚀 DÉPLOIEMENT GITHUB - PAS À PAS

### ÉTAPE 1 : Créer le Repo

1. Va sur https://github.com
2. Clique "New repository" (bouton vert)
3. Nom du repo : **brain-fusion** (ou ce que tu veux)
4. **Public** ✅
5. **NE COCHE PAS** "Add a README"
6. Clique "Create repository"

### ÉTAPE 2 : Modifier vite.config.js

**TRÈS IMPORTANT !** Ouvre `vite.config.js` et change :

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/TON-NOM-DE-REPO/',  // ← Change ici !
})
```

**Exemples :**
- Si ton repo = `brain-fusion` → `base: '/brain-fusion/',`
- Si ton repo = `mon-jeu` → `base: '/mon-jeu/',`

⚠️ **N'oublie pas les `/` au début ET à la fin !**

### ÉTAPE 3 : Uploader les Fichiers

**Option A - Via Interface Web (Simple) :**

1. Sur la page de ton repo vide, clique "uploading an existing file"
2. **GLISSE TOUS LES FICHIERS** dans la zone
3. Structure exacte à respecter :
```
📁 Racine du repo
├── 📄 package.json
├── 📄 vite.config.js (MODIFIÉ)
├── 📄 index.html
├── 📁 src/
│   ├── main.jsx
│   ├── App.jsx
│   └── App.css
└── 📁 .github/workflows/
    └── deploy.yml
```
4. En bas, écris "Initial commit"
5. Clique "Commit changes"

**Option B - Via Git (Terminal) :**

```bash
# Dans le dossier brain-fusion
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/TON-REPO.git
git push -u origin main
```

### ÉTAPE 4 : Activer GitHub Pages

1. Dans ton repo, clique "Settings" (en haut)
2. Dans le menu gauche, clique "Pages"
3. Dans "Build and deployment"
4. Source : **"GitHub Actions"** ✅
5. C'est tout ! Pas besoin de sauvegarder

### ÉTAPE 5 : Attendre le Déploiement

1. Retourne sur la page principale du repo
2. Clique sur l'onglet "Actions" (en haut)
3. Tu vois un workflow qui tourne ⏳
4. Attends 2-3 minutes
5. Quand c'est vert ✅, c'est déployé !

### ÉTAPE 6 : Accéder au Jeu

Ton jeu est maintenant en ligne à :
```
https://TON-PSEUDO.github.io/TON-REPO/
```

**Exemple :**
- Pseudo : `alice123`
- Repo : `brain-fusion`
- URL : `https://alice123.github.io/brain-fusion/`

---

## 🎯 VÉRIFICATION

### Tout fonctionne si :
✅ Le fond est animé avec des couleurs magnifiques
✅ Tu as 4 éléments de base (Eau, Feu, Terre, Air)
✅ Tu peux cliquer sur 2 éléments
✅ Tu peux les fusionner
✅ Les confettis apparaissent lors des découvertes

### Problèmes fréquents :

#### Le site ne charge pas (page blanche)
→ Vérifie `vite.config.js` : Le `base` doit correspondre au nom du repo

#### Les styles ne s'affichent pas
→ Vérifie que `App.css` est bien uploadé dans `src/`

#### Rien ne se passe quand je clique
→ Ouvre la console (F12) pour voir les erreurs

---

## 🎮 COMMENT JOUER

### Démarrer :
- Tu as 4 éléments : 💧 Eau, 🔥 Feu, 🌍 Terre, 💨 Air

### Fusionner :
1. Clique sur un 1er élément (il devient vert)
2. Clique sur un 2ème élément
3. Clique "FUSIONNER ! ⚡"
4. Si c'est une bonne combo → DÉCOUVERTE ! 🎉

### Premières Combos :
- 💧 + 🔥 = ☁️ Vapeur
- 🔥 + 🌍 = 🌋 Lave
- 💧 + 🌍 = 🟤 Boue
- 🌍 + 💨 = 💨 Poussière

### Combos Avancées :
- 💧 + 🌱 = 🌳 Arbre
- 🔥 + 💨 = ⚡ Électricité
- ⚡ + ⚙️ = 🤖 Machine
- 🧠 + 🔬 = 💡 Intelligence

### Objectif :
Découvre les **40+ éléments** et atteins les concepts ultimes :
- ⏰ Temps
- 🌌 Espace
- ❤️ Vie
- 🧠 Intelligence (MYTHIC !)

---

## 🏆 SYSTÈME DE RARETÉ

| Rareté | Couleur | Points | Exemples |
|--------|---------|--------|----------|
| Common | Gris | 10 pts | Eau, Feu, Vapeur |
| Uncommon | Vert | 25 pts | Plante, Arbre, Insecte |
| Rare | Bleu | 50 pts | Poisson, Oiseau, Métal |
| Epic | Violet | 100 pts | Humain, Machine, École |
| Legendary | Or | 250 pts | Science, Énergie, Temps |
| Mythic | Rose | 500 pts | Intelligence |

Plus c'est rare, plus ça brille ! ✨

---

## 🎨 PERSONNALISATION

### Changer les Couleurs du Fond

Dans `App.css`, ligne 17 :
```css
background: linear-gradient(135deg, 
  #667eea 0%,    /* ← Change ici */
  #764ba2 25%, 
  #f093fb 50%, 
  #4facfe 75%, 
  #00f2fe 100%
);
```

### Ajouter des Éléments

Dans `App.jsx`, ajoute dans `ELEMENTS` :
```javascript
ton_element: { 
  emoji: '🎯', 
  name: 'Ton Élément', 
  level: 5, 
  rarity: 'epic', 
  category: 'technologie' 
}
```

Puis ajoute une recette dans `RECIPES` :
```javascript
{ 
  inputs: ['element1', 'element2'], 
  output: 'ton_element', 
  description: 'Ta description' 
}
```

---

## 📊 LISTE COMPLÈTE DES ÉLÉMENTS

### Niveau 1 (Base) :
💧 Eau • 🔥 Feu • 🌍 Terre • 💨 Air

### Niveau 2 :
☁️ Vapeur • 🌋 Lave • 🟤 Boue • 💨 Poussière

### Niveau 3 :
🌱 Plante • 🌳 Arbre • 🌸 Fleur

### Niveau 4 :
🌿 Algue • 🐟 Poisson • 🐛 Insecte • 🐦 Oiseau

### Niveau 5 :
👤 Humain • 🏘️ Village • 🔨 Outil

### Niveau 6 :
⚡ Électricité • ⚙️ Métal • 🪟 Verre

### Niveau 7 :
🤖 Machine • 💻 Ordinateur • 📱 Téléphone

### Niveau 8 :
📚 Livre • 🏫 École • 🔬 Science

### Niveau 9 :
⚡ Énergie • 💡 Lumière • 🔊 Son

### Niveau 10 (Ultimes) :
⏰ Temps • 🌌 Espace • ❤️ Vie • 🧠 Intelligence

---

## 💡 ASTUCES

### Maximiser ton Score :
- Les éléments rares donnent + de points
- Essaie toutes les combinaisons
- Note tes découvertes

### Découvrir l'Intelligence (Mythic) :
```
💧 Eau + 🌍 Terre = 🌱 Plante
🌱 Plante + 💨 Air = 🌸 Fleur
... (continue l'arbre de fusion)
... jusqu'à 👤 Humain + 🔬 Science = 🧠 Intelligence
```

### Débloquer tous les Éléments :
- Il y a 40+ combinaisons possibles
- Certains éléments sont des étapes intermédiaires
- Expérimente !

---

## 🎯 ROADMAP (Améliorations Futures)

- [ ] 100+ éléments
- [ ] Système de succès/achievements
- [ ] Mode challenge (trouve X en Y minutes)
- [ ] Classement mondial
- [ ] Partage de découvertes
- [ ] Mode histoire
- [ ] Indices pour les combos difficiles

---

## 🐛 BUGS CONNUS

Aucun pour le moment ! Le jeu fonctionne parfaitement.

Si tu trouves un bug, vérifie :
1. Tous les fichiers sont uploadés
2. `vite.config.js` a le bon nom de repo
3. La structure des dossiers est respectée

---

## 📞 SUPPORT

### Le jeu ne marche pas ?
1. Ouvre la console (F12)
2. Regarde les erreurs
3. Vérifie que tous les fichiers sont bien là
4. Vérifie `vite.config.js`

### Ça marche localement mais pas sur GitHub ?
→ C'est toujours `vite.config.js` qui n'a pas le bon nom de repo !

---

## 🎉 FÉLICITATIONS !

Tu as créé **BRAIN FUSION**, un jeu éducatif unique et addictif ! 🧠⚡

**Partage-le avec tes amis et deviens le roi de la fusion ! 👑**

---

**Créé avec ❤️ et beaucoup de 🧠**

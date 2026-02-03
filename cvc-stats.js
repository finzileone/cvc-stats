// === CONFIGURAZIONE STAGIONE ===
const stagioni = {
  "2025-invernale": {
    teams: ["LeF", "LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "ZG", "MP", "LT", "PiS", "MM", "MB", "AB", "AoB"],
    giornate: [
      { MiF: 2, PS: 2, CM: 1, LuF: 1.25, ZG: 1, MP: 1.75, LeF: 1.25, LT: 2, PiS: 1, MM: 1, MB: 1.75, AB: 2 },
      { LF: 0.5, MaF: 0.25, FP: 2.75, LB: 2.75, BC: 2.5, CM: 0.25, ZG: 0.25, LeF: 0.25, LT: 0.5, PiS: 2.75, MB: 2.75, AB: 2.5 },
      { LF: 1, MaF: 1, MiF: 0.25, PS: 2.75, FP: 2.25, LB: 2.25, BC: 0.75, LuF: 2.75, LeF: 0.25, MM: 2, AB: 0.75, AoB: 2 },
      { LF: 1, MiF: 1.5, BC: 2, CM: 2, LuF: 1.5, ZG: 1, MP: 2, LT: 1, PiS: 1, MM: 2, MB: 1.5, AoB: 1.5 },
      { MaF: 0.8, FP: 1, LB: 1.6, CM: 1, ZG: 2.5, LT: 2, PiS: 0.5, MM: 2, MB: 2.5, AB: 2.4 },
      { LF: 2.5, MaF: 2, MiF: 2.75, LB: 2, BC: 2.75, CM: 0.25, LuF: 2.5, ZG: 0.25, LeF: 1, LT: 0.5, AB: 1, AoB: 0.5 },
      { LF: 1.75, MaF: 1, MiF: 1.25, LB: 1.5, BC: 1.75, LuF: 1.5, MP: 2, LeF: 1, MM: 1.25, MB: 1.5, AB: 1.5, AoB: 2 },
      { LF: 1, MiF: 2, PS: 2, CM: 0.25, LuF: 2, ZG: 1, MP: 1, LeF: 2.75, LT: 0.25, PiS: 2, MM: 1, AoB: 2.75 },
      { MaF: 0.75, LB: 0.5, BC: 2.5, LuF: 0.75, ZG: 0.5, MP: 2.5, LeF: 2.5, LT: 0.5, PiS: 2.25, MM: 2.25, MB: 2.5, AB: 0.5 },
      { LF: 0.25, MiF: 0.5, PS: 0.25, LB: 2.75, CM: 2.75, LuF: 2.75, MP: 2.5, LeF: 0.5, PiS: 2.5, MM: 0.25, AB: 0.25, AoB: 2.75 },
      { LF: 2.5, MaF: 2.5, MiF: 0.5, LB: 2.5, BC: 0.5, CM: 0.5, ZG: 0.5, MP: 2.5, LeF: 2.5, PiS: 0.5, AB: 0.5, AoB: 2.5 },
      { LF: 1.85, MaF: 0.75, MiF: 0.25, PS: 0.25, BC: 0.55, CM: 2.25, LuF: 2.4, ZG: 2.75, MM: 0.75, AB: 2.75, AoB: 2.25 },
      { MaF: 2.5, PS: 1.5, FP: 2.75, LB: 2.5, BC: 1.5, CM: 1.5, LuF: 2.75, ZG: 0.5, MP: 0.5, LeF: 0.25, PiS: 0.25, AoB: 1.5 },
      { LF: 2.25, MaF: 0.75, MiF: 0.75, PS: 2.25, LB: 0.75, BC: 0.25, CM: 0.25, LuF: 2.25, ZG: 2.75, LeF: 2.25, MM: 0.75, AB: 2.75 },
      { LF: 2, MiF: 0.75, PS: 1, FP: 2, LB: 1, LuF: 2, LeF: 1, PiS: 2, MM: 1, MB: 2.25, AB: 2.25, AoB: 0.75 },
      { LF: 1, MiF: 0.5, FP: 2.5, BC: 2, CM: 0.5, ZG: 2.5, MP: 2, PiS: 2, MM: 1, MB: 1, AB: 2, AoB: 1 }
    ],
    match: [
      {
        teamA: ["MiF", "LT"],
        teamB: ["MM", "CM"],
        sets: ["1-6", "6-3", "3-2"]
      },
      {
        teamA: ["PS", "AB"],
        teamB: ["PiS", "ZG"],
        sets: ["6-3", "3-6", "2-0"]
      },
      {
        teamA: ["MB", "MP"],
        teamB: ["LuF", "LeF"],
        sets: ["6-3", "5-6"]
      },
      {
        teamA: ["AB", "BC"],
        teamB: ["LT", "LF"],
        sets: ["6-3", "6-2"]
      },
      {
        teamA: ["LB", "PiS"],
        teamB: ["CM", "ZG"],
        sets: ["6-2", "6-0", "6-4"]
      },
      {
        teamA: ["MB", "FP"],
        teamB: ["MaF", "LeF"],
        sets: ["6-3", "6-3", "6-2"]
      },
      {
        teamA: ["PS", "LuF"],
        teamB: ["MiF", "LeF"],
        sets: ["6-1", "6-2", "5-3"]
      },
      {
        teamA: ["MM", "AoB"],
        teamB: ["MaF", "LF"],
        sets: ["6-2", "6-7", {score: "10-8", tiebreak: true }]
      },
      {
        teamA: ["LB", "FP"],
        teamB: ["BC", "AB"],
        sets: ["6-2", "6-4", "0-2"]
      },
      {
        teamA: ["BC", "MP"],
        teamB: ["PiS", "LF"],
        sets: ["3-6", "6-3", "7-5"]
      },
      {
        teamA: ["MB", "AoB"],
        teamB: ["LuF", "MiF"],
        sets: ["5-7", "6-4"]
      },
      {
        teamA: ["MM", "CM"],
        teamB: ["LT", "ZG"],
        sets: ["6-3", "4-6", "6-3"]
      },
    ]
  }
};

// === ANIMAZIONE CLASSIFICA ===
function avviaAnimazioneClassifica(stagioneKey) {
  const stagione = stagioni[stagioneKey];
  const teams = stagione.teams;
  const giornate = stagione.giornate;

  const wrapper = document.querySelector(`.classifica-wrapper[data-stagione="${stagioneKey}"]`);
  if (!wrapper) return;

  const bars = wrapper.querySelectorAll(".team_bar");
  const logos = wrapper.querySelectorAll(".team_logo");



  if (bars.length === 0 || logos.length === 0) return;

  gsap.set(bars, { autoAlpha: 0, width: "0rem", y: 0 });
  gsap.set(logos, { autoAlpha: 0, y: 0 });

  const screenWidth = window.innerWidth;
  let scaleFactor = screenWidth < 768 ? 0.4 : screenWidth < 992 ? 0.75 : 1.4;
  let barHeight = screenWidth < 768 ? 1.25 : screenWidth < 992 ? 1.6 : 2;
  let spacingY = screenWidth < 992 ? 0.35 : 0.25;
  const totalRowHeight = barHeight + spacingY;

  bars.forEach(bar => (bar.style.height = `${barHeight}rem`));

  let punteggi = Object.fromEntries(teams.map(t => [t, 0]));
  let lastScores = Object.fromEntries(teams.map(t => [t, 0]));
  const tl = gsap.timeline();
  tl.to([bars, logos], { autoAlpha: 1, duration: 0.5 });

  giornate.forEach((giornata, index) => {
    teams.forEach(team => {
      punteggi[team] += giornata[team] || 0;
    });

    const classifica = [...teams].sort((a, b) => punteggi[b] - punteggi[a]);
    classifica.forEach((team, i) => {
      const bar = wrapper.querySelector(`.team_bar[data-team="${team}"]`);
      const logo = wrapper.querySelector(`.team_logo[data-team="${team}"]`);
      if (!bar || !logo) return;

      const y = i * totalRowHeight;
      const width = punteggi[team] * scaleFactor + "rem";
      const scoreEl = bar.querySelector(".team_score");
      const logoOffset = (barHeight - 2) / 2;

      tl.to(bar, { y: `${y}rem`, width, duration: 2, ease: "none" }, "giornata" + index);
     tl.to(logo, { y: `${y + logoOffset}rem`, autoAlpha: 1, duration: 2, ease: "none" }, "giornata" + index);


      if (scoreEl) {
        const currentScore = lastScores[team];
        lastScores[team] = punteggi[team];
        tl.to({ val: currentScore }, {
          val: punteggi[team],
          duration: 2,
          ease: "none",
          onUpdate: function () {
            scoreEl.textContent = this.targets()[0].val.toFixed(2);
          }
        }, "giornata" + index);
      }
    });
  });
}
const datiGiocatori = {
  "MiF": { tennista: "Michele Fornari", trofei: 2, oro: 0, argento: 0, bronzo: 2 },
  "LT": { tennista: "Luca Travaglio", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "FP": { tennista: "Filippo Pedroli", trofei: 23, oro: 8, argento: 9, bronzo: 6 },
  "LF": { tennista: "Luca Finzi", trofei: 21, oro: 7, argento: 7, bronzo: 7 },
  "MaF": { tennista: "Mario Fornari", trofei: 8, oro: 0, argento: 3, bronzo: 5 },
  "LB": { tennista: "Luca Belitrandi", trofei: 14, oro: 9, argento: 2, bronzo: 3 },
  "ML": { tennista: "Marco Levi", trofei: 14, oro: 7, argento: 6, bronzo: 1 },
  "PS": { tennista: "Paolo Semenza", trofei: 8, oro: 0, argento: 1, bronzo: 7 },
  "BC": { tennista: "Beppe Colli", trofei: 4, oro: 0, argento: 1, bronzo: 3 },
  "LuF": { tennista: "Luca Fornari", trofei: 6, oro: 3, argento: 3, bronzo: 0 },
  "MP": { tennista: "Martino Prati", trofei: 1, oro: 0, argento: 1, bronzo: 0 },
  "ZG": { tennista: "Zeno Gorini", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "PiS": { tennista: "Pietro Semenza", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MM": { tennista: "Mario Marangione", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "CM": { tennista: "Carlo Momigliano", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MeF": { tennista: "Matteo Fornari", trofei: 1, oro: 1, argento: 0, bronzo: 0 },
  "MB": { tennista: "Massimo Bergia", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MS": { tennista: "Mattia Semenza", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "GF": { tennista: "Giovanni Fornari", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AR": { tennista: "Agustin Rojas", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "SS": { tennista: "Stefano Semenza", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AB": { tennista: "Alessandro Belitrandi", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "LeF": { tennista: "Leone Finzi", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AoB": { tennista: "Antonio Bergamasco", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  // Aggiungi tutti gli altri...
};

// === CALCOLO STATS ===
function calcolaStatisticheGiocatori(stagioneKey) {
  const stagione = stagioni[stagioneKey];
  const stats = {};
  const torneiGiocati = {}; // traccia i tornei unici per giocatore

  // Inizializza i giocatori su stats
  stagione.teams.forEach(p => {
    stats[p] = {
      matchVinti: 0,
      matchPersi: 0,
      matchPari: 0,
      setVinti: 0,
      setPersi: 0,
      gameVinti: 0,
      gamePersi: 0,
      matchTotali: 0,     // verrà calcolato dalle giornate
      puntiTotali: 0,
      torneiGiocati: 0
    };
    torneiGiocati[p] = new Set();
    torneiGiocati[p].add(stagioneKey);
  });

  // Calcolo stats basate sui risultati dei match
  stagione.match.forEach(({ teamA, teamB, sets }) => {
    const keyA = teamA.join("|");
    const keyB = teamB.join("|");
    const gameStats = { [keyA]: 0, [keyB]: 0 };
    const setStats = { [keyA]: 0, [keyB]: 0 };

    sets.forEach((set, index) => {
  const isObject = typeof set === "object";
  const isTiebreak = isObject && set.tiebreak;
  const score = isObject ? set.score : set;
  const [a, b] = score.split("-").map(Number);

  if (!isTiebreak) {
    gameStats[keyA] += a;
    gameStats[keyB] += b;

    if ((a >= 6 || b >= 6) && Math.abs(a - b) >= 2) {
      if (a > b) setStats[keyA]++;
      else if (b > a) setStats[keyB]++;
    }
  } else {
    // Tie-break: conta il set vinto, ma non i game
    if (a > b) setStats[keyA]++;
    else if (b > a) setStats[keyB]++;
  }
});



   // === Calcolo vincitore corretto ===
let winner = null;

if (setStats[keyA] === 2) {
  winner = teamA;
} else if (setStats[keyB] === 2) {
  winner = teamB;
} else if (sets.length === 3 && setStats[keyA] === 1 && setStats[keyB] === 1) {
  const [a, b] = sets[2].split("-").map(Number);
  if (a !== b) winner = a > b ? teamA : teamB;
}


    // assegna set e game
    teamA.forEach(p => {
      stats[p].setVinti += setStats[keyA];
      stats[p].setPersi += setStats[keyB];
      stats[p].gameVinti += gameStats[keyA];
      stats[p].gamePersi += gameStats[keyB];
    });

    teamB.forEach(p => {
      stats[p].setVinti += setStats[keyB];
      stats[p].setPersi += setStats[keyA];
      stats[p].gameVinti += gameStats[keyB];
      stats[p].gamePersi += gameStats[keyA];
    });

    // assegna vittorie/perse/pari
    if (winner) {
      winner.forEach(p => stats[p].matchVinti++);
      (winner === teamA ? teamB : teamA).forEach(p => stats[p].matchPersi++);
    } else {
      teamA.forEach(p => stats[p].matchPari++);
      teamB.forEach(p => stats[p].matchPari++);
    }
  });

  // Calcola matchTotali e altri valori da giornate
  stagione.giornate.forEach(giornata => {
    Object.entries(giornata).forEach(([player, punti]) => {
      if (punti != null && stats[player]) {
        stats[player].matchTotali++;      // conta la giornata come 1 match giocato
        stats[player].puntiTotali += punti;
      }
    });
  });

  // Calcolo tornei giocati
  Object.keys(stats).forEach(p => {
    stats[p].torneiGiocati = torneiGiocati[p]?.size || 0;
  });

  return stats;
}





// === MEDIA PUNTI SU TUTTE LE STAGIONI ===
function calcolaMediaPuntiTotale(giocatore) {
  let totalePunti = 0;
  let totaleGiornate = 0;

  Object.values(stagioni).forEach(stagione => {
    if (!stagione.giornate) return;
    stagione.giornate.forEach(giornata => {
      if (giornata[giocatore] != null) {
        totalePunti += giornata[giocatore];
        totaleGiornate++;
      }
    });
  });

  return totaleGiornate > 0 ? totalePunti / totaleGiornate : 0;
}

// === MOSTRA STATS ===
function mostraStatisticheGiocatori(stagioneKey) {
  const stats = calcolaStatisticheGiocatori(stagioneKey);
  const wrapper = document.querySelector(`.statistiche-wrapper[data-stagione="${stagioneKey}"]`);
  if (!wrapper) return;

  // Crea contenitore principale
const container = document.createElement("div");
wrapper.appendChild(container);

// Crea un wrapper scrollabile per la tabella
const scrollWrapper = document.createElement("div");
scrollWrapper.className = "stats-table-wrapper";
container.appendChild(scrollWrapper);

// Crea la tabella vera e propria
const table = document.createElement("table");
table.className = "stats-table";
table.innerHTML = `
  <thead>
    <tr>
      <th>Sigla</th>
      <th>Tennista</th>
      <th>Trofei</th>
      <th>Oro</th>
      <th>Argento</th>
      <th>Bronzo</th>
      <th>Tornei</th>
      <th>Match</th>
      <th>Vinte</th>
      <th>Perse</th>
      <th>Pari</th>
      <th>% Vittorie</th>
      <th>Set Vinti</th>
      <th>Set Persi</th>
      <th>Game Vinti</th>
      <th>Game Persi</th>
      <th>Punti Totali</th>
      <th>Media Punti</th>
    </tr>
  </thead>
  <tbody></tbody>
`;

scrollWrapper.appendChild(table);


  const body = table.querySelector("tbody");

 Object.entries(stats)
  .sort(([, a], [, b]) => b.puntiTotali - a.puntiTotali)
  .forEach(([giocatore, s]) => {
    const info = datiGiocatori[giocatore] || {};
    const percentualeVittorie = s.matchTotali > 0
      ? (s.matchVinti / s.matchTotali * 100).toFixed(1) + "%"
      : "-";
    const mediaPunti = calcolaMediaPuntiTotale(giocatore).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${giocatore}</td>
      <td>${info.tennista || "-"}</td>
      <td>${info.trofei ?? "-"}</td>
      <td>${info.oro ?? "-"}</td>
      <td>${info.argento ?? "-"}</td>
      <td>${info.bronzo ?? "-"}</td>
      <td>${s.torneiGiocati}</td>
      <td>${s.matchTotali}</td>
      <td>${s.matchVinti}</td>
      <td>${s.matchPersi}</td>
      <td>${s.matchPari}</td>
      <td>${percentualeVittorie}</td>
      <td>${s.setVinti}</td>
      <td>${s.setPersi}</td>
      <td>${s.gameVinti}</td>
      <td>${s.gamePersi}</td>
      <td>${s.puntiTotali.toFixed(2)}</td>
      <td>${mediaPunti}</td>
    `;
    body.appendChild(row);
  });



  container.appendChild(table);
}


// === AVVIO AUTOMATICO E CLICK ===
window.addEventListener("load", function () {
  const stagioneKey = "2025-invernale";
  mostraStatisticheGiocatori(stagioneKey);

  document.querySelectorAll(".start-animation-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      avviaAnimazioneClassifica(btn.dataset.stagione);
    });
  });
});

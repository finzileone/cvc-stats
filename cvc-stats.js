// === CONFIGURAZIONE STAGIONE ===
const stagioni = {
  "2027-inverno": {
    teams: ["LeF", "LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "ZG", "MP", "LT", "PiS", "MM", "MB", "AoB", "MeF", "PF", "MaB", "RB", "FG", "AB"],
    giornate: [
      { LF: 2, MaF: 1, PS: 2, LB: 1, BC: 2, LuF: 0.75, ZG: 1, MP: 2.25, LeF: 0.5, PiS: 2.5, MM: 1, MB: 0.5, AoB: 2, AB: 2.5, MeF: 0.75, PF: 2.25 },
      { LF: 0.25, MaF: 0.25, MiF: 0.25, FP: 2.75, LB: 2.75, LuF: 2.75, MP: 2.75, LT: 0.25, MM: 2.75, MB: 0.25, MaB: 2.75, AoB: 0.25, AB: 0.25, MeF: 2.75, FG: 0.25, PF: 2.75 },
      { LF: 0.25, MiF: 0.25, FP: 0.5, LB: 2.75, BC: 2.75, LuF: 0.25, ZG: 0.25, MP: 0.25, LeF: 2.75, LT: 2.5, PiS: 2.75, MM: 0.25, MaB: 2.75, AB: 0.5, MeF: 2.75, PF: 2.5 },
      { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1, LB: 0.25, BC: 2.75, LuF: 2, ZG: 0.25, LeF: 1, LT: 2, MB: 2.75, AoB: 1.5, MeF: 0.25, FG: 2.75, RB: 0.25, PF: 2.75 },
      { LF: 0.75, MaF: 1.5, MiF: 2.75, PS: 2.25, BC: 0.25, ZG: 1.5, MP: 1.5, LeF: 2.75, LT: 0.25, PiS: 1.5, MB: 0.75, MaB: 2.75, AoB: 2.25, AB: 2.75, FG: 0.25, RB: 0.25 },
      { MaF: 1.25, MiF: 2, PS: 2.25, FP: 0.5, LB: 1.75, LuF: 2.5, MP: 1.25, LeF: 0.5, PiS: 2.5, MaB: 0.75, AoB: 2, AB: 0.75, MeF: 1, FG: 1.75, RB: 1, PF: 2.25 },
      { LF: 2.75, MiF: 2, PS: 0.25, LB: 0.25, BC: 0.25, LuF: 2.75, ZG: 0.25, MP: 1, LT: 2.75, PiS: 2, MaB: 2.75, AB: 0.25, MeF: 2.75, FG: 0.25, RB: 1, PF: 2.75 },
      { LF: 2.25, MaF: 2.75, MiF: 2.5, FP: 0.5, LB: 2.5, BC: 0.5, ZG: 2.5, MP: 0.25, LeF: 0.5, MM: 0.75, MaB: 0.75, AoB: 2.25, AB: 0.25, MeF: 2.75, PF: 2.5, PiS: 0.5 }
    ],
    match: [
      {
        teamA: ["PF", "MP"],
        teamB: ["MeF", "LuF"],
        sets: ["6-3", "6-4", "0-6"]
      },
      {
        teamA: ["PiS", "AB"],
        teamB: ["LeF", "MB"],
        sets: ["6-2", "6-4", "6-6"]
      },
      {
        teamA: ["LF", "AoB"],
        teamB: ["LB", "ZG"],
        sets: ["6-4", "3-6", "3-1"]
      },
      {
        teamA: ["BC", "PS"],
        teamB: ["MaF", "MM"],
        sets: ["1-6", "6-2", "5-3"]
      },
      {
        teamA: ["LB", "FP"],
        teamB: ["MaF", "MiF"],
        sets: ["6-1", "6-4", "5-2"]
      },
      {
        teamA: ["PF", "LuF"],
        teamB: ["MB", "AoB"],
        sets: ["6-3", "6-2", "6-2"]
      },
      {
        teamA: ["MM", "MeF"],
        teamB: ["LF", "LT"],
        sets: ["6-2", "6-1", "6-1"]
      },
      {
        teamA: ["MP", "MaB"],
        teamB: ["AB", "FG"],
        sets: ["7-6", "6-3", "6-0"]
      },
      {
        teamA: ["PF", "LT"],
        teamB: ["FP", "AB"],
        sets: ["6-1", "6-1"]
      },
      {
        teamA: ["BC", "MeF"],
        teamB: ["ZG", "MM"],
        sets: ["6-0", "6-1", "6-1"]
      },
      {
        teamA: ["LeF", "LB"],
        teamB: ["LF", "LuF"],
        sets: ["6-0", "6-4", "5-4"]
      },
      {
        teamA: ["MaB", "PiS"],
        teamB: ["MiF", "MP"],
        sets: ["6-4", "6-3", "6-0"]
      },
      {
        teamA: ["AoB", "PS"],
        teamB: ["MaF", "LF"],
        sets: ["6-4", "1-6"]
      },
      {
        teamA: ["LuF", "LT"],
        teamB: ["LeF", "FP"],
        sets: ["6-3", "3-6", "5-3"]
      },
      {
        teamA: ["BC", "PF"],
        teamB: ["MeF", "LB"],
        sets: ["6-4", "6-2", "6-3"]
      },
      {
        teamA: ["MB", "FG"],
        teamB: ["ZG", "RB"],
        sets: ["7-5", "6-1", "6-0"]
      },
      {
        teamA: ["AB", "LeF"],
        teamB: ["FG", "LT"],
        sets: ["6-1", "6-0", "6-1"]
      },
      {
        teamA: ["MP", "MaF"],
        teamB: ["ZG", "PiS"],
        sets: ["7-5", "4-6"]
      },
      {
        teamA: ["MaB", "MiF"],
        teamB: ["BC", "RB"],
        sets: ["6-2", "6-4", "6-2"]
      },
      {
        teamA: ["AoB", "PS"],
        teamB: ["MB", "LF"],
        sets: ["6-2", "6-3", "0-3"]
      },
      {
        teamA: ["AoB", "MiF"],
        teamB: ["RB", "MeF"],
        sets: ["2-6", "6-2", "6-3"]
      },
      {
        teamA: ["LuF", "PiS"],
        teamB: ["FP", "LeF"],
        sets: ["6-2", "6-3", "2-2"]
      },
      {
        teamA: ["PF", "PS"],
        teamB: ["MaB", "AB"],
        sets: ["7-6", "4-4"]
      },
      {
        teamA: ["LB", "FG"],
        teamB: ["MP", "MaF"],
        sets: ["7-6", "3-5"]
      },
      {
        teamA: ["LuF", "LT"],
        teamB: ["PS", "AB"],
        sets: ["7-6", "6-3", "2-1"]
      },
      {
        teamA: ["PF", "LF"],
        teamB: ["BC", "ZG"],
        sets: ["6-2", "6-0", "6-0"]
      },
      {
        teamA: ["MiF", "PiS"],
        teamB: ["MP", "RB"],
        sets: ["6-3", "4-6", "3-0"]
      },
      {
        teamA: ["MaB", "MeF"],
        teamB: ["LB", "FG"],
        sets: ["6-1", "6-2", "6-1"]
      },
      {
        teamA: ["MiF", "LB"],
        teamB: ["PiS", "FP"],
        sets: ["6-3", "6-4"]
      },
      {
        teamA: ["PF", "ZG"],
        teamB: ["BC", "LeF"],
        sets: ["6-3", "7-6"]
      },
      {
        teamA: ["AoB", "LF"],
        teamB: ["MaB", "MM"],
        sets: ["6-2", "6-1", "2-5"]
      },
      {
        teamA: ["MaF", "MeF"],
        teamB: ["AB", "MP"],
        sets: ["6-2", "6-4", "6-4"]
      }
    ]
  },
  "2026-estate": {
    teams: ["LeF", "LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "ZG", "MP", "LT", "PiS", "MM", "MB", "AoB", "MeF", "PF", "MaB", "ML", "RB", "FG", "GF"],
    giornate: [
      { LeF: 2.75, LF: 0.25, MaF: 0.25, MiF: 0.25, PS: 0.25, BC: 0.25, LuF: 2.75, ZG: 1.5, LT: 0.25, PiS: 1.5, MM: 1.5, AoB: 2.75, MeF: 2.75, PF: 2.75, MaB: 2.75, FG: 1.5 },
      { LF: 2.75, MiF: 0.25, FP: 2.75, LB: 2.75, CM: 0.25, LuF: 2.75, ZG: 0.25, MP: 2.75, PiS: 2.75, MB: 0.25, MeF: 0.25, PF: 2.75, MaB: 0.25, ML: 2.75, FG: 0.25, GF: 0.25 },
      { LeF: 0.25, MaF: 2.75, PS: 0.25, FP: 0.75, LB: 0.25, BC: 2.75, CM: 0.25, ZG: 2.25, MP: 2.75, LT: 2.75, MM: 0.25, AoB: 2.75, PF: 2.75, MaB: 0.25, ML: 2.25, FG:  0.75 },
      { LeF: 2.75, MB: 2.75, BC: 0.25, CM: 0.25, ML: 0.5, LT: 0.5, MeF: 2.5, AoB: 2.5, LF: 0.25, RB: 0.25, MaF: 2.75, GF: 2.75, PiS: 2.75, PS: 0.25, MiF: 2.75, FP: 0.25 },
      { LeF: 1.2, LF: 0.6, PS: 2.0, LB: 1.8, BC: 2.0, CM: 1.0, LT: 0.25, PiS: 1.0, MM: 1.2, MaB: 2.75, AoB: 2.4, GF: 0.25, MeF: 1.8, PF: 2.75 },
      { LF: 0.25, MaF: 0.25, PS: 0.5, FP: 2.75, LB: 2, LuF: 2.5, ZG: 2.5, MP: 2, LeF: 0.25, LT: 0.25, PiS: 0.5, MaB: 2.75, GF: 2.75, FG: 1, PF: 1, MeF: 2.75 },
      { MaF: 2.25, MiF: 2.75, FP: 2, LB: 2, BC: 2.25, CM: 2.75, LuF: 2.75, ZG: 1, MP: 1, MaB: 0.25, AoB: 0.25, ML: 0.75, GF: 0.75, FG: 0.25, PF: 2.75, RB: 0.25 },
      { LF: 2.5, MaF: 2.5, MiF: 1, PS: 2.75, BC: 2, CM: 2, LuF: 0.5, MP: 0.25, LeF: 1, LT: 0.5, PiS: 0.5, MM: 2.5, AoB: 2.5, MeF: 2.75, FG: 0.25, RB: 0.5 },
      { LF: 2.5, MiF: 2, PS: 0.5, FP: 2.75, LB: 0.25, BC: 2, ZG: 2.75, LeF: 0.25, PiS: 0.5, MB: 2.75, MaB: 2.5, AoB: 0.25, GF: 1, MeF: 1, RB: 0.25, PF: 2.75 },
      { LF: 0.25, MaF: 1, FP: 0.25, LB: 2.5, CM: 0.25, LuF: 0.5, ZG: 2, MP: 2.5, LeF: 2.75, LT: 0.25, MM: 2, MaB: 2.75, ML: 0.5, GF: 2.75, FG: 1, PF: 2.75 },
      { MaF: 2, PS: 1, FP: 0.75, LB: 0.25, BC: 0.75, CM: 0.25, LuF: 2.75, ZG: 0.25, MP: 0.25, PiS: 2, MM: 2.75, MB: 2.75, AoB: 1, MeF: 2.75, FG: 2.25, PF: 2.25 },
      { LF: 1.5, FP: 2.5, BC: 2.5, LuF: 1, ZG: 0.5, MP: 0.5, LeF: 1.5, PiS: 1.5, MM: 1.5, MB: 0.25, MaB: 2, AoB: 1, ML: 2.75, MeF: 2, FG: 2.75, RB: 0.25},
      { LF: 1.5, MaF: 1, MiF: 0.25, PS: 1, LB: 1.5, BC: 2, CM: 2, LeF: 2.75, LT: 1, PiS: 0.25, MM: 1.5, ML: 2.75, GF: 1.5, MeF: 1, RB: 2, PF: 2 },
      { LF: 2, MaF: 1.5, MiF: 1.5, PS: 2.25, LB: 2.25, CM: 0.75, MM: 0.75, MaB: 1.5, AoB: 2, ML: 1.5, GF: 1, MeF: 1, FG: 0.9, PF: 2.1 },
      { MiF: 2.75, PS: 0.25, LB: 1.5, BC: 0.25, CM: 0.25, LuF: 0.25, ZG: 0.25, MP: 2.75, LeF: 0.25, PiS: 1.5, MaB: 2.75, AoB: 2.75, ML: 2.75, MeF: 2.75, FG: 1.5, PF: 1.5},
      { LF: 1.25, MaF: 2, MiF: 1.5, PS: 1.5, BC: 1.5, LuF: 1, ZG: 1, MP: 1, LeF: 1.5, LT: 1.75, PiS: 1.25, MM: 1, MB: 2, MaB: 1.75, AoB: 2, FG: 2 },
      { MaF: 0.25, MiF: 0.25, LB: 2.75, BC: 2, ZG: 1.6, MP: 2.4, LeF: 2.75, LT: 0.8, PiS: 2.75, MM: 0.25, MaB: 1, AoB: 1, ML: 0.25, MeF: 2, FG: 2.75 },
      { LF: 1.5, MaF: 2.75, MiF: 1.2, LB: 2.75, BC: 1.8, LuF: 1.8, ZG: 1.5, LeF: 0.25, LT: 1.2, PiS: 1.8, MaB: 1.5, ML: 1.2, MeF: 1.5, FG: 0.25 }



    ],
    match: [
      {
        teamA: ["MeF", "LeF"],
        teamB: ["BC", "LT"],
        sets: ["6-2", "6-1", "6-2"]
      },
      {
        teamA: ["LuF", "PF"],
        teamB: ["MaF", "PS"],
        sets: ["6-0", "6-0", "6-1"]
      },
      {
        teamA: ["MaB", "AoB"],
        teamB: ["MiF", "LF"],
        sets: ["6-1", "6-1", "6-3"]
      },
      {
        teamA: ["PiS", "FG"],
        teamB: ["MM", "ZG"],
        sets: ["7-5", "3-6", "2-2"]
      },
      {
        teamA: ["FP", "ML"],
        teamB: ["GF", "CM"],
        sets: ["6-1", "6-2", "6-2"]
      },
      {
        teamA: ["LB", "MP"],
        teamB: ["MB", "MiF"],
        sets: ["6-4", "6-1", "2-1"]
      },
      {
        teamA: ["PiS", "LF"],
        teamB: ["FG", "ZG"],
        sets: ["6-3", "6-3", "2-1"]
      },
      {
        teamA: ["PF", "LuF"],
        teamB: ["MeF", "MaB"],
        sets: ["6-1", "6-2", "7-5"]
      },
      {
        teamA: ["PF", "LT"],
        teamB: ["CM", "MaB"],
        sets: ["6-1", "7-5", "6-2"]
      },
      {
        teamA: ["BC", "MP"],
        teamB: ["LeF", "MM"],
        sets: ["6-3", "6-1", "6-3"]
      },
      {
        teamA: ["MaF", "AoB"],
        teamB: ["LB", "PS"],
        sets: ["6-4", "6-1", "5-1"]
      },
      {
        teamA: ["ML", "ZG"],
        teamB: ["FP", "FG"],
        sets: ["6-4", "7-5", "1-2"]
      },
      {
        teamA: ["MB", "LeF"],
        teamB: ["BC", "CM"],
        sets: ["6-0", "6-4", "6-2"]
      },
      {
        teamA: ["MeF", "AoB"],
        teamB: ["ML", "LT"],
        sets: ["6-1", "6-2"]
      },
      {
        teamA: ["MiF", "PiS"],
        teamB: ["FP", "PS"],
        sets: ["6-3", "6-1", "3-1"]
      },
      {
        teamA: ["MaF", "GF"],
        teamB: ["LF", "RB"],
        sets: ["6-2", "7-6", "3-1"]
      },
      {
        teamA: ["BC", "PS"],
        teamB: ["CM", "PiS"],
        sets: ["6-4", "1-6", "4-1"]
      },
      {
        teamA: ["MaB", "PF"],
        teamB: ["GF", "LT"],
        sets: ["6-0", "6-0", "6-0"]
      },
      {
        teamA: ["LeF", "LF"],
        teamB: ["MM", "MeF"],
        sets: ["1-6"]
      },
      {
        teamA: ["LeF", "LF"],
        teamB: ["LB", "AoB"],
        sets: ["1-6"]
      },
      {
        teamA: ["AoB", "LB"],
        teamB: ["MM", "MeF"],
        sets: ["6-3"]
      },
      {
        teamA: ["LF"],
        teamB: ["LeF"],
        tipo: "singolo",
        sets: ["2-4"]
      },
      {
        teamA: ["MM"],
        teamB: ["MeF"],
        tipo: "singolo",
        sets: ["2-5"]
      },
      {
        teamA: ["AoB"],
        teamB: ["LB"],
        tipo: "singolo",
        sets: ["4-3"]
      },
      {
        teamA: ["MaB", "FP"],
        teamB: ["LeF", "LT"],
        sets: ["6-0", "6-2", "6-3"]
      },
      {
        teamA: ["LuF", "ZG"],
        teamB: ["PS", "PiS"],
        sets: ["7-6", "6-1"]
      },
      {
        teamA: ["MeF", "GF"],
        teamB: ["LF", "MaF"],
        sets: ["6-2", "6-3", "6-4"]
      },
      {
        teamA: ["MP", "LB"],
        teamB: ["PF", "FG"],
        sets: ["4-6", "6-4", "4-2"]
      },
      {
        teamA: ["FP", "LB"],
        teamB: ["MP", "ZG"],
        sets: ["4-6", "6-4", "2-1"]
      },
      {
        teamA: ["MaF", "BC"],
        teamB: ["ML", "GF"],
        sets: ["6-2", "7-5", "3-4"]
      },
      {
        teamA: ["LuF", "PF"],
        teamB: ["AoB", "MaB"],
        sets: ["6-2", "6-2", "6-4"]
      },
      {
        teamA: ["MiF", "CM"],
        teamB: ["RB", "FG"],
        sets: ["6-3", "6-3", "4-1"]
      },
      {
        teamA: ["AoB", "MM"],
        teamB: ["RB", "LuF"],
        sets: ["7-6", "5-4"]
      },
      {
        teamA: ["MiF", "LeF"],
        teamB: ["CM", "BC"],
        sets: ["6-4", "1-6", "0-6"]
      },
      {
        teamA: ["MaF", "LF"],
        teamB: ["PiS", "LT"],
        sets: ["6-4", "6-4"]
      },
      {
        teamA: ["MeF", "PS"],
        teamB: ["MP", "FG"],
        sets: ["6-1", "6-2", "6-1"]
      },
      {
        teamA: ["LF", "MaB"],
        teamB: ["PiS", "PS"],
        sets: ["6-3", "5-3"]
      },
      {
        teamA: ["PF", "ZG"],
        teamB: ["LeF", "AoB"],
        sets: ["6-0", "6-4", "6-4"]
      },
      {
        teamA: ["MiF", "BC"],
        teamB: ["MeF", "GF"],
        sets: ["2-6", "7-5", "4-2"]
      },
      {
        teamA: ["FP", "MB"],
        teamB: ["LB", "RB"],
        sets: ["7-5", "6-4", "6-0"]
      },
      {
        teamA: ["MM", "ZG"],
        teamB: ["MaF", "FG"],
        sets: ["6-3", "3-6", "4-1"]
      },
      {
        teamA: ["PF", "GF"],
        teamB: ["LF", "CM"],
        sets: ["6-3", "6-1", "6-1"]
      },
      {
        teamA: ["LB", "MP"],
        teamB: ["ML", "LuF"],
        sets: ["6-3", "6-2"]
      },
      {
        teamA: ["LeF", "MaB"],
        teamB: ["LT", "FP"],
        sets: ["6-1", "6-1", "6-0"]
      },
      {
        teamA: ["MaF", "PiS"],
        teamB: ["AoB", "PS"],
        sets: ["4-6", "6-3", "2-0"]
      },
      {
        teamA: ["PF", "FG"],
        teamB: ["BC", "FP"],
        sets: ["6-2", "6-3", "2-3"]
      },
      {
        teamA: ["MeF", "MB"],
        teamB: ["LB", "MP"],
        sets: ["6-2", "6-3", "5-1"]
      },
      {
        teamA: ["LuF", "MM"],
        teamB: ["ZG", "CM"],
        sets: ["6-2", "6-1", "6-1"]
      },
      {
        teamA: ["ML", "FG"],
        teamB: ["MB", "RB"],
        sets: ["6-1", "6-1", "6-3"]
      },
      {
        teamA: ["MeF", "MaB"],
        teamB: ["LuF", "AoB"],
        sets: ["6-3", "6-7", "5-1"]
      },
      {
        teamA: ["LeF", "MM"],
        teamB: ["LF", "PiS"],
        sets: ["6-4", "6-7"]
      },
      {
        teamA: ["FP", "BC"],
        teamB: ["ZG", "MP"],
        sets: ["6-2", "7-6"]
      },
      {
        teamA: ["LB", "GF"],
        teamB: ["LF", "MM"],
        sets: ["6-3", "1-6", "4-4"]
      },
      {
        teamA: ["BC", "CM"],
        teamB: ["PS", "MaF"],
        sets: ["6-4", "1-6", "5-2"]
      },
      {
        teamA: ["LeF", "ML"],
        teamB: ["MiF", "PiS"],
        sets: ["6-4", "6-1", "3-2"]
      },
      {
        teamA: ["PF", "RB"],
        teamB: ["MeF", "LT"],
        sets: ["3-6", "6-3", "6-2"]
      },
      {
        teamA: ["LB", "PS"],
        teamB: ["CM", "MM"],
        sets: ["6-2", "6-4", "1-5"]
      },
      {
        teamA: ["AoB", "LF"],
        teamB: ["MeF", "GF"],
        sets: ["4-6", "6-2", {score: "10-8", tiebreak: true }]
      },
      {
        teamA: ["PF"],
        teamB: ["MiF"],
        tipo: "singolo",
        sets: ["6-0"]
      },
      {
        teamA: ["ML"],
        teamB: ["MaF"],
        tipo: "singolo",
        sets: ["4-4"]
      },
      {
        teamA: ["MaB"],
        teamB: ["FG"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["MiF", "PF"],
        teamB: ["ML", "MaF"],
        sets: ["6-0"]
      },
      {
        teamA: ["MiF", "PF"],
        teamB: ["MaB", "FG"],
        sets: ["4-4"]
      },
      {
        teamA: ["ML", "MaF"],
        teamB: ["MaB", "FG"],
        sets: ["6-4"]
      },
      {
        teamA: ["ML", "AoB"],
        teamB: ["LuF", "PS"],
        sets: ["6-0", "6-2", "6-0"]
      },
      {
        teamA: ["MP", "MaB"],
        teamB: ["CM", "LeF"],
        sets: ["6-0", "6-1", "6-0"]
      },
      {
        teamA: ["FG", "PF"],
        teamB: ["PiS", "LB"],
        sets: ["7-5", "6-7"]
      },
      {
        teamA: ["MeF", "MiF"],
        teamB: ["BC", "ZG"],
        sets: ["6-0", "6-1", "6-2"]
      },
      {
        teamA: ["BC", "PS"],
        teamB: ["MiF", "LeF"],
        sets: ["7-5", "3-6"]
      },
      {
        teamA: ["MB", "AoB"],
        teamB: ["MM", "MP"],
        sets: ["6-3", "4-6", "6-4"]
      },
      {
        teamA: ["MaB", "LT"],
        teamB: ["PiS", "LF"],
        sets: ["7-5", "3-5"]
      },
      {
        teamA: ["MaF", "FG"],
        teamB: ["LuF", "ZG"],
        sets: ["0-6", "6-3", "6-3"]
      },
      {
        teamA: ["MeF", "BC"],
        teamB: ["MaB", "AoB"],
        sets: ["1-6", "6-3", "3-2"]
      },
      {
        teamA: ["LeF", "LB"],
        teamB: ["MaF", "ML"],
        sets: ["6-2", "6-3", "6-2"]
      },
      {
        teamA: ["PiS", "FG"],
        teamB: ["MiF", "MM"],
        sets: ["6-2", "6-4", "3-1"]
      },
      {
        teamA: ["ZG"],
        teamB: ["LT"],
        tipo: "singolo",
        sets: ["5-0"]
      },
      {
        teamA: ["MP"],
        teamB: ["ZG"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["MP"],
        teamB: ["LT"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LuF"],
        teamB: ["ML"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["BC"],
        teamB: ["LT"],
        tipo: "singolo",
        sets: ["5-0"]
      },
      {
        teamA: ["PiS"],
        teamB: ["MiF"],
        tipo: "singolo",
        sets: ["5-3"]
      },
      {
        teamA: ["MeF", "LF"],
        teamB: ["MaB", "ZG"],
        sets: ["3-6", "6-2"]
      },
      {
        teamA: ["LB", "MaF"],
        teamB: ["LeF", "FG"],
        sets: ["7-5", "6-1", "4-3"]
      },
      {
        teamA: ["PiS", "MiF"],
        teamB: ["LuF", "ML"],
        sets: ["5-3"]
      },
      {
        teamA: ["BC", "LT"],
        teamB: ["MiF", "PiS"],
        sets: ["5-1"]
      },
      {
        teamA: ["ML", "LuF"],
        teamB: ["LT", "BC"],
        sets: ["5-2"]
      }



    ]

  },
  "2026-inverno": {
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
      { LF: 1, MiF: 0.5, FP: 2.5, BC: 2, CM: 0.5, ZG: 2.5, MP: 2, PiS: 2, MM: 1, MB: 1, AB: 2, AoB: 1 },
      { LF: 0.75, MaF: 2.75, PS: 0.25, LB: 2.25, BC: 0.25, CM: 2.25, LuF: 2.75, MP: 2.75, LeF: 0.75, PiS: 2.75, AB: 0.25},
      { LF: 0.5, MaF: 2.25, MiF: 2.5, PS: 0.8, LB: 2.25, BC: 0.5, LuF: 2.5, ZG: 0.75, LeF: 1.35, MM: 2.65, AB: 0.75},
      { MaF: 0.75, MiF: 0.5, PS: 2.5, LB: 0.5, BC: 0.25, LuF: 2.5, ZG: 2.25, MP: 2.25, LeF: 2.75, PiS: 2.75, MM: 0.25, AoB: 0.75},
      { LF: 2.5, PS: 0.5, LB: 2.5, BC: 2.5, ZG: 0.5, MP: 2.5, LeF: 0.5, PiS: 0.5, MM: 0.5, MB: 2.5, AB: 0.5},
      { LF: 0.5, LeF: 2.5, MaF: 2.5, MiF: 0.5, LuF: 0.25, ZG: 0.25, LB: 2.75, AoB: 2.75, MB: 2.75, PiS: 2.75, MM: 0.25, AB: 0.25},
      { LF: 2.75, LeF: 0.75, MaF: 0.75, AoB: 2.75, LB: 2.25, PS: 2.25, LuF: 0.25, LT: 0.25, BC: 2.75, MP: 2.75, PiS: 0.25, ZG: 0.25},
      { MaF: 1, MiF: 2.75, PS: 0.25, FP: 2.75, BC: 0.25, LuF: 0.25, MP: 2.75, LT: 0.25, MM: 2, MB: 1, AB: 2, AoB: 2.75},
      { LF: 0.5, MiF: 0.25, PS: 2.75, FP: 2.75, LB: 0.5, ZG: 1.5, MP: 2.5, LeF: 1.5, LT: 0.25, PiS: 2.5, MM: 1.5, MB: 1.5},
      { MaF: 0.25, MiF: 1.25, FP: 2.5, LB: 0.25, BC: 0.5, LuF: 2.75, ZG: 1.75, LT: 0.5, PiS: 1.75, MM: 2.75, MB: 2.5, AoB: 1.25},
      { LeF: 1.5, MiF: 1.5, LuF: 1.5, BC: 1.5, PiS: 1.75, MP: 1.25, PS: 1.25, MaF: 1.75, LB: 2.5, FP: 2.5, AoB: 0.5, ZG: 0.5},
      { LeF: 0.75, LF: 1.75, MaF: 1.25, PS: 1, LB: 1, BC: 2.25, LuF: 2, LT: 2, PiS: 1.25, MM: 0.75, MB: 2.25, AoB: 1.75},
      { LeF: 1.5, LF: 0.5, MaF: 0.5, MiF: 1.5, PS: 2, FP: 2.5, LB: 1, BC: 1.5, LT: 1, MM: 2.5, AoB: 2}
  
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
      {
        teamA: ["MM", "LT"],
        teamB: ["FP", "CM"],
        sets: ["3-6", "1-2"],
        ritiro: "B"
      },
      {
        teamA: ["ZG", "MB"],
        teamB: ["TBE", "PiS"],
        sets: ["7-5", "6-2", "2-2"]
      },
      {
        teamA: ["LuF", "LF"],
        teamB: ["LT", "AoB"],
        sets: ["6-3", "7-5"]
      },
      {
        teamA: ["BC", "MiF"],
        teamB: ["CM", "ZG"],
        sets: ["6-3", "6-4", "4-1"]
      },
      {
        teamA: ["LB", "MaF"],
        teamB: ["AB", "LeF"],
        sets: ["3-6", "6-0", "6-2"]
      },
      {
        teamA: ["LuF", "AB"],
        teamB: ["LB", "MB"],
        sets: ["2-6", "6-0", "4-4"]
      },
      {
        teamA: ["BC", "LF"],
        teamB: ["MM", "MiF"],
        sets: ["6-4", "1-4"]
      },
      {
        teamA: ["AoB", "MP"],
        teamB: ["MaF", "LeF"],
        sets: ["6-0", "3-6", "6-2"]
      },
      {
        teamA: ["AoB", "LeF"],
        teamB: ["LT", "CM"],
        sets: ["6-2", "6-2", "6-2"]
      },
      {
        teamA: ["MiF", "PS"],
        teamB: ["LF", "ZG"],
        sets: ["6-2", "3-6", "2-1"]
      },
      {
        teamA: ["LuF", "PiS"],
        teamB: ["MM", "MP"],
        sets: ["4-6", "6-4", {score: "7-4", tiebreak: true }]
      },
      {
        teamA: ["MM", "PiS"],
        teamB: ["LuF", "MaF"],
        sets: ["7-6", "6-6"]
      },
      {
        teamA: ["BC", "MP"],
        teamB: ["AB", "ZG"],
        sets: ["7-5", "6-2"]
      },
      {
        teamA: ["LB", "LT"],
        teamB: ["MB", "LeF"],
        sets: ["3-2"],
        ritiro: "A"
      },
      {
        teamA: ["MP", "PiS"],
        teamB: ["LeF", "MiF"],
        sets: ["7-6", "6-4"]
      },
      {
        teamA: ["LuF", "CM"],
        teamB: ["MM", "PS"],
        sets: ["6-2", "7-6", "5-1"]
      },
      {
        teamA: ["LB", "AoB"],
        teamB: ["LF", "AB"],
        sets: ["6-3", "6-3", "3-1"]
      },
      {
        teamA: ["AoB", "LeF"],
        teamB: ["AB", "MiF"],
        sets: ["6-3", "6-4"]
      },
      {
        teamA: ["LF", "MaF"],
        teamB: ["CM", "ZG"],
        sets: ["6-2", "7-6"]
      },
      {
        teamA: ["LB", "MP"],
        teamB: ["BC", "PiS"],
        sets: ["6-1", "7-5", "2-2"]
      },
      {
        teamA: ["AoB", "CM"],
        teamB: ["MaF", "MM"],
        sets: ["6-3", "6-2", "1-4"]
      },
      {
        teamA: ["AB", "ZG"],
        teamB: ["PS", "MiF"],
        sets: ["6-0", "6-2", "6-2"]
      },
      {
        teamA: ["LuF", "FP"],
        teamB: ["LeF", "PiS"],
        sets: ["6-1", "6-4", "6-2"]
      },
      {
        teamA: ["BC", "CM"],
        teamB: ["AoB", "PS"],
        sets: ["6-4", "2-6", "1-1"]
      },
     {
        teamA: ["LB", "MaF"],
        teamB: ["MP", "ZG"],
        sets: ["6-4", "6-1"]
      },
      {
        teamA: ["LF", "LeF"],
        teamB: ["MM", "MaF"],
        sets: ["6-3", "6-6"]
      },
      {
        teamA: ["ZG", "AB"],
        teamB: ["BC", "CM"],
        sets: ["6-4", "6-0", "4-2"]
      },
      {
        teamA: ["LuF", "PS"],
        teamB: ["LB", "MiF"],
        sets: ["6-1", "6-4", "1-5"]
      },
      {
        teamA: ["MB", "AB"],
        teamB: ["AoB", "MiF"],
        sets: ["6-0", "6-1", "1-6"]
      },
      	{
        teamA: ["LuF", "FP"],
        teamB: ["LB", "PS"],
        sets: ["6-7", "6-1", {score: "12-10", tiebreak: true }]
      },
      {
        teamA: ["LF", "PiS"],
        teamB: ["MM", "LeF"],
        sets: ["2-6", "6-4", {score: "7-5", tiebreak: true }]
      },
      {
        teamA: ["MP", "PiS"],
        teamB: ["MB", "MM"],
        sets: ["1-6", "6-3"],
        ritiro: "B"
      },
      {
        teamA: ["ZG", "FP"],
        teamB: ["MiF", "CM"],
        sets: ["6-3", "7-5"]
      },
      {
        teamA: ["AB", "BC"],
        teamB: ["AoB", "LF"],
        sets: ["2-6", "6-2"],
        ritiro: "B"
      },
      {
        teamA: ["CM", "LB"],
        teamB: ["LF", "LeF"],
        sets: ["6-3", "3-3"]
      },
      {
        teamA: ["PiS", "LuF"],
        teamB: ["AB", "TBE"],
        sets: ["6-1", "6-3", "6-2"]
      },
      {
        teamA: ["MP", "MaF"],
        teamB: ["PS", "BC"],
        sets: ["6-1", "6-2", "4-2"]
      },
      {
        teamA: ["MaF", "LB"],
        teamB: ["ZG", "AB"],
        sets: ["6-3", "6-6"]
      },
      {
        teamA: ["LuF", "MiF"],
        teamB: ["LF", "BC"],
        sets: ["6-4", "6-2", "2-2"]
      },
      {
        teamA: ["MM"],
        teamB: ["LeF"],
        tipo: "singolo",
        sets: ["5-4"]
      },
      {
        teamA: ["MM"],
        teamB: ["PS"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LeF"],
        teamB: ["PS"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["AB"],
        teamB: ["LB"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LB"],
        teamB: ["MaF"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["AB"],
        teamB: ["MaF"],
        tipo: "singolo",
        sets: ["6-5"]
      },
      {
        teamA: ["LuF"],
        teamB: ["BC"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LuF"],
        teamB: ["LF"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LF"],
        teamB: ["BC"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["LeF", "PiS"],
        teamB: ["MM", "BC"],
        sets: ["6-0", "6-4", "6-1"]
      },
      {
        teamA: ["LuF", "PS"],
        teamB: ["LB", "MiF"],
        sets: ["6-4", "6-4"]
      },
      {
        teamA: ["MP", "ZG"],
        teamB: ["AoB", "MaF"],
        sets: ["6-4", "6-6"]
      },
      {
        teamA: ["LF", "TBE"],
        teamB: ["LeF", "ZG"],
        sets: ["6-4", "6-3"]
      },
      {
        teamA: ["BC", "MB"],
        teamB: ["MM", "PS"],
        sets: ["6-1", "6-0", "5-5"]
      },
      {
        teamA: ["LB", "MP"],
        teamB: ["PiS", "AB"],
        sets: ["7-6", "6-3"]
      },
      {
        teamA: ["LeF", "MaF"],
        teamB: ["MiF", "LF"],
        sets: ["6-0", "6-3"]
      },
      {
        teamA: ["LB", "AoB"],
        teamB: ["LuF", "ZG"],
        sets: ["6-0", "7-5", "4-3"]
      },
      {
        teamA: ["MB", "PiS"],
        teamB: ["MM", "AB"],
        sets: ["6-2", "7-6", "3-2"]
      },
      {
        teamA: ["LB", "PS"],
        teamB: ["MaF", "LeF"],
        sets: ["7-6", "3-3"]
      },
      {
        teamA: ["MP", "BC"],
        teamB: ["ZG", "PiS"],
        sets: ["6-2", "6-2", "3-2"]
      },
      {
        teamA: ["LuF", "LT"],
        teamB: ["LF", "AoB"],
        sets: ["1-6", "2-6", "1-4"]
      },
      {
        teamA: ["LuF", "LT"],
        teamB: ["MP", "FP"],
        sets: ["2-6", "2-6", "0-3"]
      },
      {
        teamA: ["AB", "MM"],
        teamB: ["MaF", "MB"],
        sets: ["3-6", "7-6", "3-1"]
      },
      {
        teamA: ["AoB", "MiF"],
        teamB: ["BC", "PS"],
        sets: ["6-1", "6-3", "4-2"]
      },
      {
        teamA: ["LeF", "ZG"],
        teamB: ["MM", "MB"],
        sets: ["6-3", "5-7"]
      },
      {
        teamA: ["PS", "FP"],
        teamB: ["LT", "MiF"],
        sets: ["6-4", "6-2", "3-2"]
      },
      {
        teamA: ["MP", "PiS"],
        teamB: ["LF", "LB"],
        sets: ["7-5", "4-3"]
      },
      {
        teamA: ["MM", "LuF"],
        teamB: ["MaF", "LB"],
        sets: ["6-3", "7-5", "3-1"]
      },
      {
        teamA: ["MB", "FP"],
        teamB: ["LT", "BC"],
        sets: ["6-2", "6-1", "6-6"]
      },
      {
        teamA: ["ZG", "PiS"],
        teamB: ["AoB", "MiF"],
        sets: ["7-6", "4-5"]
      },
      {
        teamA: ["LeF", "BC"],
        teamB: ["LuF", "MiF"],
        sets: ["6-3", "3-6", "2-2"]
      },
      {
        teamA: ["ZG", "AoB"],
        teamB: ["LB", "FP"],
        sets: ["3-6", "3-6", "2-2"]
      },
      {
        teamA: ["MaF", "PiS"],
        teamB: ["PS", "MP"],
        sets: ["6-3", "3-4"]
      },
      {
        teamA: ["LeF", "MM"],
        teamB: ["MB", "BC"],
        sets: ["4-6", "3-6", "1-2"],
        ritiro: "B"
      },
      {
        teamA: ["LF", "AoB"],
        teamB: ["PiS", "MaF"],
        sets: ["7-5", "3-4"]
      },
      {
        teamA: ["LuF", "LT"],
        teamB: ["PS", "LB"],
        sets: ["4-6", "6-2", "3-1"]
      },
      {
        teamA: ["LeF", "TBE"],
        teamB: ["BC", "MiF"],
        sets: ["6-3", "2-6", "5-5"]
      },
      {
        teamA: ["MM", "FP"],
        teamB: ["LF", "MaF"],
        sets: ["6-2", "7-6"]
      },
      {
        teamA: ["AoB", "PS"],
        teamB: ["LB", "LT"],
        sets: ["4-6", "6-4", {score: "10-8", tiebreak: true }]
      }
    ]
  },
  "2025-estivo": {
    teams: ["AR", "GF", "MeF", "SS", "LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "ZG", "MP", "PiS", "MM", "MB",],
    giornate: [
      {LF: 1.5, MaF: 1.5, PS: 2, FP: 1, LB: 1.5, BC: 0.25, CM: 1.5, SS: 1, ZG: 0.25, PiS: 2.75, MM: 2, MB: 2.75},
      {LF: 0.5, MaF: 2.5, MiF: 0.5, FP: 1.5, LB: 2.75, CM: 1.5, LuF: 2.5, SS: 1.5, ZG: 1.5, GF: 0.25, MB: 0.25, AR: 2.75},
      {LF: 0.25, MiF: 1.85, PS: 0.25, FP: 2.75, LB: 2.5, CM: 0.5, LuF: 2.5, ZG: 2, MP: 2.75, PiS: 0.95, MB: 0.5},
      {LF: 0.5, MaF: 2.5, MiF: 2.5, PS: 0.5, FP: 0.5, BC: 0.5, LuF: 2.5, SS: 0.5, ZG: 0.5, GF: 2.5, PiS: 2.5, MM: 2.5},
      {LF: 0.5, MaF: 0.5, MiF: 2.5, PS: 2.5, LB: 2.75, BC: 2.75, LuF: 2.75, SS: 0.25, MP: 0.25, GF: 0.25, MeF: 2.75, MM: 0.25},
      {LF: 1.25, MaF: 2.5, MiF: 0.5, PS: 1.5, FP: 1.75, BC: 1.5, ZG: 1.5, MP: 2.5, GF: 0.5, PiS: 1.25, MM: 1.5, MB: 1.75},
      {MaF: 0.5, PS: 1.5, FP: 2.5, LB: 0.5, BC: 0.25, LuF: 2.5, ZG: 1.5, MP: 2.75, GF: 0.25, MeF: 2.75, PiS: 1.5, MM: 1.5},
      {LF: 2.5, MiF: 2.5, FP: 2.5, LB: 2.75, BC: 2.5, LuF: 0.25, ZG: 0.25, MP: 0.5, GF: 0.5, MeF: 0.5, PiS: 0.5, MM: 2.75},
      {LF: 2.5, MaF: 2.75, MiF: 2.5, PS: 0.5, FP: 0.5, LB: 2.5, LuF: 0.5, SS: 0.5, ZG: 0.25, MP: 0.25, MeF: 2.75, MB: 2.5},
      {LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5, LB: 1.5, LuF: 0.25, SS: 1.5, GF: 0.25, MeF: 2.75, PiS: 1.5, MM: 2.75, MB: 1.5},
      {LF: 1.5, MaF: 0.25, PS: 1.5, FP: 0.25, BC: 2.75, ZG: 0.25, MP: 0.25, MeF: 2.75, PiS: 1.5, MM: 2.75, MB: 2.75},
      {MaF: 2, MiF: 1, FP: 1, LB: 1, BC: 2.75, SS: 0.25, ZG: 0.25, MeF: 2, PiS: 1, MM: 2, MB: 2, AR: 2.75},
      {LF: 0.55, MaF: 1, MiF: 0.25, PS: 2.75, LB: 2, BC: 2, LuF: 2.75, MP: 2.9, GF: 0.25, PiS: 1, MB: 1.35},
      {LF: 0.25, MaF: 0.25, MiF: 1.25, PS: 2.75, FP: 2.75, LB: 1.75, BC: 1.25, LuF: 2.75, ZG: 0.25, GF: 1.75, MeF: 2.75, MM: 0.25},
      {LF: 1.25, MaF: 1.75, MiF: 0.5, PS: 1.25, FP: 2.5, LB: 0.5, BC: 0.5, ZG: 2.5, MP: 1.75, GF: 0.5, PiS: 2.5, MM: 2.5},
      {LF: 2.75, MaF: 2.75, MiF: 2.5, PS: 0.5, FP: 0.25, LB: 2.75, CM: 2.75, LuF: 2.5, ZG: 0.25, MM: 0.25, AR: 0.25},
      {LF: 0.25, MaF: 0.25, MiF: 1, PS: 2.75, FP: 2, LB: 2.75, BC: 2.75, LuF: 2.75, ZG: 1, MP: 2, MM: 0.25},
      {MaF: 0.6, MiF: 1.8, PS: 2.5, FP: 0.5, LB: 1.8, LuF: 2.4, MP: 1.8, PiS: 2.5, MM: 0.6, MB: 0.5}
    ],
    match: [
      {
        teamA: ["PiS", "MB"],
        teamB: ["BC", "ZG"],
        sets: ["6-2", "6-0", "6-4"]
      },
      {
        teamA: ["PS", "MM"],
        teamB: ["FP", "SS"],
        sets: ["4-6", "6-4", "2-0"]
      },
      {
        teamA: ["LF", "MaF"],
        teamB: ["LB", "CM"],
        sets: ["6-4", "3-6"]
      },
      {
        teamA: ["CM", "ZG"],
        teamB: ["FP", "SS"],
        sets: ["7-5", "2-6", "1-1"]
      },
      {
        teamA: ["MaF", "LuF"],
        teamB: ["LF", "MiF"],
        sets: ["6-1", "6-5"]
      },
      {
        teamA: ["LB", "AR"],
        teamB: ["MB", "GF"],
        sets: ["6-3", "6-1", "6-0"]
      },
      {
        teamA: ["LB", "LuF"],
        teamB: ["CM", "MB"],
        sets: ["6-4", "6-4"]
      },
      {
        teamA: ["FP", "MP"],
        teamB: ["LF", "PS"],
        sets: ["6-1", "6-2", "2-1"]
      },
      {
        teamA: ["MaF", "MM"],
        teamB: ["LF", "ZG"],
        sets: ["7-5", "5-4"]
      },
      {
        teamA: ["MiF", "LuF"],
        teamB: ["FP", "PS"],
        sets: ["7-5", "6-2"]
      },
      {
        teamA: ["PiS", "GF"],
        teamB: ["SS", "BC"],
        sets: ["7-5", "6-2", "3-3"]
      },
      {
        teamA: ["LB", "BC"],
        teamB: ["MM", "GF"],
        sets: ["6-1", "6-4", "6-2"]
      },
      {
        teamA: ["MiF", "PS"],
        teamB: ["LF", "MaF"],
        sets: ["6-4", "6-1"]
      },
      {
        teamA: ["MeF", "LuF"],
        teamB: ["MP", "SS"],
        sets: ["6-3", "6-3", "3-2"]
      },
      {
        teamA: ["PS", "BC"],
        teamB: ["MM", "ZG"],
        sets: ["6-4", "4-6"]
      },
      {
        teamA: ["MaF", "MP"],
        teamB: ["GF", "MiF"],
        sets: ["6-0", "6-2", "4-4"]
      },
      {
        teamA: ["FP", "MB"],
        teamB: ["LF", "PiS"],
        sets: ["7-5", "4-5"]
      },
      {
        teamA: ["PiS", "ZG"],
        teamB: ["MM", "PS"],
        sets: ["4-6", "6-4"]
      },
      {
        teamA: ["LuF", "FP"],
        teamB: ["LB", "MaF"],
        sets: ["6-2", "6-4", "2-2"]
      },
      {
        teamA: ["MeF", "MP"],
        teamB: ["GF", "BC"],
        sets: ["6-3", "6-2", "4-0"]
      },
      {
        teamA: ["LB", "MM"],
        teamB: ["LuF", "ZG"],
        sets: ["6-4", "6-4", "3-2"]
      },
      {
        teamA: ["FP", "BC"],
        teamB: ["MeF", "PiS"],
        sets: ["6-3", "5-4"]
      },
      {
        teamA: ["MiF", "LF"],
        teamB: ["MP", "GF"],
        sets: ["6-4", "6-5"]
      },
      {
        teamA: ["LB", "LF"],
        teamB: ["LuF", "SS"],
        sets: ["6-3", "7-5"]
      },
      {
        teamA: ["MiF", "MB"],
        teamB: ["FP", "PS"],
        sets: ["7-5", "0-2"],
        ritiro: "B"
      },
      {
        teamA: ["MeF", "MaF"],
        teamB: ["MP", "ZG"],
        sets: ["6-2", "6-4", "4-0"]
      },
      {
        teamA: ["MiF", "MB"],
        teamB: ["PS", "MaF"],
        sets: ["6-4", "6-7"]
      },
      {
        teamA: ["PiS", "LF"],
        teamB: ["LB", "SS"],
        sets: ["3-6", "6-2", "2-2"]
      },
      {
        teamA: ["MeF", "MM"],
        teamB: ["LuF", "GF"],
        sets: ["6-2", "6-4", "6-3"]
      },
      {
        teamA: ["MM", "BC"],
        teamB: ["MaF", "ZG"],
        sets: ["7-6", "6-2", "4-2"]
      },
      {
        teamA: ["PiS", "TBE"],
        teamB: ["PS", "LF"],
        sets: ["5-7", "6-2"]
      },
      {
        teamA: ["MeF", "MB"],
        teamB: ["FP", "MP"],
        sets: ["6-4", "6-4", "4-2"]
      },
      {
        teamA: ["MM", "MaF"],
        teamB: ["MiF", "LB"],
        sets: ["4-6", "6-2", "3-1"]
      },
      {
        teamA: ["MeF", "MB"],
        teamB: ["FP", "PiS"],
        sets: ["6-3", "3-6", "5-4"]
      },
      {
        teamA: ["BC", "AR"],
        teamB: ["ZG", "SS"],
        sets: ["7-5", "6-3", "3-1"]
      },
      {
        teamA: ["LB", "BC"],
        teamB: ["PiS", "MaF"],
        sets: ["1-6", "6-3", "6-2"]
      },
      {
        teamA: ["LuF", "PS"],
        teamB: ["GF", "MiF"],
        sets: ["6-2", "6-2", "6-2"]
      },
      {
        teamA: ["LB", "GF"],
        teamB: ["MiF", "BC"],
        sets: ["7-6", "2-5"]
      },
      {
        teamA: ["MeF", "PS"],
        teamB: ["MM", "ZG"],
        sets: ["6-4", "6-2", "4-0"]
      },
      {
        teamA: ["FP", "LuF"],
        teamB: ["LF", "MaF"],
        sets: ["6-3", "6-0", "4-1"]
      },
      {
        teamA: ["PiS", "FP"],
        teamB: ["MiF", "BC"],
        sets: ["7-6", "3-2"]
      },
      {
        teamA: ["MaF", "MP"],
        teamB: ["LF", "PS"],
        sets: ["7-5", "2-4"]
      },
      {
        teamA: ["MM", "ZG"],
        teamB: ["GF", "LB"],
        sets: ["7-5", "5-4"]
      },
      {
        teamA: ["CM", "LF"],
        teamB: ["AR", "ZG"],
        sets: ["6-1", "6-3", "4-3"]
      },
      {
        teamA: ["MiF", "LuF"],
        teamB: ["PS", "TBE"],
        sets: ["6-3", "6-3", "3-3"]
      },
      {
        teamA: ["LB", "MaF"],
        teamB: ["MM", "FP"],
        sets: ["6-2", "6-3", "4-3"]
      },
      {
        teamA: ["LB", "PS"],
        teamB: ["MaF", "TBE"],
        sets: ["7-6", "6-2", "2-0"]
      },
      {
        teamA: ["LuF", "BC"],
        teamB: ["LF", "MM"],
        sets: ["6-3", "6-2", "3-2"]
      },
      {
        teamA: ["FP", "MP"],
        teamB: ["MiF", "ZG"],
        sets: ["3-6", "6-2", "3-1"]
      },
      {
        teamA: ["PS", "PiS"],
        teamB: ["FP", "MB"],
        sets: ["6-3", "6-3"]
      },
      {
        teamA: ["MiF"],
        teamB: ["PiS"],
        tipo: "singolo",
        sets: ["5-4"]
      },
      {
        teamA: ["ZG"],
        teamB: ["MiF"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["ZG"],
        teamB: ["PiS"],
        tipo: "singolo",
        sets: ["4-4"]
      },
      {
        teamA: ["MP"],
        teamB: ["MB"],
        tipo: "singolo",
        sets: ["5-0"]
      },
      {
        teamA: ["MP"],
        teamB: ["LF"],
        tipo: "singolo",
        sets: ["5-0"]
      },
      {
        teamA: ["MB"],
        teamB: ["LF"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["MP"],
        teamB: ["MaF"],
        tipo: "singolo",
        sets: ["5-2"]
      },
      {
        teamA: ["LuF"],
        teamB: ["MiF"],
        tipo: "singolo",
        sets: ["5-0"]
      },
      {
        teamA: ["LB"],
        teamB: ["MM"],
        tipo: "singolo",
        sets: ["5-1"]
      },
      {
        teamA: ["LuF", "MiF"],
        teamB: ["LB", "MM"],
        sets: ["4-3"]
      },
      {
        teamA: ["LB", "MM"],
        teamB: ["MaF", "MP"],
        sets: ["5-1"]
      },
      {
        teamA: ["LuF", "MiF"],
        teamB: ["MaF", "MP"],
        sets: ["5-2"]
      },
    ]
  },
  "2009-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "ML"],
  giornate: [
    { MaF: 2.5, MiF: 1.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, ML: 2.5 },
    { LF: 1, PS: 2.5, ML: 2.5 },
    { MaF: 2, MiF: 1, ML: 3 },
    { MaF: 0.5, MiF: 2.5, PS: 0.5, ML: 2.5 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, ML: 2.5 },
    { LF: 1, MaF: 1, PS: 2, FP: 2 },
    { LF: 1, PS: 1, FP: 2, ML: 2 },
    { MaF: 2, MiF: 1, FP: 2, ML: 1 },
    { LF: 2, MiF: 1, ML: 3 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, ML: 1.5 },
    { LF: 2 },
    { PS: 2, ML: 2 },
    { LF: 3, MaF: 1 },
    { LF: 2, MaF: 2, MiF: 1, PS: 1 },
    { LF: 1, MaF: 2, MiF: 1, PS: 2 },
    { LF: 2, MaF: 1, MiF: 2, FP: 1 },
    { MiF: 2.5, PS: 0.5, FP: 0.5, ML: 2.5 },
    { MaF: 0.5, PS: 0.5, FP: 2.5, ML: 2.5 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, ML: 0.5 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 2.5, MaF: 0.5, FP: 2.5, ML: 0.5 },
    { MiF: 1.5, PS: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 2.25, MiF: 1.25, PS: 0.75, ML: 1.75 },
    { LF: 2, MaF: 1, FP: 3 },
    { LF: 3, MaF: 1 },
    { LF: 0.5, MiF: 0.5, FP: 2.5, ML: 2.5 },
    { MaF: 1, MiF: 2, FP: 1, ML: 2 },
    { LF: 2.5, MaF: 0.5, MiF: 2.5, FP: 0.5 }
  ]
  },
  "2009-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],
  giornate: [
    { LF: 2, MaF: 2, MiF: 1, FP: 1 },
    { FP: 1, ML: 3 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, ML: 2.5 },
    { MaF: 2.5, MiF: 0.5, ML: 2.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, ML: 0.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5 },
    { LF: 3, MiF: 1, FP: 2 },
    { MaF: 2.5, MiF: 0.5, ML: 2.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, FP: 2.5 },
    { LF: 2.5, MaF: 0.5, FP: 2.5, ML: 0.5 },
    { MaF: 0.5, MiF: 0.5, ML: 2.5 },
    { LF: 1, MaF: 2, MiF: 1, ML: 2 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, ML: 0.5 },
    { MaF: 1, FP: 3 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, ML: 2.5 },
    { LF: 0.5, MiF: 0.5, FP: 2.5, ML: 2.5 },
    { PS: 1, FP: 3 },
    { LF: 2.5, MaF: 0.5, FP: 0.5, ML: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, ML: 0.5 }
  ]
},
"2010-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "ML"],
  giornate: [
    { LF: 2.5, PS: 2.5, FP: 0.5, ML: 0.5 },
    { LF: 3, FP: 1 },
    { LF: 2.5, MaF: 0.5, MiF: 2.5, ML: 0.5 },
    { MaF: 2, MiF: 1, PS: 1, FP: 2 },
    { MaF: 2, MiF: 1, PS: 2, ML: 1 },
    { LF: 2.5, MaF: 2.5, PS: 0.5, FP: 0.5 },
    { LF: 1.5, FP: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, ML: 2.5 },
    { LF: 3, MaF: 1, PS: 2 },
    { MiF: 1, ML: 3 },
    { MaF: 0.5, MiF: 2.5, PS: 2.5, FP: 0.5 },
    { LF: 2, MaF: 1, FP: 1, ML: 2 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, ML: 2.5 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 3, MiF: 1 },
    { MaF: 0.5, MiF: 0.5, FP: 2.5, ML: 2.5 },
    { LF: 1.5, PS: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 },
    { PS: 1.5, ML: 2.5 },
    { MiF: 1, FP: 2, ML: 3 },
    { LF: 2, MaF: 1, PS: 2, FP: 1 },
    { LF: 1, MiF: 1, PS: 2, ML: 2 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, FP: 2.5 },
    { FP: 3, ML: 1 },
    { LF: 0.5, MaF: 0.5, MiF: 2.5, FP: 2.5 },
    { LF: 0.5, MiF: 2.5, PS: 0.5, ML: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, ML: 2.5 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, ML: 2.5 }
  ]
},
"2010-estate": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "ML"],
  giornate: [
    { LF: 2, PS: 2.5, FP: 1.5 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, FP: 2.5 },
    { MaF: 2, MiF: 1, FP: 1, ML: 2 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { LF: 2.5, PS: 0.5, FP: 0.5, ML: 2.5 },
    { LF: 0.5, MaF: 0.5, FP: 2.5, ML: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, ML: 0.5 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 3, MaF: 1 },
    { LF: 2, MiF: 2, PS: 2 },
    { LF: 1, ML: 3 },
    { LF: 1, ML: 3 },
    { LF: 3, MaF: 1 },
    { LF: 1, ML: 3 },
    { MaF: 0.5, MiF: 2.5, FP: 2.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, FP: 0.5 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, ML: 0.5 },
    { MaF: 0.5, PS: 2.5, FP: 0.5, ML: 2.5 },
    { MaF: 2, MiF: 1, FP: 2, ML: 1 }
  ]
},
"2011-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 2, MaF: 2, MiF: 1, ML: 1 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, ML: 0.5 },
    { MiF: 1, PS: 2, ML: 3 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 1, MiF: 1, FP: 2, ML: 2 },
    { LF: 2, MiF: 1, PS: 1, FP: 2 },
    { MiF: 1, PS: 2, FP: 3 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 },
    { LF: 3, MiF: 1 },
    { MaF: 1, PS: 2, FP: 2, ML: 1 },
    { LF: 1, MaF: 2, FP: 1, ML: 2 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5 },
    { MiF: 0.5, PS: 0.5, FP: 2.5, ML: 2.5 },
    { LF: 0.5, MaF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, ML: 2.5 },
    { MaF: 2.5, MiF: 0.5, FP: 0.5, ML: 2.5 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { MaF: 0.5, FP: 2.5, ML: 2.5 },
    { LF: 2, MaF: 2.5, FP: 1.5 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, ML: 2.5 },
    { MaF: 2, MiF: 1, PS: 1, ML: 2 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, FP: 1.5 },
    { MaF: 0.5, MiF: 0.5, PS: 2.5, ML: 2.5 },
    { LF: 1.5, PS: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, FP: 2.5 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, ML: 2.5 },
    { MaF: 2, MiF: 1, FP: 2, ML: 1 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, ML: 0.5 }
  ],

  match: [
    {
      teamA: ["MaF", "LF"],
      teamB: ["FP", "PS"],
      sets: ["6-2", "1-6", "2-2"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "ML"],
      sets: ["1-6", "6-0", "5-4"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "ML"],
      sets: ["7-5", "6-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["MiF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["4-5"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["FP", "PS"],
      sets: ["6-7", "6-0"]
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["FP", "ML"],
      sets: ["6-3", "2-6", "6-4"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["PS", "MiF"],
      sets: ["4-6", "6-4", "2-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-4"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["4-0"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["6-4", "4-5"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-4", "5-4"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["FP", "PS"],
      sets: ["5-7", "7-5", "1-2"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["FP", "LF"],
      sets: ["6-1", "4-6", "2-1"]
    },

    // 27 dicembre 2010: incontri senza punti in classifica
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-4"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-0"]
    },

    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "PS"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["PS", "MiF"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["FP", "MiF"],
      sets: ["6-2", "6-3"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["FP", "LF"],
      sets: ["7-6", "2-5"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["MaF", "X"],
      sets: ["6-1", "6-2"]
    },

    // Triangolare LF / FP / MaF
    {
      teamA: ["LF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-3"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-6"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-5"]
    },

    {
      teamA: ["ML", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["6-3", "6-2"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["MiF", "PS"],
      sets: ["6-4", "3-6", "6-2"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["7-5", "6-7"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "6-1"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-7", "6-5"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "6-1"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "6-2"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "ML"],
      sets: ["6-3", "6-2"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MiF", "ML"],
      sets: ["6-3", "6-2"]
    }
  ]
},
"2011-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 2.5, PS: 1, ML: 2.5 },
    { MiF: 1, PS: 2, FP: 3 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, ML: 2.5 },
    { LF: 2.75, MaF: 0.25, PS: 0.25, FP: 2.75 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, PS: 0.5 },
    { MaF: 1, FP: 3 },
    { LF: 1, MiF: 1, PS: 2, ML: 2 },
    { LF: 3, PS: 1, FP: 2 },
    { LF: 2, MaF: 2, MiF: 1, FP: 1 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 3.5, MaF: 0.5 },
    { LF: 1, MiF: 1, FP: 2, ML: 2 },
    { MaF: 2.75, MiF: 0.25, FP: 0.25, ML: 2.75 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, ML: 1.5 },
    { LF: 1, MiF: 1, FP: 2, ML: 2 },
    { MaF: 1, FP: 3 },
    { LF: 2.5, MaF: 0.5, MiF: 2.5, ML: 0.5 },
    { LF: 2, MaF: 2, FP: 1, ML: 1 }
  ],

  match: [
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["3-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["FP", "MaF"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "MaF"],
      sets: ["7-6", "6-1"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "PS"],
      sets: ["6-1", "6-2", "4-2"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["MiF", "PS"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-2", "7-6"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "MiF"],
      sets: ["6-2", "6-4", "2-5"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["LF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["4-2"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["4-6", "6-4", "1-0"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "4-6", "2-0"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-4", "6-1", "6-2"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-0", "4-6", "6-4"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["6-3", "6-3", "4-2"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["5-7", "6-3"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-3", "6-0", "5-7"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-3", "6-2"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["ML", "MaF"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["ML", "FP"],
      sets: ["6-3", "5-7", "3-0"]
    }
  ]
},
"2012-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 2, MaF: 1, MiF: 2, FP: 1 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 0.75, MaF: 0.75, PS: 2.25, FP: 2.25 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 1, MaF: 2, PS: 1, FP: 2 },
    { LF: 3.25, MaF: 0.75 },
    { MaF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, ML: 0.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { LF: 3, PS: 1 },
    { LF: 1.75, MiF: 1, PS: 3.25 },
    { LF: 3, PS: 1 },
    { LF: 2.25, MaF: 0.75, MiF: 2.25, FP: 0.75 },
    { MaF: 2, MiF: 1, PS: 1, FP: 2 },
    { MaF: 2.5, MiF: 1.5 },
    { LF: 2, MaF: 1, MiF: 2, FP: 1 },
    { LF: 0.5, MaF: 2, FP: 3.5 },
    { MaF: 2.5, PS: 0.75, FP: 2.75 },
    { LF: 2.5, MaF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 3, PS: 1 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, FP: 2.5 },
    { MaF: 2.5, PS: 1.5 },
    { LF: 0.75, MaF: 2.25, MiF: 0.75, PS: 2.25 },
    { LF: 1.5, MiF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 1, MaF: 2, MiF: 1, FP: 2 }
  ],

  match: [
    {
      teamA: ["MiF", "LF"],
      teamB: ["FP", "MaF"],
      sets: ["6-3", "1-6", "2-1"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "PS"],
      sets: ["6-3", "6-4"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["MaF", "LF"],
      sets: ["6-1", "6-3", "1-4"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["MaF", "LF"],
      sets: ["6-3", "5-6"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["3-6", "6-3", "6-3"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "LF"],
      sets: ["6-3", "6-6"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-0", "6-3", "3-3"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["MaF", "PS"],
      sets: ["7-5", "6-3"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-2", "5-5"]
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["PS", "MaF"],
      sets: ["6-3", "4-5"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-4"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["MiF", "ML"],
      sets: ["6-2", "5-4"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-4", "6-5"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "6-4"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["PS"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "6-2"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["MaF", "FP"],
      sets: ["6-0", "6-1", "1-6"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["3-6", "6-1", "4-3"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-1", "1-6", "6-0"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["MaF", "FP"],
      sets: ["6-4", "5-5"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MaF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MaF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["0-0"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["MaF", "FP"],
      sets: ["6-3", "5-4"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "6-1"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MaF", "PS"],
      sets: ["6-2", "7-5"]
    },
    {
      teamA: ["MaF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "4-6", "3-1"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-3", "6-4", "2-3"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["PS", "FP"],
      sets: ["3-6", "7-6"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-7", "6-0", "4-1"]
    }
  ]
},
"2012-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { MaF: 1, MiF: 1, PS: 2, FP: 2 },
    { LF: 2.75, MaF: 0.25, PS: 2.75, FP: 0.25 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, PS: 0.5 },
    { LF: 2.5, PS: 2.5, FP: 0.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, FP: 1.5 },
    { MaF: 1.5, MiF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 1, MaF: 2, MiF: 1, FP: 2 },
    { LF: 2, MaF: 1, MiF: 2, PS: 1 },
    { LF: 1, MaF: 2, MiF: 1, PS: 2 },
    { LF: 0.5, PS: 0.5, FP: 2.5, ML: 2.5 },
    { FP: 3, ML: 1 },
    { LF: 3, PS: 1 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, ML: 2.75 },
    { LF: 0.5, MiF: 2, ML: 3.5 },
    { FP: 3, ML: 1 },
    { LF: 2.5, ML: 1.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, ML: 1.5 },
    { LF: 0.75, FP: 3.25 },
    { LF: 2, PS: 1, FP: 1, ML: 2 },
    { MaF: 0.25, PS: 2.75, FP: 0.25, ML: 2.75 },
    { MaF: 2.75, MiF: 0.25, PS: 0.25, ML: 2.75 }
  ],

  match: [
    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-0", "1-6", "6-3"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["FP", "MaF"],
      sets: ["6-2", "7-5", "6-0"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-4", "6-3"]
    },

    // Giornata 4: presenza del giocatore esterno X
    {
      teamA: ["PS", "LF"],
      teamB: ["FP", "X"],
      sets: ["6-2", "7-5"]
    },

    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["7-5", "4-5"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "PS"],
      sets: ["4-6", "6-4"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-0", "6-7", "6-1"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["7-5", "5-5"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["4-6", "6-2", "2-0"]
    },
    {
      teamA: ["FP", "ML"],
      teamB: ["PS", "LF"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["6-3", "6-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["PS", "ML"],
      teamB: ["MiF", "MaF"],
      sets: ["6-4", "6-2", "5-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["4-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["LF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["6-4", "3-6", "4-1"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-7", "5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["7-6", "4-0"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["PS", "FP"],
      sets: ["6-2", "3-6", "5-2"]
    },
    {
      teamA: ["PS", "ML"],
      teamB: ["MaF", "FP"],
      sets: ["6-3", "6-4", "5-4"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["MiF", "PS"],
      sets: ["6-4", "6-1", "4-1"]
    }
  ]
},
"2013-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 1.5, MaF: 1.5, MiF: 1.5, FP: 1.5 },
    { MiF: 0.75, FP: 1.75, ML: 3.5 },
    { MaF: 2, PS: 1, FP: 2, ML: 1 },
    { MaF: 1, MiF: 2, PS: 1, ML: 2 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { FP: 0.5, ML: 3.5 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, ML: 2.75 },
    { LF: 1, MaF: 2, MiF: 1, FP: 2 },
    { LF: 2.5, MaF: 0.5, FP: 2.5, ML: 0.5 },
    { MaF: 1.5, MiF: 1.5, FP: 1.5, ML: 1.5 },
    { MaF: 0.75, MiF: 2.25, FP: 0.75, ML: 2.25 },
    { FP: 1, ML: 3 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, ML: 2.5 },
    { PS: 1, FP: 2, ML: 3 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, ML: 0.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5 },
    { MaF: 3, MiF: 1 },
    { LF: 2.5, PS: 0.5, FP: 2.5, ML: 0.5 },
    { MaF: 0.75, PS: 2.25, FP: 0.75, ML: 2.25 },
    { MaF: 1.5, MiF: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { LF: 0.5, PS: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 2, MaF: 2, MiF: 1, FP: 1 },
    { PS: 2.25, FP: 2, ML: 1.75 },
    { LF: 0.25, MaF: 0.25, MiF: 2.75, ML: 2.75 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { MaF: 0.25, MiF: 2.75, PS: 0.25, ML: 2.75 }
  ],

  match: [
    {
      teamA: ["MaF", "FP"],
      teamB: ["MiF", "LF"],
      sets: ["7-5", "5-6"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2"]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["ML", "PS"],
      sets: ["2-6", "6-2", "6-5"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "PS"],
      sets: ["6-4", "5-5"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["6-1", "6-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-3", "6-4", "5-4"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-0", "6-1", "6-3"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["7-6", "3-3"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "ML"],
      sets: ["6-3", "6-4", "3-3"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "FP"],
      sets: ["6-3", "5-7"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "FP"],
      sets: ["6-3", "6-3", "1-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-1", "6-2"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["LF", "MaF"],
      sets: ["6-1", "4-6"]
    },
    {
      teamA: ["PS", "ML"],
      teamB: ["MiF", "LF"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-2"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "ML"],
      sets: ["6-2", "7-5"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "7-6"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2", "7-5"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["ML", "PS"],
      sets: ["7-6", "6-4"]
    },
    {
      teamA: ["PS", "ML"],
      teamB: ["MaF", "FP"],
      sets: ["6-3", "6-3", "4-5"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "FP"],
      sets: ["3-6", "7-6"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["LF", "MiF"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-4", "6-1"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["7-6", "1-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["2-3"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "LF"],
      sets: ["6-2", "7-5", "4-3"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["MaF", "PS"],
      sets: ["6-2", "6-1", "6-2"]
    }
  ]
},
"2013-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 1, PS: 2, FP: 1, ML: 2 },
    { LF: 1, MaF: 1, MiF: 2, FP: 2 },
    { MaF: 2.75, MiF: 0.25, PS: 0.25, ML: 2.75 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { MaF: 2, PS: 1, FP: 1, ML: 2 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, ML: 1.5 },
    { LF: 1, PS: 2, FP: 1, ML: 2 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { MaF: 2.75, MiF: 0.25, FP: 2.75, ML: 0.25 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, ML: 2.5 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 3.25, PS: 0.75 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, ML: 2.5 },
    { LF: 0.5, PS: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, ML: 1.5 },
    { MaF: 2.75, MiF: 0.25, PS: 0.25, FP: 2.75 },
    { LF: 1, MiF: 2, FP: 1, ML: 2 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, ML: 2.5 },
    { MaF: 2.5, MiF: 1, PS: 2.5 }
  ],

  match: [
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-0", "0-6", "5-1"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["6-1", "2-6", "3-1"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-1", "6-2", "6-2"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["PS", "MiF"],
      sets: ["7-5", "4-3"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "FP"],
      sets: ["3-6", "6-2"]
      // Ritiro indicato nel file dopo il secondo set
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["6-2", "2-6", "1-1"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-2", "3-6", "3-1"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "6-4"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["ML", "MiF"],
      sets: ["6-2", "6-4", "3-1"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "MaF"],
      sets: ["7-5", "3-2"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-0", "6-4"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-1", "6-2"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-2"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-3", "5-3"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["6-0", "4-6", "3-3"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-2", "3-1"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["LF", "FP"],
      sets: ["6-4", "1-6", "4-2"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "MaF"],
      sets: ["7-5", "6-4"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["PS"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["3-3"]
    }
  ]
},
"2014-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 0.75, MaF: 0.75, FP: 2.25, ML: 2.25 },
    { MaF: 2.75, MiF: 0.25, PS: 2.75, ML: 0.25 },
    { FP: 1.25, ML: 2.75 },
    { MaF: 2, PS: 2.25, FP: 1.75 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { MaF: 0.75, FP: 3.25 },
    { MaF: 1.5, MiF: 1.5, PS: 1.5, FP: 1.5 },
    { MaF: 2, FP: 3, ML: 1 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { LF: 2.75, MiF: 0.25, PS: 0.25, FP: 2.75 },
    { LF: 1.5, PS: 1.5, FP: 3 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, ML: 2.75 },
    { LF: 2.25, PS: 2.5, FP: 1.25 },
    { MaF: 2.25, MiF: 0.75, FP: 0.75, ML: 2.25 },
    { LF: 0.5, MaF: 2.5, PS: 0.5, ML: 2.5 },
    { LF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { MaF: 0.25, PS: 0.25, FP: 2.75, ML: 2.75 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, ML: 2.5 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 0.25, MaF: 0.25, PS: 2.75, ML: 2.75 },
    { MiF: 1, PS: 2, ML: 3 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, FP: 0.5 },
    { MaF: 0.75, PS: 2.25, FP: 0.75, ML: 2.25 },
    { LF: 2, MiF: 1, PS: 2, ML: 1 },
    { LF: 1, MaF: 1, MiF: 2, FP: 2 },
    { LF: 0.25, PS: 2.75, FP: 0.25, ML: 2.75 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 0.5, MaF: 0.5, MiF: 2.5, ML: 2.5 }
  ],

  match: [
    {
      teamA: ["LF", "FP"],
      teamB: ["PS", "MiF"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-4", "6-2", "1-2"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["ML", "MiF"],
      sets: ["6-3", "6-1", "1-1"]
      // Ritiro indicato nel file
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-1", "2-6", "6-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-0"]
    },
    {
      teamA: ["PS"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["6-4"]
    },
    {
      teamA: ["MaF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["5-7", "6-2"]
      // Ritiro indicato nel file
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-1", "6-3", "6-4"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["6-7", "5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["6-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["6-3"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "5-5"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["6-0", "6-3", "5-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["3-3"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-3", "6-1", "6-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["PS"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["0-0"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["MiF", "FP"],
      sets: ["6-3", "6-1", "2-5"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["LF", "PS"],
      sets: ["6-4", "6-4"]
    },
    {
      teamA: ["MiF", "FP"],
      teamB: ["LF", "PS"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["MaF", "PS"],
      sets: ["6-4", "6-3", "6-0"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["7-6", "5-2"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["6-3", "6-3"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["MaF", "LF"],
      sets: ["6-3", "6-4", "4-2"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["MiF", "FP"],
      sets: ["7-6", "6-1"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["MaF", "FP"],
      sets: ["6-0", "6-1"]
      // Nel file il terzo set è incompleto: "4-"
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "ML"],
      sets: ["6-4", "2-6", "6-1"]
    },
    {
      teamA: ["MiF", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-2", "3-6", "3-0"]
    },
    {
      teamA: ["ML", "PS"],
      teamB: ["FP", "LF"],
      sets: ["6-3", "6-3", "4-3"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["MiF", "ML"],
      teamB: ["LF", "MaF"],
      sets: ["7-6", "4-2"]
    }
  ]
},
"2014-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 0.5, PS: 2.5, FP: 0.5, ML: 2.5 },
    { MaF: 1, MiF: 2, PS: 1, ML: 2 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, FP: 2.75 },
    { LF: 0.75, PS: 2.25, FP: 2.25, ML: 0.75 },
    { MaF: 2, MiF: 1, PS: 1, ML: 2 },
    { LF: 1, PS: 2, ML: 3 },
    { MaF: 2 },
    { LF: 1.5, MiF: 1.5, PS: 1.5, FP: 1.5 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 2.5, MaF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 2.75, MiF: 0.25, PS: 0.25, ML: 2.75 },
    { LF: 1.75, MaF: 0.75, FP: 3.5 },
    { LF: 2.25, PS: 0.75, ML: 3 },
    { LF: 2, MaF: 1, PS: 1, FP: 2 },
    { MiF: 0.75, ML: 3.25 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { MaF: 1.5, MiF: 1.5, PS: 1.5, ML: 1.5 },
    { MiF: 2, PS: 1, FP: 1, ML: 2 },
    { LF: 2, MaF: 1, MiF: 2, FP: 1 }
  ],

  match: [
    {
      teamA: ["ML", "PS"],
      teamB: ["LF", "FP"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["5-7", "6-4", "3-0"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-4", "4-2"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["ML", "LF"],
      sets: ["6-3", "6-1", "3-4"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["4-6", "6-3", "4-2"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["PS"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    // Giornata 7: Lodo Daniela applicato a MaF.
    // Nessun match registrato.

    {
      teamA: ["MiF", "FP"],
      teamB: ["PS", "LF"],
      sets: ["6-4", "4-6"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["FP", "MaF"],
      sets: ["6-2", "7-6"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MaF"],
      sets: ["7-6", "4-3"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["MiF", "PS"],
      sets: ["6-3", "6-1", "6-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["PS", "MaF"],
      sets: [
        "6-3",
        "4-6",
        { score: "10-4", tiebreak: true }
      ]
    },
    {
      teamA: ["ML"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-1", "6-3", "6-1"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["MaF", "LF"],
      sets: ["6-0", "5-7"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["7-5", "4-6"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "FP"],
      sets: ["7-6", "3-3"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["MaF", "FP"],
      sets: ["6-1", "1-6", "3-1"]
    }
  ]
},
"2015-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 0.25, MiF: 0.25, PS: 2.75, FP: 2.75 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, ML: 2.5 },
    { MaF: 2, MiF: 1, FP: 1, ML: 2 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, PS: 0.5 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, ML: 2.5 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, FP: 2.5 },
    { MaF: 2, MiF: 1, FP: 2, ML: 1 },
    { LF: 1, PS: 1, FP: 2, ML: 2 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, ML: 2.5 },
    { LF: 2, PS: 2 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, ML: 0.5 },
    { MaF: 2, MiF: 1, FP: 3 },
    { PS: 2, FP: 2 },
    { LF: 0.75, MaF: 3, MiF: 2.25 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { LF: 2, PS: 2 },
    { MaF: 3, MiF: 1 },
    { LF: 1.5, FP: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 2, MaF: 1, MiF: 1, PS: 2 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, PS: 2.75 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { LF: 2.75, MaF: 0.25, PS: 0.25, FP: 2.75 },
    { MaF: 0.25, PS: 0.25, FP: 2.75, ML: 2.75 },
    { LF: 1.5, MiF: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 2.5, MiF: 0.5, PS: 2.5, FP: 0.5 },
    { LF: 1, MaF: 2, MiF: 1, FP: 2 }
  ],

  match: [
    {
      teamA: ["FP", "PS"],
      teamB: ["LF", "MiF"],
      sets: ["7-5", "6-1", "6-0"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "6-3", "4-4"]
    },
    {
      teamA: ["MaF", "ML"],
      teamB: ["FP", "MiF"],
      sets: ["2-6", "6-4", "2-1"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["PS", "MiF"],
      sets: ["7-6", "3-0"]
    },
    {
      // Il primo set è riportato come 7-3 nel file originale.
      teamA: ["ML", "PS"],
      teamB: ["LF", "MiF"],
      sets: ["7-3", "6-2", "3-3"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["LF", "MaF"],
      sets: ["7-5", "4-3"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["ML", "MiF"],
      sets: ["4-6", "6-2", "6-2"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "PS"],
      sets: ["6-2", "3-6", "3-2"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "7-5"]
    },
    {
      teamA: ["PS"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-1", "3-6", "1-1"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["ML", "MiF"],
      sets: ["6-4", "6-3"]
    },

    // Triangolare MaF / MiF / FP.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-1", "3-6"]
    },

    // Triangolare MaF / MiF / LF.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "MaF"],
      sets: ["7-5", "2-4"]
    },

    // Giornata 16: LF-PS, anziché LF-FP.
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "2-3"]
    },

    // Giornata 17: ritiro MaF-MiF.
    // Punti mantenuti in giornate, match non registrato.

    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["7-5", "4-2"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "5-5"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-3", "6-1", "4-3"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-2", "5-2"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["6-2", "6-4"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-3", "5-3"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "PS"],
      sets: ["6-4", "6-2", "4-3"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["MaF", "PS"],
      sets: ["6-3", "7-5", "3-1"]
    },
    {
      teamA: ["LF", "ML"],
      teamB: ["FP", "MiF"],
      sets: ["2-6", "7-6"]
    },
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "FP"],
      sets: ["6-2", "6-4"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["MiF", "LF"],
      sets: ["6-3", "5-7", "1-0"]
    }
  ]
},
"2015-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { MaF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { PS: 1, FP: 3 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 },
    { MiF: 1, FP: 3 },
    { LF: 2, ML: 2 },
    { MaF: 1, PS: 2, FP: 3 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5 },
    { LF: 0.5, MiF: 0.5, FP: 2.5, ML: 2.5 },
    { MaF: 2, MiF: 1, PS: 1, FP: 2 },
    { LF: 2.75, MaF: 2.75, MiF: 0.25, ML: 0.25 },
    { LF: 2, MaF: 1.5, FP: 2.5 },
    { LF: 1, MaF: 1, MiF: 2, FP: 2 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5 },
    { LF: 1.5, PS: 1.5, FP: 3 },
    { LF: 2 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 },
    { MaF: 0.25, PS: 0.25, FP: 2.75, ML: 2.75 },
    { LF: 0.5, MaF: 0.5, FP: 2.5, ML: 2.5 },
    { LF: 2.75, MiF: 0.25, PS: 0.25, ML: 2.75 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, PS: 2.5 }
  ],

  match: [
    {
      teamA: ["FP", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-3", "6-1", "4-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "5-4"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["7-5", "3-5"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-0", "6-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["3-3"]
    },

    // Giornata 6: triangolare FP / PS / MaF.
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["PS"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-3", "6-4"]
    },
    {
      teamA: ["FP", "ML"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-3", "4-6", "4-2"]
    },

    // Giornata 10: il foglio segnala un ritiro.
    {
      teamA: ["LF", "MaF"],
      teamB: ["ML", "MiF"],
      sets: ["6-1", "7-5"]
    },

    // Giornata 11: triangolare FP / LF / MaF.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["0-0"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["3-6", "6-3", "2-1"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-3", "6-0", "4-4"]
    },

    // Giornata 14: triangolare FP / LF / PS.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["PS"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["0-0"]
    },

    // Giornata 15: nessun match registrato.

    {
      teamA: ["PS", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["FP", "ML"],
      teamB: ["PS", "MaF"],
      sets: ["6-0", "6-4", "6-3"]
    },
    {
      teamA: ["FP", "ML"],
      teamB: ["LF", "MaF"],
      sets: ["7-5", "6-1"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-2", "6-0"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "4-3"]
    }
  ]
},
"2016-inverno": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 1, MaF: 2, MiF: 1, ML: 2 },
    { MiF: 0.5, PS: 2.5, FP: 0.5, ML: 2.5 },
    { LF: 1, MaF: 1, PS: 2, FP: 2 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { MaF: 2.25, MiF: 0.75, PS: 0.75, ML: 2.25 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { MiF: 1, PS: 2, FP: 2, ML: 1 },
    { MaF: 2.5, MiF: 1, PS: 2.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, ML: 2.5 },
    { LF: 1.25, ML: 2.75 },
    { LF: 1.75, MaF: 3.25, MiF: 1 },
    { MaF: 2, PS: 1, FP: 2, ML: 1 },
    { LF: 0.25, PS: 0.25, FP: 2.75, ML: 2.75 },
    { LF: 2.25, MaF: 0.75, MiF: 0.75, FP: 2.25 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, FP: 2.5 },
    { MaF: 0.75, MiF: 2.25, PS: 0.75, ML: 2.25 },
    { LF: 1.5, MiF: 1.5, FP: 1.5, ML: 1.5 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, FP: 2.5 },
    { MaF: 1.5, MiF: 1.5, PS: 1.5, ML: 1.5 },
    { LF: 2.75, MiF: 0.25, FP: 0.25, ML: 2.75 },
    { LF: 2, MiF: 1, FP: 2, ML: 1 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, FP: 1.5 },
    { LF: 1, MaF: 2, FP: 2, ML: 1 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, ML: 0.5 },
    { LF: 0.25, PS: 0.25, FP: 2.75, ML: 2.75 },
    { LF: 2, PS: 1, FP: 1, ML: 2 },
    { LF: 1, FP: 2, ML: 3 }
  ],

  match: [
    {
      teamA: ["ML", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["2-6", "6-2", "2-1"]
    },

    // Giornata 2: incontro terminato per ritiro.
    {
      teamA: ["ML", "PS"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "0-1"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["2-6", "6-2", "3-1"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-0", "6-3"]
    },
    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-3", "6-4", "0-3"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-4", "3-6"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["ML", "MiF"],
      sets: ["6-4", "5-7", "2-0"]
    },

    // Giornata 8: triangolare MaF / MiF / PS.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-5"]
    },
    {
      teamA: ["PS"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["PS"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["2-2"]
    },

    {
      teamA: ["ML", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["7-5", "6-4"]
    },

    // Giornata 10: risultato con ritiro riportato nel file.
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-1", "7-5"]
    },

    // Giornata 11: triangolare MaF / MiF / LF.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["2-0"]
    },

    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "ML"],
      sets: ["4-6", "6-1", "4-2"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["PS", "LF"],
      sets: ["6-0", "6-1", "6-3"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-3", "3-4"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-1", "6-4", "4-5"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["ML", "MiF"],
      sets: ["1-6", "7-5"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "4-6", "2-2"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "6-4", "2-1"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["ML", "MiF"],
      sets: ["6-0", "4-6", "5-2"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["6-0", "4-6"]
    },

    // Giornata 23: ritiro segnalato nel risultato.
    {
      teamA: ["FP", "MaF"],
      teamB: ["LF", "ML"],
      sets: ["0-6", "7-5", "3-2"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["ML", "MiF"],
      sets: ["6-2", "7-6"]
    },
    {
      teamA: ["ML", "FP"],
      teamB: ["PS", "LF"],
      sets: ["6-3", "6-2", "6-0"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["FP", "PS"],
      sets: ["6-3", "2-6", "5-3"]
    },

    // Giornata 27: triangolare FP / LF / ML.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-4"]
    }
  ]
},
"2016-estate": {
  teams: ["LF", "ML", "FP", "MaF", "MiF", "PS"],

  giornate: [
    { LF: 2 },
    { LF: 0.5, MaF: 0.5, MiF: 2.5, FP: 2.5 },
    { MaF: 0.75, FP: 1.75, ML: 3.5 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, ML: 2.75 },
    { LF: 2, MaF: 1, MiF: 2, PS: 1 },
    { MiF: 1, PS: 2, FP: 1, ML: 2 },
    { LF: 0.5, MaF: 0.5, PS: 2.5, FP: 2.5 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, ML: 2.75 },
    { LF: 1.75, PS: 1, FP: 3.25 },
    { MaF: 2.75, MiF: 0.25, PS: 0.25, ML: 2.75 },
    { LF: 0.75, FP: 3.25 },
    { LF: 2.25, FP: 3, ML: 0.75 },
    { MaF: 2, MiF: 1, FP: 1, ML: 2 },
    { LF: 2, MiF: 2.25, ML: 1.75 },
    { LF: 1, ML: 3 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, FP: 2.75 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5 },
    { MaF: 0.25, MiF: 2.75, PS: 0.25, ML: 2.75 },
    { LF: 2, MaF: 1, FP: 3 },
    { LF: 2, MiF: 2, PS: 1, ML: 1 }
  ],

  match: [
    // Giornata 1: LF-Daniela, senza risultato.
    // Non registrato come match per assenza del punteggio.

    {
      teamA: ["FP", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["6-3", "6-3"]
    },

    // Giornata 3: triangolare FP / MaF / ML.
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    {
      teamA: ["ML", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["7-5", "6-3", "6-0"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "2-6", { score: "10-6", tiebreak: true }]
    },
    {
      teamA: ["PS", "ML"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "4-6", { score: "10-5", tiebreak: true }]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-1", "7-6"]
    },
    {
      teamA: ["ML", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-0", "6-3", "6-2"]
    },

    // Giornata 9: triangolare FP / LF / PS.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    {
      teamA: ["ML", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-1", "6-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-1", "6-1", "6-1"]
    },

    // Giornata 12: triangolare FP / ML / LF.
    {
      teamA: ["FP"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["ML", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "4-6", { score: "11-9", tiebreak: true }]
    },

    // Giornata 14: triangolare LF / MiF / ML.
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MiF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-0"]
    },

    {
      teamA: ["ML"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-1", "6-3", "5-5"]
    },

    // Giornate 16 e 17 del calendario: nessun incontro.

    {
      teamA: ["PS", "FP"],
      teamB: ["MaF", "MiF"],
      sets: ["6-2", "6-3", "5-3"]
    },

    // Giornata 19: corretto MiF in MaF.
    {
      teamA: ["PS", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-2", "4-6"]
    },

    {
      teamA: ["ML", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-3", "6-4", "5-3"]
    },

    // Giornata 21: triangolare LF / MaF / FP.
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["LF", "MiF"],
      teamB: ["PS", "ML"],
      sets: ["6-3", "4-6", "3-1"]
    }
  ]
},
"2017-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB"],

  giornate: [
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 2, MaF: 1, FP: 3 },
    { LF: 2 },
    { LF: 1, MaF: 2, PS: 1, FP: 2 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, FP: 0.5 },
    { MaF: 1.5, FP: 2.5 },
    { LF: 1, MiF: 2, PS: 1, FP: 2 },
    { LF: 2, MaF: 1, MiF: 2, PS: 1 },
    { MaF: 2.5, PS: 2.5, FP: 0.5, LB: 0.5 },
    { MaF: 3.25, MiF: 0.75 },
    { LF: 2, MiF: 1, PS: 1, LB: 2 },
    { LF: 2, MaF: 1, PS: 1, LB: 2 },
    { LF: 1, MaF: 2, MiF: 2, LB: 1 },
    { LF: 1.25, MaF: 1.25, FP: 3.5 },
    { LF: 0.75, MaF: 2.25, MiF: 0.75, FP: 2.25 },
    { LF: 2, MaF: 1, MiF: 1, FP: 2 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, FP: 2.75 },
    { LF: 2, MiF: 1, FP: 3 },
    { LF: 2.75, MaF: 1.25 },
    { LF: 1, MaF: 2, PS: 1, FP: 2 },
    { LF: 2.25, MaF: 2.25, MiF: 0.75, FP: 0.75 },
    { LF: 0.5, MaF: 2, FP: 3.5 },
    { LF: 2.25, MaF: 2.25, MiF: 0.75, FP: 0.75 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, FP: 2.5 },
    { LF: 1.75, MiF: 0.75, LB: 3.5 }
  ],

  match: [
    {
      teamA: ["LF", "PS"],
      teamB: ["MaF", "MiF"],
      sets: ["6-2", "6-2", "5-5"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "MiF"],
      sets: ["6-3", "6-1", "6-1"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["PS", "MiF"],
      sets: ["6-1", "7-5"]
    },

    // Giornata 4: triangolare LF / MaF / FP.
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },

    // Giornata 5: LF riceve 2 punti, nessun risultato registrato.

    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "LF"],
      sets: ["4-6", "6-2", "6-0"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-4", "3-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["2-6", "6-0", "6-4"]
    },
    {
      teamA: ["MiF", "FP"],
      teamB: ["LF", "PS"],
      sets: ["6-2", "1-6", "4-2"]
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["MaF", "PS"],
      sets: ["6-1", "5-7", "3-1"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["FP", "LB"],
      sets: ["7-5", "6-4"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2", "6-4", "3-1"]
    },

    // Giornate 13 e 14: nessun incontro.

    // Giornata 15: il file riporta "7-5 T.B.".
    {
      teamA: ["LF", "LB"],
      teamB: ["PS", "MiF"],
      sets: ["6-1", "5-7", "7-5"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "4-4"]
    },

    // Giornata 17: ritiro della coppia LF-LB.
    {
      teamA: ["MaF", "MiF"],
      teamB: ["LF", "LB"],
      sets: ["4-6"],
      ritiro: "B"
    },

    // Giornata 18: triangolare FP / MaF / LF.
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["3-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["0-0"]
    },

    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-2", "6-4", "1-6"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "MiF"],
      sets: ["6-0", "4-6", "6-1"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-1", "4-3"]
    },

    // Giornata 22: triangolare FP / MiF / LF.
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["3-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-3", "5-5"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "PS"],
      sets: ["3-6", "6-2", "3-0"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-3", "1-3"]
    },

    // Giornata 26: triangolare FP / MaF / LF.
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "FP"],
      sets: ["6-2", "6-2", "3-4"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MaF", "MiF"],
      sets: ["6-2", "6-2", "3-3"]
    },

    // Giornata 29: nessun incontro.

    // Giornata 30: triangolare LB / MiF / LF.
    {
      teamA: ["LB"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    }
  ]
},
"2017-estate": {
  teams: ["LF", "MaF", "MiF", "FP", "LB"],

  giornate: [
    { LF: 2.75, MaF: 0.25, MiF: 0.25, LB: 2.75 },
    { LF: 2.75, MiF: 0.25, FP: 2.75, LB: 0.25 },
    { MaF: 2, MiF: 1, FP: 1, LB: 2 },
    { LF: 2, MaF: 1, MiF: 2, LB: 1 },
    { LF: 2, MaF: 2, MiF: 1, FP: 1 },
    { LF: 1.75, MaF: 0.75, FP: 3.5 },
    { LF: 0.5, FP: 3.5 },
    { LF: 2, MiF: 1, FP: 3 },
    { MaF: 1.5, MiF: 1.5, FP: 1.5, LB: 1.5 },
    { LF: 1, MaF: 2, MiF: 1, LB: 2 },
    { LF: 3, MaF: 2, MiF: 1 },
    { LF: 1, MaF: 2, FP: 2, LB: 1 },
    { LF: 0.5, MaF: 2.5, FP: 2.5, LB: 0.5 },
    { LF: 2.5, MiF: 0.5, LB: 2.5 },
    { LF: 1, MaF: 2, MiF: 1, LB: 2 },
    { LF: 1, MaF: 2, FP: 2, LB: 1 },
    { MaF: 0.25, MiF: 2.75, FP: 2.75, LB: 0.25 },
    { LF: 2, MaF: 2, MiF: 1, FP: 1 },
    { LF: 1, FP: 3 }
  ],

  match: [
    {
      teamA: ["LB", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-2", "6-1", "4-3"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-0", "6-1", "6-1"]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["3-6", "7-5", { score: "8-6", tiebreak: true }]
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["MaF", "LB"],
      sets: ["3-6", "6-3", { score: "10-8", tiebreak: true }]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "FP"],
      sets: ["6-3", "1-6", { score: "10-8", tiebreak: true }]
    },

    // Giornata 6: triangolare FP / MaF / LF.
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-0", "7-5", "3-2"]
    },

    // Giornata 8: triangolare FP / MiF / LF.
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["MiF", "FP"],
      teamB: ["MaF", "LB"],
      sets: ["6-4", "3-4"]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["MiF", "LF"],
      sets: ["6-1", "4-6", { score: "11-9", tiebreak: true }]
    },

    // Giornata 11: triangolare MaF / MiF / LF.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["4-2"]
    },

    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "LB"],
      sets: ["6-3", "3-6", { score: "10-8", tiebreak: true }]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "LB"],
      sets: ["7-5", "5-4"]
    },

    // Giornata 14: ML partecipa come ospite.
    {
      teamA: ["LB", "LF"],
      teamB: ["ML", "MiF"],
      sets: ["6-3", "6-2", "3-3"]
    },

    // Giornate 15, 16 e 17: nessun incontro.

    {
      teamA: ["MaF", "LB"],
      teamB: ["MiF", "LF"],
      sets: ["1-6", "6-2", "6-0"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "LB"],
      sets: ["6-3", "2-6", "6-2"]
    },
    {
      teamA: ["MiF", "FP"],
      teamB: ["MaF", "LB"],
      sets: ["6-4", "6-2", "6-3"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["MiF", "FP"],
      sets: ["6-2", "3-6", "3-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-0", "7-5"]
    }
  ]
},
"2018-inverno": {
  teams: ["LF", "MaF", "MiF", "FP", "LB"],

  giornate: [
    { LF: 1.5, MaF: 1.5, MiF: 1.5, LB: 1.5 },
    { MaF: 2.5, MiF: 0.5, FP: 2.5, LB: 0.5 },
    { LF: 1, FP: 3, LB: 2 },
    { LF: 1.5, MaF: 1.5, FP: 1.5, LB: 1.5 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, LB: 2.75 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, FP: 0.5 },
    { MaF: 0.25, MiF: 0.25, FP: 2.75, LB: 2.75 },
    { LF: 0.5, MiF: 2.5, FP: 0.5, LB: 2.5 },
    { LF: 0.5, MaF: 0.5, FP: 2.5 },
    { MaF: 2.75, MiF: 0.25, FP: 2.75, LB: 0.25 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, LB: 0.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, LB: 2.5 },
    { LF: 1, MaF: 2, FP: 1, LB: 2 },
    { LF: 2, MiF: 1, FP: 3 },
    { LF: 0.75, MaF: 2.25, FP: 3 },
    { MaF: 0.5, MiF: 2.25, LB: 3.25 },
    { LF: 0.5, FP: 2.5, LB: 0.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, LB: 0.5 },
    { LF: 1, LB: 3 },
    { LF: 1, MaF: 1, MiF: 2, LB: 2 },
    { LF: 2.75, MaF: 2.75, MiF: 0.25, FP: 0.25 },
    { MaF: 2, MiF: 1, FP: 2, LB: 1 },
    { LF: 0.25, MiF: 0.25, FP: 2.75 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 1.5, MaF: 1.5, FP: 1.5, LB: 1.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, LB: 1.5 },
    { LF: 2, MiF: 1, FP: 3 },
    { LF: 1, FP: 3, LB: 2 }
  ],

  match: [
    {
      teamA: ["MaF", "LB"],
      teamB: ["LF", "MiF"],
      sets: ["6-2", "4-6"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LB", "MiF"],
      sets: ["6-2", "7-6"]
    },

    // Giornata 3: triangolare FP / LF / LB.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["FP"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["3-1"]
    },

    {
      teamA: ["MaF", "LB"],
      teamB: ["LF", "FP"],
      sets: ["3-6", "6-4"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MaF", "MiF"],
      sets: ["6-2", "6-3", "6-2"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["6-5", "4-2"]
    },
    {
      teamA: ["FP", "LB"],
      teamB: ["MaF", "MiF"],
      sets: ["7-6", "6-0", "5-0"]
    },
    {
      teamA: ["MiF", "LB"],
      teamB: ["LF", "FP"],
      sets: ["7-5", "4-3"]
    },

    // Giornata 9: ML partecipa come ospite.
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-3", "6-1", "4-4"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "6-0", "4-3"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "6-2", "2-2"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MaF", "MiF"],
      sets: ["6-4", "6-4"]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["LF", "FP"],
      sets: ["3-6", "7-6", { score: "10-5", tiebreak: true }]
    },

    // Giornata 14: triangolare LF / MiF / FP.
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-3"]
    },

    // Giornata 15: triangolare MaF / LF / FP.
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    // Giornata 16: triangolare MiF / MaF / LB.
    {
      teamA: ["MiF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LB"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LB"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },

    // Giornata 17: ML partecipa come ospite.
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "LB"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "6-4", "2-2"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-3", "6-0"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["MaF", "LF"],
      sets: ["7-5", "3-3"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "6-3", "6-2"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LB", "MiF"],
      sets: ["7-5", "6-6"]
    },

    // Giornata 23: ML partecipa come ospite.
    {
      teamA: ["ML", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-2", "6-2", "6-2"]
    },
    {
      teamA: ["LB", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["6-2", "5-4"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["LB", "MaF"],
      sets: ["6-1", "5-7"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "2-6", "2-2"]
    },

    // Penultima giornata: triangolare LF / MiF / FP.
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    // Ultima giornata: triangolare FP / LF / LB.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-2"]
    }
  ]
},
"2018-estate": {
  teams: ["LF", "MaF", "MiF", "FP", "LB"],

  giornate: [
    { MaF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, LB: 1.5 },
    { MiF: 1.6, FP: 1.85, LB: 1.35 },
    { LF: 1.85, MaF: 2.65, MiF: 0.3 },
    { LF: 0.5, MaF: 0.5, FP: 2.5, LB: 2.5 },
    { MaF: 1, MiF: 2, FP: 1, LB: 2 },
    { LF: 0.55, MiF: 1.35, FP: 2.9 },
    { LF: 1.5, MaF: 1.5, FP: 1.5, LB: 1.5 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, LB: 0.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, LB: 0.5 },
    { LF: 0.25, MaF: 2.75, FP: 0.25, LB: 2.75 },
    { LF: 0.5, MaF: 0.5, MiF: 2.5, LB: 2.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, LB: 1.5 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, LB: 2.5 },
    { LF: 0.25, MiF: 0.25, FP: 2.75, LB: 2.75 },
    { LF: 2, MaF: 2, MiF: 1, LB: 1 },
    { FP: 1, LB: 3 }
  ],

  match: [
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "6-4", "2-2"]
    },
    {
      teamA: ["LB", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["6-4", "5-3"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "1-6", "2-2"]
    },

    // Giornata 4: triangolare MiF / LB / FP.
    {
      teamA: ["MiF"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    // Giornata 5: triangolare LF / MiF / MaF.
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["LB", "FP"],
      teamB: ["LF", "MaF"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["FP", "MaF"],
      sets: ["1-6", "6-3", "4-2"]
    },

    // Giornata 8: triangolare FP / MiF / LF.
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    {
      teamA: ["MaF", "FP"],
      teamB: ["LF", "LB"],
      sets: ["6-4", "2-6"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-2", "6-4"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "LF"],
      sets: ["6-2", "6-2", "4-2"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["MaF", "LF"],
      sets: ["6-3", "6-1", "2-2"]
    },

    // Giornate 14, 15 e 16: nessun incontro.

    {
      teamA: ["LB", "MiF"],
      teamB: ["MaF", "LF"],
      sets: ["3-6", "6-4"]
    },

    // Giornata 18: ritiro della coppia MaF-FP.
    {
      teamA: ["LB", "MiF"],
      teamB: ["MaF", "FP"],
      sets: ["1-3"],
      ritiro: "B"
    },
    {
      teamA: ["LB", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-1", "6-0", "6-0"]
    },
    {
      teamA: ["MaF", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "4-4"]
    },
    {
      teamA: ["LB"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["7-5", "6-3"]
    }
  ]
},
"2019-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB"],

  giornate: [
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 },
    { MaF: 2, PS: 1, FP: 2, LB: 1 },
    { LF: 0.25, MiF: 0.25, FP: 2.75, LB: 2.75 },
    { LF: 0.5, MaF: 2.5, MiF: 2.5, PS: 0.5 },
    { MaF: 0.25, PS: 0.25, FP: 2.75, LB: 2.75 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 2.75, MaF: 2.75, MiF: 0.25, LB: 0.25 },
    { MaF: 0.5, PS: 2.5, FP: 2.5, LB: 0.5 },
    { LF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 1, MaF: 2, MiF: 1, LB: 2 },
    { LF: 2.5, PS: 0.5, FP: 0.5, LB: 2.5 },
    { MaF: 2.5, MiF: 2.5, PS: 0.5, LB: 0.5 },
    { LF: 2.5, PS: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 1.6, MiF: 0.8, FP: 2.4 },
    { LF: 2, LB: 2 },
    { LF: 1.5, MiF: 1.5, PS: 1.5, LB: 1.5 },
    { LF: 0.5, PS: 0.5, FP: 2.5, LB: 2.5 },
    { LF: 0.55, MiF: 1.85, LB: 2.4 },
    { MiF: 2.5, PS: 0.5, FP: 2.5, LB: 0.5 },
    { LF: 1.6, PS: 0.8, FP: 2.4 },
    { LF: 2, MiF: 1, FP: 1, LB: 2 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 2.5, LB: 0.5 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, LB: 2.75 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, FP: 2.75 },
    { LF: 0.25, MaF: 2.75, FP: 0.25, LB: 2.75 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, LB: 2.5 }
  ],

  match: [
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["6-4", "0-6", "3-3"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LB", "PS"],
      sets: ["4-6", "6-3", "3-2"]
    },
    {
      teamA: ["LB", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-0", "4-1"]
    },
    {
      teamA: ["MaF", "MiF"],
      teamB: ["PS", "LF"],
      sets: ["6-2", "6-4"]
    },
    {
      teamA: ["LB", "FP"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "6-4", "6-0"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-1"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["6-4", "6-1", "4-2"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["LB", "MaF"],
      sets: ["7-5", "6-5"]
    },
    {
      teamA: ["MiF", "FP"],
      teamB: ["LF", "PS"],
      sets: ["6-4", "6-0"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["2-6", "6-0", "4-0"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["PS", "FP"],
      sets: ["6-1", "6-4"]
    },
    {
      teamA: ["MaF", "MiF"],
      teamB: ["PS", "LB"],
      sets: ["7-5", "5-4"]
    },

    // Giornate 13 e 14: nessun incontro.

    {
      teamA: ["LF", "LB"],
      teamB: ["PS", "FP"],
      sets: ["6-4", "6-1"]
    },

    // Giornata 16: triangolare FP / MiF / LF.
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["3-2"]
    },

    {
      teamA: ["LF"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["6-2", "4-6"]
    },
    {
      teamA: ["PS", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["6-4", "4-6"]
    },
    {
      teamA: ["FP", "LB"],
      teamB: ["PS", "LF"],
      sets: ["7-5", "2-0"]
    },

    // Giornata 20: triangolare LB / MiF / LF.
    {
      teamA: ["LB"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    {
      teamA: ["MiF", "FP"],
      teamB: ["LB", "PS"],
      sets: ["6-4", "6-5"]
    },

    // Giornata 22: triangolare FP / LF / PS.
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["2-6", "6-1", "4-2"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["LF", "FP"],
      teamB: ["MiF", "LB"],
      sets: ["6-0", "6-3", "3-3"]
    },
    {
      teamA: ["LB", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "7-5", "3-1"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-2", "6-2", "4-3"]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["LF", "FP"],
      sets: ["6-1", "6-3", "4-1"]
    },

    // Giornata 30: nessun incontro.

    {
      teamA: ["PS", "LB"],
      teamB: ["LF", "MiF"],
      sets: ["6-4", "6-4"]
    }
  ]
},
"2019-estate": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB"],

  giornate: [
    { MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5 },
    { LF: 1, MaF: 2, FP: 1, LB: 2 },
    { LF: 2.75, MiF: 0.25, PS: 0.25, LB: 2.75 },
    { MaF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 0.8, FP: 2.4, LB: 1.6 },
    { MaF: 2.5, MiF: 0.5, FP: 2.5, LB: 0.5 },
    { LF: 1, MaF: 2, MiF: 1, PS: 2 },
    { LF: 1.5, PS: 1.5, FP: 1.5, LB: 1.5 },
    { MaF: 0.25, MiF: 2.75, FP: 2.75, LB: 0.25 },
    { LF: 2, MaF: 1, MiF: 2, PS: 1 },
    { LF: 2.5, PS: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 0.5, MiF: 2.5, PS: 0.5, LB: 2.5 },
    { LF: 1.5, MaF: 1.5, FP: 1.5, LB: 1.5 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, LB: 2.75 },
    { LF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5 },
    { LF: 2.5, MaF: 0.5, FP: 0.5, LB: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5 },
    { LF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5 }
  ],

  match: [
    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["7-6", "6-2"]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["FP", "LF"],
      sets: ["6-4", "4-4"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "PS"],
      sets: ["6-3", "6-2", "4-0"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "6-3"]
    },

    // Giornata 5: triangolare LB / FP / LF.
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["3-0"]
    },

    {
      teamA: ["FP", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["7-5", "4-2"]
    },
    {
      teamA: ["MaF", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["4-6", "6-3", "5-1"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["FP", "PS"],
      sets: ["6-4", "4-5"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["LB", "MaF"],
      sets: ["6-4", "6-1", "4-3"]
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["MaF", "PS"],
      sets: ["4-6", "6-0", "6-1"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["FP", "PS"],
      sets: ["7-5", "3-1"]
    },
    {
      teamA: ["MiF", "LB"],
      teamB: ["PS", "LF"],
      sets: ["6-2", "5-4"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LB", "LF"],
      sets: ["7-6", "2-5"]
    },

    // Giornate 14, 15 e 16 del calendario: nessun incontro.

    {
      teamA: ["LB", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "6-1", "6-1"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "LF"],
      sets: ["6-4", "6-4"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["FP", "MaF"],
      sets: ["7-5", "3-2"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-3", "6-2", "3-3"]
    },

    // Giornata 21 del calendario: ML partecipa come ospite.
    // La coppia ML-PS si ritira.
    {
      teamA: ["LF", "FP"],
      teamB: ["ML", "PS"],
      sets: ["7-5", "6-1"],
      ritiro: "B"
    },
    {
      teamA: ["MiF", "LF"],
      teamB: ["MaF", "PS"],
      sets: ["3-6", "6-1", "3-3"]
    }
  ]
},
"2020-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB"],

  giornate: [
    { LF: 0.75, FP: 3.25 },
    { MaF: 0.5, MiF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, LB: 1.5 },
    { MiF: 1.5, PS: 1.5, FP: 1.5, LB: 1.5 },
    { LF: 0.5, MaF: 2.5, PS: 0.5, FP: 2.5 },
    { LF: 1, MaF: 2, MiF: 1, LB: 2 },
    { MiF: 2.75, PS: 0.25, FP: 0.25, LB: 2.75 },
    { LF: 2, MaF: 2, PS: 1, LB: 1 },
    { MaF: 2.25, MiF: 0.75, FP: 2.25, LB: 0.75 },
    { MaF: 1.35, MiF: 1.6, LB: 1.85 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, FP: 2.5 },
    { LF: 2.25, MiF: 0.75, FP: 2.25, LB: 0.75 },
    { LF: 2.5, MaF: 0.5, PS: 0.5, LB: 2.5 },
    { MaF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { MaF: 1.5, PS: 1.5, FP: 1.5, LB: 1.5 },
    { MaF: 1, MiF: 1, PS: 2, FP: 2 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, LB: 2.75 },
    { FP: 3, LB: 1 }
  ],

  match: [
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-0", "6-0", "6-2"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "6-3"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["LF", "MaF"],
      sets: ["6-4", "0-6"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["FP", "PS"],
      sets: ["6-4", "3-6"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["PS", "LF"],
      sets: ["6-3", "6-1"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["4-6", "6-0", "3-2"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["FP", "PS"],
      sets: ["6-4", "6-1", "2-0"]
    },
    {
      teamA: ["LF", "MaF"],
      teamB: ["LB", "PS"],
      sets: ["6-4", "4-4"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["6-1", "6-3", "0-3"]
    },

    // Giornata 10: triangolare MaF / MiF / LB.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-0"]
    },

    {
      teamA: ["FP", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-4", "4-3"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MiF", "LB"],
      sets: ["6-3", "6-2", "3-4"]
    },

    // Giornate 13 e 14 del calendario: nessun incontro.

    {
      teamA: ["LB", "LF"],
      teamB: ["MaF", "PS"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["6-2", "5-2"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "PS"],
      sets: ["2-6", "5-4"]
    },
    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "3-6", "4-0"]
    },
    {
      teamA: ["LB", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-4", "3-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["7-5", "5-4"]
    },

    // Giornate 19-25: nessun risultato con punteggio registrato.
    // Giornata 20: coppie FP-PS / MiF-MaF indicate senza risultato.

    // Finale 3° posto: risultato presente, senza punti assegnati.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-2", "6-1"]
    },

    // Finale 1° posto: risultato presente, senza punti assegnati.
    {
      teamA: ["LB"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["7-5", "6-4"]
    }
  ]
},
"2020-estate": {
  teams: ["MaF", "MiF", "PS", "FP", "LB"],

  giornate: [
    { PS: 1, FP: 3 },
    { MaF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, LB: 0.5 },
    { MaF: 0.25, MiF: 0.25, PS: 2.75, FP: 2.75 },
    { MaF: 2, MiF: 1, PS: 2, FP: 1 },
    { MiF: 1, FP: 3 },
    { MaF: 0.5, PS: 0.5, FP: 2.5, LB: 2.5 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, LB: 2.5 },
    { MaF: 1.35, MiF: 0.8, LB: 2.65 },
    { MiF: 2.5, PS: 0.5, FP: 2.5, LB: 0.5 },
    { MaF: 2.25, PS: 0.75, FP: 0.75, LB: 2.25 },
    { MaF: 2.25, MiF: 0.75, FP: 0.75 },
    { MaF: 0.75, MiF: 0.75, PS: 2.25, LB: 2.25 },
    { MiF: 1, PS: 2, FP: 1, LB: 2 },
    { MaF: 2.75, PS: 0.25, FP: 0.25, LB: 2.75 }
  ],

  match: [
    {
      teamA: ["FP"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["6-3", "6-0"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "6-3"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["7-5", "5-4"]
    },
    {
      teamA: ["PS", "FP"],
      teamB: ["MaF", "MiF"],
      sets: ["6-1", "6-4", "5-4"]
    },
    {
      teamA: ["PS", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "4-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-4", "6-2"]
    },
    {
      teamA: ["LB", "FP"],
      teamB: ["PS", "MaF"],
      sets: ["6-2", "7-5"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["PS", "MiF"],
      sets: ["6-2", "6-1"]
    },

    // Giornata 9: triangolare MaF / MiF / LB.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["4-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["4-1"]
    },

    {
      teamA: ["FP", "MiF"],
      teamB: ["PS", "LB"],
      sets: ["6-4", "6-4"]
    },

    // Giornate 11-13: nessun incontro.

    {
      teamA: ["LB", "MaF"],
      teamB: ["PS", "FP"],
      sets: ["6-3", "6-1", "1-4"]
    },

    // Giornata 15: BC partecipa come ospite.
    {
      teamA: ["MaF", "BC"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-3", "0-4"]
    },
    {
      teamA: ["PS", "LB"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-1", "4-6"]
    },
    {
      teamA: ["PS", "LB"],
      teamB: ["FP", "MiF"],
      sets: ["6-0", "2-6", "3-2"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["PS", "FP"],
      sets: ["6-1", "6-0", "5-2"]
    }

    // Giornate 19-22: nessun incontro.
  ]
},
"2021-all": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC"],
  giornate: [
    { MaF: 2.25, MiF: 0.75, FP: 0.75, BC: 2.25 },
    { MiF: 2, PS: 1, LB: 2, BC: 1 },
    { MaF: 2.75, PS: 0.25, FP: 2.75, LB: 0.25 },
    { MaF: 0.25, MiF: 0.25, FP: 2.75, BC: 2.75 },
    { MiF: 0.75, PS: 2.25, LB: 0.75, BC: 2.25 },
    { MaF: 0.75, MiF: 0.75, FP: 2.25, LB: 2.25 },
    { MaF: 0.75, LB: 3.25 },
    { MaF: 0.5, MiF: 2.5, FP: 2.5, BC: 0.5 },
    { LF: 1, FP: 1, LB: 2, BC: 2 },
    { LF: 0.25, MiF: 2.75, LB: 2.75, BC: 0.25 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { MaF: 1.5, FP: 1.5, LB: 1.5, BC: 1.5 },
    { LF: 2.75, MiF: 0.25, LB: 2.75, BC: 0.25 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { MaF: 0.75, FP: 0.75, LB: 2.25, BC: 2.25 },
    { LF: 2.25, MiF: 0.75, LB: 2.25, BC: 0.75 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, FP: 2.75 },
    { MaF: 1.5, FP: 1.5, LB: 1.5, BC: 1.5 },
    { LF: 0.8, MaF: 1.6, BC: 2.4 },
    { LF: 1.5, MiF: 1.5, FP: 1.5, LB: 1.5 },
    { MaF: 0.5, MiF: 2.5, LB: 2.5, BC: 0.5 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, FP: 2.75 },
    { MaF: 2, FP: 2, LB: 1, BC: 1 },
    { LF: 0.25, MiF: 2.75, LB: 2.75, BC: 0.25 }
  ],
  match: [
    {
      teamA: ["MaF", "BC"],
      teamB: ["MiF", "FP"],
      sets: ["6-2", "6-2", "1-6"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["PS", "BC"],
      sets: ["2-6", "6-4", "5-3"]
    },
    {
      teamA: ["MaF", "FP"],
      teamB: ["LB", "PS"],
      sets: ["6-3", "6-1", "6-1"]
    },
    {
      teamA: ["FP", "BC"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-2", "6-1"]
    },
    {
      teamA: ["PS", "BC"],
      teamB: ["LB", "MiF"],
      sets: ["6-3", "6-2", "1-6"]
    },
    {
      teamA: ["FP", "LB"],
      teamB: ["MiF", "MaF"],
      sets: ["6-4", "6-0", "3-5"]
    },
    {
      teamA: ["LB"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["6-0", "5-2"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["MaF", "BC"],
      sets: ["6-4", "6-4"]
    },
    {
      teamA: ["LB", "BC"],
      teamB: ["FP", "LF"],
      sets: ["6-4", "3-6", "3-0"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["BC", "LF"],
      sets: ["6-2", "6-2", {score: "10-5", tiebreak: true}]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["7-5", "6-0", "4-2"]
    },
    {
      teamA: ["LB", "BC"],
      teamB: ["FP", "MaF"],
      sets: ["7-6", "0-6"]
    },
    {
      teamA: ["LB", "LF"],
      teamB: ["BC", "MiF"],
      sets: ["6-0", "6-4", "6-1"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-3", "6-2", "5-2"]
    },
    {
      teamA: ["LB", "BC"],
      teamB: ["FP", "MaF"],
      sets: ["6-2", "6-2", "2-6"]
    },
    {
      teamA: ["LB", "LF"],
      teamB: ["BC", "MiF"],
      sets: ["6-3", "6-3", {score: "4-10", tiebreak: true}]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["MiF", "LF"],
      sets: ["6-1", "6-1", "6-1"]
    },
    {
      teamA: ["LB", "BC"],
      teamB: ["FP", "MaF"],
      sets: ["7-5", "3-5"]
    },
    // G19 - Triangolare di singoli
    {
      teamA: ["BC"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB", "LF"],
      teamB: ["FP", "MiF"],
      sets: ["6-7", "1-0"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["BC", "MaF"],
      sets: ["6-1", "6-3", "3-3"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["MaF", "MiF"],
      sets: ["6-3", "6-1", "3-1"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LB", "BC"],
      sets: ["3-6", "6-2", "4-2"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["BC", "LF"],
      sets: ["6-1", "6-3", "6-1"]
    }
  ]
},
"2022-inverno": {
  teams: ["LF", "MaF", "MiF", "FP", "LB", "BC"],

  giornate: [
    { LF: 0.5, MaF: 2.5, MiF: 2.5, FP: 0.5 },
    { MaF: 0.5, FP: 2.5, LB: 2.5, BC: 0.5 },
    { MiF: 0.55, FP: 1.35, BC: 2.9 },
    { LF: 2.75, MaF: 0.25, MiF: 0.25, BC: 2.75 },
    { LF: 0.5, MaF: 0.5, LB: 2.5, BC: 2.5 },
    { LF: 0.5, MiF: 2.5, FP: 0.5, LB: 2.5 },
    { MaF: 2.5, MiF: 0.5, FP: 0.5, BC: 2.5 },
    { LF: 0.75, MaF: 2.25, LB: 2.25, BC: 0.75 },
    { MaF: 0.5, MiF: 0.5, FP: 2.5, BC: 2.5 },
    { LF: 0.8, MiF: 1.6, LB: 2.4 },
    { FP: 1.85, LB: 0.55, BC: 2.4 },
    { LF: 0.5, MiF: 2.5, FP: 2.5, LB: 0.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, BC: 2.5 },
    { MaF: 1.5, FP: 1.5, LB: 1.5, BC: 1.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 2.5, MaF: 0.5, FP: 2.5, BC: 0.5 },
    { MaF: 1.5, MiF: 1.5, LB: 1.5, BC: 1.5 },
    { LF: 1, FP: 2, LB: 2, BC: 1 },
    { LF: 0.25, FP: 2.75, LB: 2.75, BC: 0.25 },
    { MiF: 0.25, FP: 2.75, LB: 2.75, BC: 0.25 },
    { LF: 0.25, MaF: 2.75, MiF: 0.25, FP: 2.75 },
    { LF: 2.25, MaF: 0.75, LB: 2.25, BC: 0.75 },
    { LF: 2, MiF: 1, LB: 1, BC: 2 },
    { MaF: 0.5, MiF: 2.5, FP: 0.5, LB: 2.5 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, FP: 2.5 },
    { LF: 2.5, MiF: 0.5, LB: 0.5, BC: 2.5 },
    { MaF: 2, MiF: 1, FP: 2, LB: 1 }
  ],

  match: [
    {
      teamA: ["MiF", "MaF"],
      teamB: ["FP", "LF"],
      sets: ["6-4", "6-5"]
    },
    {
      teamA: ["FP", "LB"],
      teamB: ["BC", "MaF"],
      sets: ["7-6", "6-2"]
    },

    // Giornata 3: triangolare FP / MiF / BC.
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    {
      teamA: ["BC", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "6-1", "3-2"]
    },
    {
      teamA: ["BC", "LB"],
      teamB: ["LF", "MaF"],
      sets: ["6-3", "6-5"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["FP", "LF"],
      sets: ["6-3", "6-4"]
    },
    {
      teamA: ["MaF", "BC"],
      teamB: ["MiF", "FP"],
      sets: ["6-2", "6-4"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["BC", "LF"],
      sets: ["6-0", "6-2", "3-6"]
    },
    {
      teamA: ["BC", "FP"],
      teamB: ["MiF", "MaF"],
      sets: ["6-4", "6-2"]
    },

    // Giornata 10: triangolare LB / MiF / LF.
    {
      teamA: ["LB"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    // Giornata 11: triangolare BC / FP / LB.
    {
      teamA: ["BC"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["BC"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["FP"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-3"]
    },

    {
      teamA: ["FP", "MiF"],
      teamB: ["LB", "LF"],
      sets: ["6-3", "6-3"]
    },

    // Due colonne senza incontri prima della giornata 13.

    {
      teamA: ["BC", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-4", "6-1", "2-2"]
    },
    {
      teamA: ["MaF", "BC"],
      teamB: ["LB", "FP"],
      sets: ["6-3", "3-6", "4-4"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["7-5", "5-3"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["BC", "MaF"],
      sets: ["6-4", "6-3", "2-2"]
    },

    // Giornata 17: nessun incontro.

    {
      teamA: ["MaF", "BC"],
      teamB: ["MiF", "LB"],
      sets: ["6-3", "3-6", "4-4"]
    },
    {
      teamA: ["FP", "LB"],
      teamB: ["BC", "LF"],
      sets: ["6-4", "3-3"]
    },

    // Giornata 20: LF al posto di MiF.
    {
      teamA: ["FP", "LB"],
      teamB: ["BC", "LF"],
      sets: ["6-4", "6-2", "3-2"]
    },

    // Giornata 21: MiF al posto di LF.
    {
      teamA: ["FP", "LB"],
      teamB: ["BC", "MiF"],
      sets: ["6-2", "6-3", "4-2"]
    },

    {
      teamA: ["FP", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-3", "6-3", "4-0"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MaF", "BC"],
      sets: ["6-2", "6-3", "1-4"]
    },
    {
      teamA: ["BC", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["4-6", "6-2", "5-1"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["FP", "MaF"],
      sets: ["7-6", "4-2"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LF", "MiF"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["BC", "LF"],
      teamB: ["LB", "MiF"],
      sets: ["7-5", "4-0"]
    },
    {
      teamA: ["FP", "MaF"],
      teamB: ["LB", "MiF"],
      sets: ["7-6", "3-3"]
    }
  ]
},
"2022-estate": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC"],

  giornate: [
    { LF: 0.75, MiF: 2.75, LB: 2.75, BC: 0.75 },
    { LF: 1.125, MaF: 2.375, FP: 2.375, BC: 1.125 },
    { LF: 2, MaF: 1, MiF: 2, BC: 1 },
    { LF: 0.25, FP: 0.25, LB: 2.75, BC: 2.75 },
    { LF: 0.5, MiF: 0.5, FP: 2.5, BC: 2.5 },
    { LF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { MaF: 1.5, MiF: 1.5, LB: 1.5, BC: 1.5 },
    { LF: 1.5, MaF: 1.5, FP: 1.5, BC: 1.5 },
    { MaF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5 },
    { LF: 0.5, FP: 2.5, LB: 2.5, BC: 0.5 },
    { LF: 0.5, MiF: 2.5, LB: 2.5, BC: 0.5 },
    { LF: 0.5, MaF: 2.5, FP: 0.5, LB: 2.5 },
    { LF: 1, MaF: 2, MiF: 2, LB: 1 },
    { MaF: 2.75, MiF: 0.25, FP: 2.75, BC: 0.25 },
    { LF: 0.75, MaF: 0.75, FP: 2.25, BC: 2.25 },
    { LF: 2.75, MiF: 0.25, LB: 2.75, BC: 0.25 },
    { MaF: 2.125, MiF: 1.375, FP: 2.125, LB: 1.375 },
    { LF: 2.25, MaF: 0.75, MiF: 0.75, FP: 2.25 }
  ],

  match: [
    {
      teamA: ["LF", "MiF"],
      teamB: ["BC", "MaF"],
      sets: ["6-3", "3-6", "3-2"]
    },
    {
      teamA: ["BC", "LB"],
      teamB: ["LF", "FP"],
      sets: ["6-3", "6-2", "2-1"]
    },
    {
      teamA: ["BC", "FP"],
      teamB: ["LF", "MiF"],
      sets: ["6-1", "6-3"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "FP"],
      sets: ["6-4", "6-3"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["BC", "MaF"],
      sets: ["6-4", "6-7"]
    },
    {
      teamA: ["BC", "MaF"],
      teamB: ["LF", "FP"],
      sets: ["6-4", "2-6"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "MiF"],
      sets: ["7-5", "6-3", "2-2"]
    },
    {
      teamA: ["LB", "FP"],
      teamB: ["LF", "BC"],
      sets: ["6-3", "7-5"]
    },
    {
      teamA: ["LB", "MiF"],
      teamB: ["LF", "BC"],
      sets: ["7-5", "6-2"]
    },
    {
      teamA: ["LB", "MaF"],
      teamB: ["FP", "LF"],
      sets: ["7-5", "5-2"]
    },
    {
      teamA: ["MiF", "MaF"],
      teamB: ["LB", "LF"],
      sets: ["7-5", "4-4"]
    },

    // Tre giornate del calendario senza incontri.

    {
      teamA: ["MaF", "FP"],
      teamB: ["MiF", "BC"],
      sets: ["6-3", "6-3", "5-0"]
    },
    {
      teamA: ["FP", "BC"],
      teamB: ["MaF", "LF"],
      sets: ["6-1", "6-2", "3-4"]
    },
    {
      teamA: ["LF", "LB"],
      teamB: ["MiF", "BC"],
      sets: ["6-3", "6-1", "5-1"]
    },

    // Giornata 17: punti conservati, match escluso.

    {
      teamA: ["FP", "LF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-1", "6-4", "1-3"]
    }
  ]
},
"2023-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF"],

  giornate: [
    { MaF: 0.25, MiF: 2.75, PS: 0.25, FP: 2.75, LB: 2.75, BC: 0.25, CM: 0.25, LuF: 2.75 },
    { MaF: 2, MiF: 2, FP: 0.75, BC: 2.25, CM: 0.75, LuF: 2.25 },
    { LF: 2.5, MaF: 2.9, MiF: 0.3, FP: 1.6, BC: 0.5, CM: 0.5, LuF: 2.5 },
    { LF: 2.75, MaF: 2.75, MiF: 1.25, FP: 2.75, CM: 0.25, LuF: 0.25 },
    { LF: 0.5, MiF: 0.5, BC: 2.5, LuF: 2.5 },
    { LF: 0.55, MaF: 1.35, MiF: 2.75, BC: 2.9, LuF: 1.25 },
    { LF: 1, PS: 0.5, FP: 2.5, BC: 3, CM: 0.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5, BC: 0.5, CM: 0.5, LuF: 2.5 },
    { LF: 0.8, MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.4, BC: 1.6, LuF: 2.5 },
    { LF: 1, MiF: 0.8, FP: 2.65, BC: 3, LuF: 1.35 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, BC: 1.5 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 0.5, BC: 2.5, CM: 0.5, LuF: 2.5 },
    { LF: 1.6, MaF: 0.8, PS: 2.5, FP: 2.5, BC: 2.4, CM: 0.5, LuF: 0.5 },
    { LF: 1, MaF: 0.25, MiF: 0.25, LB: 2.75, BC: 3, LuF: 2.75 },
    { MaF: 1.5, MiF: 1.5, PS: 1.5, FP: 1.5, LB: 1.5, BC: 1.5, CM: 1.5, LuF: 1.5 },
    { MaF: 1.85, MiF: 0.25, PS: 0.25, FP: 2.75, LB: 2.75, BC: 1.35, LuF: 1.6 },
    { LF: 2.5, MaF: 1.6, MiF: 0.8, LB: 2.5, BC: 0.5, CM: 0.5, LuF: 2.4 },
    { LF: 2.25, MaF: 2, MiF: 1, FP: 0.75, LB: 2.25, BC: 1, CM: 0.75, LuF: 2 },
    { LF: 0.25, MiF: 0.8, FP: 2.75, LB: 2.75, BC: 1.6, CM: 0.25, LuF: 2.4 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5, LB: 1.5, BC: 1.5, CM: 1.5, LuF: 1.5 },
    { LF: 2, PS: 2, FP: 1, LB: 0.8, BC: 2.65, CM: 1, LuF: 1.35 },
    { LF: 1.5, MaF: 1.5, MiF: 1.5, PS: 1.5, LB: 1.5, BC: 1.5, CM: 1.5, LuF: 1.5 },
    { LF: 0.5, MaF: 2.5, LB: 2.5, BC: 1.5, CM: 0.5, LuF: 2.5 },
    { LF: 1.5, MaF: 1.5, PS: 1.5, FP: 1.5, LB: 1, BC: 1, CM: 2, LuF: 2 },
    { LF: 1, MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5, LB: 2, BC: 1, LuF: 2 },
    { LF: 0.55, LB: 2.9, LuF: 1.35 }
  ],

  match: [
    // Giornata 1
    {
      teamA: ["LB", "LuF"],
      teamB: ["PS", "CM"],
      sets: ["6-0", "6-3", "6-1"]
    },
    {
      teamA: ["FP", "MiF"],
      teamB: ["MaF", "BC"],
      sets: ["6-4", "6-0", "5-2"]
    },

    // Giornata 2
    {
      teamA: ["BC", "LuF"],
      teamB: ["FP", "CM"],
      sets: ["6-1", "6-3", "3-4"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["7-5", "4-6"]
    },

    // Giornata 3
    {
      teamA: ["LF", "LuF"],
      teamB: ["BC", "CM"],
      sets: ["6-3", "6-4"]
    },

    // Triangolare MaF / MiF / FP.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["MaF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    // Giornata 4
    {
      teamA: ["LF", "FP"],
      teamB: ["LuF", "CM"],
      sets: ["6-1", "6-1", "5-0"]
    },
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["6-4", "6-3", "2-4"]
    },

    // Giornata 5
    {
      teamA: ["LuF", "BC"],
      teamB: ["LF", "MiF"],
      sets: ["6-1", "6-5"]
    },

    // Giornata 6: triangolare BC / MaF / LF.
    {
      teamA: ["BC"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["MiF"],
      teamB: ["LuF"],
      tipo: "singolo",
      sets: ["6-2", "3-6", "5-3"]
    },

    // Giornata 7: ML partecipa come ospite.
    {
      teamA: ["ML", "FP"],
      teamB: ["PS", "CM"],
      sets: ["6-0", "6-3"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-2", "6-4"]
    },

    // Giornata 8
    {
      teamA: ["LuF", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["6-3", "6-3", "4-4"]
    },
    {
      teamA: ["FP", "LF"],
      teamB: ["BC", "CM"],
      sets: ["6-1", "6-3"]
    },

    // Giornata 9
    {
      teamA: ["LuF", "MaF"],
      teamB: ["MiF", "PS"],
      sets: ["6-4", "6-4", "2-2"]
    },

    // Triangolare BC / LF / FP.
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["BC"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    // Giornata 10: triangolare FP / LuF / MiF.
    {
      teamA: ["FP"],
      teamB: ["LuF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["FP"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LuF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-4", "6-0"]
    },

    // Giornata 11
    {
      teamA: ["LF", "MaF"],
      teamB: ["MiF", "BC"],
      sets: ["7-6", "2-5"]
    },

    // Giornata 12
    {
      teamA: ["LuF", "PS"],
      teamB: ["FP", "CM"],
      sets: ["7-5", "6-3"]
    },
    {
      teamA: ["LF", "BC"],
      teamB: ["MiF", "MaF"],
      sets: ["6-2", "6-2", "1-1"]
    },

    // Giornata 13
    {
      teamA: ["FP", "PS"],
      teamB: ["LuF", "CM"],
      sets: ["7-6", "4-3"]
    },

    // Triangolare LF / MaF / BC.
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["BC"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-1"]
    },

    // Giornata 14
    {
      teamA: ["LB", "LuF"],
      teamB: ["MiF", "MaF"],
      sets: ["6-3", "6-1", "5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["6-3", "6-4"]
    },

    // Giornata 15
    {
      teamA: ["MiF", "BC"],
      teamB: ["LuF", "MaF"],
      sets: ["6-4", "5-7"]
    },
    {
      teamA: ["FP", "CM"],
      teamB: ["LB", "PS"],
      sets: ["6-4", "5-7"]
    },

    // Giornata 16
    {
      teamA: ["LB", "FP"],
      teamB: ["MiF", "PS"],
      sets: ["6-0", "6-1", "6-3"]
    },

    // Triangolare LuF / BC / MaF.
    {
      teamA: ["LuF"],
      teamB: ["BC"],
      tipo: "singolo",
      sets: ["3-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["MaF"],
      teamB: ["LuF"],
      tipo: "singolo",
      sets: ["5-4"]
    },

    // Giornata 17
    {
      teamA: ["LB", "LF"],
      teamB: ["BC", "CM"],
      sets: ["6-3", "6-2"]
    },

    // Triangolare MaF / MiF / LuF.
    {
      teamA: ["MaF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LuF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LuF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-3"]
    },

    // Giornata 18
    {
      teamA: ["LB", "LF"],
      teamB: ["FP", "CM"],
      sets: ["6-1", "6-2", "2-3"]
    },
    {
      teamA: ["LuF", "MaF"],
      teamB: ["MiF", "BC"],
      sets: ["7-5", "4-4"]
    },

    // Giornata 19
    {
      teamA: ["LB", "FP"],
      teamB: ["LF", "CM"],
      sets: ["6-3", "6-3", "5-1"]
    },

    // Triangolare BC / MiF / LuF.
    {
      teamA: ["BC"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },
    {
      teamA: ["LuF"],
      teamB: ["BC"],
      tipo: "singolo",
      sets: ["5-3"]
    },
    {
      teamA: ["LuF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["5-0"]
    },

    // Giornata 20
    {
      teamA: ["LF", "CM"],
      teamB: ["MaF", "PS"],
      sets: ["7-6", "1-3"]
    },
    {
      teamA: ["MiF", "BC"],
      teamB: ["LB", "LuF"],
      sets: ["6-4", "5-7"]
    },

    // Giornata 21
    {
      teamA: ["LF", "PS"],
      teamB: ["FP", "CM"],
      sets: ["1-6", "6-3", "2-0"]
    },

    // Triangolare BC / LB / LuF.
    {
      teamA: ["BC"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["BC"],
      teamB: ["LuF"],
      tipo: "singolo",
      sets: ["5-4"]
    },
    {
      teamA: ["LuF"],
      teamB: ["LB"],
      tipo: "singolo",
      sets: ["5-2"]
    },

    // Giornata 22
    {
      teamA: ["LF", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["7-5", "1-2"]
    },
    {
      teamA: ["BC", "LB"],
      teamB: ["LuF", "CM"],
      sets: ["7-6", "3-4"]
    },

    // Giornata 23
    {
      teamA: ["LB", "MaF"],
      teamB: ["LF", "CM"],
      sets: ["6-0", "7-6"]
    },
    {
      teamA: ["LuF"],
      teamB: ["BC"],
      tipo: "singolo",
      sets: ["3-6", "6-0", "3-2"]
    },

    // Giornata 24
    {
      teamA: ["LF", "MaF"],
      teamB: ["PS", "FP"],
      sets: ["6-2", "2-5"]
    },
    {
      teamA: ["LuF", "CM"],
      teamB: ["LB", "BC"],
      sets: ["3-6", "6-3", "3-1"]
    },

    // Giornata 25
    {
      teamA: ["FP", "PS"],
      teamB: ["MiF", "MaF"],
      sets: ["7-5", "6-2"]
    },
    {
      teamA: ["LuF", "LB"],
      teamB: ["BC", "LF"],
      sets: ["6-3", "5-5"]
    },

    // Giornata 26: triangolare LuF / LF / LB.
    {
      teamA: ["LuF"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-2"]
    },
    {
      teamA: ["LB"],
      teamB: ["LF"],
      tipo: "singolo",
      sets: ["5-1"]
    },
    {
      teamA: ["LB"],
      teamB: ["LuF"],
      tipo: "singolo",
      sets: ["5-2"]
    }
  ]
},
"2023-estate": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "GF", "MeF"],

  giornate: [
    { LF: 0.5, MaF: 0.5, MiF: 0.75, PS: 2.5, FP: 2.25, BC: 2.5, CM: 0.75, GF: 2.25 },
    { LF: 0.5, MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 2.5, LB: 2.5, CM: 0.5, LuF: 2.5 },
    { MaF: 1, MiF: 2.5, PS: 1, FP: 0.5, LB: 2, CM: 0.5, LuF: 2.5, GF: 2 },
    { LF: 2, MaF: 2, MiF: 1, FP: 2, LB: 2, BC: 1, CM: 1, LuF: 1 },
    { LF: 2.5, MaF: 0.25, MiF: 0.5, FP: 2.75, LB: 2.5, BC: 0.5, CM: 2.75, GF: 0.25 },
    { LF: 2.5, MaF: 1.85, MiF: 2.5, FP: 0.5, CM: 0.55, LuF: 2.4, MeF: 0.5 },
    { LF: 0.25, FP: 2.75, LB: 2.5, BC: 2.5, CM: 0.25, LuF: 0.5, GF: 0.5, MeF: 2.75 },
    { LF: 0.25, MiF: 0.5, LB: 2.5, BC: 0.5, CM: 0.25, LuF: 2.75, GF: 2.75, MeF: 2.5 },
    { LF: 0.25, MiF: 0.55, FP: 1.35, LB: 2.75, BC: 2.9, CM: 2.75, GF: 0.25 },
    { LF: 0.25, MaF: 2, MiF: 0.25, FP: 2.75, BC: 1, LuF: 2, GF: 1, MeF: 2.75 },
    { MaF: 2, MiF: 0.75, PS: 2.25, FP: 2.25, LB: 2, CM: 0.75, LuF: 1, MeF: 1 },
    { LF: 1.8, MaF: 1.2, BC: 1.8, CM: 0.6, LuF: 2.4, MeF: 1.2 },
    { LF: 1.5, MaF: 1.5, MiF: 0.25, FP: 1.5, LB: 0.25, LuF: 2.75, GF: 1.5, MeF: 2.75 },
    { LF: 1.2, LB: 1.9, BC: 1.6, GF: 0.8, MeF: 2.5 },
    { MaF: 1, MiF: 2.25, PS: 2, FP: 2, BC: 0.75, CM: 0.75, LuF: 2.25, GF: 1 },
    { LF: 1.25, MaF: 1.25, MiF: 2.25, PS: 1.75, FP: 1.75, LB: 2.25, CM: 0.75, LuF: 0.75 },
    { LF: 1.25, MaF: 1.25, MiF: 2, PS: 1.75, LB: 1.75, BC: 2, CM: 1, LuF: 1 },
    { LF: 0.5, MaF: 2.5, MiF: 0.5, FP: 0.5, LB: 2.5, BC: 0.5, CM: 2.5, LuF: 2.5 },
    { LF: 1, MaF: 1.5, MiF: 1.5, PS: 1.5, FP: 1, LB: 1.5, CM: 2, LuF: 2 }
  ],

  match: [
    // Giornata 1
    { teamA: ["BC", "PS"], teamB: ["LF", "MaF"], sets: ["6-3", "6-4"] },
    { teamA: ["FP", "GF"], teamB: ["MiF", "CM"], sets: ["6-3", "6-3", "2-4"] },

    // Giornata 2
    { teamA: ["PS", "LB"], teamB: ["CM", "LF"], sets: ["7-5", "6-1"] },
    { teamA: ["FP", "LuF"], teamB: ["MiF", "MaF"], sets: ["7-6", "6-0"] },

    // Giornata 3
    {
      teamA: ["LB", "GF"],
      teamB: ["PS", "MaF"],
      sets: ["6-4", "2-6", { score: "10-3", tiebreak: true }]
    },
    { teamA: ["MiF", "LuF"], teamB: ["FP", "CM"], sets: ["6-2", "6-2"] },

    // Giornata 4
    {
      teamA: ["FP", "LF"],
      teamB: ["MiF", "BC"],
      sets: ["4-6", "6-3", { score: "7-5", tiebreak: true }]
    },
    {
      teamA: ["MaF", "LB"],
      teamB: ["CM", "LuF"],
      sets: ["5-7", "5-4", { score: "9-7", tiebreak: true }]
    },

    // Giornata 5
    { teamA: ["LB", "LF"], teamB: ["MiF", "BC"], sets: ["6-2", "6-3"] },
    { teamA: ["CM", "FP"], teamB: ["GF", "MaF"], sets: ["6-2", "6-4", "6-2"] },

    // Giornata 6
    { teamA: ["LF", "MiF"], teamB: ["MeF", "FP"], sets: ["6-4", "6-1"] },

    // Triangolare LuF / MaF / CM
    { teamA: ["LuF"], teamB: ["MaF"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["LuF"], teamB: ["CM"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["MaF"], teamB: ["CM"], tipo: "singolo", sets: ["5-4"] },

    // Giornata 7
    { teamA: ["BC", "LB"], teamB: ["GF", "LuF"], sets: ["6-4", "6-4"] },
    { teamA: ["MeF", "FP"], teamB: ["LF", "CM"], sets: ["6-1", "6-2", "6-3"] },

    // Giornata 8
    { teamA: ["LB", "MeF"], teamB: ["MiF", "BC"], sets: ["6-2", "6-3"] },
    { teamA: ["LuF", "GF"], teamB: ["LF", "CM"], sets: ["6-3", "6-1", "2-1"] },

    // Giornata 9
    { teamA: ["LB", "CM"], teamB: ["GF", "LF"], sets: ["6-2", "6-4", "5-0"] },

    // Triangolare BC / FP / MiF
    { teamA: ["BC"], teamB: ["FP"], tipo: "singolo", sets: ["5-3"] },
    { teamA: ["FP"], teamB: ["MiF"], tipo: "singolo", sets: ["5-3"] },
    { teamA: ["BC"], teamB: ["MiF"], tipo: "singolo", sets: ["5-3"] },

    // Giornata 10
    { teamA: ["FP", "MeF"], teamB: ["MiF", "LF"], sets: ["6-2", "6-1", "6-0"] },
    { teamA: ["MaF", "LuF"], teamB: ["BC", "GF"], sets: ["5-7", "6-3", "10-2"] },

    // Giornata 11
    { teamA: ["MaF", "LB"], teamB: ["LuF", "MeF"], sets: ["2-6", "6-4", "10-8"] },
    { teamA: ["FP", "PS"], teamB: ["MiF", "CM"], sets: ["6-1", "6-2", "0-3"] },

    // Giornata 12: tre incontri riportati per ciascun campo.
    { teamA: ["LF", "LuF"], teamB: ["CM", "MaF"], sets: ["5-3"] },
    { teamA: ["BC", "MeF"], teamB: ["CM", "MaF"], sets: ["5-2"] },
    { teamA: ["LF", "LuF"], teamB: ["BC", "MeF"], sets: ["6-3"] },

    { teamA: ["MaF"], teamB: ["CM"], tipo: "singolo", sets: ["7-5"] },
    { teamA: ["BC"], teamB: ["MeF"], tipo: "singolo", sets: ["4-3"] },
    { teamA: ["LuF"], teamB: ["LF"], tipo: "singolo", sets: ["5-0"] },

    // Giornata 13
    { teamA: ["FP", "GF"], teamB: ["MaF", "LF"], sets: ["6-4", "3-6"] },
    { teamA: ["MeF", "LuF"], teamB: ["MiF", "LB"], sets: ["7-5", "6-3", "4-2"] },

    // Giornata 14: dieci incontri brevi di singolare.
    { teamA: ["LB"], teamB: ["GF"], tipo: "singolo", sets: ["10-2"] },
    { teamA: ["LB"], teamB: ["LF"], tipo: "singolo", sets: ["10-2"] },
    { teamA: ["LB"], teamB: ["BC"], tipo: "singolo", sets: ["10-3"] },
    { teamA: ["LB"], teamB: ["MeF"], tipo: "singolo", sets: ["9-10"] },
    { teamA: ["BC"], teamB: ["GF"], tipo: "singolo", sets: ["10-4"] },

    { teamA: ["MeF"], teamB: ["BC"], tipo: "singolo", sets: ["10-5"] },
    { teamA: ["MeF"], teamB: ["GF"], tipo: "singolo", sets: ["10-5"] },
    { teamA: ["LF"], teamB: ["GF"], tipo: "singolo", sets: ["10-5"] },
    { teamA: ["MeF"], teamB: ["LF"], tipo: "singolo", sets: ["10-2"] },
    { teamA: ["BC"], teamB: ["LF"], tipo: "singolo", sets: ["10-3"] },

    // Giornata 15
    { teamA: ["FP", "PS"], teamB: ["MaF", "GF"], sets: ["3-6", "6-3", "7-3"] },
    { teamA: ["LuF", "MiF"], teamB: ["CM", "BC"], sets: ["6-4", "6-1", "3-4"] },

    // Giornata 16
    { teamA: ["FP", "PS"], teamB: ["MaF", "LF"], sets: ["7-6", "1-4"] },
    { teamA: ["LB", "MiF"], teamB: ["LuF", "CM"], sets: ["7-6", "4-4"] },

    // Giornata 17
    { teamA: ["LB", "PS"], teamB: ["MaF", "LF"], sets: ["7-6", "1-3"] },
    { teamA: ["BC", "MiF"], teamB: ["LuF", "CM"], sets: ["1-6", "7-5", "3-2"] },

    // Giornata 18
    { teamA: ["MaF", "LuF"], teamB: ["FP", "LF"], sets: ["6-4", "5-4"] },
    { teamA: ["LB", "CM"], teamB: ["BC", "MiF"], sets: ["6-4", "5-4"] },

    // Giornata 19
    { teamA: ["CM", "LuF"], teamB: ["FP", "LF"], sets: ["6-2", "2-6", "3-2"] },
    { teamA: ["MiF", "MaF"], teamB: ["LB", "PS"], sets: ["7-6", "0-6"] }
  ]
},
"2024-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM", "LuF", "MS", "ZG", "MP"],

  giornate: [
    { LF: 2.5, FP: 0.5, LB: 0.5, BC: 2.5, CM: 2.5, MS: 0.5, ZG: 0.5, MP: 2.5 },
    { MaF: 0.5, MiF: 2.5, PS: 2.25, BC: 2.25, LuF: 0.75, MS: 0.5, ZG: 0.75, MP: 2.5 },
    { MaF: 0.5, MiF: 0.3, FP: 1.85, LB: 2.5, CM: 2.5, LuF: 2.65, MP: 0.5 },
    { MaF: 2.5, MiF: 2.75, FP: 2.75, LB: 0.5, BC: 2.5, CM: 0.25, MS: 0.25, ZG: 0.5 },
    { MiF: 0.25, LB: 2.5, BC: 0.5, CM: 2.5, LuF: 2.75, MS: 0.5, ZG: 0.25, MP: 2.75 },
    { MaF: 2.5, LB: 2.75, BC: 2.5, CM: 0.5, LuF: 2.75, MS: 0.25, ZG: 0.5, MP: 0.25 },
    { MaF: 0.5, MiF: 0.5, PS: 2.5, BC: 2.5, LuF: 2.5, MS: 2.5, ZG: 0.5, MP: 0.5 },
    { PS: 2.25, FP: 2.75, LB: 2.25, BC: 0.25, CM: 2.75, MS: 0.75, ZG: 0.25, MP: 0.75 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5, LB: 2.5, CM: 0.5, LuF: 0.5, MP: 2.5 },
    { MaF: 0.5, MiF: 1.5, FP: 0.5, LB: 2.5, BC: 1.5, LuF: 1.5, MS: 1.5, ZG: 2.5 },
    { MaF: 1.8, MiF: 0.6, FP: 2.4, BC: 1.8, ZG: 1.2, MP: 1.2 },
    { MaF: 0.5, MiF: 2.5, BC: 2.5, CM: 0.5, LuF: 2.5, MS: 2.5, ZG: 0.5, MP: 0.5 },
    { LF: 1, FP: 2, LB: 2.25, BC: 1, CM: 0.75, LuF: 0.75, ZG: 2.25, MP: 2 },
    { LF: 2.25, MaF: 0.75, MiF: 0.75, PS: 2.5, FP: 2.5, LB: 2.25, CM: 0.5, MS: 0.5 },
    { LF: 2.5, MaF: 1, MiF: 0.5, PS: 0.5, BC: 2.5, LuF: 2, MS: 1, ZG: 2 },
    { LF: 2.5, PS: 2.5, FP: 0.5, LB: 2.5, CM: 0.5, LuF: 2.5, ZG: 0.5, MP: 0.5 },
    { LF: 2.75, MaF: 0.25, MiF: 1.5, PS: 1.5, FP: 1.5, LB: 2.75, CM: 0.25, LuF: 1.5 },
    { LF: 0.5, MaF: 2.5, FP: 2.5, LB: 1, BC: 0.5, CM: 2, ZG: 1, MP: 2 },
    { LF: 2.25, MaF: 1, MiF: 0.75, LB: 2, BC: 2.25, LuF: 0.75, ZG: 2, MP: 1 },
    { LF: 2.5, MaF: 2.5, MiF: 2.75, FP: 0.25, BC: 0.5, LuF: 2.75, MS: 0.5, ZG: 0.25 },
    { LF: 0.75, MaF: 0.25, MiF: 0.25, LB: 2.25, CM: 2.75, LuF: 2.75, MS: 2.25, MP: 0.75 },
    { LF: 0.5, MiF: 1.5, PS: 1.5, LB: 2.5, CM: 0.5, LuF: 1.5, MS: 2.5, MP: 1.5 },
    { LF: 2.5, MaF: 2.5, MiF: 2, PS: 1, FP: 1, BC: 0.5, ZG: 0.5, MP: 2 },
    { MaF: 1, MiF: 1, PS: 0.25, LB: 2, BC: 0.25, LuF: 2.75, MS: 2.75, ZG: 2 },
    { LF: 2, PS: 1, FP: 2, BC: 1.75, CM: 1.25, LuF: 1, MS: 1.75, MP: 1.25 },
    { LF: 0.25, MaF: 2.5, MiF: 2.5, LB: 0.5, CM: 0.25, LuF: 2.75, MS: 2.75, ZG: 0.5 },
    { MaF: 0.5, MiF: 1.5, PS: 2.5, FP: 0.5, LB: 1.5, BC: 1.5, LuF: 2.5, ZG: 1.5 },
    { LF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5, BC: 0.5, CM: 0.5, MS: 2.5, MP: 2.5 }
  ],

  match: [
    // Giornata 1
    { teamA: ["LF", "BC"], teamB: ["LB", "ZG"], sets: ["6-3", "6-1", "4-4"] },
    { teamA: ["CM", "MP"], teamB: ["FP", "MS"], sets: ["6-1", "7-6", "4-4"] },

    // Giornata 2
    { teamA: ["BC", "PS"], teamB: ["ZG", "LuF"], sets: ["6-1", "6-3", "2-3"] },
    { teamA: ["MiF", "MP"], teamB: ["MaF", "MS"], sets: ["6-2", "7-5"] },

    // Giornata 3: triangolare LuF / FP / MiF.
    { teamA: ["LuF"], teamB: ["FP"], tipo: "singolo", sets: ["5-3"] },
    { teamA: ["LuF"], teamB: ["MiF"], tipo: "singolo", sets: ["5-3"] },
    { teamA: ["FP"], teamB: ["MiF"], tipo: "singolo", sets: ["5-4"] },
    { teamA: ["LB", "CM"], teamB: ["MP", "MaF"], sets: ["6-4", "6-4"] },

    // Giornata 4
    { teamA: ["BC", "MaF"], teamB: ["ZG", "LB"], sets: ["7-5", "6-4"] },
    { teamA: ["MiF", "FP"], teamB: ["CM", "MS"], sets: ["6-1", "6-0", "6-2"] },

    // Giornata 5
    { teamA: ["LuF", "MP"], teamB: ["MiF", "ZG"], sets: ["6-1", "6-2", "6-1"] },
    { teamA: ["LB", "CM"], teamB: ["BC", "MS"], sets: ["6-4", "6-2"] },

    // Giornata 6
    { teamA: ["LB", "LuF"], teamB: ["MS", "MP"], sets: ["6-2", "6-1", "6-0"] },
    { teamA: ["BC", "MaF"], teamB: ["CM", "ZG"], sets: ["6-2", "6-2"] },

    // Giornata 7
    { teamA: ["BC", "MS"], teamB: ["MaF", "MiF"], sets: ["6-3", "6-1"] },
    { teamA: ["LuF", "PS"], teamB: ["MP", "ZG"], sets: ["6-1", "6-1"] },

    // Giornata 8
    { teamA: ["LB", "PS"], teamB: ["MP", "MS"], sets: ["6-3", "5-5"] },
    { teamA: ["FP", "CM"], teamB: ["BC", "ZG"], sets: ["6-2", "6-2", "6-0"] },

    // Giornata 9
    { teamA: ["LB", "MaF"], teamB: ["CM", "PS"], sets: ["6-1", "6-1"] },
    { teamA: ["MP", "FP"], teamB: ["LuF", "MiF"], sets: ["6-3", "6-4", "3-3"] },

    // Giornata 10
    { teamA: ["LB", "ZG"], teamB: ["FP", "MaF"], sets: ["6-4", "7-5"] },
    { teamA: ["MiF", "LuF"], teamB: ["MS", "BC"], sets: ["6-3", "4-6"] },

    // Giornata 11: tre singolari e tre doppi.
    { teamA: ["MiF"], teamB: ["MP"], tipo: "singolo", sets: ["5-4"] },
    { teamA: ["FP"], teamB: ["MaF"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["BC"], teamB: ["ZG"], tipo: "singolo", sets: ["4-2"] },
    { teamA: ["BC", "ZG"], teamB: ["MP", "MiF"], sets: ["5-3"] },
    { teamA: ["FP", "MaF"], teamB: ["BC", "ZG"], sets: ["4-3"] },
    { teamA: ["FP", "MaF"], teamB: ["MP", "MiF"], sets: ["4-3"] },

    // Giornata 12
    { teamA: ["MS", "BC"], teamB: ["CM", "MaF"], sets: ["6-4", "7-5"] },
    { teamA: ["MiF", "LuF"], teamB: ["MP", "ZG"], sets: ["7-6", "5-4"] },

    // Giornata 13
    { teamA: ["MP", "FP"], teamB: ["BC", "LF"], sets: ["4-6", "6-2", { score: "7-5", tiebreak: true }] },
    { teamA: ["LB", "ZG"], teamB: ["LuF", "CM"], sets: ["6-3", "6-6"] },

    // Giornata 14
    { teamA: ["LF", "LB"], teamB: ["MiF", "MaF"], sets: ["6-1", "6-0", "3-4"] },
    { teamA: ["FP", "PS"], teamB: ["MS", "CM"], sets: ["6-3", "6-1"] },

    // Giornata 15
    { teamA: ["BC", "LF"], teamB: ["MiF", "PS"], sets: ["6-3", "6-3"] },
    { teamA: ["LuF", "ZG"], teamB: ["MaF", "MS"], sets: ["6-3", "3-6", "6-0"] },

    // Giornata 16
    { teamA: ["LF", "LB"], teamB: ["CM", "MP"], sets: ["6-1", "6-3"] },
    { teamA: ["LuF", "PS"], teamB: ["FP", "ZG"], sets: ["6-2", "6-3"] },

    // Giornata 17
    { teamA: ["LF", "LB"], teamB: ["CM", "MaF"], sets: ["6-1", "6-1", "6-3"] },
    { teamA: ["MiF", "LuF"], teamB: ["FP", "PS"], sets: ["6-4", "4-6"] },

    // Giornata 18
    { teamA: ["FP", "MaF"], teamB: ["BC", "LF"], sets: ["6-3", "6-0"] },
    { teamA: ["MP", "CM"], teamB: ["LB", "ZG"], sets: ["4-6", "6-3", { score: "7-3", tiebreak: true }] },

    // Giornata 19
    { teamA: ["BC", "LF"], teamB: ["MiF", "LuF"], sets: ["7-5", "4-4"] },
    { teamA: ["LB", "ZG"], teamB: ["MaF", "MP"], sets: ["2-6", "7-6", { score: "7-2", tiebreak: true }] },

    // Giornata 20
    { teamA: ["LF", "MaF"], teamB: ["MS", "BC"], sets: ["7-5", "4-1"] },
    { teamA: ["MiF", "LuF"], teamB: ["FP", "ZG"], sets: ["6-3", "6-2", "2-0"] },

    // Giornata 21
    { teamA: ["LB", "MS"], teamB: ["MP", "LF"], sets: ["6-3", "4-4"] },
    { teamA: ["CM", "LuF"], teamB: ["MiF", "MaF"], sets: ["6-2", "6-3", "5-2"] },

    // Giornata 22
    { teamA: ["LB", "MS"], teamB: ["CM", "LF"], sets: ["7-5", "6-2"] },
    { teamA: ["LuF", "PS"], teamB: ["MP", "MiF"], sets: ["6-4", "3-6"] },

    // Giornata 23
    { teamA: ["LF", "MaF"], teamB: ["ZG", "BC"], sets: ["6-3", "6-4"] },
    { teamA: ["MP", "MiF"], teamB: ["PS", "FP"], sets: ["3-6", "6-4", { score: "7-4", tiebreak: true }] },

    // Giornata 24
    { teamA: ["MS", "LuF"], teamB: ["BC", "PS"], sets: ["6-4", "6-1", "4-2"] },
    { teamA: ["LB", "ZG"], teamB: ["MiF", "MaF"], sets: ["2-6", "7-5", "3-1"] },

    // Giornata 25
    { teamA: ["FP", "LF"], teamB: ["LuF", "PS"], sets: ["2-6", "6-1", "3-1"] },
    { teamA: ["BC", "MS"], teamB: ["CM", "MP"], sets: ["6-4", "4-5"] },

    // Giornata 26
    { teamA: ["MS", "LuF"], teamB: ["LF", "CM"], sets: ["6-3", "6-2", "3-1"] },
    { teamA: ["MiF", "MaF"], teamB: ["LB", "ZG"], sets: ["7-5", "6-2"] },

    // Giornata 27
    { teamA: ["PS", "LuF"], teamB: ["MaF", "FP"], sets: ["6-2", "6-4"] },
    { teamA: ["MiF", "BC"], teamB: ["LB", "ZG"], sets: ["4-6", "6-2"] },

    // Giornata 28
    { teamA: ["FP", "MS"], teamB: ["MiF", "PS"], sets: ["6-2", "6-2"] },
    { teamA: ["LF", "MP"], teamB: ["CM", "BC"], sets: ["7-5", "6-2"] }
  ]
},
"2024-estate": {
  teams: [
    "LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "CM",
    "LuF", "MS", "ZG", "MP", "GF", "MeF", "PiS", "MM"
  ],

  giornate: [
    { LF: 2.5, MaF: 0.5, FP: 0.5, LB: 2.5, BC: 2.5, CM: 2.5, LuF: 0.5, MS: 0.5, ZG: 0.5, MeF: 2.5, PiS: 0.5, MM: 2.5 },
    { LF: 1.8, MaF: 2.75, MiF: 2.75, FP: 1.8, LB: 2.4, LuF: 1.2, ZG: 0.25, PiS: 0.25, MM: 0.6 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, PS: 2.5, LB: 0.75, LuF: 2.25, MS: 0.5, ZG: 2.25, MP: 2.5, GF: 0.75, PiS: 0.5, MM: 0.5 },
    { MaF: 1.25, PS: 2.5, FP: 1, LB: 1.75, LuF: 2, MS: 1.75, ZG: 0.5, MP: 2.5, GF: 1.25, MeF: 0.5, PiS: 2, MM: 1 },
    { LF: 2.5, MaF: 0.5, MiF: 1.5, PS: 0.5, BC: 0.75, MS: 0.75, ZG: 1.5, MP: 2.5, GF: 2.25, MeF: 2.25, PiS: 1.5, MM: 1.5 },
    { LF: 0.5, MiF: 1, PS: 2.5, FP: 2, LB: 2.5, BC: 0.5, LuF: 1, MS: 2.5, MP: 2, MeF: 2.5, PiS: 0.5, MM: 0.5 },
    { LF: 2.5, MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 0.5, LB: 2.4, BC: 2.5, LuF: 2.5, ZG: 0.8, MP: 0.5, MeF: 1.6 },
    { LF: 1.2, PS: 1.8, FP: 2.75, BC: 0.25, CM: 0.6, LuF: 2.4, MS: 0.25, MP: 1.8, PiS: 1.2, MM: 2.75 },
    { LF: 0.5, MaF: 2, FP: 2.5, LB: 0.5, BC: 2.5, CM: 0.5, LuF: 1, MS: 1, ZG: 0.5, MeF: 2.5, PiS: 2, MM: 2.5 },
    { LF: 0.5, MaF: 1.75, MiF: 1.25, PS: 2.5, LB: 1.25, CM: 0.5, LuF: 2.5, MP: 0.5, GF: 2.5, MeF: 2.5, PiS: 1.75, MM: 0.5 },
    { MaF: 0.25, FP: 2, LB: 2.75, BC: 1.25, CM: 1.25, LuF: 0.25, MS: 1.75, ZG: 1.75, MP: 2, MeF: 2.75, PiS: 1, MM: 1 },
    { LF: 0.5, MiF: 0.5, PS: 0.25, FP: 2.25, LB: 0.75, BC: 0.25, CM: 2.75, MS: 2.25, ZG: 2.5, MP: 2.5, GF: 0.75, MeF: 2.75 },
    { LF: 0.5, MaF: 2.5, MiF: 2.5, PS: 0.5, BC: 2.4, CM: 1.6, MS: 0.5, ZG: 0.5, GF: 0.8, MeF: 2.5, PiS: 2.5 },
    { LF: 0.5, MaF: 0.5, MiF: 0.75, PS: 0.5, FP: 2.5, LB: 2.5, LuF: 2.5, MS: 0.75, MP: 0.5, GF: 2.25, PiS: 2.5, MM: 2.25 },
    { LF: 0.5, MaF: 1.5, MiF: 2.5, PS: 0.5, LB: 2.5, BC: 1.5, LuF: 2.5, MS: 1.5, ZG: 2.5, MP: 1.5, PiS: 0.5, MM: 0.5 },
    { LF: 2.5, MaF: 1.6, MiF: 2.5, PS: 0.5, FP: 2.5, LB: 0.5, BC: 2.5, CM: 0.5, ZG: 2, PiS: 1.2, MM: 0.5 },
    { MaF: 0.25, MiF: 0.5, PS: 2.5, FP: 0.5, LB: 0.5, BC: 2.75, CM: 0.5, LuF: 2.5, ZG: 2.5, MP: 2.75, MeF: 2.5, MM: 0.25 },
    { LF: 2, MaF: 0.25, MiF: 2.75, FP: 2, LB: 1, BC: 0.25, LuF: 1.5, ZG: 1.5, MP: 1.5, MeF: 2.75, PiS: 1.5, MM: 1 }
  ],

  match: [
    // Giornata 1
    { teamA: ["LB", "MM"], teamB: ["LuF", "PiS"], sets: ["6-1", "7-6"] },
    { teamA: ["BC", "MeF"], teamB: ["FP", "ZG"], sets: ["6-1", "6-2"] },
    { teamA: ["LF", "CM"], teamB: ["MaF", "MS"], sets: ["6-3", "6-3"] },

    // Giornata 2
    // Triangolare di doppi Fonoroma
    { teamA: ["LB", "LF"], teamB: ["MM", "LuF"], sets: ["5-3"] },
    { teamA: ["LB", "LF"], teamB: ["ML", "FP"], sets: ["5-3"] },
    { teamA: ["ML", "FP"], teamB: ["MM", "LuF"], sets: ["5-1"] },

    // Triangolare di singolari Trento
    { teamA: ["FP"], teamB: ["ML"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["LuF"], teamB: ["MM"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["LB"], teamB: ["LF"], tipo: "singolo", sets: ["5-1"] },

    { teamA: ["MiF", "MaF"], teamB: ["PiS", "ZG"], sets: ["6-3", "6-2", "6-1"] },

    // Giornata 3
    { teamA: ["LF", "PS"], teamB: ["MiF", "PiS"], sets: ["6-4", "5-3"] },
    { teamA: ["MaF", "MP"], teamB: ["MM", "MS"], sets: ["6-1", "7-6"] },
    { teamA: ["LuF", "ZG"], teamB: ["LB", "GF"], sets: ["6-4", "6-2", "0-6"] },

    // Giornata 4
    { teamA: ["MaF", "GF"], teamB: ["LB", "MS"], sets: ["6-7", "5-4"] },
    { teamA: ["PS", "MP"], teamB: ["ZG", "MeF"], sets: ["7-5", "6-4"] },
    { teamA: ["LuF", "PiS"], teamB: ["MM", "FP"], sets: ["6-7", "6-1", "7-4"] },

    // Giornata 5
    { teamA: ["LF", "MP"], teamB: ["MaF", "PS"], sets: ["6-2", "7-5"] },
    { teamA: ["MM", "PiS"], teamB: ["MiF", "ZG"], sets: ["6-4", "2-6"] },
    { teamA: ["MeF", "GF"], teamB: ["BC", "MS"], sets: ["6-3", "6-4", "0-1"] },

    // Giornata 6
    { teamA: ["MeF", "PS"], teamB: ["LF", "BC"], sets: ["6-4", "6-5"] },
    { teamA: ["LB", "MS"], teamB: ["MM", "PiS"], sets: ["6-3", "6-0"] },
    { teamA: ["MP", "FP"], teamB: ["LuF", "MiF"], sets: ["2-6", "6-3", "4-2"] },

    // Giornata 7
    { teamA: ["MaF", "LuF"], teamB: ["MiF", "PS"], sets: ["6-0", "7-5"] },

    // Triangolare MeF / ZG / LB
    { teamA: ["MeF"], teamB: ["ZG"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["LB"], teamB: ["ZG"], tipo: "singolo", sets: ["5-4"] },
    { teamA: ["LB"], teamB: ["MeF"], tipo: "singolo", sets: ["5-2"] },

    { teamA: ["LF", "BC"], teamB: ["MP", "FP"], sets: ["6-2", "6-3"] },

    // Giornata 8
    // Triangolare di doppi Fonoroma
    { teamA: ["LuF", "PS"], teamB: ["MP", "LF"], sets: ["4-3"] },
    { teamA: ["LuF", "PS"], teamB: ["PiS", "CM"], sets: ["5-2"] },
    { teamA: ["MP", "LF"], teamB: ["PiS", "CM"], sets: ["5-2"] },

    // Triangolare di singolari Trento
    { teamA: ["MP"], teamB: ["LF"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["PiS"], teamB: ["CM"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["LuF"], teamB: ["PS"], tipo: "singolo", sets: ["5-2"] },

    { teamA: ["MM", "FP"], teamB: ["MS", "BC"], sets: ["7-5", "6-2", "5-3"] },

    // Giornata 9
    { teamA: ["MM", "FP"], teamB: ["LF", "CM"], sets: ["7-6", "6-3"] },
    { teamA: ["MaF", "PiS"], teamB: ["LuF", "MS"], sets: ["3-6", "6-4", "5-2"] },
    { teamA: ["MeF", "BC"], teamB: ["LB", "ZG"], sets: ["6-4", "6-2"] },

    // Giornata 10
    { teamA: ["MeF", "PS"], teamB: ["MM", "MP"], sets: ["6-2", "6-1"] },
    { teamA: ["LB", "MiF"], teamB: ["MaF", "PiS"], sets: ["6-7", "5-3"] },
    { teamA: ["LuF", "GF"], teamB: ["LF", "CM"], sets: ["6-3", "6-4"] },

    // Giornata 11
    { teamA: ["MS", "ZG"], teamB: ["CM", "BC"], sets: ["7-6", "1-3"] },
    { teamA: ["FP", "MP"], teamB: ["MM", "PiS"], sets: ["4-6", "6-0", "6-1"] },
    { teamA: ["LB", "MeF"], teamB: ["LuF", "MaF"], sets: ["6-4", "6-3", "4-3"] },

    // Giornata 12
    { teamA: ["MS", "FP"], teamB: ["LB", "GF"], sets: ["6-4", "6-6"] },
    { teamA: ["MeF", "CM"], teamB: ["BC", "PS"], sets: ["6-1", "6-2", "5-1"] },
    { teamA: ["MP", "ZG"], teamB: ["LF", "MiF"], sets: ["7-6", "6-2"] },

    // Giornata 13
    { teamA: ["MaF", "PiS"], teamB: ["PS", "MS"], sets: ["7-5", "6-3"] },

    // Triangolare GF / BC / CM
    { teamA: ["BC"], teamB: ["GF"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["BC"], teamB: ["CM"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["CM"], teamB: ["GF"], tipo: "singolo", sets: ["5-3"] },

    { teamA: ["MiF", "MeF"], teamB: ["LF", "ZG"], sets: ["6-4", "6-4"] },

    // Giornate 14-17 del calendario: nessun incontro.

    // Giornata 14 effettiva
    { teamA: ["PiS", "FP"], teamB: ["LF", "PS"], sets: ["6-3", "6-3"] },
    { teamA: ["LB", "LuF"], teamB: ["MaF", "MP"], sets: ["6-4", "6-1"] },
    { teamA: ["MM", "GF"], teamB: ["MiF", "MS"], sets: ["6-3", "6-4", "3-5"] },

    // Giornata 15
    { teamA: ["LuF", "MiF"], teamB: ["PiS", "PS"], sets: ["6-4", "5-4"] },
    { teamA: ["LB", "ZG"], teamB: ["LF", "MM"], sets: ["6-1", "6-3"] },
    { teamA: ["MS", "MP"], teamB: ["MaF", "BC"], sets: ["7-5", "4-6"] },

    // Giornata 16
    { teamA: ["LF", "BC"], teamB: ["PS", "MM"], sets: ["5-0", "5-4", "4-4"] },

    // Triangolare MaF / PiS / ZG
    { teamA: ["MaF"], teamB: ["PiS"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["ZG"], teamB: ["MaF"], tipo: "singolo", sets: ["5-4"] },
    { teamA: ["ZG"], teamB: ["PiS"], tipo: "singolo", sets: ["4-4"] },

    { teamA: ["FP", "MiF"], teamB: ["CM", "LB"], sets: ["6-4", "6-4"] },

    // Giornata 17
    { teamA: ["ZG", "PS"], teamB: ["CM", "MiF"], sets: ["7-5", "5-4"] },
    { teamA: ["LuF", "MeF"], teamB: ["LB", "FP"], sets: ["7-5", "5-4"] },
    { teamA: ["BC", "MP"], teamB: ["MaF", "MM"], sets: ["6-4", "6-3", "5-2"] },

    // Giornata 18
    { teamA: ["LuF", "PiS"], teamB: ["MP", "ZG"], sets: ["6-3", "3-6", "2-2"] },
    { teamA: ["FP", "LF"], teamB: ["LB", "MM"], sets: ["6-4", "3-6", "7-5"] },
    { teamA: ["MeF", "MiF"], teamB: ["MaF", "BC"], sets: ["6-3", "6-2", "5-4"] }
  ]
},
"2025-inverno": {
  teams: ["LF", "MaF", "MiF", "PS", "FP", "LB", "BC", "LuF", "PiS", "ZG", "MP", "MM", "MB", "SS", "AR"],
  giornate: [
    { LF: 1.25, MaF: 1.75, MiF: 0.25, PS: 1.25, LB: 0.25, BC: 2.75, LuF: 2.75, PiS: 2.75, ZG: 0.25, MM: 1.75, MB: 2.75, SS: 0.25 },
    { LF: 0.5, MaF: 0.75, MiF: 0.5, PS: 0.5, FP: 2.5, LB: 2.5, BC: 0.75, PiS: 2.25, ZG: 2.5, MM: 2.5, MB: 2.25, SS: 0.5 },
    { LF: 0.5, MaF: 2.5, FP: 2.75, LB: 2, BC: 2.5, LuF: 2.75, PiS: 1, ZG: 2, MP: 1, MM: 0.5, MB: 0.25, SS: 0.25 },
    { LF: 2.75, MiF: 2.75, PS: 1.5, FP: 1.5, LB: 2.75, BC: 2.75, LuF: 1.5, PiS: 0.25, ZG: 0.25, MP: 1.5, MM: 0.25, SS: 0.25 },
    { LF: 0.6, MaF: 1.2, PS: 2.75, LB: 1.8, BC: 1.2, LuF: 2.4, PiS: 1.8, ZG: 0.25, MP: 2.75, AR: 0.25 },
    { LF: 1.2, MiF: 1.6, FP: 1.8, LB: 1.2, LuF: 2.4, ZG: 1.8, MP: 0.6, MB: 2.4, SS: 0.8 },
    { LF: 0.5, MaF: 0.55, MiF: 2.5, FP: 0.25, LuF: 2.75, PiS: 1.35, ZG: 0.5, MP: 2.9, MB: 2.5, SS: 0.25, AR: 2.75 },
    { MaF: 2.5, MiF: 0.5, PS: 0.5, FP: 2.5, LB: 1, LuF: 2, PiS: 2, MP: 0.5, MM: 2.5, MB: 1, SS: 0.5, AR: 2.5 },
    { LF: 2.75, MaF: 0.5, MiF: 0.5, PS: 0.75, LB: 0.75, LuF: 2.5, PiS: 2.75, ZG: 2.25, MP: 2.25, MM: 0.25, MB: 0.25, AR: 2.5 },
    { LF: 0.25, MaF: 2.75, MiF: 2, PS: 2.5, FP: 2.75, LB: 1, LuF: 2.5, PiS: 0.5, ZG: 0.25, MP: 2, MM: 0.5, AR: 1 },
    { LF: 2.5, MaF: 0.5, MiF: 0.5, PS: 2.5, FP: 1, LB: 2.5, LuF: 2, PiS: 1, ZG: 0.5, MP: 2, MM: 0.5, AR: 2.5 },
    { LF: 0.75, MaF: 0.5, MiF: 2.5, FP: 2.5, LB: 2.25, BC: 2.25, AR: 0.5 },
    { LF: 0.75, MaF: 0.75, FP: 0.5, LB: 0.75, BC: 2.25, LuF: 2.25, PiS: 2.5, ZG: 0.5, MP: 2.25, MM: 0.75, MB: 2.5, SS: 2.25 },
    { LF: 0.75, MiF: 2.25, PS: 0.75, FP: 0.75, BC: 2.25, LuF: 2.75, PiS: 0.25, ZG: 2.25, MP: 2.25, MM: 2.75, MB: 0.75, SS: 0.25 },
    { LF: 2, MaF: 1, PS: 2.75, LB: 1.5, BC: 1, LuF: 1.5, PiS: 1.5, ZG: 0.25, MP: 1.5, MM: 2.75, MB: 2, SS: 0.25 },
    { LF: 0.75, MaF: 0.75, MiF: 2.75, LB: 2.75, BC: 0.25, LuF: 0.25, ZG: 2.75, MP: 2.25, MM: 0.25, MB: 2.75, SS: 0.25, AR: 2.25 },
    { LF: 0.5, MaF: 0.75, PS: 2.25, FP: 2.5, LB: 2.25, BC: 0.5, LuF: 1.5, PiS: 0.75, ZG: 2.5, MP: 1.5, MM: 1.5, AR: 1.5 },
    { MaF: 1, MiF: 0.25, PS: 2.75, LB: 2.5, LuF: 0.5, PiS: 0.5, ZG: 0.25, MP: 2.5, MM: 2, MB: 2.75, SS: 2, AR: 1 },
    { LF: 0.5, MaF: 2.5, MiF: 0.25, PS: 1.5, FP: 2.5, LB: 2.75, BC: 1.5, PiS: 0.5, ZG: 0.25, MB: 1.5, SS: 2.75, AR: 1.5 },
    { LF: 1, MiF: 0.5, PS: 0.5, FP: 2, BC: 2.5, LuF: 0.5, PiS: 2.5, MP: 2.5, MM: 2, MB: 1, SS: 0.5, AR: 2.5 },
    { MaF: 1, MiF: 2, PS: 2, FP: 2.25, LB: 0.75, BC: 1, LuF: 2.25, ZG: 2, MP: 0.75, MM: 2, SS: 1, AR: 1 },
    { LF: 2, PS: 0.5, FP: 2.5, LB: 0.75, BC: 2.25, PiS: 1, ZG: 2.5, MP: 2, MM: 1, SS: 0.75, AR: 0.5 },
    { LF: 1.75, MaF: 2.5, MiF: 1.25, PS: 0.75, FP: 1.75, LB: 1.25, BC: 2.25, LuF: 0.5, PiS: 2.25, MP: 2.5, SS: 0.5 },
    { LF: 2.75, MaF: 2.75, MiF: 0.25, PS: 1.25, FP: 1.5, LB: 1.5, BC: 1.75, LuF: 1.5, ZG: 1.75, MP: 1.5, MM: 0.25, MB: 1.25 },
    { LF: 0.5, MaF: 1.5, MiF: 2.5, LB: 1.85, BC: 2.5, LuF: 1.35, PiS: 1.5, ZG: 1.5, MP: 1.6, MM: 1.5 },
    { LF: 2.75, MaF: 0.5, MiF: 2.25, PS: 2.5, FP: 2.75, BC: 0.25, LuF: 2.25, PiS: 2.5, ZG: 0.25, MP: 0.75, MM: 0.75 },
    { MaF: 2.5, MiF: 0.5, PS: 2.5, FP: 2.25, LB: 0.75, LuF: 2.25, PiS: 0.5, ZG: 0.25, MP: 0.75, MM: 2.75, MB: 2.75, SS: 0.25 },
    { LF: 1.5, MiF: 0.9, PS: 1.1, LB: 1.6, BC: 2.1, LuF: 2.4, PiS: 1.9, MP: 1.5, AR: 0.8 }
  ],

  match: [
    // Giornata 1
    { teamA: ["PiS", "BC"], teamB: ["ZG", "MiF"], sets: ["6-3", "6-0", "6-4"] },
    { teamA: ["LuF", "MB"], teamB: ["LB", "SS"], sets: ["6-4", "6-2", "2-0"] },
    { teamA: ["MaF", "MM"], teamB: ["LF", "PS"], sets: ["7-6", "0-5"] },

    // Giornata 2
    { teamA: ["ZG", "FP"], teamB: ["MiF", "SS"], sets: ["6-3", "6-2"] },
    { teamA: ["PiS", "MB"], teamB: ["MaF", "BC"], sets: ["6-3", "6-2", "0-4"] },
    { teamA: ["LB", "MM"], teamB: ["LF", "PS"], sets: ["6-3", "6-0"] },

    // Giornata 3
    { teamA: ["BC", "MaF"], teamB: ["LF", "MM"], sets: ["6-1", "7-6"] },
    { teamA: ["LuF", "FP"], teamB: ["MB", "SS"], sets: ["6-1", "6-2", "6-1"] },
    { teamA: ["LB", "ZG"], teamB: ["PiS", "MP"], sets: ["6-0", "3-6", "4-2"] },

    // Giornata 4
    { teamA: ["LB", "LF"], teamB: ["ZG", "MM"], sets: ["6-2", "6-0", "6-2"] },
    { teamA: ["LuF", "MP"], teamB: ["FP", "PS"], sets: ["6-4", "4-6", "1-1"] },
    { teamA: ["BC", "MiF"], teamB: ["SS", "PiS"], sets: ["6-2", "6-2", "6-0"] },

    // Giornata 5
    { teamA: ["MP", "PS"], teamB: ["ZG", "AR"], sets: ["6-3", "6-1", "3-2"] },
    { teamA: ["LuF", "PiS"], teamB: ["BC", "LF"], sets: ["4-2"] },
    { teamA: ["LB", "MaF"], teamB: ["BC", "LF"], sets: ["5-1"] },
    { teamA: ["LuF", "PiS"], teamB: ["LB", "MaF"], sets: ["5-0"] },
    { teamA: ["LuF"], teamB: ["PiS"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["BC"], teamB: ["LF"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["LB"], teamB: ["MaF"], tipo: "singolo", sets: ["5-1"] },

    // Giornata 6
    { teamA: ["MiF"], teamB: ["SS"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["MB"], teamB: ["MiF"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["MB"], teamB: ["SS"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["LuF", "ZG"], teamB: ["LB", "MP"], sets: ["5-3"] },
    { teamA: ["LB", "MP"], teamB: ["FP", "LF"], sets: ["2-4"] },
    { teamA: ["LuF", "ZG"], teamB: ["FP", "LF"], sets: ["5-1"] },
    { teamA: ["LuF"], teamB: ["ZG"], tipo: "singolo", sets: ["5-1"] },
    { teamA: ["LB"], teamB: ["MP"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["FP"], teamB: ["LF"], tipo: "singolo", sets: ["5-0"] },

    // Giornata 7
    { teamA: ["MP"], teamB: ["PiS"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["PiS"], teamB: ["MaF"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["MP"], teamB: ["MaF"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["MB", "MiF"], teamB: ["ZG", "LF"], sets: ["6-4", "6-4"] },
    { teamA: ["LuF", "AR"], teamB: ["FP", "SS"], sets: ["6-1", "6-2", "6-2"] },

    // Giornata 8
    { teamA: ["MM", "AR"], teamB: ["PS", "SS"], sets: ["6-4", "6-1"] },
    { teamA: ["LuF", "PiS"], teamB: ["LB", "MB"], sets: ["6-4", "4-6", "7-6"] },
    { teamA: ["FP", "MaF"], teamB: ["MP", "MiF"], sets: ["6-3", "7-5"] },

    // Giornata 9
    { teamA: ["LuF", "AR"], teamB: ["MiF", "MaF"], sets: ["6-2", "6-4", "4-4"] },
    { teamA: ["ZG", "MP"], teamB: ["LB", "PS"], sets: ["6-3", "5-5"] },
    { teamA: ["LF", "PiS"], teamB: ["MB", "MM"], sets: ["6-2", "6-2", "1-0"] },

    // Giornata 10
    { teamA: ["LuF", "PS"], teamB: ["MM", "PiS"], sets: ["6-3", "6-4"] },
    { teamA: ["MaF", "FP"], teamB: ["LF", "ZG"], sets: ["6-1", "6-2", "4-0"] },
    { teamA: ["MiF", "MP"], teamB: ["LB", "AR"], sets: ["1-6", "6-3", "6-4"] },

    // Giornata 11
    { teamA: ["LF", "LB"], teamB: ["MiF", "MaF"], sets: ["7-6", "3-2"] },
    { teamA: ["PS", "AR"], teamB: ["ZG", "MM"], sets: ["6-4", "7-6"] },
    { teamA: ["LuF", "MP"], teamB: ["FP", "PiS"], sets: ["4-6", "6-0", "2-0"] },

    // Giornata 12
    { teamA: ["FP", "MiF"], teamB: ["AR", "MaF"], sets: ["6-3", "6-1", "4-4"] },
    { teamA: ["LB", "BC"], teamB: ["ML", "LF"], sets: ["6-3", "6-2", "0-4"] },

    // Giornata 13
    { teamA: ["MB", "PiS"], teamB: ["ZG", "FP"], sets: ["6-4", "4-1"] },
    { teamA: ["MP", "BC"], teamB: ["LF", "MaF"], sets: ["6-2", "5-5"] },
    { teamA: ["LuF", "SS"], teamB: ["LB", "MM"], sets: ["6-3", "7-6", "4-5"] },

    // Giornata 14
    { teamA: ["LuF", "MM"], teamB: ["SS", "PiS"], sets: ["6-1", "7-6", "4-0"] },
    { teamA: ["MiF", "BC"], teamB: ["LF", "MB"], sets: ["7-5", "3-3"] },
    { teamA: ["MP", "ZG"], teamB: ["PS", "FP"], sets: ["7-5", "4-4"] },

    // Giornata 15
    { teamA: ["PS", "MM"], teamB: ["SS", "ZG"], sets: ["6-0", "6-4", "5-2"] },
    { teamA: ["LF", "MB"], teamB: ["BC", "MaF"], sets: ["4-6", "6-1", "6-0"] },
    { teamA: ["LB", "MP"], teamB: ["LuF", "PiS"], sets: ["7-6", "5-7"] },

    // Giornata 16
    { teamA: ["MB", "MiF"], teamB: ["LuF", "SS"], sets: ["6-3", "6-3", "5-4"] },
    { teamA: ["LB", "ZG"], teamB: ["BC", "MM"], sets: ["6-4", "6-2", "4-1"] },
    { teamA: ["MP", "AR"], teamB: ["LF", "MaF"], sets: ["7-5", "5-5"] },

    // Giornata 17
    { teamA: ["ZG", "FP"], teamB: ["LF", "BC"], sets: ["7-6", "2-1"] },
    { teamA: ["LuF", "AR"], teamB: ["MP", "MM"], sets: ["6-4", "6-7"] },
    { teamA: ["LB", "PS"], teamB: ["MaF", "PiS"], sets: ["6-4", "5-5"] },

    // Giornata 18
    { teamA: ["MB", "PS"], teamB: ["ZG", "MiF"], sets: ["6-3", "6-0", "5-2"] },
    { teamA: ["MB", "LB"], teamB: ["LuF", "PiS"], sets: ["7-6", "4-3"] },
    { teamA: ["MM", "SS"], teamB: ["MaF", "AR"], sets: ["7-6", "3-6", "1-0"] },

    // Giornata 19
    { teamA: ["FP", "MaF"], teamB: ["LF", "PiS"], sets: ["6-3", "5-3"] },
    { teamA: ["PS", "BC"], teamB: ["MB", "AR"], sets: ["4-6", "6-4"] },
    { teamA: ["LB", "SS"], teamB: ["MiF", "ZG"], sets: ["6-3", "6-3", "4-1"] },

    // Giornata 20
    { teamA: ["FP", "MM"], teamB: ["LF", "MB"], sets: ["3-6", "7-5", "2-0"] },
    { teamA: ["MP", "AR"], teamB: ["LuF", "SS"], sets: ["6-2", "7-6"] },
    { teamA: ["BC", "PiS"], teamB: ["PS", "MiF"], sets: ["6-4", "7-5"] },

    // Giornata 21
    { teamA: ["PS", "MM"], teamB: ["BC", "AR"], sets: ["6-4", "0-6", "2-1"] },
    { teamA: ["LuF", "FP"], teamB: ["LB", "MP"], sets: ["6-4", "5-5"] },
    { teamA: ["MiF", "ZG"], teamB: ["MaF", "SS"], sets: ["6-4", "4-6", "2-1"] },

    // Giornata 22
    { teamA: ["FP", "ZG"], teamB: ["PS", "AR"], sets: ["6-4", "6-2"] },
    { teamA: ["ML", "BC"], teamB: ["LB", "SS"], sets: ["6-4", "6-2", "0-6"] },
    { teamA: ["LF", "MP"], teamB: ["MM", "PiS"], sets: ["4-6", "6-3", "7-5"] },

    // Giornata 23
    { teamA: ["LF", "FP"], teamB: ["MiF", "LB"], sets: ["7-5", "2-3"] },
    { teamA: ["MaF", "MP"], teamB: ["LuF", "SS"], sets: ["7-6", "4-2"] },
    { teamA: ["BC", "PiS"], teamB: ["ML", "PS"], sets: ["6-2", "6-0", "2-5"] },

    // Giornata 24: correzione MP-MP → LB-MP
    { teamA: ["LuF", "FP"], teamB: ["LB", "MP"], sets: ["6-2", "3-6"] },
    { teamA: ["BC", "ZG"], teamB: ["PS", "MB"], sets: ["7-5", "3-5"] },
    { teamA: ["LF", "MaF"], teamB: ["MiF", "MM"], sets: ["6-4", "6-0", "5-2"] },

    // Giornata 25
    { teamA: ["MiF", "BC"], teamB: ["ML", "LF"], sets: ["6-2", "7-5"] },
    { teamA: ["MM", "PiS"], teamB: ["MaF", "ZG"], sets: ["7-6", "3-6"] },
    { teamA: ["LuF"], teamB: ["MP"], tipo: "singolo", sets: ["5-2"] },
    { teamA: ["LB"], teamB: ["LuF"], tipo: "singolo", sets: ["5-4"] },
    { teamA: ["MP"], teamB: ["LB"], tipo: "singolo", sets: ["4-1"] },

    // Giornata 26
    { teamA: ["LF", "FP"], teamB: ["BC", "ZG"], sets: ["6-4", "6-1", "6-0"] },
    { teamA: ["PS", "PiS"], teamB: ["ML", "MaF"], sets: ["6-3", "6-4"] },
    { teamA: ["LuF", "MiF"], teamB: ["MM", "MP"], sets: ["6-1", "6-4", "3-4"] },

    // Giornata 27
    { teamA: ["MaF", "PS"], teamB: ["MiF", "PiS"], sets: ["7-6", "4-2"] },
    { teamA: ["LuF", "FP"], teamB: ["LB", "MP"], sets: ["6-2", "5-5"] },
    { teamA: ["MM", "MB"], teamB: ["ZG", "SS"], sets: ["6-2", "6-3", "6-1"] },

    // Giornata 28
    // Triangolare LuF / LB / AR: punteggi non presenti nel foglio, escluso dai match.
    { teamA: ["MP", "MiF"], teamB: ["PS", "PiS"], sets: ["2-2"] },
    { teamA: ["BC", "LF"], teamB: ["MP", "MiF"], sets: ["6-2"] },
    { teamA: ["PS", "PiS"], teamB: ["BC", "LF"], sets: ["4-4"] },
    { teamA: ["PiS"], teamB: ["PS"], tipo: "singolo", sets: ["4-0"] },
    { teamA: ["MP"], teamB: ["MiF"], tipo: "singolo", sets: ["5-0"] },
    { teamA: ["BC"], teamB: ["LF"], tipo: "singolo", sets: ["5-0"] }
  ]
},
"1-singolo": {
  teams: ["LF", "MiF", "ML", "PS", "MaF", "FP"],
  giornate: [
    { LF: 2, MiF: 0 },
    { LF: 1, ML: 1 },
    { LF: 1.5, PS: 0.5 },
    { LF: 1.5, MaF: 0.5 },
    { LF: 1, FP: 1 },
    { MiF: 0, ML: 2 },
    { MiF: 2, PS: 0 },
    { MiF: 1, MaF: 1 },
    { MiF: 0, FP: 2 },
    { ML: 2, PS: 0 },
    { ML: 2, MaF: 0 },
    { ML: 1, FP: 1 },
    { PS: 2, MaF: 0 },
    { PS: 1.5, FP: 0.5 },
    { MaF: 0, FP: 2 }
  ],
  match: [
    {
      teamA: ["LF"],
      teamB: ["MiF"],
      tipo: "singolo",
      sets: ["4-1", "4-0"]
    },
    {
      teamA: ["LF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["2-4", "4-1"]
    },
    {
      teamA: ["LF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["4-2", "2-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-2", "2-2"]
    },
    {
      teamA: ["LF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["4-3", "2-3"]
    },
    {
      teamA: ["MiF"],
      teamB: ["ML"],
      tipo: "singolo",
      sets: ["0-4", "1-4"]
    },
    {
      teamA: ["MiF"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["4-0", "4-1"]
    },
    {
      teamA: ["MiF"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-3", "0-4"]
    },
    {
      teamA: ["MiF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["2-4", "1-4"]
    },
    {
      teamA: ["ML"],
      teamB: ["PS"],
      tipo: "singolo",
      sets: ["4-1", "4-1"]
    },
    {
      teamA: ["ML"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-0", "4-2"]
    },
    {
      // Ritiro: giocatore ritirato non specificato.
      teamA: ["ML"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["4-2"]
    },
    {
      teamA: ["PS"],
      teamB: ["MaF"],
      tipo: "singolo",
      sets: ["4-3", "2-1"]
    },
    {
      teamA: ["PS"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["4-3", "0-0"]
    },
    {
      teamA: ["MaF"],
      teamB: ["FP"],
      tipo: "singolo",
      sets: ["1-4", "1-4"]
    }
  ]
},



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
  if (!bars.length || !logos.length) return;

  const screenWidth = window.innerWidth;
  const isDesktop = screenWidth >= 992;

  const scaleFactor = screenWidth < 768 ? 0.4 : screenWidth < 992 ? 0.75 : 0.45;
  const barThickness = screenWidth < 768 ? 1.25 : screenWidth < 992 ? 1.6 : 2;
  const spacingY = screenWidth < 992 ? 0.35 : 0.25;
  const totalRowHeight = barThickness + spacingY;

  const colSpacing = 2.5;
  const baseBottom = 4.5;
  const logoBottom = 1.2;

  gsap.killTweensOf([bars, logos]);

  if (isDesktop) {
    gsap.set(wrapper, { position: "relative" });

    bars.forEach((bar, i) => {
      gsap.set(bar, {
        position: "absolute",
        left: `${i * colSpacing}rem`,
        bottom: `${baseBottom}rem`,
        width: `${barThickness}rem`,
        height: "0rem",
        autoAlpha: 0,
        x: 0,
        y: 0
      });
    });

    logos.forEach((logo, i) => {
      gsap.set(logo, {
        position: "absolute",
        left: `${i * colSpacing + barThickness / 2}rem`,
        bottom: `${logoBottom}rem`,
        autoAlpha: 0,
        xPercent: -50,
        x: 0,
        y: 0
      });
    });
 } else {
  bars.forEach(bar => {
    gsap.set(bar, { clearProps: "all" });
    bar.style.position = "";
    bar.style.left = "";
    bar.style.right = "";
    bar.style.top = "";
    bar.style.bottom = "";
    bar.style.width = "0rem";
    bar.style.height = `${barThickness}rem`;
  });

  logos.forEach(logo => {
    gsap.set(logo, { clearProps: "all" });
    logo.style.position = "";
    logo.style.left = "";
    logo.style.right = "";
    logo.style.top = "";
    logo.style.bottom = "";
  });

  gsap.set(bars, {
    autoAlpha: 0,
    x: 0,
    y: 0
  });

  gsap.set(logos, {
    autoAlpha: 0,
    x: 0,
    y: 0
  });
}

  const punteggi = Object.fromEntries(teams.map(t => [t, 0]));
  const lastScores = Object.fromEntries(teams.map(t => [t, 0]));
  const tl = gsap.timeline();

  tl.to([bars, logos], { autoAlpha: 1, duration: 0.4 });

  giornate.forEach((giornata, index) => {
    teams.forEach(team => {
      punteggi[team] += giornata[team] || 0;
    });

    const classifica = [...teams].sort((a, b) => punteggi[b] - punteggi[a]);

    classifica.forEach((team, i) => {
      const bar = wrapper.querySelector(`.team_bar[data-team="${team}"]`);
      const logo = wrapper.querySelector(`.team_logo[data-team="${team}"]`);
      if (!bar || !logo) return;

      const scoreEl = bar.querySelector(".team_score");
      const barSize = `${punteggi[team] * scaleFactor}rem`;
      const label = `giornata${index}`;

      if (isDesktop) {
        tl.to(bar, {
          left: `${i * colSpacing}rem`,
          height: barSize,
          duration: 2,
          ease: "none"
        }, label);

        tl.to(logo, {
          left: `${i * colSpacing + barThickness / 2}rem`,
          autoAlpha: 1,
          duration: 2,
          ease: "none"
        }, label);
      } else {
  const y = `${i * totalRowHeight}rem`;
  const logoOffset = (barThickness - 2) / 2;

  tl.to(bar, {
    y,
    width: barSize,
    duration: 2,
    ease: "none"
  }, label);

  tl.to(logo, {
    y: `${i * totalRowHeight + logoOffset}rem`,
    autoAlpha: 1,
    duration: 2,
    ease: "none"
  }, label);
}

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
        }, label);
      }
    });
  });
}
const datiGiocatori = {
  "MiF": { tennista: "Michele Fornari", annoNascita: 1953, trofei: 2, oro: 0, argento: 0, bronzo: 2, matchVinti: 12, matchPersi: 35, matchPari: 3, singoliVinti: 1, singoliPersi: 14 },
  "LT": { tennista: "Luca Travaglio", annoNascita: 1947, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "FP": { tennista: "Filippo Pedroli", annoNascita: 1960, trofei: 23, oro: 8, argento: 9, bronzo: 6, matchVinti: 20, matchPersi: 21, matchPari: 3, singoliVinti: 8, singoliPersi: 5 },
  "LF": { tennista: "Luca Finzi", annoNascita: 1953, trofei: 21, oro: 7, argento: 7, bronzo: 7, matchVinti: 26, matchPersi: 15, matchPari: 4, singoliVinti: 15, singoliPersi: 9 },
  "MaF": { tennista: "Mario Fornari", annoNascita: 1962, trofei: 8, oro: 0, argento: 3, bronzo: 5, matchVinti: 22, matchPersi: 25, matchPari: 2, singoliVinti: 2, singoliPersi: 10 },
  "LB": { tennista: "Luca Belitrandi", annoNascita: 1967, trofei: 15, oro: 9, argento: 3, bronzo: 3 },
  "ML": { tennista: "Marco Levi", annoNascita: 1953, trofei: 14, oro: 7, argento: 6, bronzo: 1, matchVinti: 29, matchPersi: 13, matchPari: 3, singoliVinti: 14, singoliPersi: 2 },
  "PS": { tennista: "Paolo Semenza", annoNascita: 1953, trofei: 8, oro: 0, argento: 1, bronzo: 7, matchVinti: 15, matchPersi: 14, matchPari: 5, singoliVinti: 4, singoliPersi: 4 },
  "BC": { tennista: "Beppe Colli", annoNascita: 1961, trofei: 4, oro: 0, argento: 1, bronzo: 3 },
  "LuF": { tennista: "Luca Fornari", annoNascita: 1993, trofei: 7, oro: 4, argento: 3, bronzo: 0 },
  "MP": { tennista: "Martino Prati", annoNascita: 1994, trofei: 1, oro: 0, argento: 1, bronzo: 0 },
  "ZG": { tennista: "Zeno Gorini", annoNascita: 1994, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "PiS": { tennista: "Pietro Semenza", annoNascita: 1996, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MM": { tennista: "Mario Marangione", annoNascita: 1959, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "CM": { tennista: "Carlo Momigliano", annoNascita: 1953, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MeF": { tennista: "Matteo Fornari", annoNascita: 1995, trofei: 2, oro: 1, argento: 1, bronzo: 0 },
  "MB": { tennista: "Massimo Bergia", annoNascita: 1959, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "MS": { tennista: "Mattia Semenza", annoNascita: 1989, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "GF": { tennista: "Giovanni Fornari", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AR": { tennista: "Agustin Rojas", trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "SS": { tennista: "Stefano Semenza", annoNascita: 1992, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AB": { tennista: "Alessandro Belitrandi", annoNascita: 2006, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "LeF": { tennista: "Leone Finzi", annoNascita: 1994, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "AoB": { tennista: "Antonio Bergamasco", annoNascita: 1957, trofei: 1, oro: 0, argento: 0, bronzo: 1 },
  "PF": { tennista: "Pier Silvio Forziano", annoNascita: 1997, trofei: 1, oro: 1, argento: 0, bronzo: 0 },
  "MaB": { tennista: "Massimo Bergamasco", annoNascita: 2001, trofei: 1, oro: 0, argento: 0, bronzo: 1 },
  "RB": { tennista: "Ruggero Bottazzi", annoNascita: 1960, trofei: 0, oro: 0, argento: 0, bronzo: 0 },
  "FG": { tennista: "Filippo Groppi", annoNascita: 1994, trofei: 0, oro: 0, argento: 0, bronzo: 0 },

  // Aggiungi tutti gli altri...
};

// === CALCOLO STATS GLOBALI (DOPPIO + SINGOLARE) ===
function calcolaStatisticheGlobali() {
  const stats = {};
  const torneiGiocati = {};

  Object.entries(stagioni).forEach(([stagioneKey, stagione]) => {
    const { teams, match = [], giornate } = stagione;

    // Inizializzazione giocatori
    teams.forEach(p => {
     
if (!stats[p]) {
  const info = datiGiocatori[p] || {};

  stats[p] = {
    matchVinti: info.matchVinti ?? 0,
    matchPersi: info.matchPersi ?? 0,
    matchPari: info.matchPari ?? 0,
    singoliVinti: info.singoliVinti ?? 0,
    singoliPersi: info.singoliPersi ?? 0,
    setVinti: info.setVinti ?? 0,
    setPersi: info.setPersi ?? 0,
    gameVinti: info.gameVinti ?? 0,
    gamePersi: info.gamePersi ?? 0,
    matchTotali: 0,
    puntiTotali: 0,
    torneiGiocati: 0
  };

  torneiGiocati[p] = new Set();
}

      torneiGiocati[p].add(stagioneKey);
    });

    // === MATCH ===
    match.forEach(({ teamA, teamB, sets, ritiro, tipo }) => {
      const isSingolo = tipo === "singolo";

      const keyA = teamA.join("|");
      const keyB = teamB.join("|");
      const gameStats = { [keyA]: 0, [keyB]: 0 };
      const setStats = { [keyA]: 0, [keyB]: 0 };

      sets.forEach(set => {
        const isObj = typeof set === "object";
        const isTiebreak = isObj && set.tiebreak;
        const score = isObj ? set.score : set;
        const [a, b] = score.split("-").map(Number);

        if (!isTiebreak) {
          gameStats[keyA] += a;
          gameStats[keyB] += b;

          // Set vinto:
          if (isSingolo) {
            if (a >= 5 || b >= 5) {
              if (a > b) setStats[keyA]++;
              else if (b > a) setStats[keyB]++;
            }
          
} else {
  if (
    ((a >= 6 || b >= 6) && Math.abs(a - b) >= 2) ||
    (a === 7 && b === 6) ||
    (a === 6 && b === 7)
  ) {
    if (a > b) setStats[keyA]++;
    else if (b > a) setStats[keyB]++;
  }
}

        } else {
          // tie-break → solo set
          if (a > b) setStats[keyA]++;
          else if (b > a) setStats[keyB]++;
        }
      });

      // === ESITO MATCH ===
      let winner = null;
      let isDraw = false;

      const setsA = setStats[keyA];
const setsB = setStats[keyB];

if (ritiro === "A" || ritiro === "B") {
  // Se il match era già deciso dopo i primi due set, il ritiro non cambia il vincitore
  if (setsA > setsB) {
    winner = teamA;
  } else if (setsB > setsA) {
    winner = teamB;
  } else {
    // Match non ancora deciso: il ritiro dà la vittoria all'altra squadra
    winner = ritiro === "A" ? teamB : teamA;
  }
} else {
  if (setsA > setsB) {
    winner = teamA;
  } else if (setsB > setsA) {
    winner = teamB;
  } else {
    const lastSet = sets[sets.length - 1];
    const lastScore = typeof lastSet === "object" ? lastSet.score : lastSet;
    const [a, b] = lastScore.split("-").map(Number);

   
const ultimoSetConcluso =
  ((a >= 6 || b >= 6) && Math.abs(a - b) >= 2) ||
  (a === 7 && b === 6) ||
  (a === 6 && b === 7);

if (ultimoSetConcluso) {
  isDraw = true;
} else if (a > b) {
  winner = teamA;
} else if (b > a) {
  winner = teamB;
} else if (!isSingolo) {
  isDraw = true;
}
}

}

      // === SET E GAME (sempre globali)
      teamA.filter(p => stats[p]).forEach(p => {
        stats[p].setVinti += setStats[keyA];
        stats[p].setPersi += setStats[keyB];
        stats[p].gameVinti += gameStats[keyA];
        stats[p].gamePersi += gameStats[keyB];
      });

      teamB.filter(p => stats[p]).forEach(p => {
        stats[p].setVinti += setStats[keyB];
        stats[p].setPersi += setStats[keyA];
        stats[p].gameVinti += gameStats[keyB];
        stats[p].gamePersi += gameStats[keyA];
      });

      // === VITTORIE / SCONFITTE
      if (winner) {
        if (isSingolo) {
          winner.forEach(p => {
  if (stats[p]) stats[p].singoliVinti++;
});
(winner === teamA ? teamB : teamA).forEach(p => {
  if (stats[p]) stats[p].singoliPersi++;
});

        } else {
         winner.forEach(p => {
  if (stats[p]) stats[p].matchVinti++;
});
(winner === teamA ? teamB : teamA).forEach(p => {
  if (stats[p]) stats[p].matchPersi++;
});

        }
      } else if (isDraw && !isSingolo) {
  teamA.forEach(p => {
    if (stats[p]) stats[p].matchPari++;
  });
  teamB.forEach(p => {
    if (stats[p]) stats[p].matchPari++;
  });
}

    });

    // === GIORNATE (matchTotali + punti)
    giornate.forEach(giornata => {
      Object.entries(giornata).forEach(([p, punti]) => {
        if (punti != null && stats[p]) {
          stats[p].matchTotali++;
          stats[p].puntiTotali += punti;
        }
      });
    });
  });

  Object.keys(stats).forEach(p => {
    stats[p].torneiGiocati = torneiGiocati[p]?.size || 0;
  });

  return stats;
}
function mostraStatisticheGiocatore() {
  const playerPage = document.querySelector(".player-page");
  if (!playerPage) return;

  const playerKey = playerPage.dataset.player;
  if (!playerKey) return;

  const stats = calcolaStatisticheGlobali();
  const s = stats[playerKey];
  const info = datiGiocatori[playerKey] || {};

  if (!s) return;

  const setText = (selector, value) => {
    const el = playerPage.querySelector(selector);
    if (el) el.textContent = value;
  };

  const percentualeVittorie = s.matchTotali > 0
    ? (s.matchVinti / s.matchTotali * 100).toFixed(1) + "%"
    : "-";

  const mediaPunti = s.matchTotali > 0
    ? (s.puntiTotali / s.matchTotali).toFixed(2)
    : "0.00";

  setText(".player-name", info.tennista || playerKey);
  setText(".player-trofei", info.trofei ?? 0);
  setText(".player-oro", info.oro ?? 0);
  setText(".player-argento", info.argento ?? 0);
  setText(".player-bronzo", info.bronzo ?? 0);

  setText(".player-tornei", s.torneiGiocati);
  setText(".player-match", s.matchTotali);
  setText(".player-vinte", s.matchVinti);
  setText(".player-perse", s.matchPersi);
  setText(".player-pari", s.matchPari);
  setText(".player-percentuale", percentualeVittorie);

  setText(".player-singoli-vinti", s.singoliVinti ?? 0);
  setText(".player-singoli-persi", s.singoliPersi ?? 0);

  setText(".player-set-vinti", s.setVinti);
  setText(".player-set-persi", s.setPersi);
  setText(".player-game-vinti", s.gameVinti);
  setText(".player-game-persi", s.gamePersi);
  setText(".player-punti", s.puntiTotali.toFixed(2));
  setText(".player-media", mediaPunti);
}


function mostraAnteprimeGiocatori() {
  const cards = document.querySelectorAll(".card-giocatore[data-player]");
  if (!cards.length) return;

  const stats = calcolaStatisticheGlobali();

  cards.forEach(card => {
    const playerKey = card.dataset.player;
    const s = stats[playerKey];

    if (!s) return;

    const setText = (selector, value) => {
      const el = card.querySelector(selector);
      if (el) el.textContent = value;
    };

    const mediaPunti = s.matchTotali > 0
  ? (s.puntiTotali / s.matchTotali).toFixed(2)
  : "-";

setText(".player-media", mediaPunti);
    setText(".player-tornei", s.torneiGiocati);
  });
}

    function mostraStatisticheAllTime() {
  const stats = calcolaStatisticheGlobali();
  const wrapper = document.querySelector(`.statistiche-wrapper[data-stagione="all-time"]`);
  if (!wrapper) return;

  const container = document.createElement("div");
  wrapper.appendChild(container);

  const scrollWrapper = document.createElement("div");
  scrollWrapper.className = "stats-table-wrapper";
  container.appendChild(scrollWrapper);

  const table = document.createElement("table");
  table.className = "stats-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Sigla</th>
        <th>Tennista</th>
        <th>Anno di nascita</th>
        <th>Tornei</th>
        <th>Trofei</th>
        <th>Oro</th>
        <th>Argento</th>
        <th>Bronzo</th>
        <th>Match</th>
        <th>Vinte</th>
        <th>Pari</th>
        <th>Perse</th>
        <th>Punti Totali</th>
        <th>Media Punti</th>
        <th>% Vittorie</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;
  scrollWrapper.appendChild(table);

  const body = table.querySelector("tbody");
  Object.entries(stats)
    .sort(([, a], [, b]) => b.torneiGiocati - a.torneiGiocati)
    .forEach(([giocatore, s]) => {
      const info = datiGiocatori[giocatore] || {};
      const percentualeVittorie = s.matchTotali > 0
        ? (s.matchVinti / s.matchTotali * 100).toFixed(1) + "%"
        : "-";

      const mediaPunti = s.matchTotali > 0
        ? (s.puntiTotali / s.matchTotali).toFixed(2)
        : "0.00";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${giocatore}</td>
        <td>${info.tennista || "-"}</td>
        <td>${info.annoNascita ?? "-"}</td>
        <td>${s.torneiGiocati}</td>
        <td>${info.trofei ?? "-"}</td>
        <td>${info.oro ?? "-"}</td>
        <td>${info.argento ?? "-"}</td>
        <td>${info.bronzo ?? "-"}</td>
        <td>${s.matchTotali}</td>
        <td>${s.matchVinti}</td>
        <td>${s.matchPari}</td>
        <td>${s.matchPersi}</td>
        <td>${s.puntiTotali.toFixed(2)}</td>
        <td>${mediaPunti}</td>
        <td>${percentualeVittorie}</td>
      `;
      body.appendChild(row);
    });
}

// === AVVIO AUTOMATICO ===
window.addEventListener("load", function () {
  mostraStatisticheAllTime();
  mostraStatisticheGiocatore();
  mostraAnteprimeGiocatori();

  document.querySelectorAll(".start-animation-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      avviaAnimazioneClassifica(btn.dataset.stagione);
    });
  });
});

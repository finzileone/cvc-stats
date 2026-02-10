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
      { LF: 1, MiF: 0.5, FP: 2.5, BC: 2, CM: 0.5, ZG: 2.5, MP: 2, PiS: 2, MM: 1, MB: 1, AB: 2, AoB: 1 },
      { LF: 0.75, MaF: 2.75, PS: 0.25, LB: 2.25, BC: 0.25, CM: 2.25, LuF: 2.75, MP: 2.75, LeF: 0.75, PiS: 2.75, AB: 0.25}
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
        teamB: ["ML", "PiS"],
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
        teamB: ["AB", "ML"],
        sets: ["6-1", "6-3", "6-2"]
      },
      {
        teamA: ["MP", "MaF"],
        teamB: ["PS", "BC"],
        sets: ["6-1", "6-2", "4-2"]
      },
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
        teamA: ["PiS", "ML"],
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
        teamB: ["PS", "ML"],
        sets: ["6-3", "6-3", "3-3"]
      },
      {
        teamA: ["LB", "MaF"],
        teamB: ["MM", "FP"],
        sets: ["6-2", "6-3", "4-3"]
      },
      {
        teamA: ["LB", "PS"],
        teamB: ["MaF", "ML"],
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
      }
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

// === CALCOLO STATS GLOBALI (DOPPIO + SINGOLARE) ===
function calcolaStatisticheGlobali() {
  const stats = {};
  const torneiGiocati = {};

  Object.entries(stagioni).forEach(([stagioneKey, stagione]) => {
    const { teams, match, giornate } = stagione;

    // Inizializzazione giocatori
    teams.forEach(p => {
      if (!stats[p]) {
        stats[p] = {
          matchVinti: 0,
          matchPersi: 0,
          matchPari: 0,
          singoliVinti: 0,
          singoliPersi: 0,
          setVinti: 0,
          setPersi: 0,
          gameVinti: 0,
          gamePersi: 0,
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
            if ((a >= 6 || b >= 6) && Math.abs(a - b) >= 2) {
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

      if (ritiro === "A") {
        winner = teamB;
      } else if (ritiro === "B") {
        winner = teamA;
      } else {
        const setsA = setStats[keyA];
        const setsB = setStats[keyB];

        if (setsA > setsB) winner = teamA;
        else if (setsB > setsA) winner = teamB;
        else if (!isSingolo) {
          // Pareggio ammesso solo nel doppio
          isDraw = true;
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
        <th>Trofei</th>
        <th>Oro</th>
        <th>Argento</th>
        <th>Bronzo</th>
        <th>Tornei</th>
        <th>Match</th>
        <th>Vinte</th>
        <th>Perse</th>
        <th>Pari</th>
        <th>Singoli V</th>
        <th>Singoli P</th>
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

      const mediaPunti = s.matchTotali > 0
        ? (s.puntiTotali / s.matchTotali).toFixed(2)
        : "0.00";

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
        <td>${s.singoliVinti}</td>
        <td>${s.singoliPersi}</td>
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

// === AVVIO AUTOMATICO ===
window.addEventListener("load", function () {
  mostraStatisticheAllTime();

  document.querySelectorAll(".start-animation-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      avviaAnimazioneClassifica(btn.dataset.stagione);
    });
  });
});

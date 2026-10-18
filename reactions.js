// Chemistry Lab 3D — complete reaction rule data separated from index.html.
// 247 rules preserved from the previous inline library, plus expanded coverage.
window.CHEM_RX = [
  {
    "id": "fe_hcl",
    "need": [
      "Fe",
      "HCl"
    ],
    "eq": "Fe + 2HCl → FeCl2 + H2↑",
    "out": [
      "FeCl2",
      "H2"
    ],
    "col": "#b8d8a4",
    "dur": 8,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "zn_hcl",
    "need": [
      "Zn",
      "HCl"
    ],
    "eq": "Zn + 2HCl → ZnCl2 + H2↑",
    "out": [
      "ZnCl2",
      "H2"
    ],
    "col": "#ededed",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "mg_hcl",
    "need": [
      "Mg",
      "HCl"
    ],
    "eq": "Mg + 2HCl → MgCl2 + H2↑",
    "out": [
      "MgCl2",
      "H2"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 1.5,
    "gas": "H2"
  },
  {
    "id": "al_hcl",
    "need": [
      "Al",
      "HCl"
    ],
    "eq": "2Al + 6HCl → 2AlCl3 + 3H2↑",
    "out": [
      "AlCl3",
      "H2"
    ],
    "col": "#ededed",
    "dur": 8,
    "bub": 1.2,
    "gas": "H2"
  },
  {
    "id": "fe_h2so4",
    "need": [
      "Fe",
      "H2SO4"
    ],
    "eq": "Fe + H2SO4 → FeSO4 + H2↑",
    "out": [
      "FeSO4",
      "H2"
    ],
    "col": "#a9c8a0",
    "dur": 8,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "zn_h2so4",
    "need": [
      "Zn",
      "H2SO4"
    ],
    "eq": "Zn + H2SO4 → ZnSO4 + H2↑",
    "out": [
      "ZnSO4",
      "H2"
    ],
    "col": "#ededed",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "mg_h2so4",
    "need": [
      "Mg",
      "H2SO4"
    ],
    "eq": "Mg + H2SO4 → MgSO4 + H2↑",
    "out": [
      "MgSO4",
      "H2"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 1.4,
    "gas": "H2"
  },
  {
    "id": "li_water",
    "need": [
      "Li",
      "H2O"
    ],
    "eq": "2Li + 2H2O → 2LiOH + H2↑",
    "out": [
      "LiOH",
      "H2"
    ],
    "col": "#d8dce1",
    "dur": 7,
    "bub": 1.6,
    "fire": 0,
    "gas": "H2"
  },
  {
    "id": "na_water",
    "need": [
      "Na",
      "H2O"
    ],
    "eq": "2Na + 2H2O → 2NaOH + H2↑",
    "out": [
      "NaOH",
      "H2"
    ],
    "col": "#d8dce1",
    "dur": 7,
    "bub": 1.6,
    "fire": 0.55,
    "gas": "H2"
  },
  {
    "id": "k_water",
    "need": [
      "K",
      "H2O"
    ],
    "eq": "2K + 2H2O → 2KOH + H2↑",
    "out": [
      "KOH",
      "H2"
    ],
    "col": "#d8dce1",
    "dur": 5,
    "bub": 1.6,
    "fire": 1,
    "gas": "H2"
  },
  {
    "id": "calcium_water",
    "need": [
      "Ca",
      "H2O"
    ],
    "eq": "Ca + 2H2O → Ca(OH)2 + H2↑",
    "out": [
      "Ca(OH)2",
      "H2"
    ],
    "col": "#dfe4e8",
    "dur": 8,
    "bub": 1.1,
    "gas": "H2"
  },
  {
    "id": "hcl_naoh",
    "need": [
      "HCl",
      "NaOH"
    ],
    "eq": "HCl + NaOH → NaCl + H2O",
    "out": [
      "NaCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.12,
    "heatRise": 3,
    "explain": "Phản ứng trung hòa tạo muối và nước."
  },
  {
    "id": "hcl_koh",
    "need": [
      "HCl",
      "KOH"
    ],
    "eq": "HCl + KOH → KCl + H2O",
    "out": [
      "KCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 3
  },
  {
    "id": "h2so4_naoh",
    "need": [
      "H2SO4",
      "NaOH"
    ],
    "eq": "H2SO4 + 2NaOH → Na2SO4 + 2H2O",
    "out": [
      "Na2SO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1,
    "heatRise": 4
  },
  {
    "id": "hno3_naoh",
    "need": [
      "HNO3",
      "NaOH"
    ],
    "eq": "HNO3 + NaOH → NaNO3 + H2O",
    "out": [
      "NaNO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 3
  },
  {
    "id": "acetic_naoh",
    "need": [
      "CH3COOH",
      "NaOH"
    ],
    "eq": "CH3COOH + NaOH → CH3COONa + H2O",
    "out": [
      "CH3COONa",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 2,
    "explain": "Mô hình minh họa trung hòa axit yếu với bazơ mạnh."
  },
  {
    "id": "agno3_nacl",
    "need": [
      "AgNO3",
      "NaCl"
    ],
    "eq": "AgNO3 + NaCl → AgCl↓ + NaNO3",
    "out": [
      "AgCl",
      "NaNO3"
    ],
    "col": "#dce4e9",
    "precip": "#f0f0ea",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "agno3_kcl",
    "need": [
      "AgNO3",
      "KCl"
    ],
    "eq": "AgNO3 + KCl → AgCl↓ + KNO3",
    "out": [
      "AgCl",
      "KNO3"
    ],
    "col": "#e2e5e7",
    "precip": "#f1f1eb",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "bacl2_na2so4",
    "need": [
      "BaCl2",
      "Na2SO4"
    ],
    "eq": "BaCl2 + Na2SO4 → BaSO4↓ + 2NaCl",
    "out": [
      "BaSO4",
      "NaCl"
    ],
    "col": "#e6e7e6",
    "precip": "#f4f2ed",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "cuso4_naoh",
    "need": [
      "CuSO4",
      "NaOH"
    ],
    "eq": "CuSO4 + 2NaOH → Cu(OH)2↓ + Na2SO4",
    "out": [
      "Cu(OH)2",
      "Na2SO4"
    ],
    "col": "#4d83d7",
    "precip": "#4d83d7",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "fecl3_naoh",
    "need": [
      "FeCl3",
      "NaOH"
    ],
    "eq": "FeCl3 + 3NaOH → Fe(OH)3↓ + 3NaCl",
    "out": [
      "Fe(OH)3",
      "NaCl"
    ],
    "col": "#a4552c",
    "precip": "#a4552c",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "feso4_naoh",
    "need": [
      "FeSO4",
      "NaOH"
    ],
    "eq": "FeSO4 + 2NaOH → Fe(OH)2↓ + Na2SO4",
    "out": [
      "Fe(OH)2",
      "Na2SO4"
    ],
    "col": "#b5c49a",
    "precip": "#b5c49a",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "pbno3_ki",
    "need": [
      "Pb(NO3)2",
      "KI"
    ],
    "eq": "Pb(NO3)2 + 2KI → PbI2↓ + 2KNO3",
    "out": [
      "PbI2",
      "KNO3"
    ],
    "col": "#f1d342",
    "precip": "#f1d342",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "cacl2_na2co3",
    "need": [
      "CaCl2",
      "Na2CO3"
    ],
    "eq": "CaCl2 + Na2CO3 → CaCO3↓ + 2NaCl",
    "out": [
      "CaCO3",
      "NaCl"
    ],
    "col": "#e6e5de",
    "precip": "#efeee8",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "cucl2_naoh",
    "need": [
      "CuCl2",
      "NaOH"
    ],
    "eq": "CuCl2 + 2NaOH → Cu(OH)2↓ + 2NaCl",
    "out": [
      "Cu(OH)2",
      "NaCl"
    ],
    "col": "#4d83d7",
    "precip": "#4d83d7",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "alcl3_naoh",
    "need": [
      "AlCl3",
      "NaOH"
    ],
    "eq": "AlCl3 + 3NaOH → Al(OH)3↓ + 3NaCl",
    "out": [
      "Al(OH)3",
      "NaCl"
    ],
    "col": "#e8e8e2",
    "precip": "#eeeeea",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "znso4_naoh",
    "need": [
      "ZnSO4",
      "NaOH"
    ],
    "eq": "ZnSO4 + 2NaOH → Zn(OH)2↓ + Na2SO4",
    "out": [
      "Zn(OH)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "precip": "#eeeeea",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "mgcl2_naoh",
    "need": [
      "MgCl2",
      "NaOH"
    ],
    "eq": "MgCl2 + 2NaOH → Mg(OH)2↓ + 2NaCl",
    "out": [
      "Mg(OH)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "precip": "#f0f0e9",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "cuno3_naoh",
    "need": [
      "Cu(NO3)2",
      "NaOH"
    ],
    "eq": "Cu(NO3)2 + 2NaOH → Cu(OH)2↓ + 2NaNO3",
    "out": [
      "Cu(OH)2",
      "NaNO3"
    ],
    "col": "#4d83d7",
    "precip": "#4d83d7",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "na2co3_hcl",
    "need": [
      "Na2CO3",
      "HCl"
    ],
    "eq": "Na2CO3 + 2HCl → 2NaCl + H2O + CO2↑",
    "out": [
      "NaCl",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.3,
    "gas": "CO2"
  },
  {
    "id": "caco3_hcl",
    "need": [
      "CaCO3",
      "HCl"
    ],
    "eq": "CaCO3 + 2HCl → CaCl2 + H2O + CO2↑",
    "out": [
      "CaCl2",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 1.3,
    "gas": "CO2"
  },
  {
    "id": "nahco3_hcl",
    "need": [
      "NaHCO3",
      "HCl"
    ],
    "eq": "NaHCO3 + HCl → NaCl + H2O + CO2↑",
    "out": [
      "NaCl",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 1.3,
    "gas": "CO2"
  },
  {
    "id": "co2_limewater",
    "need": [
      "CO2",
      "Ca(OH)2"
    ],
    "eq": "CO2 + Ca(OH)2 → CaCO3↓ + H2O",
    "out": [
      "CaCO3",
      "H2O"
    ],
    "col": "#dfdfd9",
    "precip": "#eeeeea",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "so2_limewater",
    "need": [
      "SO2",
      "Ca(OH)2"
    ],
    "eq": "SO2 + Ca(OH)2 → CaSO3↓ + H2O",
    "out": [
      "CaSO3",
      "H2O"
    ],
    "col": "#dfdfd9",
    "precip": "#eeeeea",
    "dur": 7,
    "bub": 0.12
  },
  {
    "id": "fe_cuso4",
    "need": [
      "Fe",
      "CuSO4"
    ],
    "eq": "Fe + CuSO4 → FeSO4 + Cu",
    "out": [
      "FeSO4",
      "Cu"
    ],
    "col": "#a9c8a0",
    "precip": "#b5493b",
    "dur": 9,
    "bub": 0.12
  },
  {
    "id": "zn_cuso4",
    "need": [
      "Zn",
      "CuSO4"
    ],
    "eq": "Zn + CuSO4 → ZnSO4 + Cu",
    "out": [
      "ZnSO4",
      "Cu"
    ],
    "col": "#e7e8e7",
    "precip": "#b5493b",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "cu_agno3",
    "need": [
      "Cu",
      "AgNO3"
    ],
    "eq": "Cu + 2AgNO3 → Cu(NO3)2 + 2Ag",
    "out": [
      "Cu(NO3)2",
      "Ag"
    ],
    "col": "#69a2d7",
    "precip": "#c6c6c8",
    "dur": 9,
    "bub": 0.1
  },
  {
    "id": "zn_agno3",
    "need": [
      "Zn",
      "AgNO3"
    ],
    "eq": "Zn + 2AgNO3 → Zn(NO3)2 + 2Ag",
    "out": [
      "Zn(NO3)2",
      "Ag"
    ],
    "col": "#e7e8e7",
    "precip": "#c6c6c8",
    "dur": 8,
    "bub": 0.1
  },
  {
    "id": "cl2_ki",
    "need": [
      "Cl2",
      "KI"
    ],
    "eq": "Cl2 + 2KI → 2KCl + I2",
    "out": [
      "KCl",
      "I2"
    ],
    "col": "#7c5a91",
    "precip": "#514080",
    "dur": 7,
    "bub": 0.12
  },
  {
    "id": "br2_ki",
    "need": [
      "Br2",
      "KI"
    ],
    "eq": "Br2 + 2KI → 2KBr + I2",
    "out": [
      "KBr",
      "I2"
    ],
    "col": "#6a4b83",
    "precip": "#514080",
    "dur": 7,
    "bub": 0.12
  },
  {
    "id": "cl2_nabr",
    "need": [
      "Cl2",
      "NaBr"
    ],
    "eq": "Cl2 + 2NaBr → 2NaCl + Br2",
    "out": [
      "NaCl",
      "Br2"
    ],
    "col": "#8a3824",
    "dur": 7,
    "bub": 0.1
  },
  {
    "id": "cuso4_na2s",
    "need": [
      "CuSO4",
      "Na2S"
    ],
    "eq": "CuSO4 + Na2S → CuS↓ + Na2SO4",
    "out": [
      "CuS",
      "Na2SO4"
    ],
    "col": "#252525",
    "precip": "#222222",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "h2s_pbno3",
    "need": [
      "H2S",
      "Pb(NO3)2"
    ],
    "eq": "H2S + Pb(NO3)2 → PbS↓ + 2HNO3",
    "out": [
      "PbS",
      "HNO3"
    ],
    "col": "#252525",
    "precip": "#222222",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "k2cro4_pbno3",
    "need": [
      "K2CrO4",
      "Pb(NO3)2"
    ],
    "eq": "K2CrO4 + Pb(NO3)2 → PbCrO4↓ + 2KNO3",
    "out": [
      "PbCrO4",
      "KNO3"
    ],
    "col": "#e1c52e",
    "precip": "#e1c52e",
    "dur": 7,
    "bub": 0.08,
    "explain": "Kết tủa chì(II) cromat màu vàng."
  },
  {
    "id": "hcl_nh3",
    "need": [
      "HCl",
      "NH3"
    ],
    "eq": "HCl(g) + NH3(g) → NH4Cl(s)",
    "out": [
      "NH4Cl"
    ],
    "col": "#ededed",
    "dur": 6,
    "bub": 0.02,
    "smoke": true,
    "explain": "Hai khí tạo các hạt ammonium chloride rắn li ti lơ lửng, quan sát thấy như khói trắng. Không có ngọn lửa."
  },
  {
    "id": "nh4cl_naoh",
    "need": [
      "NH4Cl",
      "NaOH"
    ],
    "eq": "NH4Cl + NaOH → NH3↑ + NaCl + H2O",
    "out": [
      "NH3",
      "NaCl",
      "H2O"
    ],
    "heat": 40,
    "heating": true,
    "col": "#e9e9e8",
    "dur": 8,
    "bub": 0.8,
    "gas": "NH3"
  },
  {
    "id": "na2so3_hcl",
    "need": [
      "Na2SO3",
      "HCl"
    ],
    "eq": "Na2SO3 + 2HCl → 2NaCl + SO2↑ + H2O",
    "out": [
      "NaCl",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1,
    "gas": "SO2"
  },
  {
    "id": "na2s2o3_hcl",
    "need": [
      "Na2S2O3",
      "HCl"
    ],
    "eq": "Na2S2O3 + 2HCl → 2NaCl + SO2↑ + S↓ + H2O",
    "out": [
      "NaCl",
      "SO2",
      "S",
      "H2O"
    ],
    "col": "#d6d0a4",
    "precip": "#d9d84a",
    "dur": 8,
    "bub": 1,
    "gas": "SO2"
  },
  {
    "id": "cuso4_ki",
    "need": [
      "CuSO4",
      "KI"
    ],
    "eq": "2CuSO4 + 4KI → 2CuI↓ + I2 + 2K2SO4",
    "out": [
      "CuI",
      "I2",
      "K2SO4"
    ],
    "col": "#75619a",
    "precip": "#eeeeea",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "fecl3_ki",
    "need": [
      "FeCl3",
      "KI"
    ],
    "eq": "2FeCl3 + 2KI → 2FeCl2 + 2KCl + I2",
    "out": [
      "FeCl2",
      "KCl",
      "I2"
    ],
    "col": "#8a6b97",
    "precip": "#514080",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "h2o2_mno2",
    "need": [
      "H2O2",
      "MnO2"
    ],
    "preserve": [
      "MnO2"
    ],
    "eq": "2H2O2 → 2H2O + O2↑",
    "arrowLabel": "MnO₂",
    "out": [
      "H2O",
      "O2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 1.2,
    "gas": "O2"
  },
  {
    "id": "mg_combustion",
    "need": [
      "Mg",
      "O2"
    ],
    "eq": "2Mg + O2 → 2MgO",
    "out": [
      "MgO"
    ],
    "heat": 70,
    "heating": true,
    "col": "#eee9df",
    "precip": "#eee9df",
    "dur": 6,
    "bub": 0.15,
    "fire": 1
  },
  {
    "id": "carbon_combustion",
    "need": [
      "C",
      "O2"
    ],
    "eq": "C + O2 → CO2",
    "out": [
      "CO2"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.4,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "sulfur_combustion",
    "need": [
      "S",
      "O2"
    ],
    "eq": "S + O2 → SO2",
    "out": [
      "SO2"
    ],
    "heat": 60,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.5,
    "fire": 1,
    "gas": "SO2"
  },
  {
    "id": "methane_combustion",
    "need": [
      "CH4",
      "O2"
    ],
    "eq": "CH4 + 2O2 → CO2 + 2H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e4e4e4",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "cuo_h2",
    "need": [
      "CuO",
      "H2"
    ],
    "eq": "CuO + H2 → Cu + H2O",
    "out": [
      "Cu",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#b5493b",
    "precip": "#b5493b",
    "dur": 7,
    "bub": 0.1
  },
  {
    "id": "cao_water",
    "need": [
      "CaO",
      "H2O"
    ],
    "eq": "CaO + H2O → Ca(OH)2",
    "out": [
      "Ca(OH)2"
    ],
    "col": "#e9e6df",
    "dur": 6,
    "heatRise": 8,
    "bub": 0.15
  },
  {
    "id": "caco3_thermal",
    "need": [
      "CaCO3"
    ],
    "eq": "CaCO3 → CaO + CO2↑",
    "out": [
      "CaO",
      "CO2"
    ],
    "heat": 110,
    "heating": true,
    "col": "#d6d6d0",
    "dur": 8,
    "bub": 0.6,
    "gas": "CO2"
  },
  {
    "id": "cuco3_thermal",
    "need": [
      "CuCO3"
    ],
    "eq": "CuCO3 → CuO + CO2↑",
    "out": [
      "CuO",
      "CO2"
    ],
    "heat": 90,
    "heating": true,
    "col": "#3b684f",
    "dur": 8,
    "bub": 0.6,
    "gas": "CO2"
  },
  {
    "id": "nahco3_thermal",
    "need": [
      "NaHCO3"
    ],
    "eq": "2NaHCO3 → Na2CO3 + CO2↑ + H2O",
    "out": [
      "Na2CO3",
      "CO2",
      "H2O"
    ],
    "heat": 75,
    "heating": true,
    "col": "#e4e4e0",
    "dur": 8,
    "bub": 0.7,
    "gas": "CO2"
  },
  {
    "id": "kclo3_decomp",
    "need": [
      "KClO3",
      "MnO2"
    ],
    "preserve": [
      "MnO2"
    ],
    "eq": "2KClO3 → 2KCl + 3O2↑",
    "arrowLabel": "MnO₂, t°",
    "out": [
      "KCl",
      "O2"
    ],
    "heat": 100,
    "heating": true,
    "col": "#e6e6e1",
    "dur": 8,
    "bub": 1,
    "gas": "O2"
  },
  {
    "id": "cu_h2so4_hot",
    "need": [
      "Cu",
      "H2SO4 (đặc)"
    ],
    "eq": "Cu + 2H2SO4 (đặc, nóng) → CuSO4 + SO2↑ + 2H2O",
    "out": [
      "CuSO4",
      "SO2",
      "H2O"
    ],
    "heat": 100,
    "heating": true,
    "col": "#287ac5",
    "dur": 10,
    "bub": 0.8,
    "gas": "SO2"
  },
  {
    "id": "fe_h2so4_hot",
    "need": [
      "Fe",
      "H2SO4 (đặc)"
    ],
    "eq": "2Fe + 6H2SO4 (đặc, nóng) → Fe2(SO4)3 + 3SO2↑ + 6H2O",
    "out": [
      "Fe2(SO4)3",
      "SO2",
      "H2O"
    ],
    "heat": 100,
    "heating": true,
    "col": "#7b1c20",
    "dur": 12,
    "bub": 0.8,
    "gas": "SO2"
  },
  {
    "id": "cu_hno3_conc",
    "need": [
      "Cu",
      "HNO3 (đặc)"
    ],
    "eq": "Cu + 4HNO3 (đặc) → Cu(NO3)2 + 2NO2↑ + 2H2O",
    "out": [
      "Cu(NO3)2",
      "NO2",
      "H2O"
    ],
    "col": "#8f4f2b",
    "dur": 10,
    "bub": 0.8,
    "gas": "NO2"
  },
  {
    "id": "aqua_regia_gold",
    "need": [
      "Au",
      "HCl",
      "HNO3 (đặc)"
    ],
    "eq": "Au + HNO3 (đặc) + 4HCl → HAuCl4 + NO↑ + 2H2O",
    "out": [
      "HAuCl4",
      "NO",
      "H2O"
    ],
    "col": "#c99b24",
    "dur": 12,
    "bub": 0.45,
    "gas": "NO",
    "explain": "Mô phỏng hòa tan vàng bằng hệ nước cường toan: chất oxi hóa và ion clorua cùng tham gia tạo phức vàng(III). Chỉ là mô phỏng giáo dục; không thực hiện ngoài đời."
  },
  {
    "id": "fe_oxygen_hot",
    "need": [
      "Fe",
      "O2"
    ],
    "eq": "3Fe + 2O2 → Fe3O4",
    "out": [
      "Fe3O4"
    ],
    "heat": 90,
    "heating": true,
    "col": "#333333",
    "precip": "#333333",
    "dur": 8,
    "bub": 0.15,
    "fire": 1
  },
  {
    "id": "iron_thiocyanate",
    "need": [
      "FeCl3",
      "KSCN"
    ],
    "eq": "Fe³⁺ + SCN⁻ ⇌ [FeSCN]²⁺",
    "out": [
      "[FeSCN]²⁺"
    ],
    "col": "#b51625",
    "dur": 6,
    "bub": 0.05,
    "explain": "Phức chất sắt(III)-thiocyanat tạo màu đỏ máu đặc trưng."
  },
  {
    "id": "copper_ammonia",
    "need": [
      "CuSO4",
      "NH3(aq)"
    ],
    "eq": "Cu²⁺ + 4NH3 ⇌ [Cu(NH3)4]²⁺",
    "out": [
      "[Cu(NH3)4]²⁺"
    ],
    "col": "#173bdb",
    "dur": 7,
    "bub": 0.05,
    "explain": "Mô phỏng sự tạo phức xanh thẫm của đồng(II) với amoniac."
  },
  {
    "id": "iodine_starch",
    "need": [
      "I2",
      "Starch",
      "H2O"
    ],
    "eq": "I2 + tinh bột → phức màu xanh tím",
    "out": [
      "Iodine-starch complex",
      "H2O"
    ],
    "col": "#222044",
    "dur": 5,
    "bub": 0.02,
    "explain": "Phức iốt–tinh bột tạo màu xanh tím đậm."
  },
  {
    "id": "mg_o_water",
    "need": [
      "MgO",
      "H2O"
    ],
    "eq": "MgO + H2O → Mg(OH)2",
    "out": [
      "Mg(OH)2"
    ],
    "col": "#e9e9e4",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "co2_naoh",
    "need": [
      "CO2",
      "NaOH"
    ],
    "eq": "CO2 + 2NaOH → Na2CO3 + H2O",
    "out": [
      "Na2CO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "h2so4_bacl2",
    "need": [
      "H2SO4",
      "BaCl2"
    ],
    "eq": "H2SO4 + BaCl2 → BaSO4↓ + 2HCl",
    "out": [
      "BaSO4",
      "HCl"
    ],
    "col": "#e6e7e6",
    "precip": "#f4f2ed",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "hcl_caoh2",
    "need": [
      "HCl",
      "Ca(OH)2"
    ],
    "eq": "2HCl + Ca(OH)2 → CaCl2 + 2H2O",
    "out": [
      "CaCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "zn_cucl2",
    "need": [
      "Zn",
      "CuCl2"
    ],
    "eq": "Zn + CuCl2 → ZnCl2 + Cu",
    "out": [
      "ZnCl2",
      "Cu"
    ],
    "col": "#e7e8e7",
    "precip": "#b5493b",
    "dur": 8,
    "bub": 0.1
  },
  {
    "id": "ca_hcl",
    "need": [
      "Ca",
      "HCl"
    ],
    "eq": "Ca + 2HCl → CaCl2 + H2↑",
    "out": [
      "CaCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1.2,
    "gas": "H2"
  },
  {
    "id": "mn_hcl",
    "need": [
      "Mn",
      "HCl"
    ],
    "eq": "Mn + 2HCl → MnCl2 + H2↑",
    "out": [
      "MnCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "ni_hcl",
    "need": [
      "Ni",
      "HCl"
    ],
    "eq": "Ni + 2HCl → NiCl2 + H2↑",
    "out": [
      "NiCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.7,
    "gas": "H2"
  },
  {
    "id": "sn_hcl",
    "need": [
      "Sn",
      "HCl"
    ],
    "eq": "Sn + 2HCl → SnCl2 + H2↑",
    "out": [
      "SnCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.6,
    "gas": "H2"
  },
  {
    "id": "al_h2so4",
    "need": [
      "Al",
      "H2SO4"
    ],
    "eq": "2Al + 3H2SO4 → Al2(SO4)3 + 3H2↑",
    "out": [
      "Al2(SO4)3",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 1.1,
    "gas": "H2"
  },
  {
    "id": "mn_h2so4",
    "need": [
      "Mn",
      "H2SO4"
    ],
    "eq": "Mn + H2SO4 → MnSO4 + H2↑",
    "out": [
      "MnSO4",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "ni_h2so4",
    "need": [
      "Ni",
      "H2SO4"
    ],
    "eq": "Ni + H2SO4 → NiSO4 + H2↑",
    "out": [
      "NiSO4",
      "H2"
    ],
    "col": "#dce7e4",
    "dur": 8,
    "bub": 0.7,
    "gas": "H2"
  },
  {
    "id": "sn_h2so4",
    "need": [
      "Sn",
      "H2SO4"
    ],
    "eq": "Sn + H2SO4 → SnSO4 + H2↑",
    "out": [
      "SnSO4",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.6,
    "gas": "H2"
  },
  {
    "id": "hno3_koh",
    "need": [
      "HNO3",
      "KOH"
    ],
    "eq": "HNO3 + KOH → KNO3 + H2O",
    "out": [
      "KNO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "h2so4_koh",
    "need": [
      "H2SO4",
      "KOH"
    ],
    "eq": "H2SO4 + 2KOH → K2SO4 + 2H2O",
    "out": [
      "K2SO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.08,
    "heatRise": 4
  },
  {
    "id": "hno3_caoh2",
    "need": [
      "HNO3",
      "Ca(OH)2"
    ],
    "eq": "2HNO3 + Ca(OH)2 → Ca(NO3)2 + 2H2O",
    "out": [
      "Ca(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "hcl_baoh2",
    "need": [
      "HCl",
      "Ba(OH)2"
    ],
    "eq": "2HCl + Ba(OH)2 → BaCl2 + 2H2O",
    "out": [
      "BaCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "h2so4_baoh2",
    "need": [
      "H2SO4",
      "Ba(OH)2"
    ],
    "eq": "H2SO4 + Ba(OH)2 → BaSO4↓ + 2H2O",
    "out": [
      "BaSO4",
      "H2O"
    ],
    "col": "#e7e7e3",
    "precip": "#f4f2ed",
    "dur": 6,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "h3po4_naoh",
    "need": [
      "H3PO4",
      "NaOH"
    ],
    "eq": "H3PO4 + 3NaOH → Na3PO4 + 3H2O",
    "out": [
      "Na3PO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "na2co3_hno3",
    "need": [
      "Na2CO3",
      "HNO3"
    ],
    "eq": "Na2CO3 + 2HNO3 → 2NaNO3 + H2O + CO2↑",
    "out": [
      "NaNO3",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "k2co3_hcl",
    "need": [
      "K2CO3",
      "HCl"
    ],
    "eq": "K2CO3 + 2HCl → 2KCl + H2O + CO2↑",
    "out": [
      "KCl",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "mgco3_hcl",
    "need": [
      "MgCO3",
      "HCl"
    ],
    "eq": "MgCO3 + 2HCl → MgCl2 + H2O + CO2↑",
    "out": [
      "MgCl2",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "cuco3_hcl",
    "need": [
      "CuCO3",
      "HCl"
    ],
    "eq": "CuCO3 + 2HCl → CuCl2 + H2O + CO2↑",
    "out": [
      "CuCl2",
      "H2O",
      "CO2"
    ],
    "col": "#70a5bd",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "feco3_hcl",
    "need": [
      "FeCO3",
      "HCl"
    ],
    "eq": "FeCO3 + 2HCl → FeCl2 + H2O + CO2↑",
    "out": [
      "FeCl2",
      "H2O",
      "CO2"
    ],
    "col": "#b8d8a4",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "na2co3_h2so4",
    "need": [
      "Na2CO3",
      "H2SO4"
    ],
    "eq": "Na2CO3 + H2SO4 → Na2SO4 + H2O + CO2↑",
    "out": [
      "Na2SO4",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "caco3_hno3",
    "need": [
      "CaCO3",
      "HNO3"
    ],
    "eq": "CaCO3 + 2HNO3 → Ca(NO3)2 + H2O + CO2↑",
    "out": [
      "Ca(NO3)2",
      "H2O",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 1.1,
    "gas": "CO2"
  },
  {
    "id": "na2s_hcl",
    "need": [
      "Na2S",
      "HCl"
    ],
    "eq": "Na2S + 2HCl → 2NaCl + H2S↑",
    "out": [
      "NaCl",
      "H2S"
    ],
    "col": "#e2e1da",
    "dur": 7,
    "bub": 0.9,
    "gas": "H2S"
  },
  {
    "id": "fes_hcl",
    "need": [
      "FeS",
      "HCl"
    ],
    "eq": "FeS + 2HCl → FeCl2 + H2S↑",
    "out": [
      "FeCl2",
      "H2S"
    ],
    "col": "#b8d8a4",
    "dur": 7,
    "bub": 0.9,
    "gas": "H2S"
  },
  {
    "id": "so2_naoh",
    "need": [
      "SO2",
      "NaOH"
    ],
    "eq": "SO2 + 2NaOH → Na2SO3 + H2O",
    "out": [
      "Na2SO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.08
  },
  {
    "id": "so3_water",
    "need": [
      "SO3",
      "H2O"
    ],
    "eq": "SO3 + H2O → H2SO4",
    "out": [
      "H2SO4"
    ],
    "col": "#e7e8e7",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 4
  },
  {
    "id": "so3_naoh",
    "need": [
      "SO3",
      "NaOH"
    ],
    "eq": "SO3 + 2NaOH → Na2SO4 + H2O",
    "out": [
      "Na2SO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "cuo_hcl",
    "need": [
      "CuO",
      "HCl"
    ],
    "eq": "CuO + 2HCl → CuCl2 + H2O",
    "out": [
      "CuCl2",
      "H2O"
    ],
    "col": "#5f9bcf",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "cuo_h2so4",
    "need": [
      "CuO",
      "H2SO4"
    ],
    "eq": "CuO + H2SO4 → CuSO4 + H2O",
    "out": [
      "CuSO4",
      "H2O"
    ],
    "col": "#278ce0",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "mgo_hcl",
    "need": [
      "MgO",
      "HCl"
    ],
    "eq": "MgO + 2HCl → MgCl2 + H2O",
    "out": [
      "MgCl2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "cao_hcl",
    "need": [
      "CaO",
      "HCl"
    ],
    "eq": "CaO + 2HCl → CaCl2 + H2O",
    "out": [
      "CaCl2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.05,
    "heatRise": 2
  },
  {
    "id": "zno_hcl",
    "need": [
      "ZnO",
      "HCl"
    ],
    "eq": "ZnO + 2HCl → ZnCl2 + H2O",
    "out": [
      "ZnCl2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "feo_hcl",
    "need": [
      "FeO",
      "HCl"
    ],
    "eq": "FeO + 2HCl → FeCl2 + H2O",
    "out": [
      "FeCl2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "fe2o3_hcl",
    "need": [
      "Fe2O3",
      "HCl"
    ],
    "eq": "Fe2O3 + 6HCl → 2FeCl3 + 3H2O",
    "out": [
      "FeCl3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "fe2o3_h2so4",
    "need": [
      "Fe2O3",
      "H2SO4"
    ],
    "eq": "Fe2O3 + 3H2SO4 → Fe2(SO4)3 + 3H2O",
    "out": [
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "cuo_hno3",
    "need": [
      "CuO",
      "HNO3"
    ],
    "eq": "CuO + 2HNO3 → Cu(NO3)2 + H2O",
    "out": [
      "Cu(NO3)2",
      "H2O"
    ],
    "col": "#4c8ed0",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "al2o3_hcl_hot",
    "need": [
      "Al2O3",
      "HCl"
    ],
    "eq": "Al2O3 + 6HCl → 2AlCl3 + 3H2O",
    "out": [
      "AlCl3",
      "H2O"
    ],
    "heat": 45,
    "heating": true,
    "arrowLabel": "t°",
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.05
  },
  {
    "id": "pbno3_nacl",
    "need": [
      "Pb(NO3)2",
      "NaCl"
    ],
    "eq": "Pb(NO3)2 + 2NaCl → PbCl2↓ + 2NaNO3",
    "out": [
      "PbCl2",
      "NaNO3"
    ],
    "col": "#e6e5df",
    "precip": "#eeeae1",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "agno3_ki",
    "need": [
      "AgNO3",
      "KI"
    ],
    "eq": "AgNO3 + KI → AgI↓ + KNO3",
    "out": [
      "AgI",
      "KNO3"
    ],
    "col": "#e5d7a6",
    "precip": "#e6d99a",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "agno3_kbr",
    "need": [
      "AgNO3",
      "KBr"
    ],
    "eq": "AgNO3 + KBr → AgBr↓ + KNO3",
    "out": [
      "AgBr",
      "KNO3"
    ],
    "col": "#e5e0d2",
    "precip": "#e7dfc7",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "bacl2_k2so4",
    "need": [
      "BaCl2",
      "K2SO4"
    ],
    "eq": "BaCl2 + K2SO4 → BaSO4↓ + 2KCl",
    "out": [
      "BaSO4",
      "KCl"
    ],
    "col": "#e6e7e6",
    "precip": "#f4f2ed",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "mgso4_bacl2",
    "need": [
      "MgSO4",
      "BaCl2"
    ],
    "eq": "MgSO4 + BaCl2 → BaSO4↓ + MgCl2",
    "out": [
      "BaSO4",
      "MgCl2"
    ],
    "col": "#e6e7e6",
    "precip": "#f4f2ed",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "pbno3_na2so4",
    "need": [
      "Pb(NO3)2",
      "Na2SO4"
    ],
    "eq": "Pb(NO3)2 + Na2SO4 → PbSO4↓ + 2NaNO3",
    "out": [
      "PbSO4",
      "NaNO3"
    ],
    "col": "#e6e7e0",
    "precip": "#f0efe8",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "pbno3_na2co3",
    "need": [
      "Pb(NO3)2",
      "Na2CO3"
    ],
    "eq": "Pb(NO3)2 + Na2CO3 → PbCO3↓ + 2NaNO3",
    "out": [
      "PbCO3",
      "NaNO3"
    ],
    "col": "#e2dfd0",
    "precip": "#e5e1d5",
    "dur": 6,
    "bub": 0.06
  },
  {
    "id": "mg_cuso4",
    "need": [
      "Mg",
      "CuSO4"
    ],
    "eq": "Mg + CuSO4 → MgSO4 + Cu",
    "out": [
      "MgSO4",
      "Cu"
    ],
    "col": "#e7e8e7",
    "precip": "#b5493b",
    "dur": 8,
    "bub": 0.08
  },
  {
    "id": "al_cuso4",
    "need": [
      "Al",
      "CuSO4"
    ],
    "eq": "2Al + 3CuSO4 → Al2(SO4)3 + 3Cu",
    "out": [
      "Al2(SO4)3",
      "Cu"
    ],
    "col": "#e7e8e7",
    "precip": "#b5493b",
    "dur": 9,
    "bub": 0.08,
    "explain": "Mô hình giả định bề mặt nhôm đã được hoạt hóa; lớp oxit có thể làm phản ứng thật chậm đi."
  },
  {
    "id": "zn_feso4",
    "need": [
      "Zn",
      "FeSO4"
    ],
    "eq": "Zn + FeSO4 → ZnSO4 + Fe",
    "out": [
      "ZnSO4",
      "Fe"
    ],
    "col": "#d9e2d8",
    "precip": "#8d8d8d",
    "dur": 8,
    "bub": 0.08
  },
  {
    "id": "sn_cuso4",
    "need": [
      "Sn",
      "CuSO4"
    ],
    "eq": "Sn + CuSO4 → SnSO4 + Cu",
    "out": [
      "SnSO4",
      "Cu"
    ],
    "col": "#d9e2d8",
    "precip": "#b5493b",
    "dur": 9,
    "bub": 0.08
  },
  {
    "id": "cu_oxygen_hot",
    "need": [
      "Cu",
      "O2"
    ],
    "eq": "2Cu + O2 → 2CuO",
    "out": [
      "CuO"
    ],
    "heat": 80,
    "heating": true,
    "col": "#222222",
    "precip": "#222222",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "zn_oxygen_hot",
    "need": [
      "Zn",
      "O2"
    ],
    "eq": "2Zn + O2 → 2ZnO",
    "out": [
      "ZnO"
    ],
    "heat": 80,
    "heating": true,
    "col": "#e6e4dc",
    "precip": "#e6e4dc",
    "dur": 7,
    "bub": 0.08,
    "fire": 0.5
  },
  {
    "id": "al_oxygen_hot",
    "need": [
      "Al",
      "O2"
    ],
    "eq": "4Al + 3O2 → 2Al2O3",
    "out": [
      "Al2O3"
    ],
    "heat": 90,
    "heating": true,
    "col": "#e7e4db",
    "precip": "#e7e4db",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "fe_s_hot",
    "need": [
      "Fe",
      "S"
    ],
    "eq": "Fe + S → FeS",
    "out": [
      "FeS"
    ],
    "heat": 90,
    "heating": true,
    "col": "#3a342e",
    "precip": "#3a342e",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "cu_s_hot",
    "need": [
      "Cu",
      "S"
    ],
    "eq": "Cu + S → CuS",
    "out": [
      "CuS"
    ],
    "heat": 90,
    "heating": true,
    "col": "#252525",
    "precip": "#222222",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "hydrogen_combustion",
    "need": [
      "H2",
      "O2"
    ],
    "eq": "2H2 + O2 → 2H2O",
    "out": [
      "H2O"
    ],
    "heat": 75,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 5,
    "bub": 0.1,
    "fire": 1
  },
  {
    "id": "methanol_combustion",
    "need": [
      "CH3OH",
      "O2"
    ],
    "eq": "2CH3OH + 3O2 → 2CO2 + 4H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "ethanol_combustion",
    "need": [
      "C2H5OH",
      "O2"
    ],
    "eq": "C2H5OH + 3O2 → 2CO2 + 3H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "glucose_combustion",
    "need": [
      "Glucose",
      "O2"
    ],
    "eq": "C6H12O6 + 6O2 → 6CO2 + 6H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.4,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "nitrogen_oxidation",
    "need": [
      "N2",
      "O2"
    ],
    "eq": "N2 + O2 → 2NO",
    "out": [
      "NO"
    ],
    "heat": 120,
    "heating": true,
    "col": "#d7d7d7",
    "dur": 8,
    "bub": 0.3,
    "gas": "NO",
    "explain": "Phản ứng cần nhiệt độ rất cao (mô phỏng hồ quang điện)."
  },
  {
    "id": "no_oxidation",
    "need": [
      "NO",
      "O2"
    ],
    "eq": "2NO + O2 → 2NO2",
    "out": [
      "NO2"
    ],
    "col": "#9c542e",
    "dur": 6,
    "bub": 0.15,
    "gas": "NO2"
  },
  {
    "id": "no2_water",
    "need": [
      "NO2",
      "H2O"
    ],
    "eq": "3NO2 + H2O → 2HNO3 + NO",
    "out": [
      "HNO3",
      "NO"
    ],
    "col": "#d0c4b0",
    "dur": 7,
    "bub": 0.3,
    "gas": "NO"
  },
  {
    "id": "so2_oxidation",
    "need": [
      "SO2",
      "O2"
    ],
    "eq": "2SO2 + O2 ⇌ 2SO3",
    "out": [
      "SO3"
    ],
    "heat": 80,
    "heating": true,
    "arrowLabel": "V₂O₅, t°",
    "col": "#dededb",
    "dur": 8,
    "bub": 0.05,
    "explain": "Mô phỏng cân bằng oxi hóa SO₂ có xúc tác; phản ứng thực tế phụ thuộc nhiệt độ và cân bằng."
  },
  {
    "id": "sodium_oxide_water",
    "need": [
      "Na2O",
      "H2O"
    ],
    "eq": "Na2O + H2O → 2NaOH",
    "out": [
      "NaOH"
    ],
    "col": "#e8e8e5",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 5
  },
  {
    "id": "potassium_oxide_water",
    "need": [
      "K2O",
      "H2O"
    ],
    "eq": "K2O + H2O → 2KOH",
    "out": [
      "KOH"
    ],
    "col": "#e8e8e5",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 5
  },
  {
    "id": "sodium_peroxide_water",
    "need": [
      "Na2O2",
      "H2O"
    ],
    "eq": "2Na2O2 + 2H2O → 4NaOH + O2↑",
    "out": [
      "NaOH",
      "O2"
    ],
    "col": "#e8e8e5",
    "dur": 7,
    "bub": 0.7,
    "gas": "O2"
  },
  {
    "id": "cuso4_hydrate_heat",
    "need": [
      "CuSO4·5H2O"
    ],
    "eq": "CuSO4·5H2O → CuSO4 + 5H2O",
    "out": [
      "CuSO4",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#e9e8e1",
    "precip": "#e8e5d5",
    "dur": 8,
    "bub": 0.3,
    "gas": "H2O",
    "explain": "Tinh thể đồng(II) sunfat ngậm nước mất nước kết tinh khi đun nóng; màu xanh lam nhạt dần."
  },
  {
    "id": "kmno4_thermal",
    "need": [
      "KMnO4"
    ],
    "eq": "2KMnO4 → K2MnO4 + MnO2 + O2↑",
    "out": [
      "K2MnO4",
      "MnO2",
      "O2"
    ],
    "heat": 100,
    "heating": true,
    "col": "#4e8b58",
    "precip": "#292929",
    "dur": 9,
    "bub": 0.8,
    "gas": "O2",
    "explain": "Nhiệt phân: tạo manganat kali màu xanh lục, mangan đioxit màu nâu đen và giải phóng khí oxy."
  },
  {
    "id": "mercury_oxide_thermal",
    "need": [
      "HgO"
    ],
    "eq": "2HgO → 2Hg + O2↑",
    "out": [
      "Hg",
      "O2"
    ],
    "heat": 100,
    "heating": true,
    "arrowLabel": "t°",
    "col": "#d4d6d8",
    "dur": 8,
    "bub": 0.6,
    "gas": "O2",
    "explain": "Chỉ mô phỏng nhiệt phân; thủy ngân và hợp chất của nó rất độc."
  },
  {
    "id": "hydrogen_chlorine_light",
    "need": [
      "H2",
      "Cl2"
    ],
    "eq": "H2 + Cl2 → 2HCl",
    "out": [
      "HCl"
    ],
    "arrowLabel": "ánh sáng",
    "col": "#e7e7e7",
    "dur": 6,
    "bub": 0.1,
    "explain": "Phản ứng quang hóa; mô phỏng không tái hiện nguy hiểm ngoài đời."
  },
  {
    "id": "hcl_lioh",
    "need": [
      "HCl",
      "LiOH"
    ],
    "eq": "HCl + LiOH → LiCl + H2O",
    "out": [
      "LiCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hcl_mgoh2",
    "need": [
      "HCl",
      "Mg(OH)2"
    ],
    "eq": "2HCl + Mg(OH)2 → MgCl2 + 2H2O",
    "out": [
      "MgCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_cuoh2",
    "need": [
      "HCl",
      "Cu(OH)2"
    ],
    "eq": "2HCl + Cu(OH)2 → CuCl2 + 2H2O",
    "out": [
      "CuCl2",
      "H2O"
    ],
    "col": "#4d83d7",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_feoh2",
    "need": [
      "HCl",
      "Fe(OH)2"
    ],
    "eq": "2HCl + Fe(OH)2 → FeCl2 + 2H2O",
    "out": [
      "FeCl2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_feoh3",
    "need": [
      "HCl",
      "Fe(OH)3"
    ],
    "eq": "3HCl + Fe(OH)3 → FeCl3 + 3H2O",
    "out": [
      "FeCl3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_znoh2",
    "need": [
      "HCl",
      "Zn(OH)2"
    ],
    "eq": "2HCl + Zn(OH)2 → ZnCl2 + 2H2O",
    "out": [
      "ZnCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_aloh3",
    "need": [
      "HCl",
      "Al(OH)3"
    ],
    "eq": "3HCl + Al(OH)3 → AlCl3 + 3H2O",
    "out": [
      "AlCl3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_cuoh2",
    "need": [
      "H2SO4",
      "Cu(OH)2"
    ],
    "eq": "H2SO4 + Cu(OH)2 → CuSO4 + 2H2O",
    "out": [
      "CuSO4",
      "H2O"
    ],
    "col": "#278ce0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_feoh2",
    "need": [
      "H2SO4",
      "Fe(OH)2"
    ],
    "eq": "H2SO4 + Fe(OH)2 → FeSO4 + 2H2O",
    "out": [
      "FeSO4",
      "H2O"
    ],
    "col": "#a9c8a0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_feoh3",
    "need": [
      "H2SO4",
      "Fe(OH)3"
    ],
    "eq": "3H2SO4 + 2Fe(OH)3 → Fe2(SO4)3 + 6H2O",
    "out": [
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_znoh2",
    "need": [
      "H2SO4",
      "Zn(OH)2"
    ],
    "eq": "H2SO4 + Zn(OH)2 → ZnSO4 + 2H2O",
    "out": [
      "ZnSO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_aloh3",
    "need": [
      "H2SO4",
      "Al(OH)3"
    ],
    "eq": "3H2SO4 + 2Al(OH)3 → Al2(SO4)3 + 6H2O",
    "out": [
      "Al2(SO4)3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_mgo",
    "need": [
      "H2SO4",
      "MgO"
    ],
    "eq": "H2SO4 + MgO → MgSO4 + H2O",
    "out": [
      "MgSO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_cao",
    "need": [
      "H2SO4",
      "CaO"
    ],
    "eq": "H2SO4 + CaO → CaSO4↓ + H2O",
    "out": [
      "CaSO4",
      "H2O"
    ],
    "col": "#e9e6df",
    "dur": 6,
    "bub": 0.1,
    "precip": "#e9e6df"
  },
  {
    "id": "h2so4_mgco3",
    "need": [
      "H2SO4",
      "MgCO3"
    ],
    "eq": "H2SO4 + MgCO3 → MgSO4 + CO2↑ + H2O",
    "out": [
      "MgSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.8,
    "gas": "CO2"
  },
  {
    "id": "h2so4_nahco3",
    "need": [
      "H2SO4",
      "NaHCO3"
    ],
    "eq": "H2SO4 + 2NaHCO3 → Na2SO4 + 2CO2↑ + 2H2O",
    "out": [
      "Na2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 1,
    "gas": "CO2"
  },
  {
    "id": "hno3_nahco3",
    "need": [
      "HNO3",
      "NaHCO3"
    ],
    "eq": "HNO3 + NaHCO3 → NaNO3 + CO2↑ + H2O",
    "out": [
      "NaNO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.8,
    "gas": "CO2"
  },
  {
    "id": "hno3_cuoh2",
    "need": [
      "HNO3",
      "Cu(OH)2"
    ],
    "eq": "2HNO3 + Cu(OH)2 → Cu(NO3)2 + 2H2O",
    "out": [
      "Cu(NO3)2",
      "H2O"
    ],
    "col": "#278ce0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_znoh2",
    "need": [
      "HNO3",
      "Zn(OH)2"
    ],
    "eq": "2HNO3 + Zn(OH)2 → Zn(NO3)2 + 2H2O",
    "out": [
      "Zn(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_mgoh2",
    "need": [
      "HNO3",
      "Mg(OH)2"
    ],
    "eq": "2HNO3 + Mg(OH)2 → Mg(NO3)2 + 2H2O",
    "out": [
      "Mg(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_feoh2",
    "need": [
      "HNO3",
      "Fe(OH)2"
    ],
    "eq": "2HNO3 + Fe(OH)2 → Fe(NO3)2 + 2H2O",
    "out": [
      "Fe(NO3)2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_feoh3",
    "need": [
      "HNO3",
      "Fe(OH)3"
    ],
    "eq": "3HNO3 + Fe(OH)3 → Fe(NO3)3 + 3H2O",
    "out": [
      "Fe(NO3)3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_mgo",
    "need": [
      "HNO3",
      "MgO"
    ],
    "eq": "2HNO3 + MgO → Mg(NO3)2 + H2O",
    "out": [
      "Mg(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_cao",
    "need": [
      "HNO3",
      "CaO"
    ],
    "eq": "2HNO3 + CaO → Ca(NO3)2 + H2O",
    "out": [
      "Ca(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_feo",
    "need": [
      "HNO3",
      "FeO"
    ],
    "eq": "2HNO3 + FeO → Fe(NO3)2 + H2O",
    "out": [
      "Fe(NO3)2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_fe2o3",
    "need": [
      "HNO3",
      "Fe2O3"
    ],
    "eq": "6HNO3 + Fe2O3 → 2Fe(NO3)3 + 3H2O",
    "out": [
      "Fe(NO3)3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so3_naoh",
    "need": [
      "H2SO3",
      "NaOH"
    ],
    "eq": "H2SO3 + 2NaOH → Na2SO3 + 2H2O",
    "out": [
      "Na2SO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2co3_naoh",
    "need": [
      "H2CO3",
      "NaOH"
    ],
    "eq": "H2CO3 + 2NaOH → Na2CO3 + 2H2O",
    "out": [
      "Na2CO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2co3_caoh2",
    "need": [
      "H2CO3",
      "Ca(OH)2"
    ],
    "eq": "H2CO3 + Ca(OH)2 → CaCO3↓ + 2H2O",
    "out": [
      "CaCO3",
      "H2O"
    ],
    "col": "#dfdfd9",
    "dur": 6,
    "bub": 0.1,
    "precip": "#eeeeea"
  },
  {
    "id": "hbr_naoh",
    "need": [
      "HBr",
      "NaOH"
    ],
    "eq": "HBr + NaOH → NaBr + H2O",
    "out": [
      "NaBr",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hbr_koh",
    "need": [
      "HBr",
      "KOH"
    ],
    "eq": "HBr + KOH → KBr + H2O",
    "out": [
      "KBr",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hclo3_koh",
    "need": [
      "HClO3",
      "KOH"
    ],
    "eq": "HClO3 + KOH → KClO3 + H2O",
    "out": [
      "KClO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "nh3aq_hcl",
    "need": [
      "NH3(aq)",
      "HCl"
    ],
    "eq": "NH3(aq) + HCl → NH4Cl",
    "out": [
      "NH4Cl"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 0.05,
    "arrowLabel": "Amoniac trong nước nhận proton từ axit tạo muối amoni."
  },
  {
    "id": "nh3aq_hno3",
    "need": [
      "NH3(aq)",
      "HNO3"
    ],
    "eq": "NH3(aq) + HNO3 → NH4NO3",
    "out": [
      "NH4NO3"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 0.05
  },
  {
    "id": "nh3aq_h2so4",
    "need": [
      "NH3(aq)",
      "H2SO4"
    ],
    "eq": "2NH3(aq) + H2SO4 → (NH4)2SO4",
    "out": [
      "(NH4)2SO4"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 0.05
  },
  {
    "id": "agno3_hcl",
    "need": [
      "AgNO3",
      "HCl"
    ],
    "eq": "AgNO3 + HCl → AgCl↓ + HNO3",
    "out": [
      "AgCl",
      "HNO3"
    ],
    "col": "#e2e5e7",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f1f1eb"
  },
  {
    "id": "agno3_hbr",
    "need": [
      "AgNO3",
      "HBr"
    ],
    "eq": "AgNO3 + HBr → AgBr↓ + HNO3",
    "out": [
      "AgBr",
      "HNO3"
    ],
    "col": "#e7dfcc",
    "dur": 6,
    "bub": 0.08,
    "precip": "#e7dfcc"
  },
  {
    "id": "agno3_nabr",
    "need": [
      "AgNO3",
      "NaBr"
    ],
    "eq": "AgNO3 + NaBr → AgBr↓ + NaNO3",
    "out": [
      "AgBr",
      "NaNO3"
    ],
    "col": "#e7dfcc",
    "dur": 6,
    "bub": 0.08,
    "precip": "#e7dfcc"
  },
  {
    "id": "agno3_cucl2",
    "need": [
      "AgNO3",
      "CuCl2"
    ],
    "eq": "2AgNO3 + CuCl2 → 2AgCl↓ + Cu(NO3)2",
    "out": [
      "AgCl",
      "Cu(NO3)2"
    ],
    "col": "#5fae9c",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f1f1eb"
  },
  {
    "id": "agno3_fecl2",
    "need": [
      "AgNO3",
      "FeCl2"
    ],
    "eq": "2AgNO3 + FeCl2 → 2AgCl↓ + Fe(NO3)2",
    "out": [
      "AgCl",
      "Fe(NO3)2"
    ],
    "col": "#b8d8a4",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f1f1eb"
  },
  {
    "id": "agno3_fecl3",
    "need": [
      "AgNO3",
      "FeCl3"
    ],
    "eq": "3AgNO3 + FeCl3 → 3AgCl↓ + Fe(NO3)3",
    "out": [
      "AgCl",
      "Fe(NO3)3"
    ],
    "col": "#d6a34a",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f1f1eb"
  },
  {
    "id": "cacl2_na2so4",
    "need": [
      "CaCl2",
      "Na2SO4"
    ],
    "eq": "CaCl2 + Na2SO4 → CaSO4↓ + 2NaCl",
    "out": [
      "CaSO4",
      "NaCl"
    ],
    "col": "#e9e6df",
    "dur": 6,
    "bub": 0.08,
    "precip": "#e9e6df"
  },
  {
    "id": "cuso4_na2co3",
    "need": [
      "CuSO4",
      "Na2CO3"
    ],
    "eq": "CuSO4 + Na2CO3 → CuCO3↓ + Na2SO4",
    "out": [
      "CuCO3",
      "Na2SO4"
    ],
    "col": "#55a477",
    "dur": 6,
    "bub": 0.08,
    "precip": "#55a477"
  },
  {
    "id": "feso4_na2co3",
    "need": [
      "FeSO4",
      "Na2CO3"
    ],
    "eq": "FeSO4 + Na2CO3 → FeCO3↓ + Na2SO4",
    "out": [
      "FeCO3",
      "Na2SO4"
    ],
    "col": "#a9a58a",
    "dur": 6,
    "bub": 0.08,
    "precip": "#a9a58a"
  },
  {
    "id": "pbno3_kcl",
    "need": [
      "Pb(NO3)2",
      "KCl"
    ],
    "eq": "Pb(NO3)2 + 2KCl → PbCl2↓ + 2KNO3",
    "out": [
      "PbCl2",
      "KNO3"
    ],
    "col": "#e5e3dc",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f0eee8"
  },
  {
    "id": "pbno3_k2so4",
    "need": [
      "Pb(NO3)2",
      "K2SO4"
    ],
    "eq": "Pb(NO3)2 + K2SO4 → PbSO4↓ + 2KNO3",
    "out": [
      "PbSO4",
      "KNO3"
    ],
    "col": "#f1f0e9",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f1f0e9"
  },
  {
    "id": "pbno3_k2co3",
    "need": [
      "Pb(NO3)2",
      "K2CO3"
    ],
    "eq": "Pb(NO3)2 + K2CO3 → PbCO3↓ + 2KNO3",
    "out": [
      "PbCO3",
      "KNO3"
    ],
    "col": "#e5e1d2",
    "dur": 6,
    "bub": 0.08,
    "precip": "#e5e1d2"
  },
  {
    "id": "nano3_ca_co3",
    "need": [
      "Ca(NO3)2",
      "Na2CO3"
    ],
    "eq": "Ca(NO3)2 + Na2CO3 → CaCO3↓ + 2NaNO3",
    "out": [
      "CaCO3",
      "NaNO3"
    ],
    "col": "#dfdfd9",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "na3po4_cacl2",
    "need": [
      "Na3PO4",
      "CaCl2"
    ],
    "eq": "2Na3PO4 + 3CaCl2 → Ca3(PO4)2↓ + 6NaCl",
    "out": [
      "Ca3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "na3po4_cano3",
    "need": [
      "Na3PO4",
      "Ca(NO3)2"
    ],
    "eq": "2Na3PO4 + 3Ca(NO3)2 → Ca3(PO4)2↓ + 6NaNO3",
    "out": [
      "Ca3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "na3po4_fecl3",
    "need": [
      "Na3PO4",
      "FeCl3"
    ],
    "eq": "2Na3PO4 + 2FeCl3 → 2FePO4↓ + 6NaCl",
    "out": [
      "FePO4",
      "NaCl"
    ],
    "col": "#d6c9a0",
    "dur": 6,
    "bub": 0.08,
    "precip": "#d6c9a0"
  },
  {
    "id": "na3po4_feso4",
    "need": [
      "Na3PO4",
      "FeSO4"
    ],
    "eq": "2Na3PO4 + 3FeSO4 → Fe3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Fe3(PO4)2",
      "Na2SO4"
    ],
    "col": "#7a8ca8",
    "dur": 6,
    "bub": 0.08,
    "precip": "#7a8ca8"
  },
  {
    "id": "h2s_cuso4",
    "need": [
      "H2S",
      "CuSO4"
    ],
    "eq": "H2S + CuSO4 → CuS↓ + H2SO4",
    "out": [
      "CuS",
      "H2SO4"
    ],
    "col": "#252525",
    "dur": 6,
    "bub": 0.08,
    "precip": "#222222"
  },
  {
    "id": "h2s_feso4",
    "need": [
      "H2S",
      "FeSO4"
    ],
    "eq": "H2S + FeSO4 → FeS↓ + H2SO4",
    "out": [
      "FeS",
      "H2SO4"
    ],
    "col": "#3a342e",
    "dur": 6,
    "bub": 0.08,
    "precip": "#3a342e"
  },
  {
    "id": "na2s_pbno3",
    "need": [
      "Na2S",
      "Pb(NO3)2"
    ],
    "eq": "Na2S + Pb(NO3)2 → PbS↓ + 2NaNO3",
    "out": [
      "PbS",
      "NaNO3"
    ],
    "col": "#252525",
    "dur": 6,
    "bub": 0.08,
    "precip": "#222222"
  },
  {
    "id": "na2s_cucl2",
    "need": [
      "Na2S",
      "CuCl2"
    ],
    "eq": "Na2S + CuCl2 → CuS↓ + 2NaCl",
    "out": [
      "CuS",
      "NaCl"
    ],
    "col": "#252525",
    "dur": 6,
    "bub": 0.08,
    "precip": "#222222"
  },
  {
    "id": "fes_cuso4",
    "need": [
      "FeS",
      "CuSO4"
    ],
    "eq": "FeS + CuSO4 → CuS↓ + FeSO4",
    "out": [
      "CuS",
      "FeSO4"
    ],
    "col": "#252525",
    "dur": 6,
    "bub": 0.08,
    "precip": "#222222"
  },
  {
    "id": "cl2_kbr",
    "need": [
      "Cl2",
      "KBr"
    ],
    "eq": "Cl2 + 2KBr → 2KCl + Br2",
    "out": [
      "KCl",
      "Br2"
    ],
    "col": "#8a3824",
    "dur": 7,
    "bub": 0.1
  },
  {
    "id": "cl2_water",
    "need": [
      "Cl2",
      "H2O"
    ],
    "eq": "Cl2 + H2O ⇌ HCl + HClO",
    "out": [
      "HCl",
      "HClO"
    ],
    "col": "#d8e1e5",
    "dur": 6,
    "bub": 0.1,
    "arrowLabel": "Mô hình hóa cân bằng của nước clo."
  },
  {
    "id": "fe_cl2",
    "need": [
      "Fe",
      "Cl2"
    ],
    "eq": "2Fe + 3Cl2 → 2FeCl3",
    "out": [
      "FeCl3"
    ],
    "col": "#d6a34a",
    "dur": 7,
    "bub": 0.1,
    "heat": 60,
    "heating": true,
    "fire": 1
  },
  {
    "id": "h2_sulfur",
    "need": [
      "H2",
      "S"
    ],
    "eq": "H2 + S → H2S",
    "out": [
      "H2S"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.1,
    "gas": "H2S",
    "heat": 80,
    "heating": true
  },
  {
    "id": "h2_bromine",
    "need": [
      "H2",
      "Br2"
    ],
    "eq": "H2 + Br2 → 2HBr",
    "out": [
      "HBr"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.1,
    "gas": "HBr",
    "heat": 60,
    "heating": true
  },
  {
    "id": "haber_process",
    "need": [
      "N2",
      "H2"
    ],
    "eq": "N2 + 3H2 ⇌ 2NH3",
    "out": [
      "NH3"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.08,
    "heat": 120,
    "heating": true,
    "fire": 0,
    "explain": "Mô phỏng cân bằng Haber–Bosch; phản ứng thực tế cần xúc tác và áp suất cao."
  },
  {
    "id": "ammonia_oxidation",
    "need": [
      "NH3",
      "O2"
    ],
    "eq": "4NH3 + 3O2 → 2N2 + 6H2O",
    "out": [
      "N2",
      "H2O"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.2,
    "gas": "N2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "co_oxidation",
    "need": [
      "CO",
      "O2"
    ],
    "eq": "2CO + O2 → 2CO2",
    "out": [
      "CO2"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.4,
    "gas": "CO2",
    "heat": 60,
    "heating": true
  },
  {
    "id": "co_cuo",
    "need": [
      "CO",
      "CuO"
    ],
    "eq": "CO + CuO → Cu + CO2",
    "out": [
      "Cu",
      "CO2"
    ],
    "col": "#b5493b",
    "dur": 7,
    "bub": 0.2,
    "gas": "CO2",
    "heat": 70,
    "heating": true
  },
  {
    "id": "co_fe2o3",
    "need": [
      "CO",
      "Fe2O3"
    ],
    "eq": "3CO + Fe2O3 → 2Fe + 3CO2",
    "out": [
      "Fe",
      "CO2"
    ],
    "col": "#8d8d8d",
    "dur": 8,
    "bub": 0.3,
    "gas": "CO2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "al_thermite",
    "need": [
      "Al",
      "Fe2O3"
    ],
    "eq": "2Al + Fe2O3 → Al2O3 + 2Fe",
    "out": [
      "Al2O3",
      "Fe"
    ],
    "col": "#b7bfcc",
    "dur": 8,
    "bub": 0.2,
    "heat": 100,
    "heating": true,
    "fire": 1,
    "explain": "Mô phỏng phản ứng nhiệt nhôm tỏa nhiệt mạnh; đây không phải hướng dẫn thực nghiệm."
  },
  {
    "id": "carbon_dioxide_hot",
    "need": [
      "C",
      "CO2"
    ],
    "eq": "C + CO2 ⇌ 2CO",
    "out": [
      "CO"
    ],
    "col": "#bcbcbc",
    "dur": 8,
    "bub": 0.2,
    "gas": "CO",
    "heat": 110,
    "heating": true
  },
  {
    "id": "cu2o_oxidation",
    "need": [
      "Cu2O",
      "O2"
    ],
    "eq": "2Cu2O + O2 → 4CuO",
    "out": [
      "CuO"
    ],
    "col": "#222222",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "feo_oxidation",
    "need": [
      "FeO",
      "O2"
    ],
    "eq": "4FeO + O2 → 2Fe2O3",
    "out": [
      "Fe2O3"
    ],
    "col": "#8b4230",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "fe3o4_oxidation",
    "need": [
      "Fe3O4",
      "O2"
    ],
    "eq": "4Fe3O4 + O2 → 6Fe2O3",
    "out": [
      "Fe2O3"
    ],
    "col": "#8b4230",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "silica_hf",
    "need": [
      "SiO2",
      "HF"
    ],
    "eq": "SiO2 + 6HF → H2SiF6 + 2H2O",
    "out": [
      "H2SiF6",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 7,
    "bub": 0.1,
    "arrowLabel": "Phản ứng của HF với silica; HF là hóa chất cực độc và ăn mòn."
  },
  {
    "id": "co2_water",
    "need": [
      "CO2",
      "H2O"
    ],
    "eq": "CO2 + H2O ⇌ H2CO3",
    "out": [
      "H2CO3"
    ],
    "col": "#d8e1e5",
    "dur": 5,
    "bub": 0.05
  },
  {
    "id": "so2_water",
    "need": [
      "SO2",
      "H2O"
    ],
    "eq": "SO2 + H2O ⇌ H2SO3",
    "out": [
      "H2SO3"
    ],
    "col": "#d8e1e5",
    "dur": 5,
    "bub": 0.05
  },
  {
    "id": "h2o2_slow_decomp",
    "need": [
      "H2O2"
    ],
    "eq": "2H2O2 → 2H2O + O2↑",
    "out": [
      "H2O",
      "O2"
    ],
    "col": "#e7e8e7",
    "dur": 9,
    "bub": 0.4,
    "gas": "O2"
  },
  {
    "id": "cuoh2_thermal",
    "need": [
      "Cu(OH)2"
    ],
    "eq": "Cu(OH)2 → CuO + H2O",
    "out": [
      "CuO",
      "H2O"
    ],
    "col": "#222222",
    "dur": 7,
    "bub": 0.15,
    "gas": "H2O",
    "heat": 70,
    "heating": true
  },
  {
    "id": "feoh3_thermal",
    "need": [
      "Fe(OH)3"
    ],
    "eq": "2Fe(OH)3 → Fe2O3 + 3H2O",
    "out": [
      "Fe2O3",
      "H2O"
    ],
    "col": "#8b4230",
    "dur": 7,
    "bub": 0.15,
    "gas": "H2O",
    "heat": 80,
    "heating": true
  },
  {
    "id": "feoh2_thermal",
    "need": [
      "Fe(OH)2"
    ],
    "eq": "Fe(OH)2 → FeO + H2O",
    "out": [
      "FeO",
      "H2O"
    ],
    "col": "#2a2a2a",
    "dur": 7,
    "bub": 0.15,
    "gas": "H2O",
    "heat": 80,
    "heating": true
  },
  {
    "id": "mgoh2_thermal",
    "need": [
      "Mg(OH)2"
    ],
    "eq": "Mg(OH)2 → MgO + H2O",
    "out": [
      "MgO",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.15,
    "gas": "H2O",
    "heat": 80,
    "heating": true
  },
  {
    "id": "aloh3_thermal",
    "need": [
      "Al(OH)3"
    ],
    "eq": "2Al(OH)3 → Al2O3 + 3H2O",
    "out": [
      "Al2O3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.15,
    "gas": "H2O",
    "heat": 80,
    "heating": true
  },
  {
    "id": "mgco3_thermal",
    "need": [
      "MgCO3"
    ],
    "eq": "MgCO3 → MgO + CO2↑",
    "out": [
      "MgO",
      "CO2"
    ],
    "col": "#d6d6d0",
    "dur": 8,
    "bub": 0.5,
    "gas": "CO2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "feco3_thermal",
    "need": [
      "FeCO3"
    ],
    "eq": "FeCO3 → FeO + CO2↑",
    "out": [
      "FeO",
      "CO2"
    ],
    "col": "#2a2a2a",
    "dur": 8,
    "bub": 0.5,
    "gas": "CO2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "cuno3_thermal",
    "need": [
      "Cu(NO3)2"
    ],
    "eq": "2Cu(NO3)2 → 2CuO + 4NO2↑ + O2↑",
    "out": [
      "CuO",
      "NO2",
      "O2"
    ],
    "col": "#222222",
    "dur": 8,
    "bub": 0.8,
    "gas": "NO2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "agcl_photolysis",
    "need": [
      "AgCl"
    ],
    "eq": "2AgCl → 2Ag + Cl2↑",
    "out": [
      "Ag",
      "Cl2"
    ],
    "col": "#c6c6c8",
    "dur": 7,
    "bub": 0.08,
    "heat": 0,
    "arrowLabel": "ánh sáng",
    "fire": 0,
    "explain": "Bạc clorua bị phân hủy quang hóa dưới ánh sáng."
  },
  {
    "id": "agbr_photolysis",
    "need": [
      "AgBr"
    ],
    "eq": "2AgBr → 2Ag + Br2",
    "out": [
      "Ag",
      "Br2"
    ],
    "col": "#c6c6c8",
    "dur": 7,
    "bub": 0.08,
    "heat": 0,
    "arrowLabel": "ánh sáng",
    "fire": 0,
    "explain": "Bạc bromua bị phân hủy quang hóa dưới ánh sáng."
  },
  {
    "id": "na2o2_co2",
    "need": [
      "Na2O2",
      "CO2"
    ],
    "eq": "2Na2O2 + 2CO2 → 2Na2CO3 + O2↑",
    "out": [
      "Na2CO3",
      "O2"
    ],
    "col": "#e8e9e9",
    "dur": 7,
    "bub": 0.5,
    "gas": "O2"
  },
  {
    "id": "na2o2_so2",
    "need": [
      "Na2O2",
      "SO2"
    ],
    "eq": "Na2O2 + SO2 → Na2SO4",
    "out": [
      "Na2SO4"
    ],
    "col": "#e8e9e9",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "na2o2_hcl",
    "need": [
      "Na2O2",
      "HCl"
    ],
    "eq": "Na2O2 + 2HCl → 2NaCl + H2O2",
    "out": [
      "NaCl",
      "H2O2"
    ],
    "col": "#e8e9e9",
    "dur": 6,
    "bub": 0.1
  },
  {
    "id": "dichromate_hcl",
    "need": [
      "K2Cr2O7",
      "HCl"
    ],
    "eq": "K2Cr2O7 + 14HCl → 2KCl + 2CrCl3 + 3Cl2↑ + 7H2O",
    "out": [
      "KCl",
      "CrCl3",
      "Cl2",
      "H2O"
    ],
    "col": "#db802b",
    "dur": 8,
    "bub": 0.4,
    "gas": "Cl2",
    "heat": 70,
    "heating": true,
    "explain": "Phản ứng oxi hóa–khử minh họa; có thể tạo khí clo độc, không thực hiện ngoài phòng thí nghiệm chuyên dụng."
  },
  {
    "id": "permanganate_hcl",
    "need": [
      "KMnO4",
      "HCl"
    ],
    "eq": "2KMnO4 + 16HCl → 2KCl + 2MnCl2 + 5Cl2↑ + 8H2O",
    "out": [
      "KCl",
      "MnCl2",
      "Cl2",
      "H2O"
    ],
    "col": "#4e8b58",
    "dur": 8,
    "bub": 0.5,
    "gas": "Cl2",
    "heat": 70,
    "heating": true,
    "explain": "Phản ứng oxi hóa–khử minh họa có thể sinh khí clo độc."
  },
  {
    "id": "fe3o4_hcl",
    "need": [
      "Fe3O4",
      "HCl"
    ],
    "eq": "Fe3O4 + 8HCl → FeCl2 + 2FeCl3 + 4H2O",
    "out": [
      "FeCl2",
      "FeCl3",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 6,
    "bub": 0.1
  },
  {
    "id": "na2o_hcl",
    "need": [
      "Na2O",
      "HCl"
    ],
    "eq": "Na2O + 2HCl → 2NaCl + H2O",
    "out": [
      "NaCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "co2_cao",
    "need": [
      "CO2",
      "CaO"
    ],
    "eq": "CO2 + CaO → CaCO3",
    "out": [
      "CaCO3"
    ],
    "col": "#dfdfd9",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "co2_na2o",
    "need": [
      "CO2",
      "Na2O"
    ],
    "eq": "CO2 + Na2O → Na2CO3",
    "out": [
      "Na2CO3"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.05
  },
  {
    "id": "so2_cao",
    "need": [
      "SO2",
      "CaO"
    ],
    "eq": "SO2 + CaO → CaSO3",
    "out": [
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "so3_cao",
    "need": [
      "SO3",
      "CaO"
    ],
    "eq": "SO3 + CaO → CaSO4",
    "out": [
      "CaSO4"
    ],
    "col": "#e9e6df",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "so2_na2co3",
    "need": [
      "SO2",
      "Na2CO3"
    ],
    "eq": "SO2 + Na2CO3 → Na2SO3 + CO2↑",
    "out": [
      "Na2SO3",
      "CO2"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.3,
    "gas": "CO2"
  },
  {
    "id": "so3_na2co3",
    "need": [
      "SO3",
      "Na2CO3"
    ],
    "eq": "SO3 + Na2CO3 → Na2SO4 + CO2↑",
    "out": [
      "Na2SO4",
      "CO2"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.3,
    "gas": "CO2"
  },
  {
    "id": "chromate_acid",
    "need": [
      "K2CrO4",
      "H2SO4"
    ],
    "eq": "2K2CrO4 + H2SO4 → K2Cr2O7 + K2SO4 + H2O",
    "out": [
      "K2Cr2O7",
      "K2SO4",
      "H2O"
    ],
    "col": "#db802b",
    "dur": 6,
    "bub": 0.05,
    "arrowLabel": "Môi trường axit chuyển cromat màu vàng sang đicromat màu da cam."
  },
  {
    "id": "h2so4_caoh2",
    "need": [
      "H2SO4",
      "Ca(OH)2"
    ],
    "eq": "H2SO4 + Ca(OH)2 → CaSO4↓ + 2H2O",
    "out": [
      "CaSO4",
      "H2O"
    ],
    "col": "#e9e6df",
    "dur": 6,
    "bub": 0.1,
    "precip": "#e9e6df"
  },
  {
    "id": "fe_water_steam",
    "need": [
      "Fe",
      "H2O"
    ],
    "eq": "3Fe + 4H2O → Fe3O4 + 4H2↑",
    "out": [
      "Fe3O4",
      "H2"
    ],
    "col": "#333333",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2",
    "heat": 110,
    "heating": true,
    "explain": "Sắt phản ứng với hơi nước ở nhiệt độ cao."
  },
  {
    "id": "li_hcl",
    "need": [
      "Li",
      "HCl"
    ],
    "eq": "2Li + 2HCl → 2LiCl + H2↑",
    "out": [
      "LiCl",
      "H2"
    ],
    "col": "#e8e9e9",
    "dur": 6,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "pb_hcl",
    "need": [
      "Pb",
      "HCl"
    ],
    "eq": "Pb + 2HCl → PbCl2↓ + H2↑",
    "out": [
      "PbCl2",
      "H2"
    ],
    "col": "#e5e3dc",
    "dur": 8,
    "bub": 0.4,
    "precip": "#f0eee8",
    "gas": "H2",
    "fire": null
  },
  {
    "id": "fecl2_cl2",
    "need": [
      "FeCl2",
      "Cl2"
    ],
    "eq": "2FeCl2 + Cl2 → 2FeCl3",
    "out": [
      "FeCl3"
    ],
    "col": "#d6a34a",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "cucl_cl2",
    "need": [
      "CuCl",
      "Cl2"
    ],
    "eq": "2CuCl + Cl2 → 2CuCl2",
    "out": [
      "CuCl2"
    ],
    "col": "#5fae9c",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "hcl_cooh2",
    "need": [
      "HCl",
      "Co(OH)2"
    ],
    "eq": "2HCl + Co(OH)2 → CoCl2 + 2H2O",
    "out": [
      "CoCl2",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_cr3oh",
    "need": [
      "HCl",
      "Cr(OH)3"
    ],
    "eq": "3HCl + Cr(OH)3 → CrCl3 + 3H2O",
    "out": [
      "CrCl3",
      "H2O"
    ],
    "col": "#8d6cb0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_nioh2",
    "need": [
      "HCl",
      "Ni(OH)2"
    ],
    "eq": "2HCl + Ni(OH)2 → NiCl2 + 2H2O",
    "out": [
      "NiCl2",
      "H2O"
    ],
    "col": "#e3e3e0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_mnoh2",
    "need": [
      "HCl",
      "Mn(OH)2"
    ],
    "eq": "2HCl + Mn(OH)2 → MnCl2 + 2H2O",
    "out": [
      "MnCl2",
      "H2O"
    ],
    "col": "#d9b6b8",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_cooh2",
    "need": [
      "H2SO4",
      "Co(OH)2"
    ],
    "eq": "H2SO4 + Co(OH)2 → CoSO4 + 2H2O",
    "out": [
      "CoSO4",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_nioh2",
    "need": [
      "H2SO4",
      "Ni(OH)2"
    ],
    "eq": "H2SO4 + Ni(OH)2 → NiSO4 + 2H2O",
    "out": [
      "NiSO4",
      "H2O"
    ],
    "col": "#b9d4d0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_mnoh2",
    "need": [
      "H2SO4",
      "Mn(OH)2"
    ],
    "eq": "H2SO4 + Mn(OH)2 → MnSO4 + 2H2O",
    "out": [
      "MnSO4",
      "H2O"
    ],
    "col": "#f0eeee",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_cooh2",
    "need": [
      "HNO3",
      "Co(OH)2"
    ],
    "eq": "2HNO3 + Co(OH)2 → Co(NO3)2 + 2H2O",
    "out": [
      "Co(NO3)2",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_nioh2",
    "need": [
      "HNO3",
      "Ni(OH)2"
    ],
    "eq": "2HNO3 + Ni(OH)2 → Ni(NO3)2 + 2H2O",
    "out": [
      "Ni(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_mnoh2",
    "need": [
      "HNO3",
      "Mn(OH)2"
    ],
    "eq": "2HNO3 + Mn(OH)2 → Mn(NO3)2 + 2H2O",
    "out": [
      "Mn(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "co_cl2_naoh",
    "need": [
      "CoCl2",
      "NaOH"
    ],
    "eq": "CoCl2 + 2NaOH → Co(OH)2↓ + 2NaCl",
    "out": [
      "Co(OH)2",
      "NaCl"
    ],
    "col": "#d8c6bb",
    "dur": 6,
    "bub": 0.08,
    "precip": "#d8c6bb"
  },
  {
    "id": "ni_cl2_naoh",
    "need": [
      "NiCl2",
      "NaOH"
    ],
    "eq": "NiCl2 + 2NaOH → Ni(OH)2↓ + 2NaCl",
    "out": [
      "Ni(OH)2",
      "NaCl"
    ],
    "col": "#77a69a",
    "dur": 6,
    "bub": 0.08,
    "precip": "#77a69a"
  },
  {
    "id": "mn_cl2_naoh",
    "need": [
      "MnCl2",
      "NaOH"
    ],
    "eq": "MnCl2 + 2NaOH → Mn(OH)2↓ + 2NaCl",
    "out": [
      "Mn(OH)2",
      "NaCl"
    ],
    "col": "#d9b6b8",
    "dur": 6,
    "bub": 0.08,
    "precip": "#d9b6b8"
  },
  {
    "id": "cr_cl3_naoh",
    "need": [
      "CrCl3",
      "NaOH"
    ],
    "eq": "CrCl3 + 3NaOH → Cr(OH)3↓ + 3NaCl",
    "out": [
      "Cr(OH)3",
      "NaCl"
    ],
    "col": "#8d6cb0",
    "dur": 6,
    "bub": 0.08,
    "precip": "#8d6cb0"
  },
  {
    "id": "pbno3_naoh",
    "need": [
      "Pb(NO3)2",
      "NaOH"
    ],
    "eq": "Pb(NO3)2 + 2NaOH → Pb(OH)2↓ + 2NaNO3",
    "out": [
      "Pb(OH)2",
      "NaNO3"
    ],
    "col": "#e5e3dc",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f0eee8"
  },
  {
    "id": "agno3_naoh",
    "need": [
      "AgNO3",
      "NaOH"
    ],
    "eq": "2AgNO3 + 2NaOH → Ag2O↓ + 2NaNO3 + H2O",
    "out": [
      "Ag2O",
      "NaNO3",
      "H2O"
    ],
    "col": "#9e806b",
    "dur": 6,
    "bub": 0.08,
    "precip": "#5f5145"
  },
  {
    "id": "agno3_na2co3",
    "need": [
      "AgNO3",
      "Na2CO3"
    ],
    "eq": "2AgNO3 + Na2CO3 → Ag2CO3↓ + 2NaNO3",
    "out": [
      "Ag2CO3",
      "NaNO3"
    ],
    "col": "#dfd6b8",
    "dur": 6,
    "bub": 0.08,
    "precip": "#dfd6b8"
  },
  {
    "id": "bacl2_na2co3",
    "need": [
      "BaCl2",
      "Na2CO3"
    ],
    "eq": "BaCl2 + Na2CO3 → BaCO3↓ + 2NaCl",
    "out": [
      "BaCO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "bacl2_na2so3",
    "need": [
      "BaCl2",
      "Na2SO3"
    ],
    "eq": "BaCl2 + Na2SO3 → BaSO3↓ + 2NaCl",
    "out": [
      "BaSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "bacl2_k2cro4",
    "need": [
      "BaCl2",
      "K2CrO4"
    ],
    "eq": "BaCl2 + K2CrO4 → BaCrO4↓ + 2KCl",
    "out": [
      "BaCrO4",
      "KCl"
    ],
    "col": "#e1c52e",
    "dur": 6,
    "bub": 0.08,
    "precip": "#e1c52e"
  },
  {
    "id": "mgcl2_na2co3",
    "need": [
      "MgCl2",
      "Na2CO3"
    ],
    "eq": "MgCl2 + Na2CO3 → MgCO3↓ + 2NaCl",
    "out": [
      "MgCO3",
      "NaCl"
    ],
    "col": "#f0f0e9",
    "dur": 6,
    "bub": 0.08,
    "precip": "#f0f0e9"
  },
  {
    "id": "fecl2_na2co3",
    "need": [
      "FeCl2",
      "Na2CO3"
    ],
    "eq": "FeCl2 + Na2CO3 → FeCO3↓ + 2NaCl",
    "out": [
      "FeCO3",
      "NaCl"
    ],
    "col": "#a9a58a",
    "dur": 6,
    "bub": 0.08,
    "precip": "#a9a58a"
  },
  {
    "id": "znno3_na2s",
    "need": [
      "Zn(NO3)2",
      "Na2S"
    ],
    "eq": "Zn(NO3)2 + Na2S → ZnS↓ + 2NaNO3",
    "out": [
      "ZnS",
      "NaNO3"
    ],
    "col": "#333333",
    "dur": 6,
    "bub": 0.08,
    "precip": "#222222"
  },
  {
    "id": "fecl2_na2s",
    "need": [
      "FeCl2",
      "Na2S"
    ],
    "eq": "FeCl2 + Na2S → FeS↓ + 2NaCl",
    "out": [
      "FeS",
      "NaCl"
    ],
    "col": "#3a342e",
    "dur": 6,
    "bub": 0.08,
    "precip": "#3a342e"
  },
  {
    "id": "mg_znso4",
    "need": [
      "Mg",
      "ZnSO4"
    ],
    "eq": "Mg + ZnSO4 → MgSO4 + Zn",
    "out": [
      "MgSO4",
      "Zn"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "mg_feso4",
    "need": [
      "Mg",
      "FeSO4"
    ],
    "eq": "Mg + FeSO4 → MgSO4 + Fe",
    "out": [
      "MgSO4",
      "Fe"
    ],
    "col": "#a9c8a0",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "zn_niso4",
    "need": [
      "Zn",
      "NiSO4"
    ],
    "eq": "Zn + NiSO4 → ZnSO4 + Ni",
    "out": [
      "ZnSO4",
      "Ni"
    ],
    "col": "#b9d4d0",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "fe_niso4",
    "need": [
      "Fe",
      "NiSO4"
    ],
    "eq": "Fe + NiSO4 → FeSO4 + Ni",
    "out": [
      "FeSO4",
      "Ni"
    ],
    "col": "#a9c8a0",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "fe_pbno3",
    "need": [
      "Fe",
      "Pb(NO3)2"
    ],
    "eq": "Fe + Pb(NO3)2 → Fe(NO3)2 + Pb",
    "out": [
      "Fe(NO3)2",
      "Pb"
    ],
    "col": "#b8d8a4",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "zn_pbno3",
    "need": [
      "Zn",
      "Pb(NO3)2"
    ],
    "eq": "Zn + Pb(NO3)2 → Zn(NO3)2 + Pb",
    "out": [
      "Zn(NO3)2",
      "Pb"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.12
  },
  {
    "id": "al_agno3",
    "need": [
      "Al",
      "AgNO3"
    ],
    "eq": "Al + 3AgNO3 → Al(NO3)3 + 3Ag",
    "out": [
      "Al(NO3)3",
      "Ag"
    ],
    "col": "#c6c6c8",
    "dur": 8,
    "bub": 0.12,
    "precip": "#c6c6c8"
  },
  {
    "id": "cu_fecl3",
    "need": [
      "Cu",
      "FeCl3"
    ],
    "eq": "Cu + 2FeCl3 → CuCl2 + 2FeCl2",
    "out": [
      "CuCl2",
      "FeCl2"
    ],
    "col": "#5fae9c",
    "dur": 7,
    "bub": 0.05
  },
  {
    "id": "h2s_oxygen",
    "need": [
      "H2S",
      "O2"
    ],
    "eq": "2H2S + 3O2 → 2SO2 + 2H2O",
    "out": [
      "SO2",
      "H2O"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.6,
    "gas": "SO2",
    "heat": 70,
    "heating": true
  },
  {
    "id": "so2_h2s",
    "need": [
      "SO2",
      "H2S"
    ],
    "eq": "SO2 + 2H2S → 3S + 2H2O",
    "out": [
      "S",
      "H2O"
    ],
    "col": "#d9d84a",
    "dur": 7,
    "bub": 0.12,
    "precip": "#d9d84a"
  },
  {
    "id": "so2_h2o2",
    "need": [
      "SO2",
      "H2O2"
    ],
    "eq": "SO2 + H2O2 → H2SO4",
    "out": [
      "H2SO4"
    ],
    "col": "#e8e9e9",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "acetic_nahco3",
    "need": [
      "CH3COOH",
      "NaHCO3"
    ],
    "eq": "CH3COOH + NaHCO3 → CH3COONa + CO2↑ + H2O",
    "out": [
      "CH3COONa",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.8,
    "gas": "CO2"
  },
  {
    "id": "glucose_fehling",
    "need": [
      "Glucose",
      "Cu(OH)2",
      "NaOH"
    ],
    "eq": "C6H12O6 + 2Cu(OH)2 + NaOH → C6H11O7Na + Cu2O↓ + 3H2O",
    "out": [
      "C6H11O7Na",
      "Cu2O",
      "H2O"
    ],
    "col": "#b65a45",
    "dur": 8,
    "bub": 0.1,
    "precip": "#b65a45",
    "heat": 70,
    "heating": true,
    "fire": 0,
    "explain": "Phản ứng khử đồng(II) thành đồng(I) oxit đỏ gạch khi đun nóng trong môi trường kiềm."
  },
  {
    "id": "h2o2_ki_acid",
    "need": [
      "H2O2",
      "KI",
      "H2SO4"
    ],
    "eq": "H2O2 + 2KI + H2SO4 → I2 + K2SO4 + 2H2O",
    "out": [
      "I2",
      "K2SO4",
      "H2O"
    ],
    "col": "#514080",
    "dur": 7,
    "bub": 0.12
  },
  {
    "id": "kmno4_h2o2_acid",
    "need": [
      "KMnO4",
      "H2O2",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 5H2O2 + 3H2SO4 → K2SO4 + 2MnSO4 + 8H2O + 5O2↑",
    "out": [
      "K2SO4",
      "MnSO4",
      "H2O",
      "O2"
    ],
    "col": "#4e8b58",
    "dur": 8,
    "bub": 0.8,
    "gas": "O2"
  },
  {
    "id": "p_combustion",
    "need": [
      "P (white)",
      "O2"
    ],
    "eq": "4P + 5O2 → P4O10",
    "out": [
      "P4O10"
    ],
    "col": "#eeeeea",
    "dur": 8,
    "bub": 0.3,
    "heat": 60,
    "heating": true,
    "fire": 1
  },
  {
    "id": "p4o10_water",
    "need": [
      "P4O10",
      "H2O"
    ],
    "eq": "P4O10 + 6H2O → 4H3PO4",
    "out": [
      "H3PO4"
    ],
    "col": "#e8e9e9",
    "dur": 6,
    "bub": 0.05
  },
  {
    "id": "tollens_prepare",
    "need": [
      "Ag2O",
      "NH3",
      "H2O"
    ],
    "eq": "Ag2O + 4NH3 + H2O ⇌ 2[Ag(NH3)2]OH",
    "out": [
      "[Ag(NH3)2]OH"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.05,
    "explain": "Amoniac hòa tan bạc oxit tạo phức bạc amoniac — thuốc thử cho phản ứng tráng bạc."
  },
  {
    "id": "tollens_reduce_glucose",
    "need": [
      "[Ag(NH3)2]OH",
      "Glucose"
    ],
    "eq": "C6H12O6 + 2[Ag(NH3)2]OH → C6H15NO7 + 2Ag↓ + 3NH3 + H2O",
    "out": [
      "C6H15NO7",
      "Ag",
      "NH3",
      "H2O"
    ],
    "col": "#c6c6c8",
    "precip": "#c6c6c8",
    "dur": 9,
    "bub": 0.06,
    "explain": "Glucozơ khử bạc(I) thành bạc kim loại; mô phỏng thể hiện bạc màu xám sáng và dung dịch sản phẩm."
  },
  {
    "id": "acid_permanganate_iron2",
    "need": [
      "KMnO4",
      "FeSO4",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 10FeSO4 + 8H2SO4 → K2SO4 + 2MnSO4 + 5Fe2(SO4)3 + 8H2O",
    "out": [
      "K2SO4",
      "MnSO4",
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#a9c8a0",
    "dur": 9,
    "bub": 0.6,
    "explain": "Phản ứng oxi hóa–khử trong môi trường axit: permanganat oxi hóa Fe²⁺ thành Fe³⁺."
  },
  {
    "id": "acid_dichromate_iodide",
    "need": [
      "K2Cr2O7",
      "KI",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 6KI + 7H2SO4 → Cr2(SO4)3 + 4K2SO4 + 3I2 + 7H2O",
    "out": [
      "Cr2(SO4)3",
      "K2SO4",
      "I2",
      "H2O"
    ],
    "col": "#805b91",
    "dur": 9,
    "bub": 0.2,
    "explain": "Đicromat oxi hóa iodua thành iốt trong môi trường axit."
  },
  {
    "id": "acid_permanganate_sulfite",
    "need": [
      "KMnO4",
      "Na2SO3",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 5Na2SO3 + 3H2SO4 → K2SO4 + 5Na2SO4 + 2MnSO4 + 3H2O",
    "out": [
      "K2SO4",
      "Na2SO4",
      "MnSO4",
      "H2O"
    ],
    "col": "#4e8b58",
    "dur": 9,
    "bub": 0.25,
    "explain": "Permanganat oxi hóa ion sunfit thành sunfat trong môi trường axit."
  },
  {
    "id": "acid_dichromate_sulfite",
    "need": [
      "K2Cr2O7",
      "Na2SO3",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 3Na2SO3 + 4H2SO4 → K2SO4 + Cr2(SO4)3 + 3Na2SO4 + 4H2O",
    "out": [
      "K2SO4",
      "Cr2(SO4)3",
      "Na2SO4",
      "H2O"
    ],
    "col": "#db802b",
    "dur": 9,
    "bub": 0.15,
    "explain": "Đicromat oxi hóa sunfit thành sunfat trong môi trường axit."
  },
  {
    "id": "acid_permanganate_iodide",
    "need": [
      "KMnO4",
      "KI",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 10KI + 8H2SO4 → 6K2SO4 + 2MnSO4 + 5I2 + 8H2O",
    "out": [
      "K2SO4",
      "MnSO4",
      "I2",
      "H2O"
    ],
    "col": "#514080",
    "dur": 9,
    "bub": 0.25,
    "explain": "Permanganat oxi hóa iodua thành iốt trong môi trường axit."
  },
  {
    "id": "acid_dichromate_iron2",
    "need": [
      "K2Cr2O7",
      "FeSO4",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 6FeSO4 + 7H2SO4 → K2SO4 + Cr2(SO4)3 + 3Fe2(SO4)3 + 7H2O",
    "out": [
      "K2SO4",
      "Cr2(SO4)3",
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 9,
    "bub": 0.2,
    "explain": "Đicromat oxi hóa Fe²⁺ thành Fe³⁺ trong môi trường axit."
  },
  {
    "id": "acid_peroxide_iron2",
    "need": [
      "FeSO4",
      "H2O2",
      "H2SO4"
    ],
    "eq": "2FeSO4 + H2O2 + H2SO4 → Fe2(SO4)3 + 2H2O",
    "out": [
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 7,
    "bub": 0.1,
    "explain": "Hiđro peoxit oxi hóa Fe²⁺ thành Fe³⁺ trong môi trường axit."
  },
  {
    "id": "limestone_carbonation",
    "need": [
      "CaCO3",
      "CO2",
      "H2O"
    ],
    "eq": "CaCO3 + CO2 + H2O ⇌ Ca(HCO3)2",
    "out": [
      "Ca(HCO3)2"
    ],
    "col": "#e8e8e2",
    "dur": 7,
    "bub": 0.05,
    "explain": "CO₂ hòa tan trong nước giúp chuyển canxi cacbonat ít tan thành canxi hiđrocacbonat tan."
  },
  {
    "id": "ammonium_bicarbonate_formation",
    "need": [
      "NH3",
      "CO2",
      "H2O"
    ],
    "eq": "NH3 + CO2 + H2O ⇌ NH4HCO3",
    "out": [
      "NH4HCO3"
    ],
    "col": "#e8e8e2",
    "dur": 7,
    "bub": 0.05,
    "explain": "Amoniac, cacbon đioxit và nước tạo cân bằng hiđrocacbonat amoni."
  },
  {
    "id": "nitrogen_dioxide_oxidation_water",
    "need": [
      "NO2",
      "O2",
      "H2O"
    ],
    "eq": "4NO2 + O2 + 2H2O → 4HNO3",
    "out": [
      "HNO3"
    ],
    "col": "#d0c4b0",
    "dur": 8,
    "bub": 0.2,
    "explain": "Oxi hóa NO₂ trong nước tạo axit nitric; mô phỏng phương trình tổng quát."
  },
  {
    "id": "sulfur_dioxide_to_sulfuric_acid",
    "need": [
      "SO2",
      "O2",
      "H2O"
    ],
    "eq": "2SO2 + O2 + 2H2O ⇌ 2H2SO4",
    "out": [
      "H2SO4"
    ],
    "heat": 80,
    "heating": true,
    "arrowLabel": "xúc tác, t°",
    "col": "#e8e9e9",
    "dur": 9,
    "bub": 0.08,
    "explain": "Phương trình tổng quát của quá trình oxi hóa SO₂ rồi hấp thụ tạo axit sunfuric; quy trình thực tế cần xúc tác và nhiều công đoạn."
  },
  {
    "id": "ethanol_dichromate_acid",
    "need": [
      "C2H5OH",
      "K2Cr2O7",
      "H2SO4"
    ],
    "eq": "3C2H5OH + 2K2Cr2O7 + 8H2SO4 → 3CH3COOH + 2Cr2(SO4)3 + 2K2SO4 + 11H2O",
    "out": [
      "CH3COOH",
      "Cr2(SO4)3",
      "K2SO4",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d6b276",
    "dur": 10,
    "bub": 0.1,
    "explain": "Đicromat trong môi trường axit oxi hóa etanol thành axit axetic theo phương trình tổng quát."
  },
  {
    "id": "iodine_hot_alkali",
    "need": [
      "I2",
      "NaOH",
      "H2O"
    ],
    "eq": "3I2 + 6NaOH → 5NaI + NaIO3 + 3H2O",
    "out": [
      "NaI",
      "NaIO3",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 9,
    "bub": 0.1,
    "explain": "Trong kiềm nóng, iốt bị phản ứng tự oxi hóa–khử tạo iodua và iodat."
  },
  {
    "id": "chlorine_hot_alkali",
    "need": [
      "Cl2",
      "NaOH",
      "H2O"
    ],
    "eq": "3Cl2 + 6NaOH → 5NaCl + NaClO3 + 3H2O",
    "out": [
      "NaCl",
      "NaClO3",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 9,
    "bub": 0.15,
    "explain": "Clo phản ứng với kiềm nóng, đặc tạo clorua và clorat; chỉ mô phỏng do khí clo độc."
  },
  {
    "id": "iron_rusting_water_oxygen",
    "need": [
      "Fe",
      "O2",
      "H2O"
    ],
    "eq": "4Fe + 3O2 + 6H2O → 4Fe(OH)3",
    "out": [
      "Fe(OH)3"
    ],
    "col": "#8b4230",
    "precip": "#8b4230",
    "dur": 10,
    "bub": 0.08,
    "explain": "Mô hình hóa đơn giản quá trình ăn mòn sắt trong không khí ẩm; gỉ thực tế có thành phần phức tạp."
  }
];

// Build an exhaustive audit of all unique two-substance combinations in the current inventory.
// This is a coverage audit, not a claim that every pair chemically reacts.
window.CHEM_PAIR_AUDIT = function(inventory, rules = window.CHEM_RX) {
 const ids = [...new Set((inventory || []).map(item => typeof item === 'string' ? item : item.id))];
 const exact = new Set(), multi = new Set();
 for (const rule of (rules || [])) {
  if (!Array.isArray(rule.need)) continue;
  const key = rule.need.slice().sort().join(' + ');
  if (rule.need.length === 2) exact.add(key);
  else if (rule.need.length > 2) {
   for (let i = 0; i < rule.need.length; i++) for (let j = i + 1; j < rule.need.length; j++)
    multi.add([rule.need[i], rule.need[j]].sort().join(' + '));
  }
 }
 const pairs = [];
 for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
  const key = [ids[i], ids[j]].sort().join(' + ');
  pairs.push({a: ids[i], b: ids[j], status: exact.has(key) ? 'has-rule' : multi.has(key) ? 'part-of-multi-substance-rule' : 'unclassified'});
 }
 return {inventoryCount: ids.length, pairCount: pairs.length, exactRulePairs: pairs.filter(p => p.status === 'has-rule').length, multiSubstancePairs: pairs.filter(p => p.status === 'part-of-multi-substance-rule').length, unclassifiedPairs: pairs.filter(p => p.status === 'unclassified').length, pairs};
};

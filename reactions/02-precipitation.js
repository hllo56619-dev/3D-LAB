// Chemistry Lab 3D — precipitation (380 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
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
    "dur": 8,
    "bub": 0.3,
    "gas": "H2O",
    "explain": "Tinh thể đồng(II) sunfat ngậm nước mất nước kết tinh khi đun nóng; màu xanh lam nhạt dần.",
    "solidOut": [
      "CuSO4"
    ]
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
  },
  {
    "id": "cao_so2_oxygen",
    "need": [
      "CaO",
      "SO2",
      "O2"
    ],
    "eq": "2CaO + 2SO2 + O2 → 2CaSO4",
    "out": [
      "CaSO4"
    ],
    "heat": 80,
    "heating": true,
    "col": "#e9e6df",
    "precip": "#e9e6df",
    "dur": 8,
    "bub": 0.05,
    "explain": "Oxi hóa SO₂ có mặt CaO tạo canxi sunfat trong mô hình ở điều kiện nóng."
  },
  {
    "id": "mg_hf",
    "need": [
      "Mg",
      "HF"
    ],
    "eq": "Mg + 2HF → MgF2 + H2↑",
    "out": [
      "MgF2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Chỉ mô phỏng; HF cực độc và ăn mòn mạnh."
  },
  {
    "id": "zn_hf",
    "need": [
      "Zn",
      "HF"
    ],
    "eq": "Zn + 2HF → ZnF2 + H2↑",
    "out": [
      "ZnF2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Chỉ mô phỏng; HF cực độc và ăn mòn mạnh."
  },
  {
    "id": "ca_hf",
    "need": [
      "Ca",
      "HF"
    ],
    "eq": "Ca + 2HF → CaF2 + H2↑",
    "out": [
      "CaF2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Chỉ mô phỏng; HF cực độc và ăn mòn mạnh."
  },
  {
    "id": "zn_phosphoric",
    "need": [
      "Zn",
      "H3PO4"
    ],
    "eq": "3Zn + 2H3PO4 → Zn3(PO4)2↓ + 3H2↑",
    "out": [
      "Zn3(PO4)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "precip": "#eeeeea",
    "gas": "H2"
  },
  {
    "id": "mg_phosphoric",
    "need": [
      "Mg",
      "H3PO4"
    ],
    "eq": "3Mg + 2H3PO4 → Mg3(PO4)2↓ + 3H2↑",
    "out": [
      "Mg3(PO4)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "precip": "#eeeeea",
    "gas": "H2"
  },
  {
    "id": "ga_oxygen",
    "need": [
      "Ga",
      "O2"
    ],
    "eq": "4Ga + 3O2 → 2Ga2O3",
    "out": [
      "Ga2O3"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "heat": 70,
    "heating": true,
    "precip": "#eeeeea"
  },
  {
    "id": "h2so4_caco3",
    "need": [
      "H2SO4",
      "CaCO3"
    ],
    "eq": "H2SO4 + CaCO3 → CaSO4↓ + CO2↑ + H2O",
    "out": [
      "CaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "CO2",
    "precip": "#e9e6df"
  },
  {
    "id": "mg_agno3",
    "need": [
      "Mg",
      "AgNO3"
    ],
    "eq": "Mg + 2AgNO3 → Mg(NO3)2 + 2Ag",
    "out": [
      "Mg(NO3)2",
      "Ag"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "precip": "#c6c6c8"
  },
  {
    "id": "fecl2_naoh",
    "need": [
      "FeCl2",
      "NaOH"
    ],
    "eq": "FeCl2 + 2NaOH → Fe(OH)2↓ + 2NaCl",
    "out": [
      "Fe(OH)2",
      "NaCl"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "precip": "#a9c8a0"
  },
  {
    "id": "zncl2_naoh",
    "need": [
      "ZnCl2",
      "NaOH"
    ],
    "eq": "ZnCl2 + 2NaOH → Zn(OH)2↓ + 2NaCl",
    "out": [
      "Zn(OH)2",
      "NaCl"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "precip": "#eeeeea"
  },
  {
    "id": "cuso4_na3po4",
    "need": [
      "CuSO4",
      "Na3PO4"
    ],
    "eq": "3CuSO4 + 2Na3PO4 → Cu3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Cu3(PO4)2",
      "Na2SO4"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "precip": "#55a477"
  },
  {
    "id": "precipitation_agno3_bacl2_1",
    "need": [
      "BaCl2",
      "AgNO3"
    ],
    "eq": "BaCl2 + 2AgNO3 → Ba(NO3)2 + 2AgCl↓",
    "out": [
      "Ba(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_pb_no3_2_2",
    "need": [
      "BaCl2",
      "Pb(NO3)2"
    ],
    "eq": "BaCl2 + Pb(NO3)2 → Ba(NO3)2 + PbCl2↓",
    "out": [
      "Ba(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_cuso4_3",
    "need": [
      "BaCl2",
      "CuSO4"
    ],
    "eq": "BaCl2 + CuSO4 → BaSO4↓ + CuCl2",
    "out": [
      "BaSO4",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_feso4_4",
    "need": [
      "BaCl2",
      "FeSO4"
    ],
    "eq": "BaCl2 + FeSO4 → BaSO4↓ + FeCl2",
    "out": [
      "BaSO4",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_fe2_so4_3_5",
    "need": [
      "BaCl2",
      "Fe2(SO4)3"
    ],
    "eq": "3BaCl2 + Fe2(SO4)3 → 3BaSO4↓ + 2FeCl3",
    "out": [
      "BaSO4",
      "FeCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_znso4_6",
    "need": [
      "BaCl2",
      "ZnSO4"
    ],
    "eq": "BaCl2 + ZnSO4 → BaSO4↓ + ZnCl2",
    "out": [
      "BaSO4",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_niso4_7",
    "need": [
      "BaCl2",
      "NiSO4"
    ],
    "eq": "BaCl2 + NiSO4 → BaSO4↓ + NiCl2",
    "out": [
      "BaSO4",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_mnso4_8",
    "need": [
      "BaCl2",
      "MnSO4"
    ],
    "eq": "BaCl2 + MnSO4 → BaSO4↓ + MnCl2",
    "out": [
      "BaSO4",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_snso4_9",
    "need": [
      "BaCl2",
      "SnSO4"
    ],
    "eq": "BaCl2 + SnSO4 → BaSO4↓ + SnCl2",
    "out": [
      "BaSO4",
      "SnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_coso4_10",
    "need": [
      "BaCl2",
      "CoSO4"
    ],
    "eq": "BaCl2 + CoSO4 → BaSO4↓ + CoCl2",
    "out": [
      "BaSO4",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al2_so4_3_bacl2_11",
    "need": [
      "BaCl2",
      "Al2(SO4)3"
    ],
    "eq": "3BaCl2 + Al2(SO4)3 → 3BaSO4↓ + 2AlCl3",
    "out": [
      "BaSO4",
      "AlCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_cr2_so4_3_12",
    "need": [
      "BaCl2",
      "Cr2(SO4)3"
    ],
    "eq": "3BaCl2 + Cr2(SO4)3 → 3BaSO4↓ + 2CrCl3",
    "out": [
      "BaSO4",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_k2co3_13",
    "need": [
      "BaCl2",
      "K2CO3"
    ],
    "eq": "BaCl2 + K2CO3 → BaCO3↓ + 2KCl",
    "out": [
      "BaCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_bacl2_na3po4_14",
    "need": [
      "BaCl2",
      "Na3PO4"
    ],
    "eq": "3BaCl2 + 2Na3PO4 → Ba3(PO4)2↓ + 6NaCl",
    "out": [
      "Ba3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fecl2_pb_no3_2_15",
    "need": [
      "FeCl2",
      "Pb(NO3)2"
    ],
    "eq": "FeCl2 + Pb(NO3)2 → Fe(NO3)2 + PbCl2↓",
    "out": [
      "Fe(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fecl2_k2co3_16",
    "need": [
      "FeCl2",
      "K2CO3"
    ],
    "eq": "FeCl2 + K2CO3 → FeCO3↓ + 2KCl",
    "out": [
      "FeCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fecl2_na3po4_17",
    "need": [
      "FeCl2",
      "Na3PO4"
    ],
    "eq": "3FeCl2 + 2Na3PO4 → Fe3(PO4)2↓ + 6NaCl",
    "out": [
      "Fe3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fecl3_pb_no3_2_18",
    "need": [
      "FeCl3",
      "Pb(NO3)2"
    ],
    "eq": "2FeCl3 + 3Pb(NO3)2 → 2Fe(NO3)3 + 3PbCl2↓",
    "out": [
      "Fe(NO3)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_zncl2_19",
    "need": [
      "ZnCl2",
      "AgNO3"
    ],
    "eq": "ZnCl2 + 2AgNO3 → Zn(NO3)2 + 2AgCl↓",
    "out": [
      "Zn(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_pb_no3_2_zncl2_20",
    "need": [
      "ZnCl2",
      "Pb(NO3)2"
    ],
    "eq": "ZnCl2 + Pb(NO3)2 → Zn(NO3)2 + PbCl2↓",
    "out": [
      "Zn(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_zncl2_21",
    "need": [
      "ZnCl2",
      "K2CO3"
    ],
    "eq": "ZnCl2 + K2CO3 → ZnCO3↓ + 2KCl",
    "out": [
      "ZnCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_zncl2_22",
    "need": [
      "ZnCl2",
      "Na3PO4"
    ],
    "eq": "3ZnCl2 + 2Na3PO4 → Zn3(PO4)2↓ + 6NaCl",
    "out": [
      "Zn3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_alcl3_23",
    "need": [
      "AlCl3",
      "AgNO3"
    ],
    "eq": "AlCl3 + 3AgNO3 → Al(NO3)3 + 3AgCl↓",
    "out": [
      "Al(NO3)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_alcl3_pb_no3_2_24",
    "need": [
      "AlCl3",
      "Pb(NO3)2"
    ],
    "eq": "2AlCl3 + 3Pb(NO3)2 → 2Al(NO3)3 + 3PbCl2↓",
    "out": [
      "Al(NO3)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_alcl3_na3po4_25",
    "need": [
      "AlCl3",
      "Na3PO4"
    ],
    "eq": "AlCl3 + Na3PO4 → AlPO4↓ + 3NaCl",
    "out": [
      "AlPO4",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_cocl2_26",
    "need": [
      "CoCl2",
      "AgNO3"
    ],
    "eq": "CoCl2 + 2AgNO3 → Co(NO3)2 + 2AgCl↓",
    "out": [
      "Co(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cocl2_pb_no3_2_27",
    "need": [
      "CoCl2",
      "Pb(NO3)2"
    ],
    "eq": "CoCl2 + Pb(NO3)2 → Co(NO3)2 + PbCl2↓",
    "out": [
      "Co(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cocl2_k2co3_28",
    "need": [
      "CoCl2",
      "K2CO3"
    ],
    "eq": "CoCl2 + K2CO3 → CoCO3↓ + 2KCl",
    "out": [
      "CoCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cocl2_na3po4_29",
    "need": [
      "CoCl2",
      "Na3PO4"
    ],
    "eq": "3CoCl2 + 2Na3PO4 → Co3(PO4)2↓ + 6NaCl",
    "out": [
      "Co3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_na2so4_30",
    "need": [
      "AgNO3",
      "Na2SO4"
    ],
    "eq": "2AgNO3 + Na2SO4 → Ag2SO4↓ + 2NaNO3",
    "out": [
      "Ag2SO4",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_k2so4_31",
    "need": [
      "AgNO3",
      "K2SO4"
    ],
    "eq": "2AgNO3 + K2SO4 → Ag2SO4↓ + 2KNO3",
    "out": [
      "Ag2SO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_cuso4_32",
    "need": [
      "AgNO3",
      "CuSO4"
    ],
    "eq": "2AgNO3 + CuSO4 → Ag2SO4↓ + Cu(NO3)2",
    "out": [
      "Ag2SO4",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_feso4_33",
    "need": [
      "AgNO3",
      "FeSO4"
    ],
    "eq": "2AgNO3 + FeSO4 → Ag2SO4↓ + Fe(NO3)2",
    "out": [
      "Ag2SO4",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_fe2_so4_3_34",
    "need": [
      "AgNO3",
      "Fe2(SO4)3"
    ],
    "eq": "6AgNO3 + Fe2(SO4)3 → 3Ag2SO4↓ + 2Fe(NO3)3",
    "out": [
      "Ag2SO4",
      "Fe(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_znso4_35",
    "need": [
      "AgNO3",
      "ZnSO4"
    ],
    "eq": "2AgNO3 + ZnSO4 → Ag2SO4↓ + Zn(NO3)2",
    "out": [
      "Ag2SO4",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_mgso4_36",
    "need": [
      "AgNO3",
      "MgSO4"
    ],
    "eq": "2AgNO3 + MgSO4 → Ag2SO4↓ + Mg(NO3)2",
    "out": [
      "Ag2SO4",
      "Mg(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_niso4_37",
    "need": [
      "AgNO3",
      "NiSO4"
    ],
    "eq": "2AgNO3 + NiSO4 → Ag2SO4↓ + Ni(NO3)2",
    "out": [
      "Ag2SO4",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_mnso4_38",
    "need": [
      "AgNO3",
      "MnSO4"
    ],
    "eq": "2AgNO3 + MnSO4 → Ag2SO4↓ + Mn(NO3)2",
    "out": [
      "Ag2SO4",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_snso4_39",
    "need": [
      "AgNO3",
      "SnSO4"
    ],
    "eq": "2AgNO3 + SnSO4 → Ag2SO4↓ + Sn(NO3)2",
    "out": [
      "Ag2SO4",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_coso4_40",
    "need": [
      "AgNO3",
      "CoSO4"
    ],
    "eq": "2AgNO3 + CoSO4 → Ag2SO4↓ + Co(NO3)2",
    "out": [
      "Ag2SO4",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_al2_so4_3_41",
    "need": [
      "AgNO3",
      "Al2(SO4)3"
    ],
    "eq": "6AgNO3 + Al2(SO4)3 → 3Ag2SO4↓ + 2Al(NO3)3",
    "out": [
      "Ag2SO4",
      "Al(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_cr2_so4_3_42",
    "need": [
      "AgNO3",
      "Cr2(SO4)3"
    ],
    "eq": "6AgNO3 + Cr2(SO4)3 → 3Ag2SO4↓ + 2Cr(NO3)3",
    "out": [
      "Ag2SO4",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_znbr2_43",
    "need": [
      "AgNO3",
      "ZnBr2"
    ],
    "eq": "2AgNO3 + ZnBr2 → 2AgBr↓ + Zn(NO3)2",
    "out": [
      "AgBr",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_mgbr2_44",
    "need": [
      "AgNO3",
      "MgBr2"
    ],
    "eq": "2AgNO3 + MgBr2 → 2AgBr↓ + Mg(NO3)2",
    "out": [
      "AgBr",
      "Mg(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_cabr2_45",
    "need": [
      "AgNO3",
      "CaBr2"
    ],
    "eq": "2AgNO3 + CaBr2 → 2AgBr↓ + Ca(NO3)2",
    "out": [
      "AgBr",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_snbr2_46",
    "need": [
      "AgNO3",
      "SnBr2"
    ],
    "eq": "2AgNO3 + SnBr2 → 2AgBr↓ + Sn(NO3)2",
    "out": [
      "AgBr",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_nibr2_47",
    "need": [
      "AgNO3",
      "NiBr2"
    ],
    "eq": "2AgNO3 + NiBr2 → 2AgBr↓ + Ni(NO3)2",
    "out": [
      "AgBr",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_cobr2_48",
    "need": [
      "AgNO3",
      "CoBr2"
    ],
    "eq": "2AgNO3 + CoBr2 → 2AgBr↓ + Co(NO3)2",
    "out": [
      "AgBr",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_k2co3_49",
    "need": [
      "AgNO3",
      "K2CO3"
    ],
    "eq": "2AgNO3 + K2CO3 → Ag2CO3↓ + 2KNO3",
    "out": [
      "Ag2CO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_na3po4_50",
    "need": [
      "AgNO3",
      "Na3PO4"
    ],
    "eq": "3AgNO3 + Na3PO4 → Ag3PO4↓ + 3NaNO3",
    "out": [
      "Ag3PO4",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_agno3_k2cro4_51",
    "need": [
      "AgNO3",
      "K2CrO4"
    ],
    "eq": "2AgNO3 + K2CrO4 → Ag2CrO4↓ + 2KNO3",
    "out": [
      "Ag2CrO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ag2CrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cu_no3_2_k2co3_52",
    "need": [
      "Cu(NO3)2",
      "K2CO3"
    ],
    "eq": "Cu(NO3)2 + K2CO3 → CuCO3↓ + 2KNO3",
    "out": [
      "CuCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cu_no3_2_na3po4_53",
    "need": [
      "Cu(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Cu(NO3)2 + 2Na3PO4 → Cu3(PO4)2↓ + 6NaNO3",
    "out": [
      "Cu3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cuso4_pb_no3_2_54",
    "need": [
      "Pb(NO3)2",
      "CuSO4"
    ],
    "eq": "Pb(NO3)2 + CuSO4 → PbSO4↓ + Cu(NO3)2",
    "out": [
      "PbSO4",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_feso4_pb_no3_2_55",
    "need": [
      "Pb(NO3)2",
      "FeSO4"
    ],
    "eq": "Pb(NO3)2 + FeSO4 → PbSO4↓ + Fe(NO3)2",
    "out": [
      "PbSO4",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fe2_so4_3_pb_no3_2_56",
    "need": [
      "Pb(NO3)2",
      "Fe2(SO4)3"
    ],
    "eq": "3Pb(NO3)2 + Fe2(SO4)3 → 3PbSO4↓ + 2Fe(NO3)3",
    "out": [
      "PbSO4",
      "Fe(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_pb_no3_2_znso4_57",
    "need": [
      "Pb(NO3)2",
      "ZnSO4"
    ],
    "eq": "Pb(NO3)2 + ZnSO4 → PbSO4↓ + Zn(NO3)2",
    "out": [
      "PbSO4",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mgso4_pb_no3_2_58",
    "need": [
      "Pb(NO3)2",
      "MgSO4"
    ],
    "eq": "Pb(NO3)2 + MgSO4 → PbSO4↓ + Mg(NO3)2",
    "out": [
      "PbSO4",
      "Mg(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_niso4_pb_no3_2_59",
    "need": [
      "Pb(NO3)2",
      "NiSO4"
    ],
    "eq": "Pb(NO3)2 + NiSO4 → PbSO4↓ + Ni(NO3)2",
    "out": [
      "PbSO4",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mnso4_pb_no3_2_60",
    "need": [
      "Pb(NO3)2",
      "MnSO4"
    ],
    "eq": "Pb(NO3)2 + MnSO4 → PbSO4↓ + Mn(NO3)2",
    "out": [
      "PbSO4",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_pb_no3_2_snso4_61",
    "need": [
      "Pb(NO3)2",
      "SnSO4"
    ],
    "eq": "Pb(NO3)2 + SnSO4 → PbSO4↓ + Sn(NO3)2",
    "out": [
      "PbSO4",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_coso4_pb_no3_2_62",
    "need": [
      "Pb(NO3)2",
      "CoSO4"
    ],
    "eq": "Pb(NO3)2 + CoSO4 → PbSO4↓ + Co(NO3)2",
    "out": [
      "PbSO4",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al2_so4_3_pb_no3_2_63",
    "need": [
      "Pb(NO3)2",
      "Al2(SO4)3"
    ],
    "eq": "3Pb(NO3)2 + Al2(SO4)3 → 3PbSO4↓ + 2Al(NO3)3",
    "out": [
      "PbSO4",
      "Al(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cr2_so4_3_pb_no3_2_64",
    "need": [
      "Pb(NO3)2",
      "Cr2(SO4)3"
    ],
    "eq": "3Pb(NO3)2 + Cr2(SO4)3 → 3PbSO4↓ + 2Cr(NO3)3",
    "out": [
      "PbSO4",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_pb_no3_2_znbr2_65",
    "need": [
      "Pb(NO3)2",
      "ZnBr2"
    ],
    "eq": "Pb(NO3)2 + ZnBr2 → PbBr2↓ + Zn(NO3)2",
    "out": [
      "PbBr2",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mgbr2_pb_no3_2_66",
    "need": [
      "Pb(NO3)2",
      "MgBr2"
    ],
    "eq": "Pb(NO3)2 + MgBr2 → PbBr2↓ + Mg(NO3)2",
    "out": [
      "PbBr2",
      "Mg(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_pb_no3_2_67",
    "need": [
      "Pb(NO3)2",
      "CaBr2"
    ],
    "eq": "Pb(NO3)2 + CaBr2 → PbBr2↓ + Ca(NO3)2",
    "out": [
      "PbBr2",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_pb_no3_2_snbr2_68",
    "need": [
      "Pb(NO3)2",
      "SnBr2"
    ],
    "eq": "Pb(NO3)2 + SnBr2 → PbBr2↓ + Sn(NO3)2",
    "out": [
      "PbBr2",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_nibr2_pb_no3_2_69",
    "need": [
      "Pb(NO3)2",
      "NiBr2"
    ],
    "eq": "Pb(NO3)2 + NiBr2 → PbBr2↓ + Ni(NO3)2",
    "out": [
      "PbBr2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cobr2_pb_no3_2_70",
    "need": [
      "Pb(NO3)2",
      "CoBr2"
    ],
    "eq": "Pb(NO3)2 + CoBr2 → PbBr2↓ + Co(NO3)2",
    "out": [
      "PbBr2",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_pb_no3_2_71",
    "need": [
      "Pb(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Pb(NO3)2 + 2Na3PO4 → Pb3(PO4)2↓ + 6NaNO3",
    "out": [
      "Pb3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_zn_no3_2_72",
    "need": [
      "Zn(NO3)2",
      "K2CO3"
    ],
    "eq": "Zn(NO3)2 + K2CO3 → ZnCO3↓ + 2KNO3",
    "out": [
      "ZnCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_zn_no3_2_73",
    "need": [
      "Zn(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Zn(NO3)2 + 2Na3PO4 → Zn3(PO4)2↓ + 6NaNO3",
    "out": [
      "Zn3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_mg_no3_2_74",
    "need": [
      "Mg(NO3)2",
      "K2CO3"
    ],
    "eq": "Mg(NO3)2 + K2CO3 → MgCO3↓ + 2KNO3",
    "out": [
      "MgCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mg_no3_2_na3po4_75",
    "need": [
      "Mg(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Mg(NO3)2 + 2Na3PO4 → Mg3(PO4)2↓ + 6NaNO3",
    "out": [
      "Mg3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fe_no3_2_k2co3_76",
    "need": [
      "Fe(NO3)2",
      "K2CO3"
    ],
    "eq": "Fe(NO3)2 + K2CO3 → FeCO3↓ + 2KNO3",
    "out": [
      "FeCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fe_no3_2_na3po4_77",
    "need": [
      "Fe(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Fe(NO3)2 + 2Na3PO4 → Fe3(PO4)2↓ + 6NaNO3",
    "out": [
      "Fe3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fe_no3_3_na3po4_78",
    "need": [
      "Fe(NO3)3",
      "Na3PO4"
    ],
    "eq": "Fe(NO3)3 + Na3PO4 → FePO4↓ + 3NaNO3",
    "out": [
      "FePO4",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_na2so4_79",
    "need": [
      "Ca(NO3)2",
      "Na2SO4"
    ],
    "eq": "Ca(NO3)2 + Na2SO4 → CaSO4↓ + 2NaNO3",
    "out": [
      "CaSO4",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_k2so4_80",
    "need": [
      "Ca(NO3)2",
      "K2SO4"
    ],
    "eq": "Ca(NO3)2 + K2SO4 → CaSO4↓ + 2KNO3",
    "out": [
      "CaSO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_cuso4_81",
    "need": [
      "Ca(NO3)2",
      "CuSO4"
    ],
    "eq": "Ca(NO3)2 + CuSO4 → CaSO4↓ + Cu(NO3)2",
    "out": [
      "CaSO4",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_feso4_82",
    "need": [
      "Ca(NO3)2",
      "FeSO4"
    ],
    "eq": "Ca(NO3)2 + FeSO4 → CaSO4↓ + Fe(NO3)2",
    "out": [
      "CaSO4",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_fe2_so4_3_83",
    "need": [
      "Ca(NO3)2",
      "Fe2(SO4)3"
    ],
    "eq": "3Ca(NO3)2 + Fe2(SO4)3 → 3CaSO4↓ + 2Fe(NO3)3",
    "out": [
      "CaSO4",
      "Fe(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_znso4_84",
    "need": [
      "Ca(NO3)2",
      "ZnSO4"
    ],
    "eq": "Ca(NO3)2 + ZnSO4 → CaSO4↓ + Zn(NO3)2",
    "out": [
      "CaSO4",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_mgso4_85",
    "need": [
      "Ca(NO3)2",
      "MgSO4"
    ],
    "eq": "Ca(NO3)2 + MgSO4 → CaSO4↓ + Mg(NO3)2",
    "out": [
      "CaSO4",
      "Mg(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_niso4_86",
    "need": [
      "Ca(NO3)2",
      "NiSO4"
    ],
    "eq": "Ca(NO3)2 + NiSO4 → CaSO4↓ + Ni(NO3)2",
    "out": [
      "CaSO4",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_mnso4_87",
    "need": [
      "Ca(NO3)2",
      "MnSO4"
    ],
    "eq": "Ca(NO3)2 + MnSO4 → CaSO4↓ + Mn(NO3)2",
    "out": [
      "CaSO4",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_snso4_88",
    "need": [
      "Ca(NO3)2",
      "SnSO4"
    ],
    "eq": "Ca(NO3)2 + SnSO4 → CaSO4↓ + Sn(NO3)2",
    "out": [
      "CaSO4",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_coso4_89",
    "need": [
      "Ca(NO3)2",
      "CoSO4"
    ],
    "eq": "Ca(NO3)2 + CoSO4 → CaSO4↓ + Co(NO3)2",
    "out": [
      "CaSO4",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al2_so4_3_ca_no3_2_90",
    "need": [
      "Ca(NO3)2",
      "Al2(SO4)3"
    ],
    "eq": "3Ca(NO3)2 + Al2(SO4)3 → 3CaSO4↓ + 2Al(NO3)3",
    "out": [
      "CaSO4",
      "Al(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_cr2_so4_3_91",
    "need": [
      "Ca(NO3)2",
      "Cr2(SO4)3"
    ],
    "eq": "3Ca(NO3)2 + Cr2(SO4)3 → 3CaSO4↓ + 2Cr(NO3)3",
    "out": [
      "CaSO4",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_ca_no3_2_k2co3_92",
    "need": [
      "Ca(NO3)2",
      "K2CO3"
    ],
    "eq": "Ca(NO3)2 + K2CO3 → CaCO3↓ + 2KNO3",
    "out": [
      "CaCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_ni_no3_2_93",
    "need": [
      "Ni(NO3)2",
      "K2CO3"
    ],
    "eq": "Ni(NO3)2 + K2CO3 → NiCO3↓ + 2KNO3",
    "out": [
      "NiCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_ni_no3_2_94",
    "need": [
      "Ni(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Ni(NO3)2 + 2Na3PO4 → Ni3(PO4)2↓ + 6NaNO3",
    "out": [
      "Ni3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_mn_no3_2_95",
    "need": [
      "Mn(NO3)2",
      "K2CO3"
    ],
    "eq": "Mn(NO3)2 + K2CO3 → MnCO3↓ + 2KNO3",
    "out": [
      "MnCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mn_no3_2_na3po4_96",
    "need": [
      "Mn(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Mn(NO3)2 + 2Na3PO4 → Mn3(PO4)2↓ + 6NaNO3",
    "out": [
      "Mn3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_co_no3_2_k2co3_97",
    "need": [
      "Co(NO3)2",
      "K2CO3"
    ],
    "eq": "Co(NO3)2 + K2CO3 → CoCO3↓ + 2KNO3",
    "out": [
      "CoCO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_co_no3_2_na3po4_98",
    "need": [
      "Co(NO3)2",
      "Na3PO4"
    ],
    "eq": "3Co(NO3)2 + 2Na3PO4 → Co3(PO4)2↓ + 6NaNO3",
    "out": [
      "Co3(PO4)2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al_no3_3_na3po4_99",
    "need": [
      "Al(NO3)3",
      "Na3PO4"
    ],
    "eq": "Al(NO3)3 + Na3PO4 → AlPO4↓ + 3NaNO3",
    "out": [
      "AlPO4",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_na2so4_100",
    "need": [
      "Na2SO4",
      "CaBr2"
    ],
    "eq": "Na2SO4 + CaBr2 → 2NaBr + CaSO4↓",
    "out": [
      "NaBr",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_k2so4_101",
    "need": [
      "K2SO4",
      "CaBr2"
    ],
    "eq": "K2SO4 + CaBr2 → 2KBr + CaSO4↓",
    "out": [
      "KBr",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_cuso4_102",
    "need": [
      "CuSO4",
      "CaBr2"
    ],
    "eq": "CuSO4 + CaBr2 → CuBr2 + CaSO4↓",
    "out": [
      "CuBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cuso4_k2co3_103",
    "need": [
      "CuSO4",
      "K2CO3"
    ],
    "eq": "CuSO4 + K2CO3 → CuCO3↓ + K2SO4",
    "out": [
      "CuCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_feso4_104",
    "need": [
      "FeSO4",
      "CaBr2"
    ],
    "eq": "FeSO4 + CaBr2 → FeBr2 + CaSO4↓",
    "out": [
      "FeBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_feso4_k2co3_105",
    "need": [
      "FeSO4",
      "K2CO3"
    ],
    "eq": "FeSO4 + K2CO3 → FeCO3↓ + K2SO4",
    "out": [
      "FeCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_fe2_so4_3_106",
    "need": [
      "Fe2(SO4)3",
      "CaBr2"
    ],
    "eq": "Fe2(SO4)3 + 3CaBr2 → 2FeBr3 + 3CaSO4↓",
    "out": [
      "FeBr3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fe2_so4_3_na3po4_107",
    "need": [
      "Fe2(SO4)3",
      "Na3PO4"
    ],
    "eq": "Fe2(SO4)3 + 2Na3PO4 → 2FePO4↓ + 3Na2SO4",
    "out": [
      "FePO4",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_znso4_108",
    "need": [
      "ZnSO4",
      "CaBr2"
    ],
    "eq": "ZnSO4 + CaBr2 → ZnBr2 + CaSO4↓",
    "out": [
      "ZnBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_znso4_109",
    "need": [
      "ZnSO4",
      "K2CO3"
    ],
    "eq": "ZnSO4 + K2CO3 → ZnCO3↓ + K2SO4",
    "out": [
      "ZnCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_znso4_110",
    "need": [
      "ZnSO4",
      "Na3PO4"
    ],
    "eq": "3ZnSO4 + 2Na3PO4 → Zn3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Zn3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_mgso4_111",
    "need": [
      "MgSO4",
      "CaBr2"
    ],
    "eq": "MgSO4 + CaBr2 → MgBr2 + CaSO4↓",
    "out": [
      "MgBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_mgso4_112",
    "need": [
      "MgSO4",
      "K2CO3"
    ],
    "eq": "MgSO4 + K2CO3 → MgCO3↓ + K2SO4",
    "out": [
      "MgCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mgso4_na3po4_113",
    "need": [
      "MgSO4",
      "Na3PO4"
    ],
    "eq": "3MgSO4 + 2Na3PO4 → Mg3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Mg3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_niso4_114",
    "need": [
      "NiSO4",
      "CaBr2"
    ],
    "eq": "NiSO4 + CaBr2 → NiBr2 + CaSO4↓",
    "out": [
      "NiBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_niso4_115",
    "need": [
      "NiSO4",
      "K2CO3"
    ],
    "eq": "NiSO4 + K2CO3 → NiCO3↓ + K2SO4",
    "out": [
      "NiCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_niso4_116",
    "need": [
      "NiSO4",
      "Na3PO4"
    ],
    "eq": "3NiSO4 + 2Na3PO4 → Ni3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Ni3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_mnso4_117",
    "need": [
      "MnSO4",
      "CaBr2"
    ],
    "eq": "MnSO4 + CaBr2 → MnBr2 + CaSO4↓",
    "out": [
      "MnBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_mnso4_118",
    "need": [
      "MnSO4",
      "K2CO3"
    ],
    "eq": "MnSO4 + K2CO3 → MnCO3↓ + K2SO4",
    "out": [
      "MnCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mnso4_na3po4_119",
    "need": [
      "MnSO4",
      "Na3PO4"
    ],
    "eq": "3MnSO4 + 2Na3PO4 → Mn3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Mn3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_snso4_120",
    "need": [
      "SnSO4",
      "CaBr2"
    ],
    "eq": "SnSO4 + CaBr2 → SnBr2 + CaSO4↓",
    "out": [
      "SnBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_snso4_121",
    "need": [
      "SnSO4",
      "K2CO3"
    ],
    "eq": "SnSO4 + K2CO3 → SnCO3↓ + K2SO4",
    "out": [
      "SnCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_snso4_122",
    "need": [
      "SnSO4",
      "Na3PO4"
    ],
    "eq": "3SnSO4 + 2Na3PO4 → Sn3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Sn3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_coso4_123",
    "need": [
      "CoSO4",
      "CaBr2"
    ],
    "eq": "CoSO4 + CaBr2 → CoBr2 + CaSO4↓",
    "out": [
      "CoBr2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_coso4_k2co3_124",
    "need": [
      "CoSO4",
      "K2CO3"
    ],
    "eq": "CoSO4 + K2CO3 → CoCO3↓ + K2SO4",
    "out": [
      "CoCO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_coso4_na3po4_125",
    "need": [
      "CoSO4",
      "Na3PO4"
    ],
    "eq": "3CoSO4 + 2Na3PO4 → Co3(PO4)2↓ + 3Na2SO4",
    "out": [
      "Co3(PO4)2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al2_so4_3_cabr2_126",
    "need": [
      "Al2(SO4)3",
      "CaBr2"
    ],
    "eq": "Al2(SO4)3 + 3CaBr2 → 2AlBr3 + 3CaSO4↓",
    "out": [
      "AlBr3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_al2_so4_3_na3po4_127",
    "need": [
      "Al2(SO4)3",
      "Na3PO4"
    ],
    "eq": "Al2(SO4)3 + 2Na3PO4 → 2AlPO4↓ + 3Na2SO4",
    "out": [
      "AlPO4",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_cr2_so4_3_128",
    "need": [
      "Cr2(SO4)3",
      "CaBr2"
    ],
    "eq": "Cr2(SO4)3 + 3CaBr2 → 2CrBr3 + 3CaSO4↓",
    "out": [
      "CrBr3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cr2_so4_3_na3po4_129",
    "need": [
      "Cr2(SO4)3",
      "Na3PO4"
    ],
    "eq": "Cr2(SO4)3 + 2Na3PO4 → 2CrPO4↓ + 3Na2SO4",
    "out": [
      "CrPO4",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_znbr2_130",
    "need": [
      "ZnBr2",
      "K2CO3"
    ],
    "eq": "ZnBr2 + K2CO3 → ZnCO3↓ + 2KBr",
    "out": [
      "ZnCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_znbr2_131",
    "need": [
      "ZnBr2",
      "Na3PO4"
    ],
    "eq": "3ZnBr2 + 2Na3PO4 → Zn3(PO4)2↓ + 6NaBr",
    "out": [
      "Zn3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_mgbr2_132",
    "need": [
      "MgBr2",
      "K2CO3"
    ],
    "eq": "MgBr2 + K2CO3 → MgCO3↓ + 2KBr",
    "out": [
      "MgCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_mgbr2_na3po4_133",
    "need": [
      "MgBr2",
      "Na3PO4"
    ],
    "eq": "3MgBr2 + 2Na3PO4 → Mg3(PO4)2↓ + 6NaBr",
    "out": [
      "Mg3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_k2co3_134",
    "need": [
      "CaBr2",
      "K2CO3"
    ],
    "eq": "CaBr2 + K2CO3 → CaCO3↓ + 2KBr",
    "out": [
      "CaCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cabr2_na3po4_135",
    "need": [
      "CaBr2",
      "Na3PO4"
    ],
    "eq": "3CaBr2 + 2Na3PO4 → Ca3(PO4)2↓ + 6NaBr",
    "out": [
      "Ca3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_snbr2_136",
    "need": [
      "SnBr2",
      "K2CO3"
    ],
    "eq": "SnBr2 + K2CO3 → SnCO3↓ + 2KBr",
    "out": [
      "SnCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_snbr2_137",
    "need": [
      "SnBr2",
      "Na3PO4"
    ],
    "eq": "3SnBr2 + 2Na3PO4 → Sn3(PO4)2↓ + 6NaBr",
    "out": [
      "Sn3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_k2co3_nibr2_138",
    "need": [
      "NiBr2",
      "K2CO3"
    ],
    "eq": "NiBr2 + K2CO3 → NiCO3↓ + 2KBr",
    "out": [
      "NiCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_na3po4_nibr2_139",
    "need": [
      "NiBr2",
      "Na3PO4"
    ],
    "eq": "3NiBr2 + 2Na3PO4 → Ni3(PO4)2↓ + 6NaBr",
    "out": [
      "Ni3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cobr2_k2co3_140",
    "need": [
      "CoBr2",
      "K2CO3"
    ],
    "eq": "CoBr2 + K2CO3 → CoCO3↓ + 2KBr",
    "out": [
      "CoCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_cobr2_na3po4_141",
    "need": [
      "CoBr2",
      "Na3PO4"
    ],
    "eq": "3CoBr2 + 2Na3PO4 → Co3(PO4)2↓ + 6NaBr",
    "out": [
      "Co3(PO4)2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "precipitation_fecl3_na2co3_142",
    "need": [
      "FeCl3",
      "Na2CO3"
    ],
    "eq": "2FeCl3 + 3Na2CO3 + 3H2O → 2Fe(OH)3↓ + 3CO2 + 6NaCl",
    "out": [
      "Fe(OH)3",
      "CO2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_fecl3_k2co3_143",
    "need": [
      "FeCl3",
      "K2CO3"
    ],
    "eq": "2FeCl3 + 3K2CO3 + 3H2O → 2Fe(OH)3↓ + 3CO2 + 6KCl",
    "out": [
      "Fe(OH)3",
      "CO2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_alcl3_na2co3_144",
    "need": [
      "AlCl3",
      "Na2CO3"
    ],
    "eq": "2AlCl3 + 3Na2CO3 + 3H2O → 2Al(OH)3↓ + 3CO2 + 6NaCl",
    "out": [
      "Al(OH)3",
      "CO2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_alcl3_k2co3_145",
    "need": [
      "AlCl3",
      "K2CO3"
    ],
    "eq": "2AlCl3 + 3K2CO3 + 3H2O → 2Al(OH)3↓ + 3CO2 + 6KCl",
    "out": [
      "Al(OH)3",
      "CO2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_crcl3_na2co3_146",
    "need": [
      "CrCl3",
      "Na2CO3"
    ],
    "eq": "2CrCl3 + 3Na2CO3 + 3H2O → 2Cr(OH)3↓ + 3CO2 + 6NaCl",
    "out": [
      "Cr(OH)3",
      "CO2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_crcl3_k2co3_147",
    "need": [
      "CrCl3",
      "K2CO3"
    ],
    "eq": "2CrCl3 + 3K2CO3 + 3H2O → 2Cr(OH)3↓ + 3CO2 + 6KCl",
    "out": [
      "Cr(OH)3",
      "CO2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_fe_no3_3_na2co3_148",
    "need": [
      "Fe(NO3)3",
      "Na2CO3"
    ],
    "eq": "2Fe(NO3)3 + 3Na2CO3 + 3H2O → 2Fe(OH)3↓ + 3CO2 + 6NaNO3",
    "out": [
      "Fe(OH)3",
      "CO2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_al_no3_3_na2co3_149",
    "need": [
      "Al(NO3)3",
      "Na2CO3"
    ],
    "eq": "2Al(NO3)3 + 3Na2CO3 + 3H2O → 2Al(OH)3↓ + 3CO2 + 6NaNO3",
    "out": [
      "Al(OH)3",
      "CO2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "precipitation_cr2_so4_3_na2co3_150",
    "need": [
      "Cr2(SO4)3",
      "Na2CO3"
    ],
    "eq": "Cr2(SO4)3 + 3Na2CO3 + 3H2O → 2Cr(OH)3↓ + 3CO2 + 3Na2SO4",
    "out": [
      "Cr(OH)3",
      "CO2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.6,
    "precip": "#b8b8b8",
    "gas": "CO2",
    "explain": "Muối kim loại hóa trị III thủy phân với cacbonat, tạo hiđroxit kết tủa và CO₂."
  },
  {
    "id": "neutralization_hcl_pb_oh_2_151",
    "need": [
      "HCl",
      "Pb(OH)2"
    ],
    "eq": "2HCl + Pb(OH)2 → PbCl2↓ + 2H2O",
    "out": [
      "PbCl2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hbr_pb_oh_2_165",
    "need": [
      "HBr",
      "Pb(OH)2"
    ],
    "eq": "2HBr + Pb(OH)2 → PbBr2↓ + 2H2O",
    "out": [
      "PbBr2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_hf_169",
    "need": [
      "HF",
      "Ca(OH)2"
    ],
    "eq": "2HF + Ca(OH)2 → CaF2↓ + 2H2O",
    "out": [
      "CaF2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_mg_oh_2_171",
    "need": [
      "HF",
      "Mg(OH)2"
    ],
    "eq": "2HF + Mg(OH)2 → MgF2↓ + 2H2O",
    "out": [
      "MgF2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hf_172",
    "need": [
      "HF",
      "Al(OH)3"
    ],
    "eq": "3HF + Al(OH)3 → AlF3↓ + 3H2O",
    "out": [
      "AlF3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_pb_oh_2_181",
    "need": [
      "HF",
      "Pb(OH)2"
    ],
    "eq": "2HF + Pb(OH)2 → PbF2↓ + 2H2O",
    "out": [
      "PbF2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so4_pb_oh_2_190",
    "need": [
      "H2SO4",
      "Pb(OH)2"
    ],
    "eq": "H2SO4 + Pb(OH)2 → PbSO4↓ + 2H2O",
    "out": [
      "PbSO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_h3po4_193",
    "need": [
      "H3PO4",
      "Ca(OH)2"
    ],
    "eq": "2H3PO4 + 3Ca(OH)2 → Ca3(PO4)2↓ + 6H2O",
    "out": [
      "Ca3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_h3po4_194",
    "need": [
      "H3PO4",
      "Ba(OH)2"
    ],
    "eq": "2H3PO4 + 3Ba(OH)2 → Ba3(PO4)2↓ + 6H2O",
    "out": [
      "Ba3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_mg_oh_2_195",
    "need": [
      "H3PO4",
      "Mg(OH)2"
    ],
    "eq": "2H3PO4 + 3Mg(OH)2 → Mg3(PO4)2↓ + 6H2O",
    "out": [
      "Mg3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_h3po4_196",
    "need": [
      "H3PO4",
      "Al(OH)3"
    ],
    "eq": "H3PO4 + Al(OH)3 → AlPO4↓ + 3H2O",
    "out": [
      "AlPO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_h3po4_197",
    "need": [
      "H3PO4",
      "Fe(OH)2"
    ],
    "eq": "2H3PO4 + 3Fe(OH)2 → Fe3(PO4)2↓ + 6H2O",
    "out": [
      "Fe3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_h3po4_198",
    "need": [
      "H3PO4",
      "Fe(OH)3"
    ],
    "eq": "H3PO4 + Fe(OH)3 → FePO4↓ + 3H2O",
    "out": [
      "FePO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_h3po4_199",
    "need": [
      "H3PO4",
      "Cu(OH)2"
    ],
    "eq": "2H3PO4 + 3Cu(OH)2 → Cu3(PO4)2↓ + 6H2O",
    "out": [
      "Cu3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_zn_oh_2_200",
    "need": [
      "H3PO4",
      "Zn(OH)2"
    ],
    "eq": "2H3PO4 + 3Zn(OH)2 → Zn3(PO4)2↓ + 6H2O",
    "out": [
      "Zn3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_h3po4_201",
    "need": [
      "H3PO4",
      "Co(OH)2"
    ],
    "eq": "2H3PO4 + 3Co(OH)2 → Co3(PO4)2↓ + 6H2O",
    "out": [
      "Co3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_h3po4_202",
    "need": [
      "H3PO4",
      "Cr(OH)3"
    ],
    "eq": "H3PO4 + Cr(OH)3 → CrPO4↓ + 3H2O",
    "out": [
      "CrPO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_ni_oh_2_203",
    "need": [
      "H3PO4",
      "Ni(OH)2"
    ],
    "eq": "2H3PO4 + 3Ni(OH)2 → Ni3(PO4)2↓ + 6H2O",
    "out": [
      "Ni3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_mn_oh_2_204",
    "need": [
      "H3PO4",
      "Mn(OH)2"
    ],
    "eq": "2H3PO4 + 3Mn(OH)2 → Mn3(PO4)2↓ + 6H2O",
    "out": [
      "Mn3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_pb_oh_2_205",
    "need": [
      "H3PO4",
      "Pb(OH)2"
    ],
    "eq": "2H3PO4 + 3Pb(OH)2 → Pb3(PO4)2↓ + 6H2O",
    "out": [
      "Pb3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_h2so3_223",
    "need": [
      "H2SO3",
      "Ca(OH)2"
    ],
    "eq": "H2SO3 + Ca(OH)2 → CaSO3↓ + 2H2O",
    "out": [
      "CaSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_h2so3_224",
    "need": [
      "H2SO3",
      "Ba(OH)2"
    ],
    "eq": "H2SO3 + Ba(OH)2 → BaSO3↓ + 2H2O",
    "out": [
      "BaSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_mg_oh_2_225",
    "need": [
      "H2SO3",
      "Mg(OH)2"
    ],
    "eq": "H2SO3 + Mg(OH)2 → MgSO3↓ + 2H2O",
    "out": [
      "MgSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_h2so3_226",
    "need": [
      "H2SO3",
      "Fe(OH)2"
    ],
    "eq": "H2SO3 + Fe(OH)2 → FeSO3↓ + 2H2O",
    "out": [
      "FeSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_h2so3_227",
    "need": [
      "H2SO3",
      "Cu(OH)2"
    ],
    "eq": "H2SO3 + Cu(OH)2 → CuSO3↓ + 2H2O",
    "out": [
      "CuSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_zn_oh_2_228",
    "need": [
      "H2SO3",
      "Zn(OH)2"
    ],
    "eq": "H2SO3 + Zn(OH)2 → ZnSO3↓ + 2H2O",
    "out": [
      "ZnSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_h2so3_229",
    "need": [
      "H2SO3",
      "Co(OH)2"
    ],
    "eq": "H2SO3 + Co(OH)2 → CoSO3↓ + 2H2O",
    "out": [
      "CoSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_ni_oh_2_230",
    "need": [
      "H2SO3",
      "Ni(OH)2"
    ],
    "eq": "H2SO3 + Ni(OH)2 → NiSO3↓ + 2H2O",
    "out": [
      "NiSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_mn_oh_2_231",
    "need": [
      "H2SO3",
      "Mn(OH)2"
    ],
    "eq": "H2SO3 + Mn(OH)2 → MnSO3↓ + 2H2O",
    "out": [
      "MnSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_pb_oh_2_232",
    "need": [
      "H2SO3",
      "Pb(OH)2"
    ],
    "eq": "H2SO3 + Pb(OH)2 → PbSO3↓ + 2H2O",
    "out": [
      "PbSO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_h2co3_282",
    "need": [
      "H2CO3",
      "Ba(OH)2"
    ],
    "eq": "H2CO3 + Ba(OH)2 → BaCO3↓ + 2H2O",
    "out": [
      "BaCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_mg_oh_2_283",
    "need": [
      "H2CO3",
      "Mg(OH)2"
    ],
    "eq": "H2CO3 + Mg(OH)2 → MgCO3↓ + 2H2O",
    "out": [
      "MgCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_h2co3_284",
    "need": [
      "H2CO3",
      "Fe(OH)2"
    ],
    "eq": "H2CO3 + Fe(OH)2 → FeCO3↓ + 2H2O",
    "out": [
      "FeCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_h2co3_285",
    "need": [
      "H2CO3",
      "Cu(OH)2"
    ],
    "eq": "H2CO3 + Cu(OH)2 → CuCO3↓ + 2H2O",
    "out": [
      "CuCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_zn_oh_2_286",
    "need": [
      "H2CO3",
      "Zn(OH)2"
    ],
    "eq": "H2CO3 + Zn(OH)2 → ZnCO3↓ + 2H2O",
    "out": [
      "ZnCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_h2co3_287",
    "need": [
      "H2CO3",
      "Co(OH)2"
    ],
    "eq": "H2CO3 + Co(OH)2 → CoCO3↓ + 2H2O",
    "out": [
      "CoCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_ni_oh_2_288",
    "need": [
      "H2CO3",
      "Ni(OH)2"
    ],
    "eq": "H2CO3 + Ni(OH)2 → NiCO3↓ + 2H2O",
    "out": [
      "NiCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_mn_oh_2_289",
    "need": [
      "H2CO3",
      "Mn(OH)2"
    ],
    "eq": "H2CO3 + Mn(OH)2 → MnCO3↓ + 2H2O",
    "out": [
      "MnCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_pb_oh_2_290",
    "need": [
      "H2CO3",
      "Pb(OH)2"
    ],
    "eq": "H2CO3 + Pb(OH)2 → PbCO3↓ + 2H2O",
    "out": [
      "PbCO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_h2s_297",
    "need": [
      "H2S",
      "Fe(OH)2"
    ],
    "eq": "H2S + Fe(OH)2 → FeS↓ + 2H2O",
    "out": [
      "FeS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_h2s_298",
    "need": [
      "H2S",
      "Cu(OH)2"
    ],
    "eq": "H2S + Cu(OH)2 → CuS↓ + 2H2O",
    "out": [
      "CuS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_zn_oh_2_299",
    "need": [
      "H2S",
      "Zn(OH)2"
    ],
    "eq": "H2S + Zn(OH)2 → ZnS↓ + 2H2O",
    "out": [
      "ZnS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_h2s_300",
    "need": [
      "H2S",
      "Co(OH)2"
    ],
    "eq": "H2S + Co(OH)2 → CoS↓ + 2H2O",
    "out": [
      "CoS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_ni_oh_2_301",
    "need": [
      "H2S",
      "Ni(OH)2"
    ],
    "eq": "H2S + Ni(OH)2 → NiS↓ + 2H2O",
    "out": [
      "NiS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_mn_oh_2_302",
    "need": [
      "H2S",
      "Mn(OH)2"
    ],
    "eq": "H2S + Mn(OH)2 → MnS↓ + 2H2O",
    "out": [
      "MnS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_pb_oh_2_303",
    "need": [
      "H2S",
      "Pb(OH)2"
    ],
    "eq": "H2S + Pb(OH)2 → PbS↓ + 2H2O",
    "out": [
      "PbS",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_h2sio3_307",
    "need": [
      "H2SiO3",
      "Ca(OH)2"
    ],
    "eq": "H2SiO3 + Ca(OH)2 → CaSiO3↓ + 2H2O",
    "out": [
      "CaSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_h2sio3_308",
    "need": [
      "H2SiO3",
      "Ba(OH)2"
    ],
    "eq": "H2SiO3 + Ba(OH)2 → BaSiO3↓ + 2H2O",
    "out": [
      "BaSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_mg_oh_2_309",
    "need": [
      "H2SiO3",
      "Mg(OH)2"
    ],
    "eq": "H2SiO3 + Mg(OH)2 → MgSiO3↓ + 2H2O",
    "out": [
      "MgSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_h2sio3_310",
    "need": [
      "H2SiO3",
      "Al(OH)3"
    ],
    "eq": "3H2SiO3 + 2Al(OH)3 → Al2(SiO3)3↓ + 6H2O",
    "out": [
      "Al2(SiO3)3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_h2sio3_311",
    "need": [
      "H2SiO3",
      "Fe(OH)2"
    ],
    "eq": "H2SiO3 + Fe(OH)2 → FeSiO3↓ + 2H2O",
    "out": [
      "FeSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_h2sio3_312",
    "need": [
      "H2SiO3",
      "Fe(OH)3"
    ],
    "eq": "3H2SiO3 + 2Fe(OH)3 → Fe2(SiO3)3↓ + 6H2O",
    "out": [
      "Fe2(SiO3)3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_h2sio3_313",
    "need": [
      "H2SiO3",
      "Cu(OH)2"
    ],
    "eq": "H2SiO3 + Cu(OH)2 → CuSiO3↓ + 2H2O",
    "out": [
      "CuSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_zn_oh_2_314",
    "need": [
      "H2SiO3",
      "Zn(OH)2"
    ],
    "eq": "H2SiO3 + Zn(OH)2 → ZnSiO3↓ + 2H2O",
    "out": [
      "ZnSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_h2sio3_315",
    "need": [
      "H2SiO3",
      "Co(OH)2"
    ],
    "eq": "H2SiO3 + Co(OH)2 → CoSiO3↓ + 2H2O",
    "out": [
      "CoSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_h2sio3_316",
    "need": [
      "H2SiO3",
      "Cr(OH)3"
    ],
    "eq": "3H2SiO3 + 2Cr(OH)3 → Cr2(SiO3)3↓ + 6H2O",
    "out": [
      "Cr2(SiO3)3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_ni_oh_2_317",
    "need": [
      "H2SiO3",
      "Ni(OH)2"
    ],
    "eq": "H2SiO3 + Ni(OH)2 → NiSiO3↓ + 2H2O",
    "out": [
      "NiSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_mn_oh_2_318",
    "need": [
      "H2SiO3",
      "Mn(OH)2"
    ],
    "eq": "H2SiO3 + Mn(OH)2 → MnSiO3↓ + 2H2O",
    "out": [
      "MnSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_pb_oh_2_319",
    "need": [
      "H2SiO3",
      "Pb(OH)2"
    ],
    "eq": "H2SiO3 + Pb(OH)2 → PbSiO3↓ + 2H2O",
    "out": [
      "PbSiO3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_hf_321",
    "need": [
      "CaO",
      "HF"
    ],
    "eq": "CaO + 2HF → CaF2↓ + H2O",
    "out": [
      "CaF2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_h3po4_322",
    "need": [
      "CaO",
      "H3PO4"
    ],
    "eq": "3CaO + 2H3PO4 → Ca3(PO4)2↓ + 3H2O",
    "out": [
      "Ca3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hf_mgo_328",
    "need": [
      "MgO",
      "HF"
    ],
    "eq": "MgO + 2HF → MgF2↓ + H2O",
    "out": [
      "MgF2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h3po4_mgo_329",
    "need": [
      "MgO",
      "H3PO4"
    ],
    "eq": "3MgO + 2H3PO4 → Mg3(PO4)2↓ + 3H2O",
    "out": [
      "Mg3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_h3po4_353",
    "need": [
      "CuO",
      "H3PO4"
    ],
    "eq": "3CuO + 2H3PO4 → Cu3(PO4)2↓ + 3H2O",
    "out": [
      "Cu3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_h3po4_361",
    "need": [
      "FeO",
      "H3PO4"
    ],
    "eq": "3FeO + 2H3PO4 → Fe3(PO4)2↓ + 3H2O",
    "out": [
      "Fe3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_h3po4_368",
    "need": [
      "Fe2O3",
      "H3PO4"
    ],
    "eq": "Fe2O3 + 2H3PO4 → 2FePO4↓ + 3H2O",
    "out": [
      "FePO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h3po4_zno_376",
    "need": [
      "ZnO",
      "H3PO4"
    ],
    "eq": "3ZnO + 2H3PO4 → Zn3(PO4)2↓ + 3H2O",
    "out": [
      "Zn3(PO4)2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_hf_382",
    "need": [
      "Al2O3",
      "HF"
    ],
    "eq": "Al2O3 + 6HF → 2AlF3↓ + 3H2O",
    "out": [
      "AlF3",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_h3po4_384",
    "need": [
      "Al2O3",
      "H3PO4"
    ],
    "eq": "Al2O3 + 2H3PO4 → 2AlPO4↓ + 3H2O",
    "out": [
      "AlPO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_h3po4_392",
    "need": [
      "Ga2O3",
      "H3PO4"
    ],
    "eq": "Ga2O3 + 2H3PO4 → 2GaPO4↓ + 3H2O",
    "out": [
      "GaPO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hcl_397",
    "need": [
      "Ag2O",
      "HCl"
    ],
    "eq": "Ag2O + 2HCl → 2AgCl↓ + H2O",
    "out": [
      "AgCl",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hbr_398",
    "need": [
      "Ag2O",
      "HBr"
    ],
    "eq": "Ag2O + 2HBr → 2AgBr↓ + H2O",
    "out": [
      "AgBr",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_h2so4_400",
    "need": [
      "Ag2O",
      "H2SO4"
    ],
    "eq": "Ag2O + H2SO4 → Ag2SO4↓ + H2O",
    "out": [
      "Ag2SO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_h3po4_401",
    "need": [
      "Ag2O",
      "H3PO4"
    ],
    "eq": "3Ag2O + 2H3PO4 → 2Ag3PO4↓ + 3H2O",
    "out": [
      "Ag3PO4",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "acid_gas_caco3_hf_425",
    "need": [
      "HF",
      "CaCO3"
    ],
    "eq": "2HF + CaCO3 → CaF2↓ + CO2 + H2O",
    "out": [
      "CaF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caco3_h3po4_426",
    "need": [
      "H3PO4",
      "CaCO3"
    ],
    "eq": "2H3PO4 + 3CaCO3 → Ca3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Ca3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_h3po4_433",
    "need": [
      "H3PO4",
      "CuCO3"
    ],
    "eq": "2H3PO4 + 3CuCO3 → Cu3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Cu3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_h3po4_441",
    "need": [
      "H3PO4",
      "FeCO3"
    ],
    "eq": "2H3PO4 + 3FeCO3 → Fe3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Fe3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_mgco3_446",
    "need": [
      "HF",
      "MgCO3"
    ],
    "eq": "2HF + MgCO3 → MgF2↓ + CO2 + H2O",
    "out": [
      "MgF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_mgco3_447",
    "need": [
      "H3PO4",
      "MgCO3"
    ],
    "eq": "2H3PO4 + 3MgCO3 → Mg3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Mg3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_h2so4_455",
    "need": [
      "H2SO4",
      "BaCO3"
    ],
    "eq": "H2SO4 + BaCO3 → BaSO4↓ + CO2 + H2O",
    "out": [
      "BaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_h3po4_456",
    "need": [
      "H3PO4",
      "BaCO3"
    ],
    "eq": "2H3PO4 + 3BaCO3 → Ba3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Ba3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hcl_460",
    "need": [
      "HCl",
      "Ag2CO3"
    ],
    "eq": "2HCl + Ag2CO3 → 2AgCl↓ + CO2 + H2O",
    "out": [
      "AgCl",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hbr_461",
    "need": [
      "HBr",
      "Ag2CO3"
    ],
    "eq": "2HBr + Ag2CO3 → 2AgBr↓ + CO2 + H2O",
    "out": [
      "AgBr",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_h2so4_464",
    "need": [
      "H2SO4",
      "Ag2CO3"
    ],
    "eq": "H2SO4 + Ag2CO3 → Ag2SO4↓ + CO2 + H2O",
    "out": [
      "Ag2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_h3po4_465",
    "need": [
      "H3PO4",
      "Ag2CO3"
    ],
    "eq": "2H3PO4 + 3Ag2CO3 → 2Ag3PO4↓ + 3CO2 + 3H2O",
    "out": [
      "Ag3PO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hcl_pbco3_469",
    "need": [
      "HCl",
      "PbCO3"
    ],
    "eq": "2HCl + PbCO3 → PbCl2↓ + CO2 + H2O",
    "out": [
      "PbCl2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_pbco3_470",
    "need": [
      "HBr",
      "PbCO3"
    ],
    "eq": "2HBr + PbCO3 → PbBr2↓ + CO2 + H2O",
    "out": [
      "PbBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_pbco3_471",
    "need": [
      "HF",
      "PbCO3"
    ],
    "eq": "2HF + PbCO3 → PbF2↓ + CO2 + H2O",
    "out": [
      "PbF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h2so4_pbco3_473",
    "need": [
      "H2SO4",
      "PbCO3"
    ],
    "eq": "H2SO4 + PbCO3 → PbSO4↓ + CO2 + H2O",
    "out": [
      "PbSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_pbco3_474",
    "need": [
      "H3PO4",
      "PbCO3"
    ],
    "eq": "2H3PO4 + 3PbCO3 → Pb3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Pb3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hf_488",
    "need": [
      "HF",
      "CaSO3"
    ],
    "eq": "2HF + CaSO3 → CaF2↓ + SO2 + H2O",
    "out": [
      "CaF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_h2so4_490",
    "need": [
      "H2SO4",
      "CaSO3"
    ],
    "eq": "H2SO4 + CaSO3 → CaSO4↓ + SO2 + H2O",
    "out": [
      "CaSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_h3po4_491",
    "need": [
      "H3PO4",
      "CaSO3"
    ],
    "eq": "2H3PO4 + 3CaSO3 → Ca3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Ca3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_h2so4_499",
    "need": [
      "H2SO4",
      "BaSO3"
    ],
    "eq": "H2SO4 + BaSO3 → BaSO4↓ + SO2 + H2O",
    "out": [
      "BaSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_h3po4_500",
    "need": [
      "H3PO4",
      "BaSO3"
    ],
    "eq": "2H3PO4 + 3BaSO3 → Ba3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Ba3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "precip": "#eeeeea",
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_na2s2o3_521",
    "need": [
      "HBr",
      "Na2S2O3"
    ],
    "eq": "2HBr + Na2S2O3 → 2NaBr + S↓ + SO2 + H2O",
    "out": [
      "NaBr",
      "S",
      "SO2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.55,
    "precip": "#d9d84a",
    "gas": "SO2",
    "explain": "Thiosunfat gặp axit tạo lưu huỳnh keo và SO₂."
  },
  {
    "id": "metal_acid_ca_h3po4_540",
    "need": [
      "Ca",
      "H3PO4"
    ],
    "eq": "3Ca + 2H3PO4 → Ca3(PO4)2↓ + 3H2",
    "out": [
      "Ca3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_al_hf_543",
    "need": [
      "Al",
      "HF"
    ],
    "eq": "2Al + 6HF → 2AlF3↓ + 3H2",
    "out": [
      "AlF3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_al_h3po4_544",
    "need": [
      "Al",
      "H3PO4"
    ],
    "eq": "2Al + 2H3PO4 → 2AlPO4↓ + 3H2",
    "out": [
      "AlPO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_mn_547",
    "need": [
      "Mn",
      "H3PO4"
    ],
    "eq": "3Mn + 2H3PO4 → Mn3(PO4)2↓ + 3H2",
    "out": [
      "Mn3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_cr_h3po4_551",
    "need": [
      "Cr",
      "H3PO4"
    ],
    "eq": "3Cr + 2H3PO4 → Cr3(PO4)2↓ + 3H2",
    "out": [
      "Cr3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_fe_h3po4_553",
    "need": [
      "Fe",
      "H3PO4"
    ],
    "eq": "3Fe + 2H3PO4 → Fe3(PO4)2↓ + 3H2",
    "out": [
      "Fe3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_co_h3po4_555",
    "need": [
      "Co",
      "H3PO4"
    ],
    "eq": "3Co + 2H3PO4 → Co3(PO4)2↓ + 3H2",
    "out": [
      "Co3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_ni_557",
    "need": [
      "Ni",
      "H3PO4"
    ],
    "eq": "3Ni + 2H3PO4 → Ni3(PO4)2↓ + 3H2",
    "out": [
      "Ni3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_sn_559",
    "need": [
      "Sn",
      "H3PO4"
    ],
    "eq": "3Sn + 2H3PO4 → Sn3(PO4)2↓ + 3H2",
    "out": [
      "Sn3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hbr_pb_561",
    "need": [
      "Pb",
      "HBr"
    ],
    "eq": "Pb + 2HBr → PbBr2↓ + H2",
    "out": [
      "PbBr2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h2so4_pb_562",
    "need": [
      "Pb",
      "H2SO4"
    ],
    "eq": "Pb + H2SO4 → PbSO4↓ + H2",
    "out": [
      "PbSO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_pb_563",
    "need": [
      "Pb",
      "H3PO4"
    ],
    "eq": "3Pb + 2H3PO4 → Pb3(PO4)2↓ + 3H2",
    "out": [
      "Pb3(PO4)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ga_h3po4_567",
    "need": [
      "Ga",
      "H3PO4"
    ],
    "eq": "2Ga + 2H3PO4 → 2GaPO4↓ + 3H2",
    "out": [
      "GaPO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "precip": "#eeeeea",
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_displacement_cuso4_pb_683",
    "need": [
      "Pb",
      "CuSO4"
    ],
    "eq": "Pb + CuSO4 → PbSO4↓ + Cu",
    "out": [
      "PbSO4",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "precip": "#eeeeea",
    "explain": "Kim loại hoạt động mạnh hơn đẩy kim loại yếu hơn khỏi dung dịch muối."
  },
  {
    "id": "synthesis_halogen_al_cl2_694",
    "need": [
      "Al",
      "Cl2"
    ],
    "eq": "2Al + 3Cl2 → 2AlCl3",
    "out": [
      "AlCl3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu.",
    "solidOut": [
      "AlCl3"
    ]
  },
  {
    "id": "synthesis_halogen_cl2_cu_695",
    "need": [
      "Cu",
      "Cl2"
    ],
    "eq": "Cu + Cl2 → CuCl2",
    "out": [
      "CuCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_pb_700",
    "need": [
      "Pb",
      "Cl2"
    ],
    "eq": "Pb + Cl2 → PbCl2",
    "out": [
      "PbCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_cr_701",
    "need": [
      "Cr",
      "Cl2"
    ],
    "eq": "2Cr + 3Cl2 → 2CrCl3",
    "out": [
      "CrCl3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_al_br2_705",
    "need": [
      "Al",
      "Br2"
    ],
    "eq": "2Al + 3Br2 → 2AlBr3",
    "out": [
      "AlBr3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu.",
    "solidOut": [
      "AlBr3"
    ]
  },
  {
    "id": "synthesis_halogen_br2_cu_706",
    "need": [
      "Cu",
      "Br2"
    ],
    "eq": "Cu + Br2 → CuBr2",
    "out": [
      "CuBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu.",
    "solidOut": [
      "CuBr2"
    ]
  },
  {
    "id": "synthesis_halogen_mg_s_712",
    "need": [
      "Mg",
      "S"
    ],
    "eq": "Mg + S → MgS",
    "out": [
      "MgS"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_s_zn_713",
    "need": [
      "Zn",
      "S"
    ],
    "eq": "Zn + S → ZnS",
    "out": [
      "ZnS"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_pb_s_714",
    "need": [
      "Pb",
      "S"
    ],
    "eq": "Pb + S → PbS",
    "out": [
      "PbS"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_al_s_715",
    "need": [
      "Al",
      "S"
    ],
    "eq": "2Al + 3S → Al2S3",
    "out": [
      "Al2S3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_ca_s_716",
    "need": [
      "Ca",
      "S"
    ],
    "eq": "Ca + S → CaS",
    "out": [
      "CaS"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_na_s_717",
    "need": [
      "Na",
      "S"
    ],
    "eq": "2Na + S → Na2S",
    "out": [
      "Na2S"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  }
]);

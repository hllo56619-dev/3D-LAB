// Chemistry Lab 3D — gas-evolution (110 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
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
    "id": "aluminium_alkali_water",
    "need": [
      "Al",
      "NaOH",
      "H2O"
    ],
    "eq": "2Al + 2NaOH + 6H2O → 2Na[Al(OH)4] + 3H2↑",
    "out": [
      "Na[Al(OH)4]",
      "H2"
    ],
    "col": "#e8e9e9",
    "dur": 8,
    "bub": 0.8,
    "gas": "H2",
    "explain": "Nhôm tan trong kiềm nước, tạo phức aluminat và giải phóng khí hiđro."
  },
  {
    "id": "zinc_alkali_water",
    "need": [
      "Zn",
      "NaOH",
      "H2O"
    ],
    "eq": "Zn + 2NaOH + 2H2O → Na2[Zn(OH)4] + H2↑",
    "out": [
      "Na2[Zn(OH)4]",
      "H2"
    ],
    "col": "#e8e9e9",
    "dur": 8,
    "bub": 0.7,
    "gas": "H2",
    "explain": "Kẽm lưỡng tính phản ứng với kiềm nước tạo phức zincat và giải phóng hiđro."
  },
  {
    "id": "hno3_mgco3",
    "need": [
      "HNO3",
      "MgCO3"
    ],
    "eq": "2HNO3 + MgCO3 → Mg(NO3)2 + CO2↑ + H2O",
    "out": [
      "Mg(NO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "CO2"
  },
  {
    "id": "h2so4_k2co3",
    "need": [
      "H2SO4",
      "K2CO3"
    ],
    "eq": "H2SO4 + K2CO3 → K2SO4 + CO2↑ + H2O",
    "out": [
      "K2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "CO2"
  },
  {
    "id": "h2so4_cuco3",
    "need": [
      "H2SO4",
      "CuCO3"
    ],
    "eq": "H2SO4 + CuCO3 → CuSO4 + CO2↑ + H2O",
    "out": [
      "CuSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "CO2"
  },
  {
    "id": "hcl_cas",
    "need": [
      "HCl",
      "CaS"
    ],
    "eq": "2HCl + CaS → CaCl2 + H2S↑",
    "out": [
      "CaCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "H2S"
  },
  {
    "id": "acid_gas_hbr_na2co3_406",
    "need": [
      "HBr",
      "Na2CO3"
    ],
    "eq": "2HBr + Na2CO3 → 2NaBr + CO2 + H2O",
    "out": [
      "NaBr",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_na2co3_407",
    "need": [
      "HF",
      "Na2CO3"
    ],
    "eq": "2HF + Na2CO3 → 2NaF + CO2 + H2O",
    "out": [
      "NaF",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_na2co3_408",
    "need": [
      "H3PO4",
      "Na2CO3"
    ],
    "eq": "2H3PO4 + 3Na2CO3 → 2Na3PO4 + 3CO2 + 3H2O",
    "out": [
      "Na3PO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_na2co3_410",
    "need": [
      "HClO3",
      "Na2CO3"
    ],
    "eq": "2HClO3 + Na2CO3 → 2NaClO3 + CO2 + H2O",
    "out": [
      "NaClO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_na2co3_411",
    "need": [
      "HClO4",
      "Na2CO3"
    ],
    "eq": "2HClO4 + Na2CO3 → 2NaClO4 + CO2 + H2O",
    "out": [
      "NaClO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_k2co3_412",
    "need": [
      "HBr",
      "K2CO3"
    ],
    "eq": "2HBr + K2CO3 → 2KBr + CO2 + H2O",
    "out": [
      "KBr",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_k2co3_413",
    "need": [
      "HF",
      "K2CO3"
    ],
    "eq": "2HF + K2CO3 → 2KF + CO2 + H2O",
    "out": [
      "KF",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hno3_k2co3_414",
    "need": [
      "HNO3",
      "K2CO3"
    ],
    "eq": "2HNO3 + K2CO3 → 2KNO3 + CO2 + H2O",
    "out": [
      "KNO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_k2co3_415",
    "need": [
      "H3PO4",
      "K2CO3"
    ],
    "eq": "2H3PO4 + 3K2CO3 → 2K3PO4 + 3CO2 + 3H2O",
    "out": [
      "K3PO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_k2co3_417",
    "need": [
      "HClO3",
      "K2CO3"
    ],
    "eq": "2HClO3 + K2CO3 → 2KClO3 + CO2 + H2O",
    "out": [
      "KClO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_k2co3_418",
    "need": [
      "HClO4",
      "K2CO3"
    ],
    "eq": "2HClO4 + K2CO3 → 2KClO4 + CO2 + H2O",
    "out": [
      "KClO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_nahco3_419",
    "need": [
      "HBr",
      "NaHCO3"
    ],
    "eq": "HBr + NaHCO3 → NaBr + CO2 + H2O",
    "out": [
      "NaBr",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_nahco3_420",
    "need": [
      "HF",
      "NaHCO3"
    ],
    "eq": "HF + NaHCO3 → NaF + CO2 + H2O",
    "out": [
      "NaF",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_nahco3_421",
    "need": [
      "H3PO4",
      "NaHCO3"
    ],
    "eq": "H3PO4 + 3NaHCO3 → Na3PO4 + 3CO2 + 3H2O",
    "out": [
      "Na3PO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_nahco3_422",
    "need": [
      "HClO3",
      "NaHCO3"
    ],
    "eq": "HClO3 + NaHCO3 → NaClO3 + CO2 + H2O",
    "out": [
      "NaClO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_nahco3_423",
    "need": [
      "HClO4",
      "NaHCO3"
    ],
    "eq": "HClO4 + NaHCO3 → NaClO4 + CO2 + H2O",
    "out": [
      "NaClO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caco3_hbr_424",
    "need": [
      "HBr",
      "CaCO3"
    ],
    "eq": "2HBr + CaCO3 → CaBr2 + CO2 + H2O",
    "out": [
      "CaBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caco3_hclo3_428",
    "need": [
      "HClO3",
      "CaCO3"
    ],
    "eq": "2HClO3 + CaCO3 → Ca(ClO3)2 + CO2 + H2O",
    "out": [
      "Ca(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caco3_hclo4_429",
    "need": [
      "HClO4",
      "CaCO3"
    ],
    "eq": "2HClO4 + CaCO3 → Ca(ClO4)2 + CO2 + H2O",
    "out": [
      "Ca(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_hbr_430",
    "need": [
      "HBr",
      "CuCO3"
    ],
    "eq": "2HBr + CuCO3 → CuBr2 + CO2 + H2O",
    "out": [
      "CuBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_hf_431",
    "need": [
      "HF",
      "CuCO3"
    ],
    "eq": "2HF + CuCO3 → CuF2 + CO2 + H2O",
    "out": [
      "CuF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_hno3_432",
    "need": [
      "HNO3",
      "CuCO3"
    ],
    "eq": "2HNO3 + CuCO3 → Cu(NO3)2 + CO2 + H2O",
    "out": [
      "Cu(NO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_hclo3_435",
    "need": [
      "HClO3",
      "CuCO3"
    ],
    "eq": "2HClO3 + CuCO3 → Cu(ClO3)2 + CO2 + H2O",
    "out": [
      "Cu(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_cuco3_hclo4_436",
    "need": [
      "HClO4",
      "CuCO3"
    ],
    "eq": "2HClO4 + CuCO3 → Cu(ClO4)2 + CO2 + H2O",
    "out": [
      "Cu(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_hbr_437",
    "need": [
      "HBr",
      "FeCO3"
    ],
    "eq": "2HBr + FeCO3 → FeBr2 + CO2 + H2O",
    "out": [
      "FeBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_hf_438",
    "need": [
      "HF",
      "FeCO3"
    ],
    "eq": "2HF + FeCO3 → FeF2 + CO2 + H2O",
    "out": [
      "FeF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_hno3_439",
    "need": [
      "HNO3",
      "FeCO3"
    ],
    "eq": "2HNO3 + FeCO3 → Fe(NO3)2 + CO2 + H2O",
    "out": [
      "Fe(NO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_h2so4_440",
    "need": [
      "H2SO4",
      "FeCO3"
    ],
    "eq": "H2SO4 + FeCO3 → FeSO4 + CO2 + H2O",
    "out": [
      "FeSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_hclo3_443",
    "need": [
      "HClO3",
      "FeCO3"
    ],
    "eq": "2HClO3 + FeCO3 → Fe(ClO3)2 + CO2 + H2O",
    "out": [
      "Fe(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_feco3_hclo4_444",
    "need": [
      "HClO4",
      "FeCO3"
    ],
    "eq": "2HClO4 + FeCO3 → Fe(ClO4)2 + CO2 + H2O",
    "out": [
      "Fe(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_mgco3_445",
    "need": [
      "HBr",
      "MgCO3"
    ],
    "eq": "2HBr + MgCO3 → MgBr2 + CO2 + H2O",
    "out": [
      "MgBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_mgco3_449",
    "need": [
      "HClO3",
      "MgCO3"
    ],
    "eq": "2HClO3 + MgCO3 → Mg(ClO3)2 + CO2 + H2O",
    "out": [
      "Mg(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_mgco3_450",
    "need": [
      "HClO4",
      "MgCO3"
    ],
    "eq": "2HClO4 + MgCO3 → Mg(ClO4)2 + CO2 + H2O",
    "out": [
      "Mg(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hcl_451",
    "need": [
      "HCl",
      "BaCO3"
    ],
    "eq": "2HCl + BaCO3 → BaCl2 + CO2 + H2O",
    "out": [
      "BaCl2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hbr_452",
    "need": [
      "HBr",
      "BaCO3"
    ],
    "eq": "2HBr + BaCO3 → BaBr2 + CO2 + H2O",
    "out": [
      "BaBr2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hf_453",
    "need": [
      "HF",
      "BaCO3"
    ],
    "eq": "2HF + BaCO3 → BaF2 + CO2 + H2O",
    "out": [
      "BaF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hno3_454",
    "need": [
      "HNO3",
      "BaCO3"
    ],
    "eq": "2HNO3 + BaCO3 → Ba(NO3)2 + CO2 + H2O",
    "out": [
      "Ba(NO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hclo3_458",
    "need": [
      "HClO3",
      "BaCO3"
    ],
    "eq": "2HClO3 + BaCO3 → Ba(ClO3)2 + CO2 + H2O",
    "out": [
      "Ba(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baco3_hclo4_459",
    "need": [
      "HClO4",
      "BaCO3"
    ],
    "eq": "2HClO4 + BaCO3 → Ba(ClO4)2 + CO2 + H2O",
    "out": [
      "Ba(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hf_462",
    "need": [
      "HF",
      "Ag2CO3"
    ],
    "eq": "2HF + Ag2CO3 → 2AgF + CO2 + H2O",
    "out": [
      "AgF",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hno3_463",
    "need": [
      "HNO3",
      "Ag2CO3"
    ],
    "eq": "2HNO3 + Ag2CO3 → 2AgNO3 + CO2 + H2O",
    "out": [
      "AgNO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hclo3_467",
    "need": [
      "HClO3",
      "Ag2CO3"
    ],
    "eq": "2HClO3 + Ag2CO3 → 2AgClO3 + CO2 + H2O",
    "out": [
      "AgClO3",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ag2co3_hclo4_468",
    "need": [
      "HClO4",
      "Ag2CO3"
    ],
    "eq": "2HClO4 + Ag2CO3 → 2AgClO4 + CO2 + H2O",
    "out": [
      "AgClO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hno3_pbco3_472",
    "need": [
      "HNO3",
      "PbCO3"
    ],
    "eq": "2HNO3 + PbCO3 → Pb(NO3)2 + CO2 + H2O",
    "out": [
      "Pb(NO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_pbco3_476",
    "need": [
      "HClO3",
      "PbCO3"
    ],
    "eq": "2HClO3 + PbCO3 → Pb(ClO3)2 + CO2 + H2O",
    "out": [
      "Pb(ClO3)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_pbco3_477",
    "need": [
      "HClO4",
      "PbCO3"
    ],
    "eq": "2HClO4 + PbCO3 → Pb(ClO4)2 + CO2 + H2O",
    "out": [
      "Pb(ClO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hbr_na2so3_478",
    "need": [
      "HBr",
      "Na2SO3"
    ],
    "eq": "2HBr + Na2SO3 → 2NaBr + SO2 + H2O",
    "out": [
      "NaBr",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hf_na2so3_479",
    "need": [
      "HF",
      "Na2SO3"
    ],
    "eq": "2HF + Na2SO3 → 2NaF + SO2 + H2O",
    "out": [
      "NaF",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hno3_na2so3_480",
    "need": [
      "HNO3",
      "Na2SO3"
    ],
    "eq": "2HNO3 + Na2SO3 → 2NaNO3 + SO2 + H2O",
    "out": [
      "NaNO3",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h2so4_na2so3_481",
    "need": [
      "H2SO4",
      "Na2SO3"
    ],
    "eq": "H2SO4 + Na2SO3 → Na2SO4 + SO2 + H2O",
    "out": [
      "Na2SO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_h3po4_na2so3_482",
    "need": [
      "H3PO4",
      "Na2SO3"
    ],
    "eq": "2H3PO4 + 3Na2SO3 → 2Na3PO4 + 3SO2 + 3H2O",
    "out": [
      "Na3PO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo3_na2so3_484",
    "need": [
      "HClO3",
      "Na2SO3"
    ],
    "eq": "2HClO3 + Na2SO3 → 2NaClO3 + SO2 + H2O",
    "out": [
      "NaClO3",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_hclo4_na2so3_485",
    "need": [
      "HClO4",
      "Na2SO3"
    ],
    "eq": "2HClO4 + Na2SO3 → 2NaClO4 + SO2 + H2O",
    "out": [
      "NaClO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hcl_486",
    "need": [
      "HCl",
      "CaSO3"
    ],
    "eq": "2HCl + CaSO3 → CaCl2 + SO2 + H2O",
    "out": [
      "CaCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hbr_487",
    "need": [
      "HBr",
      "CaSO3"
    ],
    "eq": "2HBr + CaSO3 → CaBr2 + SO2 + H2O",
    "out": [
      "CaBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hno3_489",
    "need": [
      "HNO3",
      "CaSO3"
    ],
    "eq": "2HNO3 + CaSO3 → Ca(NO3)2 + SO2 + H2O",
    "out": [
      "Ca(NO3)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hclo3_493",
    "need": [
      "HClO3",
      "CaSO3"
    ],
    "eq": "2HClO3 + CaSO3 → Ca(ClO3)2 + SO2 + H2O",
    "out": [
      "Ca(ClO3)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_caso3_hclo4_494",
    "need": [
      "HClO4",
      "CaSO3"
    ],
    "eq": "2HClO4 + CaSO3 → Ca(ClO4)2 + SO2 + H2O",
    "out": [
      "Ca(ClO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hcl_495",
    "need": [
      "HCl",
      "BaSO3"
    ],
    "eq": "2HCl + BaSO3 → BaCl2 + SO2 + H2O",
    "out": [
      "BaCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hbr_496",
    "need": [
      "HBr",
      "BaSO3"
    ],
    "eq": "2HBr + BaSO3 → BaBr2 + SO2 + H2O",
    "out": [
      "BaBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hf_497",
    "need": [
      "HF",
      "BaSO3"
    ],
    "eq": "2HF + BaSO3 → BaF2 + SO2 + H2O",
    "out": [
      "BaF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hno3_498",
    "need": [
      "HNO3",
      "BaSO3"
    ],
    "eq": "2HNO3 + BaSO3 → Ba(NO3)2 + SO2 + H2O",
    "out": [
      "Ba(NO3)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hclo3_502",
    "need": [
      "HClO3",
      "BaSO3"
    ],
    "eq": "2HClO3 + BaSO3 → Ba(ClO3)2 + SO2 + H2O",
    "out": [
      "Ba(ClO3)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_hclo4_503",
    "need": [
      "HClO4",
      "BaSO3"
    ],
    "eq": "2HClO4 + BaSO3 → Ba(ClO4)2 + SO2 + H2O",
    "out": [
      "Ba(ClO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  }
]);

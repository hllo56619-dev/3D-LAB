// Chemistry Lab 3D — other-reactions (28 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
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
    "id": "cl2_nai",
    "need": [
      "Cl2",
      "NaI"
    ],
    "eq": "Cl2 + 2NaI → 2NaCl + I2",
    "out": [
      "NaCl",
      "I2"
    ],
    "col": "#805b91",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "br2_nai",
    "need": [
      "Br2",
      "NaI"
    ],
    "eq": "Br2 + 2NaI → 2NaBr + I2",
    "out": [
      "NaBr",
      "I2"
    ],
    "col": "#805b91",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "cl2_naoh_cold",
    "need": [
      "Cl2",
      "NaOH"
    ],
    "eq": "Cl2 + 2NaOH → NaCl + NaClO + H2O",
    "out": [
      "NaCl",
      "NaClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "explain": "Mô phỏng phản ứng của clo với kiềm loãng, lạnh; điều kiện khác có thể tạo sản phẩm khác."
  },
  {
    "id": "br2_naoh_cold",
    "need": [
      "Br2",
      "NaOH"
    ],
    "eq": "Br2 + 2NaOH → NaBr + NaBrO + H2O",
    "out": [
      "NaBr",
      "NaBrO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08
  }
]);

// Chemistry Lab 3D — thermal-catalysis (19 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
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
    "id": "sulfur_hot_alkali",
    "need": [
      "S",
      "NaOH",
      "H2O"
    ],
    "eq": "3S + 6NaOH → 2Na2S + Na2SO3 + 3H2O",
    "out": [
      "Na2S",
      "Na2SO3",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d9d84a",
    "dur": 8,
    "bub": 0.05,
    "explain": "Lưu huỳnh bị tự oxi hóa–khử trong kiềm nóng, tạo sunfua và sunfit."
  },
  {
    "id": "bromine_hot_alkali",
    "need": [
      "Br2",
      "NaOH",
      "H2O"
    ],
    "eq": "3Br2 + 6NaOH → 5NaBr + NaBrO3 + 3H2O",
    "out": [
      "NaBr",
      "NaBrO3",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.08,
    "explain": "Brom trong kiềm nóng bị tự oxi hóa–khử tạo bromua và bromat."
  },
  {
    "id": "metal_water_h2o_mg_569",
    "need": [
      "Mg",
      "H2O"
    ],
    "eq": "Mg + 2H2O → Mg(OH)2 + H2",
    "out": [
      "Mg(OH)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.9,
    "heat": 80,
    "heating": true,
    "gas": "H2",
    "heatRise": 4,
    "fire": 1,
    "explain": "Kim loại tác dụng với nước tạo hiđroxit và khí hiđro."
  }
]);

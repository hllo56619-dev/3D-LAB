// Chemistry Lab 3D — second-pass coverage review (25 balanced reaction rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_ba_oxygen",
    "need": [
      "Ba",
      "O2"
    ],
    "eq": "Ba + O2 → BaO2",
    "out": [
      "BaO2"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.08,
    "heat": 60,
    "heating": true
  },
  {
    "id": "audit_ba_bromine",
    "need": [
      "Ba",
      "Br2"
    ],
    "eq": "Ba + Br2 → BaBr2",
    "out": [
      "BaBr2"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "audit_fluorine_lithium",
    "need": [
      "F2",
      "Li"
    ],
    "eq": "2Li + F2 → 2LiF",
    "out": [
      "LiF"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_potassium",
    "need": [
      "F2",
      "K"
    ],
    "eq": "2K + F2 → 2KF",
    "out": [
      "KF"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_calcium",
    "need": [
      "F2",
      "Ca"
    ],
    "eq": "Ca + F2 → CaF2",
    "out": [
      "CaF2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_aluminium",
    "need": [
      "F2",
      "Al"
    ],
    "eq": "2Al + 3F2 → 2AlF3",
    "out": [
      "AlF3"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_zinc",
    "need": [
      "F2",
      "Zn"
    ],
    "eq": "Zn + F2 → ZnF2",
    "out": [
      "ZnF2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_copper",
    "need": [
      "F2",
      "Cu"
    ],
    "eq": "Cu + F2 → CuF2",
    "out": [
      "CuF2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_iron",
    "need": [
      "F2",
      "Fe"
    ],
    "eq": "2Fe + 3F2 → 2FeF3",
    "out": [
      "FeF3"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_silver",
    "need": [
      "F2",
      "Ag"
    ],
    "eq": "2Ag + F2 → 2AgF",
    "out": [
      "AgF"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_carbon",
    "need": [
      "F2",
      "C"
    ],
    "eq": "C + 2F2 → CF4",
    "out": [
      "CF4"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "gas": "CF4",
    "explain": "Chỉ mô phỏng phản ứng fluor hóa."
  },
  {
    "id": "audit_lithium_chlorine",
    "need": [
      "Li",
      "Cl2"
    ],
    "eq": "2Li + Cl2 → 2LiCl",
    "out": [
      "LiCl"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_lithium_bromine",
    "need": [
      "Li",
      "Br2"
    ],
    "eq": "2Li + Br2 → 2LiBr",
    "out": [
      "LiBr"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_lithium_iodine",
    "need": [
      "Li",
      "I2"
    ],
    "eq": "2Li + I2 → 2LiI",
    "out": [
      "LiI"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_sodium_bromine",
    "need": [
      "Na",
      "Br2"
    ],
    "eq": "2Na + Br2 → 2NaBr",
    "out": [
      "NaBr"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_sodium_iodine",
    "need": [
      "Na",
      "I2"
    ],
    "eq": "2Na + I2 → 2NaI",
    "out": [
      "NaI"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_potassium_bromine",
    "need": [
      "K",
      "Br2"
    ],
    "eq": "2K + Br2 → 2KBr",
    "out": [
      "KBr"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_potassium_iodine",
    "need": [
      "K",
      "I2"
    ],
    "eq": "2K + I2 → 2KI",
    "out": [
      "KI"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_hg_nitric_concentrated",
    "need": [
      "Hg",
      "HNO3 (đặc)"
    ],
    "eq": "Hg + 4HNO3 (đặc) → Hg(NO3)2 + 2NO2↑ + 2H2O",
    "out": [
      "Hg(NO3)2",
      "NO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "NO2",
    "explain": "Axit nitric đặc oxi hóa thủy ngân; chỉ mô phỏng."
  },
  {
    "id": "audit_h2s_chlorine",
    "need": [
      "H2S",
      "Cl2"
    ],
    "eq": "H2S + Cl2 → S↓ + 2HCl",
    "out": [
      "S",
      "HCl"
    ],
    "col": "#d9d84a",
    "dur": 7,
    "bub": 0.08,
    "precip": "#d9d84a"
  },
  {
    "id": "audit_h2s_bromine",
    "need": [
      "H2S",
      "Br2"
    ],
    "eq": "H2S + Br2 → S↓ + 2HBr",
    "out": [
      "S",
      "HBr"
    ],
    "col": "#d9d84a",
    "dur": 7,
    "bub": 0.08,
    "precip": "#d9d84a"
  },
  {
    "id": "audit_h2s_iodine",
    "need": [
      "H2S",
      "I2"
    ],
    "eq": "H2S + I2 → S↓ + 2HI",
    "out": [
      "S",
      "HI"
    ],
    "col": "#d9d84a",
    "dur": 7,
    "bub": 0.08,
    "precip": "#d9d84a"
  },
  {
    "id": "audit_cucl2_ki_redox",
    "need": [
      "CuCl2",
      "KI"
    ],
    "eq": "2CuCl2 + 4KI → 2CuI↓ + I2 + 4KCl",
    "out": [
      "CuI",
      "I2",
      "KCl"
    ],
    "col": "#805b91",
    "dur": 7,
    "bub": 0.08,
    "precip": "#d9d9c8"
  },
  {
    "id": "audit_agno3_nh3_complex",
    "need": [
      "AgNO3",
      "NH3(aq)"
    ],
    "eq": "AgNO3 + 2NH3(aq) ⇌ [Ag(NH3)2]NO3",
    "out": [
      "[Ag(NH3)2]NO3"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "audit_haucl4_sncl2",
    "need": [
      "HAuCl4",
      "SnCl2"
    ],
    "eq": "2HAuCl4 + 3SnCl2 → 2Au↓ + 3SnCl4 + 2HCl",
    "out": [
      "Au",
      "SnCl4",
      "HCl"
    ],
    "col": "#d8c13a",
    "dur": 8,
    "bub": 0.08,
    "precip": "#d8c13a"
  }
]);

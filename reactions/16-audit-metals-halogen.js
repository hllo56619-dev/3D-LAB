// Chemistry Lab 3D — chemistry coverage audit (14 reviewed rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_ba_water",
    "need": [
      "Ba",
      "H2O"
    ],
    "eq": "Ba + 2H2O → Ba(OH)2 + H2↑",
    "out": [
      "Ba(OH)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.9,
    "gas": "H2",
    "heatRise": 10
  },
  {
    "id": "audit_ba_hcl",
    "need": [
      "Ba",
      "HCl"
    ],
    "eq": "Ba + 2HCl → BaCl2 + H2↑",
    "out": [
      "BaCl2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.8,
    "gas": "H2"
  },
  {
    "id": "audit_ba_chlorine",
    "need": [
      "Ba",
      "Cl2"
    ],
    "eq": "Ba + Cl2 → BaCl2",
    "out": [
      "BaCl2"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.08
  },
  {
    "id": "audit_ba_sulfur",
    "need": [
      "Ba",
      "S"
    ],
    "eq": "Ba + S → BaS",
    "out": [
      "BaS"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "heat": 60,
    "heating": true
  },
  {
    "id": "audit_fluorine_hydrogen",
    "need": [
      "F2",
      "H2"
    ],
    "eq": "H2 + F2 → 2HF",
    "out": [
      "HF"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1,
    "explain": "Phản ứng rất mạnh; chỉ mô phỏng."
  },
  {
    "id": "audit_fluorine_water",
    "need": [
      "F2",
      "H2O"
    ],
    "eq": "2F2 + 2H2O → 4HF + O2↑",
    "out": [
      "HF",
      "O2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "O2",
    "explain": "Flo oxi hóa nước; chỉ mô phỏng."
  },
  {
    "id": "audit_fluorine_sodium",
    "need": [
      "F2",
      "Na"
    ],
    "eq": "2Na + F2 → 2NaF",
    "out": [
      "NaF"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_magnesium",
    "need": [
      "F2",
      "Mg"
    ],
    "eq": "Mg + F2 → MgF2",
    "out": [
      "MgF2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_fluorine_silicon",
    "need": [
      "F2",
      "Si"
    ],
    "eq": "Si + 2F2 → SiF4",
    "out": [
      "SiF4"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "gas": "SiF4"
  },
  {
    "id": "audit_sodium_chlorine",
    "need": [
      "Na",
      "Cl2"
    ],
    "eq": "2Na + Cl2 → 2NaCl",
    "out": [
      "NaCl"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_potassium_chlorine",
    "need": [
      "K",
      "Cl2"
    ],
    "eq": "2K + Cl2 → 2KCl",
    "out": [
      "KCl"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "fire": 1
  },
  {
    "id": "audit_magnesium_co2",
    "need": [
      "Mg",
      "CO2"
    ],
    "eq": "2Mg + CO2 → 2MgO + C",
    "out": [
      "MgO",
      "C"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "heat": 70,
    "heating": true,
    "fire": 1
  },
  {
    "id": "audit_magnesium_cuo",
    "need": [
      "Mg",
      "CuO"
    ],
    "eq": "Mg + CuO → MgO + Cu",
    "out": [
      "MgO",
      "Cu"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08,
    "heat": 70,
    "heating": true,
    "fire": 1
  },
  {
    "id": "audit_carbon_cuo",
    "need": [
      "C",
      "CuO"
    ],
    "eq": "C + 2CuO → CO2 + 2Cu",
    "out": [
      "CO2",
      "Cu"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "heat": 100,
    "heating": true,
    "gas": "CO2"
  }
]);

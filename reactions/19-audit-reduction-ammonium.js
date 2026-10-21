// Chemistry Lab 3D — reduction and ammonium audit (10 rules; duplicated carbon/iron-oxide pair removed).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_h2_cuo",
    "need": [
      "H2",
      "CuO"
    ],
    "eq": "H2 + CuO → Cu + H2O",
    "out": [
      "Cu",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06,
    "heat": 70,
    "heating": true,
    "explain": "Hiđro khử đồng(II) oxit khi đun nóng."
  },
  {
    "id": "audit_co_cuo",
    "need": [
      "CO",
      "CuO"
    ],
    "eq": "CO + CuO → Cu + CO2",
    "out": [
      "Cu",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06,
    "heat": 70,
    "heating": true,
    "gas": "CO2"
  },
  {
    "id": "audit_co_fe2o3",
    "need": [
      "CO",
      "Fe2O3"
    ],
    "eq": "3CO + Fe2O3 → 2Fe + 3CO2",
    "out": [
      "Fe",
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06,
    "heat": 80,
    "heating": true,
    "gas": "CO2",
    "explain": "CO khử sắt(III) oxit trong lò nung."
  },
  {
    "id": "audit_h2_fe2o3",
    "need": [
      "H2",
      "Fe2O3"
    ],
    "eq": "3H2 + Fe2O3 → 2Fe + 3H2O",
    "out": [
      "Fe",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06,
    "heat": 100,
    "heating": true
  },
  {
    "id": "audit_co_oxygen",
    "need": [
      "CO",
      "O2"
    ],
    "eq": "2CO + O2 → 2CO2",
    "out": [
      "CO2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06,
    "heat": 40,
    "heating": true,
    "gas": "CO2",
    "fire": 1
  },
  {
    "id": "audit_agno3_hcl",
    "need": [
      "AgNO3",
      "HCl"
    ],
    "eq": "AgNO3 + HCl → AgCl↓ + HNO3",
    "out": [
      "AgCl",
      "HNO3"
    ],
    "col": "#f1f1eb",
    "dur": 7,
    "bub": 0.06,
    "precip": "#f1f1eb"
  },
  {
    "id": "audit_agno3_hbr",
    "need": [
      "AgNO3",
      "HBr"
    ],
    "eq": "AgNO3 + HBr → AgBr↓ + HNO3",
    "out": [
      "AgBr",
      "HNO3"
    ],
    "col": "#e9dfc9",
    "dur": 7,
    "bub": 0.06,
    "precip": "#e9dfc9"
  },
  {
    "id": "audit_nh4cl_naoh",
    "need": [
      "NH4Cl",
      "NaOH"
    ],
    "eq": "NH4Cl + NaOH → NaCl + NH3↑ + H2O",
    "out": [
      "NaCl",
      "NH3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.35,
    "gas": "NH3"
  },
  {
    "id": "audit_fe3o4_hcl",
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
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.06
  },
  {
    "id": "audit_na2o2_water",
    "need": [
      "Na2O2",
      "H2O"
    ],
    "eq": "2Na2O2 + 2H2O → 4NaOH + O2↑",
    "out": [
      "NaOH",
      "O2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.45,
    "gas": "O2"
  }
]);

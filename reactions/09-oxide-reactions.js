// Chemistry Lab 3D — oxide-reactions (35 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
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
    "id": "ga2o3_hcl",
    "need": [
      "Ga2O3",
      "HCl"
    ],
    "eq": "Ga2O3 + 6HCl → 2GaCl3 + 3H2O",
    "out": [
      "GaCl3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.08
  }
]);

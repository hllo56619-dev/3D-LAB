// Chemistry Lab 3D — redox, reduction, combustion and thermal decomposition.
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_red_fe2o3_h2",
    "need": [
      "Fe2O3",
      "H2"
    ],
    "eq": "Fe2O3 + 3H2 → 2Fe + 3H2O",
    "out": [
      "Fe",
      "H2O"
    ],
    "heat": 90,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_red_fe3o4_co",
    "need": [
      "Fe3O4",
      "CO"
    ],
    "eq": "Fe3O4 + 4CO → 3Fe + 4CO2",
    "out": [
      "Fe",
      "CO2"
    ],
    "heat": 90,
    "heating": true,
    "gas": "CO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_red_pbo_co",
    "need": [
      "PbO",
      "CO"
    ],
    "eq": "PbO + CO → Pb + CO2",
    "out": [
      "Pb",
      "CO2"
    ],
    "heat": 70,
    "heating": true,
    "gas": "CO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_red_sno2_co",
    "need": [
      "SnO2",
      "CO"
    ],
    "eq": "SnO2 + 2CO → Sn + 2CO2",
    "out": [
      "Sn",
      "CO2"
    ],
    "heat": 100,
    "heating": true,
    "gas": "CO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_watergas_shift",
    "need": [
      "CO",
      "H2O"
    ],
    "eq": "CO + H2O → CO2 + H2",
    "out": [
      "CO2",
      "H2"
    ],
    "heat": 100,
    "heating": true,
    "arrowLabel": "xúc tác",
    "gas": "CO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_steam_reform",
    "need": [
      "CH4",
      "H2O"
    ],
    "eq": "CH4 + H2O → CO + 3H2",
    "out": [
      "CO",
      "H2"
    ],
    "heat": 120,
    "heating": true,
    "arrowLabel": "xúc tác",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_znco3",
    "need": [
      "ZnCO3"
    ],
    "eq": "ZnCO3 → ZnO + CO2",
    "out": [
      "ZnO",
      "CO2"
    ],
    "heat": 100,
    "heating": true,
    "gas": "CO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_nh4hco3",
    "need": [
      "NH4HCO3"
    ],
    "eq": "NH4HCO3 → NH3 + CO2 + H2O",
    "out": [
      "NH3",
      "CO2",
      "H2O"
    ],
    "heat": 50,
    "heating": true,
    "gas": "NH3",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_kclo3",
    "need": [
      "KClO3"
    ],
    "eq": "2KClO3 → 2KCl + 3O2",
    "out": [
      "KCl",
      "O2"
    ],
    "heat": 120,
    "heating": true,
    "gas": "O2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_ag2o",
    "need": [
      "Ag2O"
    ],
    "eq": "2Ag2O → 4Ag + O2",
    "out": [
      "Ag",
      "O2"
    ],
    "heat": 100,
    "heating": true,
    "gas": "O2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_znoh2",
    "need": [
      "Zn(OH)2"
    ],
    "eq": "Zn(OH)2 → ZnO + H2O",
    "out": [
      "ZnO",
      "H2O"
    ],
    "heat": 100,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_nano3",
    "need": [
      "NaNO3"
    ],
    "eq": "2NaNO3 → 2NaNO2 + O2",
    "out": [
      "NaNO2",
      "O2"
    ],
    "heat": 120,
    "heating": true,
    "gas": "O2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_kno3",
    "need": [
      "KNO3"
    ],
    "eq": "2KNO3 → 2KNO2 + O2",
    "out": [
      "KNO2",
      "O2"
    ],
    "heat": 120,
    "heating": true,
    "gas": "O2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_pbno3",
    "need": [
      "Pb(NO3)2"
    ],
    "eq": "2Pb(NO3)2 → 2PbO + 4NO2 + O2",
    "out": [
      "PbO",
      "NO2",
      "O2"
    ],
    "heat": 110,
    "heating": true,
    "gas": "NO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_agno3",
    "need": [
      "AgNO3"
    ],
    "eq": "2AgNO3 → 2Ag + 2NO2 + O2",
    "out": [
      "Ag",
      "NO2",
      "O2"
    ],
    "heat": 100,
    "heating": true,
    "gas": "NO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  },
  {
    "id": "audit_thermal_feso4",
    "need": [
      "FeSO4"
    ],
    "eq": "2FeSO4 → Fe2O3 + SO2 + SO3",
    "out": [
      "Fe2O3",
      "SO2",
      "SO3"
    ],
    "heat": 120,
    "heating": true,
    "gas": "SO2",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.15
  }
]);

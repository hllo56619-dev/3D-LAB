// Chemistry Lab 3D — expanded acid reactions with carbonates, hydrogencarbonates, sulfites and sulfides.
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "acidgas_hno3_c_na2co3",
    "need": [
      "HNO3 (đặc)",
      "Na2CO3"
    ],
    "eq": "2HNO3 (đặc) + Na2CO3 → 2NaNO3 + CO2 + H2O",
    "out": [
      "NaNO3",
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
    "id": "acidgas_h2so4_c_na2co3",
    "need": [
      "H2SO4 (đặc)",
      "Na2CO3"
    ],
    "eq": "H2SO4 (đặc) + Na2CO3 → Na2SO4 + CO2 + H2O",
    "out": [
      "Na2SO4",
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
    "id": "acidgas_hno3_c_nahco3",
    "need": [
      "HNO3 (đặc)",
      "NaHCO3"
    ],
    "eq": "HNO3 (đặc) + NaHCO3 → NaNO3 + CO2 + H2O",
    "out": [
      "NaNO3",
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
    "id": "acidgas_h2so4_c_nahco3",
    "need": [
      "H2SO4 (đặc)",
      "NaHCO3"
    ],
    "eq": "H2SO4 (đặc) + 2NaHCO3 → Na2SO4 + 2CO2 + 2H2O",
    "out": [
      "Na2SO4",
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
    "id": "acidgas_caco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "CaCO3"
    ],
    "eq": "2HNO3 (đặc) + CaCO3 → Ca(NO3)2 + CO2 + H2O",
    "out": [
      "Ca(NO3)2",
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
    "id": "acidgas_caco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "CaCO3"
    ],
    "eq": "H2SO4 (đặc) + CaCO3 → CaSO4↓ + CO2 + H2O",
    "out": [
      "CaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_cuco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "CuCO3"
    ],
    "eq": "2HNO3 (đặc) + CuCO3 → Cu(NO3)2 + CO2 + H2O",
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
    "id": "acidgas_cuco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "CuCO3"
    ],
    "eq": "H2SO4 (đặc) + CuCO3 → CuSO4 + CO2 + H2O",
    "out": [
      "CuSO4",
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
    "id": "acidgas_feco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "FeCO3"
    ],
    "eq": "2HNO3 (đặc) + FeCO3 → Fe(NO3)2 + CO2 + H2O",
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
    "id": "acidgas_feco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "FeCO3"
    ],
    "eq": "H2SO4 (đặc) + FeCO3 → FeSO4 + CO2 + H2O",
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
    "id": "acidgas_hbr_na2s",
    "need": [
      "HBr",
      "Na2S"
    ],
    "eq": "2HBr + Na2S → 2NaBr + H2S",
    "out": [
      "NaBr",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_na2s",
    "need": [
      "HF",
      "Na2S"
    ],
    "eq": "2HF + Na2S → 2NaF + H2S",
    "out": [
      "NaF",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_na2s",
    "need": [
      "H2SO4",
      "Na2S"
    ],
    "eq": "H2SO4 + Na2S → Na2SO4 + H2S",
    "out": [
      "Na2SO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_na2s",
    "need": [
      "H3PO4",
      "Na2S"
    ],
    "eq": "2H3PO4 + 3Na2S → 2Na3PO4 + 3H2S",
    "out": [
      "Na3PO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_na2s",
    "need": [
      "CH3COOH",
      "Na2S"
    ],
    "eq": "2CH3COOH + Na2S → 2CH3COONa + H2S",
    "out": [
      "CH3COONa",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hno3_c_mgco3",
    "need": [
      "HNO3 (đặc)",
      "MgCO3"
    ],
    "eq": "2HNO3 (đặc) + MgCO3 → Mg(NO3)2 + CO2 + H2O",
    "out": [
      "Mg(NO3)2",
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
    "id": "acidgas_h2so4_c_mgco3",
    "need": [
      "H2SO4 (đặc)",
      "MgCO3"
    ],
    "eq": "H2SO4 (đặc) + MgCO3 → MgSO4 + CO2 + H2O",
    "out": [
      "MgSO4",
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
    "id": "acidgas_hno3_c_k2co3",
    "need": [
      "HNO3 (đặc)",
      "K2CO3"
    ],
    "eq": "2HNO3 (đặc) + K2CO3 → 2KNO3 + CO2 + H2O",
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
    "id": "acidgas_h2so4_c_k2co3",
    "need": [
      "H2SO4 (đặc)",
      "K2CO3"
    ],
    "eq": "H2SO4 (đặc) + K2CO3 → K2SO4 + CO2 + H2O",
    "out": [
      "K2SO4",
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
    "id": "acidgas_hno3_c_pbco3",
    "need": [
      "HNO3 (đặc)",
      "PbCO3"
    ],
    "eq": "2HNO3 (đặc) + PbCO3 → Pb(NO3)2 + CO2 + H2O",
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
    "id": "acidgas_h2so4_c_pbco3",
    "need": [
      "H2SO4 (đặc)",
      "PbCO3"
    ],
    "eq": "H2SO4 (đặc) + PbCO3 → PbSO4↓ + CO2 + H2O",
    "out": [
      "PbSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_cas_hbr",
    "need": [
      "HBr",
      "CaS"
    ],
    "eq": "2HBr + CaS → CaBr2 + H2S",
    "out": [
      "CaBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cas_hf",
    "need": [
      "HF",
      "CaS"
    ],
    "eq": "2HF + CaS → CaF2↓ + H2S",
    "out": [
      "CaF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cas_h2so4",
    "need": [
      "H2SO4",
      "CaS"
    ],
    "eq": "H2SO4 + CaS → CaSO4↓ + H2S",
    "out": [
      "CaSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cas_h3po4",
    "need": [
      "H3PO4",
      "CaS"
    ],
    "eq": "2H3PO4 + 3CaS → Ca3(PO4)2↓ + 3H2S",
    "out": [
      "Ca3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_cas",
    "need": [
      "CH3COOH",
      "CaS"
    ],
    "eq": "2CH3COOH + CaS → Ca(C2H3O2)2 + H2S",
    "out": [
      "Ca(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ag2co3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Ag2CO3"
    ],
    "eq": "2HNO3 (đặc) + Ag2CO3 → 2AgNO3 + CO2 + H2O",
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
    "id": "acidgas_ag2co3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Ag2CO3"
    ],
    "eq": "H2SO4 (đặc) + Ag2CO3 → Ag2SO4↓ + CO2 + H2O",
    "out": [
      "Ag2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_baco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "BaCO3"
    ],
    "eq": "2HNO3 (đặc) + BaCO3 → Ba(NO3)2 + CO2 + H2O",
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
    "id": "acidgas_baco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "BaCO3"
    ],
    "eq": "H2SO4 (đặc) + BaCO3 → BaSO4↓ + CO2 + H2O",
    "out": [
      "BaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_hcl_zns",
    "need": [
      "HCl",
      "ZnS"
    ],
    "eq": "2HCl + ZnS → ZnCl2 + H2S",
    "out": [
      "ZnCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_zns",
    "need": [
      "HBr",
      "ZnS"
    ],
    "eq": "2HBr + ZnS → ZnBr2 + H2S",
    "out": [
      "ZnBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_zns",
    "need": [
      "HF",
      "ZnS"
    ],
    "eq": "2HF + ZnS → ZnF2 + H2S",
    "out": [
      "ZnF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_zns",
    "need": [
      "H2SO4",
      "ZnS"
    ],
    "eq": "H2SO4 + ZnS → ZnSO4 + H2S",
    "out": [
      "ZnSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_zns",
    "need": [
      "H3PO4",
      "ZnS"
    ],
    "eq": "2H3PO4 + 3ZnS → Zn3(PO4)2↓ + 3H2S",
    "out": [
      "Zn3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_zns",
    "need": [
      "CH3COOH",
      "ZnS"
    ],
    "eq": "2CH3COOH + ZnS → Zn(C2H3O2)2 + H2S",
    "out": [
      "Zn(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ca_hco3_2_hcl",
    "need": [
      "HCl",
      "Ca(HCO3)2"
    ],
    "eq": "2HCl + Ca(HCO3)2 → CaCl2 + 2CO2 + 2H2O",
    "out": [
      "CaCl2",
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
    "id": "acidgas_ca_hco3_2_hbr",
    "need": [
      "HBr",
      "Ca(HCO3)2"
    ],
    "eq": "2HBr + Ca(HCO3)2 → CaBr2 + 2CO2 + 2H2O",
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
    "id": "acidgas_ca_hco3_2_hf",
    "need": [
      "HF",
      "Ca(HCO3)2"
    ],
    "eq": "2HF + Ca(HCO3)2 → CaF2↓ + 2CO2 + 2H2O",
    "out": [
      "CaF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ca_hco3_2_hno3",
    "need": [
      "HNO3",
      "Ca(HCO3)2"
    ],
    "eq": "2HNO3 + Ca(HCO3)2 → Ca(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Ca(NO3)2",
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
    "id": "acidgas_ca_hco3_2_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Ca(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Ca(HCO3)2 → Ca(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Ca(NO3)2",
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
    "id": "acidgas_ca_hco3_2_h2so4",
    "need": [
      "H2SO4",
      "Ca(HCO3)2"
    ],
    "eq": "H2SO4 + Ca(HCO3)2 → CaSO4↓ + 2CO2 + 2H2O",
    "out": [
      "CaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ca_hco3_2_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Ca(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Ca(HCO3)2 → CaSO4↓ + 2CO2 + 2H2O",
    "out": [
      "CaSO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ca_hco3_2_h3po4",
    "need": [
      "H3PO4",
      "Ca(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Ca(HCO3)2 → Ca3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Ca3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_ca_hco3_2",
    "need": [
      "CH3COOH",
      "Ca(HCO3)2"
    ],
    "eq": "2CH3COOH + Ca(HCO3)2 → Ca(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Ca(C2H3O2)2",
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
    "id": "acidgas_hcl_nh4hco3",
    "need": [
      "HCl",
      "NH4HCO3"
    ],
    "eq": "HCl + NH4HCO3 → NH4Cl + CO2 + H2O",
    "out": [
      "NH4Cl",
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
    "id": "acidgas_hbr_nh4hco3",
    "need": [
      "HBr",
      "NH4HCO3"
    ],
    "eq": "HBr + NH4HCO3 → NH4Br + CO2 + H2O",
    "out": [
      "NH4Br",
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
    "id": "acidgas_hf_nh4hco3",
    "need": [
      "HF",
      "NH4HCO3"
    ],
    "eq": "HF + NH4HCO3 → NH4F + CO2 + H2O",
    "out": [
      "NH4F",
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
    "id": "acidgas_hno3_nh4hco3",
    "need": [
      "HNO3",
      "NH4HCO3"
    ],
    "eq": "HNO3 + NH4HCO3 → NH4NO3 + CO2 + H2O",
    "out": [
      "NH4NO3",
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
    "id": "acidgas_hno3_c_nh4hco3",
    "need": [
      "HNO3 (đặc)",
      "NH4HCO3"
    ],
    "eq": "HNO3 (đặc) + NH4HCO3 → NH4NO3 + CO2 + H2O",
    "out": [
      "NH4NO3",
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
    "id": "acidgas_h2so4_nh4hco3",
    "need": [
      "H2SO4",
      "NH4HCO3"
    ],
    "eq": "H2SO4 + 2NH4HCO3 → (NH4)2SO4 + 2CO2 + 2H2O",
    "out": [
      "(NH4)2SO4",
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
    "id": "acidgas_h2so4_c_nh4hco3",
    "need": [
      "H2SO4 (đặc)",
      "NH4HCO3"
    ],
    "eq": "H2SO4 (đặc) + 2NH4HCO3 → (NH4)2SO4 + 2CO2 + 2H2O",
    "out": [
      "(NH4)2SO4",
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
    "id": "acidgas_h3po4_nh4hco3",
    "need": [
      "H3PO4",
      "NH4HCO3"
    ],
    "eq": "H3PO4 + 3NH4HCO3 → (NH4)3PO4 + 3CO2 + 3H2O",
    "out": [
      "(NH4)3PO4",
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
    "id": "acidgas_ch3cooh_nh4hco3",
    "need": [
      "CH3COOH",
      "NH4HCO3"
    ],
    "eq": "CH3COOH + NH4HCO3 → NH4C2H3O2 + CO2 + H2O",
    "out": [
      "NH4C2H3O2",
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
    "id": "acidgas_hclo3_nh4hco3",
    "need": [
      "HClO3",
      "NH4HCO3"
    ],
    "eq": "HClO3 + NH4HCO3 → NH4ClO3 + CO2 + H2O",
    "out": [
      "NH4ClO3",
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
    "id": "acidgas_hclo4_nh4hco3",
    "need": [
      "HClO4",
      "NH4HCO3"
    ],
    "eq": "HClO4 + NH4HCO3 → NH4ClO4 + CO2 + H2O",
    "out": [
      "NH4ClO4",
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
    "id": "acidgas_hcl_znco3",
    "need": [
      "HCl",
      "ZnCO3"
    ],
    "eq": "2HCl + ZnCO3 → ZnCl2 + CO2 + H2O",
    "out": [
      "ZnCl2",
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
    "id": "acidgas_hbr_znco3",
    "need": [
      "HBr",
      "ZnCO3"
    ],
    "eq": "2HBr + ZnCO3 → ZnBr2 + CO2 + H2O",
    "out": [
      "ZnBr2",
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
    "id": "acidgas_hf_znco3",
    "need": [
      "HF",
      "ZnCO3"
    ],
    "eq": "2HF + ZnCO3 → ZnF2 + CO2 + H2O",
    "out": [
      "ZnF2",
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
    "id": "acidgas_hno3_znco3",
    "need": [
      "HNO3",
      "ZnCO3"
    ],
    "eq": "2HNO3 + ZnCO3 → Zn(NO3)2 + CO2 + H2O",
    "out": [
      "Zn(NO3)2",
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
    "id": "acidgas_hno3_c_znco3",
    "need": [
      "HNO3 (đặc)",
      "ZnCO3"
    ],
    "eq": "2HNO3 (đặc) + ZnCO3 → Zn(NO3)2 + CO2 + H2O",
    "out": [
      "Zn(NO3)2",
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
    "id": "acidgas_h2so4_znco3",
    "need": [
      "H2SO4",
      "ZnCO3"
    ],
    "eq": "H2SO4 + ZnCO3 → ZnSO4 + CO2 + H2O",
    "out": [
      "ZnSO4",
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
    "id": "acidgas_h2so4_c_znco3",
    "need": [
      "H2SO4 (đặc)",
      "ZnCO3"
    ],
    "eq": "H2SO4 (đặc) + ZnCO3 → ZnSO4 + CO2 + H2O",
    "out": [
      "ZnSO4",
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
    "id": "acidgas_h3po4_znco3",
    "need": [
      "H3PO4",
      "ZnCO3"
    ],
    "eq": "2H3PO4 + 3ZnCO3 → Zn3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Zn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_znco3",
    "need": [
      "CH3COOH",
      "ZnCO3"
    ],
    "eq": "2CH3COOH + ZnCO3 → Zn(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Zn(C2H3O2)2",
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
    "id": "acidgas_coco3_hcl",
    "need": [
      "HCl",
      "CoCO3"
    ],
    "eq": "2HCl + CoCO3 → CoCl2 + CO2 + H2O",
    "out": [
      "CoCl2",
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
    "id": "acidgas_coco3_hbr",
    "need": [
      "HBr",
      "CoCO3"
    ],
    "eq": "2HBr + CoCO3 → CoBr2 + CO2 + H2O",
    "out": [
      "CoBr2",
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
    "id": "acidgas_coco3_hf",
    "need": [
      "HF",
      "CoCO3"
    ],
    "eq": "2HF + CoCO3 → CoF2 + CO2 + H2O",
    "out": [
      "CoF2",
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
    "id": "acidgas_coco3_hno3",
    "need": [
      "HNO3",
      "CoCO3"
    ],
    "eq": "2HNO3 + CoCO3 → Co(NO3)2 + CO2 + H2O",
    "out": [
      "Co(NO3)2",
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
    "id": "acidgas_coco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "CoCO3"
    ],
    "eq": "2HNO3 (đặc) + CoCO3 → Co(NO3)2 + CO2 + H2O",
    "out": [
      "Co(NO3)2",
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
    "id": "acidgas_coco3_h2so4",
    "need": [
      "H2SO4",
      "CoCO3"
    ],
    "eq": "H2SO4 + CoCO3 → CoSO4 + CO2 + H2O",
    "out": [
      "CoSO4",
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
    "id": "acidgas_coco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "CoCO3"
    ],
    "eq": "H2SO4 (đặc) + CoCO3 → CoSO4 + CO2 + H2O",
    "out": [
      "CoSO4",
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
    "id": "acidgas_coco3_h3po4",
    "need": [
      "H3PO4",
      "CoCO3"
    ],
    "eq": "2H3PO4 + 3CoCO3 → Co3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Co3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_coco3",
    "need": [
      "CH3COOH",
      "CoCO3"
    ],
    "eq": "2CH3COOH + CoCO3 → Co(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Co(C2H3O2)2",
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
    "id": "acidgas_hcl_nico3",
    "need": [
      "HCl",
      "NiCO3"
    ],
    "eq": "2HCl + NiCO3 → NiCl2 + CO2 + H2O",
    "out": [
      "NiCl2",
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
    "id": "acidgas_hbr_nico3",
    "need": [
      "HBr",
      "NiCO3"
    ],
    "eq": "2HBr + NiCO3 → NiBr2 + CO2 + H2O",
    "out": [
      "NiBr2",
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
    "id": "acidgas_hf_nico3",
    "need": [
      "HF",
      "NiCO3"
    ],
    "eq": "2HF + NiCO3 → NiF2 + CO2 + H2O",
    "out": [
      "NiF2",
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
    "id": "acidgas_hno3_nico3",
    "need": [
      "HNO3",
      "NiCO3"
    ],
    "eq": "2HNO3 + NiCO3 → Ni(NO3)2 + CO2 + H2O",
    "out": [
      "Ni(NO3)2",
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
    "id": "acidgas_hno3_c_nico3",
    "need": [
      "HNO3 (đặc)",
      "NiCO3"
    ],
    "eq": "2HNO3 (đặc) + NiCO3 → Ni(NO3)2 + CO2 + H2O",
    "out": [
      "Ni(NO3)2",
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
    "id": "acidgas_h2so4_nico3",
    "need": [
      "H2SO4",
      "NiCO3"
    ],
    "eq": "H2SO4 + NiCO3 → NiSO4 + CO2 + H2O",
    "out": [
      "NiSO4",
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
    "id": "acidgas_h2so4_c_nico3",
    "need": [
      "H2SO4 (đặc)",
      "NiCO3"
    ],
    "eq": "H2SO4 (đặc) + NiCO3 → NiSO4 + CO2 + H2O",
    "out": [
      "NiSO4",
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
    "id": "acidgas_h3po4_nico3",
    "need": [
      "H3PO4",
      "NiCO3"
    ],
    "eq": "2H3PO4 + 3NiCO3 → Ni3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Ni3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_nico3",
    "need": [
      "CH3COOH",
      "NiCO3"
    ],
    "eq": "2CH3COOH + NiCO3 → Ni(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Ni(C2H3O2)2",
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
    "id": "acidgas_hcl_mnco3",
    "need": [
      "HCl",
      "MnCO3"
    ],
    "eq": "2HCl + MnCO3 → MnCl2 + CO2 + H2O",
    "out": [
      "MnCl2",
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
    "id": "acidgas_hbr_mnco3",
    "need": [
      "HBr",
      "MnCO3"
    ],
    "eq": "2HBr + MnCO3 → MnBr2 + CO2 + H2O",
    "out": [
      "MnBr2",
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
    "id": "acidgas_hf_mnco3",
    "need": [
      "HF",
      "MnCO3"
    ],
    "eq": "2HF + MnCO3 → MnF2 + CO2 + H2O",
    "out": [
      "MnF2",
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
    "id": "acidgas_hno3_mnco3",
    "need": [
      "HNO3",
      "MnCO3"
    ],
    "eq": "2HNO3 + MnCO3 → Mn(NO3)2 + CO2 + H2O",
    "out": [
      "Mn(NO3)2",
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
    "id": "acidgas_hno3_c_mnco3",
    "need": [
      "HNO3 (đặc)",
      "MnCO3"
    ],
    "eq": "2HNO3 (đặc) + MnCO3 → Mn(NO3)2 + CO2 + H2O",
    "out": [
      "Mn(NO3)2",
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
    "id": "acidgas_h2so4_mnco3",
    "need": [
      "H2SO4",
      "MnCO3"
    ],
    "eq": "H2SO4 + MnCO3 → MnSO4 + CO2 + H2O",
    "out": [
      "MnSO4",
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
    "id": "acidgas_h2so4_c_mnco3",
    "need": [
      "H2SO4 (đặc)",
      "MnCO3"
    ],
    "eq": "H2SO4 (đặc) + MnCO3 → MnSO4 + CO2 + H2O",
    "out": [
      "MnSO4",
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
    "id": "acidgas_h3po4_mnco3",
    "need": [
      "H3PO4",
      "MnCO3"
    ],
    "eq": "2H3PO4 + 3MnCO3 → Mn3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Mn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_mnco3",
    "need": [
      "CH3COOH",
      "MnCO3"
    ],
    "eq": "2CH3COOH + MnCO3 → Mn(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Mn(C2H3O2)2",
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
    "id": "acidgas_hcl_snco3",
    "need": [
      "HCl",
      "SnCO3"
    ],
    "eq": "2HCl + SnCO3 → SnCl2 + CO2 + H2O",
    "out": [
      "SnCl2",
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
    "id": "acidgas_hbr_snco3",
    "need": [
      "HBr",
      "SnCO3"
    ],
    "eq": "2HBr + SnCO3 → SnBr2 + CO2 + H2O",
    "out": [
      "SnBr2",
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
    "id": "acidgas_hf_snco3",
    "need": [
      "HF",
      "SnCO3"
    ],
    "eq": "2HF + SnCO3 → SnF2 + CO2 + H2O",
    "out": [
      "SnF2",
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
    "id": "acidgas_hno3_snco3",
    "need": [
      "HNO3",
      "SnCO3"
    ],
    "eq": "2HNO3 + SnCO3 → Sn(NO3)2 + CO2 + H2O",
    "out": [
      "Sn(NO3)2",
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
    "id": "acidgas_hno3_c_snco3",
    "need": [
      "HNO3 (đặc)",
      "SnCO3"
    ],
    "eq": "2HNO3 (đặc) + SnCO3 → Sn(NO3)2 + CO2 + H2O",
    "out": [
      "Sn(NO3)2",
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
    "id": "acidgas_h2so4_snco3",
    "need": [
      "H2SO4",
      "SnCO3"
    ],
    "eq": "H2SO4 + SnCO3 → SnSO4 + CO2 + H2O",
    "out": [
      "SnSO4",
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
    "id": "acidgas_h2so4_c_snco3",
    "need": [
      "H2SO4 (đặc)",
      "SnCO3"
    ],
    "eq": "H2SO4 (đặc) + SnCO3 → SnSO4 + CO2 + H2O",
    "out": [
      "SnSO4",
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
    "id": "acidgas_h3po4_snco3",
    "need": [
      "H3PO4",
      "SnCO3"
    ],
    "eq": "2H3PO4 + 3SnCO3 → Sn3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Sn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_snco3",
    "need": [
      "CH3COOH",
      "SnCO3"
    ],
    "eq": "2CH3COOH + SnCO3 → Sn(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Sn(C2H3O2)2",
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
    "id": "acidgas_hcl_li2so3",
    "need": [
      "HCl",
      "Li2SO3"
    ],
    "eq": "2HCl + Li2SO3 → 2LiCl + SO2 + H2O",
    "out": [
      "LiCl",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_li2so3",
    "need": [
      "HBr",
      "Li2SO3"
    ],
    "eq": "2HBr + Li2SO3 → 2LiBr + SO2 + H2O",
    "out": [
      "LiBr",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_li2so3",
    "need": [
      "HF",
      "Li2SO3"
    ],
    "eq": "2HF + Li2SO3 → 2LiF + SO2 + H2O",
    "out": [
      "LiF",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_li2so3",
    "need": [
      "H2SO4",
      "Li2SO3"
    ],
    "eq": "H2SO4 + Li2SO3 → Li2SO4 + SO2 + H2O",
    "out": [
      "Li2SO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_li2so3",
    "need": [
      "H3PO4",
      "Li2SO3"
    ],
    "eq": "2H3PO4 + 3Li2SO3 → 2Li3PO4 + 3SO2 + 3H2O",
    "out": [
      "Li3PO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_li2so3",
    "need": [
      "CH3COOH",
      "Li2SO3"
    ],
    "eq": "2CH3COOH + Li2SO3 → 2LiC2H3O2 + SO2 + H2O",
    "out": [
      "LiC2H3O2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_k2so3",
    "need": [
      "HCl",
      "K2SO3"
    ],
    "eq": "2HCl + K2SO3 → 2KCl + SO2 + H2O",
    "out": [
      "KCl",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_k2so3",
    "need": [
      "HBr",
      "K2SO3"
    ],
    "eq": "2HBr + K2SO3 → 2KBr + SO2 + H2O",
    "out": [
      "KBr",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_k2so3",
    "need": [
      "HF",
      "K2SO3"
    ],
    "eq": "2HF + K2SO3 → 2KF + SO2 + H2O",
    "out": [
      "KF",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_k2so3",
    "need": [
      "H2SO4",
      "K2SO3"
    ],
    "eq": "H2SO4 + K2SO3 → K2SO4 + SO2 + H2O",
    "out": [
      "K2SO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_k2so3",
    "need": [
      "H3PO4",
      "K2SO3"
    ],
    "eq": "2H3PO4 + 3K2SO3 → 2K3PO4 + 3SO2 + 3H2O",
    "out": [
      "K3PO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_k2so3",
    "need": [
      "CH3COOH",
      "K2SO3"
    ],
    "eq": "2CH3COOH + K2SO3 → 2CH3COOK + SO2 + H2O",
    "out": [
      "CH3COOK",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_mgso3",
    "need": [
      "HCl",
      "MgSO3"
    ],
    "eq": "2HCl + MgSO3 → MgCl2 + SO2 + H2O",
    "out": [
      "MgCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_mgso3",
    "need": [
      "HBr",
      "MgSO3"
    ],
    "eq": "2HBr + MgSO3 → MgBr2 + SO2 + H2O",
    "out": [
      "MgBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_mgso3",
    "need": [
      "HF",
      "MgSO3"
    ],
    "eq": "2HF + MgSO3 → MgF2↓ + SO2 + H2O",
    "out": [
      "MgF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_mgso3",
    "need": [
      "H2SO4",
      "MgSO3"
    ],
    "eq": "H2SO4 + MgSO3 → MgSO4 + SO2 + H2O",
    "out": [
      "MgSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_mgso3",
    "need": [
      "H3PO4",
      "MgSO3"
    ],
    "eq": "2H3PO4 + 3MgSO3 → Mg3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Mg3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_mgso3",
    "need": [
      "CH3COOH",
      "MgSO3"
    ],
    "eq": "2CH3COOH + MgSO3 → Mg(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Mg(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_feso3_hcl",
    "need": [
      "HCl",
      "FeSO3"
    ],
    "eq": "2HCl + FeSO3 → FeCl2 + SO2 + H2O",
    "out": [
      "FeCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_feso3_hbr",
    "need": [
      "HBr",
      "FeSO3"
    ],
    "eq": "2HBr + FeSO3 → FeBr2 + SO2 + H2O",
    "out": [
      "FeBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_feso3_hf",
    "need": [
      "HF",
      "FeSO3"
    ],
    "eq": "2HF + FeSO3 → FeF2 + SO2 + H2O",
    "out": [
      "FeF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_feso3_h2so4",
    "need": [
      "H2SO4",
      "FeSO3"
    ],
    "eq": "H2SO4 + FeSO3 → FeSO4 + SO2 + H2O",
    "out": [
      "FeSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_feso3_h3po4",
    "need": [
      "H3PO4",
      "FeSO3"
    ],
    "eq": "2H3PO4 + 3FeSO3 → Fe3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Fe3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_feso3",
    "need": [
      "CH3COOH",
      "FeSO3"
    ],
    "eq": "2CH3COOH + FeSO3 → Fe(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Fe(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_cuso3_hcl",
    "need": [
      "HCl",
      "CuSO3"
    ],
    "eq": "2HCl + CuSO3 → CuCl2 + SO2 + H2O",
    "out": [
      "CuCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_cuso3_hbr",
    "need": [
      "HBr",
      "CuSO3"
    ],
    "eq": "2HBr + CuSO3 → CuBr2 + SO2 + H2O",
    "out": [
      "CuBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_cuso3_hf",
    "need": [
      "HF",
      "CuSO3"
    ],
    "eq": "2HF + CuSO3 → CuF2 + SO2 + H2O",
    "out": [
      "CuF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_cuso3_h2so4",
    "need": [
      "H2SO4",
      "CuSO3"
    ],
    "eq": "H2SO4 + CuSO3 → CuSO4 + SO2 + H2O",
    "out": [
      "CuSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_cuso3_h3po4",
    "need": [
      "H3PO4",
      "CuSO3"
    ],
    "eq": "2H3PO4 + 3CuSO3 → Cu3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Cu3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_cuso3",
    "need": [
      "CH3COOH",
      "CuSO3"
    ],
    "eq": "2CH3COOH + CuSO3 → Cu(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Cu(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_znso3",
    "need": [
      "HCl",
      "ZnSO3"
    ],
    "eq": "2HCl + ZnSO3 → ZnCl2 + SO2 + H2O",
    "out": [
      "ZnCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_znso3",
    "need": [
      "HBr",
      "ZnSO3"
    ],
    "eq": "2HBr + ZnSO3 → ZnBr2 + SO2 + H2O",
    "out": [
      "ZnBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_znso3",
    "need": [
      "HF",
      "ZnSO3"
    ],
    "eq": "2HF + ZnSO3 → ZnF2 + SO2 + H2O",
    "out": [
      "ZnF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_znso3",
    "need": [
      "H2SO4",
      "ZnSO3"
    ],
    "eq": "H2SO4 + ZnSO3 → ZnSO4 + SO2 + H2O",
    "out": [
      "ZnSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_znso3",
    "need": [
      "H3PO4",
      "ZnSO3"
    ],
    "eq": "2H3PO4 + 3ZnSO3 → Zn3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Zn3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_znso3",
    "need": [
      "CH3COOH",
      "ZnSO3"
    ],
    "eq": "2CH3COOH + ZnSO3 → Zn(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Zn(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_coso3_hcl",
    "need": [
      "HCl",
      "CoSO3"
    ],
    "eq": "2HCl + CoSO3 → CoCl2 + SO2 + H2O",
    "out": [
      "CoCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_coso3_hbr",
    "need": [
      "HBr",
      "CoSO3"
    ],
    "eq": "2HBr + CoSO3 → CoBr2 + SO2 + H2O",
    "out": [
      "CoBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_coso3_hf",
    "need": [
      "HF",
      "CoSO3"
    ],
    "eq": "2HF + CoSO3 → CoF2 + SO2 + H2O",
    "out": [
      "CoF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_coso3_h2so4",
    "need": [
      "H2SO4",
      "CoSO3"
    ],
    "eq": "H2SO4 + CoSO3 → CoSO4 + SO2 + H2O",
    "out": [
      "CoSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_coso3_h3po4",
    "need": [
      "H3PO4",
      "CoSO3"
    ],
    "eq": "2H3PO4 + 3CoSO3 → Co3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Co3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_coso3",
    "need": [
      "CH3COOH",
      "CoSO3"
    ],
    "eq": "2CH3COOH + CoSO3 → Co(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Co(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_niso3",
    "need": [
      "HCl",
      "NiSO3"
    ],
    "eq": "2HCl + NiSO3 → NiCl2 + SO2 + H2O",
    "out": [
      "NiCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_niso3",
    "need": [
      "HBr",
      "NiSO3"
    ],
    "eq": "2HBr + NiSO3 → NiBr2 + SO2 + H2O",
    "out": [
      "NiBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_niso3",
    "need": [
      "HF",
      "NiSO3"
    ],
    "eq": "2HF + NiSO3 → NiF2 + SO2 + H2O",
    "out": [
      "NiF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_niso3",
    "need": [
      "H2SO4",
      "NiSO3"
    ],
    "eq": "H2SO4 + NiSO3 → NiSO4 + SO2 + H2O",
    "out": [
      "NiSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_niso3",
    "need": [
      "H3PO4",
      "NiSO3"
    ],
    "eq": "2H3PO4 + 3NiSO3 → Ni3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Ni3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_niso3",
    "need": [
      "CH3COOH",
      "NiSO3"
    ],
    "eq": "2CH3COOH + NiSO3 → Ni(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Ni(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_mnso3",
    "need": [
      "HCl",
      "MnSO3"
    ],
    "eq": "2HCl + MnSO3 → MnCl2 + SO2 + H2O",
    "out": [
      "MnCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_mnso3",
    "need": [
      "HBr",
      "MnSO3"
    ],
    "eq": "2HBr + MnSO3 → MnBr2 + SO2 + H2O",
    "out": [
      "MnBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_mnso3",
    "need": [
      "HF",
      "MnSO3"
    ],
    "eq": "2HF + MnSO3 → MnF2 + SO2 + H2O",
    "out": [
      "MnF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_mnso3",
    "need": [
      "H2SO4",
      "MnSO3"
    ],
    "eq": "H2SO4 + MnSO3 → MnSO4 + SO2 + H2O",
    "out": [
      "MnSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_mnso3",
    "need": [
      "H3PO4",
      "MnSO3"
    ],
    "eq": "2H3PO4 + 3MnSO3 → Mn3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Mn3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_mnso3",
    "need": [
      "CH3COOH",
      "MnSO3"
    ],
    "eq": "2CH3COOH + MnSO3 → Mn(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Mn(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_pbso3",
    "need": [
      "HCl",
      "PbSO3"
    ],
    "eq": "2HCl + PbSO3 → PbCl2↓ + SO2 + H2O",
    "out": [
      "PbCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_pbso3",
    "need": [
      "HBr",
      "PbSO3"
    ],
    "eq": "2HBr + PbSO3 → PbBr2↓ + SO2 + H2O",
    "out": [
      "PbBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_pbso3",
    "need": [
      "HF",
      "PbSO3"
    ],
    "eq": "2HF + PbSO3 → PbF2↓ + SO2 + H2O",
    "out": [
      "PbF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_pbso3",
    "need": [
      "H2SO4",
      "PbSO3"
    ],
    "eq": "H2SO4 + PbSO3 → PbSO4↓ + SO2 + H2O",
    "out": [
      "PbSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_pbso3",
    "need": [
      "H3PO4",
      "PbSO3"
    ],
    "eq": "2H3PO4 + 3PbSO3 → Pb3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Pb3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_pbso3",
    "need": [
      "CH3COOH",
      "PbSO3"
    ],
    "eq": "2CH3COOH + PbSO3 → Pb(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Pb(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_li2co3",
    "need": [
      "HCl",
      "Li2CO3"
    ],
    "eq": "2HCl + Li2CO3 → 2LiCl + CO2 + H2O",
    "out": [
      "LiCl",
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
    "id": "acidgas_hbr_li2co3",
    "need": [
      "HBr",
      "Li2CO3"
    ],
    "eq": "2HBr + Li2CO3 → 2LiBr + CO2 + H2O",
    "out": [
      "LiBr",
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
    "id": "acidgas_hf_li2co3",
    "need": [
      "HF",
      "Li2CO3"
    ],
    "eq": "2HF + Li2CO3 → 2LiF + CO2 + H2O",
    "out": [
      "LiF",
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
    "id": "acidgas_hno3_li2co3",
    "need": [
      "HNO3",
      "Li2CO3"
    ],
    "eq": "2HNO3 + Li2CO3 → 2LiNO3 + CO2 + H2O",
    "out": [
      "LiNO3",
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
    "id": "acidgas_hno3_c_li2co3",
    "need": [
      "HNO3 (đặc)",
      "Li2CO3"
    ],
    "eq": "2HNO3 (đặc) + Li2CO3 → 2LiNO3 + CO2 + H2O",
    "out": [
      "LiNO3",
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
    "id": "acidgas_h2so4_li2co3",
    "need": [
      "H2SO4",
      "Li2CO3"
    ],
    "eq": "H2SO4 + Li2CO3 → Li2SO4 + CO2 + H2O",
    "out": [
      "Li2SO4",
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
    "id": "acidgas_h2so4_c_li2co3",
    "need": [
      "H2SO4 (đặc)",
      "Li2CO3"
    ],
    "eq": "H2SO4 (đặc) + Li2CO3 → Li2SO4 + CO2 + H2O",
    "out": [
      "Li2SO4",
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
    "id": "acidgas_h3po4_li2co3",
    "need": [
      "H3PO4",
      "Li2CO3"
    ],
    "eq": "2H3PO4 + 3Li2CO3 → 2Li3PO4 + 3CO2 + 3H2O",
    "out": [
      "Li3PO4",
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
    "id": "acidgas_ch3cooh_li2co3",
    "need": [
      "CH3COOH",
      "Li2CO3"
    ],
    "eq": "2CH3COOH + Li2CO3 → 2LiC2H3O2 + CO2 + H2O",
    "out": [
      "LiC2H3O2",
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
    "id": "acidgas_hclo3_li2co3",
    "need": [
      "HClO3",
      "Li2CO3"
    ],
    "eq": "2HClO3 + Li2CO3 → 2LiClO3 + CO2 + H2O",
    "out": [
      "LiClO3",
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
    "id": "acidgas_hclo4_li2co3",
    "need": [
      "HClO4",
      "Li2CO3"
    ],
    "eq": "2HClO4 + Li2CO3 → 2LiClO4 + CO2 + H2O",
    "out": [
      "LiClO4",
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
    "id": "acidgas_hcl_li2s",
    "need": [
      "HCl",
      "Li2S"
    ],
    "eq": "2HCl + Li2S → 2LiCl + H2S",
    "out": [
      "LiCl",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_li2s",
    "need": [
      "HBr",
      "Li2S"
    ],
    "eq": "2HBr + Li2S → 2LiBr + H2S",
    "out": [
      "LiBr",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_li2s",
    "need": [
      "HF",
      "Li2S"
    ],
    "eq": "2HF + Li2S → 2LiF + H2S",
    "out": [
      "LiF",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_li2s",
    "need": [
      "H2SO4",
      "Li2S"
    ],
    "eq": "H2SO4 + Li2S → Li2SO4 + H2S",
    "out": [
      "Li2SO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_li2s",
    "need": [
      "H3PO4",
      "Li2S"
    ],
    "eq": "2H3PO4 + 3Li2S → 2Li3PO4 + 3H2S",
    "out": [
      "Li3PO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_li2s",
    "need": [
      "CH3COOH",
      "Li2S"
    ],
    "eq": "2CH3COOH + Li2S → 2LiC2H3O2 + H2S",
    "out": [
      "LiC2H3O2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hcl_k2s",
    "need": [
      "HCl",
      "K2S"
    ],
    "eq": "2HCl + K2S → 2KCl + H2S",
    "out": [
      "KCl",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_k2s",
    "need": [
      "HBr",
      "K2S"
    ],
    "eq": "2HBr + K2S → 2KBr + H2S",
    "out": [
      "KBr",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_k2s",
    "need": [
      "HF",
      "K2S"
    ],
    "eq": "2HF + K2S → 2KF + H2S",
    "out": [
      "KF",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_k2s",
    "need": [
      "H2SO4",
      "K2S"
    ],
    "eq": "H2SO4 + K2S → K2SO4 + H2S",
    "out": [
      "K2SO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_k2s",
    "need": [
      "H3PO4",
      "K2S"
    ],
    "eq": "2H3PO4 + 3K2S → 2K3PO4 + 3H2S",
    "out": [
      "K3PO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_k2s",
    "need": [
      "CH3COOH",
      "K2S"
    ],
    "eq": "2CH3COOH + K2S → 2CH3COOK + H2S",
    "out": [
      "CH3COOK",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_hcl",
    "need": [
      "HCl",
      "BaS"
    ],
    "eq": "2HCl + BaS → BaCl2 + H2S",
    "out": [
      "BaCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_hbr",
    "need": [
      "HBr",
      "BaS"
    ],
    "eq": "2HBr + BaS → BaBr2 + H2S",
    "out": [
      "BaBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_hf",
    "need": [
      "HF",
      "BaS"
    ],
    "eq": "2HF + BaS → BaF2↓ + H2S",
    "out": [
      "BaF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_h2so4",
    "need": [
      "H2SO4",
      "BaS"
    ],
    "eq": "H2SO4 + BaS → BaSO4↓ + H2S",
    "out": [
      "BaSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_h3po4",
    "need": [
      "H3PO4",
      "BaS"
    ],
    "eq": "2H3PO4 + 3BaS → Ba3(PO4)2↓ + 3H2S",
    "out": [
      "Ba3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_bas_ch3cooh",
    "need": [
      "CH3COOH",
      "BaS"
    ],
    "eq": "2CH3COOH + BaS → Ba(C2H3O2)2 + H2S",
    "out": [
      "Ba(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cos_hcl",
    "need": [
      "HCl",
      "CoS"
    ],
    "eq": "2HCl + CoS → CoCl2 + H2S",
    "out": [
      "CoCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cos_hbr",
    "need": [
      "HBr",
      "CoS"
    ],
    "eq": "2HBr + CoS → CoBr2 + H2S",
    "out": [
      "CoBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cos_hf",
    "need": [
      "HF",
      "CoS"
    ],
    "eq": "2HF + CoS → CoF2 + H2S",
    "out": [
      "CoF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cos_h2so4",
    "need": [
      "H2SO4",
      "CoS"
    ],
    "eq": "H2SO4 + CoS → CoSO4 + H2S",
    "out": [
      "CoSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_cos_h3po4",
    "need": [
      "H3PO4",
      "CoS"
    ],
    "eq": "2H3PO4 + 3CoS → Co3(PO4)2↓ + 3H2S",
    "out": [
      "Co3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_cos",
    "need": [
      "CH3COOH",
      "CoS"
    ],
    "eq": "2CH3COOH + CoS → Co(C2H3O2)2 + H2S",
    "out": [
      "Co(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hcl_nis",
    "need": [
      "HCl",
      "NiS"
    ],
    "eq": "2HCl + NiS → NiCl2 + H2S",
    "out": [
      "NiCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_nis",
    "need": [
      "HBr",
      "NiS"
    ],
    "eq": "2HBr + NiS → NiBr2 + H2S",
    "out": [
      "NiBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_nis",
    "need": [
      "HF",
      "NiS"
    ],
    "eq": "2HF + NiS → NiF2 + H2S",
    "out": [
      "NiF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_nis",
    "need": [
      "H2SO4",
      "NiS"
    ],
    "eq": "H2SO4 + NiS → NiSO4 + H2S",
    "out": [
      "NiSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_nis",
    "need": [
      "H3PO4",
      "NiS"
    ],
    "eq": "2H3PO4 + 3NiS → Ni3(PO4)2↓ + 3H2S",
    "out": [
      "Ni3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_nis",
    "need": [
      "CH3COOH",
      "NiS"
    ],
    "eq": "2CH3COOH + NiS → Ni(C2H3O2)2 + H2S",
    "out": [
      "Ni(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hcl_mns",
    "need": [
      "HCl",
      "MnS"
    ],
    "eq": "2HCl + MnS → MnCl2 + H2S",
    "out": [
      "MnCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_mns",
    "need": [
      "HBr",
      "MnS"
    ],
    "eq": "2HBr + MnS → MnBr2 + H2S",
    "out": [
      "MnBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_mns",
    "need": [
      "HF",
      "MnS"
    ],
    "eq": "2HF + MnS → MnF2 + H2S",
    "out": [
      "MnF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_mns",
    "need": [
      "H2SO4",
      "MnS"
    ],
    "eq": "H2SO4 + MnS → MnSO4 + H2S",
    "out": [
      "MnSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_mns",
    "need": [
      "H3PO4",
      "MnS"
    ],
    "eq": "2H3PO4 + 3MnS → Mn3(PO4)2↓ + 3H2S",
    "out": [
      "Mn3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_mns",
    "need": [
      "CH3COOH",
      "MnS"
    ],
    "eq": "2CH3COOH + MnS → Mn(C2H3O2)2 + H2S",
    "out": [
      "Mn(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hcl_khco3",
    "need": [
      "HCl",
      "KHCO3"
    ],
    "eq": "HCl + KHCO3 → KCl + CO2 + H2O",
    "out": [
      "KCl",
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
    "id": "acidgas_hbr_khco3",
    "need": [
      "HBr",
      "KHCO3"
    ],
    "eq": "HBr + KHCO3 → KBr + CO2 + H2O",
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
    "id": "acidgas_hf_khco3",
    "need": [
      "HF",
      "KHCO3"
    ],
    "eq": "HF + KHCO3 → KF + CO2 + H2O",
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
    "id": "acidgas_hno3_khco3",
    "need": [
      "HNO3",
      "KHCO3"
    ],
    "eq": "HNO3 + KHCO3 → KNO3 + CO2 + H2O",
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
    "id": "acidgas_hno3_c_khco3",
    "need": [
      "HNO3 (đặc)",
      "KHCO3"
    ],
    "eq": "HNO3 (đặc) + KHCO3 → KNO3 + CO2 + H2O",
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
    "id": "acidgas_h2so4_khco3",
    "need": [
      "H2SO4",
      "KHCO3"
    ],
    "eq": "H2SO4 + 2KHCO3 → K2SO4 + 2CO2 + 2H2O",
    "out": [
      "K2SO4",
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
    "id": "acidgas_h2so4_c_khco3",
    "need": [
      "H2SO4 (đặc)",
      "KHCO3"
    ],
    "eq": "H2SO4 (đặc) + 2KHCO3 → K2SO4 + 2CO2 + 2H2O",
    "out": [
      "K2SO4",
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
    "id": "acidgas_h3po4_khco3",
    "need": [
      "H3PO4",
      "KHCO3"
    ],
    "eq": "H3PO4 + 3KHCO3 → K3PO4 + 3CO2 + 3H2O",
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
    "id": "acidgas_ch3cooh_khco3",
    "need": [
      "CH3COOH",
      "KHCO3"
    ],
    "eq": "CH3COOH + KHCO3 → CH3COOK + CO2 + H2O",
    "out": [
      "CH3COOK",
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
    "id": "acidgas_hclo3_khco3",
    "need": [
      "HClO3",
      "KHCO3"
    ],
    "eq": "HClO3 + KHCO3 → KClO3 + CO2 + H2O",
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
    "id": "acidgas_hclo4_khco3",
    "need": [
      "HClO4",
      "KHCO3"
    ],
    "eq": "HClO4 + KHCO3 → KClO4 + CO2 + H2O",
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
    "id": "acidgas_cu_hco3_2_hcl",
    "need": [
      "HCl",
      "Cu(HCO3)2"
    ],
    "eq": "2HCl + Cu(HCO3)2 → CuCl2 + 2CO2 + 2H2O",
    "out": [
      "CuCl2",
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
    "id": "acidgas_cu_hco3_2_hbr",
    "need": [
      "HBr",
      "Cu(HCO3)2"
    ],
    "eq": "2HBr + Cu(HCO3)2 → CuBr2 + 2CO2 + 2H2O",
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
    "id": "acidgas_cu_hco3_2_hf",
    "need": [
      "HF",
      "Cu(HCO3)2"
    ],
    "eq": "2HF + Cu(HCO3)2 → CuF2 + 2CO2 + 2H2O",
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
    "id": "acidgas_cu_hco3_2_hno3",
    "need": [
      "HNO3",
      "Cu(HCO3)2"
    ],
    "eq": "2HNO3 + Cu(HCO3)2 → Cu(NO3)2 + 2CO2 + 2H2O",
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
    "id": "acidgas_cu_hco3_2_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Cu(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Cu(HCO3)2 → Cu(NO3)2 + 2CO2 + 2H2O",
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
    "id": "acidgas_cu_hco3_2_h2so4",
    "need": [
      "H2SO4",
      "Cu(HCO3)2"
    ],
    "eq": "H2SO4 + Cu(HCO3)2 → CuSO4 + 2CO2 + 2H2O",
    "out": [
      "CuSO4",
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
    "id": "acidgas_cu_hco3_2_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Cu(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Cu(HCO3)2 → CuSO4 + 2CO2 + 2H2O",
    "out": [
      "CuSO4",
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
    "id": "acidgas_cu_hco3_2_h3po4",
    "need": [
      "H3PO4",
      "Cu(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Cu(HCO3)2 → Cu3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Cu3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_cu_hco3_2",
    "need": [
      "CH3COOH",
      "Cu(HCO3)2"
    ],
    "eq": "2CH3COOH + Cu(HCO3)2 → Cu(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Cu(C2H3O2)2",
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
    "id": "acidgas_fe_hco3_2_hcl",
    "need": [
      "HCl",
      "Fe(HCO3)2"
    ],
    "eq": "2HCl + Fe(HCO3)2 → FeCl2 + 2CO2 + 2H2O",
    "out": [
      "FeCl2",
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
    "id": "acidgas_fe_hco3_2_hbr",
    "need": [
      "HBr",
      "Fe(HCO3)2"
    ],
    "eq": "2HBr + Fe(HCO3)2 → FeBr2 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_hf",
    "need": [
      "HF",
      "Fe(HCO3)2"
    ],
    "eq": "2HF + Fe(HCO3)2 → FeF2 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_hno3",
    "need": [
      "HNO3",
      "Fe(HCO3)2"
    ],
    "eq": "2HNO3 + Fe(HCO3)2 → Fe(NO3)2 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Fe(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Fe(HCO3)2 → Fe(NO3)2 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_h2so4",
    "need": [
      "H2SO4",
      "Fe(HCO3)2"
    ],
    "eq": "H2SO4 + Fe(HCO3)2 → FeSO4 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Fe(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Fe(HCO3)2 → FeSO4 + 2CO2 + 2H2O",
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
    "id": "acidgas_fe_hco3_2_h3po4",
    "need": [
      "H3PO4",
      "Fe(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Fe(HCO3)2 → Fe3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Fe3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_fe_hco3_2",
    "need": [
      "CH3COOH",
      "Fe(HCO3)2"
    ],
    "eq": "2CH3COOH + Fe(HCO3)2 → Fe(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Fe(C2H3O2)2",
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
    "id": "acidgas_hcl_zn_hco3_2",
    "need": [
      "HCl",
      "Zn(HCO3)2"
    ],
    "eq": "2HCl + Zn(HCO3)2 → ZnCl2 + 2CO2 + 2H2O",
    "out": [
      "ZnCl2",
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
    "id": "acidgas_hbr_zn_hco3_2",
    "need": [
      "HBr",
      "Zn(HCO3)2"
    ],
    "eq": "2HBr + Zn(HCO3)2 → ZnBr2 + 2CO2 + 2H2O",
    "out": [
      "ZnBr2",
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
    "id": "acidgas_hf_zn_hco3_2",
    "need": [
      "HF",
      "Zn(HCO3)2"
    ],
    "eq": "2HF + Zn(HCO3)2 → ZnF2 + 2CO2 + 2H2O",
    "out": [
      "ZnF2",
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
    "id": "acidgas_hno3_zn_hco3_2",
    "need": [
      "HNO3",
      "Zn(HCO3)2"
    ],
    "eq": "2HNO3 + Zn(HCO3)2 → Zn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Zn(NO3)2",
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
    "id": "acidgas_hno3_c_zn_hco3_2",
    "need": [
      "HNO3 (đặc)",
      "Zn(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Zn(HCO3)2 → Zn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Zn(NO3)2",
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
    "id": "acidgas_h2so4_zn_hco3_2",
    "need": [
      "H2SO4",
      "Zn(HCO3)2"
    ],
    "eq": "H2SO4 + Zn(HCO3)2 → ZnSO4 + 2CO2 + 2H2O",
    "out": [
      "ZnSO4",
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
    "id": "acidgas_h2so4_c_zn_hco3_2",
    "need": [
      "H2SO4 (đặc)",
      "Zn(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Zn(HCO3)2 → ZnSO4 + 2CO2 + 2H2O",
    "out": [
      "ZnSO4",
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
    "id": "acidgas_h3po4_zn_hco3_2",
    "need": [
      "H3PO4",
      "Zn(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Zn(HCO3)2 → Zn3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Zn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_zn_hco3_2",
    "need": [
      "CH3COOH",
      "Zn(HCO3)2"
    ],
    "eq": "2CH3COOH + Zn(HCO3)2 → Zn(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Zn(C2H3O2)2",
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
    "id": "acidgas_hcl_mg_hco3_2",
    "need": [
      "HCl",
      "Mg(HCO3)2"
    ],
    "eq": "2HCl + Mg(HCO3)2 → MgCl2 + 2CO2 + 2H2O",
    "out": [
      "MgCl2",
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
    "id": "acidgas_hbr_mg_hco3_2",
    "need": [
      "HBr",
      "Mg(HCO3)2"
    ],
    "eq": "2HBr + Mg(HCO3)2 → MgBr2 + 2CO2 + 2H2O",
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
    "id": "acidgas_hf_mg_hco3_2",
    "need": [
      "HF",
      "Mg(HCO3)2"
    ],
    "eq": "2HF + Mg(HCO3)2 → MgF2↓ + 2CO2 + 2H2O",
    "out": [
      "MgF2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_hno3_mg_hco3_2",
    "need": [
      "HNO3",
      "Mg(HCO3)2"
    ],
    "eq": "2HNO3 + Mg(HCO3)2 → Mg(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Mg(NO3)2",
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
    "id": "acidgas_hno3_c_mg_hco3_2",
    "need": [
      "HNO3 (đặc)",
      "Mg(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Mg(HCO3)2 → Mg(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Mg(NO3)2",
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
    "id": "acidgas_h2so4_mg_hco3_2",
    "need": [
      "H2SO4",
      "Mg(HCO3)2"
    ],
    "eq": "H2SO4 + Mg(HCO3)2 → MgSO4 + 2CO2 + 2H2O",
    "out": [
      "MgSO4",
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
    "id": "acidgas_h2so4_c_mg_hco3_2",
    "need": [
      "H2SO4 (đặc)",
      "Mg(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Mg(HCO3)2 → MgSO4 + 2CO2 + 2H2O",
    "out": [
      "MgSO4",
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
    "id": "acidgas_h3po4_mg_hco3_2",
    "need": [
      "H3PO4",
      "Mg(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Mg(HCO3)2 → Mg3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Mg3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_mg_hco3_2",
    "need": [
      "CH3COOH",
      "Mg(HCO3)2"
    ],
    "eq": "2CH3COOH + Mg(HCO3)2 → Mg(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Mg(C2H3O2)2",
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
    "id": "acidgas_crco3_hcl",
    "need": [
      "HCl",
      "CrCO3"
    ],
    "eq": "2HCl + CrCO3 → CrCl2 + CO2 + H2O",
    "out": [
      "CrCl2",
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
    "id": "acidgas_crco3_hbr",
    "need": [
      "HBr",
      "CrCO3"
    ],
    "eq": "2HBr + CrCO3 → CrBr2 + CO2 + H2O",
    "out": [
      "CrBr2",
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
    "id": "acidgas_crco3_hf",
    "need": [
      "HF",
      "CrCO3"
    ],
    "eq": "2HF + CrCO3 → CrF2 + CO2 + H2O",
    "out": [
      "CrF2",
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
    "id": "acidgas_crco3_hno3",
    "need": [
      "HNO3",
      "CrCO3"
    ],
    "eq": "2HNO3 + CrCO3 → Cr(NO3)2 + CO2 + H2O",
    "out": [
      "Cr(NO3)2",
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
    "id": "acidgas_crco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "CrCO3"
    ],
    "eq": "2HNO3 (đặc) + CrCO3 → Cr(NO3)2 + CO2 + H2O",
    "out": [
      "Cr(NO3)2",
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
    "id": "acidgas_crco3_h2so4",
    "need": [
      "H2SO4",
      "CrCO3"
    ],
    "eq": "H2SO4 + CrCO3 → CrSO4 + CO2 + H2O",
    "out": [
      "CrSO4",
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
    "id": "acidgas_crco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "CrCO3"
    ],
    "eq": "H2SO4 (đặc) + CrCO3 → CrSO4 + CO2 + H2O",
    "out": [
      "CrSO4",
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
    "id": "acidgas_crco3_h3po4",
    "need": [
      "H3PO4",
      "CrCO3"
    ],
    "eq": "2H3PO4 + 3CrCO3 → Cr3(PO4)2↓ + 3CO2 + 3H2O",
    "out": [
      "Cr3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_crco3",
    "need": [
      "CH3COOH",
      "CrCO3"
    ],
    "eq": "2CH3COOH + CrCO3 → Cr(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Cr(C2H3O2)2",
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
    "id": "acidgas_ag2so3_hcl",
    "need": [
      "HCl",
      "Ag2SO3"
    ],
    "eq": "2HCl + Ag2SO3 → 2AgCl↓ + SO2 + H2O",
    "out": [
      "AgCl",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ag2so3_hbr",
    "need": [
      "HBr",
      "Ag2SO3"
    ],
    "eq": "2HBr + Ag2SO3 → 2AgBr↓ + SO2 + H2O",
    "out": [
      "AgBr",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ag2so3_hf",
    "need": [
      "HF",
      "Ag2SO3"
    ],
    "eq": "2HF + Ag2SO3 → 2AgF + SO2 + H2O",
    "out": [
      "AgF",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ag2so3_h2so4",
    "need": [
      "H2SO4",
      "Ag2SO3"
    ],
    "eq": "H2SO4 + Ag2SO3 → Ag2SO4↓ + SO2 + H2O",
    "out": [
      "Ag2SO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ag2so3_h3po4",
    "need": [
      "H3PO4",
      "Ag2SO3"
    ],
    "eq": "2H3PO4 + 3Ag2SO3 → 2Ag3PO4↓ + 3SO2 + 3H2O",
    "out": [
      "Ag3PO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ag2so3_ch3cooh",
    "need": [
      "CH3COOH",
      "Ag2SO3"
    ],
    "eq": "2CH3COOH + Ag2SO3 → 2AgC2H3O2 + SO2 + H2O",
    "out": [
      "AgC2H3O2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_snso3",
    "need": [
      "HCl",
      "SnSO3"
    ],
    "eq": "2HCl + SnSO3 → SnCl2 + SO2 + H2O",
    "out": [
      "SnCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hbr_snso3",
    "need": [
      "HBr",
      "SnSO3"
    ],
    "eq": "2HBr + SnSO3 → SnBr2 + SO2 + H2O",
    "out": [
      "SnBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hf_snso3",
    "need": [
      "HF",
      "SnSO3"
    ],
    "eq": "2HF + SnSO3 → SnF2 + SO2 + H2O",
    "out": [
      "SnF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h2so4_snso3",
    "need": [
      "H2SO4",
      "SnSO3"
    ],
    "eq": "H2SO4 + SnSO3 → SnSO4 + SO2 + H2O",
    "out": [
      "SnSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_h3po4_snso3",
    "need": [
      "H3PO4",
      "SnSO3"
    ],
    "eq": "2H3PO4 + 3SnSO3 → Sn3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Sn3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_snso3",
    "need": [
      "CH3COOH",
      "SnSO3"
    ],
    "eq": "2CH3COOH + SnSO3 → Sn(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Sn(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_crso3_hcl",
    "need": [
      "HCl",
      "CrSO3"
    ],
    "eq": "2HCl + CrSO3 → CrCl2 + SO2 + H2O",
    "out": [
      "CrCl2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_crso3_hbr",
    "need": [
      "HBr",
      "CrSO3"
    ],
    "eq": "2HBr + CrSO3 → CrBr2 + SO2 + H2O",
    "out": [
      "CrBr2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_crso3_hf",
    "need": [
      "HF",
      "CrSO3"
    ],
    "eq": "2HF + CrSO3 → CrF2 + SO2 + H2O",
    "out": [
      "CrF2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_crso3_h2so4",
    "need": [
      "H2SO4",
      "CrSO3"
    ],
    "eq": "H2SO4 + CrSO3 → CrSO4 + SO2 + H2O",
    "out": [
      "CrSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_crso3_h3po4",
    "need": [
      "H3PO4",
      "CrSO3"
    ],
    "eq": "2H3PO4 + 3CrSO3 → Cr3(PO4)2↓ + 3SO2 + 3H2O",
    "out": [
      "Cr3(PO4)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_ch3cooh_crso3",
    "need": [
      "CH3COOH",
      "CrSO3"
    ],
    "eq": "2CH3COOH + CrSO3 → Cr(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Cr(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "SO2",
    "explain": "Axit tác dụng với sunfit giải phóng SO₂."
  },
  {
    "id": "acidgas_hcl_sns",
    "need": [
      "HCl",
      "SnS"
    ],
    "eq": "2HCl + SnS → SnCl2 + H2S",
    "out": [
      "SnCl2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hbr_sns",
    "need": [
      "HBr",
      "SnS"
    ],
    "eq": "2HBr + SnS → SnBr2 + H2S",
    "out": [
      "SnBr2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hf_sns",
    "need": [
      "HF",
      "SnS"
    ],
    "eq": "2HF + SnS → SnF2 + H2S",
    "out": [
      "SnF2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h2so4_sns",
    "need": [
      "H2SO4",
      "SnS"
    ],
    "eq": "H2SO4 + SnS → SnSO4 + H2S",
    "out": [
      "SnSO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_h3po4_sns",
    "need": [
      "H3PO4",
      "SnS"
    ],
    "eq": "2H3PO4 + 3SnS → Sn3(PO4)2↓ + 3H2S",
    "out": [
      "Sn3(PO4)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_ch3cooh_sns",
    "need": [
      "CH3COOH",
      "SnS"
    ],
    "eq": "2CH3COOH + SnS → Sn(C2H3O2)2 + H2S",
    "out": [
      "Sn(C2H3O2)2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_hcl",
    "need": [
      "HCl",
      "(NH4)2S"
    ],
    "eq": "2HCl + (NH4)2S → 2NH4Cl + H2S",
    "out": [
      "NH4Cl",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_hbr",
    "need": [
      "HBr",
      "(NH4)2S"
    ],
    "eq": "2HBr + (NH4)2S → 2NH4Br + H2S",
    "out": [
      "NH4Br",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_hf",
    "need": [
      "HF",
      "(NH4)2S"
    ],
    "eq": "2HF + (NH4)2S → 2NH4F + H2S",
    "out": [
      "NH4F",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_h2so4",
    "need": [
      "H2SO4",
      "(NH4)2S"
    ],
    "eq": "H2SO4 + (NH4)2S → (NH4)2SO4 + H2S",
    "out": [
      "(NH4)2SO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_h3po4",
    "need": [
      "H3PO4",
      "(NH4)2S"
    ],
    "eq": "2H3PO4 + 3(NH4)2S → 2(NH4)3PO4 + 3H2S",
    "out": [
      "(NH4)3PO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_nh4_2s_ch3cooh",
    "need": [
      "CH3COOH",
      "(NH4)2S"
    ],
    "eq": "2CH3COOH + (NH4)2S → 2NH4C2H3O2 + H2S",
    "out": [
      "NH4C2H3O2",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Axit tác dụng với sunfua giải phóng H₂S."
  },
  {
    "id": "acidgas_hcl_ni_hco3_2",
    "need": [
      "HCl",
      "Ni(HCO3)2"
    ],
    "eq": "2HCl + Ni(HCO3)2 → NiCl2 + 2CO2 + 2H2O",
    "out": [
      "NiCl2",
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
    "id": "acidgas_hbr_ni_hco3_2",
    "need": [
      "HBr",
      "Ni(HCO3)2"
    ],
    "eq": "2HBr + Ni(HCO3)2 → NiBr2 + 2CO2 + 2H2O",
    "out": [
      "NiBr2",
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
    "id": "acidgas_hf_ni_hco3_2",
    "need": [
      "HF",
      "Ni(HCO3)2"
    ],
    "eq": "2HF + Ni(HCO3)2 → NiF2 + 2CO2 + 2H2O",
    "out": [
      "NiF2",
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
    "id": "acidgas_hno3_ni_hco3_2",
    "need": [
      "HNO3",
      "Ni(HCO3)2"
    ],
    "eq": "2HNO3 + Ni(HCO3)2 → Ni(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Ni(NO3)2",
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
    "id": "acidgas_hno3_c_ni_hco3_2",
    "need": [
      "HNO3 (đặc)",
      "Ni(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Ni(HCO3)2 → Ni(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Ni(NO3)2",
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
    "id": "acidgas_h2so4_ni_hco3_2",
    "need": [
      "H2SO4",
      "Ni(HCO3)2"
    ],
    "eq": "H2SO4 + Ni(HCO3)2 → NiSO4 + 2CO2 + 2H2O",
    "out": [
      "NiSO4",
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
    "id": "acidgas_h2so4_c_ni_hco3_2",
    "need": [
      "H2SO4 (đặc)",
      "Ni(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Ni(HCO3)2 → NiSO4 + 2CO2 + 2H2O",
    "out": [
      "NiSO4",
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
    "id": "acidgas_h3po4_ni_hco3_2",
    "need": [
      "H3PO4",
      "Ni(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Ni(HCO3)2 → Ni3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Ni3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_ni_hco3_2",
    "need": [
      "CH3COOH",
      "Ni(HCO3)2"
    ],
    "eq": "2CH3COOH + Ni(HCO3)2 → Ni(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Ni(C2H3O2)2",
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
    "id": "acidgas_hcl_mn_hco3_2",
    "need": [
      "HCl",
      "Mn(HCO3)2"
    ],
    "eq": "2HCl + Mn(HCO3)2 → MnCl2 + 2CO2 + 2H2O",
    "out": [
      "MnCl2",
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
    "id": "acidgas_hbr_mn_hco3_2",
    "need": [
      "HBr",
      "Mn(HCO3)2"
    ],
    "eq": "2HBr + Mn(HCO3)2 → MnBr2 + 2CO2 + 2H2O",
    "out": [
      "MnBr2",
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
    "id": "acidgas_hf_mn_hco3_2",
    "need": [
      "HF",
      "Mn(HCO3)2"
    ],
    "eq": "2HF + Mn(HCO3)2 → MnF2 + 2CO2 + 2H2O",
    "out": [
      "MnF2",
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
    "id": "acidgas_hno3_mn_hco3_2",
    "need": [
      "HNO3",
      "Mn(HCO3)2"
    ],
    "eq": "2HNO3 + Mn(HCO3)2 → Mn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Mn(NO3)2",
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
    "id": "acidgas_hno3_c_mn_hco3_2",
    "need": [
      "HNO3 (đặc)",
      "Mn(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Mn(HCO3)2 → Mn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Mn(NO3)2",
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
    "id": "acidgas_h2so4_mn_hco3_2",
    "need": [
      "H2SO4",
      "Mn(HCO3)2"
    ],
    "eq": "H2SO4 + Mn(HCO3)2 → MnSO4 + 2CO2 + 2H2O",
    "out": [
      "MnSO4",
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
    "id": "acidgas_h2so4_c_mn_hco3_2",
    "need": [
      "H2SO4 (đặc)",
      "Mn(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Mn(HCO3)2 → MnSO4 + 2CO2 + 2H2O",
    "out": [
      "MnSO4",
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
    "id": "acidgas_h3po4_mn_hco3_2",
    "need": [
      "H3PO4",
      "Mn(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Mn(HCO3)2 → Mn3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Mn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_mn_hco3_2",
    "need": [
      "CH3COOH",
      "Mn(HCO3)2"
    ],
    "eq": "2CH3COOH + Mn(HCO3)2 → Mn(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Mn(C2H3O2)2",
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
    "id": "acidgas_hcl_sn_hco3_2",
    "need": [
      "HCl",
      "Sn(HCO3)2"
    ],
    "eq": "2HCl + Sn(HCO3)2 → SnCl2 + 2CO2 + 2H2O",
    "out": [
      "SnCl2",
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
    "id": "acidgas_hbr_sn_hco3_2",
    "need": [
      "HBr",
      "Sn(HCO3)2"
    ],
    "eq": "2HBr + Sn(HCO3)2 → SnBr2 + 2CO2 + 2H2O",
    "out": [
      "SnBr2",
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
    "id": "acidgas_hf_sn_hco3_2",
    "need": [
      "HF",
      "Sn(HCO3)2"
    ],
    "eq": "2HF + Sn(HCO3)2 → SnF2 + 2CO2 + 2H2O",
    "out": [
      "SnF2",
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
    "id": "acidgas_hno3_sn_hco3_2",
    "need": [
      "HNO3",
      "Sn(HCO3)2"
    ],
    "eq": "2HNO3 + Sn(HCO3)2 → Sn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Sn(NO3)2",
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
    "id": "acidgas_hno3_c_sn_hco3_2",
    "need": [
      "HNO3 (đặc)",
      "Sn(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Sn(HCO3)2 → Sn(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Sn(NO3)2",
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
    "id": "acidgas_h2so4_sn_hco3_2",
    "need": [
      "H2SO4",
      "Sn(HCO3)2"
    ],
    "eq": "H2SO4 + Sn(HCO3)2 → SnSO4 + 2CO2 + 2H2O",
    "out": [
      "SnSO4",
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
    "id": "acidgas_h2so4_c_sn_hco3_2",
    "need": [
      "H2SO4 (đặc)",
      "Sn(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Sn(HCO3)2 → SnSO4 + 2CO2 + 2H2O",
    "out": [
      "SnSO4",
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
    "id": "acidgas_h3po4_sn_hco3_2",
    "need": [
      "H3PO4",
      "Sn(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Sn(HCO3)2 → Sn3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Sn3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_sn_hco3_2",
    "need": [
      "CH3COOH",
      "Sn(HCO3)2"
    ],
    "eq": "2CH3COOH + Sn(HCO3)2 → Sn(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Sn(C2H3O2)2",
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
    "id": "acidgas_co_hco3_2_hcl",
    "need": [
      "HCl",
      "Co(HCO3)2"
    ],
    "eq": "2HCl + Co(HCO3)2 → CoCl2 + 2CO2 + 2H2O",
    "out": [
      "CoCl2",
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
    "id": "acidgas_co_hco3_2_hbr",
    "need": [
      "HBr",
      "Co(HCO3)2"
    ],
    "eq": "2HBr + Co(HCO3)2 → CoBr2 + 2CO2 + 2H2O",
    "out": [
      "CoBr2",
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
    "id": "acidgas_co_hco3_2_hf",
    "need": [
      "HF",
      "Co(HCO3)2"
    ],
    "eq": "2HF + Co(HCO3)2 → CoF2 + 2CO2 + 2H2O",
    "out": [
      "CoF2",
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
    "id": "acidgas_co_hco3_2_hno3",
    "need": [
      "HNO3",
      "Co(HCO3)2"
    ],
    "eq": "2HNO3 + Co(HCO3)2 → Co(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Co(NO3)2",
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
    "id": "acidgas_co_hco3_2_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Co(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Co(HCO3)2 → Co(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Co(NO3)2",
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
    "id": "acidgas_co_hco3_2_h2so4",
    "need": [
      "H2SO4",
      "Co(HCO3)2"
    ],
    "eq": "H2SO4 + Co(HCO3)2 → CoSO4 + 2CO2 + 2H2O",
    "out": [
      "CoSO4",
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
    "id": "acidgas_co_hco3_2_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Co(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Co(HCO3)2 → CoSO4 + 2CO2 + 2H2O",
    "out": [
      "CoSO4",
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
    "id": "acidgas_co_hco3_2_h3po4",
    "need": [
      "H3PO4",
      "Co(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Co(HCO3)2 → Co3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Co3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_co_hco3_2",
    "need": [
      "CH3COOH",
      "Co(HCO3)2"
    ],
    "eq": "2CH3COOH + Co(HCO3)2 → Co(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Co(C2H3O2)2",
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
    "id": "acidgas_hcl_lihco3",
    "need": [
      "HCl",
      "LiHCO3"
    ],
    "eq": "HCl + LiHCO3 → LiCl + CO2 + H2O",
    "out": [
      "LiCl",
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
    "id": "acidgas_hbr_lihco3",
    "need": [
      "HBr",
      "LiHCO3"
    ],
    "eq": "HBr + LiHCO3 → LiBr + CO2 + H2O",
    "out": [
      "LiBr",
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
    "id": "acidgas_hf_lihco3",
    "need": [
      "HF",
      "LiHCO3"
    ],
    "eq": "HF + LiHCO3 → LiF + CO2 + H2O",
    "out": [
      "LiF",
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
    "id": "acidgas_hno3_lihco3",
    "need": [
      "HNO3",
      "LiHCO3"
    ],
    "eq": "HNO3 + LiHCO3 → LiNO3 + CO2 + H2O",
    "out": [
      "LiNO3",
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
    "id": "acidgas_hno3_c_lihco3",
    "need": [
      "HNO3 (đặc)",
      "LiHCO3"
    ],
    "eq": "HNO3 (đặc) + LiHCO3 → LiNO3 + CO2 + H2O",
    "out": [
      "LiNO3",
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
    "id": "acidgas_h2so4_lihco3",
    "need": [
      "H2SO4",
      "LiHCO3"
    ],
    "eq": "H2SO4 + 2LiHCO3 → Li2SO4 + 2CO2 + 2H2O",
    "out": [
      "Li2SO4",
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
    "id": "acidgas_h2so4_c_lihco3",
    "need": [
      "H2SO4 (đặc)",
      "LiHCO3"
    ],
    "eq": "H2SO4 (đặc) + 2LiHCO3 → Li2SO4 + 2CO2 + 2H2O",
    "out": [
      "Li2SO4",
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
    "id": "acidgas_h3po4_lihco3",
    "need": [
      "H3PO4",
      "LiHCO3"
    ],
    "eq": "H3PO4 + 3LiHCO3 → Li3PO4 + 3CO2 + 3H2O",
    "out": [
      "Li3PO4",
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
    "id": "acidgas_ch3cooh_lihco3",
    "need": [
      "CH3COOH",
      "LiHCO3"
    ],
    "eq": "CH3COOH + LiHCO3 → LiC2H3O2 + CO2 + H2O",
    "out": [
      "LiC2H3O2",
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
    "id": "acidgas_hclo3_lihco3",
    "need": [
      "HClO3",
      "LiHCO3"
    ],
    "eq": "HClO3 + LiHCO3 → LiClO3 + CO2 + H2O",
    "out": [
      "LiClO3",
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
    "id": "acidgas_hclo4_lihco3",
    "need": [
      "HClO4",
      "LiHCO3"
    ],
    "eq": "HClO4 + LiHCO3 → LiClO4 + CO2 + H2O",
    "out": [
      "LiClO4",
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
    "id": "acidgas_aghco3_hcl",
    "need": [
      "HCl",
      "AgHCO3"
    ],
    "eq": "HCl + AgHCO3 → AgCl↓ + CO2 + H2O",
    "out": [
      "AgCl",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_aghco3_hbr",
    "need": [
      "HBr",
      "AgHCO3"
    ],
    "eq": "HBr + AgHCO3 → AgBr↓ + CO2 + H2O",
    "out": [
      "AgBr",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_aghco3_hf",
    "need": [
      "HF",
      "AgHCO3"
    ],
    "eq": "HF + AgHCO3 → AgF + CO2 + H2O",
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
    "id": "acidgas_aghco3_hno3",
    "need": [
      "HNO3",
      "AgHCO3"
    ],
    "eq": "HNO3 + AgHCO3 → AgNO3 + CO2 + H2O",
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
    "id": "acidgas_aghco3_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "AgHCO3"
    ],
    "eq": "HNO3 (đặc) + AgHCO3 → AgNO3 + CO2 + H2O",
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
    "id": "acidgas_aghco3_h2so4",
    "need": [
      "H2SO4",
      "AgHCO3"
    ],
    "eq": "H2SO4 + 2AgHCO3 → Ag2SO4↓ + 2CO2 + 2H2O",
    "out": [
      "Ag2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_aghco3_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "AgHCO3"
    ],
    "eq": "H2SO4 (đặc) + 2AgHCO3 → Ag2SO4↓ + 2CO2 + 2H2O",
    "out": [
      "Ag2SO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_aghco3_h3po4",
    "need": [
      "H3PO4",
      "AgHCO3"
    ],
    "eq": "H3PO4 + 3AgHCO3 → Ag3PO4↓ + 3CO2 + 3H2O",
    "out": [
      "Ag3PO4",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_aghco3_ch3cooh",
    "need": [
      "CH3COOH",
      "AgHCO3"
    ],
    "eq": "CH3COOH + AgHCO3 → AgC2H3O2 + CO2 + H2O",
    "out": [
      "AgC2H3O2",
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
    "id": "acidgas_aghco3_hclo3",
    "need": [
      "HClO3",
      "AgHCO3"
    ],
    "eq": "HClO3 + AgHCO3 → AgClO3 + CO2 + H2O",
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
    "id": "acidgas_aghco3_hclo4",
    "need": [
      "HClO4",
      "AgHCO3"
    ],
    "eq": "HClO4 + AgHCO3 → AgClO4 + CO2 + H2O",
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
    "id": "acidgas_cr_hco3_2_hcl",
    "need": [
      "HCl",
      "Cr(HCO3)2"
    ],
    "eq": "2HCl + Cr(HCO3)2 → CrCl2 + 2CO2 + 2H2O",
    "out": [
      "CrCl2",
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
    "id": "acidgas_cr_hco3_2_hbr",
    "need": [
      "HBr",
      "Cr(HCO3)2"
    ],
    "eq": "2HBr + Cr(HCO3)2 → CrBr2 + 2CO2 + 2H2O",
    "out": [
      "CrBr2",
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
    "id": "acidgas_cr_hco3_2_hf",
    "need": [
      "HF",
      "Cr(HCO3)2"
    ],
    "eq": "2HF + Cr(HCO3)2 → CrF2 + 2CO2 + 2H2O",
    "out": [
      "CrF2",
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
    "id": "acidgas_cr_hco3_2_hno3",
    "need": [
      "HNO3",
      "Cr(HCO3)2"
    ],
    "eq": "2HNO3 + Cr(HCO3)2 → Cr(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Cr(NO3)2",
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
    "id": "acidgas_cr_hco3_2_hno3_c",
    "need": [
      "HNO3 (đặc)",
      "Cr(HCO3)2"
    ],
    "eq": "2HNO3 (đặc) + Cr(HCO3)2 → Cr(NO3)2 + 2CO2 + 2H2O",
    "out": [
      "Cr(NO3)2",
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
    "id": "acidgas_cr_hco3_2_h2so4",
    "need": [
      "H2SO4",
      "Cr(HCO3)2"
    ],
    "eq": "H2SO4 + Cr(HCO3)2 → CrSO4 + 2CO2 + 2H2O",
    "out": [
      "CrSO4",
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
    "id": "acidgas_cr_hco3_2_h2so4_c",
    "need": [
      "H2SO4 (đặc)",
      "Cr(HCO3)2"
    ],
    "eq": "H2SO4 (đặc) + Cr(HCO3)2 → CrSO4 + 2CO2 + 2H2O",
    "out": [
      "CrSO4",
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
    "id": "acidgas_cr_hco3_2_h3po4",
    "need": [
      "H3PO4",
      "Cr(HCO3)2"
    ],
    "eq": "2H3PO4 + 3Cr(HCO3)2 → Cr3(PO4)2↓ + 6CO2 + 6H2O",
    "out": [
      "Cr3(PO4)2",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "CO2",
    "precip": "#eeeeea",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acidgas_ch3cooh_cr_hco3_2",
    "need": [
      "CH3COOH",
      "Cr(HCO3)2"
    ],
    "eq": "2CH3COOH + Cr(HCO3)2 → Cr(C2H3O2)2 + 2CO2 + 2H2O",
    "out": [
      "Cr(C2H3O2)2",
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
    "id": "acidgas_al2s3_hcl",
    "need": [
      "HCl",
      "Al2S3"
    ],
    "eq": "6HCl + Al2S3 → 2AlCl3 + 3H2S",
    "out": [
      "AlCl3",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  },
  {
    "id": "acidgas_al2s3_hbr",
    "need": [
      "HBr",
      "Al2S3"
    ],
    "eq": "6HBr + Al2S3 → 2AlBr3 + 3H2S",
    "out": [
      "AlBr3",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  },
  {
    "id": "acidgas_al2s3_hf",
    "need": [
      "HF",
      "Al2S3"
    ],
    "eq": "6HF + Al2S3 → 2AlF3 + 3H2S",
    "out": [
      "AlF3",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  },
  {
    "id": "acidgas_al2s3_h2so4",
    "need": [
      "H2SO4",
      "Al2S3"
    ],
    "eq": "3H2SO4 + Al2S3 → Al2(SO4)3 + 3H2S",
    "out": [
      "Al2(SO4)3",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  },
  {
    "id": "acidgas_al2s3_h3po4",
    "need": [
      "H3PO4",
      "Al2S3"
    ],
    "eq": "2H3PO4 + Al2S3 → 2AlPO4 + 3H2S",
    "out": [
      "AlPO4",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  },
  {
    "id": "acidgas_al2s3_ch3cooh",
    "need": [
      "CH3COOH",
      "Al2S3"
    ],
    "eq": "6CH3COOH + Al2S3 → 2Al(C2H3O2)3 + 3H2S",
    "out": [
      "Al(C2H3O2)3",
      "H2S"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.5,
    "gas": "H2S",
    "explain": "Sulfua nhôm phản ứng với axit giải phóng H₂S."
  }
]);

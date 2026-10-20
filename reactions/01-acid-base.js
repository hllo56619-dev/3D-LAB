// Chemistry Lab 3D — acid-base (197 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "hcl_naoh",
    "need": [
      "HCl",
      "NaOH"
    ],
    "eq": "HCl + NaOH → NaCl + H2O",
    "out": [
      "NaCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.12,
    "heatRise": 3,
    "explain": "Phản ứng trung hòa tạo muối và nước."
  },
  {
    "id": "hcl_koh",
    "need": [
      "HCl",
      "KOH"
    ],
    "eq": "HCl + KOH → KCl + H2O",
    "out": [
      "KCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 3
  },
  {
    "id": "h2so4_naoh",
    "need": [
      "H2SO4",
      "NaOH"
    ],
    "eq": "H2SO4 + 2NaOH → Na2SO4 + 2H2O",
    "out": [
      "Na2SO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1,
    "heatRise": 4
  },
  {
    "id": "hno3_naoh",
    "need": [
      "HNO3",
      "NaOH"
    ],
    "eq": "HNO3 + NaOH → NaNO3 + H2O",
    "out": [
      "NaNO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 3
  },
  {
    "id": "hcl_caoh2",
    "need": [
      "HCl",
      "Ca(OH)2"
    ],
    "eq": "2HCl + Ca(OH)2 → CaCl2 + 2H2O",
    "out": [
      "CaCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "hno3_koh",
    "need": [
      "HNO3",
      "KOH"
    ],
    "eq": "HNO3 + KOH → KNO3 + H2O",
    "out": [
      "KNO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "h2so4_koh",
    "need": [
      "H2SO4",
      "KOH"
    ],
    "eq": "H2SO4 + 2KOH → K2SO4 + 2H2O",
    "out": [
      "K2SO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.08,
    "heatRise": 4
  },
  {
    "id": "hno3_caoh2",
    "need": [
      "HNO3",
      "Ca(OH)2"
    ],
    "eq": "2HNO3 + Ca(OH)2 → Ca(NO3)2 + 2H2O",
    "out": [
      "Ca(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "hcl_baoh2",
    "need": [
      "HCl",
      "Ba(OH)2"
    ],
    "eq": "2HCl + Ba(OH)2 → BaCl2 + 2H2O",
    "out": [
      "BaCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "h3po4_naoh",
    "need": [
      "H3PO4",
      "NaOH"
    ],
    "eq": "H3PO4 + 3NaOH → Na3PO4 + 3H2O",
    "out": [
      "Na3PO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.08,
    "heatRise": 3
  },
  {
    "id": "hcl_lioh",
    "need": [
      "HCl",
      "LiOH"
    ],
    "eq": "HCl + LiOH → LiCl + H2O",
    "out": [
      "LiCl",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hcl_mgoh2",
    "need": [
      "HCl",
      "Mg(OH)2"
    ],
    "eq": "2HCl + Mg(OH)2 → MgCl2 + 2H2O",
    "out": [
      "MgCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_cuoh2",
    "need": [
      "HCl",
      "Cu(OH)2"
    ],
    "eq": "2HCl + Cu(OH)2 → CuCl2 + 2H2O",
    "out": [
      "CuCl2",
      "H2O"
    ],
    "col": "#4d83d7",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_feoh2",
    "need": [
      "HCl",
      "Fe(OH)2"
    ],
    "eq": "2HCl + Fe(OH)2 → FeCl2 + 2H2O",
    "out": [
      "FeCl2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_feoh3",
    "need": [
      "HCl",
      "Fe(OH)3"
    ],
    "eq": "3HCl + Fe(OH)3 → FeCl3 + 3H2O",
    "out": [
      "FeCl3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_znoh2",
    "need": [
      "HCl",
      "Zn(OH)2"
    ],
    "eq": "2HCl + Zn(OH)2 → ZnCl2 + 2H2O",
    "out": [
      "ZnCl2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_aloh3",
    "need": [
      "HCl",
      "Al(OH)3"
    ],
    "eq": "3HCl + Al(OH)3 → AlCl3 + 3H2O",
    "out": [
      "AlCl3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_cuoh2",
    "need": [
      "H2SO4",
      "Cu(OH)2"
    ],
    "eq": "H2SO4 + Cu(OH)2 → CuSO4 + 2H2O",
    "out": [
      "CuSO4",
      "H2O"
    ],
    "col": "#278ce0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_feoh2",
    "need": [
      "H2SO4",
      "Fe(OH)2"
    ],
    "eq": "H2SO4 + Fe(OH)2 → FeSO4 + 2H2O",
    "out": [
      "FeSO4",
      "H2O"
    ],
    "col": "#a9c8a0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_feoh3",
    "need": [
      "H2SO4",
      "Fe(OH)3"
    ],
    "eq": "3H2SO4 + 2Fe(OH)3 → Fe2(SO4)3 + 6H2O",
    "out": [
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_znoh2",
    "need": [
      "H2SO4",
      "Zn(OH)2"
    ],
    "eq": "H2SO4 + Zn(OH)2 → ZnSO4 + 2H2O",
    "out": [
      "ZnSO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_aloh3",
    "need": [
      "H2SO4",
      "Al(OH)3"
    ],
    "eq": "3H2SO4 + 2Al(OH)3 → Al2(SO4)3 + 6H2O",
    "out": [
      "Al2(SO4)3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_cuoh2",
    "need": [
      "HNO3",
      "Cu(OH)2"
    ],
    "eq": "2HNO3 + Cu(OH)2 → Cu(NO3)2 + 2H2O",
    "out": [
      "Cu(NO3)2",
      "H2O"
    ],
    "col": "#278ce0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_znoh2",
    "need": [
      "HNO3",
      "Zn(OH)2"
    ],
    "eq": "2HNO3 + Zn(OH)2 → Zn(NO3)2 + 2H2O",
    "out": [
      "Zn(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_mgoh2",
    "need": [
      "HNO3",
      "Mg(OH)2"
    ],
    "eq": "2HNO3 + Mg(OH)2 → Mg(NO3)2 + 2H2O",
    "out": [
      "Mg(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_feoh2",
    "need": [
      "HNO3",
      "Fe(OH)2"
    ],
    "eq": "2HNO3 + Fe(OH)2 → Fe(NO3)2 + 2H2O",
    "out": [
      "Fe(NO3)2",
      "H2O"
    ],
    "col": "#b8d8a4",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_feoh3",
    "need": [
      "HNO3",
      "Fe(OH)3"
    ],
    "eq": "3HNO3 + Fe(OH)3 → Fe(NO3)3 + 3H2O",
    "out": [
      "Fe(NO3)3",
      "H2O"
    ],
    "col": "#d6a34a",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so3_naoh",
    "need": [
      "H2SO3",
      "NaOH"
    ],
    "eq": "H2SO3 + 2NaOH → Na2SO3 + 2H2O",
    "out": [
      "Na2SO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2co3_naoh",
    "need": [
      "H2CO3",
      "NaOH"
    ],
    "eq": "H2CO3 + 2NaOH → Na2CO3 + 2H2O",
    "out": [
      "Na2CO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hbr_naoh",
    "need": [
      "HBr",
      "NaOH"
    ],
    "eq": "HBr + NaOH → NaBr + H2O",
    "out": [
      "NaBr",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hbr_koh",
    "need": [
      "HBr",
      "KOH"
    ],
    "eq": "HBr + KOH → KBr + H2O",
    "out": [
      "KBr",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hclo3_koh",
    "need": [
      "HClO3",
      "KOH"
    ],
    "eq": "HClO3 + KOH → KClO3 + H2O",
    "out": [
      "KClO3",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1
  },
  {
    "id": "hcl_cooh2",
    "need": [
      "HCl",
      "Co(OH)2"
    ],
    "eq": "2HCl + Co(OH)2 → CoCl2 + 2H2O",
    "out": [
      "CoCl2",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_cr3oh",
    "need": [
      "HCl",
      "Cr(OH)3"
    ],
    "eq": "3HCl + Cr(OH)3 → CrCl3 + 3H2O",
    "out": [
      "CrCl3",
      "H2O"
    ],
    "col": "#8d6cb0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_nioh2",
    "need": [
      "HCl",
      "Ni(OH)2"
    ],
    "eq": "2HCl + Ni(OH)2 → NiCl2 + 2H2O",
    "out": [
      "NiCl2",
      "H2O"
    ],
    "col": "#e3e3e0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hcl_mnoh2",
    "need": [
      "HCl",
      "Mn(OH)2"
    ],
    "eq": "2HCl + Mn(OH)2 → MnCl2 + 2H2O",
    "out": [
      "MnCl2",
      "H2O"
    ],
    "col": "#d9b6b8",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_cooh2",
    "need": [
      "H2SO4",
      "Co(OH)2"
    ],
    "eq": "H2SO4 + Co(OH)2 → CoSO4 + 2H2O",
    "out": [
      "CoSO4",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_nioh2",
    "need": [
      "H2SO4",
      "Ni(OH)2"
    ],
    "eq": "H2SO4 + Ni(OH)2 → NiSO4 + 2H2O",
    "out": [
      "NiSO4",
      "H2O"
    ],
    "col": "#b9d4d0",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "h2so4_mnoh2",
    "need": [
      "H2SO4",
      "Mn(OH)2"
    ],
    "eq": "H2SO4 + Mn(OH)2 → MnSO4 + 2H2O",
    "out": [
      "MnSO4",
      "H2O"
    ],
    "col": "#f0eeee",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_cooh2",
    "need": [
      "HNO3",
      "Co(OH)2"
    ],
    "eq": "2HNO3 + Co(OH)2 → Co(NO3)2 + 2H2O",
    "out": [
      "Co(NO3)2",
      "H2O"
    ],
    "col": "#d8c6bb",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_nioh2",
    "need": [
      "HNO3",
      "Ni(OH)2"
    ],
    "eq": "2HNO3 + Ni(OH)2 → Ni(NO3)2 + 2H2O",
    "out": [
      "Ni(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "hno3_mnoh2",
    "need": [
      "HNO3",
      "Mn(OH)2"
    ],
    "eq": "2HNO3 + Mn(OH)2 → Mn(NO3)2 + 2H2O",
    "out": [
      "Mn(NO3)2",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 5,
    "bub": 0.1
  },
  {
    "id": "neutralization_hbr_lioh_152",
    "need": [
      "HBr",
      "LiOH"
    ],
    "eq": "HBr + LiOH → LiBr + H2O",
    "out": [
      "LiBr",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_hbr_153",
    "need": [
      "HBr",
      "Ca(OH)2"
    ],
    "eq": "2HBr + Ca(OH)2 → CaBr2 + 2H2O",
    "out": [
      "CaBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hbr_154",
    "need": [
      "HBr",
      "Ba(OH)2"
    ],
    "eq": "2HBr + Ba(OH)2 → BaBr2 + 2H2O",
    "out": [
      "BaBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hbr_mg_oh_2_155",
    "need": [
      "HBr",
      "Mg(OH)2"
    ],
    "eq": "2HBr + Mg(OH)2 → MgBr2 + 2H2O",
    "out": [
      "MgBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hbr_156",
    "need": [
      "HBr",
      "Al(OH)3"
    ],
    "eq": "3HBr + Al(OH)3 → AlBr3 + 3H2O",
    "out": [
      "AlBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_hbr_157",
    "need": [
      "HBr",
      "Fe(OH)2"
    ],
    "eq": "2HBr + Fe(OH)2 → FeBr2 + 2H2O",
    "out": [
      "FeBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_hbr_158",
    "need": [
      "HBr",
      "Fe(OH)3"
    ],
    "eq": "3HBr + Fe(OH)3 → FeBr3 + 3H2O",
    "out": [
      "FeBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_hbr_159",
    "need": [
      "HBr",
      "Cu(OH)2"
    ],
    "eq": "2HBr + Cu(OH)2 → CuBr2 + 2H2O",
    "out": [
      "CuBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hbr_zn_oh_2_160",
    "need": [
      "HBr",
      "Zn(OH)2"
    ],
    "eq": "2HBr + Zn(OH)2 → ZnBr2 + 2H2O",
    "out": [
      "ZnBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_hbr_161",
    "need": [
      "HBr",
      "Co(OH)2"
    ],
    "eq": "2HBr + Co(OH)2 → CoBr2 + 2H2O",
    "out": [
      "CoBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hbr_162",
    "need": [
      "HBr",
      "Cr(OH)3"
    ],
    "eq": "3HBr + Cr(OH)3 → CrBr3 + 3H2O",
    "out": [
      "CrBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hbr_ni_oh_2_163",
    "need": [
      "HBr",
      "Ni(OH)2"
    ],
    "eq": "2HBr + Ni(OH)2 → NiBr2 + 2H2O",
    "out": [
      "NiBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hbr_mn_oh_2_164",
    "need": [
      "HBr",
      "Mn(OH)2"
    ],
    "eq": "2HBr + Mn(OH)2 → MnBr2 + 2H2O",
    "out": [
      "MnBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_lioh_166",
    "need": [
      "HF",
      "LiOH"
    ],
    "eq": "HF + LiOH → LiF + H2O",
    "out": [
      "LiF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_naoh_167",
    "need": [
      "HF",
      "NaOH"
    ],
    "eq": "HF + NaOH → NaF + H2O",
    "out": [
      "NaF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_koh_168",
    "need": [
      "HF",
      "KOH"
    ],
    "eq": "HF + KOH → KF + H2O",
    "out": [
      "KF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hf_170",
    "need": [
      "HF",
      "Ba(OH)2"
    ],
    "eq": "2HF + Ba(OH)2 → BaF2 + 2H2O",
    "out": [
      "BaF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_hf_173",
    "need": [
      "HF",
      "Fe(OH)2"
    ],
    "eq": "2HF + Fe(OH)2 → FeF2 + 2H2O",
    "out": [
      "FeF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_hf_174",
    "need": [
      "HF",
      "Fe(OH)3"
    ],
    "eq": "3HF + Fe(OH)3 → FeF3 + 3H2O",
    "out": [
      "FeF3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_hf_175",
    "need": [
      "HF",
      "Cu(OH)2"
    ],
    "eq": "2HF + Cu(OH)2 → CuF2 + 2H2O",
    "out": [
      "CuF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_zn_oh_2_176",
    "need": [
      "HF",
      "Zn(OH)2"
    ],
    "eq": "2HF + Zn(OH)2 → ZnF2 + 2H2O",
    "out": [
      "ZnF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_hf_177",
    "need": [
      "HF",
      "Co(OH)2"
    ],
    "eq": "2HF + Co(OH)2 → CoF2 + 2H2O",
    "out": [
      "CoF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hf_178",
    "need": [
      "HF",
      "Cr(OH)3"
    ],
    "eq": "3HF + Cr(OH)3 → CrF3 + 3H2O",
    "out": [
      "CrF3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_ni_oh_2_179",
    "need": [
      "HF",
      "Ni(OH)2"
    ],
    "eq": "2HF + Ni(OH)2 → NiF2 + 2H2O",
    "out": [
      "NiF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hf_mn_oh_2_180",
    "need": [
      "HF",
      "Mn(OH)2"
    ],
    "eq": "2HF + Mn(OH)2 → MnF2 + 2H2O",
    "out": [
      "MnF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hno3_lioh_182",
    "need": [
      "HNO3",
      "LiOH"
    ],
    "eq": "HNO3 + LiOH → LiNO3 + H2O",
    "out": [
      "LiNO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hno3_183",
    "need": [
      "HNO3",
      "Ba(OH)2"
    ],
    "eq": "2HNO3 + Ba(OH)2 → Ba(NO3)2 + 2H2O",
    "out": [
      "Ba(NO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hno3_184",
    "need": [
      "HNO3",
      "Al(OH)3"
    ],
    "eq": "3HNO3 + Al(OH)3 → Al(NO3)3 + 3H2O",
    "out": [
      "Al(NO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hno3_185",
    "need": [
      "HNO3",
      "Cr(OH)3"
    ],
    "eq": "3HNO3 + Cr(OH)3 → Cr(NO3)3 + 3H2O",
    "out": [
      "Cr(NO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hno3_pb_oh_2_186",
    "need": [
      "HNO3",
      "Pb(OH)2"
    ],
    "eq": "2HNO3 + Pb(OH)2 → Pb(NO3)2 + 2H2O",
    "out": [
      "Pb(NO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so4_lioh_187",
    "need": [
      "H2SO4",
      "LiOH"
    ],
    "eq": "H2SO4 + 2LiOH → Li2SO4 + 2H2O",
    "out": [
      "Li2SO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so4_mg_oh_2_188",
    "need": [
      "H2SO4",
      "Mg(OH)2"
    ],
    "eq": "H2SO4 + Mg(OH)2 → MgSO4 + 2H2O",
    "out": [
      "MgSO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_h2so4_189",
    "need": [
      "H2SO4",
      "Cr(OH)3"
    ],
    "eq": "3H2SO4 + 2Cr(OH)3 → Cr2(SO4)3 + 6H2O",
    "out": [
      "Cr2(SO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_lioh_191",
    "need": [
      "H3PO4",
      "LiOH"
    ],
    "eq": "H3PO4 + 3LiOH → Li3PO4 + 3H2O",
    "out": [
      "Li3PO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h3po4_koh_192",
    "need": [
      "H3PO4",
      "KOH"
    ],
    "eq": "H3PO4 + 3KOH → K3PO4 + 3H2O",
    "out": [
      "K3PO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_lioh_221",
    "need": [
      "H2SO3",
      "LiOH"
    ],
    "eq": "H2SO3 + 2LiOH → Li2SO3 + 2H2O",
    "out": [
      "Li2SO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2so3_koh_222",
    "need": [
      "H2SO3",
      "KOH"
    ],
    "eq": "H2SO3 + 2KOH → K2SO3 + 2H2O",
    "out": [
      "K2SO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_lioh_233",
    "need": [
      "HClO",
      "LiOH"
    ],
    "eq": "HClO + LiOH → LiClO + H2O",
    "out": [
      "LiClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_naoh_234",
    "need": [
      "HClO",
      "NaOH"
    ],
    "eq": "HClO + NaOH → NaClO + H2O",
    "out": [
      "NaClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_koh_235",
    "need": [
      "HClO",
      "KOH"
    ],
    "eq": "HClO + KOH → KClO + H2O",
    "out": [
      "KClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_hclo_236",
    "need": [
      "HClO",
      "Ca(OH)2"
    ],
    "eq": "2HClO + Ca(OH)2 → Ca(ClO)2 + 2H2O",
    "out": [
      "Ca(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hclo_237",
    "need": [
      "HClO",
      "Ba(OH)2"
    ],
    "eq": "2HClO + Ba(OH)2 → Ba(ClO)2 + 2H2O",
    "out": [
      "Ba(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_mg_oh_2_238",
    "need": [
      "HClO",
      "Mg(OH)2"
    ],
    "eq": "2HClO + Mg(OH)2 → Mg(ClO)2 + 2H2O",
    "out": [
      "Mg(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hclo_239",
    "need": [
      "HClO",
      "Al(OH)3"
    ],
    "eq": "3HClO + Al(OH)3 → Al(ClO)3 + 3H2O",
    "out": [
      "Al(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_hclo_240",
    "need": [
      "HClO",
      "Fe(OH)2"
    ],
    "eq": "2HClO + Fe(OH)2 → Fe(ClO)2 + 2H2O",
    "out": [
      "Fe(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_hclo_241",
    "need": [
      "HClO",
      "Fe(OH)3"
    ],
    "eq": "3HClO + Fe(OH)3 → Fe(ClO)3 + 3H2O",
    "out": [
      "Fe(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_hclo_242",
    "need": [
      "HClO",
      "Cu(OH)2"
    ],
    "eq": "2HClO + Cu(OH)2 → Cu(ClO)2 + 2H2O",
    "out": [
      "Cu(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_zn_oh_2_243",
    "need": [
      "HClO",
      "Zn(OH)2"
    ],
    "eq": "2HClO + Zn(OH)2 → Zn(ClO)2 + 2H2O",
    "out": [
      "Zn(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_hclo_244",
    "need": [
      "HClO",
      "Co(OH)2"
    ],
    "eq": "2HClO + Co(OH)2 → Co(ClO)2 + 2H2O",
    "out": [
      "Co(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hclo_245",
    "need": [
      "HClO",
      "Cr(OH)3"
    ],
    "eq": "3HClO + Cr(OH)3 → Cr(ClO)3 + 3H2O",
    "out": [
      "Cr(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_ni_oh_2_246",
    "need": [
      "HClO",
      "Ni(OH)2"
    ],
    "eq": "2HClO + Ni(OH)2 → Ni(ClO)2 + 2H2O",
    "out": [
      "Ni(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_mn_oh_2_247",
    "need": [
      "HClO",
      "Mn(OH)2"
    ],
    "eq": "2HClO + Mn(OH)2 → Mn(ClO)2 + 2H2O",
    "out": [
      "Mn(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo_pb_oh_2_248",
    "need": [
      "HClO",
      "Pb(OH)2"
    ],
    "eq": "2HClO + Pb(OH)2 → Pb(ClO)2 + 2H2O",
    "out": [
      "Pb(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_lioh_249",
    "need": [
      "HClO3",
      "LiOH"
    ],
    "eq": "HClO3 + LiOH → LiClO3 + H2O",
    "out": [
      "LiClO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_naoh_250",
    "need": [
      "HClO3",
      "NaOH"
    ],
    "eq": "HClO3 + NaOH → NaClO3 + H2O",
    "out": [
      "NaClO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_hclo3_251",
    "need": [
      "HClO3",
      "Ca(OH)2"
    ],
    "eq": "2HClO3 + Ca(OH)2 → Ca(ClO3)2 + 2H2O",
    "out": [
      "Ca(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hclo3_252",
    "need": [
      "HClO3",
      "Ba(OH)2"
    ],
    "eq": "2HClO3 + Ba(OH)2 → Ba(ClO3)2 + 2H2O",
    "out": [
      "Ba(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_mg_oh_2_253",
    "need": [
      "HClO3",
      "Mg(OH)2"
    ],
    "eq": "2HClO3 + Mg(OH)2 → Mg(ClO3)2 + 2H2O",
    "out": [
      "Mg(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hclo3_254",
    "need": [
      "HClO3",
      "Al(OH)3"
    ],
    "eq": "3HClO3 + Al(OH)3 → Al(ClO3)3 + 3H2O",
    "out": [
      "Al(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_hclo3_255",
    "need": [
      "HClO3",
      "Fe(OH)2"
    ],
    "eq": "2HClO3 + Fe(OH)2 → Fe(ClO3)2 + 2H2O",
    "out": [
      "Fe(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_hclo3_256",
    "need": [
      "HClO3",
      "Fe(OH)3"
    ],
    "eq": "3HClO3 + Fe(OH)3 → Fe(ClO3)3 + 3H2O",
    "out": [
      "Fe(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_hclo3_257",
    "need": [
      "HClO3",
      "Cu(OH)2"
    ],
    "eq": "2HClO3 + Cu(OH)2 → Cu(ClO3)2 + 2H2O",
    "out": [
      "Cu(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_zn_oh_2_258",
    "need": [
      "HClO3",
      "Zn(OH)2"
    ],
    "eq": "2HClO3 + Zn(OH)2 → Zn(ClO3)2 + 2H2O",
    "out": [
      "Zn(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_hclo3_259",
    "need": [
      "HClO3",
      "Co(OH)2"
    ],
    "eq": "2HClO3 + Co(OH)2 → Co(ClO3)2 + 2H2O",
    "out": [
      "Co(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hclo3_260",
    "need": [
      "HClO3",
      "Cr(OH)3"
    ],
    "eq": "3HClO3 + Cr(OH)3 → Cr(ClO3)3 + 3H2O",
    "out": [
      "Cr(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_ni_oh_2_261",
    "need": [
      "HClO3",
      "Ni(OH)2"
    ],
    "eq": "2HClO3 + Ni(OH)2 → Ni(ClO3)2 + 2H2O",
    "out": [
      "Ni(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_mn_oh_2_262",
    "need": [
      "HClO3",
      "Mn(OH)2"
    ],
    "eq": "2HClO3 + Mn(OH)2 → Mn(ClO3)2 + 2H2O",
    "out": [
      "Mn(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo3_pb_oh_2_263",
    "need": [
      "HClO3",
      "Pb(OH)2"
    ],
    "eq": "2HClO3 + Pb(OH)2 → Pb(ClO3)2 + 2H2O",
    "out": [
      "Pb(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_lioh_264",
    "need": [
      "HClO4",
      "LiOH"
    ],
    "eq": "HClO4 + LiOH → LiClO4 + H2O",
    "out": [
      "LiClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_naoh_265",
    "need": [
      "HClO4",
      "NaOH"
    ],
    "eq": "HClO4 + NaOH → NaClO4 + H2O",
    "out": [
      "NaClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_koh_266",
    "need": [
      "HClO4",
      "KOH"
    ],
    "eq": "HClO4 + KOH → KClO4 + H2O",
    "out": [
      "KClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_hclo4_267",
    "need": [
      "HClO4",
      "Ca(OH)2"
    ],
    "eq": "2HClO4 + Ca(OH)2 → Ca(ClO4)2 + 2H2O",
    "out": [
      "Ca(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_hclo4_268",
    "need": [
      "HClO4",
      "Ba(OH)2"
    ],
    "eq": "2HClO4 + Ba(OH)2 → Ba(ClO4)2 + 2H2O",
    "out": [
      "Ba(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_mg_oh_2_269",
    "need": [
      "HClO4",
      "Mg(OH)2"
    ],
    "eq": "2HClO4 + Mg(OH)2 → Mg(ClO4)2 + 2H2O",
    "out": [
      "Mg(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_hclo4_270",
    "need": [
      "HClO4",
      "Al(OH)3"
    ],
    "eq": "3HClO4 + Al(OH)3 → Al(ClO4)3 + 3H2O",
    "out": [
      "Al(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_2_hclo4_271",
    "need": [
      "HClO4",
      "Fe(OH)2"
    ],
    "eq": "2HClO4 + Fe(OH)2 → Fe(ClO4)2 + 2H2O",
    "out": [
      "Fe(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_fe_oh_3_hclo4_272",
    "need": [
      "HClO4",
      "Fe(OH)3"
    ],
    "eq": "3HClO4 + Fe(OH)3 → Fe(ClO4)3 + 3H2O",
    "out": [
      "Fe(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cu_oh_2_hclo4_273",
    "need": [
      "HClO4",
      "Cu(OH)2"
    ],
    "eq": "2HClO4 + Cu(OH)2 → Cu(ClO4)2 + 2H2O",
    "out": [
      "Cu(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_zn_oh_2_274",
    "need": [
      "HClO4",
      "Zn(OH)2"
    ],
    "eq": "2HClO4 + Zn(OH)2 → Zn(ClO4)2 + 2H2O",
    "out": [
      "Zn(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_co_oh_2_hclo4_275",
    "need": [
      "HClO4",
      "Co(OH)2"
    ],
    "eq": "2HClO4 + Co(OH)2 → Co(ClO4)2 + 2H2O",
    "out": [
      "Co(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_cr_oh_3_hclo4_276",
    "need": [
      "HClO4",
      "Cr(OH)3"
    ],
    "eq": "3HClO4 + Cr(OH)3 → Cr(ClO4)3 + 3H2O",
    "out": [
      "Cr(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_ni_oh_2_277",
    "need": [
      "HClO4",
      "Ni(OH)2"
    ],
    "eq": "2HClO4 + Ni(OH)2 → Ni(ClO4)2 + 2H2O",
    "out": [
      "Ni(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_mn_oh_2_278",
    "need": [
      "HClO4",
      "Mn(OH)2"
    ],
    "eq": "2HClO4 + Mn(OH)2 → Mn(ClO4)2 + 2H2O",
    "out": [
      "Mn(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_hclo4_pb_oh_2_279",
    "need": [
      "HClO4",
      "Pb(OH)2"
    ],
    "eq": "2HClO4 + Pb(OH)2 → Pb(ClO4)2 + 2H2O",
    "out": [
      "Pb(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_lioh_280",
    "need": [
      "H2CO3",
      "LiOH"
    ],
    "eq": "H2CO3 + 2LiOH → Li2CO3 + 2H2O",
    "out": [
      "Li2CO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2co3_koh_281",
    "need": [
      "H2CO3",
      "KOH"
    ],
    "eq": "H2CO3 + 2KOH → K2CO3 + 2H2O",
    "out": [
      "K2CO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_lioh_291",
    "need": [
      "H2S",
      "LiOH"
    ],
    "eq": "H2S + 2LiOH → Li2S + 2H2O",
    "out": [
      "Li2S",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_naoh_292",
    "need": [
      "H2S",
      "NaOH"
    ],
    "eq": "H2S + 2NaOH → Na2S + 2H2O",
    "out": [
      "Na2S",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_koh_293",
    "need": [
      "H2S",
      "KOH"
    ],
    "eq": "H2S + 2KOH → K2S + 2H2O",
    "out": [
      "K2S",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ca_oh_2_h2s_294",
    "need": [
      "H2S",
      "Ca(OH)2"
    ],
    "eq": "H2S + Ca(OH)2 → CaS + 2H2O",
    "out": [
      "CaS",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_h2s_295",
    "need": [
      "H2S",
      "Ba(OH)2"
    ],
    "eq": "H2S + Ba(OH)2 → BaS + 2H2O",
    "out": [
      "BaS",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2s_mg_oh_2_296",
    "need": [
      "H2S",
      "Mg(OH)2"
    ],
    "eq": "H2S + Mg(OH)2 → MgS + 2H2O",
    "out": [
      "MgS",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_lioh_304",
    "need": [
      "H2SiO3",
      "LiOH"
    ],
    "eq": "H2SiO3 + 2LiOH → Li2SiO3 + 2H2O",
    "out": [
      "Li2SiO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_naoh_305",
    "need": [
      "H2SiO3",
      "NaOH"
    ],
    "eq": "H2SiO3 + 2NaOH → Na2SiO3 + 2H2O",
    "out": [
      "Na2SiO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_h2sio3_koh_306",
    "need": [
      "H2SiO3",
      "KOH"
    ],
    "eq": "H2SiO3 + 2KOH → K2SiO3 + 2H2O",
    "out": [
      "K2SiO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_hbr_320",
    "need": [
      "CaO",
      "HBr"
    ],
    "eq": "CaO + 2HBr → CaBr2 + H2O",
    "out": [
      "CaBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_hclo_324",
    "need": [
      "CaO",
      "HClO"
    ],
    "eq": "CaO + 2HClO → Ca(ClO)2 + H2O",
    "out": [
      "Ca(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_hclo3_325",
    "need": [
      "CaO",
      "HClO3"
    ],
    "eq": "CaO + 2HClO3 → Ca(ClO3)2 + H2O",
    "out": [
      "Ca(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cao_hclo4_326",
    "need": [
      "CaO",
      "HClO4"
    ],
    "eq": "CaO + 2HClO4 → Ca(ClO4)2 + H2O",
    "out": [
      "Ca(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hbr_mgo_327",
    "need": [
      "MgO",
      "HBr"
    ],
    "eq": "MgO + 2HBr → MgBr2 + H2O",
    "out": [
      "MgBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo_mgo_331",
    "need": [
      "MgO",
      "HClO"
    ],
    "eq": "MgO + 2HClO → Mg(ClO)2 + H2O",
    "out": [
      "Mg(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo3_mgo_332",
    "need": [
      "MgO",
      "HClO3"
    ],
    "eq": "MgO + 2HClO3 → Mg(ClO3)2 + H2O",
    "out": [
      "Mg(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo4_mgo_333",
    "need": [
      "MgO",
      "HClO4"
    ],
    "eq": "MgO + 2HClO4 → Mg(ClO4)2 + H2O",
    "out": [
      "Mg(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hbr_na2o_334",
    "need": [
      "Na2O",
      "HBr"
    ],
    "eq": "Na2O + 2HBr → 2NaBr + H2O",
    "out": [
      "NaBr",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hf_na2o_335",
    "need": [
      "Na2O",
      "HF"
    ],
    "eq": "Na2O + 2HF → 2NaF + H2O",
    "out": [
      "NaF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h2so4_na2o_336",
    "need": [
      "Na2O",
      "H2SO4"
    ],
    "eq": "Na2O + H2SO4 → Na2SO4 + H2O",
    "out": [
      "Na2SO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h3po4_na2o_337",
    "need": [
      "Na2O",
      "H3PO4"
    ],
    "eq": "3Na2O + 2H3PO4 → 2Na3PO4 + 3H2O",
    "out": [
      "Na3PO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo_na2o_339",
    "need": [
      "Na2O",
      "HClO"
    ],
    "eq": "Na2O + 2HClO → 2NaClO + H2O",
    "out": [
      "NaClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo3_na2o_340",
    "need": [
      "Na2O",
      "HClO3"
    ],
    "eq": "Na2O + 2HClO3 → 2NaClO3 + H2O",
    "out": [
      "NaClO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo4_na2o_341",
    "need": [
      "Na2O",
      "HClO4"
    ],
    "eq": "Na2O + 2HClO4 → 2NaClO4 + H2O",
    "out": [
      "NaClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hcl_k2o_342",
    "need": [
      "K2O",
      "HCl"
    ],
    "eq": "K2O + 2HCl → 2KCl + H2O",
    "out": [
      "KCl",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hbr_k2o_343",
    "need": [
      "K2O",
      "HBr"
    ],
    "eq": "K2O + 2HBr → 2KBr + H2O",
    "out": [
      "KBr",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hf_k2o_344",
    "need": [
      "K2O",
      "HF"
    ],
    "eq": "K2O + 2HF → 2KF + H2O",
    "out": [
      "KF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h2so4_k2o_345",
    "need": [
      "K2O",
      "H2SO4"
    ],
    "eq": "K2O + H2SO4 → K2SO4 + H2O",
    "out": [
      "K2SO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h3po4_k2o_346",
    "need": [
      "K2O",
      "H3PO4"
    ],
    "eq": "3K2O + 2H3PO4 → 2K3PO4 + 3H2O",
    "out": [
      "K3PO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo_k2o_348",
    "need": [
      "K2O",
      "HClO"
    ],
    "eq": "K2O + 2HClO → 2KClO + H2O",
    "out": [
      "KClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo3_k2o_349",
    "need": [
      "K2O",
      "HClO3"
    ],
    "eq": "K2O + 2HClO3 → 2KClO3 + H2O",
    "out": [
      "KClO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo4_k2o_350",
    "need": [
      "K2O",
      "HClO4"
    ],
    "eq": "K2O + 2HClO4 → 2KClO4 + H2O",
    "out": [
      "KClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_hbr_351",
    "need": [
      "CuO",
      "HBr"
    ],
    "eq": "CuO + 2HBr → CuBr2 + H2O",
    "out": [
      "CuBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_hf_352",
    "need": [
      "CuO",
      "HF"
    ],
    "eq": "CuO + 2HF → CuF2 + H2O",
    "out": [
      "CuF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_hclo_355",
    "need": [
      "CuO",
      "HClO"
    ],
    "eq": "CuO + 2HClO → Cu(ClO)2 + H2O",
    "out": [
      "Cu(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_hclo3_356",
    "need": [
      "CuO",
      "HClO3"
    ],
    "eq": "CuO + 2HClO3 → Cu(ClO3)2 + H2O",
    "out": [
      "Cu(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_cuo_hclo4_357",
    "need": [
      "CuO",
      "HClO4"
    ],
    "eq": "CuO + 2HClO4 → Cu(ClO4)2 + H2O",
    "out": [
      "Cu(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_hbr_358",
    "need": [
      "FeO",
      "HBr"
    ],
    "eq": "FeO + 2HBr → FeBr2 + H2O",
    "out": [
      "FeBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_hf_359",
    "need": [
      "FeO",
      "HF"
    ],
    "eq": "FeO + 2HF → FeF2 + H2O",
    "out": [
      "FeF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_h2so4_360",
    "need": [
      "FeO",
      "H2SO4"
    ],
    "eq": "FeO + H2SO4 → FeSO4 + H2O",
    "out": [
      "FeSO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_hclo_363",
    "need": [
      "FeO",
      "HClO"
    ],
    "eq": "FeO + 2HClO → Fe(ClO)2 + H2O",
    "out": [
      "Fe(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_hclo3_364",
    "need": [
      "FeO",
      "HClO3"
    ],
    "eq": "FeO + 2HClO3 → Fe(ClO3)2 + H2O",
    "out": [
      "Fe(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_feo_hclo4_365",
    "need": [
      "FeO",
      "HClO4"
    ],
    "eq": "FeO + 2HClO4 → Fe(ClO4)2 + H2O",
    "out": [
      "Fe(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_hbr_366",
    "need": [
      "Fe2O3",
      "HBr"
    ],
    "eq": "Fe2O3 + 6HBr → 2FeBr3 + 3H2O",
    "out": [
      "FeBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_hf_367",
    "need": [
      "Fe2O3",
      "HF"
    ],
    "eq": "Fe2O3 + 6HF → 2FeF3 + 3H2O",
    "out": [
      "FeF3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_hclo_370",
    "need": [
      "Fe2O3",
      "HClO"
    ],
    "eq": "Fe2O3 + 6HClO → 2Fe(ClO)3 + 3H2O",
    "out": [
      "Fe(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_hclo3_371",
    "need": [
      "Fe2O3",
      "HClO3"
    ],
    "eq": "Fe2O3 + 6HClO3 → 2Fe(ClO3)3 + 3H2O",
    "out": [
      "Fe(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_fe2o3_hclo4_372",
    "need": [
      "Fe2O3",
      "HClO4"
    ],
    "eq": "Fe2O3 + 6HClO4 → 2Fe(ClO4)3 + 3H2O",
    "out": [
      "Fe(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hbr_zno_373",
    "need": [
      "ZnO",
      "HBr"
    ],
    "eq": "ZnO + 2HBr → ZnBr2 + H2O",
    "out": [
      "ZnBr2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hf_zno_374",
    "need": [
      "ZnO",
      "HF"
    ],
    "eq": "ZnO + 2HF → ZnF2 + H2O",
    "out": [
      "ZnF2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_h2so4_zno_375",
    "need": [
      "ZnO",
      "H2SO4"
    ],
    "eq": "ZnO + H2SO4 → ZnSO4 + H2O",
    "out": [
      "ZnSO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo_zno_378",
    "need": [
      "ZnO",
      "HClO"
    ],
    "eq": "ZnO + 2HClO → Zn(ClO)2 + H2O",
    "out": [
      "Zn(ClO)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo3_zno_379",
    "need": [
      "ZnO",
      "HClO3"
    ],
    "eq": "ZnO + 2HClO3 → Zn(ClO3)2 + H2O",
    "out": [
      "Zn(ClO3)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_hclo4_zno_380",
    "need": [
      "ZnO",
      "HClO4"
    ],
    "eq": "ZnO + 2HClO4 → Zn(ClO4)2 + H2O",
    "out": [
      "Zn(ClO4)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_hbr_381",
    "need": [
      "Al2O3",
      "HBr"
    ],
    "eq": "Al2O3 + 6HBr → 2AlBr3 + 3H2O",
    "out": [
      "AlBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_h2so4_383",
    "need": [
      "Al2O3",
      "H2SO4"
    ],
    "eq": "Al2O3 + 3H2SO4 → Al2(SO4)3 + 3H2O",
    "out": [
      "Al2(SO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_hclo_386",
    "need": [
      "Al2O3",
      "HClO"
    ],
    "eq": "Al2O3 + 6HClO → 2Al(ClO)3 + 3H2O",
    "out": [
      "Al(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_hclo3_387",
    "need": [
      "Al2O3",
      "HClO3"
    ],
    "eq": "Al2O3 + 6HClO3 → 2Al(ClO3)3 + 3H2O",
    "out": [
      "Al(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_hclo4_388",
    "need": [
      "Al2O3",
      "HClO4"
    ],
    "eq": "Al2O3 + 6HClO4 → 2Al(ClO4)3 + 3H2O",
    "out": [
      "Al(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_hbr_389",
    "need": [
      "Ga2O3",
      "HBr"
    ],
    "eq": "Ga2O3 + 6HBr → 2GaBr3 + 3H2O",
    "out": [
      "GaBr3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_hf_390",
    "need": [
      "Ga2O3",
      "HF"
    ],
    "eq": "Ga2O3 + 6HF → 2GaF3 + 3H2O",
    "out": [
      "GaF3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_h2so4_391",
    "need": [
      "Ga2O3",
      "H2SO4"
    ],
    "eq": "Ga2O3 + 3H2SO4 → Ga2(SO4)3 + 3H2O",
    "out": [
      "Ga2(SO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_hclo_394",
    "need": [
      "Ga2O3",
      "HClO"
    ],
    "eq": "Ga2O3 + 6HClO → 2Ga(ClO)3 + 3H2O",
    "out": [
      "Ga(ClO)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_hclo3_395",
    "need": [
      "Ga2O3",
      "HClO3"
    ],
    "eq": "Ga2O3 + 6HClO3 → 2Ga(ClO3)3 + 3H2O",
    "out": [
      "Ga(ClO3)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ga2o3_hclo4_396",
    "need": [
      "Ga2O3",
      "HClO4"
    ],
    "eq": "Ga2O3 + 6HClO4 → 2Ga(ClO4)3 + 3H2O",
    "out": [
      "Ga(ClO4)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hf_399",
    "need": [
      "Ag2O",
      "HF"
    ],
    "eq": "Ag2O + 2HF → 2AgF + H2O",
    "out": [
      "AgF",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hclo_403",
    "need": [
      "Ag2O",
      "HClO"
    ],
    "eq": "Ag2O + 2HClO → 2AgClO + H2O",
    "out": [
      "AgClO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hclo3_404",
    "need": [
      "Ag2O",
      "HClO3"
    ],
    "eq": "Ag2O + 2HClO3 → 2AgClO3 + H2O",
    "out": [
      "AgClO3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_hclo4_405",
    "need": [
      "Ag2O",
      "HClO4"
    ],
    "eq": "Ag2O + 2HClO4 → 2AgClO4 + H2O",
    "out": [
      "AgClO4",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  }
]);

// Chemistry Lab 3D — metal-acid (55 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "fe_hcl",
    "need": [
      "Fe",
      "HCl"
    ],
    "eq": "Fe + 2HCl → FeCl2 + H2↑",
    "out": [
      "FeCl2",
      "H2"
    ],
    "col": "#b8d8a4",
    "dur": 8,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "zn_hcl",
    "need": [
      "Zn",
      "HCl"
    ],
    "eq": "Zn + 2HCl → ZnCl2 + H2↑",
    "out": [
      "ZnCl2",
      "H2"
    ],
    "col": "#ededed",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "mg_hcl",
    "need": [
      "Mg",
      "HCl"
    ],
    "eq": "Mg + 2HCl → MgCl2 + H2↑",
    "out": [
      "MgCl2",
      "H2"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 1.5,
    "gas": "H2"
  },
  {
    "id": "al_hcl",
    "need": [
      "Al",
      "HCl"
    ],
    "eq": "2Al + 6HCl → 2AlCl3 + 3H2↑",
    "out": [
      "AlCl3",
      "H2"
    ],
    "col": "#ededed",
    "dur": 8,
    "bub": 1.2,
    "gas": "H2"
  },
  {
    "id": "fe_h2so4",
    "need": [
      "Fe",
      "H2SO4"
    ],
    "eq": "Fe + H2SO4 → FeSO4 + H2↑",
    "out": [
      "FeSO4",
      "H2"
    ],
    "col": "#a9c8a0",
    "dur": 8,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "zn_h2so4",
    "need": [
      "Zn",
      "H2SO4"
    ],
    "eq": "Zn + H2SO4 → ZnSO4 + H2↑",
    "out": [
      "ZnSO4",
      "H2"
    ],
    "col": "#ededed",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "mg_h2so4",
    "need": [
      "Mg",
      "H2SO4"
    ],
    "eq": "Mg + H2SO4 → MgSO4 + H2↑",
    "out": [
      "MgSO4",
      "H2"
    ],
    "col": "#ededed",
    "dur": 5,
    "bub": 1.4,
    "gas": "H2"
  },
  {
    "id": "cu_h2so4_hot",
    "need": [
      "Cu",
      "H2SO4 (đặc)"
    ],
    "eq": "Cu + 2H2SO4 (đặc, nóng) → CuSO4 + SO2↑ + 2H2O",
    "out": [
      "CuSO4",
      "SO2",
      "H2O"
    ],
    "heat": 100,
    "heating": true,
    "col": "#287ac5",
    "dur": 10,
    "bub": 0.8,
    "gas": "SO2"
  },
  {
    "id": "fe_h2so4_hot",
    "need": [
      "Fe",
      "H2SO4 (đặc)"
    ],
    "eq": "2Fe + 6H2SO4 (đặc, nóng) → Fe2(SO4)3 + 3SO2↑ + 6H2O",
    "out": [
      "Fe2(SO4)3",
      "SO2",
      "H2O"
    ],
    "heat": 100,
    "heating": true,
    "col": "#7b1c20",
    "dur": 12,
    "bub": 0.8,
    "gas": "SO2"
  },
  {
    "id": "cu_hno3_conc",
    "need": [
      "Cu",
      "HNO3 (đặc)"
    ],
    "eq": "Cu + 4HNO3 (đặc) → Cu(NO3)2 + 2NO2↑ + 2H2O",
    "out": [
      "Cu(NO3)2",
      "NO2",
      "H2O"
    ],
    "col": "#8f4f2b",
    "dur": 10,
    "bub": 0.8,
    "gas": "NO2"
  },
  {
    "id": "ca_hcl",
    "need": [
      "Ca",
      "HCl"
    ],
    "eq": "Ca + 2HCl → CaCl2 + H2↑",
    "out": [
      "CaCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1.2,
    "gas": "H2"
  },
  {
    "id": "mn_hcl",
    "need": [
      "Mn",
      "HCl"
    ],
    "eq": "Mn + 2HCl → MnCl2 + H2↑",
    "out": [
      "MnCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "ni_hcl",
    "need": [
      "Ni",
      "HCl"
    ],
    "eq": "Ni + 2HCl → NiCl2 + H2↑",
    "out": [
      "NiCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.7,
    "gas": "H2"
  },
  {
    "id": "sn_hcl",
    "need": [
      "Sn",
      "HCl"
    ],
    "eq": "Sn + 2HCl → SnCl2 + H2↑",
    "out": [
      "SnCl2",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.6,
    "gas": "H2"
  },
  {
    "id": "al_h2so4",
    "need": [
      "Al",
      "H2SO4"
    ],
    "eq": "2Al + 3H2SO4 → Al2(SO4)3 + 3H2↑",
    "out": [
      "Al2(SO4)3",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 1.1,
    "gas": "H2"
  },
  {
    "id": "mn_h2so4",
    "need": [
      "Mn",
      "H2SO4"
    ],
    "eq": "Mn + H2SO4 → MnSO4 + H2↑",
    "out": [
      "MnSO4",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 7,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "ni_h2so4",
    "need": [
      "Ni",
      "H2SO4"
    ],
    "eq": "Ni + H2SO4 → NiSO4 + H2↑",
    "out": [
      "NiSO4",
      "H2"
    ],
    "col": "#dce7e4",
    "dur": 8,
    "bub": 0.7,
    "gas": "H2"
  },
  {
    "id": "sn_h2so4",
    "need": [
      "Sn",
      "H2SO4"
    ],
    "eq": "Sn + H2SO4 → SnSO4 + H2↑",
    "out": [
      "SnSO4",
      "H2"
    ],
    "col": "#e2e4e6",
    "dur": 8,
    "bub": 0.6,
    "gas": "H2"
  },
  {
    "id": "li_hcl",
    "need": [
      "Li",
      "HCl"
    ],
    "eq": "2Li + 2HCl → 2LiCl + H2↑",
    "out": [
      "LiCl",
      "H2"
    ],
    "col": "#e8e9e9",
    "dur": 6,
    "bub": 1,
    "gas": "H2"
  },
  {
    "id": "ga_hcl",
    "need": [
      "Ga",
      "HCl"
    ],
    "eq": "2Ga + 6HCl → 2GaCl3 + 3H2↑",
    "out": [
      "GaCl3",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "H2",
    "explain": "Gali phản ứng với axit clohiđric tạo gali clorua và hiđro."
  },
  {
    "id": "co_hcl",
    "need": [
      "Co",
      "HCl"
    ],
    "eq": "Co + 2HCl → CoCl2 + H2↑",
    "out": [
      "CoCl2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "cr_hcl",
    "need": [
      "Cr",
      "HCl"
    ],
    "eq": "Cr + 2HCl → CrCl2 + H2↑",
    "out": [
      "CrCl2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "ga_hbr",
    "need": [
      "Ga",
      "HBr"
    ],
    "eq": "2Ga + 6HBr → 2GaBr3 + 3H2↑",
    "out": [
      "GaBr3",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "H2"
  },
  {
    "id": "zn_hbr",
    "need": [
      "Zn",
      "HBr"
    ],
    "eq": "Zn + 2HBr → ZnBr2 + H2↑",
    "out": [
      "ZnBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "mg_hbr",
    "need": [
      "Mg",
      "HBr"
    ],
    "eq": "Mg + 2HBr → MgBr2 + H2↑",
    "out": [
      "MgBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "ca_hbr",
    "need": [
      "Ca",
      "HBr"
    ],
    "eq": "Ca + 2HBr → CaBr2 + H2↑",
    "out": [
      "CaBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "sn_hbr",
    "need": [
      "Sn",
      "HBr"
    ],
    "eq": "Sn + 2HBr → SnBr2 + H2↑",
    "out": [
      "SnBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "ni_hbr",
    "need": [
      "Ni",
      "HBr"
    ],
    "eq": "Ni + 2HBr → NiBr2 + H2↑",
    "out": [
      "NiBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "co_hbr",
    "need": [
      "Co",
      "HBr"
    ],
    "eq": "Co + 2HBr → CoBr2 + H2↑",
    "out": [
      "CoBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "fe_hbr",
    "need": [
      "Fe",
      "HBr"
    ],
    "eq": "Fe + 2HBr → FeBr2 + H2↑",
    "out": [
      "FeBr2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "H2"
  },
  {
    "id": "cu_hno3_dilute",
    "need": [
      "Cu",
      "HNO3"
    ],
    "eq": "3Cu + 8HNO3 → 3Cu(NO3)2 + 2NO↑ + 4H2O",
    "out": [
      "Cu(NO3)2",
      "NO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "NO",
    "explain": "Axit nitric loãng là axit oxi hóa; phản ứng tạo NO thay vì H2."
  },
  {
    "id": "ag_hno3_dilute",
    "need": [
      "Ag",
      "HNO3"
    ],
    "eq": "3Ag + 4HNO3 → 3AgNO3 + NO↑ + 2H2O",
    "out": [
      "AgNO3",
      "NO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "gas": "NO"
  },
  {
    "id": "ag_hno3_conc",
    "need": [
      "Ag",
      "HNO3 (đặc)"
    ],
    "eq": "Ag + 2HNO3 (đặc) → AgNO3 + NO2↑ + H2O",
    "out": [
      "AgNO3",
      "NO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.6,
    "gas": "NO2"
  },
  {
    "id": "ag_h2so4_conc",
    "need": [
      "Ag",
      "H2SO4 (đặc)"
    ],
    "eq": "2Ag + 2H2SO4 (đặc, nóng) → Ag2SO4 + SO2↑ + 2H2O",
    "out": [
      "Ag2SO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.5,
    "heat": 100,
    "heating": true,
    "gas": "SO2"
  },
  {
    "id": "metal_acid_hbr_li_523",
    "need": [
      "Li",
      "HBr"
    ],
    "eq": "2Li + 2HBr → 2LiBr + H2",
    "out": [
      "LiBr",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hf_li_524",
    "need": [
      "Li",
      "HF"
    ],
    "eq": "2Li + 2HF → 2LiF + H2",
    "out": [
      "LiF",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h2so4_li_525",
    "need": [
      "Li",
      "H2SO4"
    ],
    "eq": "2Li + H2SO4 → Li2SO4 + H2",
    "out": [
      "Li2SO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_li_526",
    "need": [
      "Li",
      "H3PO4"
    ],
    "eq": "6Li + 2H3PO4 → 2Li3PO4 + 3H2",
    "out": [
      "Li3PO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hcl_na_528",
    "need": [
      "Na",
      "HCl"
    ],
    "eq": "2Na + 2HCl → 2NaCl + H2",
    "out": [
      "NaCl",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hbr_na_529",
    "need": [
      "Na",
      "HBr"
    ],
    "eq": "2Na + 2HBr → 2NaBr + H2",
    "out": [
      "NaBr",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hf_na_530",
    "need": [
      "Na",
      "HF"
    ],
    "eq": "2Na + 2HF → 2NaF + H2",
    "out": [
      "NaF",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h2so4_na_531",
    "need": [
      "Na",
      "H2SO4"
    ],
    "eq": "2Na + H2SO4 → Na2SO4 + H2",
    "out": [
      "Na2SO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_na_532",
    "need": [
      "Na",
      "H3PO4"
    ],
    "eq": "6Na + 2H3PO4 → 2Na3PO4 + 3H2",
    "out": [
      "Na3PO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hcl_k_534",
    "need": [
      "K",
      "HCl"
    ],
    "eq": "2K + 2HCl → 2KCl + H2",
    "out": [
      "KCl",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hbr_k_535",
    "need": [
      "K",
      "HBr"
    ],
    "eq": "2K + 2HBr → 2KBr + H2",
    "out": [
      "KBr",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hf_k_536",
    "need": [
      "K",
      "HF"
    ],
    "eq": "2K + 2HF → 2KF + H2",
    "out": [
      "KF",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h2so4_k_537",
    "need": [
      "K",
      "H2SO4"
    ],
    "eq": "2K + H2SO4 → K2SO4 + H2",
    "out": [
      "K2SO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_h3po4_k_538",
    "need": [
      "K",
      "H3PO4"
    ],
    "eq": "6K + 2H3PO4 → 2K3PO4 + 3H2",
    "out": [
      "K3PO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_al_hbr_542",
    "need": [
      "Al",
      "HBr"
    ],
    "eq": "2Al + 6HBr → 2AlBr3 + 3H2",
    "out": [
      "AlBr3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_hbr_mn_546",
    "need": [
      "Mn",
      "HBr"
    ],
    "eq": "Mn + 2HBr → MnBr2 + H2",
    "out": [
      "MnBr2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_cr_hbr_549",
    "need": [
      "Cr",
      "HBr"
    ],
    "eq": "Cr + 2HBr → CrBr2 + H2",
    "out": [
      "CrBr2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_cr_h2so4_550",
    "need": [
      "Cr",
      "H2SO4"
    ],
    "eq": "Cr + H2SO4 → CrSO4 + H2",
    "out": [
      "CrSO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_co_h2so4_554",
    "need": [
      "Co",
      "H2SO4"
    ],
    "eq": "Co + H2SO4 → CoSO4 + H2",
    "out": [
      "CoSO4",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ga_hf_565",
    "need": [
      "Ga",
      "HF"
    ],
    "eq": "2Ga + 6HF → 2GaF3 + 3H2",
    "out": [
      "GaF3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ga_h2so4_566",
    "need": [
      "Ga",
      "H2SO4"
    ],
    "eq": "2Ga + 3H2SO4 → Ga2(SO4)3 + 3H2",
    "out": [
      "Ga2(SO4)3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  }
]);

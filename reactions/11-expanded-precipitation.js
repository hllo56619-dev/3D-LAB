// Chemistry Lab 3D — additional precipitation/double-displacement coverage.
// Generated from soluble salts present in the inventory using standard solubility rules.
// This is a school-level prediction model; actual solubility depends on concentration and conditions.
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "pptx_nacl_pb_c2h3o2_2",
    "need": [
      "NaCl",
      "Pb(C2H3O2)2"
    ],
    "eq": "2NaCl + Pb(C2H3O2)2 → 2CH3COONa + PbCl2↓",
    "out": [
      "CH3COONa",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nacl",
    "need": [
      "NaCl",
      "AgF"
    ],
    "eq": "NaCl + AgF → NaF + AgCl↓",
    "out": [
      "NaF",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nacl",
    "need": [
      "NaCl",
      "AgC2H3O2"
    ],
    "eq": "NaCl + AgC2H3O2 → CH3COONa + AgCl↓",
    "out": [
      "CH3COONa",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kcl_pb_c2h3o2_2",
    "need": [
      "KCl",
      "Pb(C2H3O2)2"
    ],
    "eq": "2KCl + Pb(C2H3O2)2 → 2CH3COOK + PbCl2↓",
    "out": [
      "CH3COOK",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_kcl",
    "need": [
      "KCl",
      "AgF"
    ],
    "eq": "KCl + AgF → KF + AgCl↓",
    "out": [
      "KF",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_kcl",
    "need": [
      "KCl",
      "AgC2H3O2"
    ],
    "eq": "KCl + AgC2H3O2 → CH3COOK + AgCl↓",
    "out": [
      "CH3COOK",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_licl_na2co3",
    "need": [
      "LiCl",
      "Na2CO3"
    ],
    "eq": "2LiCl + Na2CO3 → Li2CO3↓ + 2NaCl",
    "out": [
      "Li2CO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_licl",
    "need": [
      "LiCl",
      "AgNO3"
    ],
    "eq": "LiCl + AgNO3 → LiNO3 + AgCl↓",
    "out": [
      "LiNO3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_licl_pb_no3_2",
    "need": [
      "LiCl",
      "Pb(NO3)2"
    ],
    "eq": "2LiCl + Pb(NO3)2 → 2LiNO3 + PbCl2↓",
    "out": [
      "LiNO3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_licl",
    "need": [
      "LiCl",
      "K2CO3"
    ],
    "eq": "2LiCl + K2CO3 → Li2CO3↓ + 2KCl",
    "out": [
      "Li2CO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_licl_pb_c2h3o2_2",
    "need": [
      "LiCl",
      "Pb(C2H3O2)2"
    ],
    "eq": "2LiCl + Pb(C2H3O2)2 → 2LiC2H3O2 + PbCl2↓",
    "out": [
      "LiC2H3O2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_licl",
    "need": [
      "LiCl",
      "AgF"
    ],
    "eq": "LiCl + AgF → LiF + AgCl↓",
    "out": [
      "LiF",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_licl",
    "need": [
      "LiCl",
      "AgC2H3O2"
    ],
    "eq": "LiCl + AgC2H3O2 → LiC2H3O2 + AgCl↓",
    "out": [
      "LiC2H3O2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_na2co3",
    "need": [
      "CuCl2",
      "Na2CO3"
    ],
    "eq": "CuCl2 + Na2CO3 → CuCO3↓ + 2NaCl",
    "out": [
      "CuCO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_na2so3",
    "need": [
      "CuCl2",
      "Na2SO3"
    ],
    "eq": "CuCl2 + Na2SO3 → CuSO3↓ + 2NaCl",
    "out": [
      "CuSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_pb_no3_2",
    "need": [
      "CuCl2",
      "Pb(NO3)2"
    ],
    "eq": "CuCl2 + Pb(NO3)2 → Cu(NO3)2 + PbCl2↓",
    "out": [
      "Cu(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_na3po4",
    "need": [
      "CuCl2",
      "Na3PO4"
    ],
    "eq": "3CuCl2 + 2Na3PO4 → Cu3(PO4)2↓ + 6NaCl",
    "out": [
      "Cu3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_k2co3",
    "need": [
      "CuCl2",
      "K2CO3"
    ],
    "eq": "CuCl2 + K2CO3 → CuCO3↓ + 2KCl",
    "out": [
      "CuCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cucl2",
    "need": [
      "CuCl2",
      "CaS"
    ],
    "eq": "CuCl2 + CaS → CuS↓ + CaCl2",
    "out": [
      "CuS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_li3po4",
    "need": [
      "CuCl2",
      "Li3PO4"
    ],
    "eq": "3CuCl2 + 2Li3PO4 → Cu3(PO4)2↓ + 6LiCl",
    "out": [
      "Cu3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_k3po4",
    "need": [
      "CuCl2",
      "K3PO4"
    ],
    "eq": "3CuCl2 + 2K3PO4 → Cu3(PO4)2↓ + 6KCl",
    "out": [
      "Cu3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_pb_c2h3o2_2",
    "need": [
      "CuCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CuCl2 + Pb(C2H3O2)2 → Cu(C2H3O2)2 + PbCl2↓",
    "out": [
      "Cu(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_li2so3",
    "need": [
      "CuCl2",
      "Li2SO3"
    ],
    "eq": "CuCl2 + Li2SO3 → CuSO3↓ + 2LiCl",
    "out": [
      "CuSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_k2so3",
    "need": [
      "CuCl2",
      "K2SO3"
    ],
    "eq": "CuCl2 + K2SO3 → CuSO3↓ + 2KCl",
    "out": [
      "CuSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_li2s",
    "need": [
      "CuCl2",
      "Li2S"
    ],
    "eq": "CuCl2 + Li2S → CuS↓ + 2LiCl",
    "out": [
      "CuS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_k2s",
    "need": [
      "CuCl2",
      "K2S"
    ],
    "eq": "CuCl2 + K2S → CuS↓ + 2KCl",
    "out": [
      "CuS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cucl2",
    "need": [
      "CuCl2",
      "BaS"
    ],
    "eq": "CuCl2 + BaS → CuS↓ + BaCl2",
    "out": [
      "CuS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_li2sio3",
    "need": [
      "CuCl2",
      "Li2SiO3"
    ],
    "eq": "CuCl2 + Li2SiO3 → CuSiO3↓ + 2LiCl",
    "out": [
      "CuSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_na2sio3",
    "need": [
      "CuCl2",
      "Na2SiO3"
    ],
    "eq": "CuCl2 + Na2SiO3 → CuSiO3↓ + 2NaCl",
    "out": [
      "CuSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cucl2_k2sio3",
    "need": [
      "CuCl2",
      "K2SiO3"
    ],
    "eq": "CuCl2 + K2SiO3 → CuSiO3↓ + 2KCl",
    "out": [
      "CuSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cucl2",
    "need": [
      "CuCl2",
      "AgF"
    ],
    "eq": "CuCl2 + 2AgF → CuF2 + 2AgCl↓",
    "out": [
      "CuF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cucl2",
    "need": [
      "CuCl2",
      "AgC2H3O2"
    ],
    "eq": "CuCl2 + 2AgC2H3O2 → Cu(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Cu(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_na2so3",
    "need": [
      "MgCl2",
      "Na2SO3"
    ],
    "eq": "MgCl2 + Na2SO3 → MgSO3↓ + 2NaCl",
    "out": [
      "MgSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_na2s",
    "need": [
      "MgCl2",
      "Na2S"
    ],
    "eq": "MgCl2 + Na2S → MgS↓ + 2NaCl",
    "out": [
      "MgS",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_mgcl2",
    "need": [
      "MgCl2",
      "AgNO3"
    ],
    "eq": "MgCl2 + 2AgNO3 → Mg(NO3)2 + 2AgCl↓",
    "out": [
      "Mg(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_pb_no3_2",
    "need": [
      "MgCl2",
      "Pb(NO3)2"
    ],
    "eq": "MgCl2 + Pb(NO3)2 → Mg(NO3)2 + PbCl2↓",
    "out": [
      "Mg(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_na3po4",
    "need": [
      "MgCl2",
      "Na3PO4"
    ],
    "eq": "3MgCl2 + 2Na3PO4 → Mg3(PO4)2↓ + 6NaCl",
    "out": [
      "Mg3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mgcl2",
    "need": [
      "MgCl2",
      "K2CO3"
    ],
    "eq": "MgCl2 + K2CO3 → MgCO3↓ + 2KCl",
    "out": [
      "MgCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mgcl2",
    "need": [
      "MgCl2",
      "CaS"
    ],
    "eq": "MgCl2 + CaS → MgS↓ + CaCl2",
    "out": [
      "MgS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_mgcl2",
    "need": [
      "MgCl2",
      "LiF"
    ],
    "eq": "MgCl2 + 2LiF → MgF2↓ + 2LiCl",
    "out": [
      "MgF2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_naf",
    "need": [
      "MgCl2",
      "NaF"
    ],
    "eq": "MgCl2 + 2NaF → MgF2↓ + 2NaCl",
    "out": [
      "MgF2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_mgcl2",
    "need": [
      "MgCl2",
      "KF"
    ],
    "eq": "MgCl2 + 2KF → MgF2↓ + 2KCl",
    "out": [
      "MgF2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_mgcl2",
    "need": [
      "MgCl2",
      "FeF2"
    ],
    "eq": "MgCl2 + FeF2 → MgF2↓ + FeCl2",
    "out": [
      "MgF2",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_mgcl2",
    "need": [
      "MgCl2",
      "CuF2"
    ],
    "eq": "MgCl2 + CuF2 → MgF2↓ + CuCl2",
    "out": [
      "MgF2",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_mgcl2",
    "need": [
      "MgCl2",
      "CoF2"
    ],
    "eq": "MgCl2 + CoF2 → MgF2↓ + CoCl2",
    "out": [
      "MgF2",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_mgcl2",
    "need": [
      "MgCl2",
      "CrF3"
    ],
    "eq": "3MgCl2 + 2CrF3 → 3MgF2↓ + 2CrCl3",
    "out": [
      "MgF2",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_nif2",
    "need": [
      "MgCl2",
      "NiF2"
    ],
    "eq": "MgCl2 + NiF2 → MgF2↓ + NiCl2",
    "out": [
      "MgF2",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_mnf2",
    "need": [
      "MgCl2",
      "MnF2"
    ],
    "eq": "MgCl2 + MnF2 → MgF2↓ + MnCl2",
    "out": [
      "MgF2",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mgcl2",
    "need": [
      "MgCl2",
      "Li3PO4"
    ],
    "eq": "3MgCl2 + 2Li3PO4 → Mg3(PO4)2↓ + 6LiCl",
    "out": [
      "Mg3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mgcl2",
    "need": [
      "MgCl2",
      "K3PO4"
    ],
    "eq": "3MgCl2 + 2K3PO4 → Mg3(PO4)2↓ + 6KCl",
    "out": [
      "Mg3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_pb_c2h3o2_2",
    "need": [
      "MgCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "MgCl2 + Pb(C2H3O2)2 → Mg(C2H3O2)2 + PbCl2↓",
    "out": [
      "Mg(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mgcl2",
    "need": [
      "MgCl2",
      "Li2SO3"
    ],
    "eq": "MgCl2 + Li2SO3 → MgSO3↓ + 2LiCl",
    "out": [
      "MgSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mgcl2",
    "need": [
      "MgCl2",
      "K2SO3"
    ],
    "eq": "MgCl2 + K2SO3 → MgSO3↓ + 2KCl",
    "out": [
      "MgSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mgcl2",
    "need": [
      "MgCl2",
      "Li2S"
    ],
    "eq": "MgCl2 + Li2S → MgS↓ + 2LiCl",
    "out": [
      "MgS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mgcl2",
    "need": [
      "MgCl2",
      "K2S"
    ],
    "eq": "MgCl2 + K2S → MgS↓ + 2KCl",
    "out": [
      "MgS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mgcl2",
    "need": [
      "MgCl2",
      "BaS"
    ],
    "eq": "MgCl2 + BaS → MgS↓ + BaCl2",
    "out": [
      "MgS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mgcl2",
    "need": [
      "MgCl2",
      "Li2SiO3"
    ],
    "eq": "MgCl2 + Li2SiO3 → MgSiO3↓ + 2LiCl",
    "out": [
      "MgSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_na2sio3",
    "need": [
      "MgCl2",
      "Na2SiO3"
    ],
    "eq": "MgCl2 + Na2SiO3 → MgSiO3↓ + 2NaCl",
    "out": [
      "MgSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mgcl2",
    "need": [
      "MgCl2",
      "K2SiO3"
    ],
    "eq": "MgCl2 + K2SiO3 → MgSiO3↓ + 2KCl",
    "out": [
      "MgSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_mgcl2",
    "need": [
      "MgCl2",
      "GaF3"
    ],
    "eq": "3MgCl2 + 2GaF3 → 3MgF2↓ + 2GaCl3",
    "out": [
      "MgF2",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mgcl2",
    "need": [
      "MgCl2",
      "AgF"
    ],
    "eq": "MgCl2 + 2AgF → MgF2↓ + 2AgCl↓",
    "out": [
      "MgF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mgcl2",
    "need": [
      "MgCl2",
      "AgC2H3O2"
    ],
    "eq": "MgCl2 + 2AgC2H3O2 → Mg(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Mg(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgcl2_znf2",
    "need": [
      "MgCl2",
      "ZnF2"
    ],
    "eq": "MgCl2 + ZnF2 → MgF2↓ + ZnCl2",
    "out": [
      "MgF2",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k2so4",
    "need": [
      "CaCl2",
      "K2SO4"
    ],
    "eq": "CaCl2 + K2SO4 → CaSO4↓ + 2KCl",
    "out": [
      "CaSO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_cuso4",
    "need": [
      "CaCl2",
      "CuSO4"
    ],
    "eq": "CaCl2 + CuSO4 → CaSO4↓ + CuCl2",
    "out": [
      "CaSO4",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_feso4",
    "need": [
      "CaCl2",
      "FeSO4"
    ],
    "eq": "CaCl2 + FeSO4 → CaSO4↓ + FeCl2",
    "out": [
      "CaSO4",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_fe2_so4_3",
    "need": [
      "CaCl2",
      "Fe2(SO4)3"
    ],
    "eq": "3CaCl2 + Fe2(SO4)3 → 3CaSO4↓ + 2FeCl3",
    "out": [
      "CaSO4",
      "FeCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_znso4",
    "need": [
      "CaCl2",
      "ZnSO4"
    ],
    "eq": "CaCl2 + ZnSO4 → CaSO4↓ + ZnCl2",
    "out": [
      "CaSO4",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_mgso4",
    "need": [
      "CaCl2",
      "MgSO4"
    ],
    "eq": "CaCl2 + MgSO4 → CaSO4↓ + MgCl2",
    "out": [
      "CaSO4",
      "MgCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_na2so3",
    "need": [
      "CaCl2",
      "Na2SO3"
    ],
    "eq": "CaCl2 + Na2SO3 → CaSO3↓ + 2NaCl",
    "out": [
      "CaSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_cacl2",
    "need": [
      "CaCl2",
      "AgNO3"
    ],
    "eq": "CaCl2 + 2AgNO3 → Ca(NO3)2 + 2AgCl↓",
    "out": [
      "Ca(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_pb_no3_2",
    "need": [
      "CaCl2",
      "Pb(NO3)2"
    ],
    "eq": "CaCl2 + Pb(NO3)2 → Ca(NO3)2 + PbCl2↓",
    "out": [
      "Ca(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k2cro4",
    "need": [
      "CaCl2",
      "K2CrO4"
    ],
    "eq": "CaCl2 + K2CrO4 → CaCrO4↓ + 2KCl",
    "out": [
      "CaCrO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_cacl2",
    "need": [
      "CaCl2",
      "(NH4)2SO4"
    ],
    "eq": "CaCl2 + (NH4)2SO4 → CaSO4↓ + 2NH4Cl",
    "out": [
      "CaSO4",
      "NH4Cl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_niso4",
    "need": [
      "CaCl2",
      "NiSO4"
    ],
    "eq": "CaCl2 + NiSO4 → CaSO4↓ + NiCl2",
    "out": [
      "CaSO4",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_mnso4",
    "need": [
      "CaCl2",
      "MnSO4"
    ],
    "eq": "CaCl2 + MnSO4 → CaSO4↓ + MnCl2",
    "out": [
      "CaSO4",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_snso4",
    "need": [
      "CaCl2",
      "SnSO4"
    ],
    "eq": "CaCl2 + SnSO4 → CaSO4↓ + SnCl2",
    "out": [
      "CaSO4",
      "SnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_cacl2",
    "need": [
      "CaCl2",
      "Al2(SO4)3"
    ],
    "eq": "3CaCl2 + Al2(SO4)3 → 3CaSO4↓ + 2AlCl3",
    "out": [
      "CaSO4",
      "AlCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k2co3",
    "need": [
      "CaCl2",
      "K2CO3"
    ],
    "eq": "CaCl2 + K2CO3 → CaCO3↓ + 2KCl",
    "out": [
      "CaCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_coso4",
    "need": [
      "CaCl2",
      "CoSO4"
    ],
    "eq": "CaCl2 + CoSO4 → CaSO4↓ + CoCl2",
    "out": [
      "CaSO4",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_cr2_so4_3",
    "need": [
      "CaCl2",
      "Cr2(SO4)3"
    ],
    "eq": "3CaCl2 + Cr2(SO4)3 → 3CaSO4↓ + 2CrCl3",
    "out": [
      "CaSO4",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_lif",
    "need": [
      "CaCl2",
      "LiF"
    ],
    "eq": "CaCl2 + 2LiF → CaF2↓ + 2LiCl",
    "out": [
      "CaF2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_naf",
    "need": [
      "CaCl2",
      "NaF"
    ],
    "eq": "CaCl2 + 2NaF → CaF2↓ + 2NaCl",
    "out": [
      "CaF2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_kf",
    "need": [
      "CaCl2",
      "KF"
    ],
    "eq": "CaCl2 + 2KF → CaF2↓ + 2KCl",
    "out": [
      "CaF2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_fef2",
    "need": [
      "CaCl2",
      "FeF2"
    ],
    "eq": "CaCl2 + FeF2 → CaF2↓ + FeCl2",
    "out": [
      "CaF2",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_cuf2",
    "need": [
      "CaCl2",
      "CuF2"
    ],
    "eq": "CaCl2 + CuF2 → CaF2↓ + CuCl2",
    "out": [
      "CaF2",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_cof2",
    "need": [
      "CaCl2",
      "CoF2"
    ],
    "eq": "CaCl2 + CoF2 → CaF2↓ + CoCl2",
    "out": [
      "CaF2",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_crf3",
    "need": [
      "CaCl2",
      "CrF3"
    ],
    "eq": "3CaCl2 + 2CrF3 → 3CaF2↓ + 2CrCl3",
    "out": [
      "CaF2",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_nif2",
    "need": [
      "CaCl2",
      "NiF2"
    ],
    "eq": "CaCl2 + NiF2 → CaF2↓ + NiCl2",
    "out": [
      "CaF2",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_mnf2",
    "need": [
      "CaCl2",
      "MnF2"
    ],
    "eq": "CaCl2 + MnF2 → CaF2↓ + MnCl2",
    "out": [
      "CaF2",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_li2so4",
    "need": [
      "CaCl2",
      "Li2SO4"
    ],
    "eq": "CaCl2 + Li2SO4 → CaSO4↓ + 2LiCl",
    "out": [
      "CaSO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_li3po4",
    "need": [
      "CaCl2",
      "Li3PO4"
    ],
    "eq": "3CaCl2 + 2Li3PO4 → Ca3(PO4)2↓ + 6LiCl",
    "out": [
      "Ca3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k3po4",
    "need": [
      "CaCl2",
      "K3PO4"
    ],
    "eq": "3CaCl2 + 2K3PO4 → Ca3(PO4)2↓ + 6KCl",
    "out": [
      "Ca3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_pb_c2h3o2_2",
    "need": [
      "CaCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CaCl2 + Pb(C2H3O2)2 → Ca(C2H3O2)2 + PbCl2↓",
    "out": [
      "Ca(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_li2so3",
    "need": [
      "CaCl2",
      "Li2SO3"
    ],
    "eq": "CaCl2 + Li2SO3 → CaSO3↓ + 2LiCl",
    "out": [
      "CaSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k2so3",
    "need": [
      "CaCl2",
      "K2SO3"
    ],
    "eq": "CaCl2 + K2SO3 → CaSO3↓ + 2KCl",
    "out": [
      "CaSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_li2sio3",
    "need": [
      "CaCl2",
      "Li2SiO3"
    ],
    "eq": "CaCl2 + Li2SiO3 → CaSiO3↓ + 2LiCl",
    "out": [
      "CaSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_na2sio3",
    "need": [
      "CaCl2",
      "Na2SiO3"
    ],
    "eq": "CaCl2 + Na2SiO3 → CaSiO3↓ + 2NaCl",
    "out": [
      "CaSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_k2sio3",
    "need": [
      "CaCl2",
      "K2SiO3"
    ],
    "eq": "CaCl2 + K2SiO3 → CaSiO3↓ + 2KCl",
    "out": [
      "CaSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_gaf3",
    "need": [
      "CaCl2",
      "GaF3"
    ],
    "eq": "3CaCl2 + 2GaF3 → 3CaF2↓ + 2GaCl3",
    "out": [
      "CaF2",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_ga2_so4_3",
    "need": [
      "CaCl2",
      "Ga2(SO4)3"
    ],
    "eq": "3CaCl2 + Ga2(SO4)3 → 3CaSO4↓ + 2GaCl3",
    "out": [
      "CaSO4",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cacl2",
    "need": [
      "CaCl2",
      "AgF"
    ],
    "eq": "CaCl2 + 2AgF → CaF2↓ + 2AgCl↓",
    "out": [
      "CaF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cacl2",
    "need": [
      "CaCl2",
      "AgC2H3O2"
    ],
    "eq": "CaCl2 + 2AgC2H3O2 → Ca(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Ca(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_crso4",
    "need": [
      "CaCl2",
      "CrSO4"
    ],
    "eq": "CaCl2 + CrSO4 → CaSO4↓ + CrCl2",
    "out": [
      "CaSO4",
      "CrCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cacl2_znf2",
    "need": [
      "CaCl2",
      "ZnF2"
    ],
    "eq": "CaCl2 + ZnF2 → CaF2↓ + ZnCl2",
    "out": [
      "CaF2",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_bacl2",
    "need": [
      "BaCl2",
      "(NH4)2SO4"
    ],
    "eq": "BaCl2 + (NH4)2SO4 → BaSO4↓ + 2NH4Cl",
    "out": [
      "BaSO4",
      "NH4Cl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_lif",
    "need": [
      "BaCl2",
      "LiF"
    ],
    "eq": "BaCl2 + 2LiF → BaF2↓ + 2LiCl",
    "out": [
      "BaF2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_naf",
    "need": [
      "BaCl2",
      "NaF"
    ],
    "eq": "BaCl2 + 2NaF → BaF2↓ + 2NaCl",
    "out": [
      "BaF2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_kf",
    "need": [
      "BaCl2",
      "KF"
    ],
    "eq": "BaCl2 + 2KF → BaF2↓ + 2KCl",
    "out": [
      "BaF2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_fef2",
    "need": [
      "BaCl2",
      "FeF2"
    ],
    "eq": "BaCl2 + FeF2 → BaF2↓ + FeCl2",
    "out": [
      "BaF2",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_cuf2",
    "need": [
      "BaCl2",
      "CuF2"
    ],
    "eq": "BaCl2 + CuF2 → BaF2↓ + CuCl2",
    "out": [
      "BaF2",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_cof2",
    "need": [
      "BaCl2",
      "CoF2"
    ],
    "eq": "BaCl2 + CoF2 → BaF2↓ + CoCl2",
    "out": [
      "BaF2",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_crf3",
    "need": [
      "BaCl2",
      "CrF3"
    ],
    "eq": "3BaCl2 + 2CrF3 → 3BaF2↓ + 2CrCl3",
    "out": [
      "BaF2",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_nif2",
    "need": [
      "BaCl2",
      "NiF2"
    ],
    "eq": "BaCl2 + NiF2 → BaF2↓ + NiCl2",
    "out": [
      "BaF2",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_mnf2",
    "need": [
      "BaCl2",
      "MnF2"
    ],
    "eq": "BaCl2 + MnF2 → BaF2↓ + MnCl2",
    "out": [
      "BaF2",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_li2so4",
    "need": [
      "BaCl2",
      "Li2SO4"
    ],
    "eq": "BaCl2 + Li2SO4 → BaSO4↓ + 2LiCl",
    "out": [
      "BaSO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_li3po4",
    "need": [
      "BaCl2",
      "Li3PO4"
    ],
    "eq": "3BaCl2 + 2Li3PO4 → Ba3(PO4)2↓ + 6LiCl",
    "out": [
      "Ba3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_k3po4",
    "need": [
      "BaCl2",
      "K3PO4"
    ],
    "eq": "3BaCl2 + 2K3PO4 → Ba3(PO4)2↓ + 6KCl",
    "out": [
      "Ba3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_pb_c2h3o2_2",
    "need": [
      "BaCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "BaCl2 + Pb(C2H3O2)2 → Ba(C2H3O2)2 + PbCl2↓",
    "out": [
      "Ba(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_li2so3",
    "need": [
      "BaCl2",
      "Li2SO3"
    ],
    "eq": "BaCl2 + Li2SO3 → BaSO3↓ + 2LiCl",
    "out": [
      "BaSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_k2so3",
    "need": [
      "BaCl2",
      "K2SO3"
    ],
    "eq": "BaCl2 + K2SO3 → BaSO3↓ + 2KCl",
    "out": [
      "BaSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_li2sio3",
    "need": [
      "BaCl2",
      "Li2SiO3"
    ],
    "eq": "BaCl2 + Li2SiO3 → BaSiO3↓ + 2LiCl",
    "out": [
      "BaSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_na2sio3",
    "need": [
      "BaCl2",
      "Na2SiO3"
    ],
    "eq": "BaCl2 + Na2SiO3 → BaSiO3↓ + 2NaCl",
    "out": [
      "BaSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_k2sio3",
    "need": [
      "BaCl2",
      "K2SiO3"
    ],
    "eq": "BaCl2 + K2SiO3 → BaSiO3↓ + 2KCl",
    "out": [
      "BaSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_gaf3",
    "need": [
      "BaCl2",
      "GaF3"
    ],
    "eq": "3BaCl2 + 2GaF3 → 3BaF2↓ + 2GaCl3",
    "out": [
      "BaF2",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_ga2_so4_3",
    "need": [
      "BaCl2",
      "Ga2(SO4)3"
    ],
    "eq": "3BaCl2 + Ga2(SO4)3 → 3BaSO4↓ + 2GaCl3",
    "out": [
      "BaSO4",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_bacl2",
    "need": [
      "BaCl2",
      "AgF"
    ],
    "eq": "BaCl2 + 2AgF → BaF2↓ + 2AgCl↓",
    "out": [
      "BaF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_bacl2",
    "need": [
      "BaCl2",
      "AgC2H3O2"
    ],
    "eq": "BaCl2 + 2AgC2H3O2 → Ba(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Ba(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_crso4",
    "need": [
      "BaCl2",
      "CrSO4"
    ],
    "eq": "BaCl2 + CrSO4 → BaSO4↓ + CrCl2",
    "out": [
      "BaSO4",
      "CrCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bacl2_znf2",
    "need": [
      "BaCl2",
      "ZnF2"
    ],
    "eq": "BaCl2 + ZnF2 → BaF2↓ + ZnCl2",
    "out": [
      "BaF2",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_crcl3",
    "need": [
      "CrCl3",
      "AgNO3"
    ],
    "eq": "CrCl3 + 3AgNO3 → Cr(NO3)3 + 3AgCl↓",
    "out": [
      "Cr(NO3)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_pb_no3_2",
    "need": [
      "CrCl3",
      "Pb(NO3)2"
    ],
    "eq": "2CrCl3 + 3Pb(NO3)2 → 2Cr(NO3)3 + 3PbCl2↓",
    "out": [
      "Cr(NO3)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_na3po4",
    "need": [
      "CrCl3",
      "Na3PO4"
    ],
    "eq": "CrCl3 + Na3PO4 → CrPO4↓ + 3NaCl",
    "out": [
      "CrPO4",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_li3po4",
    "need": [
      "CrCl3",
      "Li3PO4"
    ],
    "eq": "CrCl3 + Li3PO4 → CrPO4↓ + 3LiCl",
    "out": [
      "CrPO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_k3po4",
    "need": [
      "CrCl3",
      "K3PO4"
    ],
    "eq": "CrCl3 + K3PO4 → CrPO4↓ + 3KCl",
    "out": [
      "CrPO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_pb_c2h3o2_2",
    "need": [
      "CrCl3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2CrCl3 + 3Pb(C2H3O2)2 → 2Cr(C2H3O2)3 + 3PbCl2↓",
    "out": [
      "Cr(C2H3O2)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_li2sio3",
    "need": [
      "CrCl3",
      "Li2SiO3"
    ],
    "eq": "2CrCl3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 6LiCl",
    "out": [
      "Cr2(SiO3)3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_na2sio3",
    "need": [
      "CrCl3",
      "Na2SiO3"
    ],
    "eq": "2CrCl3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 6NaCl",
    "out": [
      "Cr2(SiO3)3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl3_k2sio3",
    "need": [
      "CrCl3",
      "K2SiO3"
    ],
    "eq": "2CrCl3 + 3K2SiO3 → Cr2(SiO3)3↓ + 6KCl",
    "out": [
      "Cr2(SiO3)3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_crcl3",
    "need": [
      "CrCl3",
      "AgF"
    ],
    "eq": "CrCl3 + 3AgF → CrF3 + 3AgCl↓",
    "out": [
      "CrF3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_crcl3",
    "need": [
      "CrCl3",
      "AgC2H3O2"
    ],
    "eq": "CrCl3 + 3AgC2H3O2 → Cr(C2H3O2)3 + 3AgCl↓",
    "out": [
      "Cr(C2H3O2)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_na2co3",
    "need": [
      "MnCl2",
      "Na2CO3"
    ],
    "eq": "MnCl2 + Na2CO3 → MnCO3↓ + 2NaCl",
    "out": [
      "MnCO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_na2so3",
    "need": [
      "MnCl2",
      "Na2SO3"
    ],
    "eq": "MnCl2 + Na2SO3 → MnSO3↓ + 2NaCl",
    "out": [
      "MnSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_na2s",
    "need": [
      "MnCl2",
      "Na2S"
    ],
    "eq": "MnCl2 + Na2S → MnS↓ + 2NaCl",
    "out": [
      "MnS",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_mncl2",
    "need": [
      "MnCl2",
      "AgNO3"
    ],
    "eq": "MnCl2 + 2AgNO3 → Mn(NO3)2 + 2AgCl↓",
    "out": [
      "Mn(NO3)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_pb_no3_2",
    "need": [
      "MnCl2",
      "Pb(NO3)2"
    ],
    "eq": "MnCl2 + Pb(NO3)2 → Mn(NO3)2 + PbCl2↓",
    "out": [
      "Mn(NO3)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_na3po4",
    "need": [
      "MnCl2",
      "Na3PO4"
    ],
    "eq": "3MnCl2 + 2Na3PO4 → Mn3(PO4)2↓ + 6NaCl",
    "out": [
      "Mn3(PO4)2",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mncl2",
    "need": [
      "MnCl2",
      "K2CO3"
    ],
    "eq": "MnCl2 + K2CO3 → MnCO3↓ + 2KCl",
    "out": [
      "MnCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mncl2",
    "need": [
      "MnCl2",
      "CaS"
    ],
    "eq": "MnCl2 + CaS → MnS↓ + CaCl2",
    "out": [
      "MnS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mncl2",
    "need": [
      "MnCl2",
      "Li3PO4"
    ],
    "eq": "3MnCl2 + 2Li3PO4 → Mn3(PO4)2↓ + 6LiCl",
    "out": [
      "Mn3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mncl2",
    "need": [
      "MnCl2",
      "K3PO4"
    ],
    "eq": "3MnCl2 + 2K3PO4 → Mn3(PO4)2↓ + 6KCl",
    "out": [
      "Mn3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_pb_c2h3o2_2",
    "need": [
      "MnCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "MnCl2 + Pb(C2H3O2)2 → Mn(C2H3O2)2 + PbCl2↓",
    "out": [
      "Mn(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mncl2",
    "need": [
      "MnCl2",
      "Li2SO3"
    ],
    "eq": "MnCl2 + Li2SO3 → MnSO3↓ + 2LiCl",
    "out": [
      "MnSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mncl2",
    "need": [
      "MnCl2",
      "K2SO3"
    ],
    "eq": "MnCl2 + K2SO3 → MnSO3↓ + 2KCl",
    "out": [
      "MnSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mncl2",
    "need": [
      "MnCl2",
      "Li2S"
    ],
    "eq": "MnCl2 + Li2S → MnS↓ + 2LiCl",
    "out": [
      "MnS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mncl2",
    "need": [
      "MnCl2",
      "K2S"
    ],
    "eq": "MnCl2 + K2S → MnS↓ + 2KCl",
    "out": [
      "MnS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mncl2",
    "need": [
      "MnCl2",
      "BaS"
    ],
    "eq": "MnCl2 + BaS → MnS↓ + BaCl2",
    "out": [
      "MnS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mncl2",
    "need": [
      "MnCl2",
      "Li2SiO3"
    ],
    "eq": "MnCl2 + Li2SiO3 → MnSiO3↓ + 2LiCl",
    "out": [
      "MnSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mncl2_na2sio3",
    "need": [
      "MnCl2",
      "Na2SiO3"
    ],
    "eq": "MnCl2 + Na2SiO3 → MnSiO3↓ + 2NaCl",
    "out": [
      "MnSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mncl2",
    "need": [
      "MnCl2",
      "K2SiO3"
    ],
    "eq": "MnCl2 + K2SiO3 → MnSiO3↓ + 2KCl",
    "out": [
      "MnSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mncl2",
    "need": [
      "MnCl2",
      "AgF"
    ],
    "eq": "MnCl2 + 2AgF → MnF2 + 2AgCl↓",
    "out": [
      "MnF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mncl2",
    "need": [
      "MnCl2",
      "AgC2H3O2"
    ],
    "eq": "MnCl2 + 2AgC2H3O2 → Mn(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Mn(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_na2so3",
    "need": [
      "FeCl2",
      "Na2SO3"
    ],
    "eq": "FeCl2 + Na2SO3 → FeSO3↓ + 2NaCl",
    "out": [
      "FeSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_fecl2",
    "need": [
      "FeCl2",
      "CaS"
    ],
    "eq": "FeCl2 + CaS → FeS↓ + CaCl2",
    "out": [
      "FeS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_li3po4",
    "need": [
      "FeCl2",
      "Li3PO4"
    ],
    "eq": "3FeCl2 + 2Li3PO4 → Fe3(PO4)2↓ + 6LiCl",
    "out": [
      "Fe3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_k3po4",
    "need": [
      "FeCl2",
      "K3PO4"
    ],
    "eq": "3FeCl2 + 2K3PO4 → Fe3(PO4)2↓ + 6KCl",
    "out": [
      "Fe3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_pb_c2h3o2_2",
    "need": [
      "FeCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "FeCl2 + Pb(C2H3O2)2 → Fe(C2H3O2)2 + PbCl2↓",
    "out": [
      "Fe(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_li2so3",
    "need": [
      "FeCl2",
      "Li2SO3"
    ],
    "eq": "FeCl2 + Li2SO3 → FeSO3↓ + 2LiCl",
    "out": [
      "FeSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_k2so3",
    "need": [
      "FeCl2",
      "K2SO3"
    ],
    "eq": "FeCl2 + K2SO3 → FeSO3↓ + 2KCl",
    "out": [
      "FeSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_li2s",
    "need": [
      "FeCl2",
      "Li2S"
    ],
    "eq": "FeCl2 + Li2S → FeS↓ + 2LiCl",
    "out": [
      "FeS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_k2s",
    "need": [
      "FeCl2",
      "K2S"
    ],
    "eq": "FeCl2 + K2S → FeS↓ + 2KCl",
    "out": [
      "FeS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_fecl2",
    "need": [
      "FeCl2",
      "BaS"
    ],
    "eq": "FeCl2 + BaS → FeS↓ + BaCl2",
    "out": [
      "FeS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_li2sio3",
    "need": [
      "FeCl2",
      "Li2SiO3"
    ],
    "eq": "FeCl2 + Li2SiO3 → FeSiO3↓ + 2LiCl",
    "out": [
      "FeSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_na2sio3",
    "need": [
      "FeCl2",
      "Na2SiO3"
    ],
    "eq": "FeCl2 + Na2SiO3 → FeSiO3↓ + 2NaCl",
    "out": [
      "FeSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl2_k2sio3",
    "need": [
      "FeCl2",
      "K2SiO3"
    ],
    "eq": "FeCl2 + K2SiO3 → FeSiO3↓ + 2KCl",
    "out": [
      "FeSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_fecl2",
    "need": [
      "FeCl2",
      "AgF"
    ],
    "eq": "FeCl2 + 2AgF → FeF2 + 2AgCl↓",
    "out": [
      "FeF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_fecl2",
    "need": [
      "FeCl2",
      "AgC2H3O2"
    ],
    "eq": "FeCl2 + 2AgC2H3O2 → Fe(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Fe(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_lif",
    "need": [
      "FeCl3",
      "LiF"
    ],
    "eq": "FeCl3 + 3LiF → FeF3↓ + 3LiCl",
    "out": [
      "FeF3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_naf",
    "need": [
      "FeCl3",
      "NaF"
    ],
    "eq": "FeCl3 + 3NaF → FeF3↓ + 3NaCl",
    "out": [
      "FeF3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_kf",
    "need": [
      "FeCl3",
      "KF"
    ],
    "eq": "FeCl3 + 3KF → FeF3↓ + 3KCl",
    "out": [
      "FeF3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_fef2",
    "need": [
      "FeCl3",
      "FeF2"
    ],
    "eq": "2FeCl3 + 3FeF2 → 2FeF3↓ + 3FeCl2",
    "out": [
      "FeF3",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_fecl3",
    "need": [
      "FeCl3",
      "CuF2"
    ],
    "eq": "2FeCl3 + 3CuF2 → 2FeF3↓ + 3CuCl2",
    "out": [
      "FeF3",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_fecl3",
    "need": [
      "FeCl3",
      "CoF2"
    ],
    "eq": "2FeCl3 + 3CoF2 → 2FeF3↓ + 3CoCl2",
    "out": [
      "FeF3",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_fecl3",
    "need": [
      "FeCl3",
      "CrF3"
    ],
    "eq": "FeCl3 + CrF3 → FeF3↓ + CrCl3",
    "out": [
      "FeF3",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_nif2",
    "need": [
      "FeCl3",
      "NiF2"
    ],
    "eq": "2FeCl3 + 3NiF2 → 2FeF3↓ + 3NiCl2",
    "out": [
      "FeF3",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_mnf2",
    "need": [
      "FeCl3",
      "MnF2"
    ],
    "eq": "2FeCl3 + 3MnF2 → 2FeF3↓ + 3MnCl2",
    "out": [
      "FeF3",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_li3po4",
    "need": [
      "FeCl3",
      "Li3PO4"
    ],
    "eq": "FeCl3 + Li3PO4 → FePO4↓ + 3LiCl",
    "out": [
      "FePO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_k3po4",
    "need": [
      "FeCl3",
      "K3PO4"
    ],
    "eq": "FeCl3 + K3PO4 → FePO4↓ + 3KCl",
    "out": [
      "FePO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_pb_c2h3o2_2",
    "need": [
      "FeCl3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2FeCl3 + 3Pb(C2H3O2)2 → 2Fe(C2H3O2)3 + 3PbCl2↓",
    "out": [
      "Fe(C2H3O2)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_li2sio3",
    "need": [
      "FeCl3",
      "Li2SiO3"
    ],
    "eq": "2FeCl3 + 3Li2SiO3 → Fe2(SiO3)3↓ + 6LiCl",
    "out": [
      "Fe2(SiO3)3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_na2sio3",
    "need": [
      "FeCl3",
      "Na2SiO3"
    ],
    "eq": "2FeCl3 + 3Na2SiO3 → Fe2(SiO3)3↓ + 6NaCl",
    "out": [
      "Fe2(SiO3)3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_k2sio3",
    "need": [
      "FeCl3",
      "K2SiO3"
    ],
    "eq": "2FeCl3 + 3K2SiO3 → Fe2(SiO3)3↓ + 6KCl",
    "out": [
      "Fe2(SiO3)3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_gaf3",
    "need": [
      "FeCl3",
      "GaF3"
    ],
    "eq": "FeCl3 + GaF3 → FeF3↓ + GaCl3",
    "out": [
      "FeF3",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_fecl3",
    "need": [
      "FeCl3",
      "AgF"
    ],
    "eq": "FeCl3 + 3AgF → FeF3↓ + 3AgCl↓",
    "out": [
      "FeF3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_fecl3",
    "need": [
      "FeCl3",
      "AgC2H3O2"
    ],
    "eq": "FeCl3 + 3AgC2H3O2 → Fe(C2H3O2)3 + 3AgCl↓",
    "out": [
      "Fe(C2H3O2)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fecl3_znf2",
    "need": [
      "FeCl3",
      "ZnF2"
    ],
    "eq": "2FeCl3 + 3ZnF2 → 2FeF3↓ + 3ZnCl2",
    "out": [
      "FeF3",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_zncl2",
    "need": [
      "ZnCl2",
      "Na2CO3"
    ],
    "eq": "ZnCl2 + Na2CO3 → ZnCO3↓ + 2NaCl",
    "out": [
      "ZnCO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_zncl2",
    "need": [
      "ZnCl2",
      "Na2SO3"
    ],
    "eq": "ZnCl2 + Na2SO3 → ZnSO3↓ + 2NaCl",
    "out": [
      "ZnSO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_zncl2",
    "need": [
      "ZnCl2",
      "Na2S"
    ],
    "eq": "ZnCl2 + Na2S → ZnS↓ + 2NaCl",
    "out": [
      "ZnS",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_zncl2",
    "need": [
      "ZnCl2",
      "CaS"
    ],
    "eq": "ZnCl2 + CaS → ZnS↓ + CaCl2",
    "out": [
      "ZnS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_zncl2",
    "need": [
      "ZnCl2",
      "Li3PO4"
    ],
    "eq": "3ZnCl2 + 2Li3PO4 → Zn3(PO4)2↓ + 6LiCl",
    "out": [
      "Zn3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_zncl2",
    "need": [
      "ZnCl2",
      "K3PO4"
    ],
    "eq": "3ZnCl2 + 2K3PO4 → Zn3(PO4)2↓ + 6KCl",
    "out": [
      "Zn3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_zncl2",
    "need": [
      "ZnCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "ZnCl2 + Pb(C2H3O2)2 → Zn(C2H3O2)2 + PbCl2↓",
    "out": [
      "Zn(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_zncl2",
    "need": [
      "ZnCl2",
      "Li2SO3"
    ],
    "eq": "ZnCl2 + Li2SO3 → ZnSO3↓ + 2LiCl",
    "out": [
      "ZnSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_zncl2",
    "need": [
      "ZnCl2",
      "K2SO3"
    ],
    "eq": "ZnCl2 + K2SO3 → ZnSO3↓ + 2KCl",
    "out": [
      "ZnSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_zncl2",
    "need": [
      "ZnCl2",
      "Li2S"
    ],
    "eq": "ZnCl2 + Li2S → ZnS↓ + 2LiCl",
    "out": [
      "ZnS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_zncl2",
    "need": [
      "ZnCl2",
      "K2S"
    ],
    "eq": "ZnCl2 + K2S → ZnS↓ + 2KCl",
    "out": [
      "ZnS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_zncl2",
    "need": [
      "ZnCl2",
      "BaS"
    ],
    "eq": "ZnCl2 + BaS → ZnS↓ + BaCl2",
    "out": [
      "ZnS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_zncl2",
    "need": [
      "ZnCl2",
      "Li2SiO3"
    ],
    "eq": "ZnCl2 + Li2SiO3 → ZnSiO3↓ + 2LiCl",
    "out": [
      "ZnSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_zncl2",
    "need": [
      "ZnCl2",
      "Na2SiO3"
    ],
    "eq": "ZnCl2 + Na2SiO3 → ZnSiO3↓ + 2NaCl",
    "out": [
      "ZnSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_zncl2",
    "need": [
      "ZnCl2",
      "K2SiO3"
    ],
    "eq": "ZnCl2 + K2SiO3 → ZnSiO3↓ + 2KCl",
    "out": [
      "ZnSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_zncl2",
    "need": [
      "ZnCl2",
      "AgF"
    ],
    "eq": "ZnCl2 + 2AgF → ZnF2 + 2AgCl↓",
    "out": [
      "ZnF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_zncl2",
    "need": [
      "ZnCl2",
      "AgC2H3O2"
    ],
    "eq": "ZnCl2 + 2AgC2H3O2 → Zn(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Zn(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_lif",
    "need": [
      "AlCl3",
      "LiF"
    ],
    "eq": "AlCl3 + 3LiF → AlF3↓ + 3LiCl",
    "out": [
      "AlF3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_naf",
    "need": [
      "AlCl3",
      "NaF"
    ],
    "eq": "AlCl3 + 3NaF → AlF3↓ + 3NaCl",
    "out": [
      "AlF3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_kf",
    "need": [
      "AlCl3",
      "KF"
    ],
    "eq": "AlCl3 + 3KF → AlF3↓ + 3KCl",
    "out": [
      "AlF3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_fef2",
    "need": [
      "AlCl3",
      "FeF2"
    ],
    "eq": "2AlCl3 + 3FeF2 → 2AlF3↓ + 3FeCl2",
    "out": [
      "AlF3",
      "FeCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_cuf2",
    "need": [
      "AlCl3",
      "CuF2"
    ],
    "eq": "2AlCl3 + 3CuF2 → 2AlF3↓ + 3CuCl2",
    "out": [
      "AlF3",
      "CuCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_cof2",
    "need": [
      "AlCl3",
      "CoF2"
    ],
    "eq": "2AlCl3 + 3CoF2 → 2AlF3↓ + 3CoCl2",
    "out": [
      "AlF3",
      "CoCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_crf3",
    "need": [
      "AlCl3",
      "CrF3"
    ],
    "eq": "AlCl3 + CrF3 → AlF3↓ + CrCl3",
    "out": [
      "AlF3",
      "CrCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_nif2",
    "need": [
      "AlCl3",
      "NiF2"
    ],
    "eq": "2AlCl3 + 3NiF2 → 2AlF3↓ + 3NiCl2",
    "out": [
      "AlF3",
      "NiCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_mnf2",
    "need": [
      "AlCl3",
      "MnF2"
    ],
    "eq": "2AlCl3 + 3MnF2 → 2AlF3↓ + 3MnCl2",
    "out": [
      "AlF3",
      "MnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_li3po4",
    "need": [
      "AlCl3",
      "Li3PO4"
    ],
    "eq": "AlCl3 + Li3PO4 → AlPO4↓ + 3LiCl",
    "out": [
      "AlPO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_k3po4",
    "need": [
      "AlCl3",
      "K3PO4"
    ],
    "eq": "AlCl3 + K3PO4 → AlPO4↓ + 3KCl",
    "out": [
      "AlPO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_pb_c2h3o2_2",
    "need": [
      "AlCl3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2AlCl3 + 3Pb(C2H3O2)2 → 2Al(C2H3O2)3 + 3PbCl2↓",
    "out": [
      "Al(C2H3O2)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_li2sio3",
    "need": [
      "AlCl3",
      "Li2SiO3"
    ],
    "eq": "2AlCl3 + 3Li2SiO3 → Al2(SiO3)3↓ + 6LiCl",
    "out": [
      "Al2(SiO3)3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_na2sio3",
    "need": [
      "AlCl3",
      "Na2SiO3"
    ],
    "eq": "2AlCl3 + 3Na2SiO3 → Al2(SiO3)3↓ + 6NaCl",
    "out": [
      "Al2(SiO3)3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_k2sio3",
    "need": [
      "AlCl3",
      "K2SiO3"
    ],
    "eq": "2AlCl3 + 3K2SiO3 → Al2(SiO3)3↓ + 6KCl",
    "out": [
      "Al2(SiO3)3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_gaf3",
    "need": [
      "AlCl3",
      "GaF3"
    ],
    "eq": "AlCl3 + GaF3 → AlF3↓ + GaCl3",
    "out": [
      "AlF3",
      "GaCl3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_alcl3",
    "need": [
      "AlCl3",
      "AgF"
    ],
    "eq": "AlCl3 + 3AgF → AlF3↓ + 3AgCl↓",
    "out": [
      "AlF3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_alcl3",
    "need": [
      "AlCl3",
      "AgC2H3O2"
    ],
    "eq": "AlCl3 + 3AgC2H3O2 → Al(C2H3O2)3 + 3AgCl↓",
    "out": [
      "Al(C2H3O2)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_alcl3_znf2",
    "need": [
      "AlCl3",
      "ZnF2"
    ],
    "eq": "2AlCl3 + 3ZnF2 → 2AlF3↓ + 3ZnCl2",
    "out": [
      "AlF3",
      "ZnCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_na2so4",
    "need": [
      "Na2SO4",
      "CaS"
    ],
    "eq": "Na2SO4 + CaS → Na2S + CaSO4↓",
    "out": [
      "Na2S",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_na2so4",
    "need": [
      "Na2SO4",
      "Ca(HCO3)2"
    ],
    "eq": "Na2SO4 + Ca(HCO3)2 → 2NaHCO3 + CaSO4↓",
    "out": [
      "NaHCO3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_na2so4",
    "need": [
      "Na2SO4",
      "Ba(NO3)2"
    ],
    "eq": "Na2SO4 + Ba(NO3)2 → 2NaNO3 + BaSO4↓",
    "out": [
      "NaNO3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_na2so4",
    "need": [
      "Na2SO4",
      "BaBr2"
    ],
    "eq": "Na2SO4 + BaBr2 → 2NaBr + BaSO4↓",
    "out": [
      "NaBr",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_na2so4",
    "need": [
      "Na2SO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "Na2SO4 + Ca(C2H3O2)2 → 2CH3COONa + CaSO4↓",
    "out": [
      "CH3COONa",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_na2so4",
    "need": [
      "Na2SO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "Na2SO4 + Ba(C2H3O2)2 → 2CH3COONa + BaSO4↓",
    "out": [
      "CH3COONa",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so4_pb_c2h3o2_2",
    "need": [
      "Na2SO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "Na2SO4 + Pb(C2H3O2)2 → 2CH3COONa + PbSO4↓",
    "out": [
      "CH3COONa",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_na2so4",
    "need": [
      "Na2SO4",
      "BaS"
    ],
    "eq": "Na2SO4 + BaS → Na2S + BaSO4↓",
    "out": [
      "Na2S",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na2so4",
    "need": [
      "Na2SO4",
      "AgF"
    ],
    "eq": "Na2SO4 + 2AgF → 2NaF + Ag2SO4↓",
    "out": [
      "NaF",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na2so4",
    "need": [
      "Na2SO4",
      "AgC2H3O2"
    ],
    "eq": "Na2SO4 + 2AgC2H3O2 → 2CH3COONa + Ag2SO4↓",
    "out": [
      "CH3COONa",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k2so4",
    "need": [
      "K2SO4",
      "CaS"
    ],
    "eq": "K2SO4 + CaS → K2S + CaSO4↓",
    "out": [
      "K2S",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k2so4",
    "need": [
      "K2SO4",
      "Ca(HCO3)2"
    ],
    "eq": "K2SO4 + Ca(HCO3)2 → 2KHCO3 + CaSO4↓",
    "out": [
      "KHCO3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k2so4",
    "need": [
      "K2SO4",
      "Ba(NO3)2"
    ],
    "eq": "K2SO4 + Ba(NO3)2 → 2KNO3 + BaSO4↓",
    "out": [
      "KNO3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k2so4",
    "need": [
      "K2SO4",
      "BaBr2"
    ],
    "eq": "K2SO4 + BaBr2 → 2KBr + BaSO4↓",
    "out": [
      "KBr",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k2so4",
    "need": [
      "K2SO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "K2SO4 + Ca(C2H3O2)2 → 2CH3COOK + CaSO4↓",
    "out": [
      "CH3COOK",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k2so4",
    "need": [
      "K2SO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "K2SO4 + Ba(C2H3O2)2 → 2CH3COOK + BaSO4↓",
    "out": [
      "CH3COOK",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so4_pb_c2h3o2_2",
    "need": [
      "K2SO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "K2SO4 + Pb(C2H3O2)2 → 2CH3COOK + PbSO4↓",
    "out": [
      "CH3COOK",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k2so4",
    "need": [
      "K2SO4",
      "BaS"
    ],
    "eq": "K2SO4 + BaS → K2S + BaSO4↓",
    "out": [
      "K2S",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2so4",
    "need": [
      "K2SO4",
      "AgF"
    ],
    "eq": "K2SO4 + 2AgF → 2KF + Ag2SO4↓",
    "out": [
      "KF",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2so4",
    "need": [
      "K2SO4",
      "AgC2H3O2"
    ],
    "eq": "K2SO4 + 2AgC2H3O2 → 2CH3COOK + Ag2SO4↓",
    "out": [
      "CH3COOK",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_na2so3",
    "need": [
      "CuSO4",
      "Na2SO3"
    ],
    "eq": "CuSO4 + Na2SO3 → CuSO3↓ + Na2SO4",
    "out": [
      "CuSO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cuso4",
    "need": [
      "CuSO4",
      "CaS"
    ],
    "eq": "CuSO4 + CaS → CuS↓ + CaSO4↓",
    "out": [
      "CuS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_cuso4",
    "need": [
      "CuSO4",
      "Ca(HCO3)2"
    ],
    "eq": "CuSO4 + Ca(HCO3)2 → Cu(HCO3)2 + CaSO4↓",
    "out": [
      "Cu(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_cuso4",
    "need": [
      "CuSO4",
      "Ba(NO3)2"
    ],
    "eq": "CuSO4 + Ba(NO3)2 → Cu(NO3)2 + BaSO4↓",
    "out": [
      "Cu(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_cuso4",
    "need": [
      "CuSO4",
      "BaBr2"
    ],
    "eq": "CuSO4 + BaBr2 → CuBr2 + BaSO4↓",
    "out": [
      "CuBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_li3po4",
    "need": [
      "CuSO4",
      "Li3PO4"
    ],
    "eq": "3CuSO4 + 2Li3PO4 → Cu3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Cu3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_k3po4",
    "need": [
      "CuSO4",
      "K3PO4"
    ],
    "eq": "3CuSO4 + 2K3PO4 → Cu3(PO4)2↓ + 3K2SO4",
    "out": [
      "Cu3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_cuso4",
    "need": [
      "CuSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "CuSO4 + Ca(C2H3O2)2 → Cu(C2H3O2)2 + CaSO4↓",
    "out": [
      "Cu(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_cuso4",
    "need": [
      "CuSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "CuSO4 + Ba(C2H3O2)2 → Cu(C2H3O2)2 + BaSO4↓",
    "out": [
      "Cu(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_pb_c2h3o2_2",
    "need": [
      "CuSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "CuSO4 + Pb(C2H3O2)2 → Cu(C2H3O2)2 + PbSO4↓",
    "out": [
      "Cu(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_li2so3",
    "need": [
      "CuSO4",
      "Li2SO3"
    ],
    "eq": "CuSO4 + Li2SO3 → CuSO3↓ + Li2SO4",
    "out": [
      "CuSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_k2so3",
    "need": [
      "CuSO4",
      "K2SO3"
    ],
    "eq": "CuSO4 + K2SO3 → CuSO3↓ + K2SO4",
    "out": [
      "CuSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_li2s",
    "need": [
      "CuSO4",
      "Li2S"
    ],
    "eq": "CuSO4 + Li2S → CuS↓ + Li2SO4",
    "out": [
      "CuS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_k2s",
    "need": [
      "CuSO4",
      "K2S"
    ],
    "eq": "CuSO4 + K2S → CuS↓ + K2SO4",
    "out": [
      "CuS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cuso4",
    "need": [
      "CuSO4",
      "BaS"
    ],
    "eq": "CuSO4 + BaS → CuS↓ + BaSO4↓",
    "out": [
      "CuS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_li2sio3",
    "need": [
      "CuSO4",
      "Li2SiO3"
    ],
    "eq": "CuSO4 + Li2SiO3 → CuSiO3↓ + Li2SO4",
    "out": [
      "CuSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_na2sio3",
    "need": [
      "CuSO4",
      "Na2SiO3"
    ],
    "eq": "CuSO4 + Na2SiO3 → CuSiO3↓ + Na2SO4",
    "out": [
      "CuSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuso4_k2sio3",
    "need": [
      "CuSO4",
      "K2SiO3"
    ],
    "eq": "CuSO4 + K2SiO3 → CuSiO3↓ + K2SO4",
    "out": [
      "CuSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cuso4",
    "need": [
      "CuSO4",
      "AgF"
    ],
    "eq": "CuSO4 + 2AgF → CuF2 + Ag2SO4↓",
    "out": [
      "CuF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cuso4",
    "need": [
      "CuSO4",
      "AgC2H3O2"
    ],
    "eq": "CuSO4 + 2AgC2H3O2 → Cu(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Cu(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_na2so3",
    "need": [
      "FeSO4",
      "Na2SO3"
    ],
    "eq": "FeSO4 + Na2SO3 → FeSO3↓ + Na2SO4",
    "out": [
      "FeSO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_na2s",
    "need": [
      "FeSO4",
      "Na2S"
    ],
    "eq": "FeSO4 + Na2S → FeS↓ + Na2SO4",
    "out": [
      "FeS",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_feso4",
    "need": [
      "FeSO4",
      "CaS"
    ],
    "eq": "FeSO4 + CaS → FeS↓ + CaSO4↓",
    "out": [
      "FeS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_feso4",
    "need": [
      "FeSO4",
      "Ca(HCO3)2"
    ],
    "eq": "FeSO4 + Ca(HCO3)2 → Fe(HCO3)2 + CaSO4↓",
    "out": [
      "Fe(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_feso4",
    "need": [
      "FeSO4",
      "Ba(NO3)2"
    ],
    "eq": "FeSO4 + Ba(NO3)2 → Fe(NO3)2 + BaSO4↓",
    "out": [
      "Fe(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_feso4",
    "need": [
      "FeSO4",
      "BaBr2"
    ],
    "eq": "FeSO4 + BaBr2 → FeBr2 + BaSO4↓",
    "out": [
      "FeBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_li3po4",
    "need": [
      "FeSO4",
      "Li3PO4"
    ],
    "eq": "3FeSO4 + 2Li3PO4 → Fe3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Fe3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_k3po4",
    "need": [
      "FeSO4",
      "K3PO4"
    ],
    "eq": "3FeSO4 + 2K3PO4 → Fe3(PO4)2↓ + 3K2SO4",
    "out": [
      "Fe3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_feso4",
    "need": [
      "FeSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "FeSO4 + Ca(C2H3O2)2 → Fe(C2H3O2)2 + CaSO4↓",
    "out": [
      "Fe(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_feso4",
    "need": [
      "FeSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "FeSO4 + Ba(C2H3O2)2 → Fe(C2H3O2)2 + BaSO4↓",
    "out": [
      "Fe(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_pb_c2h3o2_2",
    "need": [
      "FeSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "FeSO4 + Pb(C2H3O2)2 → Fe(C2H3O2)2 + PbSO4↓",
    "out": [
      "Fe(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_li2so3",
    "need": [
      "FeSO4",
      "Li2SO3"
    ],
    "eq": "FeSO4 + Li2SO3 → FeSO3↓ + Li2SO4",
    "out": [
      "FeSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_k2so3",
    "need": [
      "FeSO4",
      "K2SO3"
    ],
    "eq": "FeSO4 + K2SO3 → FeSO3↓ + K2SO4",
    "out": [
      "FeSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_li2s",
    "need": [
      "FeSO4",
      "Li2S"
    ],
    "eq": "FeSO4 + Li2S → FeS↓ + Li2SO4",
    "out": [
      "FeS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_k2s",
    "need": [
      "FeSO4",
      "K2S"
    ],
    "eq": "FeSO4 + K2S → FeS↓ + K2SO4",
    "out": [
      "FeS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_feso4",
    "need": [
      "FeSO4",
      "BaS"
    ],
    "eq": "FeSO4 + BaS → FeS↓ + BaSO4↓",
    "out": [
      "FeS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_li2sio3",
    "need": [
      "FeSO4",
      "Li2SiO3"
    ],
    "eq": "FeSO4 + Li2SiO3 → FeSiO3↓ + Li2SO4",
    "out": [
      "FeSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_na2sio3",
    "need": [
      "FeSO4",
      "Na2SiO3"
    ],
    "eq": "FeSO4 + Na2SiO3 → FeSiO3↓ + Na2SO4",
    "out": [
      "FeSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_feso4_k2sio3",
    "need": [
      "FeSO4",
      "K2SiO3"
    ],
    "eq": "FeSO4 + K2SiO3 → FeSiO3↓ + K2SO4",
    "out": [
      "FeSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_feso4",
    "need": [
      "FeSO4",
      "AgF"
    ],
    "eq": "FeSO4 + 2AgF → FeF2 + Ag2SO4↓",
    "out": [
      "FeF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_feso4",
    "need": [
      "FeSO4",
      "AgC2H3O2"
    ],
    "eq": "FeSO4 + 2AgC2H3O2 → Fe(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Fe(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "Ba(NO3)2"
    ],
    "eq": "Fe2(SO4)3 + 3Ba(NO3)2 → 2Fe(NO3)3 + 3BaSO4↓",
    "out": [
      "Fe(NO3)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "BaBr2"
    ],
    "eq": "Fe2(SO4)3 + 3BaBr2 → 2FeBr3 + 3BaSO4↓",
    "out": [
      "FeBr3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_lif",
    "need": [
      "Fe2(SO4)3",
      "LiF"
    ],
    "eq": "Fe2(SO4)3 + 6LiF → 2FeF3↓ + 3Li2SO4",
    "out": [
      "FeF3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_naf",
    "need": [
      "Fe2(SO4)3",
      "NaF"
    ],
    "eq": "Fe2(SO4)3 + 6NaF → 2FeF3↓ + 3Na2SO4",
    "out": [
      "FeF3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_kf",
    "need": [
      "Fe2(SO4)3",
      "KF"
    ],
    "eq": "Fe2(SO4)3 + 6KF → 2FeF3↓ + 3K2SO4",
    "out": [
      "FeF3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_fef2",
    "need": [
      "Fe2(SO4)3",
      "FeF2"
    ],
    "eq": "Fe2(SO4)3 + 3FeF2 → 2FeF3↓ + 3FeSO4",
    "out": [
      "FeF3",
      "FeSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "CuF2"
    ],
    "eq": "Fe2(SO4)3 + 3CuF2 → 2FeF3↓ + 3CuSO4",
    "out": [
      "FeF3",
      "CuSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "CoF2"
    ],
    "eq": "Fe2(SO4)3 + 3CoF2 → 2FeF3↓ + 3CoSO4",
    "out": [
      "FeF3",
      "CoSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "CrF3"
    ],
    "eq": "Fe2(SO4)3 + 2CrF3 → 2FeF3↓ + Cr2(SO4)3",
    "out": [
      "FeF3",
      "Cr2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_nif2",
    "need": [
      "Fe2(SO4)3",
      "NiF2"
    ],
    "eq": "Fe2(SO4)3 + 3NiF2 → 2FeF3↓ + 3NiSO4",
    "out": [
      "FeF3",
      "NiSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_mnf2",
    "need": [
      "Fe2(SO4)3",
      "MnF2"
    ],
    "eq": "Fe2(SO4)3 + 3MnF2 → 2FeF3↓ + 3MnSO4",
    "out": [
      "FeF3",
      "MnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_li3po4",
    "need": [
      "Fe2(SO4)3",
      "Li3PO4"
    ],
    "eq": "Fe2(SO4)3 + 2Li3PO4 → 2FePO4↓ + 3Li2SO4",
    "out": [
      "FePO4",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_k3po4",
    "need": [
      "Fe2(SO4)3",
      "K3PO4"
    ],
    "eq": "Fe2(SO4)3 + 2K3PO4 → 2FePO4↓ + 3K2SO4",
    "out": [
      "FePO4",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "Ca(C2H3O2)2"
    ],
    "eq": "Fe2(SO4)3 + 3Ca(C2H3O2)2 → 2Fe(C2H3O2)3 + 3CaSO4↓",
    "out": [
      "Fe(C2H3O2)3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "Ba(C2H3O2)2"
    ],
    "eq": "Fe2(SO4)3 + 3Ba(C2H3O2)2 → 2Fe(C2H3O2)3 + 3BaSO4↓",
    "out": [
      "Fe(C2H3O2)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_pb_c2h3o2_2",
    "need": [
      "Fe2(SO4)3",
      "Pb(C2H3O2)2"
    ],
    "eq": "Fe2(SO4)3 + 3Pb(C2H3O2)2 → 2Fe(C2H3O2)3 + 3PbSO4↓",
    "out": [
      "Fe(C2H3O2)3",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_li2sio3",
    "need": [
      "Fe2(SO4)3",
      "Li2SiO3"
    ],
    "eq": "Fe2(SO4)3 + 3Li2SiO3 → Fe2(SiO3)3↓ + 3Li2SO4",
    "out": [
      "Fe2(SiO3)3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_na2sio3",
    "need": [
      "Fe2(SO4)3",
      "Na2SiO3"
    ],
    "eq": "Fe2(SO4)3 + 3Na2SiO3 → Fe2(SiO3)3↓ + 3Na2SO4",
    "out": [
      "Fe2(SiO3)3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_k2sio3",
    "need": [
      "Fe2(SO4)3",
      "K2SiO3"
    ],
    "eq": "Fe2(SO4)3 + 3K2SiO3 → Fe2(SiO3)3↓ + 3K2SO4",
    "out": [
      "Fe2(SiO3)3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_gaf3",
    "need": [
      "Fe2(SO4)3",
      "GaF3"
    ],
    "eq": "Fe2(SO4)3 + 2GaF3 → 2FeF3↓ + Ga2(SO4)3",
    "out": [
      "FeF3",
      "Ga2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "AgF"
    ],
    "eq": "Fe2(SO4)3 + 6AgF → 2FeF3↓ + 3Ag2SO4↓",
    "out": [
      "FeF3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_fe2_so4_3",
    "need": [
      "Fe2(SO4)3",
      "AgC2H3O2"
    ],
    "eq": "Fe2(SO4)3 + 6AgC2H3O2 → 2Fe(C2H3O2)3 + 3Ag2SO4↓",
    "out": [
      "Fe(C2H3O2)3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe2_so4_3_znf2",
    "need": [
      "Fe2(SO4)3",
      "ZnF2"
    ],
    "eq": "Fe2(SO4)3 + 3ZnF2 → 2FeF3↓ + 3ZnSO4",
    "out": [
      "FeF3",
      "ZnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_znso4",
    "need": [
      "ZnSO4",
      "Na2CO3"
    ],
    "eq": "ZnSO4 + Na2CO3 → ZnCO3↓ + Na2SO4",
    "out": [
      "ZnCO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_znso4",
    "need": [
      "ZnSO4",
      "Na2SO3"
    ],
    "eq": "ZnSO4 + Na2SO3 → ZnSO3↓ + Na2SO4",
    "out": [
      "ZnSO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_znso4",
    "need": [
      "ZnSO4",
      "Na2S"
    ],
    "eq": "ZnSO4 + Na2S → ZnS↓ + Na2SO4",
    "out": [
      "ZnS",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_znso4",
    "need": [
      "ZnSO4",
      "CaS"
    ],
    "eq": "ZnSO4 + CaS → ZnS↓ + CaSO4↓",
    "out": [
      "ZnS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_znso4",
    "need": [
      "ZnSO4",
      "Ca(HCO3)2"
    ],
    "eq": "ZnSO4 + Ca(HCO3)2 → Zn(HCO3)2 + CaSO4↓",
    "out": [
      "Zn(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_znso4",
    "need": [
      "ZnSO4",
      "Ba(NO3)2"
    ],
    "eq": "ZnSO4 + Ba(NO3)2 → Zn(NO3)2 + BaSO4↓",
    "out": [
      "Zn(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_znso4",
    "need": [
      "ZnSO4",
      "BaBr2"
    ],
    "eq": "ZnSO4 + BaBr2 → ZnBr2 + BaSO4↓",
    "out": [
      "ZnBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_znso4",
    "need": [
      "ZnSO4",
      "Li3PO4"
    ],
    "eq": "3ZnSO4 + 2Li3PO4 → Zn3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Zn3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_znso4",
    "need": [
      "ZnSO4",
      "K3PO4"
    ],
    "eq": "3ZnSO4 + 2K3PO4 → Zn3(PO4)2↓ + 3K2SO4",
    "out": [
      "Zn3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_znso4",
    "need": [
      "ZnSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "ZnSO4 + Ca(C2H3O2)2 → Zn(C2H3O2)2 + CaSO4↓",
    "out": [
      "Zn(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_znso4",
    "need": [
      "ZnSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "ZnSO4 + Ba(C2H3O2)2 → Zn(C2H3O2)2 + BaSO4↓",
    "out": [
      "Zn(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_znso4",
    "need": [
      "ZnSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "ZnSO4 + Pb(C2H3O2)2 → Zn(C2H3O2)2 + PbSO4↓",
    "out": [
      "Zn(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_znso4",
    "need": [
      "ZnSO4",
      "Li2SO3"
    ],
    "eq": "ZnSO4 + Li2SO3 → ZnSO3↓ + Li2SO4",
    "out": [
      "ZnSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_znso4",
    "need": [
      "ZnSO4",
      "K2SO3"
    ],
    "eq": "ZnSO4 + K2SO3 → ZnSO3↓ + K2SO4",
    "out": [
      "ZnSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_znso4",
    "need": [
      "ZnSO4",
      "Li2S"
    ],
    "eq": "ZnSO4 + Li2S → ZnS↓ + Li2SO4",
    "out": [
      "ZnS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_znso4",
    "need": [
      "ZnSO4",
      "K2S"
    ],
    "eq": "ZnSO4 + K2S → ZnS↓ + K2SO4",
    "out": [
      "ZnS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_znso4",
    "need": [
      "ZnSO4",
      "BaS"
    ],
    "eq": "ZnSO4 + BaS → ZnS↓ + BaSO4↓",
    "out": [
      "ZnS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_znso4",
    "need": [
      "ZnSO4",
      "Li2SiO3"
    ],
    "eq": "ZnSO4 + Li2SiO3 → ZnSiO3↓ + Li2SO4",
    "out": [
      "ZnSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_znso4",
    "need": [
      "ZnSO4",
      "Na2SiO3"
    ],
    "eq": "ZnSO4 + Na2SiO3 → ZnSiO3↓ + Na2SO4",
    "out": [
      "ZnSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_znso4",
    "need": [
      "ZnSO4",
      "K2SiO3"
    ],
    "eq": "ZnSO4 + K2SiO3 → ZnSiO3↓ + K2SO4",
    "out": [
      "ZnSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_znso4",
    "need": [
      "ZnSO4",
      "AgF"
    ],
    "eq": "ZnSO4 + 2AgF → ZnF2 + Ag2SO4↓",
    "out": [
      "ZnF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_znso4",
    "need": [
      "ZnSO4",
      "AgC2H3O2"
    ],
    "eq": "ZnSO4 + 2AgC2H3O2 → Zn(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Zn(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_na2co3",
    "need": [
      "MgSO4",
      "Na2CO3"
    ],
    "eq": "MgSO4 + Na2CO3 → MgCO3↓ + Na2SO4",
    "out": [
      "MgCO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_na2so3",
    "need": [
      "MgSO4",
      "Na2SO3"
    ],
    "eq": "MgSO4 + Na2SO3 → MgSO3↓ + Na2SO4",
    "out": [
      "MgSO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_na2s",
    "need": [
      "MgSO4",
      "Na2S"
    ],
    "eq": "MgSO4 + Na2S → MgS↓ + Na2SO4",
    "out": [
      "MgS",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mgso4",
    "need": [
      "MgSO4",
      "CaS"
    ],
    "eq": "MgSO4 + CaS → MgS↓ + CaSO4↓",
    "out": [
      "MgS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_mgso4",
    "need": [
      "MgSO4",
      "Ca(HCO3)2"
    ],
    "eq": "MgSO4 + Ca(HCO3)2 → Mg(HCO3)2 + CaSO4↓",
    "out": [
      "Mg(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_mgso4",
    "need": [
      "MgSO4",
      "Ba(NO3)2"
    ],
    "eq": "MgSO4 + Ba(NO3)2 → Mg(NO3)2 + BaSO4↓",
    "out": [
      "Mg(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_mgso4",
    "need": [
      "MgSO4",
      "BaBr2"
    ],
    "eq": "MgSO4 + BaBr2 → MgBr2 + BaSO4↓",
    "out": [
      "MgBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_mgso4",
    "need": [
      "MgSO4",
      "LiF"
    ],
    "eq": "MgSO4 + 2LiF → MgF2↓ + Li2SO4",
    "out": [
      "MgF2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_naf",
    "need": [
      "MgSO4",
      "NaF"
    ],
    "eq": "MgSO4 + 2NaF → MgF2↓ + Na2SO4",
    "out": [
      "MgF2",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_mgso4",
    "need": [
      "MgSO4",
      "KF"
    ],
    "eq": "MgSO4 + 2KF → MgF2↓ + K2SO4",
    "out": [
      "MgF2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_mgso4",
    "need": [
      "MgSO4",
      "FeF2"
    ],
    "eq": "MgSO4 + FeF2 → MgF2↓ + FeSO4",
    "out": [
      "MgF2",
      "FeSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_mgso4",
    "need": [
      "MgSO4",
      "CuF2"
    ],
    "eq": "MgSO4 + CuF2 → MgF2↓ + CuSO4",
    "out": [
      "MgF2",
      "CuSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_mgso4",
    "need": [
      "MgSO4",
      "CoF2"
    ],
    "eq": "MgSO4 + CoF2 → MgF2↓ + CoSO4",
    "out": [
      "MgF2",
      "CoSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_mgso4",
    "need": [
      "MgSO4",
      "CrF3"
    ],
    "eq": "3MgSO4 + 2CrF3 → 3MgF2↓ + Cr2(SO4)3",
    "out": [
      "MgF2",
      "Cr2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_nif2",
    "need": [
      "MgSO4",
      "NiF2"
    ],
    "eq": "MgSO4 + NiF2 → MgF2↓ + NiSO4",
    "out": [
      "MgF2",
      "NiSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_mnf2",
    "need": [
      "MgSO4",
      "MnF2"
    ],
    "eq": "MgSO4 + MnF2 → MgF2↓ + MnSO4",
    "out": [
      "MgF2",
      "MnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mgso4",
    "need": [
      "MgSO4",
      "Li3PO4"
    ],
    "eq": "3MgSO4 + 2Li3PO4 → Mg3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Mg3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mgso4",
    "need": [
      "MgSO4",
      "K3PO4"
    ],
    "eq": "3MgSO4 + 2K3PO4 → Mg3(PO4)2↓ + 3K2SO4",
    "out": [
      "Mg3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_mgso4",
    "need": [
      "MgSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "MgSO4 + Ca(C2H3O2)2 → Mg(C2H3O2)2 + CaSO4↓",
    "out": [
      "Mg(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_mgso4",
    "need": [
      "MgSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "MgSO4 + Ba(C2H3O2)2 → Mg(C2H3O2)2 + BaSO4↓",
    "out": [
      "Mg(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_pb_c2h3o2_2",
    "need": [
      "MgSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "MgSO4 + Pb(C2H3O2)2 → Mg(C2H3O2)2 + PbSO4↓",
    "out": [
      "Mg(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mgso4",
    "need": [
      "MgSO4",
      "Li2SO3"
    ],
    "eq": "MgSO4 + Li2SO3 → MgSO3↓ + Li2SO4",
    "out": [
      "MgSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mgso4",
    "need": [
      "MgSO4",
      "K2SO3"
    ],
    "eq": "MgSO4 + K2SO3 → MgSO3↓ + K2SO4",
    "out": [
      "MgSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mgso4",
    "need": [
      "MgSO4",
      "Li2S"
    ],
    "eq": "MgSO4 + Li2S → MgS↓ + Li2SO4",
    "out": [
      "MgS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mgso4",
    "need": [
      "MgSO4",
      "K2S"
    ],
    "eq": "MgSO4 + K2S → MgS↓ + K2SO4",
    "out": [
      "MgS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mgso4",
    "need": [
      "MgSO4",
      "BaS"
    ],
    "eq": "MgSO4 + BaS → MgS↓ + BaSO4↓",
    "out": [
      "MgS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mgso4",
    "need": [
      "MgSO4",
      "Li2SiO3"
    ],
    "eq": "MgSO4 + Li2SiO3 → MgSiO3↓ + Li2SO4",
    "out": [
      "MgSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_na2sio3",
    "need": [
      "MgSO4",
      "Na2SiO3"
    ],
    "eq": "MgSO4 + Na2SiO3 → MgSiO3↓ + Na2SO4",
    "out": [
      "MgSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mgso4",
    "need": [
      "MgSO4",
      "K2SiO3"
    ],
    "eq": "MgSO4 + K2SiO3 → MgSiO3↓ + K2SO4",
    "out": [
      "MgSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_mgso4",
    "need": [
      "MgSO4",
      "GaF3"
    ],
    "eq": "3MgSO4 + 2GaF3 → 3MgF2↓ + Ga2(SO4)3",
    "out": [
      "MgF2",
      "Ga2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mgso4",
    "need": [
      "MgSO4",
      "AgF"
    ],
    "eq": "MgSO4 + 2AgF → MgF2↓ + Ag2SO4↓",
    "out": [
      "MgF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mgso4",
    "need": [
      "MgSO4",
      "AgC2H3O2"
    ],
    "eq": "MgSO4 + 2AgC2H3O2 → Mg(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Mg(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgso4_znf2",
    "need": [
      "MgSO4",
      "ZnF2"
    ],
    "eq": "MgSO4 + ZnF2 → MgF2↓ + ZnSO4",
    "out": [
      "MgF2",
      "ZnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Cu(NO3)2"
    ],
    "eq": "Na2CO3 + Cu(NO3)2 → 2NaNO3 + CuCO3↓",
    "out": [
      "NaNO3",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_zn_no3_2",
    "need": [
      "Na2CO3",
      "Zn(NO3)2"
    ],
    "eq": "Na2CO3 + Zn(NO3)2 → 2NaNO3 + ZnCO3↓",
    "out": [
      "NaNO3",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Mg(NO3)2"
    ],
    "eq": "Na2CO3 + Mg(NO3)2 → 2NaNO3 + MgCO3↓",
    "out": [
      "NaNO3",
      "MgCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Fe(NO3)2"
    ],
    "eq": "Na2CO3 + Fe(NO3)2 → 2NaNO3 + FeCO3↓",
    "out": [
      "NaNO3",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_na2co3",
    "need": [
      "Na2CO3",
      "FeBr2"
    ],
    "eq": "Na2CO3 + FeBr2 → 2NaBr + FeCO3↓",
    "out": [
      "NaBr",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_nicl2",
    "need": [
      "Na2CO3",
      "NiCl2"
    ],
    "eq": "Na2CO3 + NiCl2 → 2NaCl + NiCO3↓",
    "out": [
      "NaCl",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_sncl2",
    "need": [
      "Na2CO3",
      "SnCl2"
    ],
    "eq": "Na2CO3 + SnCl2 → 2NaCl + SnCO3↓",
    "out": [
      "NaCl",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_niso4",
    "need": [
      "Na2CO3",
      "NiSO4"
    ],
    "eq": "Na2CO3 + NiSO4 → Na2SO4 + NiCO3↓",
    "out": [
      "Na2SO4",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnso4_na2co3",
    "need": [
      "Na2CO3",
      "MnSO4"
    ],
    "eq": "Na2CO3 + MnSO4 → Na2SO4 + MnCO3↓",
    "out": [
      "Na2SO4",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_snso4",
    "need": [
      "Na2CO3",
      "SnSO4"
    ],
    "eq": "Na2CO3 + SnSO4 → Na2SO4 + SnCO3↓",
    "out": [
      "Na2SO4",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_na2co3",
    "need": [
      "Na2CO3",
      "CaS"
    ],
    "eq": "Na2CO3 + CaS → Na2S + CaCO3↓",
    "out": [
      "Na2S",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_na2co3",
    "need": [
      "Na2CO3",
      "CoCl2"
    ],
    "eq": "Na2CO3 + CoCl2 → 2NaCl + CoCO3↓",
    "out": [
      "NaCl",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_na2co3",
    "need": [
      "Na2CO3",
      "CoSO4"
    ],
    "eq": "Na2CO3 + CoSO4 → Na2SO4 + CoCO3↓",
    "out": [
      "Na2SO4",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Co(NO3)2"
    ],
    "eq": "Na2CO3 + Co(NO3)2 → 2NaNO3 + CoCO3↓",
    "out": [
      "NaNO3",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_ni_no3_2",
    "need": [
      "Na2CO3",
      "Ni(NO3)2"
    ],
    "eq": "Na2CO3 + Ni(NO3)2 → 2NaNO3 + NiCO3↓",
    "out": [
      "NaNO3",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Mn(NO3)2"
    ],
    "eq": "Na2CO3 + Mn(NO3)2 → 2NaNO3 + MnCO3↓",
    "out": [
      "NaNO3",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_na2co3",
    "need": [
      "Na2CO3",
      "Ca(HCO3)2"
    ],
    "eq": "Na2CO3 + Ca(HCO3)2 → 2NaHCO3 + CaCO3↓",
    "out": [
      "NaHCO3",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_na2co3",
    "need": [
      "Na2CO3",
      "CrCl2"
    ],
    "eq": "Na2CO3 + CrCl2 → 2NaCl + CrCO3↓",
    "out": [
      "NaCl",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_znbr2",
    "need": [
      "Na2CO3",
      "ZnBr2"
    ],
    "eq": "Na2CO3 + ZnBr2 → 2NaBr + ZnCO3↓",
    "out": [
      "NaBr",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_na2co3",
    "need": [
      "Na2CO3",
      "MgBr2"
    ],
    "eq": "Na2CO3 + MgBr2 → 2NaBr + MgCO3↓",
    "out": [
      "NaBr",
      "MgCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_na2co3",
    "need": [
      "Na2CO3",
      "CaBr2"
    ],
    "eq": "Na2CO3 + CaBr2 → 2NaBr + CaCO3↓",
    "out": [
      "NaBr",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_snbr2",
    "need": [
      "Na2CO3",
      "SnBr2"
    ],
    "eq": "Na2CO3 + SnBr2 → 2NaBr + SnCO3↓",
    "out": [
      "NaBr",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_nibr2",
    "need": [
      "Na2CO3",
      "NiBr2"
    ],
    "eq": "Na2CO3 + NiBr2 → 2NaBr + NiCO3↓",
    "out": [
      "NaBr",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_na2co3",
    "need": [
      "Na2CO3",
      "CoBr2"
    ],
    "eq": "Na2CO3 + CoBr2 → 2NaBr + CoCO3↓",
    "out": [
      "NaBr",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Ba(NO3)2"
    ],
    "eq": "Na2CO3 + Ba(NO3)2 → 2NaNO3 + BaCO3↓",
    "out": [
      "NaNO3",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_sn_no3_2",
    "need": [
      "Na2CO3",
      "Sn(NO3)2"
    ],
    "eq": "Na2CO3 + Sn(NO3)2 → 2NaNO3 + SnCO3↓",
    "out": [
      "NaNO3",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_na2co3",
    "need": [
      "Na2CO3",
      "CuBr2"
    ],
    "eq": "Na2CO3 + CuBr2 → 2NaBr + CuCO3↓",
    "out": [
      "NaBr",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_na2co3",
    "need": [
      "Na2CO3",
      "MnBr2"
    ],
    "eq": "Na2CO3 + MnBr2 → 2NaBr + MnCO3↓",
    "out": [
      "NaBr",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_libr_na2co3",
    "need": [
      "Na2CO3",
      "LiBr"
    ],
    "eq": "Na2CO3 + 2LiBr → 2NaBr + Li2CO3↓",
    "out": [
      "NaBr",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_na2co3",
    "need": [
      "Na2CO3",
      "BaBr2"
    ],
    "eq": "Na2CO3 + BaBr2 → 2NaBr + BaCO3↓",
    "out": [
      "NaBr",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_na2co3",
    "need": [
      "Na2CO3",
      "LiF"
    ],
    "eq": "Na2CO3 + 2LiF → 2NaF + Li2CO3↓",
    "out": [
      "NaF",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_na2co3",
    "need": [
      "Na2CO3",
      "FeF2"
    ],
    "eq": "Na2CO3 + FeF2 → 2NaF + FeCO3↓",
    "out": [
      "NaF",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_na2co3",
    "need": [
      "Na2CO3",
      "CuF2"
    ],
    "eq": "Na2CO3 + CuF2 → 2NaF + CuCO3↓",
    "out": [
      "NaF",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_na2co3",
    "need": [
      "Na2CO3",
      "CoF2"
    ],
    "eq": "Na2CO3 + CoF2 → 2NaF + CoCO3↓",
    "out": [
      "NaF",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_nif2",
    "need": [
      "Na2CO3",
      "NiF2"
    ],
    "eq": "Na2CO3 + NiF2 → 2NaF + NiCO3↓",
    "out": [
      "NaF",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_na2co3",
    "need": [
      "Na2CO3",
      "MnF2"
    ],
    "eq": "Na2CO3 + MnF2 → 2NaF + MnCO3↓",
    "out": [
      "NaF",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lino3_na2co3",
    "need": [
      "Na2CO3",
      "LiNO3"
    ],
    "eq": "Na2CO3 + 2LiNO3 → 2NaNO3 + Li2CO3↓",
    "out": [
      "NaNO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so4_na2co3",
    "need": [
      "Na2CO3",
      "Li2SO4"
    ],
    "eq": "Na2CO3 + Li2SO4 → Na2SO4 + Li2CO3↓",
    "out": [
      "Na2SO4",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_na2co3",
    "need": [
      "Na2CO3",
      "Li3PO4"
    ],
    "eq": "3Na2CO3 + 2Li3PO4 → 2Na3PO4 + 3Li2CO3↓",
    "out": [
      "Na3PO4",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lic2h3o2_na2co3",
    "need": [
      "Na2CO3",
      "LiC2H3O2"
    ],
    "eq": "Na2CO3 + 2LiC2H3O2 → 2CH3COONa + Li2CO3↓",
    "out": [
      "CH3COONa",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Ca(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Ca(C2H3O2)2 → 2CH3COONa + CaCO3↓",
    "out": [
      "CH3COONa",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Ba(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Ba(C2H3O2)2 → 2CH3COONa + BaCO3↓",
    "out": [
      "CH3COONa",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Mg(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Mg(C2H3O2)2 → 2CH3COONa + MgCO3↓",
    "out": [
      "CH3COONa",
      "MgCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Fe(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Fe(C2H3O2)2 → 2CH3COONa + FeCO3↓",
    "out": [
      "CH3COONa",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Cu(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Cu(C2H3O2)2 → 2CH3COONa + CuCO3↓",
    "out": [
      "CH3COONa",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_zn_c2h3o2_2",
    "need": [
      "Na2CO3",
      "Zn(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Zn(C2H3O2)2 → 2CH3COONa + ZnCO3↓",
    "out": [
      "CH3COONa",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Co(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Co(C2H3O2)2 → 2CH3COONa + CoCO3↓",
    "out": [
      "CH3COONa",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_ni_c2h3o2_2",
    "need": [
      "Na2CO3",
      "Ni(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Ni(C2H3O2)2 → 2CH3COONa + NiCO3↓",
    "out": [
      "CH3COONa",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Mn(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Mn(C2H3O2)2 → 2CH3COONa + MnCO3↓",
    "out": [
      "CH3COONa",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_pb_c2h3o2_2",
    "need": [
      "Na2CO3",
      "Pb(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Pb(C2H3O2)2 → 2CH3COONa + PbCO3↓",
    "out": [
      "CH3COONa",
      "PbCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_na2co3",
    "need": [
      "Na2CO3",
      "Li2SO3"
    ],
    "eq": "Na2CO3 + Li2SO3 → Na2SO3 + Li2CO3↓",
    "out": [
      "Na2SO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_na2co3",
    "need": [
      "Na2CO3",
      "Li2S"
    ],
    "eq": "Na2CO3 + Li2S → Na2S + Li2CO3↓",
    "out": [
      "Na2S",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_na2co3",
    "need": [
      "Na2CO3",
      "BaS"
    ],
    "eq": "Na2CO3 + BaS → Na2S + BaCO3↓",
    "out": [
      "Na2S",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_na2co3",
    "need": [
      "Na2CO3",
      "Li2SiO3"
    ],
    "eq": "Na2CO3 + Li2SiO3 → Na2SiO3 + Li2CO3↓",
    "out": [
      "Na2SiO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na2co3",
    "need": [
      "Na2CO3",
      "AgF"
    ],
    "eq": "Na2CO3 + 2AgF → 2NaF + Ag2CO3↓",
    "out": [
      "NaF",
      "Ag2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na2co3",
    "need": [
      "Na2CO3",
      "AgC2H3O2"
    ],
    "eq": "Na2CO3 + 2AgC2H3O2 → 2CH3COONa + Ag2CO3↓",
    "out": [
      "CH3COONa",
      "Ag2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_na2co3",
    "need": [
      "Na2CO3",
      "CrBr2"
    ],
    "eq": "Na2CO3 + CrBr2 → 2NaBr + CrCO3↓",
    "out": [
      "NaBr",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_na2co3",
    "need": [
      "Na2CO3",
      "CrSO4"
    ],
    "eq": "Na2CO3 + CrSO4 → Na2SO4 + CrCO3↓",
    "out": [
      "Na2SO4",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_na2co3",
    "need": [
      "Na2CO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Cr(C2H3O2)2 → 2CH3COONa + CrCO3↓",
    "out": [
      "CH3COONa",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_sn_c2h3o2_2",
    "need": [
      "Na2CO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "Na2CO3 + Sn(C2H3O2)2 → 2CH3COONa + SnCO3↓",
    "out": [
      "CH3COONa",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_na2co3",
    "need": [
      "Na2CO3",
      "Cr(NO3)2"
    ],
    "eq": "Na2CO3 + Cr(NO3)2 → 2NaNO3 + CrCO3↓",
    "out": [
      "NaNO3",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2co3_znf2",
    "need": [
      "Na2CO3",
      "ZnF2"
    ],
    "eq": "Na2CO3 + ZnF2 → 2NaF + ZnCO3↓",
    "out": [
      "NaF",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_na2so3",
    "need": [
      "Na2SO3",
      "AgNO3"
    ],
    "eq": "Na2SO3 + 2AgNO3 → 2NaNO3 + Ag2SO3↓",
    "out": [
      "NaNO3",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Cu(NO3)2"
    ],
    "eq": "Na2SO3 + Cu(NO3)2 → 2NaNO3 + CuSO3↓",
    "out": [
      "NaNO3",
      "CuSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_pb_no3_2",
    "need": [
      "Na2SO3",
      "Pb(NO3)2"
    ],
    "eq": "Na2SO3 + Pb(NO3)2 → 2NaNO3 + PbSO3↓",
    "out": [
      "NaNO3",
      "PbSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_zn_no3_2",
    "need": [
      "Na2SO3",
      "Zn(NO3)2"
    ],
    "eq": "Na2SO3 + Zn(NO3)2 → 2NaNO3 + ZnSO3↓",
    "out": [
      "NaNO3",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Mg(NO3)2"
    ],
    "eq": "Na2SO3 + Mg(NO3)2 → 2NaNO3 + MgSO3↓",
    "out": [
      "NaNO3",
      "MgSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Fe(NO3)2"
    ],
    "eq": "Na2SO3 + Fe(NO3)2 → 2NaNO3 + FeSO3↓",
    "out": [
      "NaNO3",
      "FeSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_na2so3",
    "need": [
      "Na2SO3",
      "FeBr2"
    ],
    "eq": "Na2SO3 + FeBr2 → 2NaBr + FeSO3↓",
    "out": [
      "NaBr",
      "FeSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_nicl2",
    "need": [
      "Na2SO3",
      "NiCl2"
    ],
    "eq": "Na2SO3 + NiCl2 → 2NaCl + NiSO3↓",
    "out": [
      "NaCl",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_sncl2",
    "need": [
      "Na2SO3",
      "SnCl2"
    ],
    "eq": "Na2SO3 + SnCl2 → 2NaCl + SnSO3↓",
    "out": [
      "NaCl",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_niso4",
    "need": [
      "Na2SO3",
      "NiSO4"
    ],
    "eq": "Na2SO3 + NiSO4 → Na2SO4 + NiSO3↓",
    "out": [
      "Na2SO4",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnso4_na2so3",
    "need": [
      "Na2SO3",
      "MnSO4"
    ],
    "eq": "Na2SO3 + MnSO4 → Na2SO4 + MnSO3↓",
    "out": [
      "Na2SO4",
      "MnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_snso4",
    "need": [
      "Na2SO3",
      "SnSO4"
    ],
    "eq": "Na2SO3 + SnSO4 → Na2SO4 + SnSO3↓",
    "out": [
      "Na2SO4",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_na2so3",
    "need": [
      "Na2SO3",
      "CaS"
    ],
    "eq": "Na2SO3 + CaS → Na2S + CaSO3↓",
    "out": [
      "Na2S",
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Ca(NO3)2"
    ],
    "eq": "Na2SO3 + Ca(NO3)2 → 2NaNO3 + CaSO3↓",
    "out": [
      "NaNO3",
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_na2so3",
    "need": [
      "Na2SO3",
      "CoCl2"
    ],
    "eq": "Na2SO3 + CoCl2 → 2NaCl + CoSO3↓",
    "out": [
      "NaCl",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_na2so3",
    "need": [
      "Na2SO3",
      "CoSO4"
    ],
    "eq": "Na2SO3 + CoSO4 → Na2SO4 + CoSO3↓",
    "out": [
      "Na2SO4",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Co(NO3)2"
    ],
    "eq": "Na2SO3 + Co(NO3)2 → 2NaNO3 + CoSO3↓",
    "out": [
      "NaNO3",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_ni_no3_2",
    "need": [
      "Na2SO3",
      "Ni(NO3)2"
    ],
    "eq": "Na2SO3 + Ni(NO3)2 → 2NaNO3 + NiSO3↓",
    "out": [
      "NaNO3",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Mn(NO3)2"
    ],
    "eq": "Na2SO3 + Mn(NO3)2 → 2NaNO3 + MnSO3↓",
    "out": [
      "NaNO3",
      "MnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_na2so3",
    "need": [
      "Na2SO3",
      "Ca(HCO3)2"
    ],
    "eq": "Na2SO3 + Ca(HCO3)2 → 2NaHCO3 + CaSO3↓",
    "out": [
      "NaHCO3",
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_na2so3",
    "need": [
      "Na2SO3",
      "CrCl2"
    ],
    "eq": "Na2SO3 + CrCl2 → 2NaCl + CrSO3↓",
    "out": [
      "NaCl",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_znbr2",
    "need": [
      "Na2SO3",
      "ZnBr2"
    ],
    "eq": "Na2SO3 + ZnBr2 → 2NaBr + ZnSO3↓",
    "out": [
      "NaBr",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_na2so3",
    "need": [
      "Na2SO3",
      "MgBr2"
    ],
    "eq": "Na2SO3 + MgBr2 → 2NaBr + MgSO3↓",
    "out": [
      "NaBr",
      "MgSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_na2so3",
    "need": [
      "Na2SO3",
      "CaBr2"
    ],
    "eq": "Na2SO3 + CaBr2 → 2NaBr + CaSO3↓",
    "out": [
      "NaBr",
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_snbr2",
    "need": [
      "Na2SO3",
      "SnBr2"
    ],
    "eq": "Na2SO3 + SnBr2 → 2NaBr + SnSO3↓",
    "out": [
      "NaBr",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_nibr2",
    "need": [
      "Na2SO3",
      "NiBr2"
    ],
    "eq": "Na2SO3 + NiBr2 → 2NaBr + NiSO3↓",
    "out": [
      "NaBr",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_na2so3",
    "need": [
      "Na2SO3",
      "CoBr2"
    ],
    "eq": "Na2SO3 + CoBr2 → 2NaBr + CoSO3↓",
    "out": [
      "NaBr",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Ba(NO3)2"
    ],
    "eq": "Na2SO3 + Ba(NO3)2 → 2NaNO3 + BaSO3↓",
    "out": [
      "NaNO3",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_sn_no3_2",
    "need": [
      "Na2SO3",
      "Sn(NO3)2"
    ],
    "eq": "Na2SO3 + Sn(NO3)2 → 2NaNO3 + SnSO3↓",
    "out": [
      "NaNO3",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_na2so3",
    "need": [
      "Na2SO3",
      "CuBr2"
    ],
    "eq": "Na2SO3 + CuBr2 → 2NaBr + CuSO3↓",
    "out": [
      "NaBr",
      "CuSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_na2so3",
    "need": [
      "Na2SO3",
      "MnBr2"
    ],
    "eq": "Na2SO3 + MnBr2 → 2NaBr + MnSO3↓",
    "out": [
      "NaBr",
      "MnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_na2so3",
    "need": [
      "Na2SO3",
      "BaBr2"
    ],
    "eq": "Na2SO3 + BaBr2 → 2NaBr + BaSO3↓",
    "out": [
      "NaBr",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_na2so3",
    "need": [
      "Na2SO3",
      "FeF2"
    ],
    "eq": "Na2SO3 + FeF2 → 2NaF + FeSO3↓",
    "out": [
      "NaF",
      "FeSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_na2so3",
    "need": [
      "Na2SO3",
      "CuF2"
    ],
    "eq": "Na2SO3 + CuF2 → 2NaF + CuSO3↓",
    "out": [
      "NaF",
      "CuSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_na2so3",
    "need": [
      "Na2SO3",
      "CoF2"
    ],
    "eq": "Na2SO3 + CoF2 → 2NaF + CoSO3↓",
    "out": [
      "NaF",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_nif2",
    "need": [
      "Na2SO3",
      "NiF2"
    ],
    "eq": "Na2SO3 + NiF2 → 2NaF + NiSO3↓",
    "out": [
      "NaF",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_na2so3",
    "need": [
      "Na2SO3",
      "MnF2"
    ],
    "eq": "Na2SO3 + MnF2 → 2NaF + MnSO3↓",
    "out": [
      "NaF",
      "MnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Ca(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Ca(C2H3O2)2 → 2CH3COONa + CaSO3↓",
    "out": [
      "CH3COONa",
      "CaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Ba(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Ba(C2H3O2)2 → 2CH3COONa + BaSO3↓",
    "out": [
      "CH3COONa",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Mg(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Mg(C2H3O2)2 → 2CH3COONa + MgSO3↓",
    "out": [
      "CH3COONa",
      "MgSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Fe(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Fe(C2H3O2)2 → 2CH3COONa + FeSO3↓",
    "out": [
      "CH3COONa",
      "FeSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Cu(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Cu(C2H3O2)2 → 2CH3COONa + CuSO3↓",
    "out": [
      "CH3COONa",
      "CuSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_zn_c2h3o2_2",
    "need": [
      "Na2SO3",
      "Zn(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Zn(C2H3O2)2 → 2CH3COONa + ZnSO3↓",
    "out": [
      "CH3COONa",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Co(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Co(C2H3O2)2 → 2CH3COONa + CoSO3↓",
    "out": [
      "CH3COONa",
      "CoSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_ni_c2h3o2_2",
    "need": [
      "Na2SO3",
      "Ni(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Ni(C2H3O2)2 → 2CH3COONa + NiSO3↓",
    "out": [
      "CH3COONa",
      "NiSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Mn(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Mn(C2H3O2)2 → 2CH3COONa + MnSO3↓",
    "out": [
      "CH3COONa",
      "MnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_pb_c2h3o2_2",
    "need": [
      "Na2SO3",
      "Pb(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Pb(C2H3O2)2 → 2CH3COONa + PbSO3↓",
    "out": [
      "CH3COONa",
      "PbSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_na2so3",
    "need": [
      "Na2SO3",
      "BaS"
    ],
    "eq": "Na2SO3 + BaS → Na2S + BaSO3↓",
    "out": [
      "Na2S",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na2so3",
    "need": [
      "Na2SO3",
      "AgF"
    ],
    "eq": "Na2SO3 + 2AgF → 2NaF + Ag2SO3↓",
    "out": [
      "NaF",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na2so3",
    "need": [
      "Na2SO3",
      "AgC2H3O2"
    ],
    "eq": "Na2SO3 + 2AgC2H3O2 → 2CH3COONa + Ag2SO3↓",
    "out": [
      "CH3COONa",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_na2so3",
    "need": [
      "Na2SO3",
      "CrBr2"
    ],
    "eq": "Na2SO3 + CrBr2 → 2NaBr + CrSO3↓",
    "out": [
      "NaBr",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_na2so3",
    "need": [
      "Na2SO3",
      "CrSO4"
    ],
    "eq": "Na2SO3 + CrSO4 → Na2SO4 + CrSO3↓",
    "out": [
      "Na2SO4",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_na2so3",
    "need": [
      "Na2SO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Cr(C2H3O2)2 → 2CH3COONa + CrSO3↓",
    "out": [
      "CH3COONa",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_sn_c2h3o2_2",
    "need": [
      "Na2SO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "Na2SO3 + Sn(C2H3O2)2 → 2CH3COONa + SnSO3↓",
    "out": [
      "CH3COONa",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_na2so3",
    "need": [
      "Na2SO3",
      "Cr(NO3)2"
    ],
    "eq": "Na2SO3 + Cr(NO3)2 → 2NaNO3 + CrSO3↓",
    "out": [
      "NaNO3",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2so3_znf2",
    "need": [
      "Na2SO3",
      "ZnF2"
    ],
    "eq": "Na2SO3 + ZnF2 → 2NaF + ZnSO3↓",
    "out": [
      "NaF",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_na2s",
    "need": [
      "Na2S",
      "AgNO3"
    ],
    "eq": "Na2S + 2AgNO3 → 2NaNO3 + Ag2S↓",
    "out": [
      "NaNO3",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_na2s",
    "need": [
      "Na2S",
      "Cu(NO3)2"
    ],
    "eq": "Na2S + Cu(NO3)2 → 2NaNO3 + CuS↓",
    "out": [
      "NaNO3",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_na2s",
    "need": [
      "Na2S",
      "Mg(NO3)2"
    ],
    "eq": "Na2S + Mg(NO3)2 → 2NaNO3 + MgS↓",
    "out": [
      "NaNO3",
      "MgS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_na2s",
    "need": [
      "Na2S",
      "Fe(NO3)2"
    ],
    "eq": "Na2S + Fe(NO3)2 → 2NaNO3 + FeS↓",
    "out": [
      "NaNO3",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_na2s",
    "need": [
      "Na2S",
      "FeBr2"
    ],
    "eq": "Na2S + FeBr2 → 2NaBr + FeS↓",
    "out": [
      "NaBr",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_nicl2",
    "need": [
      "Na2S",
      "NiCl2"
    ],
    "eq": "Na2S + NiCl2 → 2NaCl + NiS↓",
    "out": [
      "NaCl",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_sncl2",
    "need": [
      "Na2S",
      "SnCl2"
    ],
    "eq": "Na2S + SnCl2 → 2NaCl + SnS↓",
    "out": [
      "NaCl",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_niso4",
    "need": [
      "Na2S",
      "NiSO4"
    ],
    "eq": "Na2S + NiSO4 → Na2SO4 + NiS↓",
    "out": [
      "Na2SO4",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnso4_na2s",
    "need": [
      "Na2S",
      "MnSO4"
    ],
    "eq": "Na2S + MnSO4 → Na2SO4 + MnS↓",
    "out": [
      "Na2SO4",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_snso4",
    "need": [
      "Na2S",
      "SnSO4"
    ],
    "eq": "Na2S + SnSO4 → Na2SO4 + SnS↓",
    "out": [
      "Na2SO4",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_na2s",
    "need": [
      "Na2S",
      "CoCl2"
    ],
    "eq": "Na2S + CoCl2 → 2NaCl + CoS↓",
    "out": [
      "NaCl",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_na2s",
    "need": [
      "Na2S",
      "CoSO4"
    ],
    "eq": "Na2S + CoSO4 → Na2SO4 + CoS↓",
    "out": [
      "Na2SO4",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_na2s",
    "need": [
      "Na2S",
      "Co(NO3)2"
    ],
    "eq": "Na2S + Co(NO3)2 → 2NaNO3 + CoS↓",
    "out": [
      "NaNO3",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_ni_no3_2",
    "need": [
      "Na2S",
      "Ni(NO3)2"
    ],
    "eq": "Na2S + Ni(NO3)2 → 2NaNO3 + NiS↓",
    "out": [
      "NaNO3",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_no3_2_na2s",
    "need": [
      "Na2S",
      "Mn(NO3)2"
    ],
    "eq": "Na2S + Mn(NO3)2 → 2NaNO3 + MnS↓",
    "out": [
      "NaNO3",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_na2s",
    "need": [
      "Na2S",
      "CrCl2"
    ],
    "eq": "Na2S + CrCl2 → 2NaCl + CrS↓",
    "out": [
      "NaCl",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_znbr2",
    "need": [
      "Na2S",
      "ZnBr2"
    ],
    "eq": "Na2S + ZnBr2 → 2NaBr + ZnS↓",
    "out": [
      "NaBr",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_na2s",
    "need": [
      "Na2S",
      "MgBr2"
    ],
    "eq": "Na2S + MgBr2 → 2NaBr + MgS↓",
    "out": [
      "NaBr",
      "MgS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_snbr2",
    "need": [
      "Na2S",
      "SnBr2"
    ],
    "eq": "Na2S + SnBr2 → 2NaBr + SnS↓",
    "out": [
      "NaBr",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_nibr2",
    "need": [
      "Na2S",
      "NiBr2"
    ],
    "eq": "Na2S + NiBr2 → 2NaBr + NiS↓",
    "out": [
      "NaBr",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_na2s",
    "need": [
      "Na2S",
      "CoBr2"
    ],
    "eq": "Na2S + CoBr2 → 2NaBr + CoS↓",
    "out": [
      "NaBr",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_sn_no3_2",
    "need": [
      "Na2S",
      "Sn(NO3)2"
    ],
    "eq": "Na2S + Sn(NO3)2 → 2NaNO3 + SnS↓",
    "out": [
      "NaNO3",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_na2s",
    "need": [
      "Na2S",
      "CuBr2"
    ],
    "eq": "Na2S + CuBr2 → 2NaBr + CuS↓",
    "out": [
      "NaBr",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_na2s",
    "need": [
      "Na2S",
      "MnBr2"
    ],
    "eq": "Na2S + MnBr2 → 2NaBr + MnS↓",
    "out": [
      "NaBr",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_na2s",
    "need": [
      "Na2S",
      "FeF2"
    ],
    "eq": "Na2S + FeF2 → 2NaF + FeS↓",
    "out": [
      "NaF",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_na2s",
    "need": [
      "Na2S",
      "CuF2"
    ],
    "eq": "Na2S + CuF2 → 2NaF + CuS↓",
    "out": [
      "NaF",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_na2s",
    "need": [
      "Na2S",
      "CoF2"
    ],
    "eq": "Na2S + CoF2 → 2NaF + CoS↓",
    "out": [
      "NaF",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_nif2",
    "need": [
      "Na2S",
      "NiF2"
    ],
    "eq": "Na2S + NiF2 → 2NaF + NiS↓",
    "out": [
      "NaF",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_na2s",
    "need": [
      "Na2S",
      "MnF2"
    ],
    "eq": "Na2S + MnF2 → 2NaF + MnS↓",
    "out": [
      "NaF",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Mg(C2H3O2)2"
    ],
    "eq": "Na2S + Mg(C2H3O2)2 → 2CH3COONa + MgS↓",
    "out": [
      "CH3COONa",
      "MgS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Fe(C2H3O2)2"
    ],
    "eq": "Na2S + Fe(C2H3O2)2 → 2CH3COONa + FeS↓",
    "out": [
      "CH3COONa",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Cu(C2H3O2)2"
    ],
    "eq": "Na2S + Cu(C2H3O2)2 → 2CH3COONa + CuS↓",
    "out": [
      "CH3COONa",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_zn_c2h3o2_2",
    "need": [
      "Na2S",
      "Zn(C2H3O2)2"
    ],
    "eq": "Na2S + Zn(C2H3O2)2 → 2CH3COONa + ZnS↓",
    "out": [
      "CH3COONa",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Co(C2H3O2)2"
    ],
    "eq": "Na2S + Co(C2H3O2)2 → 2CH3COONa + CoS↓",
    "out": [
      "CH3COONa",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_ni_c2h3o2_2",
    "need": [
      "Na2S",
      "Ni(C2H3O2)2"
    ],
    "eq": "Na2S + Ni(C2H3O2)2 → 2CH3COONa + NiS↓",
    "out": [
      "CH3COONa",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Mn(C2H3O2)2"
    ],
    "eq": "Na2S + Mn(C2H3O2)2 → 2CH3COONa + MnS↓",
    "out": [
      "CH3COONa",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_pb_c2h3o2_2",
    "need": [
      "Na2S",
      "Pb(C2H3O2)2"
    ],
    "eq": "Na2S + Pb(C2H3O2)2 → 2CH3COONa + PbS↓",
    "out": [
      "CH3COONa",
      "PbS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na2s",
    "need": [
      "Na2S",
      "AgF"
    ],
    "eq": "Na2S + 2AgF → 2NaF + Ag2S↓",
    "out": [
      "NaF",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na2s",
    "need": [
      "Na2S",
      "AgC2H3O2"
    ],
    "eq": "Na2S + 2AgC2H3O2 → 2CH3COONa + Ag2S↓",
    "out": [
      "CH3COONa",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_na2s",
    "need": [
      "Na2S",
      "CrBr2"
    ],
    "eq": "Na2S + CrBr2 → 2NaBr + CrS↓",
    "out": [
      "NaBr",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_na2s",
    "need": [
      "Na2S",
      "CrSO4"
    ],
    "eq": "Na2S + CrSO4 → Na2SO4 + CrS↓",
    "out": [
      "Na2SO4",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_na2s",
    "need": [
      "Na2S",
      "Cr(C2H3O2)2"
    ],
    "eq": "Na2S + Cr(C2H3O2)2 → 2CH3COONa + CrS↓",
    "out": [
      "CH3COONa",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_sn_c2h3o2_2",
    "need": [
      "Na2S",
      "Sn(C2H3O2)2"
    ],
    "eq": "Na2S + Sn(C2H3O2)2 → 2CH3COONa + SnS↓",
    "out": [
      "CH3COONa",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_na2s",
    "need": [
      "Na2S",
      "Cr(NO3)2"
    ],
    "eq": "Na2S + Cr(NO3)2 → 2NaNO3 + CrS↓",
    "out": [
      "NaNO3",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2s_znf2",
    "need": [
      "Na2S",
      "ZnF2"
    ],
    "eq": "Na2S + ZnF2 → 2NaF + ZnS↓",
    "out": [
      "NaF",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_nh4cl",
    "need": [
      "AgNO3",
      "NH4Cl"
    ],
    "eq": "AgNO3 + NH4Cl → AgCl↓ + NH4NO3",
    "out": [
      "AgCl",
      "NH4NO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_agno3",
    "need": [
      "AgNO3",
      "(NH4)2SO4"
    ],
    "eq": "2AgNO3 + (NH4)2SO4 → Ag2SO4↓ + 2NH4NO3",
    "out": [
      "Ag2SO4",
      "NH4NO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_febr2",
    "need": [
      "AgNO3",
      "FeBr2"
    ],
    "eq": "2AgNO3 + FeBr2 → 2AgBr↓ + Fe(NO3)2",
    "out": [
      "AgBr",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_febr3",
    "need": [
      "AgNO3",
      "FeBr3"
    ],
    "eq": "3AgNO3 + FeBr3 → 3AgBr↓ + Fe(NO3)3",
    "out": [
      "AgBr",
      "Fe(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_nicl2",
    "need": [
      "AgNO3",
      "NiCl2"
    ],
    "eq": "2AgNO3 + NiCl2 → 2AgCl↓ + Ni(NO3)2",
    "out": [
      "AgCl",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_sncl2",
    "need": [
      "AgNO3",
      "SnCl2"
    ],
    "eq": "2AgNO3 + SnCl2 → 2AgCl↓ + Sn(NO3)2",
    "out": [
      "AgCl",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_cas",
    "need": [
      "AgNO3",
      "CaS"
    ],
    "eq": "2AgNO3 + CaS → Ag2S↓ + Ca(NO3)2",
    "out": [
      "Ag2S",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_nai",
    "need": [
      "AgNO3",
      "NaI"
    ],
    "eq": "AgNO3 + NaI → AgI↓ + NaNO3",
    "out": [
      "AgI",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgI ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_gacl3",
    "need": [
      "AgNO3",
      "GaCl3"
    ],
    "eq": "3AgNO3 + GaCl3 → 3AgCl↓ + Ga(NO3)3",
    "out": [
      "AgCl",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_gabr3",
    "need": [
      "AgNO3",
      "GaBr3"
    ],
    "eq": "3AgNO3 + GaBr3 → 3AgBr↓ + Ga(NO3)3",
    "out": [
      "AgBr",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_crcl2",
    "need": [
      "AgNO3",
      "CrCl2"
    ],
    "eq": "2AgNO3 + CrCl2 → 2AgCl↓ + Cr(NO3)2",
    "out": [
      "AgCl",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_cubr2",
    "need": [
      "AgNO3",
      "CuBr2"
    ],
    "eq": "2AgNO3 + CuBr2 → 2AgBr↓ + Cu(NO3)2",
    "out": [
      "AgBr",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_mnbr2",
    "need": [
      "AgNO3",
      "MnBr2"
    ],
    "eq": "2AgNO3 + MnBr2 → 2AgBr↓ + Mn(NO3)2",
    "out": [
      "AgBr",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_albr3",
    "need": [
      "AgNO3",
      "AlBr3"
    ],
    "eq": "3AgNO3 + AlBr3 → 3AgBr↓ + Al(NO3)3",
    "out": [
      "AgBr",
      "Al(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_crbr3",
    "need": [
      "AgNO3",
      "CrBr3"
    ],
    "eq": "3AgNO3 + CrBr3 → 3AgBr↓ + Cr(NO3)3",
    "out": [
      "AgBr",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_libr",
    "need": [
      "AgNO3",
      "LiBr"
    ],
    "eq": "AgNO3 + LiBr → AgBr↓ + LiNO3",
    "out": [
      "AgBr",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_babr2",
    "need": [
      "AgNO3",
      "BaBr2"
    ],
    "eq": "2AgNO3 + BaBr2 → 2AgBr↓ + Ba(NO3)2",
    "out": [
      "AgBr",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_li2so4",
    "need": [
      "AgNO3",
      "Li2SO4"
    ],
    "eq": "2AgNO3 + Li2SO4 → Ag2SO4↓ + 2LiNO3",
    "out": [
      "Ag2SO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_li3po4",
    "need": [
      "AgNO3",
      "Li3PO4"
    ],
    "eq": "3AgNO3 + Li3PO4 → Ag3PO4↓ + 3LiNO3",
    "out": [
      "Ag3PO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_k3po4",
    "need": [
      "AgNO3",
      "K3PO4"
    ],
    "eq": "3AgNO3 + K3PO4 → Ag3PO4↓ + 3KNO3",
    "out": [
      "Ag3PO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_li2so3",
    "need": [
      "AgNO3",
      "Li2SO3"
    ],
    "eq": "2AgNO3 + Li2SO3 → Ag2SO3↓ + 2LiNO3",
    "out": [
      "Ag2SO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_k2so3",
    "need": [
      "AgNO3",
      "K2SO3"
    ],
    "eq": "2AgNO3 + K2SO3 → Ag2SO3↓ + 2KNO3",
    "out": [
      "Ag2SO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_li2s",
    "need": [
      "AgNO3",
      "Li2S"
    ],
    "eq": "2AgNO3 + Li2S → Ag2S↓ + 2LiNO3",
    "out": [
      "Ag2S",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_k2s",
    "need": [
      "AgNO3",
      "K2S"
    ],
    "eq": "2AgNO3 + K2S → Ag2S↓ + 2KNO3",
    "out": [
      "Ag2S",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_bas",
    "need": [
      "AgNO3",
      "BaS"
    ],
    "eq": "2AgNO3 + BaS → Ag2S↓ + Ba(NO3)2",
    "out": [
      "Ag2S",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_li2sio3",
    "need": [
      "AgNO3",
      "Li2SiO3"
    ],
    "eq": "2AgNO3 + Li2SiO3 → Ag2SiO3↓ + 2LiNO3",
    "out": [
      "Ag2SiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_na2sio3",
    "need": [
      "AgNO3",
      "Na2SiO3"
    ],
    "eq": "2AgNO3 + Na2SiO3 → Ag2SiO3↓ + 2NaNO3",
    "out": [
      "Ag2SiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_k2sio3",
    "need": [
      "AgNO3",
      "K2SiO3"
    ],
    "eq": "2AgNO3 + K2SiO3 → Ag2SiO3↓ + 2KNO3",
    "out": [
      "Ag2SiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_ga2_so4_3",
    "need": [
      "AgNO3",
      "Ga2(SO4)3"
    ],
    "eq": "6AgNO3 + Ga2(SO4)3 → 3Ag2SO4↓ + 2Ga(NO3)3",
    "out": [
      "Ag2SO4",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_crbr2",
    "need": [
      "AgNO3",
      "CrBr2"
    ],
    "eq": "2AgNO3 + CrBr2 → 2AgBr↓ + Cr(NO3)2",
    "out": [
      "AgBr",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agno3_crso4",
    "need": [
      "AgNO3",
      "CrSO4"
    ],
    "eq": "2AgNO3 + CrSO4 → Ag2SO4↓ + Cr(NO3)2",
    "out": [
      "Ag2SO4",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cu_no3_2",
    "need": [
      "Cu(NO3)2",
      "CaS"
    ],
    "eq": "Cu(NO3)2 + CaS → CuS↓ + Ca(NO3)2",
    "out": [
      "CuS",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_li3po4",
    "need": [
      "Cu(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Cu(NO3)2 + 2Li3PO4 → Cu3(PO4)2↓ + 6LiNO3",
    "out": [
      "Cu3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_k3po4",
    "need": [
      "Cu(NO3)2",
      "K3PO4"
    ],
    "eq": "3Cu(NO3)2 + 2K3PO4 → Cu3(PO4)2↓ + 6KNO3",
    "out": [
      "Cu3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_li2so3",
    "need": [
      "Cu(NO3)2",
      "Li2SO3"
    ],
    "eq": "Cu(NO3)2 + Li2SO3 → CuSO3↓ + 2LiNO3",
    "out": [
      "CuSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_k2so3",
    "need": [
      "Cu(NO3)2",
      "K2SO3"
    ],
    "eq": "Cu(NO3)2 + K2SO3 → CuSO3↓ + 2KNO3",
    "out": [
      "CuSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_li2s",
    "need": [
      "Cu(NO3)2",
      "Li2S"
    ],
    "eq": "Cu(NO3)2 + Li2S → CuS↓ + 2LiNO3",
    "out": [
      "CuS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_k2s",
    "need": [
      "Cu(NO3)2",
      "K2S"
    ],
    "eq": "Cu(NO3)2 + K2S → CuS↓ + 2KNO3",
    "out": [
      "CuS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cu_no3_2",
    "need": [
      "Cu(NO3)2",
      "BaS"
    ],
    "eq": "Cu(NO3)2 + BaS → CuS↓ + Ba(NO3)2",
    "out": [
      "CuS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_li2sio3",
    "need": [
      "Cu(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Cu(NO3)2 + Li2SiO3 → CuSiO3↓ + 2LiNO3",
    "out": [
      "CuSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_na2sio3",
    "need": [
      "Cu(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Cu(NO3)2 + Na2SiO3 → CuSiO3↓ + 2NaNO3",
    "out": [
      "CuSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_no3_2_k2sio3",
    "need": [
      "Cu(NO3)2",
      "K2SiO3"
    ],
    "eq": "Cu(NO3)2 + K2SiO3 → CuSiO3↓ + 2KNO3",
    "out": [
      "CuSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kbr_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "KBr"
    ],
    "eq": "Pb(NO3)2 + 2KBr → PbBr2↓ + 2KNO3",
    "out": [
      "PbBr2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nabr_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NaBr"
    ],
    "eq": "Pb(NO3)2 + 2NaBr → PbBr2↓ + 2NaNO3",
    "out": [
      "PbBr2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4cl_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NH4Cl"
    ],
    "eq": "Pb(NO3)2 + 2NH4Cl → PbCl2↓ + 2NH4NO3",
    "out": [
      "PbCl2",
      "NH4NO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "(NH4)2SO4"
    ],
    "eq": "Pb(NO3)2 + (NH4)2SO4 → PbSO4↓ + 2NH4NO3",
    "out": [
      "PbSO4",
      "NH4NO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "FeBr2"
    ],
    "eq": "Pb(NO3)2 + FeBr2 → PbBr2↓ + Fe(NO3)2",
    "out": [
      "PbBr2",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "FeBr3"
    ],
    "eq": "3Pb(NO3)2 + 2FeBr3 → 3PbBr2↓ + 2Fe(NO3)3",
    "out": [
      "PbBr2",
      "Fe(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nicl2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NiCl2"
    ],
    "eq": "Pb(NO3)2 + NiCl2 → PbCl2↓ + Ni(NO3)2",
    "out": [
      "PbCl2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_no3_2_sncl2",
    "need": [
      "Pb(NO3)2",
      "SnCl2"
    ],
    "eq": "Pb(NO3)2 + SnCl2 → PbCl2↓ + Sn(NO3)2",
    "out": [
      "PbCl2",
      "Sn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CaS"
    ],
    "eq": "Pb(NO3)2 + CaS → PbS↓ + Ca(NO3)2",
    "out": [
      "PbS",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nai_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NaI"
    ],
    "eq": "Pb(NO3)2 + 2NaI → PbI2↓ + 2NaNO3",
    "out": [
      "PbI2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbI2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "GaCl3"
    ],
    "eq": "3Pb(NO3)2 + 2GaCl3 → 3PbCl2↓ + 2Ga(NO3)3",
    "out": [
      "PbCl2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "GaBr3"
    ],
    "eq": "3Pb(NO3)2 + 2GaBr3 → 3PbBr2↓ + 2Ga(NO3)3",
    "out": [
      "PbBr2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CrCl2"
    ],
    "eq": "Pb(NO3)2 + CrCl2 → PbCl2↓ + Cr(NO3)2",
    "out": [
      "PbCl2",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CuBr2"
    ],
    "eq": "Pb(NO3)2 + CuBr2 → PbBr2↓ + Cu(NO3)2",
    "out": [
      "PbBr2",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "MnBr2"
    ],
    "eq": "Pb(NO3)2 + MnBr2 → PbBr2↓ + Mn(NO3)2",
    "out": [
      "PbBr2",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "AlBr3"
    ],
    "eq": "3Pb(NO3)2 + 2AlBr3 → 3PbBr2↓ + 2Al(NO3)3",
    "out": [
      "PbBr2",
      "Al(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CrBr3"
    ],
    "eq": "3Pb(NO3)2 + 2CrBr3 → 3PbBr2↓ + 2Cr(NO3)3",
    "out": [
      "PbBr2",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_libr_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "LiBr"
    ],
    "eq": "Pb(NO3)2 + 2LiBr → PbBr2↓ + 2LiNO3",
    "out": [
      "PbBr2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "BaBr2"
    ],
    "eq": "Pb(NO3)2 + BaBr2 → PbBr2↓ + Ba(NO3)2",
    "out": [
      "PbBr2",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "LiF"
    ],
    "eq": "Pb(NO3)2 + 2LiF → PbF2↓ + 2LiNO3",
    "out": [
      "PbF2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_naf_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NaF"
    ],
    "eq": "Pb(NO3)2 + 2NaF → PbF2↓ + 2NaNO3",
    "out": [
      "PbF2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "KF"
    ],
    "eq": "Pb(NO3)2 + 2KF → PbF2↓ + 2KNO3",
    "out": [
      "PbF2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "FeF2"
    ],
    "eq": "Pb(NO3)2 + FeF2 → PbF2↓ + Fe(NO3)2",
    "out": [
      "PbF2",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CuF2"
    ],
    "eq": "Pb(NO3)2 + CuF2 → PbF2↓ + Cu(NO3)2",
    "out": [
      "PbF2",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CoF2"
    ],
    "eq": "Pb(NO3)2 + CoF2 → PbF2↓ + Co(NO3)2",
    "out": [
      "PbF2",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CrF3"
    ],
    "eq": "3Pb(NO3)2 + 2CrF3 → 3PbF2↓ + 2Cr(NO3)3",
    "out": [
      "PbF2",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nif2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "NiF2"
    ],
    "eq": "Pb(NO3)2 + NiF2 → PbF2↓ + Ni(NO3)2",
    "out": [
      "PbF2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "MnF2"
    ],
    "eq": "Pb(NO3)2 + MnF2 → PbF2↓ + Mn(NO3)2",
    "out": [
      "PbF2",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so4_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Li2SO4"
    ],
    "eq": "Pb(NO3)2 + Li2SO4 → PbSO4↓ + 2LiNO3",
    "out": [
      "PbSO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Pb(NO3)2 + 2Li3PO4 → Pb3(PO4)2↓ + 6LiNO3",
    "out": [
      "Pb3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "K3PO4"
    ],
    "eq": "3Pb(NO3)2 + 2K3PO4 → Pb3(PO4)2↓ + 6KNO3",
    "out": [
      "Pb3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Li2SO3"
    ],
    "eq": "Pb(NO3)2 + Li2SO3 → PbSO3↓ + 2LiNO3",
    "out": [
      "PbSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "K2SO3"
    ],
    "eq": "Pb(NO3)2 + K2SO3 → PbSO3↓ + 2KNO3",
    "out": [
      "PbSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Li2S"
    ],
    "eq": "Pb(NO3)2 + Li2S → PbS↓ + 2LiNO3",
    "out": [
      "PbS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "K2S"
    ],
    "eq": "Pb(NO3)2 + K2S → PbS↓ + 2KNO3",
    "out": [
      "PbS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "BaS"
    ],
    "eq": "Pb(NO3)2 + BaS → PbS↓ + Ba(NO3)2",
    "out": [
      "PbS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Pb(NO3)2 + Li2SiO3 → PbSiO3↓ + 2LiNO3",
    "out": [
      "PbSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Pb(NO3)2 + Na2SiO3 → PbSiO3↓ + 2NaNO3",
    "out": [
      "PbSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "K2SiO3"
    ],
    "eq": "Pb(NO3)2 + K2SiO3 → PbSiO3↓ + 2KNO3",
    "out": [
      "PbSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "GaF3"
    ],
    "eq": "3Pb(NO3)2 + 2GaF3 → 3PbF2↓ + 2Ga(NO3)3",
    "out": [
      "PbF2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Pb(NO3)2 + Ga2(SO4)3 → 3PbSO4↓ + 2Ga(NO3)3",
    "out": [
      "PbSO4",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "AgF"
    ],
    "eq": "Pb(NO3)2 + 2AgF → PbF2↓ + 2AgNO3",
    "out": [
      "PbF2",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CrBr2"
    ],
    "eq": "Pb(NO3)2 + CrBr2 → PbBr2↓ + Cr(NO3)2",
    "out": [
      "PbBr2",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_pb_no3_2",
    "need": [
      "Pb(NO3)2",
      "CrSO4"
    ],
    "eq": "Pb(NO3)2 + CrSO4 → PbSO4↓ + Cr(NO3)2",
    "out": [
      "PbSO4",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_no3_2_znf2",
    "need": [
      "Pb(NO3)2",
      "ZnF2"
    ],
    "eq": "Pb(NO3)2 + ZnF2 → PbF2↓ + Zn(NO3)2",
    "out": [
      "PbF2",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "CaS"
    ],
    "eq": "Zn(NO3)2 + CaS → ZnS↓ + Ca(NO3)2",
    "out": [
      "ZnS",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Zn(NO3)2 + 2Li3PO4 → Zn3(PO4)2↓ + 6LiNO3",
    "out": [
      "Zn3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "K3PO4"
    ],
    "eq": "3Zn(NO3)2 + 2K3PO4 → Zn3(PO4)2↓ + 6KNO3",
    "out": [
      "Zn3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "Li2SO3"
    ],
    "eq": "Zn(NO3)2 + Li2SO3 → ZnSO3↓ + 2LiNO3",
    "out": [
      "ZnSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "K2SO3"
    ],
    "eq": "Zn(NO3)2 + K2SO3 → ZnSO3↓ + 2KNO3",
    "out": [
      "ZnSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "Li2S"
    ],
    "eq": "Zn(NO3)2 + Li2S → ZnS↓ + 2LiNO3",
    "out": [
      "ZnS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "K2S"
    ],
    "eq": "Zn(NO3)2 + K2S → ZnS↓ + 2KNO3",
    "out": [
      "ZnS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "BaS"
    ],
    "eq": "Zn(NO3)2 + BaS → ZnS↓ + Ba(NO3)2",
    "out": [
      "ZnS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Zn(NO3)2 + Li2SiO3 → ZnSiO3↓ + 2LiNO3",
    "out": [
      "ZnSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Zn(NO3)2 + Na2SiO3 → ZnSiO3↓ + 2NaNO3",
    "out": [
      "ZnSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_zn_no3_2",
    "need": [
      "Zn(NO3)2",
      "K2SiO3"
    ],
    "eq": "Zn(NO3)2 + K2SiO3 → ZnSiO3↓ + 2KNO3",
    "out": [
      "ZnSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "CaS"
    ],
    "eq": "Mg(NO3)2 + CaS → MgS↓ + Ca(NO3)2",
    "out": [
      "MgS",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "LiF"
    ],
    "eq": "Mg(NO3)2 + 2LiF → MgF2↓ + 2LiNO3",
    "out": [
      "MgF2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_naf",
    "need": [
      "Mg(NO3)2",
      "NaF"
    ],
    "eq": "Mg(NO3)2 + 2NaF → MgF2↓ + 2NaNO3",
    "out": [
      "MgF2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "KF"
    ],
    "eq": "Mg(NO3)2 + 2KF → MgF2↓ + 2KNO3",
    "out": [
      "MgF2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "FeF2"
    ],
    "eq": "Mg(NO3)2 + FeF2 → MgF2↓ + Fe(NO3)2",
    "out": [
      "MgF2",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "CuF2"
    ],
    "eq": "Mg(NO3)2 + CuF2 → MgF2↓ + Cu(NO3)2",
    "out": [
      "MgF2",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "CoF2"
    ],
    "eq": "Mg(NO3)2 + CoF2 → MgF2↓ + Co(NO3)2",
    "out": [
      "MgF2",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "CrF3"
    ],
    "eq": "3Mg(NO3)2 + 2CrF3 → 3MgF2↓ + 2Cr(NO3)3",
    "out": [
      "MgF2",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_nif2",
    "need": [
      "Mg(NO3)2",
      "NiF2"
    ],
    "eq": "Mg(NO3)2 + NiF2 → MgF2↓ + Ni(NO3)2",
    "out": [
      "MgF2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_mnf2",
    "need": [
      "Mg(NO3)2",
      "MnF2"
    ],
    "eq": "Mg(NO3)2 + MnF2 → MgF2↓ + Mn(NO3)2",
    "out": [
      "MgF2",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Mg(NO3)2 + 2Li3PO4 → Mg3(PO4)2↓ + 6LiNO3",
    "out": [
      "Mg3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "K3PO4"
    ],
    "eq": "3Mg(NO3)2 + 2K3PO4 → Mg3(PO4)2↓ + 6KNO3",
    "out": [
      "Mg3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "Li2SO3"
    ],
    "eq": "Mg(NO3)2 + Li2SO3 → MgSO3↓ + 2LiNO3",
    "out": [
      "MgSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "K2SO3"
    ],
    "eq": "Mg(NO3)2 + K2SO3 → MgSO3↓ + 2KNO3",
    "out": [
      "MgSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "Li2S"
    ],
    "eq": "Mg(NO3)2 + Li2S → MgS↓ + 2LiNO3",
    "out": [
      "MgS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "K2S"
    ],
    "eq": "Mg(NO3)2 + K2S → MgS↓ + 2KNO3",
    "out": [
      "MgS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "BaS"
    ],
    "eq": "Mg(NO3)2 + BaS → MgS↓ + Ba(NO3)2",
    "out": [
      "MgS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Mg(NO3)2 + Li2SiO3 → MgSiO3↓ + 2LiNO3",
    "out": [
      "MgSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_na2sio3",
    "need": [
      "Mg(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Mg(NO3)2 + Na2SiO3 → MgSiO3↓ + 2NaNO3",
    "out": [
      "MgSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "K2SiO3"
    ],
    "eq": "Mg(NO3)2 + K2SiO3 → MgSiO3↓ + 2KNO3",
    "out": [
      "MgSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "GaF3"
    ],
    "eq": "3Mg(NO3)2 + 2GaF3 → 3MgF2↓ + 2Ga(NO3)3",
    "out": [
      "MgF2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mg_no3_2",
    "need": [
      "Mg(NO3)2",
      "AgF"
    ],
    "eq": "Mg(NO3)2 + 2AgF → MgF2↓ + 2AgNO3",
    "out": [
      "MgF2",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_no3_2_znf2",
    "need": [
      "Mg(NO3)2",
      "ZnF2"
    ],
    "eq": "Mg(NO3)2 + ZnF2 → MgF2↓ + Zn(NO3)2",
    "out": [
      "MgF2",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_fe_no3_2",
    "need": [
      "Fe(NO3)2",
      "CaS"
    ],
    "eq": "Fe(NO3)2 + CaS → FeS↓ + Ca(NO3)2",
    "out": [
      "FeS",
      "Ca(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_li3po4",
    "need": [
      "Fe(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Fe(NO3)2 + 2Li3PO4 → Fe3(PO4)2↓ + 6LiNO3",
    "out": [
      "Fe3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_k3po4",
    "need": [
      "Fe(NO3)2",
      "K3PO4"
    ],
    "eq": "3Fe(NO3)2 + 2K3PO4 → Fe3(PO4)2↓ + 6KNO3",
    "out": [
      "Fe3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_li2so3",
    "need": [
      "Fe(NO3)2",
      "Li2SO3"
    ],
    "eq": "Fe(NO3)2 + Li2SO3 → FeSO3↓ + 2LiNO3",
    "out": [
      "FeSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_k2so3",
    "need": [
      "Fe(NO3)2",
      "K2SO3"
    ],
    "eq": "Fe(NO3)2 + K2SO3 → FeSO3↓ + 2KNO3",
    "out": [
      "FeSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_li2s",
    "need": [
      "Fe(NO3)2",
      "Li2S"
    ],
    "eq": "Fe(NO3)2 + Li2S → FeS↓ + 2LiNO3",
    "out": [
      "FeS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_k2s",
    "need": [
      "Fe(NO3)2",
      "K2S"
    ],
    "eq": "Fe(NO3)2 + K2S → FeS↓ + 2KNO3",
    "out": [
      "FeS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_fe_no3_2",
    "need": [
      "Fe(NO3)2",
      "BaS"
    ],
    "eq": "Fe(NO3)2 + BaS → FeS↓ + Ba(NO3)2",
    "out": [
      "FeS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_li2sio3",
    "need": [
      "Fe(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Fe(NO3)2 + Li2SiO3 → FeSiO3↓ + 2LiNO3",
    "out": [
      "FeSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_na2sio3",
    "need": [
      "Fe(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Fe(NO3)2 + Na2SiO3 → FeSiO3↓ + 2NaNO3",
    "out": [
      "FeSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_2_k2sio3",
    "need": [
      "Fe(NO3)2",
      "K2SiO3"
    ],
    "eq": "Fe(NO3)2 + K2SiO3 → FeSiO3↓ + 2KNO3",
    "out": [
      "FeSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_lif",
    "need": [
      "Fe(NO3)3",
      "LiF"
    ],
    "eq": "Fe(NO3)3 + 3LiF → FeF3↓ + 3LiNO3",
    "out": [
      "FeF3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_naf",
    "need": [
      "Fe(NO3)3",
      "NaF"
    ],
    "eq": "Fe(NO3)3 + 3NaF → FeF3↓ + 3NaNO3",
    "out": [
      "FeF3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_kf",
    "need": [
      "Fe(NO3)3",
      "KF"
    ],
    "eq": "Fe(NO3)3 + 3KF → FeF3↓ + 3KNO3",
    "out": [
      "FeF3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_fef2",
    "need": [
      "Fe(NO3)3",
      "FeF2"
    ],
    "eq": "2Fe(NO3)3 + 3FeF2 → 2FeF3↓ + 3Fe(NO3)2",
    "out": [
      "FeF3",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_fe_no3_3",
    "need": [
      "Fe(NO3)3",
      "CuF2"
    ],
    "eq": "2Fe(NO3)3 + 3CuF2 → 2FeF3↓ + 3Cu(NO3)2",
    "out": [
      "FeF3",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_fe_no3_3",
    "need": [
      "Fe(NO3)3",
      "CoF2"
    ],
    "eq": "2Fe(NO3)3 + 3CoF2 → 2FeF3↓ + 3Co(NO3)2",
    "out": [
      "FeF3",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_fe_no3_3",
    "need": [
      "Fe(NO3)3",
      "CrF3"
    ],
    "eq": "Fe(NO3)3 + CrF3 → FeF3↓ + Cr(NO3)3",
    "out": [
      "FeF3",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_nif2",
    "need": [
      "Fe(NO3)3",
      "NiF2"
    ],
    "eq": "2Fe(NO3)3 + 3NiF2 → 2FeF3↓ + 3Ni(NO3)2",
    "out": [
      "FeF3",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_mnf2",
    "need": [
      "Fe(NO3)3",
      "MnF2"
    ],
    "eq": "2Fe(NO3)3 + 3MnF2 → 2FeF3↓ + 3Mn(NO3)2",
    "out": [
      "FeF3",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_li3po4",
    "need": [
      "Fe(NO3)3",
      "Li3PO4"
    ],
    "eq": "Fe(NO3)3 + Li3PO4 → FePO4↓ + 3LiNO3",
    "out": [
      "FePO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_k3po4",
    "need": [
      "Fe(NO3)3",
      "K3PO4"
    ],
    "eq": "Fe(NO3)3 + K3PO4 → FePO4↓ + 3KNO3",
    "out": [
      "FePO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_li2sio3",
    "need": [
      "Fe(NO3)3",
      "Li2SiO3"
    ],
    "eq": "2Fe(NO3)3 + 3Li2SiO3 → Fe2(SiO3)3↓ + 6LiNO3",
    "out": [
      "Fe2(SiO3)3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_na2sio3",
    "need": [
      "Fe(NO3)3",
      "Na2SiO3"
    ],
    "eq": "2Fe(NO3)3 + 3Na2SiO3 → Fe2(SiO3)3↓ + 6NaNO3",
    "out": [
      "Fe2(SiO3)3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_k2sio3",
    "need": [
      "Fe(NO3)3",
      "K2SiO3"
    ],
    "eq": "2Fe(NO3)3 + 3K2SiO3 → Fe2(SiO3)3↓ + 6KNO3",
    "out": [
      "Fe2(SiO3)3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_gaf3",
    "need": [
      "Fe(NO3)3",
      "GaF3"
    ],
    "eq": "Fe(NO3)3 + GaF3 → FeF3↓ + Ga(NO3)3",
    "out": [
      "FeF3",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_fe_no3_3",
    "need": [
      "Fe(NO3)3",
      "AgF"
    ],
    "eq": "Fe(NO3)3 + 3AgF → FeF3↓ + 3AgNO3",
    "out": [
      "FeF3",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_no3_3_znf2",
    "need": [
      "Fe(NO3)3",
      "ZnF2"
    ],
    "eq": "2Fe(NO3)3 + 3ZnF2 → 2FeF3↓ + 3Zn(NO3)2",
    "out": [
      "FeF3",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_na3po4",
    "need": [
      "Na3PO4",
      "FeBr2"
    ],
    "eq": "2Na3PO4 + 3FeBr2 → 6NaBr + Fe3(PO4)2↓",
    "out": [
      "NaBr",
      "Fe3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_na3po4",
    "need": [
      "Na3PO4",
      "FeBr3"
    ],
    "eq": "Na3PO4 + FeBr3 → 3NaBr + FePO4↓",
    "out": [
      "NaBr",
      "FePO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_nicl2",
    "need": [
      "Na3PO4",
      "NiCl2"
    ],
    "eq": "2Na3PO4 + 3NiCl2 → 6NaCl + Ni3(PO4)2↓",
    "out": [
      "NaCl",
      "Ni3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_sncl2",
    "need": [
      "Na3PO4",
      "SnCl2"
    ],
    "eq": "2Na3PO4 + 3SnCl2 → 6NaCl + Sn3(PO4)2↓",
    "out": [
      "NaCl",
      "Sn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_na3po4",
    "need": [
      "Na3PO4",
      "CaS"
    ],
    "eq": "2Na3PO4 + 3CaS → 3Na2S + Ca3(PO4)2↓",
    "out": [
      "Na2S",
      "Ca3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_na3po4",
    "need": [
      "Na3PO4",
      "Ca(HCO3)2"
    ],
    "eq": "2Na3PO4 + 3Ca(HCO3)2 → 6NaHCO3 + Ca3(PO4)2↓",
    "out": [
      "NaHCO3",
      "Ca3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_na3po4",
    "need": [
      "Na3PO4",
      "GaCl3"
    ],
    "eq": "Na3PO4 + GaCl3 → 3NaCl + GaPO4↓",
    "out": [
      "NaCl",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_na3po4",
    "need": [
      "Na3PO4",
      "GaBr3"
    ],
    "eq": "Na3PO4 + GaBr3 → 3NaBr + GaPO4↓",
    "out": [
      "NaBr",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_na3po4",
    "need": [
      "Na3PO4",
      "CrCl2"
    ],
    "eq": "2Na3PO4 + 3CrCl2 → 6NaCl + Cr3(PO4)2↓",
    "out": [
      "NaCl",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_na3po4",
    "need": [
      "Na3PO4",
      "Ba(NO3)2"
    ],
    "eq": "2Na3PO4 + 3Ba(NO3)2 → 6NaNO3 + Ba3(PO4)2↓",
    "out": [
      "NaNO3",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_sn_no3_2",
    "need": [
      "Na3PO4",
      "Sn(NO3)2"
    ],
    "eq": "2Na3PO4 + 3Sn(NO3)2 → 6NaNO3 + Sn3(PO4)2↓",
    "out": [
      "NaNO3",
      "Sn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_na3po4",
    "need": [
      "Na3PO4",
      "Cr(NO3)3"
    ],
    "eq": "Na3PO4 + Cr(NO3)3 → 3NaNO3 + CrPO4↓",
    "out": [
      "NaNO3",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_na3po4",
    "need": [
      "Na3PO4",
      "CuBr2"
    ],
    "eq": "2Na3PO4 + 3CuBr2 → 6NaBr + Cu3(PO4)2↓",
    "out": [
      "NaBr",
      "Cu3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_na3po4",
    "need": [
      "Na3PO4",
      "MnBr2"
    ],
    "eq": "2Na3PO4 + 3MnBr2 → 6NaBr + Mn3(PO4)2↓",
    "out": [
      "NaBr",
      "Mn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_na3po4",
    "need": [
      "Na3PO4",
      "AlBr3"
    ],
    "eq": "Na3PO4 + AlBr3 → 3NaBr + AlPO4↓",
    "out": [
      "NaBr",
      "AlPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_na3po4",
    "need": [
      "Na3PO4",
      "CrBr3"
    ],
    "eq": "Na3PO4 + CrBr3 → 3NaBr + CrPO4↓",
    "out": [
      "NaBr",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_na3po4",
    "need": [
      "Na3PO4",
      "BaBr2"
    ],
    "eq": "2Na3PO4 + 3BaBr2 → 6NaBr + Ba3(PO4)2↓",
    "out": [
      "NaBr",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_na3po4",
    "need": [
      "Na3PO4",
      "FeF2"
    ],
    "eq": "2Na3PO4 + 3FeF2 → 6NaF + Fe3(PO4)2↓",
    "out": [
      "NaF",
      "Fe3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_na3po4",
    "need": [
      "Na3PO4",
      "CuF2"
    ],
    "eq": "2Na3PO4 + 3CuF2 → 6NaF + Cu3(PO4)2↓",
    "out": [
      "NaF",
      "Cu3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_na3po4",
    "need": [
      "Na3PO4",
      "CoF2"
    ],
    "eq": "2Na3PO4 + 3CoF2 → 6NaF + Co3(PO4)2↓",
    "out": [
      "NaF",
      "Co3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_na3po4",
    "need": [
      "Na3PO4",
      "CrF3"
    ],
    "eq": "Na3PO4 + CrF3 → 3NaF + CrPO4↓",
    "out": [
      "NaF",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_nif2",
    "need": [
      "Na3PO4",
      "NiF2"
    ],
    "eq": "2Na3PO4 + 3NiF2 → 6NaF + Ni3(PO4)2↓",
    "out": [
      "NaF",
      "Ni3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_na3po4",
    "need": [
      "Na3PO4",
      "MnF2"
    ],
    "eq": "2Na3PO4 + 3MnF2 → 6NaF + Mn3(PO4)2↓",
    "out": [
      "NaF",
      "Mn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Ca(C2H3O2)2 → 6CH3COONa + Ca3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Ca3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Ba(C2H3O2)2 → 6CH3COONa + Ba3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Mg(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Mg(C2H3O2)2 → 6CH3COONa + Mg3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Mg3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_na3po4",
    "need": [
      "Na3PO4",
      "Al(C2H3O2)3"
    ],
    "eq": "Na3PO4 + Al(C2H3O2)3 → 3CH3COONa + AlPO4↓",
    "out": [
      "CH3COONa",
      "AlPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Fe(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Fe(C2H3O2)2 → 6CH3COONa + Fe3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Fe3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_na3po4",
    "need": [
      "Na3PO4",
      "Fe(C2H3O2)3"
    ],
    "eq": "Na3PO4 + Fe(C2H3O2)3 → 3CH3COONa + FePO4↓",
    "out": [
      "CH3COONa",
      "FePO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Cu(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Cu(C2H3O2)2 → 6CH3COONa + Cu3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Cu3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_zn_c2h3o2_2",
    "need": [
      "Na3PO4",
      "Zn(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Zn(C2H3O2)2 → 6CH3COONa + Zn3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Co(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Co(C2H3O2)2 → 6CH3COONa + Co3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Co3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_na3po4",
    "need": [
      "Na3PO4",
      "Cr(C2H3O2)3"
    ],
    "eq": "Na3PO4 + Cr(C2H3O2)3 → 3CH3COONa + CrPO4↓",
    "out": [
      "CH3COONa",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_ni_c2h3o2_2",
    "need": [
      "Na3PO4",
      "Ni(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Ni(C2H3O2)2 → 6CH3COONa + Ni3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Ni3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Mn(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Mn(C2H3O2)2 → 6CH3COONa + Mn3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Mn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_pb_c2h3o2_2",
    "need": [
      "Na3PO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Pb(C2H3O2)2 → 6CH3COONa + Pb3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Pb3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_na3po4",
    "need": [
      "Na3PO4",
      "BaS"
    ],
    "eq": "2Na3PO4 + 3BaS → 3Na2S + Ba3(PO4)2↓",
    "out": [
      "Na2S",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_na3po4",
    "need": [
      "Na3PO4",
      "GaF3"
    ],
    "eq": "Na3PO4 + GaF3 → 3NaF + GaPO4↓",
    "out": [
      "NaF",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_na3po4",
    "need": [
      "Na3PO4",
      "Ga2(SO4)3"
    ],
    "eq": "2Na3PO4 + Ga2(SO4)3 → 3Na2SO4 + 2GaPO4↓",
    "out": [
      "Na2SO4",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_na3po4",
    "need": [
      "Na3PO4",
      "Ga(C2H3O2)3"
    ],
    "eq": "Na3PO4 + Ga(C2H3O2)3 → 3CH3COONa + GaPO4↓",
    "out": [
      "CH3COONa",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na3po4",
    "need": [
      "Na3PO4",
      "AgF"
    ],
    "eq": "Na3PO4 + 3AgF → 3NaF + Ag3PO4↓",
    "out": [
      "NaF",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na3po4",
    "need": [
      "Na3PO4",
      "AgC2H3O2"
    ],
    "eq": "Na3PO4 + 3AgC2H3O2 → 3CH3COONa + Ag3PO4↓",
    "out": [
      "CH3COONa",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_na3po4",
    "need": [
      "Na3PO4",
      "CrBr2"
    ],
    "eq": "2Na3PO4 + 3CrBr2 → 6NaBr + Cr3(PO4)2↓",
    "out": [
      "NaBr",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_na3po4",
    "need": [
      "Na3PO4",
      "CrSO4"
    ],
    "eq": "2Na3PO4 + 3CrSO4 → 3Na2SO4 + Cr3(PO4)2↓",
    "out": [
      "Na2SO4",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_na3po4",
    "need": [
      "Na3PO4",
      "Cr(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Cr(C2H3O2)2 → 6CH3COONa + Cr3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_sn_c2h3o2_2",
    "need": [
      "Na3PO4",
      "Sn(C2H3O2)2"
    ],
    "eq": "2Na3PO4 + 3Sn(C2H3O2)2 → 6CH3COONa + Sn3(PO4)2↓",
    "out": [
      "CH3COONa",
      "Sn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_na3po4",
    "need": [
      "Na3PO4",
      "Cr(NO3)2"
    ],
    "eq": "2Na3PO4 + 3Cr(NO3)2 → 6NaNO3 + Cr3(PO4)2↓",
    "out": [
      "NaNO3",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na3po4_znf2",
    "need": [
      "Na3PO4",
      "ZnF2"
    ],
    "eq": "2Na3PO4 + 3ZnF2 → 6NaF + Zn3(PO4)2↓",
    "out": [
      "NaF",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ki_pb_c2h3o2_2",
    "need": [
      "KI",
      "Pb(C2H3O2)2"
    ],
    "eq": "2KI + Pb(C2H3O2)2 → 2CH3COOK + PbI2↓",
    "out": [
      "CH3COOK",
      "PbI2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbI2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ki",
    "need": [
      "KI",
      "AgF"
    ],
    "eq": "KI + AgF → KF + AgI↓",
    "out": [
      "KF",
      "AgI"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgI ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_ki",
    "need": [
      "KI",
      "AgC2H3O2"
    ],
    "eq": "KI + AgC2H3O2 → CH3COOK + AgI↓",
    "out": [
      "CH3COOK",
      "AgI"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgI ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kbr_pb_c2h3o2_2",
    "need": [
      "KBr",
      "Pb(C2H3O2)2"
    ],
    "eq": "2KBr + Pb(C2H3O2)2 → 2CH3COOK + PbBr2↓",
    "out": [
      "CH3COOK",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_kbr",
    "need": [
      "KBr",
      "AgF"
    ],
    "eq": "KBr + AgF → KF + AgBr↓",
    "out": [
      "KF",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_kbr",
    "need": [
      "KBr",
      "AgC2H3O2"
    ],
    "eq": "KBr + AgC2H3O2 → CH3COOK + AgBr↓",
    "out": [
      "CH3COOK",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nabr_pb_c2h3o2_2",
    "need": [
      "NaBr",
      "Pb(C2H3O2)2"
    ],
    "eq": "2NaBr + Pb(C2H3O2)2 → 2CH3COONa + PbBr2↓",
    "out": [
      "CH3COONa",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nabr",
    "need": [
      "NaBr",
      "AgF"
    ],
    "eq": "NaBr + AgF → NaF + AgBr↓",
    "out": [
      "NaF",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nabr",
    "need": [
      "NaBr",
      "AgC2H3O2"
    ],
    "eq": "NaBr + AgC2H3O2 → CH3COONa + AgBr↓",
    "out": [
      "CH3COONa",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k2cro4",
    "need": [
      "K2CrO4",
      "CaS"
    ],
    "eq": "K2CrO4 + CaS → K2S + CaCrO4↓",
    "out": [
      "K2S",
      "CaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_k2cro4",
    "need": [
      "K2CrO4",
      "Ca(NO3)2"
    ],
    "eq": "K2CrO4 + Ca(NO3)2 → 2KNO3 + CaCrO4↓",
    "out": [
      "KNO3",
      "CaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k2cro4",
    "need": [
      "K2CrO4",
      "Ca(HCO3)2"
    ],
    "eq": "K2CrO4 + Ca(HCO3)2 → 2KHCO3 + CaCrO4↓",
    "out": [
      "KHCO3",
      "CaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_k2cro4",
    "need": [
      "K2CrO4",
      "CaBr2"
    ],
    "eq": "K2CrO4 + CaBr2 → 2KBr + CaCrO4↓",
    "out": [
      "KBr",
      "CaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k2cro4",
    "need": [
      "K2CrO4",
      "Ba(NO3)2"
    ],
    "eq": "K2CrO4 + Ba(NO3)2 → 2KNO3 + BaCrO4↓",
    "out": [
      "KNO3",
      "BaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k2cro4",
    "need": [
      "K2CrO4",
      "BaBr2"
    ],
    "eq": "K2CrO4 + BaBr2 → 2KBr + BaCrO4↓",
    "out": [
      "KBr",
      "BaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k2cro4",
    "need": [
      "K2CrO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "K2CrO4 + Ca(C2H3O2)2 → 2CH3COOK + CaCrO4↓",
    "out": [
      "CH3COOK",
      "CaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k2cro4",
    "need": [
      "K2CrO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "K2CrO4 + Ba(C2H3O2)2 → 2CH3COOK + BaCrO4↓",
    "out": [
      "CH3COOK",
      "BaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2cro4_pb_c2h3o2_2",
    "need": [
      "K2CrO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "K2CrO4 + Pb(C2H3O2)2 → 2CH3COOK + PbCrO4↓",
    "out": [
      "CH3COOK",
      "PbCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k2cro4",
    "need": [
      "K2CrO4",
      "BaS"
    ],
    "eq": "K2CrO4 + BaS → K2S + BaCrO4↓",
    "out": [
      "K2S",
      "BaCrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2cro4",
    "need": [
      "K2CrO4",
      "AgF"
    ],
    "eq": "K2CrO4 + 2AgF → 2KF + Ag2CrO4↓",
    "out": [
      "KF",
      "Ag2CrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2cro4",
    "need": [
      "K2CrO4",
      "AgC2H3O2"
    ],
    "eq": "K2CrO4 + 2AgC2H3O2 → 2CH3COOK + Ag2CrO4↓",
    "out": [
      "CH3COOK",
      "Ag2CrO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CrO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4cl_pb_c2h3o2_2",
    "need": [
      "NH4Cl",
      "Pb(C2H3O2)2"
    ],
    "eq": "2NH4Cl + Pb(C2H3O2)2 → 2NH4C2H3O2 + PbCl2↓",
    "out": [
      "NH4C2H3O2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nh4cl",
    "need": [
      "NH4Cl",
      "AgF"
    ],
    "eq": "NH4Cl + AgF → NH4F + AgCl↓",
    "out": [
      "NH4F",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nh4cl",
    "need": [
      "NH4Cl",
      "AgC2H3O2"
    ],
    "eq": "NH4Cl + AgC2H3O2 → NH4C2H3O2 + AgCl↓",
    "out": [
      "NH4C2H3O2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_cas",
    "need": [
      "(NH4)2SO4",
      "CaS"
    ],
    "eq": "(NH4)2SO4 + CaS → (NH4)2S + CaSO4↓",
    "out": [
      "(NH4)2S",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_ca_no3_2",
    "need": [
      "(NH4)2SO4",
      "Ca(NO3)2"
    ],
    "eq": "(NH4)2SO4 + Ca(NO3)2 → 2NH4NO3 + CaSO4↓",
    "out": [
      "NH4NO3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_ca_hco3_2",
    "need": [
      "(NH4)2SO4",
      "Ca(HCO3)2"
    ],
    "eq": "(NH4)2SO4 + Ca(HCO3)2 → 2NH4HCO3 + CaSO4↓",
    "out": [
      "NH4HCO3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_cabr2",
    "need": [
      "(NH4)2SO4",
      "CaBr2"
    ],
    "eq": "(NH4)2SO4 + CaBr2 → 2NH4Br + CaSO4↓",
    "out": [
      "NH4Br",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_ba_no3_2",
    "need": [
      "(NH4)2SO4",
      "Ba(NO3)2"
    ],
    "eq": "(NH4)2SO4 + Ba(NO3)2 → 2NH4NO3 + BaSO4↓",
    "out": [
      "NH4NO3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_babr2",
    "need": [
      "(NH4)2SO4",
      "BaBr2"
    ],
    "eq": "(NH4)2SO4 + BaBr2 → 2NH4Br + BaSO4↓",
    "out": [
      "NH4Br",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_ca_c2h3o2_2",
    "need": [
      "(NH4)2SO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "(NH4)2SO4 + Ca(C2H3O2)2 → 2NH4C2H3O2 + CaSO4↓",
    "out": [
      "NH4C2H3O2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_ba_c2h3o2_2",
    "need": [
      "(NH4)2SO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "(NH4)2SO4 + Ba(C2H3O2)2 → 2NH4C2H3O2 + BaSO4↓",
    "out": [
      "NH4C2H3O2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_pb_c2h3o2_2",
    "need": [
      "(NH4)2SO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "(NH4)2SO4 + Pb(C2H3O2)2 → 2NH4C2H3O2 + PbSO4↓",
    "out": [
      "NH4C2H3O2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_bas",
    "need": [
      "(NH4)2SO4",
      "BaS"
    ],
    "eq": "(NH4)2SO4 + BaS → (NH4)2S + BaSO4↓",
    "out": [
      "(NH4)2S",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_agf",
    "need": [
      "(NH4)2SO4",
      "AgF"
    ],
    "eq": "(NH4)2SO4 + 2AgF → 2NH4F + Ag2SO4↓",
    "out": [
      "NH4F",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nh4_2so4_agc2h3o2",
    "need": [
      "(NH4)2SO4",
      "AgC2H3O2"
    ],
    "eq": "(NH4)2SO4 + 2AgC2H3O2 → 2NH4C2H3O2 + Ag2SO4↓",
    "out": [
      "NH4C2H3O2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_k2co3",
    "need": [
      "FeBr2",
      "K2CO3"
    ],
    "eq": "FeBr2 + K2CO3 → FeCO3↓ + 2KBr",
    "out": [
      "FeCO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_febr2",
    "need": [
      "FeBr2",
      "CaS"
    ],
    "eq": "FeBr2 + CaS → FeS↓ + CaBr2",
    "out": [
      "FeS",
      "CaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_li3po4",
    "need": [
      "FeBr2",
      "Li3PO4"
    ],
    "eq": "3FeBr2 + 2Li3PO4 → Fe3(PO4)2↓ + 6LiBr",
    "out": [
      "Fe3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_k3po4",
    "need": [
      "FeBr2",
      "K3PO4"
    ],
    "eq": "3FeBr2 + 2K3PO4 → Fe3(PO4)2↓ + 6KBr",
    "out": [
      "Fe3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_pb_c2h3o2_2",
    "need": [
      "FeBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "FeBr2 + Pb(C2H3O2)2 → Fe(C2H3O2)2 + PbBr2↓",
    "out": [
      "Fe(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_li2so3",
    "need": [
      "FeBr2",
      "Li2SO3"
    ],
    "eq": "FeBr2 + Li2SO3 → FeSO3↓ + 2LiBr",
    "out": [
      "FeSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_k2so3",
    "need": [
      "FeBr2",
      "K2SO3"
    ],
    "eq": "FeBr2 + K2SO3 → FeSO3↓ + 2KBr",
    "out": [
      "FeSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_li2s",
    "need": [
      "FeBr2",
      "Li2S"
    ],
    "eq": "FeBr2 + Li2S → FeS↓ + 2LiBr",
    "out": [
      "FeS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_k2s",
    "need": [
      "FeBr2",
      "K2S"
    ],
    "eq": "FeBr2 + K2S → FeS↓ + 2KBr",
    "out": [
      "FeS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_febr2",
    "need": [
      "FeBr2",
      "BaS"
    ],
    "eq": "FeBr2 + BaS → FeS↓ + BaBr2",
    "out": [
      "FeS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_li2sio3",
    "need": [
      "FeBr2",
      "Li2SiO3"
    ],
    "eq": "FeBr2 + Li2SiO3 → FeSiO3↓ + 2LiBr",
    "out": [
      "FeSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_na2sio3",
    "need": [
      "FeBr2",
      "Na2SiO3"
    ],
    "eq": "FeBr2 + Na2SiO3 → FeSiO3↓ + 2NaBr",
    "out": [
      "FeSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr2_k2sio3",
    "need": [
      "FeBr2",
      "K2SiO3"
    ],
    "eq": "FeBr2 + K2SiO3 → FeSiO3↓ + 2KBr",
    "out": [
      "FeSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_febr2",
    "need": [
      "FeBr2",
      "AgF"
    ],
    "eq": "FeBr2 + 2AgF → FeF2 + 2AgBr↓",
    "out": [
      "FeF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_febr2",
    "need": [
      "FeBr2",
      "AgC2H3O2"
    ],
    "eq": "FeBr2 + 2AgC2H3O2 → Fe(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Fe(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_lif",
    "need": [
      "FeBr3",
      "LiF"
    ],
    "eq": "FeBr3 + 3LiF → FeF3↓ + 3LiBr",
    "out": [
      "FeF3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_naf",
    "need": [
      "FeBr3",
      "NaF"
    ],
    "eq": "FeBr3 + 3NaF → FeF3↓ + 3NaBr",
    "out": [
      "FeF3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_kf",
    "need": [
      "FeBr3",
      "KF"
    ],
    "eq": "FeBr3 + 3KF → FeF3↓ + 3KBr",
    "out": [
      "FeF3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_fef2",
    "need": [
      "FeBr3",
      "FeF2"
    ],
    "eq": "2FeBr3 + 3FeF2 → 2FeF3↓ + 3FeBr2",
    "out": [
      "FeF3",
      "FeBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_febr3",
    "need": [
      "FeBr3",
      "CuF2"
    ],
    "eq": "2FeBr3 + 3CuF2 → 2FeF3↓ + 3CuBr2",
    "out": [
      "FeF3",
      "CuBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_febr3",
    "need": [
      "FeBr3",
      "CoF2"
    ],
    "eq": "2FeBr3 + 3CoF2 → 2FeF3↓ + 3CoBr2",
    "out": [
      "FeF3",
      "CoBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_febr3",
    "need": [
      "FeBr3",
      "CrF3"
    ],
    "eq": "FeBr3 + CrF3 → FeF3↓ + CrBr3",
    "out": [
      "FeF3",
      "CrBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_nif2",
    "need": [
      "FeBr3",
      "NiF2"
    ],
    "eq": "2FeBr3 + 3NiF2 → 2FeF3↓ + 3NiBr2",
    "out": [
      "FeF3",
      "NiBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_mnf2",
    "need": [
      "FeBr3",
      "MnF2"
    ],
    "eq": "2FeBr3 + 3MnF2 → 2FeF3↓ + 3MnBr2",
    "out": [
      "FeF3",
      "MnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_li3po4",
    "need": [
      "FeBr3",
      "Li3PO4"
    ],
    "eq": "FeBr3 + Li3PO4 → FePO4↓ + 3LiBr",
    "out": [
      "FePO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_k3po4",
    "need": [
      "FeBr3",
      "K3PO4"
    ],
    "eq": "FeBr3 + K3PO4 → FePO4↓ + 3KBr",
    "out": [
      "FePO4",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_pb_c2h3o2_2",
    "need": [
      "FeBr3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2FeBr3 + 3Pb(C2H3O2)2 → 2Fe(C2H3O2)3 + 3PbBr2↓",
    "out": [
      "Fe(C2H3O2)3",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_li2sio3",
    "need": [
      "FeBr3",
      "Li2SiO3"
    ],
    "eq": "2FeBr3 + 3Li2SiO3 → Fe2(SiO3)3↓ + 6LiBr",
    "out": [
      "Fe2(SiO3)3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_na2sio3",
    "need": [
      "FeBr3",
      "Na2SiO3"
    ],
    "eq": "2FeBr3 + 3Na2SiO3 → Fe2(SiO3)3↓ + 6NaBr",
    "out": [
      "Fe2(SiO3)3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_k2sio3",
    "need": [
      "FeBr3",
      "K2SiO3"
    ],
    "eq": "2FeBr3 + 3K2SiO3 → Fe2(SiO3)3↓ + 6KBr",
    "out": [
      "Fe2(SiO3)3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_gaf3",
    "need": [
      "FeBr3",
      "GaF3"
    ],
    "eq": "FeBr3 + GaF3 → FeF3↓ + GaBr3",
    "out": [
      "FeF3",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_febr3",
    "need": [
      "FeBr3",
      "AgF"
    ],
    "eq": "FeBr3 + 3AgF → FeF3↓ + 3AgBr↓",
    "out": [
      "FeF3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_febr3",
    "need": [
      "FeBr3",
      "AgC2H3O2"
    ],
    "eq": "FeBr3 + 3AgC2H3O2 → Fe(C2H3O2)3 + 3AgBr↓",
    "out": [
      "Fe(C2H3O2)3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_febr3_znf2",
    "need": [
      "FeBr3",
      "ZnF2"
    ],
    "eq": "2FeBr3 + 3ZnF2 → 2FeF3↓ + 3ZnBr2",
    "out": [
      "FeF3",
      "ZnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_nicl2",
    "need": [
      "NiCl2",
      "K2CO3"
    ],
    "eq": "NiCl2 + K2CO3 → NiCO3↓ + 2KCl",
    "out": [
      "NiCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_nicl2",
    "need": [
      "NiCl2",
      "CaS"
    ],
    "eq": "NiCl2 + CaS → NiS↓ + CaCl2",
    "out": [
      "NiS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_nicl2",
    "need": [
      "NiCl2",
      "Li3PO4"
    ],
    "eq": "3NiCl2 + 2Li3PO4 → Ni3(PO4)2↓ + 6LiCl",
    "out": [
      "Ni3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_nicl2",
    "need": [
      "NiCl2",
      "K3PO4"
    ],
    "eq": "3NiCl2 + 2K3PO4 → Ni3(PO4)2↓ + 6KCl",
    "out": [
      "Ni3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nicl2_pb_c2h3o2_2",
    "need": [
      "NiCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "NiCl2 + Pb(C2H3O2)2 → Ni(C2H3O2)2 + PbCl2↓",
    "out": [
      "Ni(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_nicl2",
    "need": [
      "NiCl2",
      "Li2SO3"
    ],
    "eq": "NiCl2 + Li2SO3 → NiSO3↓ + 2LiCl",
    "out": [
      "NiSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_nicl2",
    "need": [
      "NiCl2",
      "K2SO3"
    ],
    "eq": "NiCl2 + K2SO3 → NiSO3↓ + 2KCl",
    "out": [
      "NiSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_nicl2",
    "need": [
      "NiCl2",
      "Li2S"
    ],
    "eq": "NiCl2 + Li2S → NiS↓ + 2LiCl",
    "out": [
      "NiS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_nicl2",
    "need": [
      "NiCl2",
      "K2S"
    ],
    "eq": "NiCl2 + K2S → NiS↓ + 2KCl",
    "out": [
      "NiS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_nicl2",
    "need": [
      "NiCl2",
      "BaS"
    ],
    "eq": "NiCl2 + BaS → NiS↓ + BaCl2",
    "out": [
      "NiS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_nicl2",
    "need": [
      "NiCl2",
      "Li2SiO3"
    ],
    "eq": "NiCl2 + Li2SiO3 → NiSiO3↓ + 2LiCl",
    "out": [
      "NiSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_nicl2",
    "need": [
      "NiCl2",
      "Na2SiO3"
    ],
    "eq": "NiCl2 + Na2SiO3 → NiSiO3↓ + 2NaCl",
    "out": [
      "NiSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_nicl2",
    "need": [
      "NiCl2",
      "K2SiO3"
    ],
    "eq": "NiCl2 + K2SiO3 → NiSiO3↓ + 2KCl",
    "out": [
      "NiSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nicl2",
    "need": [
      "NiCl2",
      "AgF"
    ],
    "eq": "NiCl2 + 2AgF → NiF2 + 2AgCl↓",
    "out": [
      "NiF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nicl2",
    "need": [
      "NiCl2",
      "AgC2H3O2"
    ],
    "eq": "NiCl2 + 2AgC2H3O2 → Ni(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Ni(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_sncl2",
    "need": [
      "SnCl2",
      "K2CO3"
    ],
    "eq": "SnCl2 + K2CO3 → SnCO3↓ + 2KCl",
    "out": [
      "SnCO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_sncl2",
    "need": [
      "SnCl2",
      "CaS"
    ],
    "eq": "SnCl2 + CaS → SnS↓ + CaCl2",
    "out": [
      "SnS",
      "CaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_sncl2",
    "need": [
      "SnCl2",
      "Li3PO4"
    ],
    "eq": "3SnCl2 + 2Li3PO4 → Sn3(PO4)2↓ + 6LiCl",
    "out": [
      "Sn3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_sncl2",
    "need": [
      "SnCl2",
      "K3PO4"
    ],
    "eq": "3SnCl2 + 2K3PO4 → Sn3(PO4)2↓ + 6KCl",
    "out": [
      "Sn3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_sncl2",
    "need": [
      "SnCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "SnCl2 + Pb(C2H3O2)2 → Sn(C2H3O2)2 + PbCl2↓",
    "out": [
      "Sn(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_sncl2",
    "need": [
      "SnCl2",
      "Li2SO3"
    ],
    "eq": "SnCl2 + Li2SO3 → SnSO3↓ + 2LiCl",
    "out": [
      "SnSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_sncl2",
    "need": [
      "SnCl2",
      "K2SO3"
    ],
    "eq": "SnCl2 + K2SO3 → SnSO3↓ + 2KCl",
    "out": [
      "SnSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_sncl2",
    "need": [
      "SnCl2",
      "Li2S"
    ],
    "eq": "SnCl2 + Li2S → SnS↓ + 2LiCl",
    "out": [
      "SnS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_sncl2",
    "need": [
      "SnCl2",
      "K2S"
    ],
    "eq": "SnCl2 + K2S → SnS↓ + 2KCl",
    "out": [
      "SnS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_sncl2",
    "need": [
      "SnCl2",
      "BaS"
    ],
    "eq": "SnCl2 + BaS → SnS↓ + BaCl2",
    "out": [
      "SnS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_sncl2",
    "need": [
      "SnCl2",
      "Li2SiO3"
    ],
    "eq": "SnCl2 + Li2SiO3 → SnSiO3↓ + 2LiCl",
    "out": [
      "SnSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_sncl2",
    "need": [
      "SnCl2",
      "Na2SiO3"
    ],
    "eq": "SnCl2 + Na2SiO3 → SnSiO3↓ + 2NaCl",
    "out": [
      "SnSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_sncl2",
    "need": [
      "SnCl2",
      "K2SiO3"
    ],
    "eq": "SnCl2 + K2SiO3 → SnSiO3↓ + 2KCl",
    "out": [
      "SnSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_sncl2",
    "need": [
      "SnCl2",
      "AgF"
    ],
    "eq": "SnCl2 + 2AgF → SnF2 + 2AgCl↓",
    "out": [
      "SnF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_sncl2",
    "need": [
      "SnCl2",
      "AgC2H3O2"
    ],
    "eq": "SnCl2 + 2AgC2H3O2 → Sn(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Sn(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_niso4",
    "need": [
      "NiSO4",
      "CaS"
    ],
    "eq": "NiSO4 + CaS → NiS↓ + CaSO4↓",
    "out": [
      "NiS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_niso4",
    "need": [
      "NiSO4",
      "Ca(HCO3)2"
    ],
    "eq": "NiSO4 + Ca(HCO3)2 → Ni(HCO3)2 + CaSO4↓",
    "out": [
      "Ni(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_niso4",
    "need": [
      "NiSO4",
      "Ba(NO3)2"
    ],
    "eq": "NiSO4 + Ba(NO3)2 → Ni(NO3)2 + BaSO4↓",
    "out": [
      "Ni(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_niso4",
    "need": [
      "NiSO4",
      "BaBr2"
    ],
    "eq": "NiSO4 + BaBr2 → NiBr2 + BaSO4↓",
    "out": [
      "NiBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_niso4",
    "need": [
      "NiSO4",
      "Li3PO4"
    ],
    "eq": "3NiSO4 + 2Li3PO4 → Ni3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Ni3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_niso4",
    "need": [
      "NiSO4",
      "K3PO4"
    ],
    "eq": "3NiSO4 + 2K3PO4 → Ni3(PO4)2↓ + 3K2SO4",
    "out": [
      "Ni3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_niso4",
    "need": [
      "NiSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "NiSO4 + Ca(C2H3O2)2 → Ni(C2H3O2)2 + CaSO4↓",
    "out": [
      "Ni(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_niso4",
    "need": [
      "NiSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "NiSO4 + Ba(C2H3O2)2 → Ni(C2H3O2)2 + BaSO4↓",
    "out": [
      "Ni(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_niso4_pb_c2h3o2_2",
    "need": [
      "NiSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "NiSO4 + Pb(C2H3O2)2 → Ni(C2H3O2)2 + PbSO4↓",
    "out": [
      "Ni(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_niso4",
    "need": [
      "NiSO4",
      "Li2SO3"
    ],
    "eq": "NiSO4 + Li2SO3 → NiSO3↓ + Li2SO4",
    "out": [
      "NiSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_niso4",
    "need": [
      "NiSO4",
      "K2SO3"
    ],
    "eq": "NiSO4 + K2SO3 → NiSO3↓ + K2SO4",
    "out": [
      "NiSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_niso4",
    "need": [
      "NiSO4",
      "Li2S"
    ],
    "eq": "NiSO4 + Li2S → NiS↓ + Li2SO4",
    "out": [
      "NiS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_niso4",
    "need": [
      "NiSO4",
      "K2S"
    ],
    "eq": "NiSO4 + K2S → NiS↓ + K2SO4",
    "out": [
      "NiS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_niso4",
    "need": [
      "NiSO4",
      "BaS"
    ],
    "eq": "NiSO4 + BaS → NiS↓ + BaSO4↓",
    "out": [
      "NiS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_niso4",
    "need": [
      "NiSO4",
      "Li2SiO3"
    ],
    "eq": "NiSO4 + Li2SiO3 → NiSiO3↓ + Li2SO4",
    "out": [
      "NiSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_niso4",
    "need": [
      "NiSO4",
      "Na2SiO3"
    ],
    "eq": "NiSO4 + Na2SiO3 → NiSiO3↓ + Na2SO4",
    "out": [
      "NiSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_niso4",
    "need": [
      "NiSO4",
      "K2SiO3"
    ],
    "eq": "NiSO4 + K2SiO3 → NiSiO3↓ + K2SO4",
    "out": [
      "NiSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_niso4",
    "need": [
      "NiSO4",
      "AgF"
    ],
    "eq": "NiSO4 + 2AgF → NiF2 + Ag2SO4↓",
    "out": [
      "NiF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_niso4",
    "need": [
      "NiSO4",
      "AgC2H3O2"
    ],
    "eq": "NiSO4 + 2AgC2H3O2 → Ni(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Ni(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mnso4",
    "need": [
      "MnSO4",
      "CaS"
    ],
    "eq": "MnSO4 + CaS → MnS↓ + CaSO4↓",
    "out": [
      "MnS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_mnso4",
    "need": [
      "MnSO4",
      "Ca(HCO3)2"
    ],
    "eq": "MnSO4 + Ca(HCO3)2 → Mn(HCO3)2 + CaSO4↓",
    "out": [
      "Mn(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_mnso4",
    "need": [
      "MnSO4",
      "Ba(NO3)2"
    ],
    "eq": "MnSO4 + Ba(NO3)2 → Mn(NO3)2 + BaSO4↓",
    "out": [
      "Mn(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_mnso4",
    "need": [
      "MnSO4",
      "BaBr2"
    ],
    "eq": "MnSO4 + BaBr2 → MnBr2 + BaSO4↓",
    "out": [
      "MnBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mnso4",
    "need": [
      "MnSO4",
      "Li3PO4"
    ],
    "eq": "3MnSO4 + 2Li3PO4 → Mn3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Mn3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mnso4",
    "need": [
      "MnSO4",
      "K3PO4"
    ],
    "eq": "3MnSO4 + 2K3PO4 → Mn3(PO4)2↓ + 3K2SO4",
    "out": [
      "Mn3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_mnso4",
    "need": [
      "MnSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "MnSO4 + Ca(C2H3O2)2 → Mn(C2H3O2)2 + CaSO4↓",
    "out": [
      "Mn(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_mnso4",
    "need": [
      "MnSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "MnSO4 + Ba(C2H3O2)2 → Mn(C2H3O2)2 + BaSO4↓",
    "out": [
      "Mn(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnso4_pb_c2h3o2_2",
    "need": [
      "MnSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "MnSO4 + Pb(C2H3O2)2 → Mn(C2H3O2)2 + PbSO4↓",
    "out": [
      "Mn(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mnso4",
    "need": [
      "MnSO4",
      "Li2SO3"
    ],
    "eq": "MnSO4 + Li2SO3 → MnSO3↓ + Li2SO4",
    "out": [
      "MnSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mnso4",
    "need": [
      "MnSO4",
      "K2SO3"
    ],
    "eq": "MnSO4 + K2SO3 → MnSO3↓ + K2SO4",
    "out": [
      "MnSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mnso4",
    "need": [
      "MnSO4",
      "Li2S"
    ],
    "eq": "MnSO4 + Li2S → MnS↓ + Li2SO4",
    "out": [
      "MnS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mnso4",
    "need": [
      "MnSO4",
      "K2S"
    ],
    "eq": "MnSO4 + K2S → MnS↓ + K2SO4",
    "out": [
      "MnS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mnso4",
    "need": [
      "MnSO4",
      "BaS"
    ],
    "eq": "MnSO4 + BaS → MnS↓ + BaSO4↓",
    "out": [
      "MnS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mnso4",
    "need": [
      "MnSO4",
      "Li2SiO3"
    ],
    "eq": "MnSO4 + Li2SiO3 → MnSiO3↓ + Li2SO4",
    "out": [
      "MnSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnso4_na2sio3",
    "need": [
      "MnSO4",
      "Na2SiO3"
    ],
    "eq": "MnSO4 + Na2SiO3 → MnSiO3↓ + Na2SO4",
    "out": [
      "MnSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mnso4",
    "need": [
      "MnSO4",
      "K2SiO3"
    ],
    "eq": "MnSO4 + K2SiO3 → MnSiO3↓ + K2SO4",
    "out": [
      "MnSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mnso4",
    "need": [
      "MnSO4",
      "AgF"
    ],
    "eq": "MnSO4 + 2AgF → MnF2 + Ag2SO4↓",
    "out": [
      "MnF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mnso4",
    "need": [
      "MnSO4",
      "AgC2H3O2"
    ],
    "eq": "MnSO4 + 2AgC2H3O2 → Mn(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Mn(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_snso4",
    "need": [
      "SnSO4",
      "CaS"
    ],
    "eq": "SnSO4 + CaS → SnS↓ + CaSO4↓",
    "out": [
      "SnS",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_snso4",
    "need": [
      "SnSO4",
      "Ca(HCO3)2"
    ],
    "eq": "SnSO4 + Ca(HCO3)2 → Sn(HCO3)2 + CaSO4↓",
    "out": [
      "Sn(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_snso4",
    "need": [
      "SnSO4",
      "Ba(NO3)2"
    ],
    "eq": "SnSO4 + Ba(NO3)2 → Sn(NO3)2 + BaSO4↓",
    "out": [
      "Sn(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_snso4",
    "need": [
      "SnSO4",
      "BaBr2"
    ],
    "eq": "SnSO4 + BaBr2 → SnBr2 + BaSO4↓",
    "out": [
      "SnBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_snso4",
    "need": [
      "SnSO4",
      "Li3PO4"
    ],
    "eq": "3SnSO4 + 2Li3PO4 → Sn3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Sn3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_snso4",
    "need": [
      "SnSO4",
      "K3PO4"
    ],
    "eq": "3SnSO4 + 2K3PO4 → Sn3(PO4)2↓ + 3K2SO4",
    "out": [
      "Sn3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_snso4",
    "need": [
      "SnSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "SnSO4 + Ca(C2H3O2)2 → Sn(C2H3O2)2 + CaSO4↓",
    "out": [
      "Sn(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_snso4",
    "need": [
      "SnSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "SnSO4 + Ba(C2H3O2)2 → Sn(C2H3O2)2 + BaSO4↓",
    "out": [
      "Sn(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_snso4",
    "need": [
      "SnSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "SnSO4 + Pb(C2H3O2)2 → Sn(C2H3O2)2 + PbSO4↓",
    "out": [
      "Sn(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_snso4",
    "need": [
      "SnSO4",
      "Li2SO3"
    ],
    "eq": "SnSO4 + Li2SO3 → SnSO3↓ + Li2SO4",
    "out": [
      "SnSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_snso4",
    "need": [
      "SnSO4",
      "K2SO3"
    ],
    "eq": "SnSO4 + K2SO3 → SnSO3↓ + K2SO4",
    "out": [
      "SnSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_snso4",
    "need": [
      "SnSO4",
      "Li2S"
    ],
    "eq": "SnSO4 + Li2S → SnS↓ + Li2SO4",
    "out": [
      "SnS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_snso4",
    "need": [
      "SnSO4",
      "K2S"
    ],
    "eq": "SnSO4 + K2S → SnS↓ + K2SO4",
    "out": [
      "SnS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_snso4",
    "need": [
      "SnSO4",
      "BaS"
    ],
    "eq": "SnSO4 + BaS → SnS↓ + BaSO4↓",
    "out": [
      "SnS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_snso4",
    "need": [
      "SnSO4",
      "Li2SiO3"
    ],
    "eq": "SnSO4 + Li2SiO3 → SnSiO3↓ + Li2SO4",
    "out": [
      "SnSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_snso4",
    "need": [
      "SnSO4",
      "Na2SiO3"
    ],
    "eq": "SnSO4 + Na2SiO3 → SnSiO3↓ + Na2SO4",
    "out": [
      "SnSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_snso4",
    "need": [
      "SnSO4",
      "K2SiO3"
    ],
    "eq": "SnSO4 + K2SiO3 → SnSiO3↓ + K2SO4",
    "out": [
      "SnSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_snso4",
    "need": [
      "SnSO4",
      "AgF"
    ],
    "eq": "SnSO4 + 2AgF → SnF2 + Ag2SO4↓",
    "out": [
      "SnF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_snso4",
    "need": [
      "SnSO4",
      "AgC2H3O2"
    ],
    "eq": "SnSO4 + 2AgC2H3O2 → Sn(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Sn(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_ba_no3_2",
    "need": [
      "Al2(SO4)3",
      "Ba(NO3)2"
    ],
    "eq": "Al2(SO4)3 + 3Ba(NO3)2 → 2Al(NO3)3 + 3BaSO4↓",
    "out": [
      "Al(NO3)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_babr2",
    "need": [
      "Al2(SO4)3",
      "BaBr2"
    ],
    "eq": "Al2(SO4)3 + 3BaBr2 → 2AlBr3 + 3BaSO4↓",
    "out": [
      "AlBr3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_lif",
    "need": [
      "Al2(SO4)3",
      "LiF"
    ],
    "eq": "Al2(SO4)3 + 6LiF → 2AlF3↓ + 3Li2SO4",
    "out": [
      "AlF3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_naf",
    "need": [
      "Al2(SO4)3",
      "NaF"
    ],
    "eq": "Al2(SO4)3 + 6NaF → 2AlF3↓ + 3Na2SO4",
    "out": [
      "AlF3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_kf",
    "need": [
      "Al2(SO4)3",
      "KF"
    ],
    "eq": "Al2(SO4)3 + 6KF → 2AlF3↓ + 3K2SO4",
    "out": [
      "AlF3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_fef2",
    "need": [
      "Al2(SO4)3",
      "FeF2"
    ],
    "eq": "Al2(SO4)3 + 3FeF2 → 2AlF3↓ + 3FeSO4",
    "out": [
      "AlF3",
      "FeSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_cuf2",
    "need": [
      "Al2(SO4)3",
      "CuF2"
    ],
    "eq": "Al2(SO4)3 + 3CuF2 → 2AlF3↓ + 3CuSO4",
    "out": [
      "AlF3",
      "CuSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_cof2",
    "need": [
      "Al2(SO4)3",
      "CoF2"
    ],
    "eq": "Al2(SO4)3 + 3CoF2 → 2AlF3↓ + 3CoSO4",
    "out": [
      "AlF3",
      "CoSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_crf3",
    "need": [
      "Al2(SO4)3",
      "CrF3"
    ],
    "eq": "Al2(SO4)3 + 2CrF3 → 2AlF3↓ + Cr2(SO4)3",
    "out": [
      "AlF3",
      "Cr2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_nif2",
    "need": [
      "Al2(SO4)3",
      "NiF2"
    ],
    "eq": "Al2(SO4)3 + 3NiF2 → 2AlF3↓ + 3NiSO4",
    "out": [
      "AlF3",
      "NiSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_mnf2",
    "need": [
      "Al2(SO4)3",
      "MnF2"
    ],
    "eq": "Al2(SO4)3 + 3MnF2 → 2AlF3↓ + 3MnSO4",
    "out": [
      "AlF3",
      "MnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_li3po4",
    "need": [
      "Al2(SO4)3",
      "Li3PO4"
    ],
    "eq": "Al2(SO4)3 + 2Li3PO4 → 2AlPO4↓ + 3Li2SO4",
    "out": [
      "AlPO4",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_k3po4",
    "need": [
      "Al2(SO4)3",
      "K3PO4"
    ],
    "eq": "Al2(SO4)3 + 2K3PO4 → 2AlPO4↓ + 3K2SO4",
    "out": [
      "AlPO4",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_ca_c2h3o2_2",
    "need": [
      "Al2(SO4)3",
      "Ca(C2H3O2)2"
    ],
    "eq": "Al2(SO4)3 + 3Ca(C2H3O2)2 → 2Al(C2H3O2)3 + 3CaSO4↓",
    "out": [
      "Al(C2H3O2)3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_ba_c2h3o2_2",
    "need": [
      "Al2(SO4)3",
      "Ba(C2H3O2)2"
    ],
    "eq": "Al2(SO4)3 + 3Ba(C2H3O2)2 → 2Al(C2H3O2)3 + 3BaSO4↓",
    "out": [
      "Al(C2H3O2)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_pb_c2h3o2_2",
    "need": [
      "Al2(SO4)3",
      "Pb(C2H3O2)2"
    ],
    "eq": "Al2(SO4)3 + 3Pb(C2H3O2)2 → 2Al(C2H3O2)3 + 3PbSO4↓",
    "out": [
      "Al(C2H3O2)3",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_li2sio3",
    "need": [
      "Al2(SO4)3",
      "Li2SiO3"
    ],
    "eq": "Al2(SO4)3 + 3Li2SiO3 → Al2(SiO3)3↓ + 3Li2SO4",
    "out": [
      "Al2(SiO3)3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_na2sio3",
    "need": [
      "Al2(SO4)3",
      "Na2SiO3"
    ],
    "eq": "Al2(SO4)3 + 3Na2SiO3 → Al2(SiO3)3↓ + 3Na2SO4",
    "out": [
      "Al2(SiO3)3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_k2sio3",
    "need": [
      "Al2(SO4)3",
      "K2SiO3"
    ],
    "eq": "Al2(SO4)3 + 3K2SiO3 → Al2(SiO3)3↓ + 3K2SO4",
    "out": [
      "Al2(SiO3)3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_gaf3",
    "need": [
      "Al2(SO4)3",
      "GaF3"
    ],
    "eq": "Al2(SO4)3 + 2GaF3 → 2AlF3↓ + Ga2(SO4)3",
    "out": [
      "AlF3",
      "Ga2(SO4)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_al2_so4_3",
    "need": [
      "Al2(SO4)3",
      "AgF"
    ],
    "eq": "Al2(SO4)3 + 6AgF → 2AlF3↓ + 3Ag2SO4↓",
    "out": [
      "AlF3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_al2_so4_3",
    "need": [
      "Al2(SO4)3",
      "AgC2H3O2"
    ],
    "eq": "Al2(SO4)3 + 6AgC2H3O2 → 2Al(C2H3O2)3 + 3Ag2SO4↓",
    "out": [
      "Al(C2H3O2)3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al2_so4_3_znf2",
    "need": [
      "Al2(SO4)3",
      "ZnF2"
    ],
    "eq": "Al2(SO4)3 + 3ZnF2 → 2AlF3↓ + 3ZnSO4",
    "out": [
      "AlF3",
      "ZnSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k2co3",
    "need": [
      "K2CO3",
      "CaS"
    ],
    "eq": "K2CO3 + CaS → K2S + CaCO3↓",
    "out": [
      "K2S",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k2co3",
    "need": [
      "K2CO3",
      "Ca(HCO3)2"
    ],
    "eq": "K2CO3 + Ca(HCO3)2 → 2KHCO3 + CaCO3↓",
    "out": [
      "KHCO3",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_k2co3",
    "need": [
      "K2CO3",
      "CrCl2"
    ],
    "eq": "K2CO3 + CrCl2 → 2KCl + CrCO3↓",
    "out": [
      "KCl",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k2co3",
    "need": [
      "K2CO3",
      "Ba(NO3)2"
    ],
    "eq": "K2CO3 + Ba(NO3)2 → 2KNO3 + BaCO3↓",
    "out": [
      "KNO3",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_sn_no3_2",
    "need": [
      "K2CO3",
      "Sn(NO3)2"
    ],
    "eq": "K2CO3 + Sn(NO3)2 → 2KNO3 + SnCO3↓",
    "out": [
      "KNO3",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_k2co3",
    "need": [
      "K2CO3",
      "CuBr2"
    ],
    "eq": "K2CO3 + CuBr2 → 2KBr + CuCO3↓",
    "out": [
      "KBr",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mnbr2",
    "need": [
      "K2CO3",
      "MnBr2"
    ],
    "eq": "K2CO3 + MnBr2 → 2KBr + MnCO3↓",
    "out": [
      "KBr",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_libr",
    "need": [
      "K2CO3",
      "LiBr"
    ],
    "eq": "K2CO3 + 2LiBr → 2KBr + Li2CO3↓",
    "out": [
      "KBr",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k2co3",
    "need": [
      "K2CO3",
      "BaBr2"
    ],
    "eq": "K2CO3 + BaBr2 → 2KBr + BaCO3↓",
    "out": [
      "KBr",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_lif",
    "need": [
      "K2CO3",
      "LiF"
    ],
    "eq": "K2CO3 + 2LiF → 2KF + Li2CO3↓",
    "out": [
      "KF",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_k2co3",
    "need": [
      "K2CO3",
      "FeF2"
    ],
    "eq": "K2CO3 + FeF2 → 2KF + FeCO3↓",
    "out": [
      "KF",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_k2co3",
    "need": [
      "K2CO3",
      "CuF2"
    ],
    "eq": "K2CO3 + CuF2 → 2KF + CuCO3↓",
    "out": [
      "KF",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_k2co3",
    "need": [
      "K2CO3",
      "CoF2"
    ],
    "eq": "K2CO3 + CoF2 → 2KF + CoCO3↓",
    "out": [
      "KF",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_nif2",
    "need": [
      "K2CO3",
      "NiF2"
    ],
    "eq": "K2CO3 + NiF2 → 2KF + NiCO3↓",
    "out": [
      "KF",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mnf2",
    "need": [
      "K2CO3",
      "MnF2"
    ],
    "eq": "K2CO3 + MnF2 → 2KF + MnCO3↓",
    "out": [
      "KF",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_lino3",
    "need": [
      "K2CO3",
      "LiNO3"
    ],
    "eq": "K2CO3 + 2LiNO3 → 2KNO3 + Li2CO3↓",
    "out": [
      "KNO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_li2so4",
    "need": [
      "K2CO3",
      "Li2SO4"
    ],
    "eq": "K2CO3 + Li2SO4 → K2SO4 + Li2CO3↓",
    "out": [
      "K2SO4",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_li3po4",
    "need": [
      "K2CO3",
      "Li3PO4"
    ],
    "eq": "3K2CO3 + 2Li3PO4 → 2K3PO4 + 3Li2CO3↓",
    "out": [
      "K3PO4",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_lic2h3o2",
    "need": [
      "K2CO3",
      "LiC2H3O2"
    ],
    "eq": "K2CO3 + 2LiC2H3O2 → 2CH3COOK + Li2CO3↓",
    "out": [
      "CH3COOK",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Ca(C2H3O2)2"
    ],
    "eq": "K2CO3 + Ca(C2H3O2)2 → 2CH3COOK + CaCO3↓",
    "out": [
      "CH3COOK",
      "CaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Ba(C2H3O2)2"
    ],
    "eq": "K2CO3 + Ba(C2H3O2)2 → 2CH3COOK + BaCO3↓",
    "out": [
      "CH3COOK",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mg_c2h3o2_2",
    "need": [
      "K2CO3",
      "Mg(C2H3O2)2"
    ],
    "eq": "K2CO3 + Mg(C2H3O2)2 → 2CH3COOK + MgCO3↓",
    "out": [
      "CH3COOK",
      "MgCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Fe(C2H3O2)2"
    ],
    "eq": "K2CO3 + Fe(C2H3O2)2 → 2CH3COOK + FeCO3↓",
    "out": [
      "CH3COOK",
      "FeCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Cu(C2H3O2)2"
    ],
    "eq": "K2CO3 + Cu(C2H3O2)2 → 2CH3COOK + CuCO3↓",
    "out": [
      "CH3COOK",
      "CuCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_zn_c2h3o2_2",
    "need": [
      "K2CO3",
      "Zn(C2H3O2)2"
    ],
    "eq": "K2CO3 + Zn(C2H3O2)2 → 2CH3COOK + ZnCO3↓",
    "out": [
      "CH3COOK",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Co(C2H3O2)2"
    ],
    "eq": "K2CO3 + Co(C2H3O2)2 → 2CH3COOK + CoCO3↓",
    "out": [
      "CH3COOK",
      "CoCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_ni_c2h3o2_2",
    "need": [
      "K2CO3",
      "Ni(C2H3O2)2"
    ],
    "eq": "K2CO3 + Ni(C2H3O2)2 → 2CH3COOK + NiCO3↓",
    "out": [
      "CH3COOK",
      "NiCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_mn_c2h3o2_2",
    "need": [
      "K2CO3",
      "Mn(C2H3O2)2"
    ],
    "eq": "K2CO3 + Mn(C2H3O2)2 → 2CH3COOK + MnCO3↓",
    "out": [
      "CH3COOK",
      "MnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_pb_c2h3o2_2",
    "need": [
      "K2CO3",
      "Pb(C2H3O2)2"
    ],
    "eq": "K2CO3 + Pb(C2H3O2)2 → 2CH3COOK + PbCO3↓",
    "out": [
      "CH3COOK",
      "PbCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_li2so3",
    "need": [
      "K2CO3",
      "Li2SO3"
    ],
    "eq": "K2CO3 + Li2SO3 → K2SO3 + Li2CO3↓",
    "out": [
      "K2SO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_li2s",
    "need": [
      "K2CO3",
      "Li2S"
    ],
    "eq": "K2CO3 + Li2S → K2S + Li2CO3↓",
    "out": [
      "K2S",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k2co3",
    "need": [
      "K2CO3",
      "BaS"
    ],
    "eq": "K2CO3 + BaS → K2S + BaCO3↓",
    "out": [
      "K2S",
      "BaCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_li2sio3",
    "need": [
      "K2CO3",
      "Li2SiO3"
    ],
    "eq": "K2CO3 + Li2SiO3 → K2SiO3 + Li2CO3↓",
    "out": [
      "K2SiO3",
      "Li2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Li2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2co3",
    "need": [
      "K2CO3",
      "AgF"
    ],
    "eq": "K2CO3 + 2AgF → 2KF + Ag2CO3↓",
    "out": [
      "KF",
      "Ag2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2co3",
    "need": [
      "K2CO3",
      "AgC2H3O2"
    ],
    "eq": "K2CO3 + 2AgC2H3O2 → 2CH3COOK + Ag2CO3↓",
    "out": [
      "CH3COOK",
      "Ag2CO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2CO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_k2co3",
    "need": [
      "K2CO3",
      "CrBr2"
    ],
    "eq": "K2CO3 + CrBr2 → 2KBr + CrCO3↓",
    "out": [
      "KBr",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_k2co3",
    "need": [
      "K2CO3",
      "CrSO4"
    ],
    "eq": "K2CO3 + CrSO4 → K2SO4 + CrCO3↓",
    "out": [
      "K2SO4",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_k2co3",
    "need": [
      "K2CO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "K2CO3 + Cr(C2H3O2)2 → 2CH3COOK + CrCO3↓",
    "out": [
      "CH3COOK",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_sn_c2h3o2_2",
    "need": [
      "K2CO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "K2CO3 + Sn(C2H3O2)2 → 2CH3COOK + SnCO3↓",
    "out": [
      "CH3COOK",
      "SnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_k2co3",
    "need": [
      "K2CO3",
      "Cr(NO3)2"
    ],
    "eq": "K2CO3 + Cr(NO3)2 → 2KNO3 + CrCO3↓",
    "out": [
      "KNO3",
      "CrCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2co3_znf2",
    "need": [
      "K2CO3",
      "ZnF2"
    ],
    "eq": "K2CO3 + ZnF2 → 2KF + ZnCO3↓",
    "out": [
      "KF",
      "ZnCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnCO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cocl2",
    "need": [
      "CaS",
      "CoCl2"
    ],
    "eq": "CaS + CoCl2 → CaCl2 + CoS↓",
    "out": [
      "CaCl2",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_coso4",
    "need": [
      "CaS",
      "CoSO4"
    ],
    "eq": "CaS + CoSO4 → CaSO4↓ + CoS↓",
    "out": [
      "CaSO4",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_co_no3_2",
    "need": [
      "CaS",
      "Co(NO3)2"
    ],
    "eq": "CaS + Co(NO3)2 → Ca(NO3)2 + CoS↓",
    "out": [
      "Ca(NO3)2",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_ni_no3_2",
    "need": [
      "CaS",
      "Ni(NO3)2"
    ],
    "eq": "CaS + Ni(NO3)2 → Ca(NO3)2 + NiS↓",
    "out": [
      "Ca(NO3)2",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mn_no3_2",
    "need": [
      "CaS",
      "Mn(NO3)2"
    ],
    "eq": "CaS + Mn(NO3)2 → Ca(NO3)2 + MnS↓",
    "out": [
      "Ca(NO3)2",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_crcl2",
    "need": [
      "CaS",
      "CrCl2"
    ],
    "eq": "CaS + CrCl2 → CaCl2 + CrS↓",
    "out": [
      "CaCl2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_znbr2",
    "need": [
      "CaS",
      "ZnBr2"
    ],
    "eq": "CaS + ZnBr2 → CaBr2 + ZnS↓",
    "out": [
      "CaBr2",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mgbr2",
    "need": [
      "CaS",
      "MgBr2"
    ],
    "eq": "CaS + MgBr2 → CaBr2 + MgS↓",
    "out": [
      "CaBr2",
      "MgS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_snbr2",
    "need": [
      "CaS",
      "SnBr2"
    ],
    "eq": "CaS + SnBr2 → CaBr2 + SnS↓",
    "out": [
      "CaBr2",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_nibr2",
    "need": [
      "CaS",
      "NiBr2"
    ],
    "eq": "CaS + NiBr2 → CaBr2 + NiS↓",
    "out": [
      "CaBr2",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cobr2",
    "need": [
      "CaS",
      "CoBr2"
    ],
    "eq": "CaS + CoBr2 → CaBr2 + CoS↓",
    "out": [
      "CaBr2",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_sn_no3_2",
    "need": [
      "CaS",
      "Sn(NO3)2"
    ],
    "eq": "CaS + Sn(NO3)2 → Ca(NO3)2 + SnS↓",
    "out": [
      "Ca(NO3)2",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cubr2",
    "need": [
      "CaS",
      "CuBr2"
    ],
    "eq": "CaS + CuBr2 → CaBr2 + CuS↓",
    "out": [
      "CaBr2",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mnbr2",
    "need": [
      "CaS",
      "MnBr2"
    ],
    "eq": "CaS + MnBr2 → CaBr2 + MnS↓",
    "out": [
      "CaBr2",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_lif",
    "need": [
      "CaS",
      "LiF"
    ],
    "eq": "CaS + 2LiF → CaF2↓ + Li2S",
    "out": [
      "CaF2",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_naf",
    "need": [
      "CaS",
      "NaF"
    ],
    "eq": "CaS + 2NaF → CaF2↓ + Na2S",
    "out": [
      "CaF2",
      "Na2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_kf",
    "need": [
      "CaS",
      "KF"
    ],
    "eq": "CaS + 2KF → CaF2↓ + K2S",
    "out": [
      "CaF2",
      "K2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_fef2",
    "need": [
      "CaS",
      "FeF2"
    ],
    "eq": "CaS + FeF2 → CaF2↓ + FeS↓",
    "out": [
      "CaF2",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cuf2",
    "need": [
      "CaS",
      "CuF2"
    ],
    "eq": "CaS + CuF2 → CaF2↓ + CuS↓",
    "out": [
      "CaF2",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cof2",
    "need": [
      "CaS",
      "CoF2"
    ],
    "eq": "CaS + CoF2 → CaF2↓ + CoS↓",
    "out": [
      "CaF2",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_nif2",
    "need": [
      "CaS",
      "NiF2"
    ],
    "eq": "CaS + NiF2 → CaF2↓ + NiS↓",
    "out": [
      "CaF2",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mnf2",
    "need": [
      "CaS",
      "MnF2"
    ],
    "eq": "CaS + MnF2 → CaF2↓ + MnS↓",
    "out": [
      "CaF2",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_li2so4",
    "need": [
      "CaS",
      "Li2SO4"
    ],
    "eq": "CaS + Li2SO4 → CaSO4↓ + Li2S",
    "out": [
      "CaSO4",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_li3po4",
    "need": [
      "CaS",
      "Li3PO4"
    ],
    "eq": "3CaS + 2Li3PO4 → Ca3(PO4)2↓ + 3Li2S",
    "out": [
      "Ca3(PO4)2",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k3po4",
    "need": [
      "CaS",
      "K3PO4"
    ],
    "eq": "3CaS + 2K3PO4 → Ca3(PO4)2↓ + 3K2S",
    "out": [
      "Ca3(PO4)2",
      "K2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mg_c2h3o2_2",
    "need": [
      "CaS",
      "Mg(C2H3O2)2"
    ],
    "eq": "CaS + Mg(C2H3O2)2 → Ca(C2H3O2)2 + MgS↓",
    "out": [
      "Ca(C2H3O2)2",
      "MgS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_fe_c2h3o2_2",
    "need": [
      "CaS",
      "Fe(C2H3O2)2"
    ],
    "eq": "CaS + Fe(C2H3O2)2 → Ca(C2H3O2)2 + FeS↓",
    "out": [
      "Ca(C2H3O2)2",
      "FeS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cu_c2h3o2_2",
    "need": [
      "CaS",
      "Cu(C2H3O2)2"
    ],
    "eq": "CaS + Cu(C2H3O2)2 → Ca(C2H3O2)2 + CuS↓",
    "out": [
      "Ca(C2H3O2)2",
      "CuS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_zn_c2h3o2_2",
    "need": [
      "CaS",
      "Zn(C2H3O2)2"
    ],
    "eq": "CaS + Zn(C2H3O2)2 → Ca(C2H3O2)2 + ZnS↓",
    "out": [
      "Ca(C2H3O2)2",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_co_c2h3o2_2",
    "need": [
      "CaS",
      "Co(C2H3O2)2"
    ],
    "eq": "CaS + Co(C2H3O2)2 → Ca(C2H3O2)2 + CoS↓",
    "out": [
      "Ca(C2H3O2)2",
      "CoS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_ni_c2h3o2_2",
    "need": [
      "CaS",
      "Ni(C2H3O2)2"
    ],
    "eq": "CaS + Ni(C2H3O2)2 → Ca(C2H3O2)2 + NiS↓",
    "out": [
      "Ca(C2H3O2)2",
      "NiS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_mn_c2h3o2_2",
    "need": [
      "CaS",
      "Mn(C2H3O2)2"
    ],
    "eq": "CaS + Mn(C2H3O2)2 → Ca(C2H3O2)2 + MnS↓",
    "out": [
      "Ca(C2H3O2)2",
      "MnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_pb_c2h3o2_2",
    "need": [
      "CaS",
      "Pb(C2H3O2)2"
    ],
    "eq": "CaS + Pb(C2H3O2)2 → Ca(C2H3O2)2 + PbS↓",
    "out": [
      "Ca(C2H3O2)2",
      "PbS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_li2so3",
    "need": [
      "CaS",
      "Li2SO3"
    ],
    "eq": "CaS + Li2SO3 → CaSO3↓ + Li2S",
    "out": [
      "CaSO3",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k2so3",
    "need": [
      "CaS",
      "K2SO3"
    ],
    "eq": "CaS + K2SO3 → CaSO3↓ + K2S",
    "out": [
      "CaSO3",
      "K2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_li2sio3",
    "need": [
      "CaS",
      "Li2SiO3"
    ],
    "eq": "CaS + Li2SiO3 → CaSiO3↓ + Li2S",
    "out": [
      "CaSiO3",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_na2sio3",
    "need": [
      "CaS",
      "Na2SiO3"
    ],
    "eq": "CaS + Na2SiO3 → CaSiO3↓ + Na2S",
    "out": [
      "CaSiO3",
      "Na2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_k2sio3",
    "need": [
      "CaS",
      "K2SiO3"
    ],
    "eq": "CaS + K2SiO3 → CaSiO3↓ + K2S",
    "out": [
      "CaSiO3",
      "K2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cas",
    "need": [
      "CaS",
      "AgF"
    ],
    "eq": "CaS + 2AgF → CaF2↓ + Ag2S↓",
    "out": [
      "CaF2",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cas",
    "need": [
      "CaS",
      "AgC2H3O2"
    ],
    "eq": "CaS + 2AgC2H3O2 → Ca(C2H3O2)2 + Ag2S↓",
    "out": [
      "Ca(C2H3O2)2",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_crbr2",
    "need": [
      "CaS",
      "CrBr2"
    ],
    "eq": "CaS + CrBr2 → CaBr2 + CrS↓",
    "out": [
      "CaBr2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_crso4",
    "need": [
      "CaS",
      "CrSO4"
    ],
    "eq": "CaS + CrSO4 → CaSO4↓ + CrS↓",
    "out": [
      "CaSO4",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cr_c2h3o2_2",
    "need": [
      "CaS",
      "Cr(C2H3O2)2"
    ],
    "eq": "CaS + Cr(C2H3O2)2 → Ca(C2H3O2)2 + CrS↓",
    "out": [
      "Ca(C2H3O2)2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_sn_c2h3o2_2",
    "need": [
      "CaS",
      "Sn(C2H3O2)2"
    ],
    "eq": "CaS + Sn(C2H3O2)2 → Ca(C2H3O2)2 + SnS↓",
    "out": [
      "Ca(C2H3O2)2",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_cr_no3_2",
    "need": [
      "CaS",
      "Cr(NO3)2"
    ],
    "eq": "CaS + Cr(NO3)2 → Ca(NO3)2 + CrS↓",
    "out": [
      "Ca(NO3)2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cas_znf2",
    "need": [
      "CaS",
      "ZnF2"
    ],
    "eq": "CaS + ZnF2 → CaF2↓ + ZnS↓",
    "out": [
      "CaF2",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_lif",
    "need": [
      "Ca(NO3)2",
      "LiF"
    ],
    "eq": "Ca(NO3)2 + 2LiF → CaF2↓ + 2LiNO3",
    "out": [
      "CaF2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_naf",
    "need": [
      "Ca(NO3)2",
      "NaF"
    ],
    "eq": "Ca(NO3)2 + 2NaF → CaF2↓ + 2NaNO3",
    "out": [
      "CaF2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_kf",
    "need": [
      "Ca(NO3)2",
      "KF"
    ],
    "eq": "Ca(NO3)2 + 2KF → CaF2↓ + 2KNO3",
    "out": [
      "CaF2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_fef2",
    "need": [
      "Ca(NO3)2",
      "FeF2"
    ],
    "eq": "Ca(NO3)2 + FeF2 → CaF2↓ + Fe(NO3)2",
    "out": [
      "CaF2",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_cuf2",
    "need": [
      "Ca(NO3)2",
      "CuF2"
    ],
    "eq": "Ca(NO3)2 + CuF2 → CaF2↓ + Cu(NO3)2",
    "out": [
      "CaF2",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_cof2",
    "need": [
      "Ca(NO3)2",
      "CoF2"
    ],
    "eq": "Ca(NO3)2 + CoF2 → CaF2↓ + Co(NO3)2",
    "out": [
      "CaF2",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_crf3",
    "need": [
      "Ca(NO3)2",
      "CrF3"
    ],
    "eq": "3Ca(NO3)2 + 2CrF3 → 3CaF2↓ + 2Cr(NO3)3",
    "out": [
      "CaF2",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_nif2",
    "need": [
      "Ca(NO3)2",
      "NiF2"
    ],
    "eq": "Ca(NO3)2 + NiF2 → CaF2↓ + Ni(NO3)2",
    "out": [
      "CaF2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_mnf2",
    "need": [
      "Ca(NO3)2",
      "MnF2"
    ],
    "eq": "Ca(NO3)2 + MnF2 → CaF2↓ + Mn(NO3)2",
    "out": [
      "CaF2",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_li2so4",
    "need": [
      "Ca(NO3)2",
      "Li2SO4"
    ],
    "eq": "Ca(NO3)2 + Li2SO4 → CaSO4↓ + 2LiNO3",
    "out": [
      "CaSO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_li3po4",
    "need": [
      "Ca(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Ca(NO3)2 + 2Li3PO4 → Ca3(PO4)2↓ + 6LiNO3",
    "out": [
      "Ca3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_k3po4",
    "need": [
      "Ca(NO3)2",
      "K3PO4"
    ],
    "eq": "3Ca(NO3)2 + 2K3PO4 → Ca3(PO4)2↓ + 6KNO3",
    "out": [
      "Ca3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_li2so3",
    "need": [
      "Ca(NO3)2",
      "Li2SO3"
    ],
    "eq": "Ca(NO3)2 + Li2SO3 → CaSO3↓ + 2LiNO3",
    "out": [
      "CaSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_k2so3",
    "need": [
      "Ca(NO3)2",
      "K2SO3"
    ],
    "eq": "Ca(NO3)2 + K2SO3 → CaSO3↓ + 2KNO3",
    "out": [
      "CaSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_li2sio3",
    "need": [
      "Ca(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Ca(NO3)2 + Li2SiO3 → CaSiO3↓ + 2LiNO3",
    "out": [
      "CaSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_na2sio3",
    "need": [
      "Ca(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Ca(NO3)2 + Na2SiO3 → CaSiO3↓ + 2NaNO3",
    "out": [
      "CaSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_k2sio3",
    "need": [
      "Ca(NO3)2",
      "K2SiO3"
    ],
    "eq": "Ca(NO3)2 + K2SiO3 → CaSiO3↓ + 2KNO3",
    "out": [
      "CaSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_gaf3",
    "need": [
      "Ca(NO3)2",
      "GaF3"
    ],
    "eq": "3Ca(NO3)2 + 2GaF3 → 3CaF2↓ + 2Ga(NO3)3",
    "out": [
      "CaF2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_ga2_so4_3",
    "need": [
      "Ca(NO3)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Ca(NO3)2 + Ga2(SO4)3 → 3CaSO4↓ + 2Ga(NO3)3",
    "out": [
      "CaSO4",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ca_no3_2",
    "need": [
      "Ca(NO3)2",
      "AgF"
    ],
    "eq": "Ca(NO3)2 + 2AgF → CaF2↓ + 2AgNO3",
    "out": [
      "CaF2",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_crso4",
    "need": [
      "Ca(NO3)2",
      "CrSO4"
    ],
    "eq": "Ca(NO3)2 + CrSO4 → CaSO4↓ + Cr(NO3)2",
    "out": [
      "CaSO4",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_no3_2_znf2",
    "need": [
      "Ca(NO3)2",
      "ZnF2"
    ],
    "eq": "Ca(NO3)2 + ZnF2 → CaF2↓ + Zn(NO3)2",
    "out": [
      "CaF2",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_li3po4",
    "need": [
      "CoCl2",
      "Li3PO4"
    ],
    "eq": "3CoCl2 + 2Li3PO4 → Co3(PO4)2↓ + 6LiCl",
    "out": [
      "Co3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_k3po4",
    "need": [
      "CoCl2",
      "K3PO4"
    ],
    "eq": "3CoCl2 + 2K3PO4 → Co3(PO4)2↓ + 6KCl",
    "out": [
      "Co3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_pb_c2h3o2_2",
    "need": [
      "CoCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CoCl2 + Pb(C2H3O2)2 → Co(C2H3O2)2 + PbCl2↓",
    "out": [
      "Co(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_li2so3",
    "need": [
      "CoCl2",
      "Li2SO3"
    ],
    "eq": "CoCl2 + Li2SO3 → CoSO3↓ + 2LiCl",
    "out": [
      "CoSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_k2so3",
    "need": [
      "CoCl2",
      "K2SO3"
    ],
    "eq": "CoCl2 + K2SO3 → CoSO3↓ + 2KCl",
    "out": [
      "CoSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_li2s",
    "need": [
      "CoCl2",
      "Li2S"
    ],
    "eq": "CoCl2 + Li2S → CoS↓ + 2LiCl",
    "out": [
      "CoS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_k2s",
    "need": [
      "CoCl2",
      "K2S"
    ],
    "eq": "CoCl2 + K2S → CoS↓ + 2KCl",
    "out": [
      "CoS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cocl2",
    "need": [
      "CoCl2",
      "BaS"
    ],
    "eq": "CoCl2 + BaS → CoS↓ + BaCl2",
    "out": [
      "CoS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_li2sio3",
    "need": [
      "CoCl2",
      "Li2SiO3"
    ],
    "eq": "CoCl2 + Li2SiO3 → CoSiO3↓ + 2LiCl",
    "out": [
      "CoSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_na2sio3",
    "need": [
      "CoCl2",
      "Na2SiO3"
    ],
    "eq": "CoCl2 + Na2SiO3 → CoSiO3↓ + 2NaCl",
    "out": [
      "CoSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cocl2_k2sio3",
    "need": [
      "CoCl2",
      "K2SiO3"
    ],
    "eq": "CoCl2 + K2SiO3 → CoSiO3↓ + 2KCl",
    "out": [
      "CoSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cocl2",
    "need": [
      "CoCl2",
      "AgF"
    ],
    "eq": "CoCl2 + 2AgF → CoF2 + 2AgCl↓",
    "out": [
      "CoF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cocl2",
    "need": [
      "CoCl2",
      "AgC2H3O2"
    ],
    "eq": "CoCl2 + 2AgC2H3O2 → Co(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Co(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_coso4",
    "need": [
      "CoSO4",
      "Ca(HCO3)2"
    ],
    "eq": "CoSO4 + Ca(HCO3)2 → Co(HCO3)2 + CaSO4↓",
    "out": [
      "Co(HCO3)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_coso4",
    "need": [
      "CoSO4",
      "Ba(NO3)2"
    ],
    "eq": "CoSO4 + Ba(NO3)2 → Co(NO3)2 + BaSO4↓",
    "out": [
      "Co(NO3)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_coso4",
    "need": [
      "CoSO4",
      "BaBr2"
    ],
    "eq": "CoSO4 + BaBr2 → CoBr2 + BaSO4↓",
    "out": [
      "CoBr2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_li3po4",
    "need": [
      "CoSO4",
      "Li3PO4"
    ],
    "eq": "3CoSO4 + 2Li3PO4 → Co3(PO4)2↓ + 3Li2SO4",
    "out": [
      "Co3(PO4)2",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_k3po4",
    "need": [
      "CoSO4",
      "K3PO4"
    ],
    "eq": "3CoSO4 + 2K3PO4 → Co3(PO4)2↓ + 3K2SO4",
    "out": [
      "Co3(PO4)2",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_coso4",
    "need": [
      "CoSO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "CoSO4 + Ca(C2H3O2)2 → Co(C2H3O2)2 + CaSO4↓",
    "out": [
      "Co(C2H3O2)2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_coso4",
    "need": [
      "CoSO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "CoSO4 + Ba(C2H3O2)2 → Co(C2H3O2)2 + BaSO4↓",
    "out": [
      "Co(C2H3O2)2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_pb_c2h3o2_2",
    "need": [
      "CoSO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "CoSO4 + Pb(C2H3O2)2 → Co(C2H3O2)2 + PbSO4↓",
    "out": [
      "Co(C2H3O2)2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_li2so3",
    "need": [
      "CoSO4",
      "Li2SO3"
    ],
    "eq": "CoSO4 + Li2SO3 → CoSO3↓ + Li2SO4",
    "out": [
      "CoSO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_k2so3",
    "need": [
      "CoSO4",
      "K2SO3"
    ],
    "eq": "CoSO4 + K2SO3 → CoSO3↓ + K2SO4",
    "out": [
      "CoSO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_li2s",
    "need": [
      "CoSO4",
      "Li2S"
    ],
    "eq": "CoSO4 + Li2S → CoS↓ + Li2SO4",
    "out": [
      "CoS",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_k2s",
    "need": [
      "CoSO4",
      "K2S"
    ],
    "eq": "CoSO4 + K2S → CoS↓ + K2SO4",
    "out": [
      "CoS",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_coso4",
    "need": [
      "CoSO4",
      "BaS"
    ],
    "eq": "CoSO4 + BaS → CoS↓ + BaSO4↓",
    "out": [
      "CoS",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_li2sio3",
    "need": [
      "CoSO4",
      "Li2SiO3"
    ],
    "eq": "CoSO4 + Li2SiO3 → CoSiO3↓ + Li2SO4",
    "out": [
      "CoSiO3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_na2sio3",
    "need": [
      "CoSO4",
      "Na2SiO3"
    ],
    "eq": "CoSO4 + Na2SiO3 → CoSiO3↓ + Na2SO4",
    "out": [
      "CoSiO3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_coso4_k2sio3",
    "need": [
      "CoSO4",
      "K2SiO3"
    ],
    "eq": "CoSO4 + K2SiO3 → CoSiO3↓ + K2SO4",
    "out": [
      "CoSiO3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_coso4",
    "need": [
      "CoSO4",
      "AgF"
    ],
    "eq": "CoSO4 + 2AgF → CoF2 + Ag2SO4↓",
    "out": [
      "CoF2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_coso4",
    "need": [
      "CoSO4",
      "AgC2H3O2"
    ],
    "eq": "CoSO4 + 2AgC2H3O2 → Co(C2H3O2)2 + Ag2SO4↓",
    "out": [
      "Co(C2H3O2)2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_li3po4",
    "need": [
      "Co(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Co(NO3)2 + 2Li3PO4 → Co3(PO4)2↓ + 6LiNO3",
    "out": [
      "Co3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_k3po4",
    "need": [
      "Co(NO3)2",
      "K3PO4"
    ],
    "eq": "3Co(NO3)2 + 2K3PO4 → Co3(PO4)2↓ + 6KNO3",
    "out": [
      "Co3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_li2so3",
    "need": [
      "Co(NO3)2",
      "Li2SO3"
    ],
    "eq": "Co(NO3)2 + Li2SO3 → CoSO3↓ + 2LiNO3",
    "out": [
      "CoSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_k2so3",
    "need": [
      "Co(NO3)2",
      "K2SO3"
    ],
    "eq": "Co(NO3)2 + K2SO3 → CoSO3↓ + 2KNO3",
    "out": [
      "CoSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_li2s",
    "need": [
      "Co(NO3)2",
      "Li2S"
    ],
    "eq": "Co(NO3)2 + Li2S → CoS↓ + 2LiNO3",
    "out": [
      "CoS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_k2s",
    "need": [
      "Co(NO3)2",
      "K2S"
    ],
    "eq": "Co(NO3)2 + K2S → CoS↓ + 2KNO3",
    "out": [
      "CoS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_co_no3_2",
    "need": [
      "Co(NO3)2",
      "BaS"
    ],
    "eq": "Co(NO3)2 + BaS → CoS↓ + Ba(NO3)2",
    "out": [
      "CoS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_li2sio3",
    "need": [
      "Co(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Co(NO3)2 + Li2SiO3 → CoSiO3↓ + 2LiNO3",
    "out": [
      "CoSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_na2sio3",
    "need": [
      "Co(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Co(NO3)2 + Na2SiO3 → CoSiO3↓ + 2NaNO3",
    "out": [
      "CoSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_no3_2_k2sio3",
    "need": [
      "Co(NO3)2",
      "K2SiO3"
    ],
    "eq": "Co(NO3)2 + K2SiO3 → CoSiO3↓ + 2KNO3",
    "out": [
      "CoSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_lif",
    "need": [
      "Al(NO3)3",
      "LiF"
    ],
    "eq": "Al(NO3)3 + 3LiF → AlF3↓ + 3LiNO3",
    "out": [
      "AlF3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_naf",
    "need": [
      "Al(NO3)3",
      "NaF"
    ],
    "eq": "Al(NO3)3 + 3NaF → AlF3↓ + 3NaNO3",
    "out": [
      "AlF3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_kf",
    "need": [
      "Al(NO3)3",
      "KF"
    ],
    "eq": "Al(NO3)3 + 3KF → AlF3↓ + 3KNO3",
    "out": [
      "AlF3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_fef2",
    "need": [
      "Al(NO3)3",
      "FeF2"
    ],
    "eq": "2Al(NO3)3 + 3FeF2 → 2AlF3↓ + 3Fe(NO3)2",
    "out": [
      "AlF3",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_cuf2",
    "need": [
      "Al(NO3)3",
      "CuF2"
    ],
    "eq": "2Al(NO3)3 + 3CuF2 → 2AlF3↓ + 3Cu(NO3)2",
    "out": [
      "AlF3",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_cof2",
    "need": [
      "Al(NO3)3",
      "CoF2"
    ],
    "eq": "2Al(NO3)3 + 3CoF2 → 2AlF3↓ + 3Co(NO3)2",
    "out": [
      "AlF3",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_crf3",
    "need": [
      "Al(NO3)3",
      "CrF3"
    ],
    "eq": "Al(NO3)3 + CrF3 → AlF3↓ + Cr(NO3)3",
    "out": [
      "AlF3",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_nif2",
    "need": [
      "Al(NO3)3",
      "NiF2"
    ],
    "eq": "2Al(NO3)3 + 3NiF2 → 2AlF3↓ + 3Ni(NO3)2",
    "out": [
      "AlF3",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_mnf2",
    "need": [
      "Al(NO3)3",
      "MnF2"
    ],
    "eq": "2Al(NO3)3 + 3MnF2 → 2AlF3↓ + 3Mn(NO3)2",
    "out": [
      "AlF3",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_li3po4",
    "need": [
      "Al(NO3)3",
      "Li3PO4"
    ],
    "eq": "Al(NO3)3 + Li3PO4 → AlPO4↓ + 3LiNO3",
    "out": [
      "AlPO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_k3po4",
    "need": [
      "Al(NO3)3",
      "K3PO4"
    ],
    "eq": "Al(NO3)3 + K3PO4 → AlPO4↓ + 3KNO3",
    "out": [
      "AlPO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_li2sio3",
    "need": [
      "Al(NO3)3",
      "Li2SiO3"
    ],
    "eq": "2Al(NO3)3 + 3Li2SiO3 → Al2(SiO3)3↓ + 6LiNO3",
    "out": [
      "Al2(SiO3)3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_na2sio3",
    "need": [
      "Al(NO3)3",
      "Na2SiO3"
    ],
    "eq": "2Al(NO3)3 + 3Na2SiO3 → Al2(SiO3)3↓ + 6NaNO3",
    "out": [
      "Al2(SiO3)3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_k2sio3",
    "need": [
      "Al(NO3)3",
      "K2SiO3"
    ],
    "eq": "2Al(NO3)3 + 3K2SiO3 → Al2(SiO3)3↓ + 6KNO3",
    "out": [
      "Al2(SiO3)3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_gaf3",
    "need": [
      "Al(NO3)3",
      "GaF3"
    ],
    "eq": "Al(NO3)3 + GaF3 → AlF3↓ + Ga(NO3)3",
    "out": [
      "AlF3",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_al_no3_3",
    "need": [
      "Al(NO3)3",
      "AgF"
    ],
    "eq": "Al(NO3)3 + 3AgF → AlF3↓ + 3AgNO3",
    "out": [
      "AlF3",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_no3_3_znf2",
    "need": [
      "Al(NO3)3",
      "ZnF2"
    ],
    "eq": "2Al(NO3)3 + 3ZnF2 → 2AlF3↓ + 3Zn(NO3)2",
    "out": [
      "AlF3",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Ni(NO3)2 + 2Li3PO4 → Ni3(PO4)2↓ + 6LiNO3",
    "out": [
      "Ni3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "K3PO4"
    ],
    "eq": "3Ni(NO3)2 + 2K3PO4 → Ni3(PO4)2↓ + 6KNO3",
    "out": [
      "Ni3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "Li2SO3"
    ],
    "eq": "Ni(NO3)2 + Li2SO3 → NiSO3↓ + 2LiNO3",
    "out": [
      "NiSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "K2SO3"
    ],
    "eq": "Ni(NO3)2 + K2SO3 → NiSO3↓ + 2KNO3",
    "out": [
      "NiSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "Li2S"
    ],
    "eq": "Ni(NO3)2 + Li2S → NiS↓ + 2LiNO3",
    "out": [
      "NiS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "K2S"
    ],
    "eq": "Ni(NO3)2 + K2S → NiS↓ + 2KNO3",
    "out": [
      "NiS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "BaS"
    ],
    "eq": "Ni(NO3)2 + BaS → NiS↓ + Ba(NO3)2",
    "out": [
      "NiS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Ni(NO3)2 + Li2SiO3 → NiSiO3↓ + 2LiNO3",
    "out": [
      "NiSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Ni(NO3)2 + Na2SiO3 → NiSiO3↓ + 2NaNO3",
    "out": [
      "NiSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_ni_no3_2",
    "need": [
      "Ni(NO3)2",
      "K2SiO3"
    ],
    "eq": "Ni(NO3)2 + K2SiO3 → NiSiO3↓ + 2KNO3",
    "out": [
      "NiSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Mn(NO3)2 + 2Li3PO4 → Mn3(PO4)2↓ + 6LiNO3",
    "out": [
      "Mn3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "K3PO4"
    ],
    "eq": "3Mn(NO3)2 + 2K3PO4 → Mn3(PO4)2↓ + 6KNO3",
    "out": [
      "Mn3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "Li2SO3"
    ],
    "eq": "Mn(NO3)2 + Li2SO3 → MnSO3↓ + 2LiNO3",
    "out": [
      "MnSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "K2SO3"
    ],
    "eq": "Mn(NO3)2 + K2SO3 → MnSO3↓ + 2KNO3",
    "out": [
      "MnSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "Li2S"
    ],
    "eq": "Mn(NO3)2 + Li2S → MnS↓ + 2LiNO3",
    "out": [
      "MnS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "K2S"
    ],
    "eq": "Mn(NO3)2 + K2S → MnS↓ + 2KNO3",
    "out": [
      "MnS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "BaS"
    ],
    "eq": "Mn(NO3)2 + BaS → MnS↓ + Ba(NO3)2",
    "out": [
      "MnS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Mn(NO3)2 + Li2SiO3 → MnSiO3↓ + 2LiNO3",
    "out": [
      "MnSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_no3_2_na2sio3",
    "need": [
      "Mn(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Mn(NO3)2 + Na2SiO3 → MnSiO3↓ + 2NaNO3",
    "out": [
      "MnSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mn_no3_2",
    "need": [
      "Mn(NO3)2",
      "K2SiO3"
    ],
    "eq": "Mn(NO3)2 + K2SiO3 → MnSiO3↓ + 2KNO3",
    "out": [
      "MnSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "Ba(NO3)2"
    ],
    "eq": "Cr2(SO4)3 + 3Ba(NO3)2 → 2Cr(NO3)3 + 3BaSO4↓",
    "out": [
      "Cr(NO3)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "BaBr2"
    ],
    "eq": "Cr2(SO4)3 + 3BaBr2 → 2CrBr3 + 3BaSO4↓",
    "out": [
      "CrBr3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_li3po4",
    "need": [
      "Cr2(SO4)3",
      "Li3PO4"
    ],
    "eq": "Cr2(SO4)3 + 2Li3PO4 → 2CrPO4↓ + 3Li2SO4",
    "out": [
      "CrPO4",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_k3po4",
    "need": [
      "Cr2(SO4)3",
      "K3PO4"
    ],
    "eq": "Cr2(SO4)3 + 2K3PO4 → 2CrPO4↓ + 3K2SO4",
    "out": [
      "CrPO4",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "Ca(C2H3O2)2"
    ],
    "eq": "Cr2(SO4)3 + 3Ca(C2H3O2)2 → 2Cr(C2H3O2)3 + 3CaSO4↓",
    "out": [
      "Cr(C2H3O2)3",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "Ba(C2H3O2)2"
    ],
    "eq": "Cr2(SO4)3 + 3Ba(C2H3O2)2 → 2Cr(C2H3O2)3 + 3BaSO4↓",
    "out": [
      "Cr(C2H3O2)3",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_pb_c2h3o2_2",
    "need": [
      "Cr2(SO4)3",
      "Pb(C2H3O2)2"
    ],
    "eq": "Cr2(SO4)3 + 3Pb(C2H3O2)2 → 2Cr(C2H3O2)3 + 3PbSO4↓",
    "out": [
      "Cr(C2H3O2)3",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_li2sio3",
    "need": [
      "Cr2(SO4)3",
      "Li2SiO3"
    ],
    "eq": "Cr2(SO4)3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 3Li2SO4",
    "out": [
      "Cr2(SiO3)3",
      "Li2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_na2sio3",
    "need": [
      "Cr2(SO4)3",
      "Na2SiO3"
    ],
    "eq": "Cr2(SO4)3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 3Na2SO4",
    "out": [
      "Cr2(SiO3)3",
      "Na2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr2_so4_3_k2sio3",
    "need": [
      "Cr2(SO4)3",
      "K2SiO3"
    ],
    "eq": "Cr2(SO4)3 + 3K2SiO3 → Cr2(SiO3)3↓ + 3K2SO4",
    "out": [
      "Cr2(SiO3)3",
      "K2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "AgF"
    ],
    "eq": "Cr2(SO4)3 + 6AgF → 2CrF3 + 3Ag2SO4↓",
    "out": [
      "CrF3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cr2_so4_3",
    "need": [
      "Cr2(SO4)3",
      "AgC2H3O2"
    ],
    "eq": "Cr2(SO4)3 + 6AgC2H3O2 → 2Cr(C2H3O2)3 + 3Ag2SO4↓",
    "out": [
      "Cr(C2H3O2)3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_lif",
    "need": [
      "Ca(HCO3)2",
      "LiF"
    ],
    "eq": "Ca(HCO3)2 + 2LiF → CaF2↓ + 2LiHCO3",
    "out": [
      "CaF2",
      "LiHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_naf",
    "need": [
      "Ca(HCO3)2",
      "NaF"
    ],
    "eq": "Ca(HCO3)2 + 2NaF → CaF2↓ + 2NaHCO3",
    "out": [
      "CaF2",
      "NaHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_kf",
    "need": [
      "Ca(HCO3)2",
      "KF"
    ],
    "eq": "Ca(HCO3)2 + 2KF → CaF2↓ + 2KHCO3",
    "out": [
      "CaF2",
      "KHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_fef2",
    "need": [
      "Ca(HCO3)2",
      "FeF2"
    ],
    "eq": "Ca(HCO3)2 + FeF2 → CaF2↓ + Fe(HCO3)2",
    "out": [
      "CaF2",
      "Fe(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_cuf2",
    "need": [
      "Ca(HCO3)2",
      "CuF2"
    ],
    "eq": "Ca(HCO3)2 + CuF2 → CaF2↓ + Cu(HCO3)2",
    "out": [
      "CaF2",
      "Cu(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_cof2",
    "need": [
      "Ca(HCO3)2",
      "CoF2"
    ],
    "eq": "Ca(HCO3)2 + CoF2 → CaF2↓ + Co(HCO3)2",
    "out": [
      "CaF2",
      "Co(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_nif2",
    "need": [
      "Ca(HCO3)2",
      "NiF2"
    ],
    "eq": "Ca(HCO3)2 + NiF2 → CaF2↓ + Ni(HCO3)2",
    "out": [
      "CaF2",
      "Ni(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_mnf2",
    "need": [
      "Ca(HCO3)2",
      "MnF2"
    ],
    "eq": "Ca(HCO3)2 + MnF2 → CaF2↓ + Mn(HCO3)2",
    "out": [
      "CaF2",
      "Mn(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_li2so4",
    "need": [
      "Ca(HCO3)2",
      "Li2SO4"
    ],
    "eq": "Ca(HCO3)2 + Li2SO4 → CaSO4↓ + 2LiHCO3",
    "out": [
      "CaSO4",
      "LiHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_li3po4",
    "need": [
      "Ca(HCO3)2",
      "Li3PO4"
    ],
    "eq": "3Ca(HCO3)2 + 2Li3PO4 → Ca3(PO4)2↓ + 6LiHCO3",
    "out": [
      "Ca3(PO4)2",
      "LiHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k3po4",
    "need": [
      "Ca(HCO3)2",
      "K3PO4"
    ],
    "eq": "3Ca(HCO3)2 + 2K3PO4 → Ca3(PO4)2↓ + 6KHCO3",
    "out": [
      "Ca3(PO4)2",
      "KHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_li2so3",
    "need": [
      "Ca(HCO3)2",
      "Li2SO3"
    ],
    "eq": "Ca(HCO3)2 + Li2SO3 → CaSO3↓ + 2LiHCO3",
    "out": [
      "CaSO3",
      "LiHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k2so3",
    "need": [
      "Ca(HCO3)2",
      "K2SO3"
    ],
    "eq": "Ca(HCO3)2 + K2SO3 → CaSO3↓ + 2KHCO3",
    "out": [
      "CaSO3",
      "KHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_li2sio3",
    "need": [
      "Ca(HCO3)2",
      "Li2SiO3"
    ],
    "eq": "Ca(HCO3)2 + Li2SiO3 → CaSiO3↓ + 2LiHCO3",
    "out": [
      "CaSiO3",
      "LiHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_na2sio3",
    "need": [
      "Ca(HCO3)2",
      "Na2SiO3"
    ],
    "eq": "Ca(HCO3)2 + Na2SiO3 → CaSiO3↓ + 2NaHCO3",
    "out": [
      "CaSiO3",
      "NaHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_k2sio3",
    "need": [
      "Ca(HCO3)2",
      "K2SiO3"
    ],
    "eq": "Ca(HCO3)2 + K2SiO3 → CaSiO3↓ + 2KHCO3",
    "out": [
      "CaSiO3",
      "KHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ca_hco3_2",
    "need": [
      "Ca(HCO3)2",
      "AgF"
    ],
    "eq": "Ca(HCO3)2 + 2AgF → CaF2↓ + 2AgHCO3",
    "out": [
      "CaF2",
      "AgHCO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_crso4",
    "need": [
      "Ca(HCO3)2",
      "CrSO4"
    ],
    "eq": "Ca(HCO3)2 + CrSO4 → CaSO4↓ + Cr(HCO3)2",
    "out": [
      "CaSO4",
      "Cr(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_hco3_2_znf2",
    "need": [
      "Ca(HCO3)2",
      "ZnF2"
    ],
    "eq": "Ca(HCO3)2 + ZnF2 → CaF2↓ + Zn(HCO3)2",
    "out": [
      "CaF2",
      "Zn(HCO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nai_pb_c2h3o2_2",
    "need": [
      "NaI",
      "Pb(C2H3O2)2"
    ],
    "eq": "2NaI + Pb(C2H3O2)2 → 2CH3COONa + PbI2↓",
    "out": [
      "CH3COONa",
      "PbI2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbI2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nai",
    "need": [
      "NaI",
      "AgF"
    ],
    "eq": "NaI + AgF → NaF + AgI↓",
    "out": [
      "NaF",
      "AgI"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgI ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nai",
    "need": [
      "NaI",
      "AgC2H3O2"
    ],
    "eq": "NaI + AgC2H3O2 → CH3COONa + AgI↓",
    "out": [
      "CH3COONa",
      "AgI"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgI ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_li3po4",
    "need": [
      "GaCl3",
      "Li3PO4"
    ],
    "eq": "GaCl3 + Li3PO4 → GaPO4↓ + 3LiCl",
    "out": [
      "GaPO4",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_k3po4",
    "need": [
      "GaCl3",
      "K3PO4"
    ],
    "eq": "GaCl3 + K3PO4 → GaPO4↓ + 3KCl",
    "out": [
      "GaPO4",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_pb_c2h3o2_2",
    "need": [
      "GaCl3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2GaCl3 + 3Pb(C2H3O2)2 → 2Ga(C2H3O2)3 + 3PbCl2↓",
    "out": [
      "Ga(C2H3O2)3",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_li2sio3",
    "need": [
      "GaCl3",
      "Li2SiO3"
    ],
    "eq": "2GaCl3 + 3Li2SiO3 → Ga2(SiO3)3↓ + 6LiCl",
    "out": [
      "Ga2(SiO3)3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_na2sio3",
    "need": [
      "GaCl3",
      "Na2SiO3"
    ],
    "eq": "2GaCl3 + 3Na2SiO3 → Ga2(SiO3)3↓ + 6NaCl",
    "out": [
      "Ga2(SiO3)3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gacl3_k2sio3",
    "need": [
      "GaCl3",
      "K2SiO3"
    ],
    "eq": "2GaCl3 + 3K2SiO3 → Ga2(SiO3)3↓ + 6KCl",
    "out": [
      "Ga2(SiO3)3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_gacl3",
    "need": [
      "GaCl3",
      "AgF"
    ],
    "eq": "GaCl3 + 3AgF → GaF3 + 3AgCl↓",
    "out": [
      "GaF3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_gacl3",
    "need": [
      "GaCl3",
      "AgC2H3O2"
    ],
    "eq": "GaCl3 + 3AgC2H3O2 → Ga(C2H3O2)3 + 3AgCl↓",
    "out": [
      "Ga(C2H3O2)3",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_li3po4",
    "need": [
      "GaBr3",
      "Li3PO4"
    ],
    "eq": "GaBr3 + Li3PO4 → GaPO4↓ + 3LiBr",
    "out": [
      "GaPO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_k3po4",
    "need": [
      "GaBr3",
      "K3PO4"
    ],
    "eq": "GaBr3 + K3PO4 → GaPO4↓ + 3KBr",
    "out": [
      "GaPO4",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_pb_c2h3o2_2",
    "need": [
      "GaBr3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2GaBr3 + 3Pb(C2H3O2)2 → 2Ga(C2H3O2)3 + 3PbBr2↓",
    "out": [
      "Ga(C2H3O2)3",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_li2sio3",
    "need": [
      "GaBr3",
      "Li2SiO3"
    ],
    "eq": "2GaBr3 + 3Li2SiO3 → Ga2(SiO3)3↓ + 6LiBr",
    "out": [
      "Ga2(SiO3)3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_na2sio3",
    "need": [
      "GaBr3",
      "Na2SiO3"
    ],
    "eq": "2GaBr3 + 3Na2SiO3 → Ga2(SiO3)3↓ + 6NaBr",
    "out": [
      "Ga2(SiO3)3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gabr3_k2sio3",
    "need": [
      "GaBr3",
      "K2SiO3"
    ],
    "eq": "2GaBr3 + 3K2SiO3 → Ga2(SiO3)3↓ + 6KBr",
    "out": [
      "Ga2(SiO3)3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_gabr3",
    "need": [
      "GaBr3",
      "AgF"
    ],
    "eq": "GaBr3 + 3AgF → GaF3 + 3AgBr↓",
    "out": [
      "GaF3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_gabr3",
    "need": [
      "GaBr3",
      "AgC2H3O2"
    ],
    "eq": "GaBr3 + 3AgC2H3O2 → Ga(C2H3O2)3 + 3AgBr↓",
    "out": [
      "Ga(C2H3O2)3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_li3po4",
    "need": [
      "CrCl2",
      "Li3PO4"
    ],
    "eq": "3CrCl2 + 2Li3PO4 → Cr3(PO4)2↓ + 6LiCl",
    "out": [
      "Cr3(PO4)2",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_k3po4",
    "need": [
      "CrCl2",
      "K3PO4"
    ],
    "eq": "3CrCl2 + 2K3PO4 → Cr3(PO4)2↓ + 6KCl",
    "out": [
      "Cr3(PO4)2",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_pb_c2h3o2_2",
    "need": [
      "CrCl2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CrCl2 + Pb(C2H3O2)2 → Cr(C2H3O2)2 + PbCl2↓",
    "out": [
      "Cr(C2H3O2)2",
      "PbCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbCl2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_li2so3",
    "need": [
      "CrCl2",
      "Li2SO3"
    ],
    "eq": "CrCl2 + Li2SO3 → CrSO3↓ + 2LiCl",
    "out": [
      "CrSO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_k2so3",
    "need": [
      "CrCl2",
      "K2SO3"
    ],
    "eq": "CrCl2 + K2SO3 → CrSO3↓ + 2KCl",
    "out": [
      "CrSO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_li2s",
    "need": [
      "CrCl2",
      "Li2S"
    ],
    "eq": "CrCl2 + Li2S → CrS↓ + 2LiCl",
    "out": [
      "CrS",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_k2s",
    "need": [
      "CrCl2",
      "K2S"
    ],
    "eq": "CrCl2 + K2S → CrS↓ + 2KCl",
    "out": [
      "CrS",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_crcl2",
    "need": [
      "CrCl2",
      "BaS"
    ],
    "eq": "CrCl2 + BaS → CrS↓ + BaCl2",
    "out": [
      "CrS",
      "BaCl2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_li2sio3",
    "need": [
      "CrCl2",
      "Li2SiO3"
    ],
    "eq": "CrCl2 + Li2SiO3 → CrSiO3↓ + 2LiCl",
    "out": [
      "CrSiO3",
      "LiCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_na2sio3",
    "need": [
      "CrCl2",
      "Na2SiO3"
    ],
    "eq": "CrCl2 + Na2SiO3 → CrSiO3↓ + 2NaCl",
    "out": [
      "CrSiO3",
      "NaCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crcl2_k2sio3",
    "need": [
      "CrCl2",
      "K2SiO3"
    ],
    "eq": "CrCl2 + K2SiO3 → CrSiO3↓ + 2KCl",
    "out": [
      "CrSiO3",
      "KCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_crcl2",
    "need": [
      "CrCl2",
      "AgF"
    ],
    "eq": "CrCl2 + 2AgF → CrF2 + 2AgCl↓",
    "out": [
      "CrF2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_crcl2",
    "need": [
      "CrCl2",
      "AgC2H3O2"
    ],
    "eq": "CrCl2 + 2AgC2H3O2 → Cr(C2H3O2)2 + 2AgCl↓",
    "out": [
      "Cr(C2H3O2)2",
      "AgCl"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgCl ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_znbr2",
    "need": [
      "ZnBr2",
      "Li3PO4"
    ],
    "eq": "3ZnBr2 + 2Li3PO4 → Zn3(PO4)2↓ + 6LiBr",
    "out": [
      "Zn3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_znbr2",
    "need": [
      "ZnBr2",
      "K3PO4"
    ],
    "eq": "3ZnBr2 + 2K3PO4 → Zn3(PO4)2↓ + 6KBr",
    "out": [
      "Zn3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_znbr2",
    "need": [
      "ZnBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "ZnBr2 + Pb(C2H3O2)2 → Zn(C2H3O2)2 + PbBr2↓",
    "out": [
      "Zn(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_znbr2",
    "need": [
      "ZnBr2",
      "Li2SO3"
    ],
    "eq": "ZnBr2 + Li2SO3 → ZnSO3↓ + 2LiBr",
    "out": [
      "ZnSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_znbr2",
    "need": [
      "ZnBr2",
      "K2SO3"
    ],
    "eq": "ZnBr2 + K2SO3 → ZnSO3↓ + 2KBr",
    "out": [
      "ZnSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_znbr2",
    "need": [
      "ZnBr2",
      "Li2S"
    ],
    "eq": "ZnBr2 + Li2S → ZnS↓ + 2LiBr",
    "out": [
      "ZnS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_znbr2",
    "need": [
      "ZnBr2",
      "K2S"
    ],
    "eq": "ZnBr2 + K2S → ZnS↓ + 2KBr",
    "out": [
      "ZnS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_znbr2",
    "need": [
      "ZnBr2",
      "BaS"
    ],
    "eq": "ZnBr2 + BaS → ZnS↓ + BaBr2",
    "out": [
      "ZnS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_znbr2",
    "need": [
      "ZnBr2",
      "Li2SiO3"
    ],
    "eq": "ZnBr2 + Li2SiO3 → ZnSiO3↓ + 2LiBr",
    "out": [
      "ZnSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_znbr2",
    "need": [
      "ZnBr2",
      "Na2SiO3"
    ],
    "eq": "ZnBr2 + Na2SiO3 → ZnSiO3↓ + 2NaBr",
    "out": [
      "ZnSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_znbr2",
    "need": [
      "ZnBr2",
      "K2SiO3"
    ],
    "eq": "ZnBr2 + K2SiO3 → ZnSiO3↓ + 2KBr",
    "out": [
      "ZnSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_znbr2",
    "need": [
      "ZnBr2",
      "AgF"
    ],
    "eq": "ZnBr2 + 2AgF → ZnF2 + 2AgBr↓",
    "out": [
      "ZnF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_znbr2",
    "need": [
      "ZnBr2",
      "AgC2H3O2"
    ],
    "eq": "ZnBr2 + 2AgC2H3O2 → Zn(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Zn(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_mgbr2",
    "need": [
      "MgBr2",
      "LiF"
    ],
    "eq": "MgBr2 + 2LiF → MgF2↓ + 2LiBr",
    "out": [
      "MgF2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_naf",
    "need": [
      "MgBr2",
      "NaF"
    ],
    "eq": "MgBr2 + 2NaF → MgF2↓ + 2NaBr",
    "out": [
      "MgF2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_mgbr2",
    "need": [
      "MgBr2",
      "KF"
    ],
    "eq": "MgBr2 + 2KF → MgF2↓ + 2KBr",
    "out": [
      "MgF2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_mgbr2",
    "need": [
      "MgBr2",
      "FeF2"
    ],
    "eq": "MgBr2 + FeF2 → MgF2↓ + FeBr2",
    "out": [
      "MgF2",
      "FeBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_mgbr2",
    "need": [
      "MgBr2",
      "CuF2"
    ],
    "eq": "MgBr2 + CuF2 → MgF2↓ + CuBr2",
    "out": [
      "MgF2",
      "CuBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_mgbr2",
    "need": [
      "MgBr2",
      "CoF2"
    ],
    "eq": "MgBr2 + CoF2 → MgF2↓ + CoBr2",
    "out": [
      "MgF2",
      "CoBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_mgbr2",
    "need": [
      "MgBr2",
      "CrF3"
    ],
    "eq": "3MgBr2 + 2CrF3 → 3MgF2↓ + 2CrBr3",
    "out": [
      "MgF2",
      "CrBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_nif2",
    "need": [
      "MgBr2",
      "NiF2"
    ],
    "eq": "MgBr2 + NiF2 → MgF2↓ + NiBr2",
    "out": [
      "MgF2",
      "NiBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_mnf2",
    "need": [
      "MgBr2",
      "MnF2"
    ],
    "eq": "MgBr2 + MnF2 → MgF2↓ + MnBr2",
    "out": [
      "MgF2",
      "MnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mgbr2",
    "need": [
      "MgBr2",
      "Li3PO4"
    ],
    "eq": "3MgBr2 + 2Li3PO4 → Mg3(PO4)2↓ + 6LiBr",
    "out": [
      "Mg3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mgbr2",
    "need": [
      "MgBr2",
      "K3PO4"
    ],
    "eq": "3MgBr2 + 2K3PO4 → Mg3(PO4)2↓ + 6KBr",
    "out": [
      "Mg3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_pb_c2h3o2_2",
    "need": [
      "MgBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "MgBr2 + Pb(C2H3O2)2 → Mg(C2H3O2)2 + PbBr2↓",
    "out": [
      "Mg(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mgbr2",
    "need": [
      "MgBr2",
      "Li2SO3"
    ],
    "eq": "MgBr2 + Li2SO3 → MgSO3↓ + 2LiBr",
    "out": [
      "MgSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mgbr2",
    "need": [
      "MgBr2",
      "K2SO3"
    ],
    "eq": "MgBr2 + K2SO3 → MgSO3↓ + 2KBr",
    "out": [
      "MgSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mgbr2",
    "need": [
      "MgBr2",
      "Li2S"
    ],
    "eq": "MgBr2 + Li2S → MgS↓ + 2LiBr",
    "out": [
      "MgS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mgbr2",
    "need": [
      "MgBr2",
      "K2S"
    ],
    "eq": "MgBr2 + K2S → MgS↓ + 2KBr",
    "out": [
      "MgS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mgbr2",
    "need": [
      "MgBr2",
      "BaS"
    ],
    "eq": "MgBr2 + BaS → MgS↓ + BaBr2",
    "out": [
      "MgS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mgbr2",
    "need": [
      "MgBr2",
      "Li2SiO3"
    ],
    "eq": "MgBr2 + Li2SiO3 → MgSiO3↓ + 2LiBr",
    "out": [
      "MgSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_na2sio3",
    "need": [
      "MgBr2",
      "Na2SiO3"
    ],
    "eq": "MgBr2 + Na2SiO3 → MgSiO3↓ + 2NaBr",
    "out": [
      "MgSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mgbr2",
    "need": [
      "MgBr2",
      "K2SiO3"
    ],
    "eq": "MgBr2 + K2SiO3 → MgSiO3↓ + 2KBr",
    "out": [
      "MgSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_mgbr2",
    "need": [
      "MgBr2",
      "GaF3"
    ],
    "eq": "3MgBr2 + 2GaF3 → 3MgF2↓ + 2GaBr3",
    "out": [
      "MgF2",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mgbr2",
    "need": [
      "MgBr2",
      "AgF"
    ],
    "eq": "MgBr2 + 2AgF → MgF2↓ + 2AgBr↓",
    "out": [
      "MgF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mgbr2",
    "need": [
      "MgBr2",
      "AgC2H3O2"
    ],
    "eq": "MgBr2 + 2AgC2H3O2 → Mg(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Mg(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mgbr2_znf2",
    "need": [
      "MgBr2",
      "ZnF2"
    ],
    "eq": "MgBr2 + ZnF2 → MgF2↓ + ZnBr2",
    "out": [
      "MgF2",
      "ZnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_lif",
    "need": [
      "CaBr2",
      "LiF"
    ],
    "eq": "CaBr2 + 2LiF → CaF2↓ + 2LiBr",
    "out": [
      "CaF2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_naf",
    "need": [
      "CaBr2",
      "NaF"
    ],
    "eq": "CaBr2 + 2NaF → CaF2↓ + 2NaBr",
    "out": [
      "CaF2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_kf",
    "need": [
      "CaBr2",
      "KF"
    ],
    "eq": "CaBr2 + 2KF → CaF2↓ + 2KBr",
    "out": [
      "CaF2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_fef2",
    "need": [
      "CaBr2",
      "FeF2"
    ],
    "eq": "CaBr2 + FeF2 → CaF2↓ + FeBr2",
    "out": [
      "CaF2",
      "FeBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_cuf2",
    "need": [
      "CaBr2",
      "CuF2"
    ],
    "eq": "CaBr2 + CuF2 → CaF2↓ + CuBr2",
    "out": [
      "CaF2",
      "CuBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_cof2",
    "need": [
      "CaBr2",
      "CoF2"
    ],
    "eq": "CaBr2 + CoF2 → CaF2↓ + CoBr2",
    "out": [
      "CaF2",
      "CoBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_crf3",
    "need": [
      "CaBr2",
      "CrF3"
    ],
    "eq": "3CaBr2 + 2CrF3 → 3CaF2↓ + 2CrBr3",
    "out": [
      "CaF2",
      "CrBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_nif2",
    "need": [
      "CaBr2",
      "NiF2"
    ],
    "eq": "CaBr2 + NiF2 → CaF2↓ + NiBr2",
    "out": [
      "CaF2",
      "NiBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_mnf2",
    "need": [
      "CaBr2",
      "MnF2"
    ],
    "eq": "CaBr2 + MnF2 → CaF2↓ + MnBr2",
    "out": [
      "CaF2",
      "MnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_li2so4",
    "need": [
      "CaBr2",
      "Li2SO4"
    ],
    "eq": "CaBr2 + Li2SO4 → CaSO4↓ + 2LiBr",
    "out": [
      "CaSO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_li3po4",
    "need": [
      "CaBr2",
      "Li3PO4"
    ],
    "eq": "3CaBr2 + 2Li3PO4 → Ca3(PO4)2↓ + 6LiBr",
    "out": [
      "Ca3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_k3po4",
    "need": [
      "CaBr2",
      "K3PO4"
    ],
    "eq": "3CaBr2 + 2K3PO4 → Ca3(PO4)2↓ + 6KBr",
    "out": [
      "Ca3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_pb_c2h3o2_2",
    "need": [
      "CaBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CaBr2 + Pb(C2H3O2)2 → Ca(C2H3O2)2 + PbBr2↓",
    "out": [
      "Ca(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_li2so3",
    "need": [
      "CaBr2",
      "Li2SO3"
    ],
    "eq": "CaBr2 + Li2SO3 → CaSO3↓ + 2LiBr",
    "out": [
      "CaSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_k2so3",
    "need": [
      "CaBr2",
      "K2SO3"
    ],
    "eq": "CaBr2 + K2SO3 → CaSO3↓ + 2KBr",
    "out": [
      "CaSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_li2sio3",
    "need": [
      "CaBr2",
      "Li2SiO3"
    ],
    "eq": "CaBr2 + Li2SiO3 → CaSiO3↓ + 2LiBr",
    "out": [
      "CaSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_na2sio3",
    "need": [
      "CaBr2",
      "Na2SiO3"
    ],
    "eq": "CaBr2 + Na2SiO3 → CaSiO3↓ + 2NaBr",
    "out": [
      "CaSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_k2sio3",
    "need": [
      "CaBr2",
      "K2SiO3"
    ],
    "eq": "CaBr2 + K2SiO3 → CaSiO3↓ + 2KBr",
    "out": [
      "CaSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_gaf3",
    "need": [
      "CaBr2",
      "GaF3"
    ],
    "eq": "3CaBr2 + 2GaF3 → 3CaF2↓ + 2GaBr3",
    "out": [
      "CaF2",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_ga2_so4_3",
    "need": [
      "CaBr2",
      "Ga2(SO4)3"
    ],
    "eq": "3CaBr2 + Ga2(SO4)3 → 3CaSO4↓ + 2GaBr3",
    "out": [
      "CaSO4",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cabr2",
    "need": [
      "CaBr2",
      "AgF"
    ],
    "eq": "CaBr2 + 2AgF → CaF2↓ + 2AgBr↓",
    "out": [
      "CaF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cabr2",
    "need": [
      "CaBr2",
      "AgC2H3O2"
    ],
    "eq": "CaBr2 + 2AgC2H3O2 → Ca(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Ca(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_crso4",
    "need": [
      "CaBr2",
      "CrSO4"
    ],
    "eq": "CaBr2 + CrSO4 → CaSO4↓ + CrBr2",
    "out": [
      "CaSO4",
      "CrBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cabr2_znf2",
    "need": [
      "CaBr2",
      "ZnF2"
    ],
    "eq": "CaBr2 + ZnF2 → CaF2↓ + ZnBr2",
    "out": [
      "CaF2",
      "ZnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_snbr2",
    "need": [
      "SnBr2",
      "Li3PO4"
    ],
    "eq": "3SnBr2 + 2Li3PO4 → Sn3(PO4)2↓ + 6LiBr",
    "out": [
      "Sn3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_snbr2",
    "need": [
      "SnBr2",
      "K3PO4"
    ],
    "eq": "3SnBr2 + 2K3PO4 → Sn3(PO4)2↓ + 6KBr",
    "out": [
      "Sn3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_snbr2",
    "need": [
      "SnBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "SnBr2 + Pb(C2H3O2)2 → Sn(C2H3O2)2 + PbBr2↓",
    "out": [
      "Sn(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_snbr2",
    "need": [
      "SnBr2",
      "Li2SO3"
    ],
    "eq": "SnBr2 + Li2SO3 → SnSO3↓ + 2LiBr",
    "out": [
      "SnSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_snbr2",
    "need": [
      "SnBr2",
      "K2SO3"
    ],
    "eq": "SnBr2 + K2SO3 → SnSO3↓ + 2KBr",
    "out": [
      "SnSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_snbr2",
    "need": [
      "SnBr2",
      "Li2S"
    ],
    "eq": "SnBr2 + Li2S → SnS↓ + 2LiBr",
    "out": [
      "SnS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_snbr2",
    "need": [
      "SnBr2",
      "K2S"
    ],
    "eq": "SnBr2 + K2S → SnS↓ + 2KBr",
    "out": [
      "SnS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_snbr2",
    "need": [
      "SnBr2",
      "BaS"
    ],
    "eq": "SnBr2 + BaS → SnS↓ + BaBr2",
    "out": [
      "SnS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_snbr2",
    "need": [
      "SnBr2",
      "Li2SiO3"
    ],
    "eq": "SnBr2 + Li2SiO3 → SnSiO3↓ + 2LiBr",
    "out": [
      "SnSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_snbr2",
    "need": [
      "SnBr2",
      "Na2SiO3"
    ],
    "eq": "SnBr2 + Na2SiO3 → SnSiO3↓ + 2NaBr",
    "out": [
      "SnSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_snbr2",
    "need": [
      "SnBr2",
      "K2SiO3"
    ],
    "eq": "SnBr2 + K2SiO3 → SnSiO3↓ + 2KBr",
    "out": [
      "SnSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_snbr2",
    "need": [
      "SnBr2",
      "AgF"
    ],
    "eq": "SnBr2 + 2AgF → SnF2 + 2AgBr↓",
    "out": [
      "SnF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_snbr2",
    "need": [
      "SnBr2",
      "AgC2H3O2"
    ],
    "eq": "SnBr2 + 2AgC2H3O2 → Sn(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Sn(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_nibr2",
    "need": [
      "NiBr2",
      "Li3PO4"
    ],
    "eq": "3NiBr2 + 2Li3PO4 → Ni3(PO4)2↓ + 6LiBr",
    "out": [
      "Ni3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_nibr2",
    "need": [
      "NiBr2",
      "K3PO4"
    ],
    "eq": "3NiBr2 + 2K3PO4 → Ni3(PO4)2↓ + 6KBr",
    "out": [
      "Ni3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nibr2_pb_c2h3o2_2",
    "need": [
      "NiBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "NiBr2 + Pb(C2H3O2)2 → Ni(C2H3O2)2 + PbBr2↓",
    "out": [
      "Ni(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_nibr2",
    "need": [
      "NiBr2",
      "Li2SO3"
    ],
    "eq": "NiBr2 + Li2SO3 → NiSO3↓ + 2LiBr",
    "out": [
      "NiSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_nibr2",
    "need": [
      "NiBr2",
      "K2SO3"
    ],
    "eq": "NiBr2 + K2SO3 → NiSO3↓ + 2KBr",
    "out": [
      "NiSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_nibr2",
    "need": [
      "NiBr2",
      "Li2S"
    ],
    "eq": "NiBr2 + Li2S → NiS↓ + 2LiBr",
    "out": [
      "NiS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_nibr2",
    "need": [
      "NiBr2",
      "K2S"
    ],
    "eq": "NiBr2 + K2S → NiS↓ + 2KBr",
    "out": [
      "NiS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_nibr2",
    "need": [
      "NiBr2",
      "BaS"
    ],
    "eq": "NiBr2 + BaS → NiS↓ + BaBr2",
    "out": [
      "NiS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_nibr2",
    "need": [
      "NiBr2",
      "Li2SiO3"
    ],
    "eq": "NiBr2 + Li2SiO3 → NiSiO3↓ + 2LiBr",
    "out": [
      "NiSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_nibr2",
    "need": [
      "NiBr2",
      "Na2SiO3"
    ],
    "eq": "NiBr2 + Na2SiO3 → NiSiO3↓ + 2NaBr",
    "out": [
      "NiSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_nibr2",
    "need": [
      "NiBr2",
      "K2SiO3"
    ],
    "eq": "NiBr2 + K2SiO3 → NiSiO3↓ + 2KBr",
    "out": [
      "NiSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_nibr2",
    "need": [
      "NiBr2",
      "AgF"
    ],
    "eq": "NiBr2 + 2AgF → NiF2 + 2AgBr↓",
    "out": [
      "NiF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_nibr2",
    "need": [
      "NiBr2",
      "AgC2H3O2"
    ],
    "eq": "NiBr2 + 2AgC2H3O2 → Ni(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Ni(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_li3po4",
    "need": [
      "CoBr2",
      "Li3PO4"
    ],
    "eq": "3CoBr2 + 2Li3PO4 → Co3(PO4)2↓ + 6LiBr",
    "out": [
      "Co3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_k3po4",
    "need": [
      "CoBr2",
      "K3PO4"
    ],
    "eq": "3CoBr2 + 2K3PO4 → Co3(PO4)2↓ + 6KBr",
    "out": [
      "Co3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_pb_c2h3o2_2",
    "need": [
      "CoBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CoBr2 + Pb(C2H3O2)2 → Co(C2H3O2)2 + PbBr2↓",
    "out": [
      "Co(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_li2so3",
    "need": [
      "CoBr2",
      "Li2SO3"
    ],
    "eq": "CoBr2 + Li2SO3 → CoSO3↓ + 2LiBr",
    "out": [
      "CoSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_k2so3",
    "need": [
      "CoBr2",
      "K2SO3"
    ],
    "eq": "CoBr2 + K2SO3 → CoSO3↓ + 2KBr",
    "out": [
      "CoSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_li2s",
    "need": [
      "CoBr2",
      "Li2S"
    ],
    "eq": "CoBr2 + Li2S → CoS↓ + 2LiBr",
    "out": [
      "CoS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_k2s",
    "need": [
      "CoBr2",
      "K2S"
    ],
    "eq": "CoBr2 + K2S → CoS↓ + 2KBr",
    "out": [
      "CoS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cobr2",
    "need": [
      "CoBr2",
      "BaS"
    ],
    "eq": "CoBr2 + BaS → CoS↓ + BaBr2",
    "out": [
      "CoS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_li2sio3",
    "need": [
      "CoBr2",
      "Li2SiO3"
    ],
    "eq": "CoBr2 + Li2SiO3 → CoSiO3↓ + 2LiBr",
    "out": [
      "CoSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_na2sio3",
    "need": [
      "CoBr2",
      "Na2SiO3"
    ],
    "eq": "CoBr2 + Na2SiO3 → CoSiO3↓ + 2NaBr",
    "out": [
      "CoSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cobr2_k2sio3",
    "need": [
      "CoBr2",
      "K2SiO3"
    ],
    "eq": "CoBr2 + K2SiO3 → CoSiO3↓ + 2KBr",
    "out": [
      "CoSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cobr2",
    "need": [
      "CoBr2",
      "AgF"
    ],
    "eq": "CoBr2 + 2AgF → CoF2 + 2AgBr↓",
    "out": [
      "CoF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cobr2",
    "need": [
      "CoBr2",
      "AgC2H3O2"
    ],
    "eq": "CoBr2 + 2AgC2H3O2 → Co(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Co(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_lif",
    "need": [
      "Ba(NO3)2",
      "LiF"
    ],
    "eq": "Ba(NO3)2 + 2LiF → BaF2↓ + 2LiNO3",
    "out": [
      "BaF2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_naf",
    "need": [
      "Ba(NO3)2",
      "NaF"
    ],
    "eq": "Ba(NO3)2 + 2NaF → BaF2↓ + 2NaNO3",
    "out": [
      "BaF2",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_kf",
    "need": [
      "Ba(NO3)2",
      "KF"
    ],
    "eq": "Ba(NO3)2 + 2KF → BaF2↓ + 2KNO3",
    "out": [
      "BaF2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_fef2",
    "need": [
      "Ba(NO3)2",
      "FeF2"
    ],
    "eq": "Ba(NO3)2 + FeF2 → BaF2↓ + Fe(NO3)2",
    "out": [
      "BaF2",
      "Fe(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_cuf2",
    "need": [
      "Ba(NO3)2",
      "CuF2"
    ],
    "eq": "Ba(NO3)2 + CuF2 → BaF2↓ + Cu(NO3)2",
    "out": [
      "BaF2",
      "Cu(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_cof2",
    "need": [
      "Ba(NO3)2",
      "CoF2"
    ],
    "eq": "Ba(NO3)2 + CoF2 → BaF2↓ + Co(NO3)2",
    "out": [
      "BaF2",
      "Co(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_crf3",
    "need": [
      "Ba(NO3)2",
      "CrF3"
    ],
    "eq": "3Ba(NO3)2 + 2CrF3 → 3BaF2↓ + 2Cr(NO3)3",
    "out": [
      "BaF2",
      "Cr(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_nif2",
    "need": [
      "Ba(NO3)2",
      "NiF2"
    ],
    "eq": "Ba(NO3)2 + NiF2 → BaF2↓ + Ni(NO3)2",
    "out": [
      "BaF2",
      "Ni(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_mnf2",
    "need": [
      "Ba(NO3)2",
      "MnF2"
    ],
    "eq": "Ba(NO3)2 + MnF2 → BaF2↓ + Mn(NO3)2",
    "out": [
      "BaF2",
      "Mn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_li2so4",
    "need": [
      "Ba(NO3)2",
      "Li2SO4"
    ],
    "eq": "Ba(NO3)2 + Li2SO4 → BaSO4↓ + 2LiNO3",
    "out": [
      "BaSO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_li3po4",
    "need": [
      "Ba(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Ba(NO3)2 + 2Li3PO4 → Ba3(PO4)2↓ + 6LiNO3",
    "out": [
      "Ba3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k3po4",
    "need": [
      "Ba(NO3)2",
      "K3PO4"
    ],
    "eq": "3Ba(NO3)2 + 2K3PO4 → Ba3(PO4)2↓ + 6KNO3",
    "out": [
      "Ba3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_li2so3",
    "need": [
      "Ba(NO3)2",
      "Li2SO3"
    ],
    "eq": "Ba(NO3)2 + Li2SO3 → BaSO3↓ + 2LiNO3",
    "out": [
      "BaSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k2so3",
    "need": [
      "Ba(NO3)2",
      "K2SO3"
    ],
    "eq": "Ba(NO3)2 + K2SO3 → BaSO3↓ + 2KNO3",
    "out": [
      "BaSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_li2sio3",
    "need": [
      "Ba(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Ba(NO3)2 + Li2SiO3 → BaSiO3↓ + 2LiNO3",
    "out": [
      "BaSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_na2sio3",
    "need": [
      "Ba(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Ba(NO3)2 + Na2SiO3 → BaSiO3↓ + 2NaNO3",
    "out": [
      "BaSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_k2sio3",
    "need": [
      "Ba(NO3)2",
      "K2SiO3"
    ],
    "eq": "Ba(NO3)2 + K2SiO3 → BaSiO3↓ + 2KNO3",
    "out": [
      "BaSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_gaf3",
    "need": [
      "Ba(NO3)2",
      "GaF3"
    ],
    "eq": "3Ba(NO3)2 + 2GaF3 → 3BaF2↓ + 2Ga(NO3)3",
    "out": [
      "BaF2",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_ga2_so4_3",
    "need": [
      "Ba(NO3)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Ba(NO3)2 + Ga2(SO4)3 → 3BaSO4↓ + 2Ga(NO3)3",
    "out": [
      "BaSO4",
      "Ga(NO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ba_no3_2",
    "need": [
      "Ba(NO3)2",
      "AgF"
    ],
    "eq": "Ba(NO3)2 + 2AgF → BaF2↓ + 2AgNO3",
    "out": [
      "BaF2",
      "AgNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_crso4",
    "need": [
      "Ba(NO3)2",
      "CrSO4"
    ],
    "eq": "Ba(NO3)2 + CrSO4 → BaSO4↓ + Cr(NO3)2",
    "out": [
      "BaSO4",
      "Cr(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_no3_2_znf2",
    "need": [
      "Ba(NO3)2",
      "ZnF2"
    ],
    "eq": "Ba(NO3)2 + ZnF2 → BaF2↓ + Zn(NO3)2",
    "out": [
      "BaF2",
      "Zn(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "Li3PO4"
    ],
    "eq": "3Sn(NO3)2 + 2Li3PO4 → Sn3(PO4)2↓ + 6LiNO3",
    "out": [
      "Sn3(PO4)2",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "K3PO4"
    ],
    "eq": "3Sn(NO3)2 + 2K3PO4 → Sn3(PO4)2↓ + 6KNO3",
    "out": [
      "Sn3(PO4)2",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "Li2SO3"
    ],
    "eq": "Sn(NO3)2 + Li2SO3 → SnSO3↓ + 2LiNO3",
    "out": [
      "SnSO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "K2SO3"
    ],
    "eq": "Sn(NO3)2 + K2SO3 → SnSO3↓ + 2KNO3",
    "out": [
      "SnSO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "Li2S"
    ],
    "eq": "Sn(NO3)2 + Li2S → SnS↓ + 2LiNO3",
    "out": [
      "SnS",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "K2S"
    ],
    "eq": "Sn(NO3)2 + K2S → SnS↓ + 2KNO3",
    "out": [
      "SnS",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "BaS"
    ],
    "eq": "Sn(NO3)2 + BaS → SnS↓ + Ba(NO3)2",
    "out": [
      "SnS",
      "Ba(NO3)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "Li2SiO3"
    ],
    "eq": "Sn(NO3)2 + Li2SiO3 → SnSiO3↓ + 2LiNO3",
    "out": [
      "SnSiO3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "Na2SiO3"
    ],
    "eq": "Sn(NO3)2 + Na2SiO3 → SnSiO3↓ + 2NaNO3",
    "out": [
      "SnSiO3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_sn_no3_2",
    "need": [
      "Sn(NO3)2",
      "K2SiO3"
    ],
    "eq": "Sn(NO3)2 + K2SiO3 → SnSiO3↓ + 2KNO3",
    "out": [
      "SnSiO3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_li3po4",
    "need": [
      "Cr(NO3)3",
      "Li3PO4"
    ],
    "eq": "Cr(NO3)3 + Li3PO4 → CrPO4↓ + 3LiNO3",
    "out": [
      "CrPO4",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_k3po4",
    "need": [
      "Cr(NO3)3",
      "K3PO4"
    ],
    "eq": "Cr(NO3)3 + K3PO4 → CrPO4↓ + 3KNO3",
    "out": [
      "CrPO4",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_li2sio3",
    "need": [
      "Cr(NO3)3",
      "Li2SiO3"
    ],
    "eq": "2Cr(NO3)3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 6LiNO3",
    "out": [
      "Cr2(SiO3)3",
      "LiNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_na2sio3",
    "need": [
      "Cr(NO3)3",
      "Na2SiO3"
    ],
    "eq": "2Cr(NO3)3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 6NaNO3",
    "out": [
      "Cr2(SiO3)3",
      "NaNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_3_k2sio3",
    "need": [
      "Cr(NO3)3",
      "K2SiO3"
    ],
    "eq": "2Cr(NO3)3 + 3K2SiO3 → Cr2(SiO3)3↓ + 6KNO3",
    "out": [
      "Cr2(SiO3)3",
      "KNO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_li3po4",
    "need": [
      "CuBr2",
      "Li3PO4"
    ],
    "eq": "3CuBr2 + 2Li3PO4 → Cu3(PO4)2↓ + 6LiBr",
    "out": [
      "Cu3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_k3po4",
    "need": [
      "CuBr2",
      "K3PO4"
    ],
    "eq": "3CuBr2 + 2K3PO4 → Cu3(PO4)2↓ + 6KBr",
    "out": [
      "Cu3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_pb_c2h3o2_2",
    "need": [
      "CuBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CuBr2 + Pb(C2H3O2)2 → Cu(C2H3O2)2 + PbBr2↓",
    "out": [
      "Cu(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_li2so3",
    "need": [
      "CuBr2",
      "Li2SO3"
    ],
    "eq": "CuBr2 + Li2SO3 → CuSO3↓ + 2LiBr",
    "out": [
      "CuSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_k2so3",
    "need": [
      "CuBr2",
      "K2SO3"
    ],
    "eq": "CuBr2 + K2SO3 → CuSO3↓ + 2KBr",
    "out": [
      "CuSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_li2s",
    "need": [
      "CuBr2",
      "Li2S"
    ],
    "eq": "CuBr2 + Li2S → CuS↓ + 2LiBr",
    "out": [
      "CuS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_k2s",
    "need": [
      "CuBr2",
      "K2S"
    ],
    "eq": "CuBr2 + K2S → CuS↓ + 2KBr",
    "out": [
      "CuS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cubr2",
    "need": [
      "CuBr2",
      "BaS"
    ],
    "eq": "CuBr2 + BaS → CuS↓ + BaBr2",
    "out": [
      "CuS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_li2sio3",
    "need": [
      "CuBr2",
      "Li2SiO3"
    ],
    "eq": "CuBr2 + Li2SiO3 → CuSiO3↓ + 2LiBr",
    "out": [
      "CuSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_na2sio3",
    "need": [
      "CuBr2",
      "Na2SiO3"
    ],
    "eq": "CuBr2 + Na2SiO3 → CuSiO3↓ + 2NaBr",
    "out": [
      "CuSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cubr2_k2sio3",
    "need": [
      "CuBr2",
      "K2SiO3"
    ],
    "eq": "CuBr2 + K2SiO3 → CuSiO3↓ + 2KBr",
    "out": [
      "CuSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_cubr2",
    "need": [
      "CuBr2",
      "AgF"
    ],
    "eq": "CuBr2 + 2AgF → CuF2 + 2AgBr↓",
    "out": [
      "CuF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_cubr2",
    "need": [
      "CuBr2",
      "AgC2H3O2"
    ],
    "eq": "CuBr2 + 2AgC2H3O2 → Cu(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Cu(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mnbr2",
    "need": [
      "MnBr2",
      "Li3PO4"
    ],
    "eq": "3MnBr2 + 2Li3PO4 → Mn3(PO4)2↓ + 6LiBr",
    "out": [
      "Mn3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mnbr2",
    "need": [
      "MnBr2",
      "K3PO4"
    ],
    "eq": "3MnBr2 + 2K3PO4 → Mn3(PO4)2↓ + 6KBr",
    "out": [
      "Mn3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_pb_c2h3o2_2",
    "need": [
      "MnBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "MnBr2 + Pb(C2H3O2)2 → Mn(C2H3O2)2 + PbBr2↓",
    "out": [
      "Mn(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mnbr2",
    "need": [
      "MnBr2",
      "Li2SO3"
    ],
    "eq": "MnBr2 + Li2SO3 → MnSO3↓ + 2LiBr",
    "out": [
      "MnSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mnbr2",
    "need": [
      "MnBr2",
      "K2SO3"
    ],
    "eq": "MnBr2 + K2SO3 → MnSO3↓ + 2KBr",
    "out": [
      "MnSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mnbr2",
    "need": [
      "MnBr2",
      "Li2S"
    ],
    "eq": "MnBr2 + Li2S → MnS↓ + 2LiBr",
    "out": [
      "MnS",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mnbr2",
    "need": [
      "MnBr2",
      "K2S"
    ],
    "eq": "MnBr2 + K2S → MnS↓ + 2KBr",
    "out": [
      "MnS",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mnbr2",
    "need": [
      "MnBr2",
      "BaS"
    ],
    "eq": "MnBr2 + BaS → MnS↓ + BaBr2",
    "out": [
      "MnS",
      "BaBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mnbr2",
    "need": [
      "MnBr2",
      "Li2SiO3"
    ],
    "eq": "MnBr2 + Li2SiO3 → MnSiO3↓ + 2LiBr",
    "out": [
      "MnSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnbr2_na2sio3",
    "need": [
      "MnBr2",
      "Na2SiO3"
    ],
    "eq": "MnBr2 + Na2SiO3 → MnSiO3↓ + 2NaBr",
    "out": [
      "MnSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mnbr2",
    "need": [
      "MnBr2",
      "K2SiO3"
    ],
    "eq": "MnBr2 + K2SiO3 → MnSiO3↓ + 2KBr",
    "out": [
      "MnSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mnbr2",
    "need": [
      "MnBr2",
      "AgF"
    ],
    "eq": "MnBr2 + 2AgF → MnF2 + 2AgBr↓",
    "out": [
      "MnF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_mnbr2",
    "need": [
      "MnBr2",
      "AgC2H3O2"
    ],
    "eq": "MnBr2 + 2AgC2H3O2 → Mn(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Mn(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_lif",
    "need": [
      "AlBr3",
      "LiF"
    ],
    "eq": "AlBr3 + 3LiF → AlF3↓ + 3LiBr",
    "out": [
      "AlF3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_naf",
    "need": [
      "AlBr3",
      "NaF"
    ],
    "eq": "AlBr3 + 3NaF → AlF3↓ + 3NaBr",
    "out": [
      "AlF3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_kf",
    "need": [
      "AlBr3",
      "KF"
    ],
    "eq": "AlBr3 + 3KF → AlF3↓ + 3KBr",
    "out": [
      "AlF3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_fef2",
    "need": [
      "AlBr3",
      "FeF2"
    ],
    "eq": "2AlBr3 + 3FeF2 → 2AlF3↓ + 3FeBr2",
    "out": [
      "AlF3",
      "FeBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_cuf2",
    "need": [
      "AlBr3",
      "CuF2"
    ],
    "eq": "2AlBr3 + 3CuF2 → 2AlF3↓ + 3CuBr2",
    "out": [
      "AlF3",
      "CuBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_cof2",
    "need": [
      "AlBr3",
      "CoF2"
    ],
    "eq": "2AlBr3 + 3CoF2 → 2AlF3↓ + 3CoBr2",
    "out": [
      "AlF3",
      "CoBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_crf3",
    "need": [
      "AlBr3",
      "CrF3"
    ],
    "eq": "AlBr3 + CrF3 → AlF3↓ + CrBr3",
    "out": [
      "AlF3",
      "CrBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_nif2",
    "need": [
      "AlBr3",
      "NiF2"
    ],
    "eq": "2AlBr3 + 3NiF2 → 2AlF3↓ + 3NiBr2",
    "out": [
      "AlF3",
      "NiBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_mnf2",
    "need": [
      "AlBr3",
      "MnF2"
    ],
    "eq": "2AlBr3 + 3MnF2 → 2AlF3↓ + 3MnBr2",
    "out": [
      "AlF3",
      "MnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_li3po4",
    "need": [
      "AlBr3",
      "Li3PO4"
    ],
    "eq": "AlBr3 + Li3PO4 → AlPO4↓ + 3LiBr",
    "out": [
      "AlPO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_k3po4",
    "need": [
      "AlBr3",
      "K3PO4"
    ],
    "eq": "AlBr3 + K3PO4 → AlPO4↓ + 3KBr",
    "out": [
      "AlPO4",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_pb_c2h3o2_2",
    "need": [
      "AlBr3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2AlBr3 + 3Pb(C2H3O2)2 → 2Al(C2H3O2)3 + 3PbBr2↓",
    "out": [
      "Al(C2H3O2)3",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_li2sio3",
    "need": [
      "AlBr3",
      "Li2SiO3"
    ],
    "eq": "2AlBr3 + 3Li2SiO3 → Al2(SiO3)3↓ + 6LiBr",
    "out": [
      "Al2(SiO3)3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_na2sio3",
    "need": [
      "AlBr3",
      "Na2SiO3"
    ],
    "eq": "2AlBr3 + 3Na2SiO3 → Al2(SiO3)3↓ + 6NaBr",
    "out": [
      "Al2(SiO3)3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_k2sio3",
    "need": [
      "AlBr3",
      "K2SiO3"
    ],
    "eq": "2AlBr3 + 3K2SiO3 → Al2(SiO3)3↓ + 6KBr",
    "out": [
      "Al2(SiO3)3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_gaf3",
    "need": [
      "AlBr3",
      "GaF3"
    ],
    "eq": "AlBr3 + GaF3 → AlF3↓ + GaBr3",
    "out": [
      "AlF3",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_albr3",
    "need": [
      "AlBr3",
      "AgF"
    ],
    "eq": "AlBr3 + 3AgF → AlF3↓ + 3AgBr↓",
    "out": [
      "AlF3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_albr3",
    "need": [
      "AlBr3",
      "AgC2H3O2"
    ],
    "eq": "AlBr3 + 3AgC2H3O2 → Al(C2H3O2)3 + 3AgBr↓",
    "out": [
      "Al(C2H3O2)3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_albr3_znf2",
    "need": [
      "AlBr3",
      "ZnF2"
    ],
    "eq": "2AlBr3 + 3ZnF2 → 2AlF3↓ + 3ZnBr2",
    "out": [
      "AlF3",
      "ZnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_li3po4",
    "need": [
      "CrBr3",
      "Li3PO4"
    ],
    "eq": "CrBr3 + Li3PO4 → CrPO4↓ + 3LiBr",
    "out": [
      "CrPO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_k3po4",
    "need": [
      "CrBr3",
      "K3PO4"
    ],
    "eq": "CrBr3 + K3PO4 → CrPO4↓ + 3KBr",
    "out": [
      "CrPO4",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_pb_c2h3o2_2",
    "need": [
      "CrBr3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2CrBr3 + 3Pb(C2H3O2)2 → 2Cr(C2H3O2)3 + 3PbBr2↓",
    "out": [
      "Cr(C2H3O2)3",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_li2sio3",
    "need": [
      "CrBr3",
      "Li2SiO3"
    ],
    "eq": "2CrBr3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 6LiBr",
    "out": [
      "Cr2(SiO3)3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_na2sio3",
    "need": [
      "CrBr3",
      "Na2SiO3"
    ],
    "eq": "2CrBr3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 6NaBr",
    "out": [
      "Cr2(SiO3)3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr3_k2sio3",
    "need": [
      "CrBr3",
      "K2SiO3"
    ],
    "eq": "2CrBr3 + 3K2SiO3 → Cr2(SiO3)3↓ + 6KBr",
    "out": [
      "Cr2(SiO3)3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_crbr3",
    "need": [
      "CrBr3",
      "AgF"
    ],
    "eq": "CrBr3 + 3AgF → CrF3 + 3AgBr↓",
    "out": [
      "CrF3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_crbr3",
    "need": [
      "CrBr3",
      "AgC2H3O2"
    ],
    "eq": "CrBr3 + 3AgC2H3O2 → Cr(C2H3O2)3 + 3AgBr↓",
    "out": [
      "Cr(C2H3O2)3",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_libr_pb_c2h3o2_2",
    "need": [
      "LiBr",
      "Pb(C2H3O2)2"
    ],
    "eq": "2LiBr + Pb(C2H3O2)2 → 2LiC2H3O2 + PbBr2↓",
    "out": [
      "LiC2H3O2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_libr",
    "need": [
      "LiBr",
      "AgF"
    ],
    "eq": "LiBr + AgF → LiF + AgBr↓",
    "out": [
      "LiF",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_libr",
    "need": [
      "LiBr",
      "AgC2H3O2"
    ],
    "eq": "LiBr + AgC2H3O2 → LiC2H3O2 + AgBr↓",
    "out": [
      "LiC2H3O2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_lif",
    "need": [
      "BaBr2",
      "LiF"
    ],
    "eq": "BaBr2 + 2LiF → BaF2↓ + 2LiBr",
    "out": [
      "BaF2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_naf",
    "need": [
      "BaBr2",
      "NaF"
    ],
    "eq": "BaBr2 + 2NaF → BaF2↓ + 2NaBr",
    "out": [
      "BaF2",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_kf",
    "need": [
      "BaBr2",
      "KF"
    ],
    "eq": "BaBr2 + 2KF → BaF2↓ + 2KBr",
    "out": [
      "BaF2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_fef2",
    "need": [
      "BaBr2",
      "FeF2"
    ],
    "eq": "BaBr2 + FeF2 → BaF2↓ + FeBr2",
    "out": [
      "BaF2",
      "FeBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_cuf2",
    "need": [
      "BaBr2",
      "CuF2"
    ],
    "eq": "BaBr2 + CuF2 → BaF2↓ + CuBr2",
    "out": [
      "BaF2",
      "CuBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_cof2",
    "need": [
      "BaBr2",
      "CoF2"
    ],
    "eq": "BaBr2 + CoF2 → BaF2↓ + CoBr2",
    "out": [
      "BaF2",
      "CoBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_crf3",
    "need": [
      "BaBr2",
      "CrF3"
    ],
    "eq": "3BaBr2 + 2CrF3 → 3BaF2↓ + 2CrBr3",
    "out": [
      "BaF2",
      "CrBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_nif2",
    "need": [
      "BaBr2",
      "NiF2"
    ],
    "eq": "BaBr2 + NiF2 → BaF2↓ + NiBr2",
    "out": [
      "BaF2",
      "NiBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_mnf2",
    "need": [
      "BaBr2",
      "MnF2"
    ],
    "eq": "BaBr2 + MnF2 → BaF2↓ + MnBr2",
    "out": [
      "BaF2",
      "MnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_li2so4",
    "need": [
      "BaBr2",
      "Li2SO4"
    ],
    "eq": "BaBr2 + Li2SO4 → BaSO4↓ + 2LiBr",
    "out": [
      "BaSO4",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_li3po4",
    "need": [
      "BaBr2",
      "Li3PO4"
    ],
    "eq": "3BaBr2 + 2Li3PO4 → Ba3(PO4)2↓ + 6LiBr",
    "out": [
      "Ba3(PO4)2",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k3po4",
    "need": [
      "BaBr2",
      "K3PO4"
    ],
    "eq": "3BaBr2 + 2K3PO4 → Ba3(PO4)2↓ + 6KBr",
    "out": [
      "Ba3(PO4)2",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_pb_c2h3o2_2",
    "need": [
      "BaBr2",
      "Pb(C2H3O2)2"
    ],
    "eq": "BaBr2 + Pb(C2H3O2)2 → Ba(C2H3O2)2 + PbBr2↓",
    "out": [
      "Ba(C2H3O2)2",
      "PbBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_li2so3",
    "need": [
      "BaBr2",
      "Li2SO3"
    ],
    "eq": "BaBr2 + Li2SO3 → BaSO3↓ + 2LiBr",
    "out": [
      "BaSO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k2so3",
    "need": [
      "BaBr2",
      "K2SO3"
    ],
    "eq": "BaBr2 + K2SO3 → BaSO3↓ + 2KBr",
    "out": [
      "BaSO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_li2sio3",
    "need": [
      "BaBr2",
      "Li2SiO3"
    ],
    "eq": "BaBr2 + Li2SiO3 → BaSiO3↓ + 2LiBr",
    "out": [
      "BaSiO3",
      "LiBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_na2sio3",
    "need": [
      "BaBr2",
      "Na2SiO3"
    ],
    "eq": "BaBr2 + Na2SiO3 → BaSiO3↓ + 2NaBr",
    "out": [
      "BaSiO3",
      "NaBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_k2sio3",
    "need": [
      "BaBr2",
      "K2SiO3"
    ],
    "eq": "BaBr2 + K2SiO3 → BaSiO3↓ + 2KBr",
    "out": [
      "BaSiO3",
      "KBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_gaf3",
    "need": [
      "BaBr2",
      "GaF3"
    ],
    "eq": "3BaBr2 + 2GaF3 → 3BaF2↓ + 2GaBr3",
    "out": [
      "BaF2",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_ga2_so4_3",
    "need": [
      "BaBr2",
      "Ga2(SO4)3"
    ],
    "eq": "3BaBr2 + Ga2(SO4)3 → 3BaSO4↓ + 2GaBr3",
    "out": [
      "BaSO4",
      "GaBr3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_babr2",
    "need": [
      "BaBr2",
      "AgF"
    ],
    "eq": "BaBr2 + 2AgF → BaF2↓ + 2AgBr↓",
    "out": [
      "BaF2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_babr2",
    "need": [
      "BaBr2",
      "AgC2H3O2"
    ],
    "eq": "BaBr2 + 2AgC2H3O2 → Ba(C2H3O2)2 + 2AgBr↓",
    "out": [
      "Ba(C2H3O2)2",
      "AgBr"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_crso4",
    "need": [
      "BaBr2",
      "CrSO4"
    ],
    "eq": "BaBr2 + CrSO4 → BaSO4↓ + CrBr2",
    "out": [
      "BaSO4",
      "CrBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_babr2_znf2",
    "need": [
      "BaBr2",
      "ZnF2"
    ],
    "eq": "BaBr2 + ZnF2 → BaF2↓ + ZnBr2",
    "out": [
      "BaF2",
      "ZnBr2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_lif",
    "need": [
      "LiF",
      "Ca(C2H3O2)2"
    ],
    "eq": "2LiF + Ca(C2H3O2)2 → 2LiC2H3O2 + CaF2↓",
    "out": [
      "LiC2H3O2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_lif",
    "need": [
      "LiF",
      "Ba(C2H3O2)2"
    ],
    "eq": "2LiF + Ba(C2H3O2)2 → 2LiC2H3O2 + BaF2↓",
    "out": [
      "LiC2H3O2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_mg_c2h3o2_2",
    "need": [
      "LiF",
      "Mg(C2H3O2)2"
    ],
    "eq": "2LiF + Mg(C2H3O2)2 → 2LiC2H3O2 + MgF2↓",
    "out": [
      "LiC2H3O2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_lif",
    "need": [
      "LiF",
      "Al(C2H3O2)3"
    ],
    "eq": "3LiF + Al(C2H3O2)3 → 3LiC2H3O2 + AlF3↓",
    "out": [
      "LiC2H3O2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_lif",
    "need": [
      "LiF",
      "Fe(C2H3O2)3"
    ],
    "eq": "3LiF + Fe(C2H3O2)3 → 3LiC2H3O2 + FeF3↓",
    "out": [
      "LiC2H3O2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_lif_pb_c2h3o2_2",
    "need": [
      "LiF",
      "Pb(C2H3O2)2"
    ],
    "eq": "2LiF + Pb(C2H3O2)2 → 2LiC2H3O2 + PbF2↓",
    "out": [
      "LiC2H3O2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_lif",
    "need": [
      "LiF",
      "BaS"
    ],
    "eq": "2LiF + BaS → Li2S + BaF2↓",
    "out": [
      "Li2S",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_naf",
    "need": [
      "NaF",
      "Ca(C2H3O2)2"
    ],
    "eq": "2NaF + Ca(C2H3O2)2 → 2CH3COONa + CaF2↓",
    "out": [
      "CH3COONa",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_naf",
    "need": [
      "NaF",
      "Ba(C2H3O2)2"
    ],
    "eq": "2NaF + Ba(C2H3O2)2 → 2CH3COONa + BaF2↓",
    "out": [
      "CH3COONa",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_naf",
    "need": [
      "NaF",
      "Mg(C2H3O2)2"
    ],
    "eq": "2NaF + Mg(C2H3O2)2 → 2CH3COONa + MgF2↓",
    "out": [
      "CH3COONa",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_naf",
    "need": [
      "NaF",
      "Al(C2H3O2)3"
    ],
    "eq": "3NaF + Al(C2H3O2)3 → 3CH3COONa + AlF3↓",
    "out": [
      "CH3COONa",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_naf",
    "need": [
      "NaF",
      "Fe(C2H3O2)3"
    ],
    "eq": "3NaF + Fe(C2H3O2)3 → 3CH3COONa + FeF3↓",
    "out": [
      "CH3COONa",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_naf_pb_c2h3o2_2",
    "need": [
      "NaF",
      "Pb(C2H3O2)2"
    ],
    "eq": "2NaF + Pb(C2H3O2)2 → 2CH3COONa + PbF2↓",
    "out": [
      "CH3COONa",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_naf",
    "need": [
      "NaF",
      "BaS"
    ],
    "eq": "2NaF + BaS → Na2S + BaF2↓",
    "out": [
      "Na2S",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_kf",
    "need": [
      "KF",
      "Ca(C2H3O2)2"
    ],
    "eq": "2KF + Ca(C2H3O2)2 → 2CH3COOK + CaF2↓",
    "out": [
      "CH3COOK",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_kf",
    "need": [
      "KF",
      "Ba(C2H3O2)2"
    ],
    "eq": "2KF + Ba(C2H3O2)2 → 2CH3COOK + BaF2↓",
    "out": [
      "CH3COOK",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_mg_c2h3o2_2",
    "need": [
      "KF",
      "Mg(C2H3O2)2"
    ],
    "eq": "2KF + Mg(C2H3O2)2 → 2CH3COOK + MgF2↓",
    "out": [
      "CH3COOK",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_kf",
    "need": [
      "KF",
      "Al(C2H3O2)3"
    ],
    "eq": "3KF + Al(C2H3O2)3 → 3CH3COOK + AlF3↓",
    "out": [
      "CH3COOK",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_kf",
    "need": [
      "KF",
      "Fe(C2H3O2)3"
    ],
    "eq": "3KF + Fe(C2H3O2)3 → 3CH3COOK + FeF3↓",
    "out": [
      "CH3COOK",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_kf_pb_c2h3o2_2",
    "need": [
      "KF",
      "Pb(C2H3O2)2"
    ],
    "eq": "2KF + Pb(C2H3O2)2 → 2CH3COOK + PbF2↓",
    "out": [
      "CH3COOK",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_kf",
    "need": [
      "KF",
      "BaS"
    ],
    "eq": "2KF + BaS → K2S + BaF2↓",
    "out": [
      "K2S",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_li3po4",
    "need": [
      "FeF2",
      "Li3PO4"
    ],
    "eq": "3FeF2 + 2Li3PO4 → Fe3(PO4)2↓ + 6LiF",
    "out": [
      "Fe3(PO4)2",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_k3po4",
    "need": [
      "FeF2",
      "K3PO4"
    ],
    "eq": "3FeF2 + 2K3PO4 → Fe3(PO4)2↓ + 6KF",
    "out": [
      "Fe3(PO4)2",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_fef2",
    "need": [
      "FeF2",
      "Ca(C2H3O2)2"
    ],
    "eq": "FeF2 + Ca(C2H3O2)2 → Fe(C2H3O2)2 + CaF2↓",
    "out": [
      "Fe(C2H3O2)2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_fef2",
    "need": [
      "FeF2",
      "Ba(C2H3O2)2"
    ],
    "eq": "FeF2 + Ba(C2H3O2)2 → Fe(C2H3O2)2 + BaF2↓",
    "out": [
      "Fe(C2H3O2)2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_mg_c2h3o2_2",
    "need": [
      "FeF2",
      "Mg(C2H3O2)2"
    ],
    "eq": "FeF2 + Mg(C2H3O2)2 → Fe(C2H3O2)2 + MgF2↓",
    "out": [
      "Fe(C2H3O2)2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_fef2",
    "need": [
      "FeF2",
      "Al(C2H3O2)3"
    ],
    "eq": "3FeF2 + 2Al(C2H3O2)3 → 3Fe(C2H3O2)2 + 2AlF3↓",
    "out": [
      "Fe(C2H3O2)2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_fef2",
    "need": [
      "FeF2",
      "Fe(C2H3O2)3"
    ],
    "eq": "3FeF2 + 2Fe(C2H3O2)3 → 3Fe(C2H3O2)2 + 2FeF3↓",
    "out": [
      "Fe(C2H3O2)2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_pb_c2h3o2_2",
    "need": [
      "FeF2",
      "Pb(C2H3O2)2"
    ],
    "eq": "FeF2 + Pb(C2H3O2)2 → Fe(C2H3O2)2 + PbF2↓",
    "out": [
      "Fe(C2H3O2)2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_li2so3",
    "need": [
      "FeF2",
      "Li2SO3"
    ],
    "eq": "FeF2 + Li2SO3 → FeSO3↓ + 2LiF",
    "out": [
      "FeSO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_k2so3",
    "need": [
      "FeF2",
      "K2SO3"
    ],
    "eq": "FeF2 + K2SO3 → FeSO3↓ + 2KF",
    "out": [
      "FeSO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_li2s",
    "need": [
      "FeF2",
      "Li2S"
    ],
    "eq": "FeF2 + Li2S → FeS↓ + 2LiF",
    "out": [
      "FeS",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_k2s",
    "need": [
      "FeF2",
      "K2S"
    ],
    "eq": "FeF2 + K2S → FeS↓ + 2KF",
    "out": [
      "FeS",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_fef2",
    "need": [
      "FeF2",
      "BaS"
    ],
    "eq": "FeF2 + BaS → FeS↓ + BaF2↓",
    "out": [
      "FeS",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_li2sio3",
    "need": [
      "FeF2",
      "Li2SiO3"
    ],
    "eq": "FeF2 + Li2SiO3 → FeSiO3↓ + 2LiF",
    "out": [
      "FeSiO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_na2sio3",
    "need": [
      "FeF2",
      "Na2SiO3"
    ],
    "eq": "FeF2 + Na2SiO3 → FeSiO3↓ + 2NaF",
    "out": [
      "FeSiO3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fef2_k2sio3",
    "need": [
      "FeF2",
      "K2SiO3"
    ],
    "eq": "FeF2 + K2SiO3 → FeSiO3↓ + 2KF",
    "out": [
      "FeSiO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_li3po4",
    "need": [
      "CuF2",
      "Li3PO4"
    ],
    "eq": "3CuF2 + 2Li3PO4 → Cu3(PO4)2↓ + 6LiF",
    "out": [
      "Cu3(PO4)2",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_k3po4",
    "need": [
      "CuF2",
      "K3PO4"
    ],
    "eq": "3CuF2 + 2K3PO4 → Cu3(PO4)2↓ + 6KF",
    "out": [
      "Cu3(PO4)2",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_cuf2",
    "need": [
      "CuF2",
      "Ca(C2H3O2)2"
    ],
    "eq": "CuF2 + Ca(C2H3O2)2 → Cu(C2H3O2)2 + CaF2↓",
    "out": [
      "Cu(C2H3O2)2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_cuf2",
    "need": [
      "CuF2",
      "Ba(C2H3O2)2"
    ],
    "eq": "CuF2 + Ba(C2H3O2)2 → Cu(C2H3O2)2 + BaF2↓",
    "out": [
      "Cu(C2H3O2)2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_mg_c2h3o2_2",
    "need": [
      "CuF2",
      "Mg(C2H3O2)2"
    ],
    "eq": "CuF2 + Mg(C2H3O2)2 → Cu(C2H3O2)2 + MgF2↓",
    "out": [
      "Cu(C2H3O2)2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_cuf2",
    "need": [
      "CuF2",
      "Al(C2H3O2)3"
    ],
    "eq": "3CuF2 + 2Al(C2H3O2)3 → 3Cu(C2H3O2)2 + 2AlF3↓",
    "out": [
      "Cu(C2H3O2)2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_fe_c2h3o2_3",
    "need": [
      "CuF2",
      "Fe(C2H3O2)3"
    ],
    "eq": "3CuF2 + 2Fe(C2H3O2)3 → 3Cu(C2H3O2)2 + 2FeF3↓",
    "out": [
      "Cu(C2H3O2)2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_pb_c2h3o2_2",
    "need": [
      "CuF2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CuF2 + Pb(C2H3O2)2 → Cu(C2H3O2)2 + PbF2↓",
    "out": [
      "Cu(C2H3O2)2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_li2so3",
    "need": [
      "CuF2",
      "Li2SO3"
    ],
    "eq": "CuF2 + Li2SO3 → CuSO3↓ + 2LiF",
    "out": [
      "CuSO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_k2so3",
    "need": [
      "CuF2",
      "K2SO3"
    ],
    "eq": "CuF2 + K2SO3 → CuSO3↓ + 2KF",
    "out": [
      "CuSO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_li2s",
    "need": [
      "CuF2",
      "Li2S"
    ],
    "eq": "CuF2 + Li2S → CuS↓ + 2LiF",
    "out": [
      "CuS",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_k2s",
    "need": [
      "CuF2",
      "K2S"
    ],
    "eq": "CuF2 + K2S → CuS↓ + 2KF",
    "out": [
      "CuS",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cuf2",
    "need": [
      "CuF2",
      "BaS"
    ],
    "eq": "CuF2 + BaS → CuS↓ + BaF2↓",
    "out": [
      "CuS",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_li2sio3",
    "need": [
      "CuF2",
      "Li2SiO3"
    ],
    "eq": "CuF2 + Li2SiO3 → CuSiO3↓ + 2LiF",
    "out": [
      "CuSiO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_na2sio3",
    "need": [
      "CuF2",
      "Na2SiO3"
    ],
    "eq": "CuF2 + Na2SiO3 → CuSiO3↓ + 2NaF",
    "out": [
      "CuSiO3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cuf2_k2sio3",
    "need": [
      "CuF2",
      "K2SiO3"
    ],
    "eq": "CuF2 + K2SiO3 → CuSiO3↓ + 2KF",
    "out": [
      "CuSiO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_li3po4",
    "need": [
      "CoF2",
      "Li3PO4"
    ],
    "eq": "3CoF2 + 2Li3PO4 → Co3(PO4)2↓ + 6LiF",
    "out": [
      "Co3(PO4)2",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_k3po4",
    "need": [
      "CoF2",
      "K3PO4"
    ],
    "eq": "3CoF2 + 2K3PO4 → Co3(PO4)2↓ + 6KF",
    "out": [
      "Co3(PO4)2",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_cof2",
    "need": [
      "CoF2",
      "Ca(C2H3O2)2"
    ],
    "eq": "CoF2 + Ca(C2H3O2)2 → Co(C2H3O2)2 + CaF2↓",
    "out": [
      "Co(C2H3O2)2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_cof2",
    "need": [
      "CoF2",
      "Ba(C2H3O2)2"
    ],
    "eq": "CoF2 + Ba(C2H3O2)2 → Co(C2H3O2)2 + BaF2↓",
    "out": [
      "Co(C2H3O2)2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_mg_c2h3o2_2",
    "need": [
      "CoF2",
      "Mg(C2H3O2)2"
    ],
    "eq": "CoF2 + Mg(C2H3O2)2 → Co(C2H3O2)2 + MgF2↓",
    "out": [
      "Co(C2H3O2)2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_cof2",
    "need": [
      "CoF2",
      "Al(C2H3O2)3"
    ],
    "eq": "3CoF2 + 2Al(C2H3O2)3 → 3Co(C2H3O2)2 + 2AlF3↓",
    "out": [
      "Co(C2H3O2)2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_fe_c2h3o2_3",
    "need": [
      "CoF2",
      "Fe(C2H3O2)3"
    ],
    "eq": "3CoF2 + 2Fe(C2H3O2)3 → 3Co(C2H3O2)2 + 2FeF3↓",
    "out": [
      "Co(C2H3O2)2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_pb_c2h3o2_2",
    "need": [
      "CoF2",
      "Pb(C2H3O2)2"
    ],
    "eq": "CoF2 + Pb(C2H3O2)2 → Co(C2H3O2)2 + PbF2↓",
    "out": [
      "Co(C2H3O2)2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_li2so3",
    "need": [
      "CoF2",
      "Li2SO3"
    ],
    "eq": "CoF2 + Li2SO3 → CoSO3↓ + 2LiF",
    "out": [
      "CoSO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_k2so3",
    "need": [
      "CoF2",
      "K2SO3"
    ],
    "eq": "CoF2 + K2SO3 → CoSO3↓ + 2KF",
    "out": [
      "CoSO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_li2s",
    "need": [
      "CoF2",
      "Li2S"
    ],
    "eq": "CoF2 + Li2S → CoS↓ + 2LiF",
    "out": [
      "CoS",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_k2s",
    "need": [
      "CoF2",
      "K2S"
    ],
    "eq": "CoF2 + K2S → CoS↓ + 2KF",
    "out": [
      "CoS",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cof2",
    "need": [
      "CoF2",
      "BaS"
    ],
    "eq": "CoF2 + BaS → CoS↓ + BaF2↓",
    "out": [
      "CoS",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_li2sio3",
    "need": [
      "CoF2",
      "Li2SiO3"
    ],
    "eq": "CoF2 + Li2SiO3 → CoSiO3↓ + 2LiF",
    "out": [
      "CoSiO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_na2sio3",
    "need": [
      "CoF2",
      "Na2SiO3"
    ],
    "eq": "CoF2 + Na2SiO3 → CoSiO3↓ + 2NaF",
    "out": [
      "CoSiO3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cof2_k2sio3",
    "need": [
      "CoF2",
      "K2SiO3"
    ],
    "eq": "CoF2 + K2SiO3 → CoSiO3↓ + 2KF",
    "out": [
      "CoSiO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_li3po4",
    "need": [
      "CrF3",
      "Li3PO4"
    ],
    "eq": "CrF3 + Li3PO4 → CrPO4↓ + 3LiF",
    "out": [
      "CrPO4",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_k3po4",
    "need": [
      "CrF3",
      "K3PO4"
    ],
    "eq": "CrF3 + K3PO4 → CrPO4↓ + 3KF",
    "out": [
      "CrPO4",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_crf3",
    "need": [
      "CrF3",
      "Ca(C2H3O2)2"
    ],
    "eq": "2CrF3 + 3Ca(C2H3O2)2 → 2Cr(C2H3O2)3 + 3CaF2↓",
    "out": [
      "Cr(C2H3O2)3",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_crf3",
    "need": [
      "CrF3",
      "Ba(C2H3O2)2"
    ],
    "eq": "2CrF3 + 3Ba(C2H3O2)2 → 2Cr(C2H3O2)3 + 3BaF2↓",
    "out": [
      "Cr(C2H3O2)3",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_mg_c2h3o2_2",
    "need": [
      "CrF3",
      "Mg(C2H3O2)2"
    ],
    "eq": "2CrF3 + 3Mg(C2H3O2)2 → 2Cr(C2H3O2)3 + 3MgF2↓",
    "out": [
      "Cr(C2H3O2)3",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_crf3",
    "need": [
      "CrF3",
      "Al(C2H3O2)3"
    ],
    "eq": "CrF3 + Al(C2H3O2)3 → Cr(C2H3O2)3 + AlF3↓",
    "out": [
      "Cr(C2H3O2)3",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_fe_c2h3o2_3",
    "need": [
      "CrF3",
      "Fe(C2H3O2)3"
    ],
    "eq": "CrF3 + Fe(C2H3O2)3 → Cr(C2H3O2)3 + FeF3↓",
    "out": [
      "Cr(C2H3O2)3",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_pb_c2h3o2_2",
    "need": [
      "CrF3",
      "Pb(C2H3O2)2"
    ],
    "eq": "2CrF3 + 3Pb(C2H3O2)2 → 2Cr(C2H3O2)3 + 3PbF2↓",
    "out": [
      "Cr(C2H3O2)3",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_li2sio3",
    "need": [
      "CrF3",
      "Li2SiO3"
    ],
    "eq": "2CrF3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 6LiF",
    "out": [
      "Cr2(SiO3)3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_na2sio3",
    "need": [
      "CrF3",
      "Na2SiO3"
    ],
    "eq": "2CrF3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 6NaF",
    "out": [
      "Cr2(SiO3)3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crf3_k2sio3",
    "need": [
      "CrF3",
      "K2SiO3"
    ],
    "eq": "2CrF3 + 3K2SiO3 → Cr2(SiO3)3↓ + 6KF",
    "out": [
      "Cr2(SiO3)3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_nif2",
    "need": [
      "NiF2",
      "Li3PO4"
    ],
    "eq": "3NiF2 + 2Li3PO4 → Ni3(PO4)2↓ + 6LiF",
    "out": [
      "Ni3(PO4)2",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_nif2",
    "need": [
      "NiF2",
      "K3PO4"
    ],
    "eq": "3NiF2 + 2K3PO4 → Ni3(PO4)2↓ + 6KF",
    "out": [
      "Ni3(PO4)2",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_nif2",
    "need": [
      "NiF2",
      "Ca(C2H3O2)2"
    ],
    "eq": "NiF2 + Ca(C2H3O2)2 → Ni(C2H3O2)2 + CaF2↓",
    "out": [
      "Ni(C2H3O2)2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_nif2",
    "need": [
      "NiF2",
      "Ba(C2H3O2)2"
    ],
    "eq": "NiF2 + Ba(C2H3O2)2 → Ni(C2H3O2)2 + BaF2↓",
    "out": [
      "Ni(C2H3O2)2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_nif2",
    "need": [
      "NiF2",
      "Mg(C2H3O2)2"
    ],
    "eq": "NiF2 + Mg(C2H3O2)2 → Ni(C2H3O2)2 + MgF2↓",
    "out": [
      "Ni(C2H3O2)2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_nif2",
    "need": [
      "NiF2",
      "Al(C2H3O2)3"
    ],
    "eq": "3NiF2 + 2Al(C2H3O2)3 → 3Ni(C2H3O2)2 + 2AlF3↓",
    "out": [
      "Ni(C2H3O2)2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_nif2",
    "need": [
      "NiF2",
      "Fe(C2H3O2)3"
    ],
    "eq": "3NiF2 + 2Fe(C2H3O2)3 → 3Ni(C2H3O2)2 + 2FeF3↓",
    "out": [
      "Ni(C2H3O2)2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_nif2_pb_c2h3o2_2",
    "need": [
      "NiF2",
      "Pb(C2H3O2)2"
    ],
    "eq": "NiF2 + Pb(C2H3O2)2 → Ni(C2H3O2)2 + PbF2↓",
    "out": [
      "Ni(C2H3O2)2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_nif2",
    "need": [
      "NiF2",
      "Li2SO3"
    ],
    "eq": "NiF2 + Li2SO3 → NiSO3↓ + 2LiF",
    "out": [
      "NiSO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_nif2",
    "need": [
      "NiF2",
      "K2SO3"
    ],
    "eq": "NiF2 + K2SO3 → NiSO3↓ + 2KF",
    "out": [
      "NiSO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_nif2",
    "need": [
      "NiF2",
      "Li2S"
    ],
    "eq": "NiF2 + Li2S → NiS↓ + 2LiF",
    "out": [
      "NiS",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_nif2",
    "need": [
      "NiF2",
      "K2S"
    ],
    "eq": "NiF2 + K2S → NiS↓ + 2KF",
    "out": [
      "NiS",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_nif2",
    "need": [
      "NiF2",
      "BaS"
    ],
    "eq": "NiF2 + BaS → NiS↓ + BaF2↓",
    "out": [
      "NiS",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_nif2",
    "need": [
      "NiF2",
      "Li2SiO3"
    ],
    "eq": "NiF2 + Li2SiO3 → NiSiO3↓ + 2LiF",
    "out": [
      "NiSiO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_nif2",
    "need": [
      "NiF2",
      "Na2SiO3"
    ],
    "eq": "NiF2 + Na2SiO3 → NiSiO3↓ + 2NaF",
    "out": [
      "NiSiO3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_nif2",
    "need": [
      "NiF2",
      "K2SiO3"
    ],
    "eq": "NiF2 + K2SiO3 → NiSiO3↓ + 2KF",
    "out": [
      "NiSiO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mnf2",
    "need": [
      "MnF2",
      "Li3PO4"
    ],
    "eq": "3MnF2 + 2Li3PO4 → Mn3(PO4)2↓ + 6LiF",
    "out": [
      "Mn3(PO4)2",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mnf2",
    "need": [
      "MnF2",
      "K3PO4"
    ],
    "eq": "3MnF2 + 2K3PO4 → Mn3(PO4)2↓ + 6KF",
    "out": [
      "Mn3(PO4)2",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_mnf2",
    "need": [
      "MnF2",
      "Ca(C2H3O2)2"
    ],
    "eq": "MnF2 + Ca(C2H3O2)2 → Mn(C2H3O2)2 + CaF2↓",
    "out": [
      "Mn(C2H3O2)2",
      "CaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_mnf2",
    "need": [
      "MnF2",
      "Ba(C2H3O2)2"
    ],
    "eq": "MnF2 + Ba(C2H3O2)2 → Mn(C2H3O2)2 + BaF2↓",
    "out": [
      "Mn(C2H3O2)2",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_mnf2",
    "need": [
      "MnF2",
      "Mg(C2H3O2)2"
    ],
    "eq": "MnF2 + Mg(C2H3O2)2 → Mn(C2H3O2)2 + MgF2↓",
    "out": [
      "Mn(C2H3O2)2",
      "MgF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_mnf2",
    "need": [
      "MnF2",
      "Al(C2H3O2)3"
    ],
    "eq": "3MnF2 + 2Al(C2H3O2)3 → 3Mn(C2H3O2)2 + 2AlF3↓",
    "out": [
      "Mn(C2H3O2)2",
      "AlF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_mnf2",
    "need": [
      "MnF2",
      "Fe(C2H3O2)3"
    ],
    "eq": "3MnF2 + 2Fe(C2H3O2)3 → 3Mn(C2H3O2)2 + 2FeF3↓",
    "out": [
      "Mn(C2H3O2)2",
      "FeF3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_pb_c2h3o2_2",
    "need": [
      "MnF2",
      "Pb(C2H3O2)2"
    ],
    "eq": "MnF2 + Pb(C2H3O2)2 → Mn(C2H3O2)2 + PbF2↓",
    "out": [
      "Mn(C2H3O2)2",
      "PbF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mnf2",
    "need": [
      "MnF2",
      "Li2SO3"
    ],
    "eq": "MnF2 + Li2SO3 → MnSO3↓ + 2LiF",
    "out": [
      "MnSO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mnf2",
    "need": [
      "MnF2",
      "K2SO3"
    ],
    "eq": "MnF2 + K2SO3 → MnSO3↓ + 2KF",
    "out": [
      "MnSO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mnf2",
    "need": [
      "MnF2",
      "Li2S"
    ],
    "eq": "MnF2 + Li2S → MnS↓ + 2LiF",
    "out": [
      "MnS",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mnf2",
    "need": [
      "MnF2",
      "K2S"
    ],
    "eq": "MnF2 + K2S → MnS↓ + 2KF",
    "out": [
      "MnS",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mnf2",
    "need": [
      "MnF2",
      "BaS"
    ],
    "eq": "MnF2 + BaS → MnS↓ + BaF2↓",
    "out": [
      "MnS",
      "BaF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mnf2",
    "need": [
      "MnF2",
      "Li2SiO3"
    ],
    "eq": "MnF2 + Li2SiO3 → MnSiO3↓ + 2LiF",
    "out": [
      "MnSiO3",
      "LiF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mnf2_na2sio3",
    "need": [
      "MnF2",
      "Na2SiO3"
    ],
    "eq": "MnF2 + Na2SiO3 → MnSiO3↓ + 2NaF",
    "out": [
      "MnSiO3",
      "NaF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mnf2",
    "need": [
      "MnF2",
      "K2SiO3"
    ],
    "eq": "MnF2 + K2SiO3 → MnSiO3↓ + 2KF",
    "out": [
      "MnSiO3",
      "KF"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_li2so4",
    "need": [
      "Li2SO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "Li2SO4 + Ca(C2H3O2)2 → 2LiC2H3O2 + CaSO4↓",
    "out": [
      "LiC2H3O2",
      "CaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_li2so4",
    "need": [
      "Li2SO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "Li2SO4 + Ba(C2H3O2)2 → 2LiC2H3O2 + BaSO4↓",
    "out": [
      "LiC2H3O2",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so4_pb_c2h3o2_2",
    "need": [
      "Li2SO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "Li2SO4 + Pb(C2H3O2)2 → 2LiC2H3O2 + PbSO4↓",
    "out": [
      "LiC2H3O2",
      "PbSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_li2so4",
    "need": [
      "Li2SO4",
      "BaS"
    ],
    "eq": "Li2SO4 + BaS → Li2S + BaSO4↓",
    "out": [
      "Li2S",
      "BaSO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_li2so4",
    "need": [
      "Li2SO4",
      "AgF"
    ],
    "eq": "Li2SO4 + 2AgF → 2LiF + Ag2SO4↓",
    "out": [
      "LiF",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_li2so4",
    "need": [
      "Li2SO4",
      "AgC2H3O2"
    ],
    "eq": "Li2SO4 + 2AgC2H3O2 → 2LiC2H3O2 + Ag2SO4↓",
    "out": [
      "LiC2H3O2",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Ca(C2H3O2)2 → 6LiC2H3O2 + Ca3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Ca3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Ba(C2H3O2)2 → 6LiC2H3O2 + Ba3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mg_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Mg(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Mg(C2H3O2)2 → 6LiC2H3O2 + Mg3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Mg3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_li3po4",
    "need": [
      "Li3PO4",
      "Al(C2H3O2)3"
    ],
    "eq": "Li3PO4 + Al(C2H3O2)3 → 3LiC2H3O2 + AlPO4↓",
    "out": [
      "LiC2H3O2",
      "AlPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Fe(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Fe(C2H3O2)2 → 6LiC2H3O2 + Fe3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Fe3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_li3po4",
    "need": [
      "Li3PO4",
      "Fe(C2H3O2)3"
    ],
    "eq": "Li3PO4 + Fe(C2H3O2)3 → 3LiC2H3O2 + FePO4↓",
    "out": [
      "LiC2H3O2",
      "FePO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Cu(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Cu(C2H3O2)2 → 6LiC2H3O2 + Cu3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Cu3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_zn_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Zn(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Zn(C2H3O2)2 → 6LiC2H3O2 + Zn3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Co(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Co(C2H3O2)2 → 6LiC2H3O2 + Co3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Co3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_li3po4",
    "need": [
      "Li3PO4",
      "Cr(C2H3O2)3"
    ],
    "eq": "Li3PO4 + Cr(C2H3O2)3 → 3LiC2H3O2 + CrPO4↓",
    "out": [
      "LiC2H3O2",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_ni_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Ni(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Ni(C2H3O2)2 → 6LiC2H3O2 + Ni3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Ni3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_mn_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Mn(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Mn(C2H3O2)2 → 6LiC2H3O2 + Mn3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Mn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_pb_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Pb(C2H3O2)2 → 6LiC2H3O2 + Pb3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Pb3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_li3po4",
    "need": [
      "Li3PO4",
      "BaS"
    ],
    "eq": "2Li3PO4 + 3BaS → 3Li2S + Ba3(PO4)2↓",
    "out": [
      "Li2S",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_li3po4",
    "need": [
      "Li3PO4",
      "GaF3"
    ],
    "eq": "Li3PO4 + GaF3 → 3LiF + GaPO4↓",
    "out": [
      "LiF",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_li3po4",
    "need": [
      "Li3PO4",
      "Ga2(SO4)3"
    ],
    "eq": "2Li3PO4 + Ga2(SO4)3 → 3Li2SO4 + 2GaPO4↓",
    "out": [
      "Li2SO4",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_li3po4",
    "need": [
      "Li3PO4",
      "Ga(C2H3O2)3"
    ],
    "eq": "Li3PO4 + Ga(C2H3O2)3 → 3LiC2H3O2 + GaPO4↓",
    "out": [
      "LiC2H3O2",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_li3po4",
    "need": [
      "Li3PO4",
      "AgF"
    ],
    "eq": "Li3PO4 + 3AgF → 3LiF + Ag3PO4↓",
    "out": [
      "LiF",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_li3po4",
    "need": [
      "Li3PO4",
      "AgC2H3O2"
    ],
    "eq": "Li3PO4 + 3AgC2H3O2 → 3LiC2H3O2 + Ag3PO4↓",
    "out": [
      "LiC2H3O2",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_li3po4",
    "need": [
      "Li3PO4",
      "CrBr2"
    ],
    "eq": "2Li3PO4 + 3CrBr2 → 6LiBr + Cr3(PO4)2↓",
    "out": [
      "LiBr",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_li3po4",
    "need": [
      "Li3PO4",
      "CrSO4"
    ],
    "eq": "2Li3PO4 + 3CrSO4 → 3Li2SO4 + Cr3(PO4)2↓",
    "out": [
      "Li2SO4",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_li3po4",
    "need": [
      "Li3PO4",
      "Cr(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Cr(C2H3O2)2 → 6LiC2H3O2 + Cr3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_sn_c2h3o2_2",
    "need": [
      "Li3PO4",
      "Sn(C2H3O2)2"
    ],
    "eq": "2Li3PO4 + 3Sn(C2H3O2)2 → 6LiC2H3O2 + Sn3(PO4)2↓",
    "out": [
      "LiC2H3O2",
      "Sn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_li3po4",
    "need": [
      "Li3PO4",
      "Cr(NO3)2"
    ],
    "eq": "2Li3PO4 + 3Cr(NO3)2 → 6LiNO3 + Cr3(PO4)2↓",
    "out": [
      "LiNO3",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li3po4_znf2",
    "need": [
      "Li3PO4",
      "ZnF2"
    ],
    "eq": "2Li3PO4 + 3ZnF2 → 6LiF + Zn3(PO4)2↓",
    "out": [
      "LiF",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Ca(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Ca(C2H3O2)2 → 6CH3COOK + Ca3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Ca3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ca3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Ba(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Ba(C2H3O2)2 → 6CH3COOK + Ba3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mg_c2h3o2_2",
    "need": [
      "K3PO4",
      "Mg(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Mg(C2H3O2)2 → 6CH3COOK + Mg3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Mg3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mg3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_k3po4",
    "need": [
      "K3PO4",
      "Al(C2H3O2)3"
    ],
    "eq": "K3PO4 + Al(C2H3O2)3 → 3CH3COOK + AlPO4↓",
    "out": [
      "CH3COOK",
      "AlPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Fe(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Fe(C2H3O2)2 → 6CH3COOK + Fe3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Fe3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_k3po4",
    "need": [
      "K3PO4",
      "Fe(C2H3O2)3"
    ],
    "eq": "K3PO4 + Fe(C2H3O2)3 → 3CH3COOK + FePO4↓",
    "out": [
      "CH3COOK",
      "FePO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FePO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Cu(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Cu(C2H3O2)2 → 6CH3COOK + Cu3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Cu3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cu3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_zn_c2h3o2_2",
    "need": [
      "K3PO4",
      "Zn(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Zn(C2H3O2)2 → 6CH3COOK + Zn3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Co(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Co(C2H3O2)2 → 6CH3COOK + Co3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Co3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Co3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_k3po4",
    "need": [
      "K3PO4",
      "Cr(C2H3O2)3"
    ],
    "eq": "K3PO4 + Cr(C2H3O2)3 → 3CH3COOK + CrPO4↓",
    "out": [
      "CH3COOK",
      "CrPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_ni_c2h3o2_2",
    "need": [
      "K3PO4",
      "Ni(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Ni(C2H3O2)2 → 6CH3COOK + Ni3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Ni3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ni3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_mn_c2h3o2_2",
    "need": [
      "K3PO4",
      "Mn(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Mn(C2H3O2)2 → 6CH3COOK + Mn3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Mn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Mn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_pb_c2h3o2_2",
    "need": [
      "K3PO4",
      "Pb(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Pb(C2H3O2)2 → 6CH3COOK + Pb3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Pb3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Pb3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k3po4",
    "need": [
      "K3PO4",
      "BaS"
    ],
    "eq": "2K3PO4 + 3BaS → 3K2S + Ba3(PO4)2↓",
    "out": [
      "K2S",
      "Ba3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ba3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_k3po4",
    "need": [
      "K3PO4",
      "GaF3"
    ],
    "eq": "K3PO4 + GaF3 → 3KF + GaPO4↓",
    "out": [
      "KF",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_k3po4",
    "need": [
      "K3PO4",
      "Ga2(SO4)3"
    ],
    "eq": "2K3PO4 + Ga2(SO4)3 → 3K2SO4 + 2GaPO4↓",
    "out": [
      "K2SO4",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_k3po4",
    "need": [
      "K3PO4",
      "Ga(C2H3O2)3"
    ],
    "eq": "K3PO4 + Ga(C2H3O2)3 → 3CH3COOK + GaPO4↓",
    "out": [
      "CH3COOK",
      "GaPO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; GaPO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k3po4",
    "need": [
      "K3PO4",
      "AgF"
    ],
    "eq": "K3PO4 + 3AgF → 3KF + Ag3PO4↓",
    "out": [
      "KF",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k3po4",
    "need": [
      "K3PO4",
      "AgC2H3O2"
    ],
    "eq": "K3PO4 + 3AgC2H3O2 → 3CH3COOK + Ag3PO4↓",
    "out": [
      "CH3COOK",
      "Ag3PO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag3PO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_k3po4",
    "need": [
      "K3PO4",
      "CrBr2"
    ],
    "eq": "2K3PO4 + 3CrBr2 → 6KBr + Cr3(PO4)2↓",
    "out": [
      "KBr",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_k3po4",
    "need": [
      "K3PO4",
      "CrSO4"
    ],
    "eq": "2K3PO4 + 3CrSO4 → 3K2SO4 + Cr3(PO4)2↓",
    "out": [
      "K2SO4",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_k3po4",
    "need": [
      "K3PO4",
      "Cr(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Cr(C2H3O2)2 → 6CH3COOK + Cr3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_sn_c2h3o2_2",
    "need": [
      "K3PO4",
      "Sn(C2H3O2)2"
    ],
    "eq": "2K3PO4 + 3Sn(C2H3O2)2 → 6CH3COOK + Sn3(PO4)2↓",
    "out": [
      "CH3COOK",
      "Sn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Sn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_k3po4",
    "need": [
      "K3PO4",
      "Cr(NO3)2"
    ],
    "eq": "2K3PO4 + 3Cr(NO3)2 → 6KNO3 + Cr3(PO4)2↓",
    "out": [
      "KNO3",
      "Cr3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k3po4_znf2",
    "need": [
      "K3PO4",
      "ZnF2"
    ],
    "eq": "2K3PO4 + 3ZnF2 → 6KF + Zn3(PO4)2↓",
    "out": [
      "KF",
      "Zn3(PO4)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Zn3(PO4)2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_li2so3",
    "need": [
      "Ca(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Ca(C2H3O2)2 + Li2SO3 → CaSO3↓ + 2LiC2H3O2",
    "out": [
      "CaSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k2so3",
    "need": [
      "Ca(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Ca(C2H3O2)2 + K2SO3 → CaSO3↓ + 2CH3COOK",
    "out": [
      "CaSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_li2sio3",
    "need": [
      "Ca(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Ca(C2H3O2)2 + Li2SiO3 → CaSiO3↓ + 2LiC2H3O2",
    "out": [
      "CaSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_na2sio3",
    "need": [
      "Ca(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Ca(C2H3O2)2 + Na2SiO3 → CaSiO3↓ + 2CH3COONa",
    "out": [
      "CaSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_k2sio3",
    "need": [
      "Ca(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Ca(C2H3O2)2 + K2SiO3 → CaSiO3↓ + 2CH3COOK",
    "out": [
      "CaSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_gaf3",
    "need": [
      "Ca(C2H3O2)2",
      "GaF3"
    ],
    "eq": "3Ca(C2H3O2)2 + 2GaF3 → 3CaF2↓ + 2Ga(C2H3O2)3",
    "out": [
      "CaF2",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_ga2_so4_3",
    "need": [
      "Ca(C2H3O2)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Ca(C2H3O2)2 + Ga2(SO4)3 → 3CaSO4↓ + 2Ga(C2H3O2)3",
    "out": [
      "CaSO4",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ca_c2h3o2_2",
    "need": [
      "Ca(C2H3O2)2",
      "AgF"
    ],
    "eq": "Ca(C2H3O2)2 + 2AgF → CaF2↓ + 2AgC2H3O2",
    "out": [
      "CaF2",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_crso4",
    "need": [
      "Ca(C2H3O2)2",
      "CrSO4"
    ],
    "eq": "Ca(C2H3O2)2 + CrSO4 → CaSO4↓ + Cr(C2H3O2)2",
    "out": [
      "CaSO4",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ca_c2h3o2_2_znf2",
    "need": [
      "Ca(C2H3O2)2",
      "ZnF2"
    ],
    "eq": "Ca(C2H3O2)2 + ZnF2 → CaF2↓ + Zn(C2H3O2)2",
    "out": [
      "CaF2",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_li2so3",
    "need": [
      "Ba(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Ba(C2H3O2)2 + Li2SO3 → BaSO3↓ + 2LiC2H3O2",
    "out": [
      "BaSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k2so3",
    "need": [
      "Ba(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Ba(C2H3O2)2 + K2SO3 → BaSO3↓ + 2CH3COOK",
    "out": [
      "BaSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_li2sio3",
    "need": [
      "Ba(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Ba(C2H3O2)2 + Li2SiO3 → BaSiO3↓ + 2LiC2H3O2",
    "out": [
      "BaSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_na2sio3",
    "need": [
      "Ba(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Ba(C2H3O2)2 + Na2SiO3 → BaSiO3↓ + 2CH3COONa",
    "out": [
      "BaSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_k2sio3",
    "need": [
      "Ba(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Ba(C2H3O2)2 + K2SiO3 → BaSiO3↓ + 2CH3COOK",
    "out": [
      "BaSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_gaf3",
    "need": [
      "Ba(C2H3O2)2",
      "GaF3"
    ],
    "eq": "3Ba(C2H3O2)2 + 2GaF3 → 3BaF2↓ + 2Ga(C2H3O2)3",
    "out": [
      "BaF2",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_ga2_so4_3",
    "need": [
      "Ba(C2H3O2)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Ba(C2H3O2)2 + Ga2(SO4)3 → 3BaSO4↓ + 2Ga(C2H3O2)3",
    "out": [
      "BaSO4",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ba_c2h3o2_2",
    "need": [
      "Ba(C2H3O2)2",
      "AgF"
    ],
    "eq": "Ba(C2H3O2)2 + 2AgF → BaF2↓ + 2AgC2H3O2",
    "out": [
      "BaF2",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_crso4",
    "need": [
      "Ba(C2H3O2)2",
      "CrSO4"
    ],
    "eq": "Ba(C2H3O2)2 + CrSO4 → BaSO4↓ + Cr(C2H3O2)2",
    "out": [
      "BaSO4",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ba_c2h3o2_2_znf2",
    "need": [
      "Ba(C2H3O2)2",
      "ZnF2"
    ],
    "eq": "Ba(C2H3O2)2 + ZnF2 → BaF2↓ + Zn(C2H3O2)2",
    "out": [
      "BaF2",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Mg(C2H3O2)2 + Li2SO3 → MgSO3↓ + 2LiC2H3O2",
    "out": [
      "MgSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Mg(C2H3O2)2 + K2SO3 → MgSO3↓ + 2CH3COOK",
    "out": [
      "MgSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Mg(C2H3O2)2 + Li2S → MgS↓ + 2LiC2H3O2",
    "out": [
      "MgS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "K2S"
    ],
    "eq": "Mg(C2H3O2)2 + K2S → MgS↓ + 2CH3COOK",
    "out": [
      "MgS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "BaS"
    ],
    "eq": "Mg(C2H3O2)2 + BaS → MgS↓ + Ba(C2H3O2)2",
    "out": [
      "MgS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Mg(C2H3O2)2 + Li2SiO3 → MgSiO3↓ + 2LiC2H3O2",
    "out": [
      "MgSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_na2sio3",
    "need": [
      "Mg(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Mg(C2H3O2)2 + Na2SiO3 → MgSiO3↓ + 2CH3COONa",
    "out": [
      "MgSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Mg(C2H3O2)2 + K2SiO3 → MgSiO3↓ + 2CH3COOK",
    "out": [
      "MgSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "GaF3"
    ],
    "eq": "3Mg(C2H3O2)2 + 2GaF3 → 3MgF2↓ + 2Ga(C2H3O2)3",
    "out": [
      "MgF2",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_mg_c2h3o2_2",
    "need": [
      "Mg(C2H3O2)2",
      "AgF"
    ],
    "eq": "Mg(C2H3O2)2 + 2AgF → MgF2↓ + 2AgC2H3O2",
    "out": [
      "MgF2",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mg_c2h3o2_2_znf2",
    "need": [
      "Mg(C2H3O2)2",
      "ZnF2"
    ],
    "eq": "Mg(C2H3O2)2 + ZnF2 → MgF2↓ + Zn(C2H3O2)2",
    "out": [
      "MgF2",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MgF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_li2sio3",
    "need": [
      "Al(C2H3O2)3",
      "Li2SiO3"
    ],
    "eq": "2Al(C2H3O2)3 + 3Li2SiO3 → Al2(SiO3)3↓ + 6LiC2H3O2",
    "out": [
      "Al2(SiO3)3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_na2sio3",
    "need": [
      "Al(C2H3O2)3",
      "Na2SiO3"
    ],
    "eq": "2Al(C2H3O2)3 + 3Na2SiO3 → Al2(SiO3)3↓ + 6CH3COONa",
    "out": [
      "Al2(SiO3)3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_k2sio3",
    "need": [
      "Al(C2H3O2)3",
      "K2SiO3"
    ],
    "eq": "2Al(C2H3O2)3 + 3K2SiO3 → Al2(SiO3)3↓ + 6CH3COOK",
    "out": [
      "Al2(SiO3)3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Al2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_gaf3",
    "need": [
      "Al(C2H3O2)3",
      "GaF3"
    ],
    "eq": "Al(C2H3O2)3 + GaF3 → AlF3↓ + Ga(C2H3O2)3",
    "out": [
      "AlF3",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_al_c2h3o2_3",
    "need": [
      "Al(C2H3O2)3",
      "AgF"
    ],
    "eq": "Al(C2H3O2)3 + 3AgF → AlF3↓ + 3AgC2H3O2",
    "out": [
      "AlF3",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_al_c2h3o2_3_znf2",
    "need": [
      "Al(C2H3O2)3",
      "ZnF2"
    ],
    "eq": "2Al(C2H3O2)3 + 3ZnF2 → 2AlF3↓ + 3Zn(C2H3O2)2",
    "out": [
      "AlF3",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AlF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_li2so3",
    "need": [
      "Fe(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Fe(C2H3O2)2 + Li2SO3 → FeSO3↓ + 2LiC2H3O2",
    "out": [
      "FeSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_k2so3",
    "need": [
      "Fe(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Fe(C2H3O2)2 + K2SO3 → FeSO3↓ + 2CH3COOK",
    "out": [
      "FeSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_li2s",
    "need": [
      "Fe(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Fe(C2H3O2)2 + Li2S → FeS↓ + 2LiC2H3O2",
    "out": [
      "FeS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_k2s",
    "need": [
      "Fe(C2H3O2)2",
      "K2S"
    ],
    "eq": "Fe(C2H3O2)2 + K2S → FeS↓ + 2CH3COOK",
    "out": [
      "FeS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_fe_c2h3o2_2",
    "need": [
      "Fe(C2H3O2)2",
      "BaS"
    ],
    "eq": "Fe(C2H3O2)2 + BaS → FeS↓ + Ba(C2H3O2)2",
    "out": [
      "FeS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_li2sio3",
    "need": [
      "Fe(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Fe(C2H3O2)2 + Li2SiO3 → FeSiO3↓ + 2LiC2H3O2",
    "out": [
      "FeSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_na2sio3",
    "need": [
      "Fe(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Fe(C2H3O2)2 + Na2SiO3 → FeSiO3↓ + 2CH3COONa",
    "out": [
      "FeSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_2_k2sio3",
    "need": [
      "Fe(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Fe(C2H3O2)2 + K2SiO3 → FeSiO3↓ + 2CH3COOK",
    "out": [
      "FeSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_li2sio3",
    "need": [
      "Fe(C2H3O2)3",
      "Li2SiO3"
    ],
    "eq": "2Fe(C2H3O2)3 + 3Li2SiO3 → Fe2(SiO3)3↓ + 6LiC2H3O2",
    "out": [
      "Fe2(SiO3)3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_na2sio3",
    "need": [
      "Fe(C2H3O2)3",
      "Na2SiO3"
    ],
    "eq": "2Fe(C2H3O2)3 + 3Na2SiO3 → Fe2(SiO3)3↓ + 6CH3COONa",
    "out": [
      "Fe2(SiO3)3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_k2sio3",
    "need": [
      "Fe(C2H3O2)3",
      "K2SiO3"
    ],
    "eq": "2Fe(C2H3O2)3 + 3K2SiO3 → Fe2(SiO3)3↓ + 6CH3COOK",
    "out": [
      "Fe2(SiO3)3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Fe2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_gaf3",
    "need": [
      "Fe(C2H3O2)3",
      "GaF3"
    ],
    "eq": "Fe(C2H3O2)3 + GaF3 → FeF3↓ + Ga(C2H3O2)3",
    "out": [
      "FeF3",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_fe_c2h3o2_3",
    "need": [
      "Fe(C2H3O2)3",
      "AgF"
    ],
    "eq": "Fe(C2H3O2)3 + 3AgF → FeF3↓ + 3AgC2H3O2",
    "out": [
      "FeF3",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_fe_c2h3o2_3_znf2",
    "need": [
      "Fe(C2H3O2)3",
      "ZnF2"
    ],
    "eq": "2Fe(C2H3O2)3 + 3ZnF2 → 2FeF3↓ + 3Zn(C2H3O2)2",
    "out": [
      "FeF3",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; FeF3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_li2so3",
    "need": [
      "Cu(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Cu(C2H3O2)2 + Li2SO3 → CuSO3↓ + 2LiC2H3O2",
    "out": [
      "CuSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_k2so3",
    "need": [
      "Cu(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Cu(C2H3O2)2 + K2SO3 → CuSO3↓ + 2CH3COOK",
    "out": [
      "CuSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_li2s",
    "need": [
      "Cu(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Cu(C2H3O2)2 + Li2S → CuS↓ + 2LiC2H3O2",
    "out": [
      "CuS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_k2s",
    "need": [
      "Cu(C2H3O2)2",
      "K2S"
    ],
    "eq": "Cu(C2H3O2)2 + K2S → CuS↓ + 2CH3COOK",
    "out": [
      "CuS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cu_c2h3o2_2",
    "need": [
      "Cu(C2H3O2)2",
      "BaS"
    ],
    "eq": "Cu(C2H3O2)2 + BaS → CuS↓ + Ba(C2H3O2)2",
    "out": [
      "CuS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_li2sio3",
    "need": [
      "Cu(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Cu(C2H3O2)2 + Li2SiO3 → CuSiO3↓ + 2LiC2H3O2",
    "out": [
      "CuSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_na2sio3",
    "need": [
      "Cu(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Cu(C2H3O2)2 + Na2SiO3 → CuSiO3↓ + 2CH3COONa",
    "out": [
      "CuSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cu_c2h3o2_2_k2sio3",
    "need": [
      "Cu(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Cu(C2H3O2)2 + K2SiO3 → CuSiO3↓ + 2CH3COOK",
    "out": [
      "CuSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CuSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Zn(C2H3O2)2 + Li2SO3 → ZnSO3↓ + 2LiC2H3O2",
    "out": [
      "ZnSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Zn(C2H3O2)2 + K2SO3 → ZnSO3↓ + 2CH3COOK",
    "out": [
      "ZnSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Zn(C2H3O2)2 + Li2S → ZnS↓ + 2LiC2H3O2",
    "out": [
      "ZnS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "K2S"
    ],
    "eq": "Zn(C2H3O2)2 + K2S → ZnS↓ + 2CH3COOK",
    "out": [
      "ZnS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "BaS"
    ],
    "eq": "Zn(C2H3O2)2 + BaS → ZnS↓ + Ba(C2H3O2)2",
    "out": [
      "ZnS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Zn(C2H3O2)2 + Li2SiO3 → ZnSiO3↓ + 2LiC2H3O2",
    "out": [
      "ZnSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Zn(C2H3O2)2 + Na2SiO3 → ZnSiO3↓ + 2CH3COONa",
    "out": [
      "ZnSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_zn_c2h3o2_2",
    "need": [
      "Zn(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Zn(C2H3O2)2 + K2SiO3 → ZnSiO3↓ + 2CH3COOK",
    "out": [
      "ZnSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_li2so3",
    "need": [
      "Co(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Co(C2H3O2)2 + Li2SO3 → CoSO3↓ + 2LiC2H3O2",
    "out": [
      "CoSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_k2so3",
    "need": [
      "Co(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Co(C2H3O2)2 + K2SO3 → CoSO3↓ + 2CH3COOK",
    "out": [
      "CoSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_li2s",
    "need": [
      "Co(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Co(C2H3O2)2 + Li2S → CoS↓ + 2LiC2H3O2",
    "out": [
      "CoS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_k2s",
    "need": [
      "Co(C2H3O2)2",
      "K2S"
    ],
    "eq": "Co(C2H3O2)2 + K2S → CoS↓ + 2CH3COOK",
    "out": [
      "CoS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_co_c2h3o2_2",
    "need": [
      "Co(C2H3O2)2",
      "BaS"
    ],
    "eq": "Co(C2H3O2)2 + BaS → CoS↓ + Ba(C2H3O2)2",
    "out": [
      "CoS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_li2sio3",
    "need": [
      "Co(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Co(C2H3O2)2 + Li2SiO3 → CoSiO3↓ + 2LiC2H3O2",
    "out": [
      "CoSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_na2sio3",
    "need": [
      "Co(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Co(C2H3O2)2 + Na2SiO3 → CoSiO3↓ + 2CH3COONa",
    "out": [
      "CoSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_co_c2h3o2_2_k2sio3",
    "need": [
      "Co(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Co(C2H3O2)2 + K2SiO3 → CoSiO3↓ + 2CH3COOK",
    "out": [
      "CoSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CoSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_li2sio3",
    "need": [
      "Cr(C2H3O2)3",
      "Li2SiO3"
    ],
    "eq": "2Cr(C2H3O2)3 + 3Li2SiO3 → Cr2(SiO3)3↓ + 6LiC2H3O2",
    "out": [
      "Cr2(SiO3)3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_na2sio3",
    "need": [
      "Cr(C2H3O2)3",
      "Na2SiO3"
    ],
    "eq": "2Cr(C2H3O2)3 + 3Na2SiO3 → Cr2(SiO3)3↓ + 6CH3COONa",
    "out": [
      "Cr2(SiO3)3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_3_k2sio3",
    "need": [
      "Cr(C2H3O2)3",
      "K2SiO3"
    ],
    "eq": "2Cr(C2H3O2)3 + 3K2SiO3 → Cr2(SiO3)3↓ + 6CH3COOK",
    "out": [
      "Cr2(SiO3)3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Cr2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Ni(C2H3O2)2 + Li2SO3 → NiSO3↓ + 2LiC2H3O2",
    "out": [
      "NiSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Ni(C2H3O2)2 + K2SO3 → NiSO3↓ + 2CH3COOK",
    "out": [
      "NiSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Ni(C2H3O2)2 + Li2S → NiS↓ + 2LiC2H3O2",
    "out": [
      "NiS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "K2S"
    ],
    "eq": "Ni(C2H3O2)2 + K2S → NiS↓ + 2CH3COOK",
    "out": [
      "NiS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "BaS"
    ],
    "eq": "Ni(C2H3O2)2 + BaS → NiS↓ + Ba(C2H3O2)2",
    "out": [
      "NiS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Ni(C2H3O2)2 + Li2SiO3 → NiSiO3↓ + 2LiC2H3O2",
    "out": [
      "NiSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Ni(C2H3O2)2 + Na2SiO3 → NiSiO3↓ + 2CH3COONa",
    "out": [
      "NiSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_ni_c2h3o2_2",
    "need": [
      "Ni(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Ni(C2H3O2)2 + K2SiO3 → NiSiO3↓ + 2CH3COOK",
    "out": [
      "NiSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; NiSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Mn(C2H3O2)2 + Li2SO3 → MnSO3↓ + 2LiC2H3O2",
    "out": [
      "MnSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Mn(C2H3O2)2 + K2SO3 → MnSO3↓ + 2CH3COOK",
    "out": [
      "MnSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Mn(C2H3O2)2 + Li2S → MnS↓ + 2LiC2H3O2",
    "out": [
      "MnS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "K2S"
    ],
    "eq": "Mn(C2H3O2)2 + K2S → MnS↓ + 2CH3COOK",
    "out": [
      "MnS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "BaS"
    ],
    "eq": "Mn(C2H3O2)2 + BaS → MnS↓ + Ba(C2H3O2)2",
    "out": [
      "MnS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Mn(C2H3O2)2 + Li2SiO3 → MnSiO3↓ + 2LiC2H3O2",
    "out": [
      "MnSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_mn_c2h3o2_2_na2sio3",
    "need": [
      "Mn(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Mn(C2H3O2)2 + Na2SiO3 → MnSiO3↓ + 2CH3COONa",
    "out": [
      "MnSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_mn_c2h3o2_2",
    "need": [
      "Mn(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Mn(C2H3O2)2 + K2SiO3 → MnSiO3↓ + 2CH3COOK",
    "out": [
      "MnSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; MnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "Li2SO3"
    ],
    "eq": "Pb(C2H3O2)2 + Li2SO3 → PbSO3↓ + 2LiC2H3O2",
    "out": [
      "PbSO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "K2SO3"
    ],
    "eq": "Pb(C2H3O2)2 + K2SO3 → PbSO3↓ + 2CH3COOK",
    "out": [
      "PbSO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "Li2S"
    ],
    "eq": "Pb(C2H3O2)2 + Li2S → PbS↓ + 2LiC2H3O2",
    "out": [
      "PbS",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "K2S"
    ],
    "eq": "Pb(C2H3O2)2 + K2S → PbS↓ + 2CH3COOK",
    "out": [
      "PbS",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "BaS"
    ],
    "eq": "Pb(C2H3O2)2 + BaS → PbS↓ + Ba(C2H3O2)2",
    "out": [
      "PbS",
      "Ba(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "Li2SiO3"
    ],
    "eq": "Pb(C2H3O2)2 + Li2SiO3 → PbSiO3↓ + 2LiC2H3O2",
    "out": [
      "PbSiO3",
      "LiC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "Na2SiO3"
    ],
    "eq": "Pb(C2H3O2)2 + Na2SiO3 → PbSiO3↓ + 2CH3COONa",
    "out": [
      "PbSiO3",
      "CH3COONa"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "K2SiO3"
    ],
    "eq": "Pb(C2H3O2)2 + K2SiO3 → PbSiO3↓ + 2CH3COOK",
    "out": [
      "PbSiO3",
      "CH3COOK"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "GaF3"
    ],
    "eq": "3Pb(C2H3O2)2 + 2GaF3 → 3PbF2↓ + 2Ga(C2H3O2)3",
    "out": [
      "PbF2",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "Ga2(SO4)3"
    ],
    "eq": "3Pb(C2H3O2)2 + Ga2(SO4)3 → 3PbSO4↓ + 2Ga(C2H3O2)3",
    "out": [
      "PbSO4",
      "Ga(C2H3O2)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "AgF"
    ],
    "eq": "Pb(C2H3O2)2 + 2AgF → PbF2↓ + 2AgC2H3O2",
    "out": [
      "PbF2",
      "AgC2H3O2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "CrBr2"
    ],
    "eq": "Pb(C2H3O2)2 + CrBr2 → PbBr2↓ + Cr(C2H3O2)2",
    "out": [
      "PbBr2",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbBr2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_pb_c2h3o2_2",
    "need": [
      "Pb(C2H3O2)2",
      "CrSO4"
    ],
    "eq": "Pb(C2H3O2)2 + CrSO4 → PbSO4↓ + Cr(C2H3O2)2",
    "out": [
      "PbSO4",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_pb_c2h3o2_2_znf2",
    "need": [
      "Pb(C2H3O2)2",
      "ZnF2"
    ],
    "eq": "Pb(C2H3O2)2 + ZnF2 → PbF2↓ + Zn(C2H3O2)2",
    "out": [
      "PbF2",
      "Zn(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; PbF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_li2so3",
    "need": [
      "Li2SO3",
      "BaS"
    ],
    "eq": "Li2SO3 + BaS → Li2S + BaSO3↓",
    "out": [
      "Li2S",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_li2so3",
    "need": [
      "Li2SO3",
      "AgF"
    ],
    "eq": "Li2SO3 + 2AgF → 2LiF + Ag2SO3↓",
    "out": [
      "LiF",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_li2so3",
    "need": [
      "Li2SO3",
      "AgC2H3O2"
    ],
    "eq": "Li2SO3 + 2AgC2H3O2 → 2LiC2H3O2 + Ag2SO3↓",
    "out": [
      "LiC2H3O2",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_li2so3",
    "need": [
      "Li2SO3",
      "CrBr2"
    ],
    "eq": "Li2SO3 + CrBr2 → 2LiBr + CrSO3↓",
    "out": [
      "LiBr",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_li2so3",
    "need": [
      "Li2SO3",
      "CrSO4"
    ],
    "eq": "Li2SO3 + CrSO4 → Li2SO4 + CrSO3↓",
    "out": [
      "Li2SO4",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_li2so3",
    "need": [
      "Li2SO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "Li2SO3 + Cr(C2H3O2)2 → 2LiC2H3O2 + CrSO3↓",
    "out": [
      "LiC2H3O2",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_sn_c2h3o2_2",
    "need": [
      "Li2SO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "Li2SO3 + Sn(C2H3O2)2 → 2LiC2H3O2 + SnSO3↓",
    "out": [
      "LiC2H3O2",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_li2so3",
    "need": [
      "Li2SO3",
      "Cr(NO3)2"
    ],
    "eq": "Li2SO3 + Cr(NO3)2 → 2LiNO3 + CrSO3↓",
    "out": [
      "LiNO3",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2so3_znf2",
    "need": [
      "Li2SO3",
      "ZnF2"
    ],
    "eq": "Li2SO3 + ZnF2 → 2LiF + ZnSO3↓",
    "out": [
      "LiF",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k2so3",
    "need": [
      "K2SO3",
      "BaS"
    ],
    "eq": "K2SO3 + BaS → K2S + BaSO3↓",
    "out": [
      "K2S",
      "BaSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2so3",
    "need": [
      "K2SO3",
      "AgF"
    ],
    "eq": "K2SO3 + 2AgF → 2KF + Ag2SO3↓",
    "out": [
      "KF",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2so3",
    "need": [
      "K2SO3",
      "AgC2H3O2"
    ],
    "eq": "K2SO3 + 2AgC2H3O2 → 2CH3COOK + Ag2SO3↓",
    "out": [
      "CH3COOK",
      "Ag2SO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_k2so3",
    "need": [
      "K2SO3",
      "CrBr2"
    ],
    "eq": "K2SO3 + CrBr2 → 2KBr + CrSO3↓",
    "out": [
      "KBr",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_k2so3",
    "need": [
      "K2SO3",
      "CrSO4"
    ],
    "eq": "K2SO3 + CrSO4 → K2SO4 + CrSO3↓",
    "out": [
      "K2SO4",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_k2so3",
    "need": [
      "K2SO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "K2SO3 + Cr(C2H3O2)2 → 2CH3COOK + CrSO3↓",
    "out": [
      "CH3COOK",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_sn_c2h3o2_2",
    "need": [
      "K2SO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "K2SO3 + Sn(C2H3O2)2 → 2CH3COOK + SnSO3↓",
    "out": [
      "CH3COOK",
      "SnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_k2so3",
    "need": [
      "K2SO3",
      "Cr(NO3)2"
    ],
    "eq": "K2SO3 + Cr(NO3)2 → 2KNO3 + CrSO3↓",
    "out": [
      "KNO3",
      "CrSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2so3_znf2",
    "need": [
      "K2SO3",
      "ZnF2"
    ],
    "eq": "K2SO3 + ZnF2 → 2KF + ZnSO3↓",
    "out": [
      "KF",
      "ZnSO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_li2s",
    "need": [
      "Li2S",
      "AgF"
    ],
    "eq": "Li2S + 2AgF → 2LiF + Ag2S↓",
    "out": [
      "LiF",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_li2s",
    "need": [
      "Li2S",
      "AgC2H3O2"
    ],
    "eq": "Li2S + 2AgC2H3O2 → 2LiC2H3O2 + Ag2S↓",
    "out": [
      "LiC2H3O2",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_li2s",
    "need": [
      "Li2S",
      "CrBr2"
    ],
    "eq": "Li2S + CrBr2 → 2LiBr + CrS↓",
    "out": [
      "LiBr",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_li2s",
    "need": [
      "Li2S",
      "CrSO4"
    ],
    "eq": "Li2S + CrSO4 → Li2SO4 + CrS↓",
    "out": [
      "Li2SO4",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_li2s",
    "need": [
      "Li2S",
      "Cr(C2H3O2)2"
    ],
    "eq": "Li2S + Cr(C2H3O2)2 → 2LiC2H3O2 + CrS↓",
    "out": [
      "LiC2H3O2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_sn_c2h3o2_2",
    "need": [
      "Li2S",
      "Sn(C2H3O2)2"
    ],
    "eq": "Li2S + Sn(C2H3O2)2 → 2LiC2H3O2 + SnS↓",
    "out": [
      "LiC2H3O2",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_li2s",
    "need": [
      "Li2S",
      "Cr(NO3)2"
    ],
    "eq": "Li2S + Cr(NO3)2 → 2LiNO3 + CrS↓",
    "out": [
      "LiNO3",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2s_znf2",
    "need": [
      "Li2S",
      "ZnF2"
    ],
    "eq": "Li2S + ZnF2 → 2LiF + ZnS↓",
    "out": [
      "LiF",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2s",
    "need": [
      "K2S",
      "AgF"
    ],
    "eq": "K2S + 2AgF → 2KF + Ag2S↓",
    "out": [
      "KF",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2s",
    "need": [
      "K2S",
      "AgC2H3O2"
    ],
    "eq": "K2S + 2AgC2H3O2 → 2CH3COOK + Ag2S↓",
    "out": [
      "CH3COOK",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_k2s",
    "need": [
      "K2S",
      "CrBr2"
    ],
    "eq": "K2S + CrBr2 → 2KBr + CrS↓",
    "out": [
      "KBr",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_k2s",
    "need": [
      "K2S",
      "CrSO4"
    ],
    "eq": "K2S + CrSO4 → K2SO4 + CrS↓",
    "out": [
      "K2SO4",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_k2s",
    "need": [
      "K2S",
      "Cr(C2H3O2)2"
    ],
    "eq": "K2S + Cr(C2H3O2)2 → 2CH3COOK + CrS↓",
    "out": [
      "CH3COOK",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_sn_c2h3o2_2",
    "need": [
      "K2S",
      "Sn(C2H3O2)2"
    ],
    "eq": "K2S + Sn(C2H3O2)2 → 2CH3COOK + SnS↓",
    "out": [
      "CH3COOK",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_k2s",
    "need": [
      "K2S",
      "Cr(NO3)2"
    ],
    "eq": "K2S + Cr(NO3)2 → 2KNO3 + CrS↓",
    "out": [
      "KNO3",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2s_znf2",
    "need": [
      "K2S",
      "ZnF2"
    ],
    "eq": "K2S + ZnF2 → 2KF + ZnS↓",
    "out": [
      "KF",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_li2sio3",
    "need": [
      "BaS",
      "Li2SiO3"
    ],
    "eq": "BaS + Li2SiO3 → BaSiO3↓ + Li2S",
    "out": [
      "BaSiO3",
      "Li2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_na2sio3",
    "need": [
      "BaS",
      "Na2SiO3"
    ],
    "eq": "BaS + Na2SiO3 → BaSiO3↓ + Na2S",
    "out": [
      "BaSiO3",
      "Na2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_k2sio3",
    "need": [
      "BaS",
      "K2SiO3"
    ],
    "eq": "BaS + K2SiO3 → BaSiO3↓ + K2S",
    "out": [
      "BaSiO3",
      "K2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_bas",
    "need": [
      "BaS",
      "AgF"
    ],
    "eq": "BaS + 2AgF → BaF2↓ + Ag2S↓",
    "out": [
      "BaF2",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_bas",
    "need": [
      "BaS",
      "AgC2H3O2"
    ],
    "eq": "BaS + 2AgC2H3O2 → Ba(C2H3O2)2 + Ag2S↓",
    "out": [
      "Ba(C2H3O2)2",
      "Ag2S"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2S ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_crbr2",
    "need": [
      "BaS",
      "CrBr2"
    ],
    "eq": "BaS + CrBr2 → BaBr2 + CrS↓",
    "out": [
      "BaBr2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_crso4",
    "need": [
      "BaS",
      "CrSO4"
    ],
    "eq": "BaS + CrSO4 → BaSO4↓ + CrS↓",
    "out": [
      "BaSO4",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaSO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cr_c2h3o2_2",
    "need": [
      "BaS",
      "Cr(C2H3O2)2"
    ],
    "eq": "BaS + Cr(C2H3O2)2 → Ba(C2H3O2)2 + CrS↓",
    "out": [
      "Ba(C2H3O2)2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_sn_c2h3o2_2",
    "need": [
      "BaS",
      "Sn(C2H3O2)2"
    ],
    "eq": "BaS + Sn(C2H3O2)2 → Ba(C2H3O2)2 + SnS↓",
    "out": [
      "Ba(C2H3O2)2",
      "SnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_cr_no3_2",
    "need": [
      "BaS",
      "Cr(NO3)2"
    ],
    "eq": "BaS + Cr(NO3)2 → Ba(NO3)2 + CrS↓",
    "out": [
      "Ba(NO3)2",
      "CrS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrS ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_bas_znf2",
    "need": [
      "BaS",
      "ZnF2"
    ],
    "eq": "BaS + ZnF2 → BaF2↓ + ZnS↓",
    "out": [
      "BaF2",
      "ZnS"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; BaF2 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_li2sio3",
    "need": [
      "Li2SiO3",
      "GaF3"
    ],
    "eq": "3Li2SiO3 + 2GaF3 → 6LiF + Ga2(SiO3)3↓",
    "out": [
      "LiF",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_li2sio3",
    "need": [
      "Li2SiO3",
      "Ga2(SO4)3"
    ],
    "eq": "3Li2SiO3 + Ga2(SO4)3 → 3Li2SO4 + Ga2(SiO3)3↓",
    "out": [
      "Li2SO4",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_li2sio3",
    "need": [
      "Li2SiO3",
      "Ga(C2H3O2)3"
    ],
    "eq": "3Li2SiO3 + 2Ga(C2H3O2)3 → 6LiC2H3O2 + Ga2(SiO3)3↓",
    "out": [
      "LiC2H3O2",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_li2sio3",
    "need": [
      "Li2SiO3",
      "AgF"
    ],
    "eq": "Li2SiO3 + 2AgF → 2LiF + Ag2SiO3↓",
    "out": [
      "LiF",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_li2sio3",
    "need": [
      "Li2SiO3",
      "AgC2H3O2"
    ],
    "eq": "Li2SiO3 + 2AgC2H3O2 → 2LiC2H3O2 + Ag2SiO3↓",
    "out": [
      "LiC2H3O2",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_li2sio3",
    "need": [
      "Li2SiO3",
      "CrBr2"
    ],
    "eq": "Li2SiO3 + CrBr2 → 2LiBr + CrSiO3↓",
    "out": [
      "LiBr",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_li2sio3",
    "need": [
      "Li2SiO3",
      "CrSO4"
    ],
    "eq": "Li2SiO3 + CrSO4 → Li2SO4 + CrSiO3↓",
    "out": [
      "Li2SO4",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_li2sio3",
    "need": [
      "Li2SiO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "Li2SiO3 + Cr(C2H3O2)2 → 2LiC2H3O2 + CrSiO3↓",
    "out": [
      "LiC2H3O2",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_sn_c2h3o2_2",
    "need": [
      "Li2SiO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "Li2SiO3 + Sn(C2H3O2)2 → 2LiC2H3O2 + SnSiO3↓",
    "out": [
      "LiC2H3O2",
      "SnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_li2sio3",
    "need": [
      "Li2SiO3",
      "Cr(NO3)2"
    ],
    "eq": "Li2SiO3 + Cr(NO3)2 → 2LiNO3 + CrSiO3↓",
    "out": [
      "LiNO3",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_li2sio3_znf2",
    "need": [
      "Li2SiO3",
      "ZnF2"
    ],
    "eq": "Li2SiO3 + ZnF2 → 2LiF + ZnSiO3↓",
    "out": [
      "LiF",
      "ZnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_na2sio3",
    "need": [
      "Na2SiO3",
      "GaF3"
    ],
    "eq": "3Na2SiO3 + 2GaF3 → 6NaF + Ga2(SiO3)3↓",
    "out": [
      "NaF",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_na2sio3",
    "need": [
      "Na2SiO3",
      "Ga2(SO4)3"
    ],
    "eq": "3Na2SiO3 + Ga2(SO4)3 → 3Na2SO4 + Ga2(SiO3)3↓",
    "out": [
      "Na2SO4",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_na2sio3",
    "need": [
      "Na2SiO3",
      "Ga(C2H3O2)3"
    ],
    "eq": "3Na2SiO3 + 2Ga(C2H3O2)3 → 6CH3COONa + Ga2(SiO3)3↓",
    "out": [
      "CH3COONa",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_na2sio3",
    "need": [
      "Na2SiO3",
      "AgF"
    ],
    "eq": "Na2SiO3 + 2AgF → 2NaF + Ag2SiO3↓",
    "out": [
      "NaF",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_na2sio3",
    "need": [
      "Na2SiO3",
      "AgC2H3O2"
    ],
    "eq": "Na2SiO3 + 2AgC2H3O2 → 2CH3COONa + Ag2SiO3↓",
    "out": [
      "CH3COONa",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_na2sio3",
    "need": [
      "Na2SiO3",
      "CrBr2"
    ],
    "eq": "Na2SiO3 + CrBr2 → 2NaBr + CrSiO3↓",
    "out": [
      "NaBr",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_na2sio3",
    "need": [
      "Na2SiO3",
      "CrSO4"
    ],
    "eq": "Na2SiO3 + CrSO4 → Na2SO4 + CrSiO3↓",
    "out": [
      "Na2SO4",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_na2sio3",
    "need": [
      "Na2SiO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "Na2SiO3 + Cr(C2H3O2)2 → 2CH3COONa + CrSiO3↓",
    "out": [
      "CH3COONa",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_sn_c2h3o2_2",
    "need": [
      "Na2SiO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "Na2SiO3 + Sn(C2H3O2)2 → 2CH3COONa + SnSiO3↓",
    "out": [
      "CH3COONa",
      "SnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_na2sio3",
    "need": [
      "Na2SiO3",
      "Cr(NO3)2"
    ],
    "eq": "Na2SiO3 + Cr(NO3)2 → 2NaNO3 + CrSiO3↓",
    "out": [
      "NaNO3",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_na2sio3_znf2",
    "need": [
      "Na2SiO3",
      "ZnF2"
    ],
    "eq": "Na2SiO3 + ZnF2 → 2NaF + ZnSiO3↓",
    "out": [
      "NaF",
      "ZnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_gaf3_k2sio3",
    "need": [
      "K2SiO3",
      "GaF3"
    ],
    "eq": "3K2SiO3 + 2GaF3 → 6KF + Ga2(SiO3)3↓",
    "out": [
      "KF",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga2_so4_3_k2sio3",
    "need": [
      "K2SiO3",
      "Ga2(SO4)3"
    ],
    "eq": "3K2SiO3 + Ga2(SO4)3 → 3K2SO4 + Ga2(SiO3)3↓",
    "out": [
      "K2SO4",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_ga_c2h3o2_3_k2sio3",
    "need": [
      "K2SiO3",
      "Ga(C2H3O2)3"
    ],
    "eq": "3K2SiO3 + 2Ga(C2H3O2)3 → 6CH3COOK + Ga2(SiO3)3↓",
    "out": [
      "CH3COOK",
      "Ga2(SiO3)3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ga2(SiO3)3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_k2sio3",
    "need": [
      "K2SiO3",
      "AgF"
    ],
    "eq": "K2SiO3 + 2AgF → 2KF + Ag2SiO3↓",
    "out": [
      "KF",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_k2sio3",
    "need": [
      "K2SiO3",
      "AgC2H3O2"
    ],
    "eq": "K2SiO3 + 2AgC2H3O2 → 2CH3COOK + Ag2SiO3↓",
    "out": [
      "CH3COOK",
      "Ag2SiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crbr2_k2sio3",
    "need": [
      "K2SiO3",
      "CrBr2"
    ],
    "eq": "K2SiO3 + CrBr2 → 2KBr + CrSiO3↓",
    "out": [
      "KBr",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_crso4_k2sio3",
    "need": [
      "K2SiO3",
      "CrSO4"
    ],
    "eq": "K2SiO3 + CrSO4 → K2SO4 + CrSiO3↓",
    "out": [
      "K2SO4",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_c2h3o2_2_k2sio3",
    "need": [
      "K2SiO3",
      "Cr(C2H3O2)2"
    ],
    "eq": "K2SiO3 + Cr(C2H3O2)2 → 2CH3COOK + CrSiO3↓",
    "out": [
      "CH3COOK",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_sn_c2h3o2_2",
    "need": [
      "K2SiO3",
      "Sn(C2H3O2)2"
    ],
    "eq": "K2SiO3 + Sn(C2H3O2)2 → 2CH3COOK + SnSiO3↓",
    "out": [
      "CH3COOK",
      "SnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; SnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_cr_no3_2_k2sio3",
    "need": [
      "K2SiO3",
      "Cr(NO3)2"
    ],
    "eq": "K2SiO3 + Cr(NO3)2 → 2KNO3 + CrSiO3↓",
    "out": [
      "KNO3",
      "CrSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; CrSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_k2sio3_znf2",
    "need": [
      "K2SiO3",
      "ZnF2"
    ],
    "eq": "K2SiO3 + ZnF2 → 2KF + ZnSiO3↓",
    "out": [
      "KF",
      "ZnSiO3"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; ZnSiO3 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_ga2_so4_3",
    "need": [
      "Ga2(SO4)3",
      "AgF"
    ],
    "eq": "Ga2(SO4)3 + 6AgF → 2GaF3 + 3Ag2SO4↓",
    "out": [
      "GaF3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_ga2_so4_3",
    "need": [
      "Ga2(SO4)3",
      "AgC2H3O2"
    ],
    "eq": "Ga2(SO4)3 + 6AgC2H3O2 → 2Ga(C2H3O2)3 + 3Ag2SO4↓",
    "out": [
      "Ga(C2H3O2)3",
      "Ag2SO4"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_crbr2",
    "need": [
      "AgF",
      "CrBr2"
    ],
    "eq": "2AgF + CrBr2 → 2AgBr↓ + CrF2",
    "out": [
      "AgBr",
      "CrF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agf_crso4",
    "need": [
      "AgF",
      "CrSO4"
    ],
    "eq": "2AgF + CrSO4 → Ag2SO4↓ + CrF2",
    "out": [
      "Ag2SO4",
      "CrF2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_crbr2",
    "need": [
      "AgC2H3O2",
      "CrBr2"
    ],
    "eq": "2AgC2H3O2 + CrBr2 → 2AgBr↓ + Cr(C2H3O2)2",
    "out": [
      "AgBr",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; AgBr ít tan tạo kết tủa theo quy tắc độ tan."
  },
  {
    "id": "pptx_agc2h3o2_crso4",
    "need": [
      "AgC2H3O2",
      "CrSO4"
    ],
    "eq": "2AgC2H3O2 + CrSO4 → Ag2SO4↓ + Cr(C2H3O2)2",
    "out": [
      "Ag2SO4",
      "Cr(C2H3O2)2"
    ],
    "col": "#eeeeea",
    "dur": 6,
    "bub": 0.06,
    "precip": "#eeeeea",
    "explain": "Trao đổi ion trong dung dịch; Ag2SO4 ít tan tạo kết tủa theo quy tắc độ tan."
  }
]);

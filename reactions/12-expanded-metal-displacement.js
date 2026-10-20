// Chemistry Lab 3D — expanded single-displacement reactions.
// Candidate rules follow a standard metal activity series and current soluble-salt inventory.
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "metx_mg_cucl2",
    "need": [
      "Mg",
      "CuCl2"
    ],
    "eq": "Mg + CuCl2 → MgCl2 + Cu",
    "out": [
      "MgCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_crcl3",
    "need": [
      "Mg",
      "CrCl3"
    ],
    "eq": "3Mg + 2CrCl3 → 3MgCl2 + 2Cr",
    "out": [
      "MgCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_mncl2",
    "need": [
      "Mg",
      "MnCl2"
    ],
    "eq": "Mg + MnCl2 → MgCl2 + Mn",
    "out": [
      "MgCl2",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_febr2",
    "need": [
      "Mg",
      "FeBr2"
    ],
    "eq": "Mg + FeBr2 → MgBr2 + Fe",
    "out": [
      "MgBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_febr3",
    "need": [
      "Mg",
      "FeBr3"
    ],
    "eq": "3Mg + 2FeBr3 → 3MgBr2 + 2Fe",
    "out": [
      "MgBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_nicl2",
    "need": [
      "Mg",
      "NiCl2"
    ],
    "eq": "Mg + NiCl2 → MgCl2 + Ni",
    "out": [
      "MgCl2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_sncl2",
    "need": [
      "Mg",
      "SnCl2"
    ],
    "eq": "Mg + SnCl2 → MgCl2 + Sn",
    "out": [
      "MgCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_gacl3",
    "need": [
      "Mg",
      "GaCl3"
    ],
    "eq": "3Mg + 2GaCl3 → 3MgCl2 + 2Ga",
    "out": [
      "MgCl2",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_gabr3",
    "need": [
      "Mg",
      "GaBr3"
    ],
    "eq": "3Mg + 2GaBr3 → 3MgBr2 + 2Ga",
    "out": [
      "MgBr2",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_crcl2",
    "need": [
      "Mg",
      "CrCl2"
    ],
    "eq": "Mg + CrCl2 → MgCl2 + Cr",
    "out": [
      "MgCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_sn_no3_2",
    "need": [
      "Mg",
      "Sn(NO3)2"
    ],
    "eq": "Mg + Sn(NO3)2 → Mg(NO3)2 + Sn",
    "out": [
      "Mg(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cr_no3_3",
    "need": [
      "Mg",
      "Cr(NO3)3"
    ],
    "eq": "3Mg + 2Cr(NO3)3 → 3Mg(NO3)2 + 2Cr",
    "out": [
      "Mg(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cubr2",
    "need": [
      "Mg",
      "CuBr2"
    ],
    "eq": "Mg + CuBr2 → MgBr2 + Cu",
    "out": [
      "MgBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_mnbr2",
    "need": [
      "Mg",
      "MnBr2"
    ],
    "eq": "Mg + MnBr2 → MgBr2 + Mn",
    "out": [
      "MgBr2",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_albr3",
    "need": [
      "Mg",
      "AlBr3"
    ],
    "eq": "3Mg + 2AlBr3 → 3MgBr2 + 2Al",
    "out": [
      "MgBr2",
      "Al"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Al, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_crbr3",
    "need": [
      "Mg",
      "CrBr3"
    ],
    "eq": "3Mg + 2CrBr3 → 3MgBr2 + 2Cr",
    "out": [
      "MgBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_fef2",
    "need": [
      "Mg",
      "FeF2"
    ],
    "eq": "Mg + FeF2 → MgF2↓ + Fe",
    "out": [
      "MgF2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_cuf2",
    "need": [
      "Mg",
      "CuF2"
    ],
    "eq": "Mg + CuF2 → MgF2↓ + Cu",
    "out": [
      "MgF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_cof2",
    "need": [
      "Mg",
      "CoF2"
    ],
    "eq": "Mg + CoF2 → MgF2↓ + Co",
    "out": [
      "MgF2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_crf3",
    "need": [
      "Mg",
      "CrF3"
    ],
    "eq": "3Mg + 2CrF3 → 3MgF2↓ + 2Cr",
    "out": [
      "MgF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_nif2",
    "need": [
      "Mg",
      "NiF2"
    ],
    "eq": "Mg + NiF2 → MgF2↓ + Ni",
    "out": [
      "MgF2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_mnf2",
    "need": [
      "Mg",
      "MnF2"
    ],
    "eq": "Mg + MnF2 → MgF2↓ + Mn",
    "out": [
      "MgF2",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_al_c2h3o2_3",
    "need": [
      "Mg",
      "Al(C2H3O2)3"
    ],
    "eq": "3Mg + 2Al(C2H3O2)3 → 3Mg(C2H3O2)2 + 2Al",
    "out": [
      "Mg(C2H3O2)2",
      "Al"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Al, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_fe_c2h3o2_2",
    "need": [
      "Mg",
      "Fe(C2H3O2)2"
    ],
    "eq": "Mg + Fe(C2H3O2)2 → Mg(C2H3O2)2 + Fe",
    "out": [
      "Mg(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_fe_c2h3o2_3",
    "need": [
      "Mg",
      "Fe(C2H3O2)3"
    ],
    "eq": "3Mg + 2Fe(C2H3O2)3 → 3Mg(C2H3O2)2 + 2Fe",
    "out": [
      "Mg(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cu_c2h3o2_2",
    "need": [
      "Mg",
      "Cu(C2H3O2)2"
    ],
    "eq": "Mg + Cu(C2H3O2)2 → Mg(C2H3O2)2 + Cu",
    "out": [
      "Mg(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_zn_c2h3o2_2",
    "need": [
      "Mg",
      "Zn(C2H3O2)2"
    ],
    "eq": "Mg + Zn(C2H3O2)2 → Mg(C2H3O2)2 + Zn",
    "out": [
      "Mg(C2H3O2)2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_co_c2h3o2_2",
    "need": [
      "Mg",
      "Co(C2H3O2)2"
    ],
    "eq": "Mg + Co(C2H3O2)2 → Mg(C2H3O2)2 + Co",
    "out": [
      "Mg(C2H3O2)2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cr_c2h3o2_3",
    "need": [
      "Mg",
      "Cr(C2H3O2)3"
    ],
    "eq": "3Mg + 2Cr(C2H3O2)3 → 3Mg(C2H3O2)2 + 2Cr",
    "out": [
      "Mg(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_ni_c2h3o2_2",
    "need": [
      "Mg",
      "Ni(C2H3O2)2"
    ],
    "eq": "Mg + Ni(C2H3O2)2 → Mg(C2H3O2)2 + Ni",
    "out": [
      "Mg(C2H3O2)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_mn_c2h3o2_2",
    "need": [
      "Mg",
      "Mn(C2H3O2)2"
    ],
    "eq": "Mg + Mn(C2H3O2)2 → Mg(C2H3O2)2 + Mn",
    "out": [
      "Mg(C2H3O2)2",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_pb_c2h3o2_2",
    "need": [
      "Mg",
      "Pb(C2H3O2)2"
    ],
    "eq": "Mg + Pb(C2H3O2)2 → Mg(C2H3O2)2 + Pb",
    "out": [
      "Mg(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_gaf3",
    "need": [
      "Mg",
      "GaF3"
    ],
    "eq": "3Mg + 2GaF3 → 3MgF2↓ + 2Ga",
    "out": [
      "MgF2",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_ga2_so4_3",
    "need": [
      "Mg",
      "Ga2(SO4)3"
    ],
    "eq": "3Mg + Ga2(SO4)3 → 3MgSO4 + 2Ga",
    "out": [
      "MgSO4",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_ga_c2h3o2_3",
    "need": [
      "Mg",
      "Ga(C2H3O2)3"
    ],
    "eq": "3Mg + 2Ga(C2H3O2)3 → 3Mg(C2H3O2)2 + 2Ga",
    "out": [
      "Mg(C2H3O2)2",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_agf",
    "need": [
      "Mg",
      "AgF"
    ],
    "eq": "Mg + 2AgF → MgF2↓ + 2Ag",
    "out": [
      "MgF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_agc2h3o2",
    "need": [
      "Mg",
      "AgC2H3O2"
    ],
    "eq": "Mg + 2AgC2H3O2 → Mg(C2H3O2)2 + 2Ag",
    "out": [
      "Mg(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_crbr2",
    "need": [
      "Mg",
      "CrBr2"
    ],
    "eq": "Mg + CrBr2 → MgBr2 + Cr",
    "out": [
      "MgBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_crso4",
    "need": [
      "Mg",
      "CrSO4"
    ],
    "eq": "Mg + CrSO4 → MgSO4 + Cr",
    "out": [
      "MgSO4",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cr_c2h3o2_2",
    "need": [
      "Mg",
      "Cr(C2H3O2)2"
    ],
    "eq": "Mg + Cr(C2H3O2)2 → Mg(C2H3O2)2 + Cr",
    "out": [
      "Mg(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_sn_c2h3o2_2",
    "need": [
      "Mg",
      "Sn(C2H3O2)2"
    ],
    "eq": "Mg + Sn(C2H3O2)2 → Mg(C2H3O2)2 + Sn",
    "out": [
      "Mg(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_cr_no3_2",
    "need": [
      "Mg",
      "Cr(NO3)2"
    ],
    "eq": "Mg + Cr(NO3)2 → Mg(NO3)2 + Cr",
    "out": [
      "Mg(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_znf2",
    "need": [
      "Mg",
      "ZnF2"
    ],
    "eq": "Mg + ZnF2 → MgF2↓ + Zn",
    "out": [
      "MgF2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_ga_no3_3",
    "need": [
      "Mg",
      "Ga(NO3)3"
    ],
    "eq": "3Mg + 2Ga(NO3)3 → 3Mg(NO3)2 + 2Ga",
    "out": [
      "Mg(NO3)2",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mg_snf2",
    "need": [
      "Mg",
      "SnF2"
    ],
    "eq": "Mg + SnF2 → MgF2↓ + Sn",
    "out": [
      "MgF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_mg_crf2",
    "need": [
      "Mg",
      "CrF2"
    ],
    "eq": "Mg + CrF2 → MgF2↓ + Cr",
    "out": [
      "MgF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mg hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_cucl2",
    "need": [
      "Al",
      "CuCl2"
    ],
    "eq": "2Al + 3CuCl2 → 2AlCl3 + 3Cu",
    "out": [
      "AlCl3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_crcl3",
    "need": [
      "Al",
      "CrCl3"
    ],
    "eq": "Al + CrCl3 → AlCl3 + Cr",
    "out": [
      "AlCl3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_mncl2",
    "need": [
      "Al",
      "MnCl2"
    ],
    "eq": "2Al + 3MnCl2 → 2AlCl3 + 3Mn",
    "out": [
      "AlCl3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_febr2",
    "need": [
      "Al",
      "FeBr2"
    ],
    "eq": "2Al + 3FeBr2 → 2AlBr3 + 3Fe",
    "out": [
      "AlBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_febr3",
    "need": [
      "Al",
      "FeBr3"
    ],
    "eq": "Al + FeBr3 → AlBr3 + Fe",
    "out": [
      "AlBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_nicl2",
    "need": [
      "Al",
      "NiCl2"
    ],
    "eq": "2Al + 3NiCl2 → 2AlCl3 + 3Ni",
    "out": [
      "AlCl3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_sncl2",
    "need": [
      "Al",
      "SnCl2"
    ],
    "eq": "2Al + 3SnCl2 → 2AlCl3 + 3Sn",
    "out": [
      "AlCl3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_gacl3",
    "need": [
      "Al",
      "GaCl3"
    ],
    "eq": "Al + GaCl3 → AlCl3 + Ga",
    "out": [
      "AlCl3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_gabr3",
    "need": [
      "Al",
      "GaBr3"
    ],
    "eq": "Al + GaBr3 → AlBr3 + Ga",
    "out": [
      "AlBr3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_crcl2",
    "need": [
      "Al",
      "CrCl2"
    ],
    "eq": "2Al + 3CrCl2 → 2AlCl3 + 3Cr",
    "out": [
      "AlCl3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_sn_no3_2",
    "need": [
      "Al",
      "Sn(NO3)2"
    ],
    "eq": "2Al + 3Sn(NO3)2 → 2Al(NO3)3 + 3Sn",
    "out": [
      "Al(NO3)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cr_no3_3",
    "need": [
      "Al",
      "Cr(NO3)3"
    ],
    "eq": "Al + Cr(NO3)3 → Al(NO3)3 + Cr",
    "out": [
      "Al(NO3)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cubr2",
    "need": [
      "Al",
      "CuBr2"
    ],
    "eq": "2Al + 3CuBr2 → 2AlBr3 + 3Cu",
    "out": [
      "AlBr3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_mnbr2",
    "need": [
      "Al",
      "MnBr2"
    ],
    "eq": "2Al + 3MnBr2 → 2AlBr3 + 3Mn",
    "out": [
      "AlBr3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_crbr3",
    "need": [
      "Al",
      "CrBr3"
    ],
    "eq": "Al + CrBr3 → AlBr3 + Cr",
    "out": [
      "AlBr3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_fef2",
    "need": [
      "Al",
      "FeF2"
    ],
    "eq": "2Al + 3FeF2 → 2AlF3↓ + 3Fe",
    "out": [
      "AlF3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_cuf2",
    "need": [
      "Al",
      "CuF2"
    ],
    "eq": "2Al + 3CuF2 → 2AlF3↓ + 3Cu",
    "out": [
      "AlF3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_cof2",
    "need": [
      "Al",
      "CoF2"
    ],
    "eq": "2Al + 3CoF2 → 2AlF3↓ + 3Co",
    "out": [
      "AlF3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_crf3",
    "need": [
      "Al",
      "CrF3"
    ],
    "eq": "Al + CrF3 → AlF3↓ + Cr",
    "out": [
      "AlF3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_nif2",
    "need": [
      "Al",
      "NiF2"
    ],
    "eq": "2Al + 3NiF2 → 2AlF3↓ + 3Ni",
    "out": [
      "AlF3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_mnf2",
    "need": [
      "Al",
      "MnF2"
    ],
    "eq": "2Al + 3MnF2 → 2AlF3↓ + 3Mn",
    "out": [
      "AlF3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_fe_c2h3o2_2",
    "need": [
      "Al",
      "Fe(C2H3O2)2"
    ],
    "eq": "2Al + 3Fe(C2H3O2)2 → 2Al(C2H3O2)3 + 3Fe",
    "out": [
      "Al(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_fe_c2h3o2_3",
    "need": [
      "Al",
      "Fe(C2H3O2)3"
    ],
    "eq": "Al + Fe(C2H3O2)3 → Al(C2H3O2)3 + Fe",
    "out": [
      "Al(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cu_c2h3o2_2",
    "need": [
      "Al",
      "Cu(C2H3O2)2"
    ],
    "eq": "2Al + 3Cu(C2H3O2)2 → 2Al(C2H3O2)3 + 3Cu",
    "out": [
      "Al(C2H3O2)3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_zn_c2h3o2_2",
    "need": [
      "Al",
      "Zn(C2H3O2)2"
    ],
    "eq": "2Al + 3Zn(C2H3O2)2 → 2Al(C2H3O2)3 + 3Zn",
    "out": [
      "Al(C2H3O2)3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_co_c2h3o2_2",
    "need": [
      "Al",
      "Co(C2H3O2)2"
    ],
    "eq": "2Al + 3Co(C2H3O2)2 → 2Al(C2H3O2)3 + 3Co",
    "out": [
      "Al(C2H3O2)3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cr_c2h3o2_3",
    "need": [
      "Al",
      "Cr(C2H3O2)3"
    ],
    "eq": "Al + Cr(C2H3O2)3 → Al(C2H3O2)3 + Cr",
    "out": [
      "Al(C2H3O2)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_ni_c2h3o2_2",
    "need": [
      "Al",
      "Ni(C2H3O2)2"
    ],
    "eq": "2Al + 3Ni(C2H3O2)2 → 2Al(C2H3O2)3 + 3Ni",
    "out": [
      "Al(C2H3O2)3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_mn_c2h3o2_2",
    "need": [
      "Al",
      "Mn(C2H3O2)2"
    ],
    "eq": "2Al + 3Mn(C2H3O2)2 → 2Al(C2H3O2)3 + 3Mn",
    "out": [
      "Al(C2H3O2)3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_pb_c2h3o2_2",
    "need": [
      "Al",
      "Pb(C2H3O2)2"
    ],
    "eq": "2Al + 3Pb(C2H3O2)2 → 2Al(C2H3O2)3 + 3Pb",
    "out": [
      "Al(C2H3O2)3",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_gaf3",
    "need": [
      "Al",
      "GaF3"
    ],
    "eq": "Al + GaF3 → AlF3↓ + Ga",
    "out": [
      "AlF3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_ga2_so4_3",
    "need": [
      "Al",
      "Ga2(SO4)3"
    ],
    "eq": "2Al + Ga2(SO4)3 → Al2(SO4)3 + 2Ga",
    "out": [
      "Al2(SO4)3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_ga_c2h3o2_3",
    "need": [
      "Al",
      "Ga(C2H3O2)3"
    ],
    "eq": "Al + Ga(C2H3O2)3 → Al(C2H3O2)3 + Ga",
    "out": [
      "Al(C2H3O2)3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_agf",
    "need": [
      "Al",
      "AgF"
    ],
    "eq": "Al + 3AgF → AlF3↓ + 3Ag",
    "out": [
      "AlF3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_agc2h3o2",
    "need": [
      "Al",
      "AgC2H3O2"
    ],
    "eq": "Al + 3AgC2H3O2 → Al(C2H3O2)3 + 3Ag",
    "out": [
      "Al(C2H3O2)3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_crbr2",
    "need": [
      "Al",
      "CrBr2"
    ],
    "eq": "2Al + 3CrBr2 → 2AlBr3 + 3Cr",
    "out": [
      "AlBr3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_crso4",
    "need": [
      "Al",
      "CrSO4"
    ],
    "eq": "2Al + 3CrSO4 → Al2(SO4)3 + 3Cr",
    "out": [
      "Al2(SO4)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cr_c2h3o2_2",
    "need": [
      "Al",
      "Cr(C2H3O2)2"
    ],
    "eq": "2Al + 3Cr(C2H3O2)2 → 2Al(C2H3O2)3 + 3Cr",
    "out": [
      "Al(C2H3O2)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_sn_c2h3o2_2",
    "need": [
      "Al",
      "Sn(C2H3O2)2"
    ],
    "eq": "2Al + 3Sn(C2H3O2)2 → 2Al(C2H3O2)3 + 3Sn",
    "out": [
      "Al(C2H3O2)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_cr_no3_2",
    "need": [
      "Al",
      "Cr(NO3)2"
    ],
    "eq": "2Al + 3Cr(NO3)2 → 2Al(NO3)3 + 3Cr",
    "out": [
      "Al(NO3)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_znf2",
    "need": [
      "Al",
      "ZnF2"
    ],
    "eq": "2Al + 3ZnF2 → 2AlF3↓ + 3Zn",
    "out": [
      "AlF3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_ga_no3_3",
    "need": [
      "Al",
      "Ga(NO3)3"
    ],
    "eq": "Al + Ga(NO3)3 → Al(NO3)3 + Ga",
    "out": [
      "Al(NO3)3",
      "Ga"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Ga, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_al_snf2",
    "need": [
      "Al",
      "SnF2"
    ],
    "eq": "2Al + 3SnF2 → 2AlF3↓ + 3Sn",
    "out": [
      "AlF3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_al_crf2",
    "need": [
      "Al",
      "CrF2"
    ],
    "eq": "2Al + 3CrF2 → 2AlF3↓ + 3Cr",
    "out": [
      "AlF3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Al hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_ga_cucl2",
    "need": [
      "Ga",
      "CuCl2"
    ],
    "eq": "2Ga + 3CuCl2 → 2GaCl3 + 3Cu",
    "out": [
      "GaCl3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crcl3",
    "need": [
      "Ga",
      "CrCl3"
    ],
    "eq": "Ga + CrCl3 → GaCl3 + Cr",
    "out": [
      "GaCl3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mncl2",
    "need": [
      "Ga",
      "MnCl2"
    ],
    "eq": "2Ga + 3MnCl2 → 2GaCl3 + 3Mn",
    "out": [
      "GaCl3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fecl2",
    "need": [
      "Ga",
      "FeCl2"
    ],
    "eq": "2Ga + 3FeCl2 → 2GaCl3 + 3Fe",
    "out": [
      "GaCl3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fecl3",
    "need": [
      "Ga",
      "FeCl3"
    ],
    "eq": "Ga + FeCl3 → GaCl3 + Fe",
    "out": [
      "GaCl3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_zncl2",
    "need": [
      "Ga",
      "ZnCl2"
    ],
    "eq": "2Ga + 3ZnCl2 → 2GaCl3 + 3Zn",
    "out": [
      "GaCl3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cuso4",
    "need": [
      "Ga",
      "CuSO4"
    ],
    "eq": "2Ga + 3CuSO4 → Ga2(SO4)3 + 3Cu",
    "out": [
      "Ga2(SO4)3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_feso4",
    "need": [
      "Ga",
      "FeSO4"
    ],
    "eq": "2Ga + 3FeSO4 → Ga2(SO4)3 + 3Fe",
    "out": [
      "Ga2(SO4)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fe2_so4_3",
    "need": [
      "Ga",
      "Fe2(SO4)3"
    ],
    "eq": "2Ga + Fe2(SO4)3 → Ga2(SO4)3 + 2Fe",
    "out": [
      "Ga2(SO4)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_znso4",
    "need": [
      "Ga",
      "ZnSO4"
    ],
    "eq": "2Ga + 3ZnSO4 → Ga2(SO4)3 + 3Zn",
    "out": [
      "Ga2(SO4)3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_agno3",
    "need": [
      "Ga",
      "AgNO3"
    ],
    "eq": "Ga + 3AgNO3 → Ga(NO3)3 + 3Ag",
    "out": [
      "Ga(NO3)3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cu_no3_2",
    "need": [
      "Ga",
      "Cu(NO3)2"
    ],
    "eq": "2Ga + 3Cu(NO3)2 → 2Ga(NO3)3 + 3Cu",
    "out": [
      "Ga(NO3)3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_pb_no3_2",
    "need": [
      "Ga",
      "Pb(NO3)2"
    ],
    "eq": "2Ga + 3Pb(NO3)2 → 2Ga(NO3)3 + 3Pb",
    "out": [
      "Ga(NO3)3",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_zn_no3_2",
    "need": [
      "Ga",
      "Zn(NO3)2"
    ],
    "eq": "2Ga + 3Zn(NO3)2 → 2Ga(NO3)3 + 3Zn",
    "out": [
      "Ga(NO3)3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fe_no3_2",
    "need": [
      "Ga",
      "Fe(NO3)2"
    ],
    "eq": "2Ga + 3Fe(NO3)2 → 2Ga(NO3)3 + 3Fe",
    "out": [
      "Ga(NO3)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fe_no3_3",
    "need": [
      "Ga",
      "Fe(NO3)3"
    ],
    "eq": "Ga + Fe(NO3)3 → Ga(NO3)3 + Fe",
    "out": [
      "Ga(NO3)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_febr2",
    "need": [
      "Ga",
      "FeBr2"
    ],
    "eq": "2Ga + 3FeBr2 → 2GaBr3 + 3Fe",
    "out": [
      "GaBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_febr3",
    "need": [
      "Ga",
      "FeBr3"
    ],
    "eq": "Ga + FeBr3 → GaBr3 + Fe",
    "out": [
      "GaBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_nicl2",
    "need": [
      "Ga",
      "NiCl2"
    ],
    "eq": "2Ga + 3NiCl2 → 2GaCl3 + 3Ni",
    "out": [
      "GaCl3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_sncl2",
    "need": [
      "Ga",
      "SnCl2"
    ],
    "eq": "2Ga + 3SnCl2 → 2GaCl3 + 3Sn",
    "out": [
      "GaCl3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_niso4",
    "need": [
      "Ga",
      "NiSO4"
    ],
    "eq": "2Ga + 3NiSO4 → Ga2(SO4)3 + 3Ni",
    "out": [
      "Ga2(SO4)3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mnso4",
    "need": [
      "Ga",
      "MnSO4"
    ],
    "eq": "2Ga + 3MnSO4 → Ga2(SO4)3 + 3Mn",
    "out": [
      "Ga2(SO4)3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_snso4",
    "need": [
      "Ga",
      "SnSO4"
    ],
    "eq": "2Ga + 3SnSO4 → Ga2(SO4)3 + 3Sn",
    "out": [
      "Ga2(SO4)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cocl2",
    "need": [
      "Ga",
      "CoCl2"
    ],
    "eq": "2Ga + 3CoCl2 → 2GaCl3 + 3Co",
    "out": [
      "GaCl3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_coso4",
    "need": [
      "Ga",
      "CoSO4"
    ],
    "eq": "2Ga + 3CoSO4 → Ga2(SO4)3 + 3Co",
    "out": [
      "Ga2(SO4)3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_co_no3_2",
    "need": [
      "Ga",
      "Co(NO3)2"
    ],
    "eq": "2Ga + 3Co(NO3)2 → 2Ga(NO3)3 + 3Co",
    "out": [
      "Ga(NO3)3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_ni_no3_2",
    "need": [
      "Ga",
      "Ni(NO3)2"
    ],
    "eq": "2Ga + 3Ni(NO3)2 → 2Ga(NO3)3 + 3Ni",
    "out": [
      "Ga(NO3)3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mn_no3_2",
    "need": [
      "Ga",
      "Mn(NO3)2"
    ],
    "eq": "2Ga + 3Mn(NO3)2 → 2Ga(NO3)3 + 3Mn",
    "out": [
      "Ga(NO3)3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cr2_so4_3",
    "need": [
      "Ga",
      "Cr2(SO4)3"
    ],
    "eq": "2Ga + Cr2(SO4)3 → Ga2(SO4)3 + 2Cr",
    "out": [
      "Ga2(SO4)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crcl2",
    "need": [
      "Ga",
      "CrCl2"
    ],
    "eq": "2Ga + 3CrCl2 → 2GaCl3 + 3Cr",
    "out": [
      "GaCl3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_znbr2",
    "need": [
      "Ga",
      "ZnBr2"
    ],
    "eq": "2Ga + 3ZnBr2 → 2GaBr3 + 3Zn",
    "out": [
      "GaBr3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_snbr2",
    "need": [
      "Ga",
      "SnBr2"
    ],
    "eq": "2Ga + 3SnBr2 → 2GaBr3 + 3Sn",
    "out": [
      "GaBr3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_nibr2",
    "need": [
      "Ga",
      "NiBr2"
    ],
    "eq": "2Ga + 3NiBr2 → 2GaBr3 + 3Ni",
    "out": [
      "GaBr3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cobr2",
    "need": [
      "Ga",
      "CoBr2"
    ],
    "eq": "2Ga + 3CoBr2 → 2GaBr3 + 3Co",
    "out": [
      "GaBr3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_sn_no3_2",
    "need": [
      "Ga",
      "Sn(NO3)2"
    ],
    "eq": "2Ga + 3Sn(NO3)2 → 2Ga(NO3)3 + 3Sn",
    "out": [
      "Ga(NO3)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cr_no3_3",
    "need": [
      "Ga",
      "Cr(NO3)3"
    ],
    "eq": "Ga + Cr(NO3)3 → Ga(NO3)3 + Cr",
    "out": [
      "Ga(NO3)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cubr2",
    "need": [
      "Ga",
      "CuBr2"
    ],
    "eq": "2Ga + 3CuBr2 → 2GaBr3 + 3Cu",
    "out": [
      "GaBr3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mnbr2",
    "need": [
      "Ga",
      "MnBr2"
    ],
    "eq": "2Ga + 3MnBr2 → 2GaBr3 + 3Mn",
    "out": [
      "GaBr3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crbr3",
    "need": [
      "Ga",
      "CrBr3"
    ],
    "eq": "Ga + CrBr3 → GaBr3 + Cr",
    "out": [
      "GaBr3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fef2",
    "need": [
      "Ga",
      "FeF2"
    ],
    "eq": "2Ga + 3FeF2 → 2GaF3 + 3Fe",
    "out": [
      "GaF3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cuf2",
    "need": [
      "Ga",
      "CuF2"
    ],
    "eq": "2Ga + 3CuF2 → 2GaF3 + 3Cu",
    "out": [
      "GaF3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cof2",
    "need": [
      "Ga",
      "CoF2"
    ],
    "eq": "2Ga + 3CoF2 → 2GaF3 + 3Co",
    "out": [
      "GaF3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crf3",
    "need": [
      "Ga",
      "CrF3"
    ],
    "eq": "Ga + CrF3 → GaF3 + Cr",
    "out": [
      "GaF3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_nif2",
    "need": [
      "Ga",
      "NiF2"
    ],
    "eq": "2Ga + 3NiF2 → 2GaF3 + 3Ni",
    "out": [
      "GaF3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mnf2",
    "need": [
      "Ga",
      "MnF2"
    ],
    "eq": "2Ga + 3MnF2 → 2GaF3 + 3Mn",
    "out": [
      "GaF3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fe_c2h3o2_2",
    "need": [
      "Ga",
      "Fe(C2H3O2)2"
    ],
    "eq": "2Ga + 3Fe(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Fe",
    "out": [
      "Ga(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_fe_c2h3o2_3",
    "need": [
      "Ga",
      "Fe(C2H3O2)3"
    ],
    "eq": "Ga + Fe(C2H3O2)3 → Ga(C2H3O2)3 + Fe",
    "out": [
      "Ga(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cu_c2h3o2_2",
    "need": [
      "Ga",
      "Cu(C2H3O2)2"
    ],
    "eq": "2Ga + 3Cu(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Cu",
    "out": [
      "Ga(C2H3O2)3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_zn_c2h3o2_2",
    "need": [
      "Ga",
      "Zn(C2H3O2)2"
    ],
    "eq": "2Ga + 3Zn(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Zn",
    "out": [
      "Ga(C2H3O2)3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_co_c2h3o2_2",
    "need": [
      "Ga",
      "Co(C2H3O2)2"
    ],
    "eq": "2Ga + 3Co(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Co",
    "out": [
      "Ga(C2H3O2)3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cr_c2h3o2_3",
    "need": [
      "Ga",
      "Cr(C2H3O2)3"
    ],
    "eq": "Ga + Cr(C2H3O2)3 → Ga(C2H3O2)3 + Cr",
    "out": [
      "Ga(C2H3O2)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_ni_c2h3o2_2",
    "need": [
      "Ga",
      "Ni(C2H3O2)2"
    ],
    "eq": "2Ga + 3Ni(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Ni",
    "out": [
      "Ga(C2H3O2)3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_mn_c2h3o2_2",
    "need": [
      "Ga",
      "Mn(C2H3O2)2"
    ],
    "eq": "2Ga + 3Mn(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Mn",
    "out": [
      "Ga(C2H3O2)3",
      "Mn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Mn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_pb_c2h3o2_2",
    "need": [
      "Ga",
      "Pb(C2H3O2)2"
    ],
    "eq": "2Ga + 3Pb(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Pb",
    "out": [
      "Ga(C2H3O2)3",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_agf",
    "need": [
      "Ga",
      "AgF"
    ],
    "eq": "Ga + 3AgF → GaF3 + 3Ag",
    "out": [
      "GaF3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_agc2h3o2",
    "need": [
      "Ga",
      "AgC2H3O2"
    ],
    "eq": "Ga + 3AgC2H3O2 → Ga(C2H3O2)3 + 3Ag",
    "out": [
      "Ga(C2H3O2)3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crbr2",
    "need": [
      "Ga",
      "CrBr2"
    ],
    "eq": "2Ga + 3CrBr2 → 2GaBr3 + 3Cr",
    "out": [
      "GaBr3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crso4",
    "need": [
      "Ga",
      "CrSO4"
    ],
    "eq": "2Ga + 3CrSO4 → Ga2(SO4)3 + 3Cr",
    "out": [
      "Ga2(SO4)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cr_c2h3o2_2",
    "need": [
      "Ga",
      "Cr(C2H3O2)2"
    ],
    "eq": "2Ga + 3Cr(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Cr",
    "out": [
      "Ga(C2H3O2)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_sn_c2h3o2_2",
    "need": [
      "Ga",
      "Sn(C2H3O2)2"
    ],
    "eq": "2Ga + 3Sn(C2H3O2)2 → 2Ga(C2H3O2)3 + 3Sn",
    "out": [
      "Ga(C2H3O2)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_cr_no3_2",
    "need": [
      "Ga",
      "Cr(NO3)2"
    ],
    "eq": "2Ga + 3Cr(NO3)2 → 2Ga(NO3)3 + 3Cr",
    "out": [
      "Ga(NO3)3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_znf2",
    "need": [
      "Ga",
      "ZnF2"
    ],
    "eq": "2Ga + 3ZnF2 → 2GaF3 + 3Zn",
    "out": [
      "GaF3",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_snf2",
    "need": [
      "Ga",
      "SnF2"
    ],
    "eq": "2Ga + 3SnF2 → 2GaF3 + 3Sn",
    "out": [
      "GaF3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ga_crf2",
    "need": [
      "Ga",
      "CrF2"
    ],
    "eq": "2Ga + 3CrF2 → 2GaF3 + 3Cr",
    "out": [
      "GaF3",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ga hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cucl2",
    "need": [
      "Mn",
      "CuCl2"
    ],
    "eq": "Mn + CuCl2 → MnCl2 + Cu",
    "out": [
      "MnCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crcl3",
    "need": [
      "Mn",
      "CrCl3"
    ],
    "eq": "3Mn + 2CrCl3 → 3MnCl2 + 2Cr",
    "out": [
      "MnCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fecl2",
    "need": [
      "Mn",
      "FeCl2"
    ],
    "eq": "Mn + FeCl2 → MnCl2 + Fe",
    "out": [
      "MnCl2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fecl3",
    "need": [
      "Mn",
      "FeCl3"
    ],
    "eq": "3Mn + 2FeCl3 → 3MnCl2 + 2Fe",
    "out": [
      "MnCl2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_zncl2",
    "need": [
      "Mn",
      "ZnCl2"
    ],
    "eq": "Mn + ZnCl2 → MnCl2 + Zn",
    "out": [
      "MnCl2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cuso4",
    "need": [
      "Mn",
      "CuSO4"
    ],
    "eq": "Mn + CuSO4 → MnSO4 + Cu",
    "out": [
      "MnSO4",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_feso4",
    "need": [
      "Mn",
      "FeSO4"
    ],
    "eq": "Mn + FeSO4 → MnSO4 + Fe",
    "out": [
      "MnSO4",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fe2_so4_3",
    "need": [
      "Mn",
      "Fe2(SO4)3"
    ],
    "eq": "3Mn + Fe2(SO4)3 → 3MnSO4 + 2Fe",
    "out": [
      "MnSO4",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_znso4",
    "need": [
      "Mn",
      "ZnSO4"
    ],
    "eq": "Mn + ZnSO4 → MnSO4 + Zn",
    "out": [
      "MnSO4",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_agno3",
    "need": [
      "Mn",
      "AgNO3"
    ],
    "eq": "Mn + 2AgNO3 → Mn(NO3)2 + 2Ag",
    "out": [
      "Mn(NO3)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cu_no3_2",
    "need": [
      "Mn",
      "Cu(NO3)2"
    ],
    "eq": "Mn + Cu(NO3)2 → Mn(NO3)2 + Cu",
    "out": [
      "Mn(NO3)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_pb_no3_2",
    "need": [
      "Mn",
      "Pb(NO3)2"
    ],
    "eq": "Mn + Pb(NO3)2 → Mn(NO3)2 + Pb",
    "out": [
      "Mn(NO3)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_zn_no3_2",
    "need": [
      "Mn",
      "Zn(NO3)2"
    ],
    "eq": "Mn + Zn(NO3)2 → Mn(NO3)2 + Zn",
    "out": [
      "Mn(NO3)2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fe_no3_2",
    "need": [
      "Mn",
      "Fe(NO3)2"
    ],
    "eq": "Mn + Fe(NO3)2 → Mn(NO3)2 + Fe",
    "out": [
      "Mn(NO3)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fe_no3_3",
    "need": [
      "Mn",
      "Fe(NO3)3"
    ],
    "eq": "3Mn + 2Fe(NO3)3 → 3Mn(NO3)2 + 2Fe",
    "out": [
      "Mn(NO3)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_febr2",
    "need": [
      "Mn",
      "FeBr2"
    ],
    "eq": "Mn + FeBr2 → MnBr2 + Fe",
    "out": [
      "MnBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_febr3",
    "need": [
      "Mn",
      "FeBr3"
    ],
    "eq": "3Mn + 2FeBr3 → 3MnBr2 + 2Fe",
    "out": [
      "MnBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_nicl2",
    "need": [
      "Mn",
      "NiCl2"
    ],
    "eq": "Mn + NiCl2 → MnCl2 + Ni",
    "out": [
      "MnCl2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_sncl2",
    "need": [
      "Mn",
      "SnCl2"
    ],
    "eq": "Mn + SnCl2 → MnCl2 + Sn",
    "out": [
      "MnCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_niso4",
    "need": [
      "Mn",
      "NiSO4"
    ],
    "eq": "Mn + NiSO4 → MnSO4 + Ni",
    "out": [
      "MnSO4",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_snso4",
    "need": [
      "Mn",
      "SnSO4"
    ],
    "eq": "Mn + SnSO4 → MnSO4 + Sn",
    "out": [
      "MnSO4",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cocl2",
    "need": [
      "Mn",
      "CoCl2"
    ],
    "eq": "Mn + CoCl2 → MnCl2 + Co",
    "out": [
      "MnCl2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_coso4",
    "need": [
      "Mn",
      "CoSO4"
    ],
    "eq": "Mn + CoSO4 → MnSO4 + Co",
    "out": [
      "MnSO4",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_co_no3_2",
    "need": [
      "Mn",
      "Co(NO3)2"
    ],
    "eq": "Mn + Co(NO3)2 → Mn(NO3)2 + Co",
    "out": [
      "Mn(NO3)2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_ni_no3_2",
    "need": [
      "Mn",
      "Ni(NO3)2"
    ],
    "eq": "Mn + Ni(NO3)2 → Mn(NO3)2 + Ni",
    "out": [
      "Mn(NO3)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cr2_so4_3",
    "need": [
      "Mn",
      "Cr2(SO4)3"
    ],
    "eq": "3Mn + Cr2(SO4)3 → 3MnSO4 + 2Cr",
    "out": [
      "MnSO4",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crcl2",
    "need": [
      "Mn",
      "CrCl2"
    ],
    "eq": "Mn + CrCl2 → MnCl2 + Cr",
    "out": [
      "MnCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_znbr2",
    "need": [
      "Mn",
      "ZnBr2"
    ],
    "eq": "Mn + ZnBr2 → MnBr2 + Zn",
    "out": [
      "MnBr2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_snbr2",
    "need": [
      "Mn",
      "SnBr2"
    ],
    "eq": "Mn + SnBr2 → MnBr2 + Sn",
    "out": [
      "MnBr2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_nibr2",
    "need": [
      "Mn",
      "NiBr2"
    ],
    "eq": "Mn + NiBr2 → MnBr2 + Ni",
    "out": [
      "MnBr2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cobr2",
    "need": [
      "Mn",
      "CoBr2"
    ],
    "eq": "Mn + CoBr2 → MnBr2 + Co",
    "out": [
      "MnBr2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_sn_no3_2",
    "need": [
      "Mn",
      "Sn(NO3)2"
    ],
    "eq": "Mn + Sn(NO3)2 → Mn(NO3)2 + Sn",
    "out": [
      "Mn(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cr_no3_3",
    "need": [
      "Mn",
      "Cr(NO3)3"
    ],
    "eq": "3Mn + 2Cr(NO3)3 → 3Mn(NO3)2 + 2Cr",
    "out": [
      "Mn(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cubr2",
    "need": [
      "Mn",
      "CuBr2"
    ],
    "eq": "Mn + CuBr2 → MnBr2 + Cu",
    "out": [
      "MnBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crbr3",
    "need": [
      "Mn",
      "CrBr3"
    ],
    "eq": "3Mn + 2CrBr3 → 3MnBr2 + 2Cr",
    "out": [
      "MnBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fef2",
    "need": [
      "Mn",
      "FeF2"
    ],
    "eq": "Mn + FeF2 → MnF2 + Fe",
    "out": [
      "MnF2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cuf2",
    "need": [
      "Mn",
      "CuF2"
    ],
    "eq": "Mn + CuF2 → MnF2 + Cu",
    "out": [
      "MnF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cof2",
    "need": [
      "Mn",
      "CoF2"
    ],
    "eq": "Mn + CoF2 → MnF2 + Co",
    "out": [
      "MnF2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crf3",
    "need": [
      "Mn",
      "CrF3"
    ],
    "eq": "3Mn + 2CrF3 → 3MnF2 + 2Cr",
    "out": [
      "MnF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_nif2",
    "need": [
      "Mn",
      "NiF2"
    ],
    "eq": "Mn + NiF2 → MnF2 + Ni",
    "out": [
      "MnF2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fe_c2h3o2_2",
    "need": [
      "Mn",
      "Fe(C2H3O2)2"
    ],
    "eq": "Mn + Fe(C2H3O2)2 → Mn(C2H3O2)2 + Fe",
    "out": [
      "Mn(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_fe_c2h3o2_3",
    "need": [
      "Mn",
      "Fe(C2H3O2)3"
    ],
    "eq": "3Mn + 2Fe(C2H3O2)3 → 3Mn(C2H3O2)2 + 2Fe",
    "out": [
      "Mn(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cu_c2h3o2_2",
    "need": [
      "Mn",
      "Cu(C2H3O2)2"
    ],
    "eq": "Mn + Cu(C2H3O2)2 → Mn(C2H3O2)2 + Cu",
    "out": [
      "Mn(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_zn_c2h3o2_2",
    "need": [
      "Mn",
      "Zn(C2H3O2)2"
    ],
    "eq": "Mn + Zn(C2H3O2)2 → Mn(C2H3O2)2 + Zn",
    "out": [
      "Mn(C2H3O2)2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_co_c2h3o2_2",
    "need": [
      "Mn",
      "Co(C2H3O2)2"
    ],
    "eq": "Mn + Co(C2H3O2)2 → Mn(C2H3O2)2 + Co",
    "out": [
      "Mn(C2H3O2)2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cr_c2h3o2_3",
    "need": [
      "Mn",
      "Cr(C2H3O2)3"
    ],
    "eq": "3Mn + 2Cr(C2H3O2)3 → 3Mn(C2H3O2)2 + 2Cr",
    "out": [
      "Mn(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_ni_c2h3o2_2",
    "need": [
      "Mn",
      "Ni(C2H3O2)2"
    ],
    "eq": "Mn + Ni(C2H3O2)2 → Mn(C2H3O2)2 + Ni",
    "out": [
      "Mn(C2H3O2)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_pb_c2h3o2_2",
    "need": [
      "Mn",
      "Pb(C2H3O2)2"
    ],
    "eq": "Mn + Pb(C2H3O2)2 → Mn(C2H3O2)2 + Pb",
    "out": [
      "Mn(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_agf",
    "need": [
      "Mn",
      "AgF"
    ],
    "eq": "Mn + 2AgF → MnF2 + 2Ag",
    "out": [
      "MnF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_agc2h3o2",
    "need": [
      "Mn",
      "AgC2H3O2"
    ],
    "eq": "Mn + 2AgC2H3O2 → Mn(C2H3O2)2 + 2Ag",
    "out": [
      "Mn(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crbr2",
    "need": [
      "Mn",
      "CrBr2"
    ],
    "eq": "Mn + CrBr2 → MnBr2 + Cr",
    "out": [
      "MnBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crso4",
    "need": [
      "Mn",
      "CrSO4"
    ],
    "eq": "Mn + CrSO4 → MnSO4 + Cr",
    "out": [
      "MnSO4",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cr_c2h3o2_2",
    "need": [
      "Mn",
      "Cr(C2H3O2)2"
    ],
    "eq": "Mn + Cr(C2H3O2)2 → Mn(C2H3O2)2 + Cr",
    "out": [
      "Mn(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_sn_c2h3o2_2",
    "need": [
      "Mn",
      "Sn(C2H3O2)2"
    ],
    "eq": "Mn + Sn(C2H3O2)2 → Mn(C2H3O2)2 + Sn",
    "out": [
      "Mn(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_cr_no3_2",
    "need": [
      "Mn",
      "Cr(NO3)2"
    ],
    "eq": "Mn + Cr(NO3)2 → Mn(NO3)2 + Cr",
    "out": [
      "Mn(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_znf2",
    "need": [
      "Mn",
      "ZnF2"
    ],
    "eq": "Mn + ZnF2 → MnF2 + Zn",
    "out": [
      "MnF2",
      "Zn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Zn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_snf2",
    "need": [
      "Mn",
      "SnF2"
    ],
    "eq": "Mn + SnF2 → MnF2 + Sn",
    "out": [
      "MnF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_mn_crf2",
    "need": [
      "Mn",
      "CrF2"
    ],
    "eq": "Mn + CrF2 → MnF2 + Cr",
    "out": [
      "MnF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Mn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crcl3",
    "need": [
      "Zn",
      "CrCl3"
    ],
    "eq": "3Zn + 2CrCl3 → 3ZnCl2 + 2Cr",
    "out": [
      "ZnCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_febr2",
    "need": [
      "Zn",
      "FeBr2"
    ],
    "eq": "Zn + FeBr2 → ZnBr2 + Fe",
    "out": [
      "ZnBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_febr3",
    "need": [
      "Zn",
      "FeBr3"
    ],
    "eq": "3Zn + 2FeBr3 → 3ZnBr2 + 2Fe",
    "out": [
      "ZnBr2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_nicl2",
    "need": [
      "Zn",
      "NiCl2"
    ],
    "eq": "Zn + NiCl2 → ZnCl2 + Ni",
    "out": [
      "ZnCl2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_sncl2",
    "need": [
      "Zn",
      "SnCl2"
    ],
    "eq": "Zn + SnCl2 → ZnCl2 + Sn",
    "out": [
      "ZnCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crcl2",
    "need": [
      "Zn",
      "CrCl2"
    ],
    "eq": "Zn + CrCl2 → ZnCl2 + Cr",
    "out": [
      "ZnCl2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_sn_no3_2",
    "need": [
      "Zn",
      "Sn(NO3)2"
    ],
    "eq": "Zn + Sn(NO3)2 → Zn(NO3)2 + Sn",
    "out": [
      "Zn(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cr_no3_3",
    "need": [
      "Zn",
      "Cr(NO3)3"
    ],
    "eq": "3Zn + 2Cr(NO3)3 → 3Zn(NO3)2 + 2Cr",
    "out": [
      "Zn(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cubr2",
    "need": [
      "Zn",
      "CuBr2"
    ],
    "eq": "Zn + CuBr2 → ZnBr2 + Cu",
    "out": [
      "ZnBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crbr3",
    "need": [
      "Zn",
      "CrBr3"
    ],
    "eq": "3Zn + 2CrBr3 → 3ZnBr2 + 2Cr",
    "out": [
      "ZnBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_fef2",
    "need": [
      "Zn",
      "FeF2"
    ],
    "eq": "Zn + FeF2 → ZnF2 + Fe",
    "out": [
      "ZnF2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cuf2",
    "need": [
      "Zn",
      "CuF2"
    ],
    "eq": "Zn + CuF2 → ZnF2 + Cu",
    "out": [
      "ZnF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cof2",
    "need": [
      "Zn",
      "CoF2"
    ],
    "eq": "Zn + CoF2 → ZnF2 + Co",
    "out": [
      "ZnF2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crf3",
    "need": [
      "Zn",
      "CrF3"
    ],
    "eq": "3Zn + 2CrF3 → 3ZnF2 + 2Cr",
    "out": [
      "ZnF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_nif2",
    "need": [
      "Zn",
      "NiF2"
    ],
    "eq": "Zn + NiF2 → ZnF2 + Ni",
    "out": [
      "ZnF2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_fe_c2h3o2_2",
    "need": [
      "Zn",
      "Fe(C2H3O2)2"
    ],
    "eq": "Zn + Fe(C2H3O2)2 → Zn(C2H3O2)2 + Fe",
    "out": [
      "Zn(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_fe_c2h3o2_3",
    "need": [
      "Zn",
      "Fe(C2H3O2)3"
    ],
    "eq": "3Zn + 2Fe(C2H3O2)3 → 3Zn(C2H3O2)2 + 2Fe",
    "out": [
      "Zn(C2H3O2)2",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cu_c2h3o2_2",
    "need": [
      "Zn",
      "Cu(C2H3O2)2"
    ],
    "eq": "Zn + Cu(C2H3O2)2 → Zn(C2H3O2)2 + Cu",
    "out": [
      "Zn(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_co_c2h3o2_2",
    "need": [
      "Zn",
      "Co(C2H3O2)2"
    ],
    "eq": "Zn + Co(C2H3O2)2 → Zn(C2H3O2)2 + Co",
    "out": [
      "Zn(C2H3O2)2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cr_c2h3o2_3",
    "need": [
      "Zn",
      "Cr(C2H3O2)3"
    ],
    "eq": "3Zn + 2Cr(C2H3O2)3 → 3Zn(C2H3O2)2 + 2Cr",
    "out": [
      "Zn(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_ni_c2h3o2_2",
    "need": [
      "Zn",
      "Ni(C2H3O2)2"
    ],
    "eq": "Zn + Ni(C2H3O2)2 → Zn(C2H3O2)2 + Ni",
    "out": [
      "Zn(C2H3O2)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_pb_c2h3o2_2",
    "need": [
      "Zn",
      "Pb(C2H3O2)2"
    ],
    "eq": "Zn + Pb(C2H3O2)2 → Zn(C2H3O2)2 + Pb",
    "out": [
      "Zn(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_agf",
    "need": [
      "Zn",
      "AgF"
    ],
    "eq": "Zn + 2AgF → ZnF2 + 2Ag",
    "out": [
      "ZnF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_agc2h3o2",
    "need": [
      "Zn",
      "AgC2H3O2"
    ],
    "eq": "Zn + 2AgC2H3O2 → Zn(C2H3O2)2 + 2Ag",
    "out": [
      "Zn(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crbr2",
    "need": [
      "Zn",
      "CrBr2"
    ],
    "eq": "Zn + CrBr2 → ZnBr2 + Cr",
    "out": [
      "ZnBr2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crso4",
    "need": [
      "Zn",
      "CrSO4"
    ],
    "eq": "Zn + CrSO4 → ZnSO4 + Cr",
    "out": [
      "ZnSO4",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cr_c2h3o2_2",
    "need": [
      "Zn",
      "Cr(C2H3O2)2"
    ],
    "eq": "Zn + Cr(C2H3O2)2 → Zn(C2H3O2)2 + Cr",
    "out": [
      "Zn(C2H3O2)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_sn_c2h3o2_2",
    "need": [
      "Zn",
      "Sn(C2H3O2)2"
    ],
    "eq": "Zn + Sn(C2H3O2)2 → Zn(C2H3O2)2 + Sn",
    "out": [
      "Zn(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_cr_no3_2",
    "need": [
      "Zn",
      "Cr(NO3)2"
    ],
    "eq": "Zn + Cr(NO3)2 → Zn(NO3)2 + Cr",
    "out": [
      "Zn(NO3)2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_snf2",
    "need": [
      "Zn",
      "SnF2"
    ],
    "eq": "Zn + SnF2 → ZnF2 + Sn",
    "out": [
      "ZnF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_zn_crf2",
    "need": [
      "Zn",
      "CrF2"
    ],
    "eq": "Zn + CrF2 → ZnF2 + Cr",
    "out": [
      "ZnF2",
      "Cr"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Zn hoạt động mạnh hơn Cr, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_cucl2",
    "need": [
      "Cr",
      "CuCl2"
    ],
    "eq": "2Cr + 3CuCl2 → 2CrCl3 + 3Cu",
    "out": [
      "CrCl3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_febr2",
    "need": [
      "Cr",
      "FeBr2"
    ],
    "eq": "2Cr + 3FeBr2 → 2CrBr3 + 3Fe",
    "out": [
      "CrBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_febr3",
    "need": [
      "Cr",
      "FeBr3"
    ],
    "eq": "Cr + FeBr3 → CrBr3 + Fe",
    "out": [
      "CrBr3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_nicl2",
    "need": [
      "Cr",
      "NiCl2"
    ],
    "eq": "2Cr + 3NiCl2 → 2CrCl3 + 3Ni",
    "out": [
      "CrCl3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_sncl2",
    "need": [
      "Cr",
      "SnCl2"
    ],
    "eq": "2Cr + 3SnCl2 → 2CrCl3 + 3Sn",
    "out": [
      "CrCl3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_sn_no3_2",
    "need": [
      "Cr",
      "Sn(NO3)2"
    ],
    "eq": "2Cr + 3Sn(NO3)2 → 2Cr(NO3)3 + 3Sn",
    "out": [
      "Cr(NO3)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_cubr2",
    "need": [
      "Cr",
      "CuBr2"
    ],
    "eq": "2Cr + 3CuBr2 → 2CrBr3 + 3Cu",
    "out": [
      "CrBr3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_fef2",
    "need": [
      "Cr",
      "FeF2"
    ],
    "eq": "2Cr + 3FeF2 → 2CrF3 + 3Fe",
    "out": [
      "CrF3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_cuf2",
    "need": [
      "Cr",
      "CuF2"
    ],
    "eq": "2Cr + 3CuF2 → 2CrF3 + 3Cu",
    "out": [
      "CrF3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_cof2",
    "need": [
      "Cr",
      "CoF2"
    ],
    "eq": "2Cr + 3CoF2 → 2CrF3 + 3Co",
    "out": [
      "CrF3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_nif2",
    "need": [
      "Cr",
      "NiF2"
    ],
    "eq": "2Cr + 3NiF2 → 2CrF3 + 3Ni",
    "out": [
      "CrF3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_fe_c2h3o2_2",
    "need": [
      "Cr",
      "Fe(C2H3O2)2"
    ],
    "eq": "2Cr + 3Fe(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Fe",
    "out": [
      "Cr(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_fe_c2h3o2_3",
    "need": [
      "Cr",
      "Fe(C2H3O2)3"
    ],
    "eq": "Cr + Fe(C2H3O2)3 → Cr(C2H3O2)3 + Fe",
    "out": [
      "Cr(C2H3O2)3",
      "Fe"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Fe, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_cu_c2h3o2_2",
    "need": [
      "Cr",
      "Cu(C2H3O2)2"
    ],
    "eq": "2Cr + 3Cu(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Cu",
    "out": [
      "Cr(C2H3O2)3",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_co_c2h3o2_2",
    "need": [
      "Cr",
      "Co(C2H3O2)2"
    ],
    "eq": "2Cr + 3Co(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Co",
    "out": [
      "Cr(C2H3O2)3",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_ni_c2h3o2_2",
    "need": [
      "Cr",
      "Ni(C2H3O2)2"
    ],
    "eq": "2Cr + 3Ni(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Ni",
    "out": [
      "Cr(C2H3O2)3",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_pb_c2h3o2_2",
    "need": [
      "Cr",
      "Pb(C2H3O2)2"
    ],
    "eq": "2Cr + 3Pb(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Pb",
    "out": [
      "Cr(C2H3O2)3",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_agf",
    "need": [
      "Cr",
      "AgF"
    ],
    "eq": "Cr + 3AgF → CrF3 + 3Ag",
    "out": [
      "CrF3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_agc2h3o2",
    "need": [
      "Cr",
      "AgC2H3O2"
    ],
    "eq": "Cr + 3AgC2H3O2 → Cr(C2H3O2)3 + 3Ag",
    "out": [
      "Cr(C2H3O2)3",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_sn_c2h3o2_2",
    "need": [
      "Cr",
      "Sn(C2H3O2)2"
    ],
    "eq": "2Cr + 3Sn(C2H3O2)2 → 2Cr(C2H3O2)3 + 3Sn",
    "out": [
      "Cr(C2H3O2)3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cr_snf2",
    "need": [
      "Cr",
      "SnF2"
    ],
    "eq": "2Cr + 3SnF2 → 2CrF3 + 3Sn",
    "out": [
      "CrF3",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cr hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_cucl2",
    "need": [
      "Fe",
      "CuCl2"
    ],
    "eq": "Fe + CuCl2 → FeCl2 + Cu",
    "out": [
      "FeCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_nicl2",
    "need": [
      "Fe",
      "NiCl2"
    ],
    "eq": "Fe + NiCl2 → FeCl2 + Ni",
    "out": [
      "FeCl2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_sncl2",
    "need": [
      "Fe",
      "SnCl2"
    ],
    "eq": "Fe + SnCl2 → FeCl2 + Sn",
    "out": [
      "FeCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_sn_no3_2",
    "need": [
      "Fe",
      "Sn(NO3)2"
    ],
    "eq": "Fe + Sn(NO3)2 → Fe(NO3)2 + Sn",
    "out": [
      "Fe(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_cubr2",
    "need": [
      "Fe",
      "CuBr2"
    ],
    "eq": "Fe + CuBr2 → FeBr2 + Cu",
    "out": [
      "FeBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_cuf2",
    "need": [
      "Fe",
      "CuF2"
    ],
    "eq": "Fe + CuF2 → FeF2 + Cu",
    "out": [
      "FeF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_cof2",
    "need": [
      "Fe",
      "CoF2"
    ],
    "eq": "Fe + CoF2 → FeF2 + Co",
    "out": [
      "FeF2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_nif2",
    "need": [
      "Fe",
      "NiF2"
    ],
    "eq": "Fe + NiF2 → FeF2 + Ni",
    "out": [
      "FeF2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_cu_c2h3o2_2",
    "need": [
      "Fe",
      "Cu(C2H3O2)2"
    ],
    "eq": "Fe + Cu(C2H3O2)2 → Fe(C2H3O2)2 + Cu",
    "out": [
      "Fe(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_co_c2h3o2_2",
    "need": [
      "Fe",
      "Co(C2H3O2)2"
    ],
    "eq": "Fe + Co(C2H3O2)2 → Fe(C2H3O2)2 + Co",
    "out": [
      "Fe(C2H3O2)2",
      "Co"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Co, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_ni_c2h3o2_2",
    "need": [
      "Fe",
      "Ni(C2H3O2)2"
    ],
    "eq": "Fe + Ni(C2H3O2)2 → Fe(C2H3O2)2 + Ni",
    "out": [
      "Fe(C2H3O2)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_pb_c2h3o2_2",
    "need": [
      "Fe",
      "Pb(C2H3O2)2"
    ],
    "eq": "Fe + Pb(C2H3O2)2 → Fe(C2H3O2)2 + Pb",
    "out": [
      "Fe(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_agf",
    "need": [
      "Fe",
      "AgF"
    ],
    "eq": "Fe + 2AgF → FeF2 + 2Ag",
    "out": [
      "FeF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_agc2h3o2",
    "need": [
      "Fe",
      "AgC2H3O2"
    ],
    "eq": "Fe + 2AgC2H3O2 → Fe(C2H3O2)2 + 2Ag",
    "out": [
      "Fe(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_sn_c2h3o2_2",
    "need": [
      "Fe",
      "Sn(C2H3O2)2"
    ],
    "eq": "Fe + Sn(C2H3O2)2 → Fe(C2H3O2)2 + Sn",
    "out": [
      "Fe(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_fe_snf2",
    "need": [
      "Fe",
      "SnF2"
    ],
    "eq": "Fe + SnF2 → FeF2 + Sn",
    "out": [
      "FeF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Fe hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_cucl2",
    "need": [
      "Co",
      "CuCl2"
    ],
    "eq": "Co + CuCl2 → CoCl2 + Cu",
    "out": [
      "CoCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_nicl2",
    "need": [
      "Co",
      "NiCl2"
    ],
    "eq": "Co + NiCl2 → CoCl2 + Ni",
    "out": [
      "CoCl2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_sncl2",
    "need": [
      "Co",
      "SnCl2"
    ],
    "eq": "Co + SnCl2 → CoCl2 + Sn",
    "out": [
      "CoCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_sn_no3_2",
    "need": [
      "Co",
      "Sn(NO3)2"
    ],
    "eq": "Co + Sn(NO3)2 → Co(NO3)2 + Sn",
    "out": [
      "Co(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_cubr2",
    "need": [
      "Co",
      "CuBr2"
    ],
    "eq": "Co + CuBr2 → CoBr2 + Cu",
    "out": [
      "CoBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_cuf2",
    "need": [
      "Co",
      "CuF2"
    ],
    "eq": "Co + CuF2 → CoF2 + Cu",
    "out": [
      "CoF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_nif2",
    "need": [
      "Co",
      "NiF2"
    ],
    "eq": "Co + NiF2 → CoF2 + Ni",
    "out": [
      "CoF2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_cu_c2h3o2_2",
    "need": [
      "Co",
      "Cu(C2H3O2)2"
    ],
    "eq": "Co + Cu(C2H3O2)2 → Co(C2H3O2)2 + Cu",
    "out": [
      "Co(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_ni_c2h3o2_2",
    "need": [
      "Co",
      "Ni(C2H3O2)2"
    ],
    "eq": "Co + Ni(C2H3O2)2 → Co(C2H3O2)2 + Ni",
    "out": [
      "Co(C2H3O2)2",
      "Ni"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Ni, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_pb_c2h3o2_2",
    "need": [
      "Co",
      "Pb(C2H3O2)2"
    ],
    "eq": "Co + Pb(C2H3O2)2 → Co(C2H3O2)2 + Pb",
    "out": [
      "Co(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_agf",
    "need": [
      "Co",
      "AgF"
    ],
    "eq": "Co + 2AgF → CoF2 + 2Ag",
    "out": [
      "CoF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_agc2h3o2",
    "need": [
      "Co",
      "AgC2H3O2"
    ],
    "eq": "Co + 2AgC2H3O2 → Co(C2H3O2)2 + 2Ag",
    "out": [
      "Co(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_sn_c2h3o2_2",
    "need": [
      "Co",
      "Sn(C2H3O2)2"
    ],
    "eq": "Co + Sn(C2H3O2)2 → Co(C2H3O2)2 + Sn",
    "out": [
      "Co(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_co_snf2",
    "need": [
      "Co",
      "SnF2"
    ],
    "eq": "Co + SnF2 → CoF2 + Sn",
    "out": [
      "CoF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Co hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_cucl2",
    "need": [
      "Ni",
      "CuCl2"
    ],
    "eq": "Ni + CuCl2 → NiCl2 + Cu",
    "out": [
      "NiCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_sncl2",
    "need": [
      "Ni",
      "SnCl2"
    ],
    "eq": "Ni + SnCl2 → NiCl2 + Sn",
    "out": [
      "NiCl2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_sn_no3_2",
    "need": [
      "Ni",
      "Sn(NO3)2"
    ],
    "eq": "Ni + Sn(NO3)2 → Ni(NO3)2 + Sn",
    "out": [
      "Ni(NO3)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_cubr2",
    "need": [
      "Ni",
      "CuBr2"
    ],
    "eq": "Ni + CuBr2 → NiBr2 + Cu",
    "out": [
      "NiBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_cuf2",
    "need": [
      "Ni",
      "CuF2"
    ],
    "eq": "Ni + CuF2 → NiF2 + Cu",
    "out": [
      "NiF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_cu_c2h3o2_2",
    "need": [
      "Ni",
      "Cu(C2H3O2)2"
    ],
    "eq": "Ni + Cu(C2H3O2)2 → Ni(C2H3O2)2 + Cu",
    "out": [
      "Ni(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_pb_c2h3o2_2",
    "need": [
      "Ni",
      "Pb(C2H3O2)2"
    ],
    "eq": "Ni + Pb(C2H3O2)2 → Ni(C2H3O2)2 + Pb",
    "out": [
      "Ni(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_agf",
    "need": [
      "Ni",
      "AgF"
    ],
    "eq": "Ni + 2AgF → NiF2 + 2Ag",
    "out": [
      "NiF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_agc2h3o2",
    "need": [
      "Ni",
      "AgC2H3O2"
    ],
    "eq": "Ni + 2AgC2H3O2 → Ni(C2H3O2)2 + 2Ag",
    "out": [
      "Ni(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_sn_c2h3o2_2",
    "need": [
      "Ni",
      "Sn(C2H3O2)2"
    ],
    "eq": "Ni + Sn(C2H3O2)2 → Ni(C2H3O2)2 + Sn",
    "out": [
      "Ni(C2H3O2)2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_ni_snf2",
    "need": [
      "Ni",
      "SnF2"
    ],
    "eq": "Ni + SnF2 → NiF2 + Sn",
    "out": [
      "NiF2",
      "Sn"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Ni hoạt động mạnh hơn Sn, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_cucl2",
    "need": [
      "Sn",
      "CuCl2"
    ],
    "eq": "Sn + CuCl2 → SnCl2 + Cu",
    "out": [
      "SnCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_cubr2",
    "need": [
      "Sn",
      "CuBr2"
    ],
    "eq": "Sn + CuBr2 → SnBr2 + Cu",
    "out": [
      "SnBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_cuf2",
    "need": [
      "Sn",
      "CuF2"
    ],
    "eq": "Sn + CuF2 → SnF2 + Cu",
    "out": [
      "SnF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_cu_c2h3o2_2",
    "need": [
      "Sn",
      "Cu(C2H3O2)2"
    ],
    "eq": "Sn + Cu(C2H3O2)2 → Sn(C2H3O2)2 + Cu",
    "out": [
      "Sn(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_pb_c2h3o2_2",
    "need": [
      "Sn",
      "Pb(C2H3O2)2"
    ],
    "eq": "Sn + Pb(C2H3O2)2 → Sn(C2H3O2)2 + Pb",
    "out": [
      "Sn(C2H3O2)2",
      "Pb"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Pb, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_agf",
    "need": [
      "Sn",
      "AgF"
    ],
    "eq": "Sn + 2AgF → SnF2 + 2Ag",
    "out": [
      "SnF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_sn_agc2h3o2",
    "need": [
      "Sn",
      "AgC2H3O2"
    ],
    "eq": "Sn + 2AgC2H3O2 → Sn(C2H3O2)2 + 2Ag",
    "out": [
      "Sn(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Sn hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_pb_cucl2",
    "need": [
      "Pb",
      "CuCl2"
    ],
    "eq": "Pb + CuCl2 → PbCl2↓ + Cu",
    "out": [
      "PbCl2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_pb_cubr2",
    "need": [
      "Pb",
      "CuBr2"
    ],
    "eq": "Pb + CuBr2 → PbBr2↓ + Cu",
    "out": [
      "PbBr2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_pb_cuf2",
    "need": [
      "Pb",
      "CuF2"
    ],
    "eq": "Pb + CuF2 → PbF2↓ + Cu",
    "out": [
      "PbF2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_pb_cu_c2h3o2_2",
    "need": [
      "Pb",
      "Cu(C2H3O2)2"
    ],
    "eq": "Pb + Cu(C2H3O2)2 → Pb(C2H3O2)2 + Cu",
    "out": [
      "Pb(C2H3O2)2",
      "Cu"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Cu, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_pb_agf",
    "need": [
      "Pb",
      "AgF"
    ],
    "eq": "Pb + 2AgF → PbF2↓ + 2Ag",
    "out": [
      "PbF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện.",
    "precip": "#eeeeea"
  },
  {
    "id": "metx_pb_agc2h3o2",
    "need": [
      "Pb",
      "AgC2H3O2"
    ],
    "eq": "Pb + 2AgC2H3O2 → Pb(C2H3O2)2 + 2Ag",
    "out": [
      "Pb(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Pb hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cu_agf",
    "need": [
      "Cu",
      "AgF"
    ],
    "eq": "Cu + 2AgF → CuF2 + 2Ag",
    "out": [
      "CuF2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cu hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  },
  {
    "id": "metx_cu_agc2h3o2",
    "need": [
      "Cu",
      "AgC2H3O2"
    ],
    "eq": "Cu + 2AgC2H3O2 → Cu(C2H3O2)2 + 2Ag",
    "out": [
      "Cu(C2H3O2)2",
      "Ag"
    ],
    "col": "#d6dce1",
    "dur": 8,
    "bub": 0.08,
    "explain": "Thế kim loại: Cu hoạt động mạnh hơn Ag, có thể đẩy ion kim loại ra khỏi dung dịch muối; tốc độ phụ thuộc bề mặt và điều kiện."
  }
]);

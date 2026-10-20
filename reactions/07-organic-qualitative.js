// Chemistry Lab 3D — organic-qualitative (65 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "acetic_naoh",
    "need": [
      "CH3COOH",
      "NaOH"
    ],
    "eq": "CH3COOH + NaOH → CH3COONa + H2O",
    "out": [
      "CH3COONa",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 4,
    "bub": 0.1,
    "heatRise": 2,
    "explain": "Mô hình minh họa trung hòa axit yếu với bazơ mạnh."
  },
  {
    "id": "methane_combustion",
    "need": [
      "CH4",
      "O2"
    ],
    "eq": "CH4 + 2O2 → CO2 + 2H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e4e4e4",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "iodine_starch",
    "need": [
      "I2",
      "Starch",
      "H2O"
    ],
    "eq": "I2 + tinh bột → phức màu xanh tím",
    "out": [
      "Iodine-starch complex",
      "H2O"
    ],
    "col": "#222044",
    "dur": 5,
    "bub": 0.02,
    "explain": "Phức iốt–tinh bột tạo màu xanh tím đậm."
  },
  {
    "id": "methanol_combustion",
    "need": [
      "CH3OH",
      "O2"
    ],
    "eq": "2CH3OH + 3O2 → 2CO2 + 4H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "ethanol_combustion",
    "need": [
      "C2H5OH",
      "O2"
    ],
    "eq": "C2H5OH + 3O2 → 2CO2 + 3H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.5,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "glucose_combustion",
    "need": [
      "Glucose",
      "O2"
    ],
    "eq": "C6H12O6 + 6O2 → 6CO2 + 6H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 7,
    "bub": 0.4,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "acetic_nahco3",
    "need": [
      "CH3COOH",
      "NaHCO3"
    ],
    "eq": "CH3COOH + NaHCO3 → CH3COONa + CO2↑ + H2O",
    "out": [
      "CH3COONa",
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.8,
    "gas": "CO2"
  },
  {
    "id": "glucose_fehling",
    "need": [
      "Glucose",
      "Cu(OH)2",
      "NaOH"
    ],
    "eq": "C6H12O6 + 2Cu(OH)2 + NaOH → C6H11O7Na + Cu2O↓ + 3H2O",
    "out": [
      "C6H11O7Na",
      "Cu2O",
      "H2O"
    ],
    "col": "#b65a45",
    "dur": 8,
    "bub": 0.1,
    "precip": "#b65a45",
    "heat": 70,
    "heating": true,
    "fire": 0,
    "explain": "Phản ứng khử đồng(II) thành đồng(I) oxit đỏ gạch khi đun nóng trong môi trường kiềm."
  },
  {
    "id": "tollens_prepare",
    "need": [
      "Ag2O",
      "NH3",
      "H2O"
    ],
    "eq": "Ag2O + 4NH3 + H2O ⇌ 2[Ag(NH3)2]OH",
    "out": [
      "[Ag(NH3)2]OH"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.05,
    "explain": "Amoniac hòa tan bạc oxit tạo phức bạc amoniac — thuốc thử cho phản ứng tráng bạc."
  },
  {
    "id": "tollens_reduce_glucose",
    "need": [
      "[Ag(NH3)2]OH",
      "Glucose"
    ],
    "eq": "C6H12O6 + 2[Ag(NH3)2]OH → C6H15NO7 + 2Ag↓ + 3NH3 + H2O",
    "out": [
      "C6H15NO7",
      "Ag",
      "NH3",
      "H2O"
    ],
    "col": "#c6c6c8",
    "precip": "#c6c6c8",
    "dur": 9,
    "bub": 0.06,
    "explain": "Glucozơ khử bạc(I) thành bạc kim loại; mô phỏng thể hiện bạc màu xám sáng và dung dịch sản phẩm."
  },
  {
    "id": "ethanol_dichromate_acid",
    "need": [
      "C2H5OH",
      "K2Cr2O7",
      "H2SO4"
    ],
    "eq": "3C2H5OH + 2K2Cr2O7 + 8H2SO4 → 3CH3COOH + 2Cr2(SO4)3 + 2K2SO4 + 11H2O",
    "out": [
      "CH3COOH",
      "Cr2(SO4)3",
      "K2SO4",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d6b276",
    "dur": 10,
    "bub": 0.1,
    "explain": "Đicromat trong môi trường axit oxi hóa etanol thành axit axetic theo phương trình tổng quát."
  },
  {
    "id": "mg_acetic",
    "need": [
      "Mg",
      "CH3COOH"
    ],
    "eq": "Mg + 2CH3COOH → Mg(CH3COO)2 + H2↑",
    "out": [
      "Mg(CH3COO)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "gas": "H2"
  },
  {
    "id": "zn_acetic",
    "need": [
      "Zn",
      "CH3COOH"
    ],
    "eq": "Zn + 2CH3COOH → Zn(CH3COO)2 + H2↑",
    "out": [
      "Zn(CH3COO)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "gas": "H2"
  },
  {
    "id": "fe_acetic",
    "need": [
      "Fe",
      "CH3COOH"
    ],
    "eq": "Fe + 2CH3COOH → Fe(CH3COO)2 + H2↑",
    "out": [
      "Fe(CH3COO)2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.3,
    "gas": "H2"
  },
  {
    "id": "neutralization_ch3cooh_lioh_206",
    "need": [
      "CH3COOH",
      "LiOH"
    ],
    "eq": "CH3COOH + LiOH → LiC2H3O2 + H2O",
    "out": [
      "LiC2H3O2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_koh_207",
    "need": [
      "CH3COOH",
      "KOH"
    ],
    "eq": "CH3COOH + KOH → CH3COOK + H2O",
    "out": [
      "CH3COOK",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_ca_oh_2_208",
    "need": [
      "CH3COOH",
      "Ca(OH)2"
    ],
    "eq": "2CH3COOH + Ca(OH)2 → Ca(C2H3O2)2 + 2H2O",
    "out": [
      "Ca(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ba_oh_2_ch3cooh_209",
    "need": [
      "CH3COOH",
      "Ba(OH)2"
    ],
    "eq": "2CH3COOH + Ba(OH)2 → Ba(C2H3O2)2 + 2H2O",
    "out": [
      "Ba(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_mg_oh_2_210",
    "need": [
      "CH3COOH",
      "Mg(OH)2"
    ],
    "eq": "2CH3COOH + Mg(OH)2 → Mg(C2H3O2)2 + 2H2O",
    "out": [
      "Mg(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_al_oh_3_ch3cooh_211",
    "need": [
      "CH3COOH",
      "Al(OH)3"
    ],
    "eq": "3CH3COOH + Al(OH)3 → Al(C2H3O2)3 + 3H2O",
    "out": [
      "Al(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_fe_oh_2_212",
    "need": [
      "CH3COOH",
      "Fe(OH)2"
    ],
    "eq": "2CH3COOH + Fe(OH)2 → Fe(C2H3O2)2 + 2H2O",
    "out": [
      "Fe(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_fe_oh_3_213",
    "need": [
      "CH3COOH",
      "Fe(OH)3"
    ],
    "eq": "3CH3COOH + Fe(OH)3 → Fe(C2H3O2)3 + 3H2O",
    "out": [
      "Fe(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_cu_oh_2_214",
    "need": [
      "CH3COOH",
      "Cu(OH)2"
    ],
    "eq": "2CH3COOH + Cu(OH)2 → Cu(C2H3O2)2 + 2H2O",
    "out": [
      "Cu(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_zn_oh_2_215",
    "need": [
      "CH3COOH",
      "Zn(OH)2"
    ],
    "eq": "2CH3COOH + Zn(OH)2 → Zn(C2H3O2)2 + 2H2O",
    "out": [
      "Zn(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_co_oh_2_216",
    "need": [
      "CH3COOH",
      "Co(OH)2"
    ],
    "eq": "2CH3COOH + Co(OH)2 → Co(C2H3O2)2 + 2H2O",
    "out": [
      "Co(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_cr_oh_3_217",
    "need": [
      "CH3COOH",
      "Cr(OH)3"
    ],
    "eq": "3CH3COOH + Cr(OH)3 → Cr(C2H3O2)3 + 3H2O",
    "out": [
      "Cr(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_ni_oh_2_218",
    "need": [
      "CH3COOH",
      "Ni(OH)2"
    ],
    "eq": "2CH3COOH + Ni(OH)2 → Ni(C2H3O2)2 + 2H2O",
    "out": [
      "Ni(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_mn_oh_2_219",
    "need": [
      "CH3COOH",
      "Mn(OH)2"
    ],
    "eq": "2CH3COOH + Mn(OH)2 → Mn(C2H3O2)2 + 2H2O",
    "out": [
      "Mn(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "neutralization_ch3cooh_pb_oh_2_220",
    "need": [
      "CH3COOH",
      "Pb(OH)2"
    ],
    "eq": "2CH3COOH + Pb(OH)2 → Pb(C2H3O2)2 + 2H2O",
    "out": [
      "Pb(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Axit phản ứng với bazơ tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_cao_323",
    "need": [
      "CaO",
      "CH3COOH"
    ],
    "eq": "CaO + 2CH3COOH → Ca(C2H3O2)2 + H2O",
    "out": [
      "Ca(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_mgo_330",
    "need": [
      "MgO",
      "CH3COOH"
    ],
    "eq": "MgO + 2CH3COOH → Mg(C2H3O2)2 + H2O",
    "out": [
      "Mg(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_na2o_338",
    "need": [
      "Na2O",
      "CH3COOH"
    ],
    "eq": "Na2O + 2CH3COOH → 2CH3COONa + H2O",
    "out": [
      "CH3COONa",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_k2o_347",
    "need": [
      "K2O",
      "CH3COOH"
    ],
    "eq": "K2O + 2CH3COOH → 2CH3COOK + H2O",
    "out": [
      "CH3COOK",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_cuo_354",
    "need": [
      "CuO",
      "CH3COOH"
    ],
    "eq": "CuO + 2CH3COOH → Cu(C2H3O2)2 + H2O",
    "out": [
      "Cu(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_feo_362",
    "need": [
      "FeO",
      "CH3COOH"
    ],
    "eq": "FeO + 2CH3COOH → Fe(C2H3O2)2 + H2O",
    "out": [
      "Fe(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_fe2o3_369",
    "need": [
      "Fe2O3",
      "CH3COOH"
    ],
    "eq": "Fe2O3 + 6CH3COOH → 2Fe(C2H3O2)3 + 3H2O",
    "out": [
      "Fe(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_zno_377",
    "need": [
      "ZnO",
      "CH3COOH"
    ],
    "eq": "ZnO + 2CH3COOH → Zn(C2H3O2)2 + H2O",
    "out": [
      "Zn(C2H3O2)2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_al2o3_ch3cooh_385",
    "need": [
      "Al2O3",
      "CH3COOH"
    ],
    "eq": "Al2O3 + 6CH3COOH → 2Al(C2H3O2)3 + 3H2O",
    "out": [
      "Al(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ch3cooh_ga2o3_393",
    "need": [
      "Ga2O3",
      "CH3COOH"
    ],
    "eq": "Ga2O3 + 6CH3COOH → 2Ga(C2H3O2)3 + 3H2O",
    "out": [
      "Ga(C2H3O2)3",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "oxide_acid_ag2o_ch3cooh_402",
    "need": [
      "Ag2O",
      "CH3COOH"
    ],
    "eq": "Ag2O + 2CH3COOH → 2AgC2H3O2 + H2O",
    "out": [
      "AgC2H3O2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 6,
    "bub": 0.06,
    "explain": "Oxit bazơ phản ứng với axit tạo muối và nước."
  },
  {
    "id": "acid_gas_ch3cooh_na2co3_409",
    "need": [
      "CH3COOH",
      "Na2CO3"
    ],
    "eq": "2CH3COOH + Na2CO3 → 2CH3COONa + CO2 + H2O",
    "out": [
      "CH3COONa",
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
    "id": "acid_gas_ch3cooh_k2co3_416",
    "need": [
      "CH3COOH",
      "K2CO3"
    ],
    "eq": "2CH3COOH + K2CO3 → 2CH3COOK + CO2 + H2O",
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
    "id": "acid_gas_ch3cooh_caco3_427",
    "need": [
      "CH3COOH",
      "CaCO3"
    ],
    "eq": "2CH3COOH + CaCO3 → Ca(C2H3O2)2 + CO2 + H2O",
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
    "id": "acid_gas_ch3cooh_cuco3_434",
    "need": [
      "CH3COOH",
      "CuCO3"
    ],
    "eq": "2CH3COOH + CuCO3 → Cu(C2H3O2)2 + CO2 + H2O",
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
    "id": "acid_gas_ch3cooh_feco3_442",
    "need": [
      "CH3COOH",
      "FeCO3"
    ],
    "eq": "2CH3COOH + FeCO3 → Fe(C2H3O2)2 + CO2 + H2O",
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
    "id": "acid_gas_ch3cooh_mgco3_448",
    "need": [
      "CH3COOH",
      "MgCO3"
    ],
    "eq": "2CH3COOH + MgCO3 → Mg(C2H3O2)2 + CO2 + H2O",
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
    "id": "acid_gas_baco3_ch3cooh_457",
    "need": [
      "CH3COOH",
      "BaCO3"
    ],
    "eq": "2CH3COOH + BaCO3 → Ba(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Ba(C2H3O2)2",
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
    "id": "acid_gas_ag2co3_ch3cooh_466",
    "need": [
      "CH3COOH",
      "Ag2CO3"
    ],
    "eq": "2CH3COOH + Ag2CO3 → 2AgC2H3O2 + CO2 + H2O",
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
    "id": "acid_gas_ch3cooh_pbco3_475",
    "need": [
      "CH3COOH",
      "PbCO3"
    ],
    "eq": "2CH3COOH + PbCO3 → Pb(C2H3O2)2 + CO2 + H2O",
    "out": [
      "Pb(C2H3O2)2",
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
    "id": "acid_gas_ch3cooh_na2so3_483",
    "need": [
      "CH3COOH",
      "Na2SO3"
    ],
    "eq": "2CH3COOH + Na2SO3 → 2CH3COONa + SO2 + H2O",
    "out": [
      "CH3COONa",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ch3cooh_caso3_492",
    "need": [
      "CH3COOH",
      "CaSO3"
    ],
    "eq": "2CH3COOH + CaSO3 → Ca(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Ca(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_baso3_ch3cooh_501",
    "need": [
      "CH3COOH",
      "BaSO3"
    ],
    "eq": "2CH3COOH + BaSO3 → Ba(C2H3O2)2 + SO2 + H2O",
    "out": [
      "Ba(C2H3O2)2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.7,
    "gas": "SO2",
    "explain": "Axit tác dụng với cacbonat/hiđrocacbonat giải phóng CO₂."
  },
  {
    "id": "acid_gas_ch3cooh_na2s2o3_522",
    "need": [
      "CH3COOH",
      "Na2S2O3"
    ],
    "eq": "2CH3COOH + Na2S2O3 → 2CH3COONa + S↓ + SO2 + H2O",
    "out": [
      "CH3COONa",
      "S",
      "SO2",
      "H2O"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.55,
    "precip": "#d9d84a",
    "gas": "SO2",
    "explain": "Thiosunfat gặp axit tạo lưu huỳnh keo và SO₂."
  },
  {
    "id": "metal_acid_ch3cooh_li_527",
    "need": [
      "Li",
      "CH3COOH"
    ],
    "eq": "2Li + 2CH3COOH → 2LiC2H3O2 + H2",
    "out": [
      "LiC2H3O2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_na_533",
    "need": [
      "Na",
      "CH3COOH"
    ],
    "eq": "2Na + 2CH3COOH → 2CH3COONa + H2",
    "out": [
      "CH3COONa",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_k_539",
    "need": [
      "K",
      "CH3COOH"
    ],
    "eq": "2K + 2CH3COOH → 2CH3COOK + H2",
    "out": [
      "CH3COOK",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_ca_541",
    "need": [
      "Ca",
      "CH3COOH"
    ],
    "eq": "Ca + 2CH3COOH → Ca(C2H3O2)2 + H2",
    "out": [
      "Ca(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_al_ch3cooh_545",
    "need": [
      "Al",
      "CH3COOH"
    ],
    "eq": "2Al + 6CH3COOH → 2Al(C2H3O2)3 + 3H2",
    "out": [
      "Al(C2H3O2)3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_mn_548",
    "need": [
      "Mn",
      "CH3COOH"
    ],
    "eq": "Mn + 2CH3COOH → Mn(C2H3O2)2 + H2",
    "out": [
      "Mn(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_cr_552",
    "need": [
      "Cr",
      "CH3COOH"
    ],
    "eq": "Cr + 2CH3COOH → Cr(C2H3O2)2 + H2",
    "out": [
      "Cr(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_co_556",
    "need": [
      "Co",
      "CH3COOH"
    ],
    "eq": "Co + 2CH3COOH → Co(C2H3O2)2 + H2",
    "out": [
      "Co(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_ni_558",
    "need": [
      "Ni",
      "CH3COOH"
    ],
    "eq": "Ni + 2CH3COOH → Ni(C2H3O2)2 + H2",
    "out": [
      "Ni(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_sn_560",
    "need": [
      "Sn",
      "CH3COOH"
    ],
    "eq": "Sn + 2CH3COOH → Sn(C2H3O2)2 + H2",
    "out": [
      "Sn(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_pb_564",
    "need": [
      "Pb",
      "CH3COOH"
    ],
    "eq": "Pb + 2CH3COOH → Pb(C2H3O2)2 + H2",
    "out": [
      "Pb(C2H3O2)2",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  },
  {
    "id": "metal_acid_ch3cooh_ga_568",
    "need": [
      "Ga",
      "CH3COOH"
    ],
    "eq": "2Ga + 6CH3COOH → 2Ga(C2H3O2)3 + 3H2",
    "out": [
      "Ga(C2H3O2)3",
      "H2"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.65,
    "gas": "H2",
    "explain": "Kim loại hoạt động mạnh hơn hiđro phản ứng với axit không oxi hóa, giải phóng H₂."
  }
]);

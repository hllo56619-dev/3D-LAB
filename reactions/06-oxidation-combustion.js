// Chemistry Lab 3D — oxidation-combustion (50 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "carbon_combustion",
    "need": [
      "C",
      "O2"
    ],
    "eq": "C + O2 → CO2",
    "out": [
      "CO2"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.4,
    "fire": 1,
    "gas": "CO2"
  },
  {
    "id": "sulfur_combustion",
    "need": [
      "S",
      "O2"
    ],
    "eq": "S + O2 → SO2",
    "out": [
      "SO2"
    ],
    "heat": 60,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.5,
    "fire": 1,
    "gas": "SO2"
  },
  {
    "id": "hydrogen_combustion",
    "need": [
      "H2",
      "O2"
    ],
    "eq": "2H2 + O2 → 2H2O",
    "out": [
      "H2O"
    ],
    "heat": 75,
    "heating": true,
    "col": "#e8e8e8",
    "dur": 5,
    "bub": 0.1,
    "fire": 1
  },
  {
    "id": "nitrogen_oxidation",
    "need": [
      "N2",
      "O2"
    ],
    "eq": "N2 + O2 → 2NO",
    "out": [
      "NO"
    ],
    "heat": 120,
    "heating": true,
    "col": "#d7d7d7",
    "dur": 8,
    "bub": 0.3,
    "gas": "NO",
    "explain": "Phản ứng cần nhiệt độ rất cao (mô phỏng hồ quang điện)."
  },
  {
    "id": "no_oxidation",
    "need": [
      "NO",
      "O2"
    ],
    "eq": "2NO + O2 → 2NO2",
    "out": [
      "NO2"
    ],
    "col": "#9c542e",
    "dur": 6,
    "bub": 0.15,
    "gas": "NO2"
  },
  {
    "id": "so2_oxidation",
    "need": [
      "SO2",
      "O2"
    ],
    "eq": "2SO2 + O2 ⇌ 2SO3",
    "out": [
      "SO3"
    ],
    "heat": 80,
    "heating": true,
    "arrowLabel": "V₂O₅, t°",
    "col": "#dededb",
    "dur": 8,
    "bub": 0.05,
    "explain": "Mô phỏng cân bằng oxi hóa SO₂ có xúc tác; phản ứng thực tế phụ thuộc nhiệt độ và cân bằng."
  },
  {
    "id": "hydrogen_chlorine_light",
    "need": [
      "H2",
      "Cl2"
    ],
    "eq": "H2 + Cl2 → 2HCl",
    "out": [
      "HCl"
    ],
    "arrowLabel": "ánh sáng",
    "col": "#e7e7e7",
    "dur": 6,
    "bub": 0.1,
    "explain": "Phản ứng quang hóa; mô phỏng không tái hiện nguy hiểm ngoài đời."
  },
  {
    "id": "fe_cl2",
    "need": [
      "Fe",
      "Cl2"
    ],
    "eq": "2Fe + 3Cl2 → 2FeCl3",
    "out": [
      "FeCl3"
    ],
    "col": "#d6a34a",
    "dur": 7,
    "bub": 0.1,
    "heat": 60,
    "heating": true,
    "fire": 1
  },
  {
    "id": "ammonia_oxidation",
    "need": [
      "NH3",
      "O2"
    ],
    "eq": "4NH3 + 3O2 → 2N2 + 6H2O",
    "out": [
      "N2",
      "H2O"
    ],
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.2,
    "gas": "N2",
    "heat": 100,
    "heating": true
  },
  {
    "id": "co_oxidation",
    "need": [
      "CO",
      "O2"
    ],
    "eq": "2CO + O2 → 2CO2",
    "out": [
      "CO2"
    ],
    "col": "#d8d8d8",
    "dur": 6,
    "bub": 0.4,
    "gas": "CO2",
    "heat": 60,
    "heating": true
  },
  {
    "id": "cu2o_oxidation",
    "need": [
      "Cu2O",
      "O2"
    ],
    "eq": "2Cu2O + O2 → 4CuO",
    "out": [
      "CuO"
    ],
    "col": "#222222",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "feo_oxidation",
    "need": [
      "FeO",
      "O2"
    ],
    "eq": "4FeO + O2 → 2Fe2O3",
    "out": [
      "Fe2O3"
    ],
    "col": "#8b4230",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "fe3o4_oxidation",
    "need": [
      "Fe3O4",
      "O2"
    ],
    "eq": "4Fe3O4 + O2 → 6Fe2O3",
    "out": [
      "Fe2O3"
    ],
    "col": "#8b4230",
    "dur": 7,
    "bub": 0.05,
    "heat": 70,
    "heating": true
  },
  {
    "id": "h2s_oxygen",
    "need": [
      "H2S",
      "O2"
    ],
    "eq": "2H2S + 3O2 → 2SO2 + 2H2O",
    "out": [
      "SO2",
      "H2O"
    ],
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.6,
    "gas": "SO2",
    "heat": 70,
    "heating": true
  },
  {
    "id": "p_combustion",
    "need": [
      "P (white)",
      "O2"
    ],
    "eq": "4P + 5O2 → P4O10",
    "out": [
      "P4O10"
    ],
    "col": "#eeeeea",
    "dur": 8,
    "bub": 0.3,
    "heat": 60,
    "heating": true,
    "fire": 1
  },
  {
    "id": "acid_permanganate_iron2",
    "need": [
      "KMnO4",
      "FeSO4",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 10FeSO4 + 8H2SO4 → K2SO4 + 2MnSO4 + 5Fe2(SO4)3 + 8H2O",
    "out": [
      "K2SO4",
      "MnSO4",
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#a9c8a0",
    "dur": 9,
    "bub": 0.6,
    "explain": "Phản ứng oxi hóa–khử trong môi trường axit: permanganat oxi hóa Fe²⁺ thành Fe³⁺."
  },
  {
    "id": "acid_dichromate_iodide",
    "need": [
      "K2Cr2O7",
      "KI",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 6KI + 7H2SO4 → Cr2(SO4)3 + 4K2SO4 + 3I2 + 7H2O",
    "out": [
      "Cr2(SO4)3",
      "K2SO4",
      "I2",
      "H2O"
    ],
    "col": "#805b91",
    "dur": 9,
    "bub": 0.2,
    "explain": "Đicromat oxi hóa iodua thành iốt trong môi trường axit."
  },
  {
    "id": "acid_permanganate_sulfite",
    "need": [
      "KMnO4",
      "Na2SO3",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 5Na2SO3 + 3H2SO4 → K2SO4 + 5Na2SO4 + 2MnSO4 + 3H2O",
    "out": [
      "K2SO4",
      "Na2SO4",
      "MnSO4",
      "H2O"
    ],
    "col": "#4e8b58",
    "dur": 9,
    "bub": 0.25,
    "explain": "Permanganat oxi hóa ion sunfit thành sunfat trong môi trường axit."
  },
  {
    "id": "acid_dichromate_sulfite",
    "need": [
      "K2Cr2O7",
      "Na2SO3",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 3Na2SO3 + 4H2SO4 → K2SO4 + Cr2(SO4)3 + 3Na2SO4 + 4H2O",
    "out": [
      "K2SO4",
      "Cr2(SO4)3",
      "Na2SO4",
      "H2O"
    ],
    "col": "#db802b",
    "dur": 9,
    "bub": 0.15,
    "explain": "Đicromat oxi hóa sunfit thành sunfat trong môi trường axit."
  },
  {
    "id": "acid_permanganate_iodide",
    "need": [
      "KMnO4",
      "KI",
      "H2SO4"
    ],
    "eq": "2KMnO4 + 10KI + 8H2SO4 → 6K2SO4 + 2MnSO4 + 5I2 + 8H2O",
    "out": [
      "K2SO4",
      "MnSO4",
      "I2",
      "H2O"
    ],
    "col": "#514080",
    "dur": 9,
    "bub": 0.25,
    "explain": "Permanganat oxi hóa iodua thành iốt trong môi trường axit."
  },
  {
    "id": "acid_dichromate_iron2",
    "need": [
      "K2Cr2O7",
      "FeSO4",
      "H2SO4"
    ],
    "eq": "K2Cr2O7 + 6FeSO4 + 7H2SO4 → K2SO4 + Cr2(SO4)3 + 3Fe2(SO4)3 + 7H2O",
    "out": [
      "K2SO4",
      "Cr2(SO4)3",
      "Fe2(SO4)3",
      "H2O"
    ],
    "col": "#d6b276",
    "dur": 9,
    "bub": 0.2,
    "explain": "Đicromat oxi hóa Fe²⁺ thành Fe³⁺ trong môi trường axit."
  },
  {
    "id": "nitrogen_dioxide_oxidation_water",
    "need": [
      "NO2",
      "O2",
      "H2O"
    ],
    "eq": "4NO2 + O2 + 2H2O → 4HNO3",
    "out": [
      "HNO3"
    ],
    "col": "#d0c4b0",
    "dur": 8,
    "bub": 0.2,
    "explain": "Oxi hóa NO₂ trong nước tạo axit nitric; mô phỏng phương trình tổng quát."
  },
  {
    "id": "sulfur_dioxide_to_sulfuric_acid",
    "need": [
      "SO2",
      "O2",
      "H2O"
    ],
    "eq": "2SO2 + O2 + 2H2O ⇌ 2H2SO4",
    "out": [
      "H2SO4"
    ],
    "heat": 80,
    "heating": true,
    "arrowLabel": "xúc tác, t°",
    "col": "#e8e9e9",
    "dur": 9,
    "bub": 0.08,
    "explain": "Phương trình tổng quát của quá trình oxi hóa SO₂ rồi hấp thụ tạo axit sunfuric; quy trình thực tế cần xúc tác và nhiều công đoạn."
  },
  {
    "id": "chlorine_hot_alkali",
    "need": [
      "Cl2",
      "NaOH",
      "H2O"
    ],
    "eq": "3Cl2 + 6NaOH → 5NaCl + NaClO3 + 3H2O",
    "out": [
      "NaCl",
      "NaClO3",
      "H2O"
    ],
    "heat": 80,
    "heating": true,
    "col": "#d8d8d8",
    "dur": 9,
    "bub": 0.15,
    "explain": "Clo phản ứng với kiềm nóng, đặc tạo clorua và clorat; chỉ mô phỏng do khí clo độc."
  },
  {
    "id": "nitrogen_dioxide_alkali_oxidation",
    "need": [
      "NO2",
      "O2",
      "NaOH"
    ],
    "eq": "4NO2 + O2 + 4NaOH → 4NaNO3 + 2H2O",
    "out": [
      "NaNO3",
      "H2O"
    ],
    "col": "#e1d3a7",
    "dur": 8,
    "bub": 0.1,
    "explain": "NO₂ được oxi hóa trong môi trường kiềm tạo nitrat; phương trình mô phỏng tổng quát."
  },
  {
    "id": "sulfur_dioxide_alkali_oxidation",
    "need": [
      "SO2",
      "NaOH",
      "O2"
    ],
    "eq": "2SO2 + O2 + 4NaOH → 2Na2SO4 + 2H2O",
    "out": [
      "Na2SO4",
      "H2O"
    ],
    "col": "#e8e9e9",
    "dur": 8,
    "bub": 0.08,
    "explain": "Sunfit trung gian bị oxi hóa tiếp thành sunfat trong môi trường kiềm."
  },
  {
    "id": "ammonia_catalytic_oxidation",
    "need": [
      "NH3",
      "O2",
      "Pt"
    ],
    "preserve": [
      "Pt"
    ],
    "eq": "4NH3 + 5O2 → 4NO + 6H2O",
    "out": [
      "NO",
      "H2O"
    ],
    "heat": 70,
    "heating": true,
    "arrowLabel": "Pt, t°",
    "col": "#d8d8d8",
    "dur": 8,
    "bub": 0.2,
    "gas": "NO",
    "explain": "Oxi hóa xúc tác amoniac theo nguyên lý quá trình Ostwald; Pt đóng vai trò xúc tác, không bị tiêu hao."
  },
  {
    "id": "carbon_monoxide_catalytic_oxidation",
    "need": [
      "CO",
      "O2",
      "Pt"
    ],
    "preserve": [
      "Pt"
    ],
    "eq": "2CO + O2 → 2CO2",
    "out": [
      "CO2"
    ],
    "heat": 40,
    "heating": true,
    "arrowLabel": "Pt, t°",
    "col": "#d8d8d8",
    "dur": 7,
    "bub": 0.3,
    "gas": "CO2",
    "explain": "CO bị oxi hóa thành CO₂ trên xúc tác platin; mô phỏng giữ Pt lại làm xúc tác."
  },
  {
    "id": "synthesis_oxidation_ca_o2_684",
    "need": [
      "Ca",
      "O2"
    ],
    "eq": "2Ca + O2 → 2CaO",
    "out": [
      "CaO"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_o2_sn_685",
    "need": [
      "Sn",
      "O2"
    ],
    "eq": "Sn + O2 → SnO2",
    "out": [
      "SnO2"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_o2_pb_686",
    "need": [
      "Pb",
      "O2"
    ],
    "eq": "2Pb + O2 → 2PbO",
    "out": [
      "PbO"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_ni_o2_687",
    "need": [
      "Ni",
      "O2"
    ],
    "eq": "2Ni + O2 → 2NiO",
    "out": [
      "NiO"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_co_o2_688",
    "need": [
      "Co",
      "O2"
    ],
    "eq": "2Co + O2 → 2CoO",
    "out": [
      "CoO"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_mn_o2_689",
    "need": [
      "Mn",
      "O2"
    ],
    "eq": "Mn + O2 → MnO2",
    "out": [
      "MnO2"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_cr_o2_690",
    "need": [
      "Cr",
      "O2"
    ],
    "eq": "4Cr + 3O2 → 2Cr2O3",
    "out": [
      "Cr2O3"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_oxidation_o2_si_691",
    "need": [
      "Si",
      "O2"
    ],
    "eq": "Si + O2 → SiO2",
    "out": [
      "SiO2"
    ],
    "col": "#e2c18a",
    "dur": 8,
    "bub": 0.35,
    "heat": 70,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng oxi hóa/tổng hợp với oxi; cần nhiệt khởi đầu trong mô phỏng."
  },
  {
    "id": "synthesis_halogen_cl2_mg_692",
    "need": [
      "Mg",
      "Cl2"
    ],
    "eq": "Mg + Cl2 → MgCl2",
    "out": [
      "MgCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_zn_693",
    "need": [
      "Zn",
      "Cl2"
    ],
    "eq": "Zn + Cl2 → ZnCl2",
    "out": [
      "ZnCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_ca_cl2_696",
    "need": [
      "Ca",
      "Cl2"
    ],
    "eq": "Ca + Cl2 → CaCl2",
    "out": [
      "CaCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_co_697",
    "need": [
      "Co",
      "Cl2"
    ],
    "eq": "Co + Cl2 → CoCl2",
    "out": [
      "CoCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_ni_698",
    "need": [
      "Ni",
      "Cl2"
    ],
    "eq": "Ni + Cl2 → NiCl2",
    "out": [
      "NiCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_sn_699",
    "need": [
      "Sn",
      "Cl2"
    ],
    "eq": "Sn + Cl2 → SnCl2",
    "out": [
      "SnCl2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_cl2_ga_702",
    "need": [
      "Ga",
      "Cl2"
    ],
    "eq": "2Ga + 3Cl2 → 2GaCl3",
    "out": [
      "GaCl3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_mg_703",
    "need": [
      "Mg",
      "Br2"
    ],
    "eq": "Mg + Br2 → MgBr2",
    "out": [
      "MgBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_zn_704",
    "need": [
      "Zn",
      "Br2"
    ],
    "eq": "Zn + Br2 → ZnBr2",
    "out": [
      "ZnBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_ca_707",
    "need": [
      "Ca",
      "Br2"
    ],
    "eq": "Ca + Br2 → CaBr2",
    "out": [
      "CaBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_co_708",
    "need": [
      "Co",
      "Br2"
    ],
    "eq": "Co + Br2 → CoBr2",
    "out": [
      "CoBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_ni_709",
    "need": [
      "Ni",
      "Br2"
    ],
    "eq": "Ni + Br2 → NiBr2",
    "out": [
      "NiBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_sn_710",
    "need": [
      "Sn",
      "Br2"
    ],
    "eq": "Sn + Br2 → SnBr2",
    "out": [
      "SnBr2"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  },
  {
    "id": "synthesis_halogen_br2_ga_711",
    "need": [
      "Ga",
      "Br2"
    ],
    "eq": "2Ga + 3Br2 → 2GaBr3",
    "out": [
      "GaBr3"
    ],
    "col": "#dfaa60",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "fire": 1,
    "explain": "Phản ứng tổng hợp giữa kim loại và phi kim, thường cần nhiệt khởi đầu."
  }
]);

// Chemistry Lab 3D — industrial gas, acid displacement and titration (9 rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_methane_combustion",
    "need": [
      "CH4",
      "O2"
    ],
    "eq": "CH4 + 2O2 → CO2 + 2H2O",
    "out": [
      "CO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "gas": "CO2",
    "fire": 1
  },
  {
    "id": "audit_methane_steam_reforming",
    "need": [
      "CH4",
      "H2O"
    ],
    "eq": "CH4 + H2O → CO + 3H2",
    "out": [
      "CO",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.08,
    "heat": 100,
    "heating": true,
    "arrowLabel": "Ni, t°",
    "gas": "H2",
    "explain": "Phản ứng reforming metan cần hơi nước, nhiệt độ cao và xúc tác."
  },
  {
    "id": "audit_carbon_steam",
    "need": [
      "C",
      "H2O"
    ],
    "eq": "C + H2O → CO + H2",
    "out": [
      "CO",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.08,
    "heat": 100,
    "heating": true,
    "gas": "H2",
    "explain": "Than nung đỏ phản ứng với hơi nước tạo khí than."
  },
  {
    "id": "audit_water_gas_shift",
    "need": [
      "CO",
      "H2O"
    ],
    "eq": "CO + H2O ⇌ CO2 + H2",
    "out": [
      "CO2",
      "H2"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.08,
    "heat": 60,
    "heating": true,
    "arrowLabel": "xúc tác",
    "gas": "H2",
    "explain": "Phản ứng chuyển hóa CO–hơi nước."
  },
  {
    "id": "audit_haber_ammonia",
    "need": [
      "N2",
      "H2"
    ],
    "eq": "N2 + 3H2 ⇌ 2NH3",
    "out": [
      "NH3"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.08,
    "heat": 80,
    "heating": true,
    "arrowLabel": "Fe, p, t°",
    "explain": "Mô phỏng cân bằng Haber–Bosch; cần xúc tác, nhiệt độ và áp suất thích hợp."
  },
  {
    "id": "audit_nacl_conc_sulfuric",
    "need": [
      "NaCl",
      "H2SO4 (đặc)"
    ],
    "eq": "NaCl + H2SO4 (đặc) → NaHSO4 + HCl↑",
    "out": [
      "NaHSO4",
      "HCl"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.3,
    "heat": 60,
    "heating": true,
    "gas": "HCl"
  },
  {
    "id": "audit_kcl_conc_sulfuric",
    "need": [
      "KCl",
      "H2SO4 (đặc)"
    ],
    "eq": "KCl + H2SO4 (đặc) → KHSO4 + HCl↑",
    "out": [
      "KHSO4",
      "HCl"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.3,
    "heat": 60,
    "heating": true,
    "gas": "HCl"
  },
  {
    "id": "audit_nh4cl_conc_sulfuric",
    "need": [
      "NH4Cl",
      "H2SO4 (đặc)"
    ],
    "eq": "NH4Cl + H2SO4 (đặc) → NH4HSO4 + HCl↑",
    "out": [
      "NH4HSO4",
      "HCl"
    ],
    "col": "#e7e8e7",
    "dur": 8,
    "bub": 0.3,
    "heat": 60,
    "heating": true,
    "gas": "HCl"
  },
  {
    "id": "audit_thiosulfate_iodine",
    "need": [
      "Na2S2O3",
      "I2"
    ],
    "eq": "2Na2S2O3 + I2 → Na2S4O6 + 2NaI",
    "out": [
      "Na2S4O6",
      "NaI"
    ],
    "col": "#805b91",
    "dur": 8,
    "bub": 0.08,
    "explain": "Phản ứng chuẩn độ iốt bằng thiosunfat tạo tetrathionat và iodua."
  }
]);

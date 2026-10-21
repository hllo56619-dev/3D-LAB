// Chemistry Lab 3D — chemistry coverage audit (6 reviewed rules).
window.CHEM_RX = (window.CHEM_RX || []).concat([
  {
    "id": "audit_mercury_sulfur",
    "need": [
      "Hg",
      "S"
    ],
    "eq": "Hg + S → HgS",
    "out": [
      "HgS"
    ],
    "col": "#333333",
    "dur": 7,
    "bub": 0.08,
    "heat": 40,
    "heating": true,
    "precip": "#333333"
  },
  {
    "id": "audit_mercury_chlorine",
    "need": [
      "Hg",
      "Cl2"
    ],
    "eq": "Hg + Cl2 → HgCl2",
    "out": [
      "HgCl2"
    ],
    "col": "#eeeeea",
    "dur": 7,
    "bub": 0.08,
    "heat": 40,
    "heating": true
  },
  {
    "id": "audit_mercury_nitric_acid",
    "need": [
      "Hg",
      "HNO3"
    ],
    "eq": "3Hg + 8HNO3 → 3Hg(NO3)2 + 2NO↑ + 4H2O",
    "out": [
      "Hg(NO3)2",
      "NO",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "gas": "NO"
  },
  {
    "id": "audit_mercury_sulfuric_acid",
    "need": [
      "Hg",
      "H2SO4 (đặc)"
    ],
    "eq": "Hg + 2H2SO4 (đặc, nóng) → HgSO4 + SO2↑ + 2H2O",
    "out": [
      "HgSO4",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "heat": 100,
    "heating": true,
    "gas": "SO2"
  },
  {
    "id": "audit_sulfur_sulfuric_acid",
    "need": [
      "S",
      "H2SO4 (đặc)"
    ],
    "eq": "S + 2H2SO4 (đặc, nóng) → 3SO2↑ + 2H2O",
    "out": [
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.4,
    "heat": 100,
    "heating": true,
    "gas": "SO2"
  },
  {
    "id": "audit_carbon_sulfuric_acid",
    "need": [
      "C",
      "H2SO4 (đặc)"
    ],
    "eq": "C + 2H2SO4 (đặc, nóng) → CO2↑ + 2SO2↑ + 2H2O",
    "out": [
      "CO2",
      "SO2",
      "H2O"
    ],
    "col": "#e7e8e7",
    "dur": 7,
    "bub": 0.55,
    "heat": 100,
    "heating": true,
    "gas": "SO2"
  }
]);

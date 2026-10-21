# Chemistry reaction library

The 3D Lab loads reaction rules from themed JavaScript files: acid/base, precipitation, metals, gas evolution, redox/combustion, organic tests, thermal chemistry and oxides.

Recent audit modules:
- `16-audit-metals-halogen.js`, `16-audit-acid-redox.js` — reactive metals, halogens and oxidizing acids
- `17-audit-secondary-reactions.js` — secondary redox and complexes
- `18-audit-common-gaps.js` — ammonium salts, amphoteric oxides/hydroxides, peroxide and salt/acid reactions
- `19-audit-reduction-ammonium.js` — reducing oxides, silver halide precipitates and ammonium/base reactions
- `99-audit.js` — combination-coverage helpers

The simulation is not an exhaustive database of every possible reaction under every condition. An unclassified pair is not automatically inert. New rules should be balanced, chemically supported and linked to valid inventory products.

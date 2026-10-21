# Chemistry reaction library

The 3D Lab loads reaction rules from themed JavaScript modules.

## Modules
- `01-acid-base.js` — acid/base chemistry
- `02-precipitation.js` and `11-expanded-precipitation.js` — salt exchange and precipitates
- `03-metal-acid.js` — metals and acids
- `04-metal-displacement.js` and `12-expanded-metal-displacement.js` — displacement reactions
- `05-gas-evolution.js` and `14-acid-gas-expanded.js` — gas-forming reactions
- `06-oxidation-combustion.js`, `15-redox-thermal-decomposition.js`, `16-audit-metals-halogen.js` — oxidation, combustion, halogens and reactive metals
- `07-organic-qualitative.js` — organic and qualitative tests
- `08-thermal-catalysis.js` — thermal/catalytic rules
- `09-oxide-reactions.js` — oxide chemistry
- `10-other-reactions.js` — other reaction classes
- `13-hydroxide-precipitation.js` — hydroxide precipitations
- `16-audit-acid-redox.js` — missing mercury and concentrated-acid redox cases
- `99-audit.js` — pair/triple coverage helpers

## Ongoing review

The new audit files fill several previously unclassified pairs involving Ba, F₂, Hg, and carbon/metal-oxide redox. The chemical catalogue now includes the new products required by these reactions.

This remains an educational simulation, not a complete database of every reaction under every possible condition. A missing rule does not prove that substances are inert; new rules should be based on supported chemistry, balanced equations and relevant conditions.

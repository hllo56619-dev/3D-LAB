# Chemistry reaction library — 3D Lab

The website loads reaction data from separate files in this folder. `index.html` loads the modules in the order listed below, then `98-deduplicate.js` normalizes the combined library before the reaction engine starts.

## Reaction groups

- `01-acid-base.js` — acid/base reactions and neutralization.
- `02-precipitation.js`, `11-expanded-precipitation.js`, `13-hydroxide-precipitation.js`, `21-precipitation-halides.js`, `22-precipitation-sulfates.js`, `23-precipitation-carbonates-phosphates.js`, `24-precipitation-other.js` — precipitation and salt exchange.
- `03-metal-acid.js`, `04-metal-displacement.js`, `12-expanded-metal-displacement.js` — metals reacting with acids and displacement from salts.
- `05-gas-evolution.js`, `14-acid-gas-expanded.js` — gas-producing reactions.
- `06-oxidation-combustion.js`, `15-redox-thermal-decomposition.js`, `16-audit-metals-halogen.js`, `16-audit-acid-redox.js`, `17-audit-secondary-reactions.js`, `19-audit-reduction-ammonium.js`, `20-audit-industrial-gas.js`, `25-special-redox-and-ammonia.js`, `26-amphoteric-redox-reduction.js` — redox, combustion, ammonia, oxidation, and reduction.
- `07-organic-qualitative.js` — organic reactions and qualitative tests.
- `08-thermal-catalysis.js` — heating, catalysis, and decomposition.
- `09-oxide-reactions.js` — acidic/basic oxide reactions.
- `10-other-reactions.js` — other educational rules.
- `98-deduplicate.js` — removes duplicate direct two-substance pairs and unsupported unstable intermediate products; preserves distinct one- and three-plus-reactant equations.
- `99-audit.js` — helper functions for reviewing two- and three-substance coverage.

## Current library snapshot

- 457 compounds/elements in the chemistry inventory.
- 6,489 reaction records across the data files before runtime duplicate filtering.
- The direct two-substance records are normalized at startup so the current engine does not choose conflicting equations for the same pair.

## Accuracy notes

This is an educational simulation, not an exhaustive database of every possible reaction under every condition. A missing rule means that the simulation has not classified the pair; it does **not** prove that no reaction occurs. Solubility, concentration, temperature, oxidation state, phase, and catalysts can change the outcome.

New rules should use formulas that are chemically supported under their stated conditions, include products available in the inventory, and have balanced equations. Do not add a rule just to fill a missing pair.

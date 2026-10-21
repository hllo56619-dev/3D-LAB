# Chemistry reaction library

The 3D Lab loads chemistry rules from separate modules; `index.html` only loads the modules in order. The rule set is reviewed by reaction family and normalized just before startup.

## Groups
- `01-acid-base.js` — acid/base reactions
- `02-precipitation.js`, `11-expanded-precipitation.js`, `13-hydroxide-precipitation.js` — precipitation and hydroxide formation
- `03-metal-acid.js`, `04-metal-displacement.js`, `12-expanded-metal-displacement.js` — metals, acids and displacement
- `05-gas-evolution.js`, `14-acid-gas-expanded.js` — gas evolution
- `06-oxidation-combustion.js`, `15-redox-thermal-decomposition.js`, `16-audit-metals-halogen.js`, `16-audit-acid-redox.js`, `17-audit-secondary-reactions.js`, `19-audit-reduction-ammonium.js`, `20-audit-industrial-gas.js` — redox, combustion and thermal chemistry
- `07-organic-qualitative.js` — organic/qualitative tests
- `08-thermal-catalysis.js` — heat/catalysis
- `09-oxide-reactions.js` — oxide reactions
- `10-other-reactions.js` — remaining original rules
- `21-precipitation-halides.js`, `22-precipitation-sulfates.js`, `23-precipitation-carbonates-phosphates.js`, `24-precipitation-other.js` — extra two-substance salt-exchange/precipitation rules
- `25-special-redox-and-ammonia.js` — additional redox, ammonia, gas, combustion and reduction rules
- `98-deduplicate.js` — removes duplicate reactant sets and invalid unstable intermediate products before engine startup
- `99-audit.js` — two-substance and three-substance audit helpers

## Important limitations
A generated pair rule is only appropriate when the product is chemically supported under the stated conditions. Solubility patterns and metal activity trends are useful for predicting many reactions, but they do not determine every outcome. A missing rule means the simulation has not classified that pair, not that no real reaction occurs. This remains an educational model, not an exhaustive database covering every condition.

- \`26-amphoteric-redox-reduction.js\` — amphoteric metal/oxide/hydroxide reactions, oxidizing acids, and carbothermic reductions (14 added rules).

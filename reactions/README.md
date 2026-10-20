# Chemistry reaction library

The 3D lab loads reaction rules from this folder; `index.html` does not contain the reaction list.

## Modules

- `01-acid-base.js` — neutralization and related acid/base rules
- `02-precipitation.js` — salt exchange and precipitate formation
- `03-metal-acid.js` — metal + non-oxidizing acid
- `04-metal-displacement.js` — single-displacement reactions
- `05-gas-evolution.js` — reactions that release gases
- `06-oxidation-combustion.js` — oxidation, redox and combustion
- `07-organic-qualitative.js` — organic and qualitative tests
- `08-thermal-catalysis.js` — heating, catalysts and decomposition
- `09-oxide-reactions.js` — acidic/basic oxide reactions
- `10-other-reactions.js` — remaining rules
- `99-audit.js` — pair/triple coverage audit helpers

`reactions.js` at the repository root is a compatibility loader. The app loads grouped modules in a fixed order before initializing the reaction engine.

## Rule format

Each reaction rule has:
- `id`: unique identifier
- `need`: reagent IDs required in the beaker
- `eq`: balanced displayed equation
- `out`: product IDs, which must exist in the inventory (or be an element supplied by the periodic-table data)
- optional presentation/condition fields such as `precip`, `gas`, `heat`, `heating`, `dur`, `bub`, and `explain`

Do not add a rule merely to fill a missing pair. Two substances only get a reaction rule when products and conditions are chemically supported; a pair with no rule means the model has not classified it, not necessarily that no real reaction occurs.

## Current snapshot

The site currently contains 1,052 reaction rules across these grouped files and 394 inventory entries. This is a growing educational simulation, not an exhaustive database of every possible reaction under every condition.

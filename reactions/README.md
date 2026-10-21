# Chemistry reaction library

The 3D Lab loads reaction rules from themed JavaScript modules. Groups cover acid/base reactions, precipitation, metal/acid, displacement, gas evolution, redox/combustion, organic tests, thermal chemistry and oxides. Audit modules extend specific gaps:

- `16-audit-metals-halogen.js` and `16-audit-acid-redox.js`: Ba, F₂, Hg and metal-halogen cases
- `17-audit-secondary-reactions.js`: halide synthesis, sulfide/halogen redox, concentrated acids, and selected complex/redox tests
- `99-audit.js`: pair/triple coverage helpers

This is an educational model rather than a guarantee that all reactions under every possible condition are catalogued. A pair with no rule is unclassified, not necessarily inert. New rules should have balanced equations, plausible products, inventory references and relevant conditions.

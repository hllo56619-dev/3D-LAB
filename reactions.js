// Compatibility loader for the grouped Chemistry Lab 3D database.
(function(){
 window.CHEM_RX = [];
 const files = ["01-acid-base.js","02-precipitation.js","03-metal-acid.js","04-metal-displacement.js","05-gas-evolution.js","06-oxidation-combustion.js","07-organic-qualitative.js","08-thermal-catalysis.js","09-oxide-reactions.js","10-other-reactions.js","11-expanded-precipitation.js","12-expanded-metal-displacement.js","13-hydroxide-precipitation.js","14-acid-gas-expanded.js","15-redox-thermal-decomposition.js","16-audit-metals-halogen.js","16-audit-acid-redox.js","17-audit-secondary-reactions.js","19-audit-reduction-ammonium.js","20-audit-industrial-gas.js","21-precipitation-halides.js","22-precipitation-sulfates.js","23-precipitation-carbonates-phosphates.js","24-precipitation-other.js","25-special-redox-and-ammonia.js","98-deduplicate.js","99-audit.js"];
 document.write(files.map(file => '<script src="./reactions/' + file + '"><' + '/script>').join(''));
})();

// Final reaction-library normalization. Must load after all reaction modules and before the audit helpers.
(function(){
 const source=Array.isArray(window.CHEM_RX)?window.CHEM_RX:[];
 const invalidProducts=new Set(["NH4OH","AgOH","AgHCO3","Cr(HCO3)2","CrCrO4","Fe2(CrO4)3","Al2(CrO4)3","Cr2(CrO4)3","Ga2(CrO4)3"]);
 const invalidReactants=new Set(["AgHCO3","Cr(HCO3)2"]);
 const ids=new Set(), reactantSets=new Set(), clean=[];
 let removedDuplicate=0, removedInvalid=0, correctedBicarbonate=0;
 for(const raw of source){
  if(!raw||!Array.isArray(raw.need)||!raw.need.length){removedInvalid++;continue;}
  if((raw.out||[]).some(x=>invalidProducts.has(x))||raw.need.some(x=>invalidReactants.has(x))){removedInvalid++;continue;}
  let r=raw;
  if((raw.out||[]).includes('Fe(HCO3)2')&&typeof raw.eq==='string'&&raw.eq.includes('Fe(HCO3)2↓')){
   const eq=raw.eq.replace(/Fe\(HCO3\)2↓/g,'Fe(HCO3)2');
   const right=eq.split(/[→⇌↔]/)[1]||'';
   if(!right.includes('↓')){removedInvalid++;continue;}
   r={...raw,eq};correctedBicarbonate++;
  }
  const reactants=r.need.slice().sort().join('|');
  // For two-substance mixes, the current reaction engine displays one rule per pair.
  // For one- or three-plus-reactant rules, preserve distinct equations/conditions.
  const key=r.need.length===2
   ? 'pair:'+reactants
   : 'rule:'+reactants+'|'+String(r.eq||'').replace(/\\s+/g,' ').trim()+'|'+JSON.stringify(r.out||[]);
  if(ids.has(r.id)||reactantSets.has(key)){removedDuplicate++;continue;}
  ids.add(r.id);reactantSets.add(key);clean.push(r);
 }
 window.CHEM_RX=clean;
 window.CHEM_REACTION_AUDIT={loaded:source.length,retained:clean.length,removedDuplicate,removedInvalid,correctedBicarbonate,uniqueReactantSets:reactantSets.size};
})();

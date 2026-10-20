// Chemistry Lab 3D — pair/triple audit helpers.
// Build an exhaustive audit of all unique two-substance combinations in the current inventory.
// This is a coverage audit, not a claim that every pair chemically reacts.
// Exhaustive three-substance combination coverage. This enumerates combinations lazily;
// it deliberately does not invent a reaction equation for combinations without a known rule.
window.CHEM_TRIPLE_AUDIT = function(inventory, rules = window.CHEM_RX) {
 const ids = [...new Set((inventory || []).map(item => typeof item === 'string' ? item : item.id))];
 const exactThree = new Map(), pairRules = new Map();
 for (const rule of (rules || [])) {
  if (!Array.isArray(rule.need)) continue;
  const key = rule.need.slice().sort().join(' + ');
  if (rule.need.length === 3) {
   if (!exactThree.has(key)) exactThree.set(key, []);
   exactThree.get(key).push(rule.id);
  } else if (rule.need.length === 2) {
   if (!pairRules.has(key)) pairRules.set(key, []);
   pairRules.get(key).push(rule.id);
  }
 }
 const classify = (a,b,c) => {
  const key = [a,b,c].sort().join(' + ');
  if (exactThree.has(key)) return {status:'exact-three-reactant-rule', ruleIds:exactThree.get(key)};
  const found = new Set();
  for (const pair of [[a,b],[a,c],[b,c]]) {
   const ids = pairRules.get(pair.sort().join(' + '));
   if (ids) ids.forEach(id => found.add(id));
  }
  return found.size ? {status:'contains-known-pair-rule',ruleIds:[...found]} : {status:'no-known-rule',ruleIds:[]};
 };
 function* iterate() {
  for (let i=0;i<ids.length;i++) for (let j=i+1;j<ids.length;j++) for (let k=j+1;k<ids.length;k++) {
   const a=ids[i],b=ids[j],c=ids[k];
   yield {a,b,c,...classify(a,b,c)};
  }
 }
 let exactThreeCount=0, containsPairRuleCount=0, noKnownRuleCount=0, tripleCount=0;
 for (let i=0;i<ids.length;i++) for (let j=i+1;j<ids.length;j++) for (let k=j+1;k<ids.length;k++) {
  tripleCount++;
  const status=classify(ids[i],ids[j],ids[k]).status;
  if (status==='exact-three-reactant-rule') exactThreeCount++;
  else if (status==='contains-known-pair-rule') containsPairRuleCount++;
  else noKnownRuleCount++;
 }
 return {
  inventoryCount:ids.length, tripleCount, exactThreeReactantRuleTriples:exactThreeCount,
  triplesContainingKnownPairRule:containsPairRuleCount, triplesWithoutKnownRule:noKnownRuleCount,
  // Use for...of on this iterator to inspect all combinations without holding 1.56M objects in memory.
  iterate, classify
 };
};

window.CHEM_PAIR_AUDIT = function(inventory, rules = window.CHEM_RX) {
 const ids = [...new Set((inventory || []).map(item => typeof item === 'string' ? item : item.id))];
 const exact = new Set(), multi = new Set();
 for (const rule of (rules || [])) {
  if (!Array.isArray(rule.need)) continue;
  const key = rule.need.slice().sort().join(' + ');
  if (rule.need.length === 2) exact.add(key);
  else if (rule.need.length > 2) {
   for (let i = 0; i < rule.need.length; i++) for (let j = i + 1; j < rule.need.length; j++)
    multi.add([rule.need[i], rule.need[j]].sort().join(' + '));
  }
 }
 const pairs = [];
 for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) {
  const key = [ids[i], ids[j]].sort().join(' + ');
  pairs.push({a: ids[i], b: ids[j], status: exact.has(key) ? 'has-rule' : multi.has(key) ? 'part-of-multi-substance-rule' : 'unclassified'});
 }
 return {inventoryCount: ids.length, pairCount: pairs.length, exactRulePairs: pairs.filter(p => p.status === 'has-rule').length, multiSubstancePairs: pairs.filter(p => p.status === 'part-of-multi-substance-rule').length, unclassifiedPairs: pairs.filter(p => p.status === 'unclassified').length, pairs};
};

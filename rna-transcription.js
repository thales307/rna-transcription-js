export const toRna = (dna) => {
  const map = { G: 'C', C: 'G', T: 'A', A: 'U' }

  return dna.replace(/[CGTA]/g, (nucleotides) => map[nucleotides]);
};

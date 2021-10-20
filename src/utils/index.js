export const pool_calculaPesoDoUser = (rarities, rarities_peso) => {
  let pesoTotal = 0;
  rarities.forEach((r) => {
    if (r.total <= 0) return;

    let [peso] = rarities_peso.filter((v) => {
      return v.name === r.name;
    });
    pesoTotal += parseInt(r.total) * Number(peso.weight);
  });
  return pesoTotal;
};

export const pool_calculaPesoDaPool = (rarities, rarities_total) => {
  let pesoTotal = 0;
  let raridades = ["all rarities"];
  rarities.forEach((r) => {
    let [rarity] = rarities_total.filter((v) => {
      return v.name === r.name;
    });
    raridades.push(r.name);
    pesoTotal += parseInt(rarity.total) * Number(r.weight);
  });
  return pesoTotal;
};

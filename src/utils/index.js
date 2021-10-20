// function pool_calculaPesoDoUser(rarities, rarities_peso) {
//   let pesoTotal = 0;
//   let user_cards = 0;
//   rarities.forEach((r) => {
//     if (r.total <= 0) return;

//     let [peso] = rarities_peso.filter((v) => {
//       return v.name === r.name;
//     });
//     pesoTotal += parseInt(r.total) * Number(peso.weight);
//     user_cards += parseInt(r.total);
//   });
//   //app.$data.user_weight = pesoTotal;
//   app.$data.user_cards = user_cards;
// }

// function calcular_total_peso(user_nfts, staked, rarities) {
//   var total_peso = 0;
//   var raridade;

//   staked.forEach((s) => {
//     user_nfts.forEach((n) => {
//       if (s.asset_id == n.asset_id) {
//         raridade = n.data.rarity || n.schema.schema_name;

//         if (raridade == "Legendary") {
//           if (n.data.character && n.data.character == "Hybreeder") {
//             raridade = "Dash";
//           }
//         }

//         if (raridade == "promo") {
//           raridade =
//             n.data.description.indexOf("whitelist") > -1
//               ? "whitelist"
//               : "promo";
//         }

//         let [peso] = rarities.filter((r) => {
//           return r.name === raridade;
//         });

//         if (peso) {
//           total_peso += Number(peso.weight);
//         }
//       }
//     });
//   });

//   app.$data.user_weight = total_peso;
//   //console.log(`Novo peso calculado: ${total_peso}`);
// }

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

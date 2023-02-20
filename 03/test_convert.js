// const b = 25;
// const c = 76;

// const test_funkcija = (a, b) => {
//     return a+b;
// }

// module.exports = {
//     b,
//     c,
//     test_funkcija
// };

// module.exports = test_funkcija;

const firstLetterUppercase = (text) => {
  // let prvaBukva = text.charAt(0);
  // let zgolemenaPrvaBukva = prvaBukva.toUpperCase();
  // let ostatok = text.slice(1, text.length);
  // returnText = zgolemenaPrvaBukva + ostatok;
  // return returnText;

  return text.charAt(0).toUpperCase() + text.slice(1, text.length);
};

const textStats = (text) => {
  if (typeof text !== "string") return;

  let output = {
    bukvi: 0,
    zborovi: 0,
    rechenici: 0,
    povekeOd5: 0,
    pomalkuOd5: 0,
    ednakvoNa5: 0,
  };

  output.bukvi = text.length;
  output.zborovi = text.split(" ").length;
  output.rechenici = text.split(".").length;

  let zborovi = text.split(" ");
  for (let zbor of zborovi) {
    if (zbor.length === 5) output.ednakvoNa5++;
    if (zbor.length > 5) output.povekeOd5++;
    if (zbor.length < 5) output.pomalkuOd5++;
  }

  for (let i = 0; i < zborovi.length; i++) {
    if (zbor[i].length === 5) output.ednakvoNa5++;
    if (zbor[i].length < 5) output.pomalkuOd5++;
    if (zbor[i].length > 5) output.povekeOd5++;
  }
  return output
};

module.exports = {
  firstLetterUppercase,
  textStats,
};

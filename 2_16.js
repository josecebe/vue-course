import nakamas, { ships, getNakamaById, getNakamaByIdAsync, getNakamasByCountry } from "./2_16_nakamas";

console.log(nakamas);
console.log(ships);
console.log(getNakamaById(1));
console.log(getNakamasByCountry('East Blue'));

getNakamaByIdAsync(1)
    .then((nakama) => {
        console.log(`Nakama: ${nakama.lastname} ${nakama.name}`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

getNakamaByIdAsync(10)
    .then((nakama) => {
        console.log(`Nakama: ${nakama.lastname} ${nakama.name}`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });

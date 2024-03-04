import { getPlayers } from "../components/processing.js";

const entries = [
    { name: "Walker Kessler", url: "https://www.basketball-reference.com/players/g/kesslwa01/gamelog/2024" },
    { name: "Jalen Williams", url: "https://www.basketball-reference.com/players/g/willija06/gamelog/2024" },
    { name: "Paulo Banchero", url: "https://www.basketball-reference.com/players/g/banchpa01/gamelog/2024" },
    { name: "Evan Mobley", url: "https://www.basketball-reference.com/players/g/mobleev01/gamelog/2024" },
    { name: "Jalen Green", url: "https://www.basketball-reference.com/players/g/greenja05/gamelog/2024" },
];

const data = (await getPlayers(entries)).flat();
// Write to standard out?
// console.log(data);
process.stdout.write(JSON.stringify(data));

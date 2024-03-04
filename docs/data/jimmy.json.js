import { getPlayers } from "../components/processing.js";

const entries = [
    { name: "Cade Cunningham", url: "https://www.basketball-reference.com/players/g/cunnica01/gamelog/2024" },
    { name: "Franz Wagner", url: "https://www.basketball-reference.com/players/g/wagnefr01/gamelog/2024" },
    { name: "Scottie Barnes", url: "https://www.basketball-reference.com/players/g/barnesc01/gamelog/2024" },
    { name: "Josh Giddey", url: "https://www.basketball-reference.com/players/g/giddejo01/gamelog/2024" },
    { name: "Bennedict Mathurin", url: "https://www.basketball-reference.com/players/g/mathube01/gamelog/2024" },
];

const data = (await getPlayers(entries)).flat();
// Write to standard out?
console.log(data);

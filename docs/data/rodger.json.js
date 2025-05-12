import { getPlayers } from "../components/processing.js";

const entries = [
    {
        name: "Shai Gilgeous-Alexander",
        url: "https://www.basketball-reference.com/players/g/gilgesh01/gamelog/2025",
    },
    {
        name: "Jalen Williams",
        url: "https://www.basketball-reference.com/players/w/willija06/gamelog/2025",
    },
    {
        name: "Donovan Mitchell",
        url: "https://www.basketball-reference.com/players/m/mitchdo01/gamelog/2025",
    },
    {
        name: "Darius Garland",
        url: "https://www.basketball-reference.com/players/g/garlada01/gamelog/2025",
    },
    {
        name: "Kristaps Porzingis",
        url: "https://www.basketball-reference.com/players/p/porzikr01/gamelog/2025",
    },
    {
        name: "Evan Mobley",
        url: "https://www.basketball-reference.com/players/m/mobleev01/gamelog/2025",
    },
    {
        name: "Austin Reaves",
        url: "https://www.basketball-reference.com/players/r/reaveau01/gamelog/2025",
    },
    {
        name: "Jalen Brunson",
        url: "https://www.basketball-reference.com/players/b/brunsja01/gamelog/2025",
    },
    {
        name: "Karl-Anthony Towns",
        url: "https://www.basketball-reference.com/players/t/townska01/gamelog/2025",
    },
    {
        name: "Nikola Jokic",
        url: "https://www.basketball-reference.com/players/j/jokicni01/gamelog/2025",
    },
];


const data = (await getPlayers(entries)).flat();
// Write to standard out?
// console.log(data);
process.stdout.write(JSON.stringify(data));

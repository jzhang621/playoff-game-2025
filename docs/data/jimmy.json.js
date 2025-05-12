import { getPlayers } from "../components/processing.js";

const entries = [
    {
        name: "Jayson Tatum",
        url: "https://www.basketball-reference.com/players/t/tatumja01/gamelog/2025",
        active: true,
    },
    {
        name: "Jaylen Brown",
        url: "https://www.basketball-reference.com/players/b/brownja02/gamelog/2025",
        active: true,
    },
    {
        name: "Luka Doncic",
        url: "https://www.basketball-reference.com/players/d/doncilu01/gamelog/2025",
        active: false,
    },
    {
        name: "Chet Holmgren",
        url: "https://www.basketball-reference.com/players/h/holmgch01/gamelog/2025",
        active: true,
    },
    {
        name: "LeBron James",
        url: "https://www.basketball-reference.com/players/j/jamesle01/gamelog/2025",
        active: false,
    },
    {
        name: "Derrick White",
        url: "https://www.basketball-reference.com/players/w/whitede01/gamelog/2025",
        active: true,
    },
    {
        name: "Isaiah Hartenstein",
        url: "https://www.basketball-reference.com/players/h/harteis01/gamelog/2025",
        active: true,
    },
    {
        name: "Stephen Curry",
        url: "https://www.basketball-reference.com/players/c/curryst01/gamelog/2025",
        active: true,
    },
    {
        name: "Kawhi Leonard",
        url: "https://www.basketball-reference.com/players/l/leonaka01/gamelog/2025",
        active: false,
    },
    {
        name: "James Harden",
        url: "https://www.basketball-reference.com/players/h/hardeja01/gamelog/2025",
        active: false,
    },
];

const data = (await getPlayers(entries)).flat();
// Write to standard out?
// console.log(data);
process.stdout.write(JSON.stringify(data));

import { load } from "cheerio";

async function parsePage(url) {
    try {
        const text = await fetch(url, {
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            },
        });

        if (!text.ok) {
            console.log(text.headers);
            throw new Error(`HTTP error! status: ${text.status}`);
        }

        const response = await text.text();
        const parser = load(response);

        const table = parser("#player_game_log_post tfoot");
        if (!table.length) {
            throw new Error("Could not find the expected table in the response");
        }

        const rows = table.find("tr");
        const players = [];
        rows.each((i, r) => players.push(parsePlayer(parser(r))));
        return players;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return []; // Return empty array on error
    }
}

function parsePlayer(row) {
    const getStat = (stat) => {
        const cell = row.find(`td[data-stat="${stat}"]`);
        const val = cell.text();
        return parseInt(val) || 0;
    };

    return {
        points: getStat("pts"),
        // rebounds: getStat("trb"),
        // assists: getStat("ast"),
        // steals: getStat("stl"),
        // blocks: getStat("blk"),
    };
}

// Sleep function to add delay between requests
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPlayers(entries) {
    const results = [];
    for (const entry of entries) {
        const data = await parsePage(entry.url);
        results.push(
            ...data.map((d) => ({
                ...d,
                name: entry.name,
            }))
        );
        // Add a 2 second delay between requests
        await sleep(2000);
    }
    return results;
}




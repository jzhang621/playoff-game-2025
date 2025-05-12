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
            throw new Error(`HTTP error! status: ${text.status}`);
        }
        console.log(url);

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

export function getPlayers(entries) {
    return Promise.all(
        entries.map(async (e) => {
            const data = await parsePage(e.url);
            return data.map((d) => ({
                ...d,
                name: e.name,
            }));
        })
    );
}




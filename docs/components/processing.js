import { load } from "cheerio";

async function parsePage(url) {
    const text = await fetch(url, {
        headers: {
            "X-Requested-With": "XMLHttpRequest",
            // 'Origin' is usually set by the browser, but you might need to set it if you're dealing with server-side code or a non-standard client
            // 'Origin': 'http://yourwebsite.com'
        },
    });
    const response = await text.text();
    const parser = load(response);

    const table = parser("#player_game_log_post tfoot");
    const rows = table.find("tr");
    const players = [];
    console.log(url);
    rows.each((i, r) => players.push(parsePlayer(parser(r))));
    return players;
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




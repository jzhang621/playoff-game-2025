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

    const table = parser("table.stats_table tbody");
    const rows = table.find("tr");
    const players = [];
    rows.each((i, r) => players.push(parsePlayer(parser(r))));
    return players;
}

function parsePlayer(row) {
    const cols = row.find("td");
    if (cols.length >= 21) {
        const points = parseInt(cols[26].children[0].data);
        const rebs = parseInt(cols[20].children[0].data);
        const assists = parseInt(cols[21].children[0].data);
        const steals = parseInt(cols[22].children[0].data);
        const blocks = parseInt(cols[23].children[0].data);
        return {
            points,
            rebounds: rebs,
            assists,
            steals,
            blocks,
        };
    }
    return {
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
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

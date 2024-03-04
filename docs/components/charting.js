import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";

function topNByCategory(players, n, stat) {
    return players
        .flat()
        .sort((a, b) => b[stat] - a[stat])
        .slice(0, n);
}

function listIntegers(start, end) {
    const list = [];
    for (let i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
}

export function byCategoryPlot(data, category) {
    const values = topNByCategory(data, 50, category).map((d) => ({
        value: d[category],
        name: d.name,
    }));

    const [start, end] = d3.extent(values.map((d) => d.value));

    return Plot.plot({
        y: { grid: true },
        color: { legend: true },
        marks: [
            Plot.rectY(
                values,
                Plot.binX(
                    { y: "count" },
                    {
                        x: "value",
                        thresholds: listIntegers(start - 1, end + 1),
                        fill: "name",
                    }
                )
            ),
        ],
    });
}

export function getTopNStats(players, n) {
    const sumStats = (topPlayers, stat) => topPlayers.reduce((sum, player) => sum + player[stat], 0);

    let topNStats = {
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
    };

    ["points", "rebounds", "assists", "steals", "blocks"].forEach((stat) => {
        const sortedPlayers = [...players].sort((a, b) => b[stat] - a[stat]);
        const topPlayers = sortedPlayers.slice(0, n);
        topNStats[stat] = sumStats(topPlayers, stat);
    });

    return topNStats;
}

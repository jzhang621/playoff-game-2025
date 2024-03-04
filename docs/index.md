---
title: 2024 Young Player Game
---


```js
import {revive} from "./components/revive.js";
import {getTopNStats, byCategoryPlot} from "./components/charting.js";
```

```js
const jimmy = await FileAttachment("data/jimmy.json").json().then(revive);
const jimmyTopN = getTopNStats(jimmy, 50);
```

```js
const rodger = await FileAttachment("data/rodger.json").json().then(revive);
const rodgerTopN = getTopNStats(rodger, 50);
```

### Jimmy

```js
Inputs.table([jimmyTopN])
```

### Rodger

```js
Inputs.table([rodgerTopN])
```

---

```js
const cateogry = view(Inputs.radio(
  ["points", "rebounds", "assists", "steals", "blocks"],
  {
    value: "points"
  }
))
```

```js
byCategoryPlot(jimmy, cateogry)
```

```js
byCategoryPlot(rodger, cateogry)
```



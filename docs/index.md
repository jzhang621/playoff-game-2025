---
title: 2025 Playoff Game
---


```js
import {revive} from "./components/revive.js";
```

```js
const jimmy = await FileAttachment("data/jimmy.json").json().then(revive);
// const jimmyTopN = getTopNStats(jimmy, 50);
```

```js
console.log(jimmy);
```

```js
const rodger = await FileAttachment("data/rodger.json").json().then(revive);
```

```js
Inputs.table([{name: "Jimmy", value: jimmyTotalPoints}, {name: "Rodger", value: rodgerTotalPoints}])
```

### Jimmy

```js
Inputs.table(jimmy)
```

```js
const jimmyTotalPoints = jimmy.reduce((sum, player) => sum + player.points, 0);
```

```js
const rodgerTotalPoints = rodger.reduce((sum, player) => sum + player.points, 0);
```

### Rodger

```js
Inputs.table(rodger)
```




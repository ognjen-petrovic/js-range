# js-range
Javascript math range

## Installing
```
npm install simple-range
```

## Examples:
```javascript
const Range = require('simple-range');

var r = new Range([1, 2, 3, 4, 5]);
r.toArray(); // [ 1, 2, 3, 4, 5 ]

var r = new Range({from:0, to:10});
r.toArray(); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

var r = new Range({from:0, to:10, step:2});
r.toArray(); // [ 0, 2, 4, 6, 8, 10 ]

var r = new Range({from:1.1, to:2});
r.toArray(); // [ 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2 ]

var r = new Range([1, 2, {from:6, to:10, step:2}, {from:11, to:15}]);
r.toArray(); //[ 1, 2, 6, 8, 10, 11, 12, 13, 14, 15 ]
```

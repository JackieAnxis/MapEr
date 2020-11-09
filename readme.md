# MapEr

`MapEr` is a JavaScript library which aims to provide a new `Map`structure which maps two keys to one value. For example:

```javascript
var m = new MapEr()
m.set([1, 2], 3)
m.get([1, 2]) // 3
m.get([2, 1]) // 3
```


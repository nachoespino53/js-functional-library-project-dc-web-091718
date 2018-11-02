fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (arr, callback) {
      if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; ++i) {
        callback(arr[i], i , arr);
      }
    } else {
      let counter = 0;
      for (let el in arr) {
        callback(arr[el], counter, arr)
      }
    }
      return arr;
    },

    map: function(collection, callback) {
      let arr = [];
      if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; ++i) {
        arr.push(callback(collection[i], i , collection));
      }
    } else {
      let counter = 0;
      for (let el in collection) {
        arr.push(callback(collection[el], counter, collection));
      }
    }
      return arr;
    },

    reduce: function(collection, callback, acc = 0) {
      if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; ++i) {
        acc = callback(acc, collection[i] , collection);
      }
      } else {
      for (let el in collection) {
        acc = callback(acc, collection[el] , collection);
      }
    }
      return acc;
    },

    find: function (collection, predicate) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; ++i) {
          if (predicate(collection[i])) {
            return collection[i];
          }
        }
      } else {
      let counter = 0;
        for (let el in collection) {
          if (predicate(collection[el])) {
            return collection[el];
          }
        }
      }
    },

    filter: function (collection, predicate) {
      let arr = [];

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; ++i) {
          predicate(collection[i]) ? arr.push(collection[i]) : 0;
        }
      } else {
      let counter = 0;
        for (let el in collection) {
          predicate(collection[el]) ? arr.push(collection[el]) : 0;
        }
      }

      return arr
    },

    size: function (collection) {
      let length = 0;

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; ++i) {
          length++;
        }
      } else {
        for (let el in collection) {
          ++length;
        }
      }

      return length;
    },

    first: function (array, n = 1) {
      let arr = [];
      if (n !== 1){
        if (Array.isArray(array)) {
          for (let i = 0; i < n ; ++i) {
            arr.push(array[i]);
          }
        }
      } else {
        return array[0]
      }

      return arr;
    },

    last: function (array, n = 1) {
      let arr = [];
      if (n !== 1){
        if (Array.isArray(array)) {
          for (let i = array.length - 1; i >= array.length - n ; --i) {
            arr.unshift(array[i]);
          }
        }
      } else {
        return array[array.length - 1]
      }
      console.log(arr);
      return arr;
    },

    compact: function (array) {
      let arr = [];
      for (let el of array) {
        el ? arr.push(el) : 0;
      }
      return arr;
    },

    sortBy: function (array, callback) {
      let newArray = [...array];

      newArray.sort(function (a, b) {return (callback(a) - callback(b))});

      return newArray;
    },

    flatten: function (array, boolean = false) {

      unest = function (newArray, array2) {
        for (let value of array2) {
          newArray.push(value);
        }
      }
      if (boolean) {
        let newArray = [];
        for (let element of array) {
          Array.isArray(element)  ? unest(newArray, element) : newArray.push(element)
        }
        return newArray;
      } else {
        flat = function (array) {
                  let newArray = [];

                  for (let el of array) {
                    if (Array.isArray(el)) {
                      let result = flat(el)
                      for(let el2 of result) {
                        newArray.push(el2);
                      }
                    } else {
                      newArray.push(el);
                    }
                  }

                  return newArray;
                }

                return flat(array);
      };
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function (obj) {
      let arr = [];
      for (let x in obj) {
        arr.push(x);
      }
      return arr;
    },

    values: function (obj) {
      let arr = [];
      for (let x in obj) {
        arr.push(obj[x]);
      }
      return arr;
    },

    functions: function(fi) {
      let arr = []
      for (let x in fi) {
        if (typeof fi[x] === 'function'){
          arr.push(x);
        }
      }
      return arr.sort();
    },
  }
})()

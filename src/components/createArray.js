export function createArray(length) {
    var arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(Math.round(Math.random() * 1000));
    }
    return arr;
  };
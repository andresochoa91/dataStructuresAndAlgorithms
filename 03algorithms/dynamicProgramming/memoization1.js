function greeting () {
  let cache = {};
  return function (name) {
    if (name in cache) {
      console.log("short time");
      return cache[name];
    } else {
      console.log("long time")
      cache[name] = (`Hello ${name}, welcome to the city!\n`);
      return cache[name];
    }
  }
}

const memoized = greeting();

console.log(memoized("Andres"));
console.log(memoized("Helena"));
console.log(memoized("Andres"));

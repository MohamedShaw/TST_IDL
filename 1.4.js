const obj = new Proxy(
  {},
  {
    get: function (args) {
      return "404";
    },
  }
);

// it will alawys return 404

console.log(obj.foo); // Output: "404"
console.log(obj.bar); // Output: "404"

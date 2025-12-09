function test() {
  var a = 10;
  if (true) {
    let b = 20;
    console.log(a);
    console.log(b); 
  }
}
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let c = counter();
c();
c(); 
c(); 
test();
(function () {
  console.log("IIFE executed immediately!");
})();
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(() => console.log(x), 1000);
  })(i);
}
function secretBox() {
  let secret = "Hidden!";
  return {
    getSecret: () => secret
  };
}

const box = secretBox();
console.log(box.getSecret()); 

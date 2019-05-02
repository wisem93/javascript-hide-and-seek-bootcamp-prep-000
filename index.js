function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(".target");
}

function increaseRankBy(n) {
  var lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  
  for(let i=0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var lis = document.getElementById("grand-node").querySelector("div");
  var deep;
  for (let i = 0; i < lis.length; i++) {
   deep = lis[i].querySelector("div");
  }
  return deep;
}


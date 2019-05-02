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
  var children = document.getElementById("grand-node").querySelectorAll("div");
  return children[children.length-1];
  // for (let i = 0; i < children.length; i++) {
  // deep = children[i].querySelector("div");
  // }
  // return deep;
}


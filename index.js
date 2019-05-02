function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested div div div div.target");
}

function increaseRankBy(n) {
  return document.querySelectorAll(".ranked-list").parseInt()
}

function deepestChild() {
  const deep = document.querySelector("div#grand-node").querySelectorAll("div div div div div");
  
  for (let i = 0; i < deep.length; i++) {
    deep[i].innerHTML = (i + 1).toString();
  }
}

// document.querySelector("div#grand-node").querySelector("div div div div div").innerText;
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested div div div div.target");
}

function increaseRankBy(n) {
  const deep = document.querySelector("div#grand-node");
}
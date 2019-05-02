function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(".target");
}

function increaseRankBy(n) {
  // return document.querySelectorAll(".ranked-list").parseInt("", n);
  
   var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++) {
    lis[i].innerHTML=parseInt(lis[i].innerHTML)+n;
  }
}

function deepestChild() {
  const deep = document.querySelector("div#grand-node").querySelectorAll("div div div div div");
  
  for (let i = 0; i < deep.length; i++) {
    deep[i].innerHTML = (i + 1).toString();
  }
}

// document.querySelector("div#grand-node").querySelector("div div div div div").innerText;
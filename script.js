let tip = (cost, percent) => {
  document.getElementById("tip").value = Math.floor((cost * percent).toFixed(2));
  document.getElementById("total").value = +document.getElementById("tip").value + +document.getElementById("check").value;
}

document.getElementById("sucked").onclick = () => { tip(document.getElementById("check").value, 0) };

document.getElementById("meh").onclick = () => { tip(document.getElementById("check").value, .1) };

document.getElementById("standard").onclick = () => { tip(document.getElementById("check").value, .15) };

document.getElementById("better").onclick = () => { tip(document.getElementById("check").value, .2) };

document.getElementById("best").onclick = () => { tip(document.getElementById("check").value, .3) };
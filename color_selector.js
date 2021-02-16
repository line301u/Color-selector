"use strict";

window.addEventListener("DOMContentLoaded", getValue);

function getValue() {
  colorpicker.addEventListener("input", function (event) {
    let hexNumber = ShowColorBox(event);
    showHex(hexNumber);
    console.log(hexNumber);
    let rgb = modelHexToRgb(hexNumber);
    console.log(rgb);
    showRgb(rgb);
    let css = rgbToCSS(rgb);
    console.log(css);
    ShowColorBoxSecond(css);
    let hsl = getHslValue(rgb);
    showHsl(hsl);
    console.log(hsl);
  });
}

function ShowColorBox(event) {
  document.querySelector(".colorbox").style.backgroundColor = event.target.value;
  let hexValue = event.target.value;
  return hexValue;
}

function showHex(hexNumber) {
  document.getElementById("hex").innerHTML = "HEX: " + hexNumber;
}

function modelHexToRgb(hexNumber) {
  const rgb = { r: "", g: "", b: "" };
  rgb.r = Number.parseInt(hexNumber.substring(1, 3), 16);
  rgb.g = Number.parseInt(hexNumber.substring(3, 5), 16);
  rgb.b = Number.parseInt(hexNumber.substring(5, 7), 16);

  return rgb;
}

function getHslValue(rgb) {
  rgb.r /= 255;
  rgb.g /= 255;
  rgb.b /= 255;

  let h, s, l;

  const min = Math.min(rgb.r, rgb.g, rgb.b);
  const max = Math.max(rgb.r, rgb.g, rgb.b);

  if (max === min) {
    h = 0;
  } else if (max === rgb.r) {
    h = 60 * (0 + (rgb.g - rgb.b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (rgb.b - rgb.r) / (max - min));
  } else if (max === rgb.b) {
    h = 60 * (4 + (rgb.r - rgb.g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  // showHsl(h, s, l);

  return `${h.toFixed(0)}, ${s.toFixed(0)}, ${l.toFixed(0)}`;
}

function showHsl(hsl) {
  document.getElementById("hsl").innerHTML = hsl;
}

function showRgb(rgb) {
  document.getElementById("rgb").innerHTML = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function rgbToCSS(rgb) {
  rgb.r.toString();
  rgb.g.toString();
  rgb.b.toString();

  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
}

function ShowColorBoxSecond(css) {
  document.querySelector("#colorboxSecond").style.backgroundColor = css;
}

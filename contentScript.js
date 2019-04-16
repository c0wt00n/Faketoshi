var matches = [];
var nozzle = false;
var nozzlers = /craig wright|craig steven wright|faketoshi|BCHSV|Bitcoin SV/gi;
var full = /craig wright|craig steven wright/gi;
var partial = /craig|wright|csw|cw/gi;

walk(document.body);

if (nozzle) {
  matches.forEach((node) => changeText(node));
}

// Credit to T.J. Crowder, I ripped this function off from
// https://stackoverflow.com/a/5904945/10002592
function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;
    case 3: // Text node
      if (!nozzle) nozzle = nozzleTest(node);
      if (isMatch(node)) matches.push(node);
      break;
  }
}

function isMatch(textNode) {
  return (full.test(textNode.nodeValue) || partial.test(textNode.nodeValue));
}

function nozzleTest(textNode) {
  return nozzlers.test(textNode.nodeValue);
}

function changeText(textNode) {
  textNode.nodeValue = textNode.nodeValue.replace(full, "Faketoshi");
  textNode.nodeValue = textNode.nodeValue.replace(partial, "Faketoshi");
}

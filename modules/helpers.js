function ifTrue(a, isTrue, isFalse = false) {
  if (a) {
    return isTrue;
  } else {
    return isFalse;
  }
}

function ifEq(a, b, isTrue, isFalse) {
  if (a == b) {
    return isTrue;
  } else {
    return isFalse;
  }
}

function forLoop(items, tpl) {
  var result = ``;
  items.forEach((item) => {
    console.log();
    result += tpl.replace(/\${(.*?)}/g, (x, g) => item[g]);
  });
  return result;
}

export { ifTrue, ifEq, forLoop };

function unUmlautize(s) {
  return s
    .replace(/å/g, 'a')
    .replace(/Å/g, 'A')
    .replace(/ä/g, 'a')
    .replace(/Ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/Ö/g, 'O')
    .replace(/ü/g, 'u')
    .replace(/Ü/g, 'U');
}

function aestheticizeCharacter(c) {
  const aestheticBaseCharCode = 65248;
  const spaceCharCode = ' '.charCodeAt(0);
  const newLineCharCode = '\n'.charCodeAt(0);
  const aestheticSpace = 12288;

  const charCode = c.charCodeAt(0);

  let aestheticCharCode = 0;

  switch (charCode) {
    case spaceCharCode:
      aestheticCharCode = aestheticSpace;
      break;
    case newLineCharCode:
      aestheticCharCode = newLineCharCode;
      break;
    default:
      aestheticCharCode = charCode + aestheticBaseCharCode;
      break;
  }

  const aestheticCharacter =
    charCode === newLineCharCode || (charCode >= 32 && charCode <= 126)
      ? String.fromCharCode(aestheticCharCode)
      : '';

  return aestheticCharacter;
}

function aestheticize(s) {
  return unUmlautize(s)
    .split('')
    .map(c => aestheticizeCharacter(c))
    .join('');
}

export default aestheticize;

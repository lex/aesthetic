const CHAR_CODE_BASE_AESTHETIC = 65248;
const CHAR_CODE_SPACE = ' '.charCodeAt(0);
const CHAR_CODE_NEWLINE = '\n'.charCodeAt(0);
const CHAR_CODE_AESTHETIC_SPACE = 12288;

function isAscii(charCode) {
  return charCode === CHAR_CODE_NEWLINE || (charCode >= 32 && charCode <= 126);
}

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
  const charCode = c.charCodeAt(0);

  let aestheticCharCode = 0;

  switch (charCode) {
    case CHAR_CODE_SPACE:
      aestheticCharCode = CHAR_CODE_AESTHETIC_SPACE;
      break;
    case CHAR_CODE_NEWLINE:
      aestheticCharCode = CHAR_CODE_NEWLINE;
      break;
    default:
      aestheticCharCode = CHAR_CODE_BASE_AESTHETIC + charCode;
      break;
  }

  const aestheticCharacter = isAscii(charCode)
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

/**
 * Returns inflected string
 * @param {Number} count
 * @param {Array<string>} strings
 * @returns {string}
 */
export function inflectString(count, strings) {
  if (strings.length === 0) {
    return '';
  }

  if (count <= 0) {
    return strings.length >= 3 ? strings[2] : strings[0];
  }

  if (strings.length === 1 || count === 1) {
    return strings[0];
  }

  if (count > 4 && strings.length >= 3) {
    return strings[2];
  }

  return strings[1];
}
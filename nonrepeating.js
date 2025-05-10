// firstNonRepeatingChar("aabbccddeeffg") // returns 'g'
// firstNonRepeatingChar("aabb")          // returns null
// firstNonRepeatingChar("stress")        // returns 't'
// Problem: Find the First Non-Repeating Character

function firstNonRepeatingChar(str) {
  const lowerStr = str.toLowerCase();
  const charCount = {};

  // Count each character
  for (let char of lowerStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let i = 0; i < str.length; i++) {
    if (charCount[lowerStr[i]] === 1) {
      return str[i]; // Return original case
    }
  }

  return null; // All characters repeat
}

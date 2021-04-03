// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"

// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"

var licenseKeyFormatting = function(S, K) {
  S = S.replace(/[-]/g, "").toUpperCase();
  let newS =  "";
  for (let i = 0; i < S.length; i++) {
    let val = S[S.length - i - 1] + newS;
    newS = (i + 1) % K === 0 && i !== S.length - 1 ? "-" + val : val;
  }
  return newS;
};

let testCases = [
  ["5F3Z-2e-9-w", 4],
  ["2-5G-3J", 2],
  ["2-4A0r7-4k", 4],
  ["--a-a-a-a--", 2]
]

for (let i = 0; i < testCases.length; i++) {
  console.log(licenseKeyFormatting(...testCases[i]))
}
  
/*
 * @param {string[]} emails
 * @return {number}
 */

// //First solution (bigger but faster)
// var numUniqueEmails = function(emails) {
//   let mySet = new Set();
//   for (let i = 0; i < emails.length; i++) {
//     let at = emails[i].indexOf("@");
//     let localName = emails[i].slice(0, at);
//     let addSign = localName.includes("+");
//     let domainName = emails[i].slice(at + 1);
//     localName = localName.replace(/["."]/g, "");
//     if (addSign) {
//       localName = localName.slice(0, localName.indexOf("+"));
//     }
//     mySet.add(localName + "@" + domainName);
//   }
//   return mySet.size;
// }; 

// Second Solution, (shorter but slower)
var numUniqueEmails = function(emails) {
  let mySet = new Set();
  for (let i = 0; i < emails.length; i++) {
    let name = emails[i].split("@");
    let local = name[0].replace(/["."]/g, "").split("+")[0];
    let domain = name[1];
    mySet.add(`${local}@${domain}`);
  }
  return mySet.size;
};


let tester = [
  ["johan@gmail.com", "johan+ochoa@gmail.com", "johan.ochoa@gmail.com"],
  ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
]
tester.forEach(array => console.log(numUniqueEmails(array)));


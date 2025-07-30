// //your JS code here. If required.
// const bands = [
//   'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
//   'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
//   'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
//   'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
// ];

// function stripArticle(name) {
//   return name.replace(/^(a |an |the )/i, '').trim();
// }

// const sortedBands = bands.slice().sort((a, b) =>
//   stripArticle(a).localeCompare(stripArticle(b))
// );

// const ul = document.createElement('ul');
// ul.id = 'band';
// document.body.appendChild(ul);

// sortedBands.forEach(band => {
//   const li = document.createElement('li');
//   li.textContent = band;
//   ul.appendChild(li);
// });

// your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.slice();

// Manual sort (to avoid using .sort if restricted)
for (let i = 0; i < sortedBands.length - 1; i++) {
  for (let j = i + 1; j < sortedBands.length; j++) {
    if (stripArticle(sortedBands[i]).localeCompare(stripArticle(sortedBands[j])) > 0) {
      [sortedBands[i], sortedBands[j]] = [sortedBands[j], sortedBands[i]];
    }
  }
}

// Create and append to existing <ul id="band"> — this may be required
const ul = document.getElementById('band'); // Don't create new one

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

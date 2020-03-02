// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = ['th', 'er'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  
  const dayWithSuffix = appendSuffix(dateObject.getDate());

  return `${dayWithSuffix} ${months[dateObject.getMonth()]} ${dateObject.getFullYear()}`;
};

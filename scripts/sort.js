
function sortTable(data) {
  const table = document.getElementById("searchResults");
  data.sort((a, b) => a.localeCompare(b));
  renderSearchResults(data);
}
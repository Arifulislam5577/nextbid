function parseHTML(htmlString) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(htmlString, "text/html");
  return doc.body;
}

export default parseHTML;

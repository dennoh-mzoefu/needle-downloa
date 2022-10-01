var needle = require("needle");

needle.get("https://www.figma.com", function (error, response) {
  if (!error && response.statusCode == 200) console.log(response.body);
});

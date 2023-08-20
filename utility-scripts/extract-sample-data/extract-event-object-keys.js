const fs = require("fs");

async function main() {
  const eventData = await fs.promises.readFile(
    "sample-event-data.json",
    "utf-8"
  );
  // console.log(data);
  const json = JSON.parse(eventData.toString());

  console.log(Object.keys(json));
}

main();

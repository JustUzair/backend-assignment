const Events = require("../models/eventsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErrors");
const factory = require("./handlerFactory");
const fs = require("fs");
const path = require("path");

const metricsBase = fs.readFileSync(
  path.resolve(__dirname + "/metrics-data/metrics-base.json"),
  "utf-8"
);

exports.getMetrics = catchAsync(async (req, res, next) => {
  const events = await Events.find();
  // console.log(__dirname);
  let timeSeries = [];
  //   const dataMap = {};
  const json = JSON.parse(metricsBase);
  events.map((event) => {
    // console.log(event.geo_ip.country);

    if (!json["opens_by_countries"][event.geo_ip.country]) {
      json["opens_by_countries"][event.geo_ip.country] = 1;
    } else {
      json["opens_by_countries"][event.geo_ip.country] += 1;
    }

    // json["opens_by_countries"] = dataMap;
    // console.log(json);

    if (
      !json["opens_by_device"][
        event.user_agent_parsed.is_mobile ? "mobile" : "desktop"
      ]
    ) {
      json["opens_by_device"][
        event.user_agent_parsed.is_mobile ? "mobile" : "desktop"
      ] = 1;
    } else {
      json["opens_by_device"][
        event.user_agent_parsed.is_mobile ? "mobile" : "desktop"
      ] += 1;
    }

    let eventDateTime = new Date(parseInt(event.timestamp)).toLocaleString();
    const match = timeSeries.find((time) => time.time == eventDateTime);
    // console.log(match);
    if (match === undefined) {
      timeSeries.push({
        totalOpens: 1,
        time: eventDateTime,
      });
    } else {
      match.totalOpens += 1;
    }
  });
  json.timeseries = timeSeries;
  res.status(200).json({
    status: "success",
    data: {
      metrics: json,
    },
  });
});

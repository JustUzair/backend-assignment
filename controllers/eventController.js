const Events = require("../models/eventsModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appErrors");
const factory = require("./handlerFactory");
exports.getAllEvents = catchAsync(async (req, res, next) => {
  const events = await Events.find();

  res.status(200).json({
    status: "success",
    data: {
      events,
    },
  });
});
exports.createEvent = factory.createOne(Events); // Create an Event
exports.getEvent = factory.getOne(Events); // Get a particular Event
exports.updateEvent = factory.updateOne(Events); // Update an  Event
exports.deleteEvent = factory.deleteOne(Events); // Delete an Event

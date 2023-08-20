const mongoose = require("mongoose");
// const crypto = require("crypto");
const validator = require("validator");

const geoLocationSchema = new mongoose.Schema({
  country: {
    type: String,
  },
  region: {
    type: String,
  },
  city: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  zip: {
    type: Number,
  },
  postal_code: {
    type: String,
  },
});

const rcptMetaSchema = new mongoose.Schema({
  customKey: {
    type: String,
  },
});

const parsedUserAgentSchema = new mongoose.Schema({
  agent_family: {
    type: String,
  },
  device_brand: {
    type: String,
  },
  device_family: {
    type: String,
  },
  os_family: {
    type: String,
  },
  os_version: {
    type: String,
  },
  is_mobile: {
    type: Boolean,
  },
  is_proxy: {
    type: Boolean,
  },
  is_prefetched: {
    type: Boolean,
  },
});

const eventsSchema = new mongoose.Schema({
  ab_test_id: {
    type: String,
  },
  ab_test_version: {
    type: String,
  },
  amp_enabled: {
    type: Boolean,
  },
  campaign_id: {
    type: String,
  },
  click_tracking: {
    type: Boolean,
  },
  customer_id: {
    type: String,
  },
  delv_method: {
    type: String,
  },
  event_id: {
    type: String,
  },
  friendly_from: {
    type: String,
    required: [true, "Email is mandatory"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email!!"],
  },
  geo_ip: geoLocationSchema,
  injection_time: {
    type: Date,
    default: new Date(Date.now()).toISOString(),
  },
  initial_pixel: {
    type: Boolean,
  },
  ip_address: {
    type: String,
  },
  ip_pool: {
    type: String,
  },
  mailbox_provider: {
    type: String,
  },
  mailbox_provider_region: {
    type: String,
  },
  message_id: {
    type: String,
  },
  msg_from: {
    type: String,
    required: [true, "Email is mandatory"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email!!"],
  },
  msg_size: {
    type: String,
  },
  num_retries: {
    type: String,
  },
  open_tracking: {
    type: Boolean,
  },
  queue_time: {
    type: String,
  },
  rcpt_meta: rcptMetaSchema,
  rcpt_tags: [String],
  rcpt_to: {
    type: String,
    required: [true, "Email is mandatory"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email!!"],
  },
  rcpt_hash: {
    type: String,
  },
  raw_rcpt_to: {
    type: String,
    required: [true, "Email is mandatory"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email!!"],
  },
  rcpt_type: {
    type: String,
    default: "cc",
    enum: ["cc", "bcc"],
  },
  recipient_domain: {
    type: String,
  },
  routing_domain: {
    type: String,
  },
  scheduled_time: {
    type: String,
  },
  sending_ip: {
    type: String,
  },
  subaccount_id: {
    type: String,
  },
  subject: {
    type: String,
  },
  template_id: {
    type: String,
  },
  template_version: {
    type: String,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  transactional: {
    type: String,
  },
  transmission_id: {
    type: String,
  },
  type: {
    type: String,
    default: "initial_open",
  },
  user_agent: {
    type: String,
  },
  user_agent_parsed: parsedUserAgentSchema,
});

const Events = mongoose.model("Events", eventsSchema);
const GeoLocationSchema = mongoose.model(
  "GeoLocationSchema",
  geoLocationSchema
);
const RcptMetaSchema = mongoose.model("RcptMetaSchema", rcptMetaSchema);
const ParsedUserAgentSchema = mongoose.model(
  "ParsedUserAgentSchema",
  parsedUserAgentSchema
);

module.exports = Events;

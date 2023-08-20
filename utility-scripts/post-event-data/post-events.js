for (let i = 0; i < 5; i++) {
  fetch("http://localhost:3000/api/v1/events", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      ab_test_id: "password-reset",
      ab_test_version: "1",
      amp_enabled: true,
      campaign_id: "Example Campaign Name",
      click_tracking: true,
      customer_id: "1",
      delv_method: "esmtp",
      event_id: "92356927693813856",
      friendly_from: "sender@example.com",
      geo_ip: {
        country: "IND",
        region: "GUJ",
        city: "Surat",
        latitude: 39.1749,
        longitude: -76.8375,
        zip: 21046,
        postal_code: "21046",
      },
      initial_pixel: true,
      ip_address: "18.236.253.72",
      ip_pool: "example-ip-pool",
      mailbox_provider: "Gsuite",
      mailbox_provider_region: "Europe - UK",
      message_id: "000443ee14578172be22",
      msg_from: "sender@example.com",
      msg_size: "1337",
      num_retries: "2",
      open_tracking: true,
      queue_time: "12",
      rcpt_meta: {
        customKey: "customValue",
      },
      rcpt_tags: ["male", "US"],
      rcpt_to: "recipient@example.com",
      rcpt_hash: "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed",
      raw_rcpt_to: "recipient@example.com",
      rcpt_type: "cc",
      recipient_domain: "example.com",
      routing_domain: "example.com",
      scheduled_time: "1588348800",
      sending_ip: "18.236.253.72",
      subaccount_id: "101",
      subject: "Summer deals are here!",
      template_id: "templ-1234",
      template_version: "1",
      transactional: "1",
      transmission_id: "65832150921904138",
      type: "initial_open",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
      user_agent_parsed: {
        agent_family: "WebKit",
        device_brand: "Apple",
        device_family: "Macbook",
        os_family: "iOS",
        os_version: "14",
        is_mobile: false,
        is_proxy: false,
        is_prefetched: false,
      },
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
}

for (let i = 0; i < 5; i++) {
  fetch("http://localhost:3000/api/v1/events", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
      ab_test_id: "password-reset",
      ab_test_version: "1",
      amp_enabled: true,
      campaign_id: "Example Campaign Name",
      click_tracking: true,
      customer_id: "1",
      delv_method: "esmtp",
      event_id: "92356927693813856",
      friendly_from: "sender@example.com",
      geo_ip: {
        country: "AUS",
        region: "SYD",
        city: "Sydney",
        latitude: 39.1749,
        longitude: -76.8375,
        zip: 21046,
        postal_code: "21046",
      },
      initial_pixel: true,
      ip_address: "18.236.253.72",
      ip_pool: "example-ip-pool",
      mailbox_provider: "Gsuite",
      mailbox_provider_region: "Europe - UK",
      message_id: "000443ee14578172be22",
      msg_from: "sender@example.com",
      msg_size: "1337",
      num_retries: "2",
      open_tracking: true,
      queue_time: "12",
      rcpt_meta: {
        customKey: "customValue",
      },
      rcpt_tags: ["male", "US"],
      rcpt_to: "recipient@example.com",
      rcpt_hash: "2aae6c35c94fcfb415dbe95f408b9ce91ee846ed",
      raw_rcpt_to: "recipient@example.com",
      rcpt_type: "cc",
      recipient_domain: "example.com",
      routing_domain: "example.com",
      scheduled_time: "1588348800",
      sending_ip: "18.236.253.72",
      subaccount_id: "101",
      subject: "Summer deals are here!",
      template_id: "templ-1234",
      template_version: "1",
      transactional: "1",
      transmission_id: "65832150921904138",
      type: "initial_open",
      user_agent:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.118 Safari/537.36",
      user_agent_parsed: {
        agent_family: "WebKit",
        device_brand: "Apple",
        device_family: "iPhone",
        os_family: "iOS",
        os_version: "17",
        is_mobile: true,
        is_proxy: false,
        is_prefetched: false,
      },
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
}

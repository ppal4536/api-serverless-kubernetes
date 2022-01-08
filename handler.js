"use strict";

const axios = require("axios");

module.exports = {
  hello: async (evt, ctx) => {
    /**
     * Request and Response object
     */
    const req = evt.extensions.request;
    const res = evt.extensions.response;

    // Set response header and send data to client
    try {
      const response = await axios.get(
        "https://feeds.capitalbikeshare.com/stations/stations.json"
      );

      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
      res.status(400).send(JSON.stringify(error));
    }
  },
};

const logger = require("../logger");
const { yup, formatYupErrors } = require('../validators');

describe("Logger and yup test", () => {

  test("Logger test", () => {
    logger.info("Write `$ strapi generate:something` instead.");
  });
});

const { Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { deleteMovie } = require("../functions/deleteMovie");
const { crossOffMovie } = require("../functions/crossOffMovie");
const { deleteMovieNotification } = require("../functions/deleteMovieNotification");

beforeEach(async () => {
  await driver.get("http://127.0.0.1:5501/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("verify movie was deleted", async () => {
  await deleteMovie(driver);
  await driver.sleep(1000);
});

test("verify movie was crossed off", async () => {
  await crossOffMovie(driver);
  await driver.sleep(1000);
})

test("verify delete notification is correct", async () => {
  await deleteMovieNotification(driver);
  await driver.sleep(1000);
})
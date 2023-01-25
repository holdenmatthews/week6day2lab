const { By } = require("selenium-webdriver");

const crossOffMovie = async (driver) => {
  await driver.findElement(By.xpath("//input")).sendKeys("Shrek");
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(1000);

  await driver.findElement(By.xpath("//span")).click();
};

module.exports = {
  crossOffMovie,
};

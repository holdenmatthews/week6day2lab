const { By } = require("selenium-webdriver");

const deleteMovie = async (driver) => {
  await driver.findElement(By.xpath("//input")).sendKeys('Shrek');
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(1000);

  await driver.findElement(By.xpath("//button[@id='Shrek']")).click();
};

module.exports = {
  deleteMovie,
};

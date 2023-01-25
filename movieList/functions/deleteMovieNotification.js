const { By } = require("selenium-webdriver");

const deleteMovieNotification = async (driver) => {
  await driver.findElement(By.xpath("//input")).sendKeys('Shrek');
  await driver.findElement(By.xpath("//button")).click();
  await driver.sleep(1000);

  await driver.findElement(By.xpath("//button[@id='Shrek']")).click();
  
  const messageText = await driver.findElement(By.xpath("//aside")).getText();
  await driver.sleep(1000);

  expect(messageText).toBe('Shrek deleted!')
};

module.exports = {
  deleteMovieNotification,
};

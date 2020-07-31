const { After, Status } = require("cucumber");
import { browser } from "protractor";



After(async function(scenario) {
   // if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
  //  }
});



import {Google} from './baseGooglePage'; 
const google = new Google(); 
const fs = require('fs')

test('do search', async () => {
    await google.navigate(); 
    await google.search('Chicago Bears'); 
    let text = await google.getResults(); 
    expect(text).toContain('Chicago Bears'); 
    //taking a screenshot at the end of your test is below
    await fs.writeFile(`${__dirname}/google.png`,
    await google.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('a pictures worth a thousand words')
    }); 
    //writing a file in text is below
    fs.writeFile(`${__dirname}/googleResults.txt`, text, (e) => {
        if (e) console.error(e)
        else console.log('save succesful')
    });
    await google.driver.quit(); 
}); 
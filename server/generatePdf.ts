import puppeteer  from 'puppeteer'
import hb  from 'handlebars'
import type { item } from './invoiceTemplate';



export const generatePdf  = async (name:string , items:item[] , content:(items:item[])=> string ) =>{

let data = {};

const template = hb.compile(() => content(items), { strict: true });

// we have compile our code with handlebars
const result = template(data);
// We can use this to add dynamic data to our  template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
const html = result;
// we are using headless mode
const browser = await puppeteer.launch();
const page = await browser.newPage()
// We set the page content as the generated html by handlebars
await page.setContent(html)
// We use pdf function to generate the pdf in the same folder as this file.
//{ path: `./docs/${name}.pdf`, format: 'A4' }
const buffer = await (await page.pdf()).buffer
await browser.close();
return buffer

}
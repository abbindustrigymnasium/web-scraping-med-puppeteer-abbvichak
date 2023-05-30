# Motivational Quotes Web Scraper

Motivational Quotes Web Scraper is a project dedicated to get you more motivated in your daily life. It scrapes a website for 200 motivational quotes. The Quotes are then hosted on an Express API, The website, built with Nuxt 3 and Tailwind CSS, allows users to interact with the data by getting a random quote by pressing a button and if that is not enough you can also view all the quotes in the "Quotes" page.

## Features
Scrapes shopify for 201 quotes.
Hosts the quotes on an Express API.
Displays randomly selected quotes.
Built with Nuxt 3 and Tailwind CSS.
Prerequisites

## Usage

### Before using the Motivational Web Scraper, ensure you have the following:

- Node.js installed on your system
- Internet connectivity to access shopify website
- Getting Started

### To get started with the Motivational Web Scraper, follow these steps:

1. Clone the repository to your local machine

 - git clone https://github.com/abbindustrigymnasium/web-scraping-med-puppeteer-abbvichak.git
 

2. Navigate to the project directory.

 - cd <project directory>
 

3. Scraper and Api

 1. Open the main folder.

 2. Install the dependencies by running the command: npm install.

 3. Run the scraper script from puppeteerScraper:
    - node index.js

 4. This will also start the express api on localhost and then a number which will be listed in the console.

4. Website

 1. Open the nuxtPage folder.

 2. Install the dependencies by running the command: npm install.

 3. Configure the API endpoint in the website's code.

 4. Start the website by running: npm run dev.

 5. The website will be accessible on the specified port.

## Errors

There are some problems that I don't know how to resolve:
 - The quotes will dissapear from quotepage when you reload/refresh the page. 
 - The "Get motivated" button doesn't work and will not show a quote when pressed (partly the same error as on the quotepage).

These things do kind of work but only sometimes and there are two videos showing when they work in the videos folder.

## Planed Functions

There was quite a lot that I wanted to add to this project but had to focus on other things which took a lot longer than expected:
 - Accounts, you were supposed to have an account so that you couldn't get the same quote twice. 
 - More quotes, I wanted to scrape more websites for quotes but a lot of the quotes were the same so you would be able to get the same quote twice.
 - Own quotes, I would have liked to add all quotes to a data base where you could also add your own quotes.
## License

This project is licensed under the MIT License. Feel free to modify and distribute it as per the license terms.

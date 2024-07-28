# UserInterface
This repository contains UI HTML/java script files that simulate the integration of an AI bot for the Recruiting projec
CareerAsst is the folder where this project is located.

Screen Scraping  scrape6.py
In the same project folder there is a screen scraper file that runs against governmentjobs.com specifically for 
the category of 'city engineer' in the state of 'missouri'
base_url = "https://www.governmentjobs.com/jobs"
params = {
    "keyword": "city engineer",
    "location": "missouri",
    "page": 1
}
Max Pages is set to 1 to minimize the data being handled until the code worked properly 
but at last check there are 9 pages in the settings above so max_pages should be increased.

running index2.html in browser or live server will display an option to review the Job Listings (job_listings.html)
and the Job Interview Questions (job_questions.html) just to view the jobs and questions in the json files created by scrape6.py

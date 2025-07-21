# Readme Instructions
- Write a 200-300 word reflection discussing your development process, challenges faced, solutions implemented, and potential improvements.

# Website Link
- https://country-api-dennisf.netlify.app/

 # readme Answers
 
## Development process

- The first part of the development process was planning.  taking a look at the provided data, what data I needed from it,  and what functions I need and how I needed them to function, I was able to map out a foundation for the data types I need and how I needed them to display.  For example, the API returns border countries as not names but their cca3 number.  Using this idea, I decided to store the countries pulled from the api in a map using cca3's as keys.  This would allow me to store this as a dataset to each country card, and use that dataset to pull country data from the map for information display when you click on a country.  this also allows me use that map to pull name data for button display on border countries and simply call `countryMap.get(cca3)` to pull the information of a country and display it in proper html.  
- After planning, I laid out the basic html structure in a way to allow me to utilize what I planned in planning, and what I planned for styling.  I had planned to create everything in one html page, so I have separate sections, with one hidden depending on what the user has clicked.  The main section displays all country cards, while the initially hidden section contains the info section.
- After basic html, I ended up doing multiple back and forths between html and css to get the basic styles down for each listed page.  I decided to up my CSS writing and use vars for different things, such as thematic coloring, shared elements such as box-shadow, font weights for the project, etc.
- finally, we add all of the logic.  I started with the API calls and country class, and built from there.  I set up the map I mentioned before, and created the promise chain to grab api information, add it to the map, and then add the information to the page by using a card template to store the information, appending each card to a fragment, and then returning and appending the entire fragment to the page.  I moved onto filling out the information page when you click a country, swap displays so information is no longer hidden and the main section is hidden, etc.  I moved onto the buttons, back, border buttons, etc to get them working as well.  Finally, I added the search and filter function, performed all final tests.
- the final part of the development process was testing everything, doing final refactors for performance and readability, and tightening up styling, making everything more polished.
- as a final step, I plugged the website into https://www.accessibilitychecker.org/ and fixed the remaining accessibility issues, just to be thorough.

## Challenges faced and solutions
- the biggest challenges I faced were:
    - the api did not feed the same information/names as the data file provided.  After realizing this, I had to carefully double check my data structure and data input/handling, create new interfaces, rename variables, etc.
    - refactoring list builders for both the currency array and language array into one function was probably the biggest challenge I faced.  currencies was an array of objects in the format of `code: {name, symbol}` where languages just produced `code: string`.   after an hour of researching I finally realized I could just check if the value returned from iterating the array of objects using their keys was an object or not, and return what was needed.
    - small funny challenge:  I had everything named ...builder for a while, but realized that was mostly reduntant and changed file names and folder names into something more palatable than "...builder"
    - keeping track of class names and ids in html to use in css and javascript.  I realize this is still a small project and it's not that big compared to many professional websites, but it did require a lot of double checking and having index.html side by side with whatever file I was working in to ensure I had getelements and queryselectors labeled properly.
    - I went back and added aria labels and elements multiple times, and I probably still missed some.
    - performance:  I found lazy-loading as a means on the flag images, but 250 elements each with a flag image may have some impact on performance on slower machines and mobile I think.
        - Testing the website on my phone, I realized it took a bit to load the country portion of the page.  I looked up loader wheel and implemented a slightly altered version of this: https://www.w3schools.com/howto/howto_css_loader.asp, using my own colors, changing the size, and changing the animation speed a little.
 
## Potential Improvements
- I need to learn about infinite scrolling features.  the only reason I didn't dive deep into it and do so here is the amount of refactoring I would need to do to create subsets of data to display on the screen, and how complicated that could become using search and filter features with the way I've already got the app designed.  The biggest improvement this app needs is performance/loading speed.
- Instead of immediate change to information page and back, sliding in and out before hiding.  

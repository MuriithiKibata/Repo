STOCKS MANAGER PROJECT BY MURIITHI KIBATA

FILE STRUCTURE:

The home, navbar, and search components each have their own css files.
However, stockitems, stockList and stocks have one css file(stockItems.css).

The Stock component is where I fetched my data, I then passed that data to StockItems, and mapped it there. StockList was responsible for handling the rendering of the table rows.

FUNCTIONALITY FEATURES:

The user can add items to the list and delete. Later on I'd like to add the feature of being able to increment and decrement quantities and price, and also maybe a separate page where the daily sales can be added.


CHALLENGES:

DAY 1: Getting my client-side routes to run was a bother. I actually had to start again beacause in an attempt to change the version of Router from 5.2 to 6, I messed the package.json file which stopped everything. Thank God I discovered that router 
v6.1 is stable, and my TM also helped me get the Routes working.

 Day 2 : Deployed Heroku. For some reason the styling for my webpage broke and I have no clue how to fix that. Moreover, its not pushing to my github repo when I git push cause its pushing to Heroku so ive decided to remove heroku and use Netlify. Also for so reason map is malfunctioning.

 
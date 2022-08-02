# General Assembly

## Table of contents

1. [Project overview](README.md#project-4---women-that-shred)
2. [Brief](README.md#brief)
3. [Technologies](https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md#technologies)
4. [Approach taken](https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md#approach-taken)
5. [Build diary](https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md#build-diary)
6. [Displays](https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md#displays)
7. [Key learning & Future improvements](https://github.com/fransurf/SEI-PROJECT-4-WF/blob/main/README.md#key-learning--future-improvements)

# Project 4 - ‘Women that Shred’
A website collating information on the latest women’s snowboards, advice on how to select a board, and an authenticated members-only area to buy and sell preloved boards. The site has a consistent, on-brand theme running throughout, including stylised colouring, fonts and displays, designed to suit the consumer. A focus on transitions and animations has been applied throughout to create a dynamic and engaging user experience. Django & REST-framework were employed to build-out an organised backend, querying an SQL database using postgreSQL.  SASS, React.js, React-bootstrap & React-Slick create appealing frontend displays.

![Mapping terrain links code snippet](/readMe4_imgs/p4-img1.png)

## View ’Women that Shred’?
xxxx

## Brief
One week solo-project to build a full-stack website; using a Python Django API & Django REST-framework to serve your data from a Postgres database; consuming the API with a separate front-end built with React; multiple relationships and CRUD functionality for at least a couple of models; visually impressive design; deployed online so that it's publicly accessible.

## Technologies
Django | REST-framework | PostgreSQL | TablePlus | Axios | React.js | React-Slick (Carousel)  | SASS
* **Django** & **REST-framework** were employed to build-out an organised backend, querying an SQL database using **postgreSQL**
* API data personally collated & organised with multiple relationships & CRUD functionality 
* **React.js** & **React-bootstrap** were used to provide the basic structure of the frontend, calling data from the API using **axios** GET-, POST-, PUT- & DELETE- requests handled using useEffect() & useState() hooks
* **React-Slick** was employed to create a carousel presenting all available board options 
**SASS** was used with a focus on animations and transitions to create a dynamic & engaging interface



## Approach taken
Instead of taking a serial approach to describing the build process, here I have decided to highlight a few of the key technical components through the build.
* **Backend authentication:** not particularly interesting, but increasingly important. Authentication is required to enter the ‘Preloved boards’ area, in which users can post boards to sell and contact other users about buying boards. This project takes advantage of django REST framework’s own authentication packages, adding some custom features. 

   The BasicAuthentication class is extended with a JWTAuthentication class, adding JSON Web Token which is now fairly standard practice. Firstly, the custom authentication function checks that the incoming authentication request a) contains the ‘Authorization’ header, and b) is in the correct format. If these two conditions are met, a token is produced removing the ‘Bearer ‘ prefix. If not, relevant errors are raised. Secondly, the payload is decoded using jwt (token, secret & algorithm). The user is then found within the User database matching their unique jwt key (payload.sub) to the stored user primary key (pk). If either of these two conditions are not met errors are raised (‘invalid token’ & ‘user not found’). If all conditions are met, the user is authenticated and the user and token are returned. For password validation, django REST framework basic standards are used to a) validate the password, and b) produce a hashed password from the plain text password that is entered by the user.

   ![Authentication code snippet](/readMe4_imgs/JWTAuthentication.png "Logo Title Text 1")


* **Styling:** As my first solo fullstack development, I wanted to create something that was close to my heart and also reflected my own personal style. As I develop as a software engineer, I realise that my aim is to make engaging website that present information in a well-structured manner, with a sense of fun and movement. 

   A clearly defined consistent theme was sought throughout, using repeated classes, SASS variables & images types across pages. For example, a white capitalised marker font against a black background, was applied across most pages; writing that indicated a link glowed bright pink on hover; and box shadows were used to make boxes appear to glow or lift up against the background. To embed the snowboarding theme, selector divs on the Selection and Advice pages, were made to appear as colourful snowboards roughly matching the colour themes of the website. I was particularly pleased with a glitched writing effect I found and edited courtesy of (Developer: Elisabeth Diang), which layers text on top of each other, creates coloured scan lines over the text and makes the text at one level glitch (transforming the text rotation & skew). This allowed for a simple but engaging landing page (see Displays, Landing page below).

* **Creating dynamic movement:** A sense of movement has been woven throughout the website, with transitions, animations and hover effects. Perhaps the best example of this is on the Advice page (see displays below). This page presents the user with advice on how to select the right board for them under 5 headings (Flex, Size, Camber vs Rocker, Shape & Female vs Unisex). In order to keep the page clean & interactive, the substantive advice is presented on expandable divs, which are initially hidden and only become visible when the user hovers over the relevant title. I achieved this effect (with the help of some tutorials & …) using a combination of React.js and SASS, by creating separate divs that toggle between <display:none> and <display:flex> on hover. For example, in the code snippet below (left - React.js; right - SASS), <.short-text> is commonly visible and <.long-text> is hidden; when the user hovers over each <.expand> div, <.short-text> is hidden and <.long-text> is now visible. To create a further sense of movement, the <.expand> divs (which take the form of colourful snowboards) rise up on hover and the text background changes to bright pink. These two effects are inherited from the Selection page, which creates a sense of consistency across the site. 

![Dynamic movement React code snippet](/readMe4_imgs/AdviceReact.png)
![Dynamic movement React code snippet](/readMe4_imgs/AdviceSASS.png)

* **Creating class by mapping nested arrays:** on the terrain page, the user can scroll through a range of boards suitable for that terrain, which are presented with a parallax effect running over an image of a woman riding that terrain type. I wanted each of the boards to appear on either side of the page alternately. For this I created a Left/Right array, which used the index of each board as the return mapped through the API data, and assigned each a class of left and right alternately. From here, I was able to style the two sides separately. Taking this approach, rather than manually inputting a class meant that if there were any changes to the database (i.e. boards added/removed/assigned a new terrain), the alternate siding would be retained regardless of changes in order. In the code example below, <${LR[i]}> maps through the ‘LR’ array which alternates between left and right and assigns the relevant class for each of the elements.

![Class creation code snippet](/readMe4_imgs/TerrainCode.png)

* **Carousel with mapped terrain links:** For users who would like to view all boards, I created a carousel presenting the key information plus an image of the board (see All Boards view below). One challenge I initially faced was creating clickable links from the nested terrain database. Because of the structure of the SQL relationship between boards and terrain, I was able to list the terrain types, but was not able to map through that list to create links to the terrain pages from them. For this, within the return which mapped through the boards array, I created a new array, terrainType. terrainType mapped through the nested terrain object array and extracted only the type information. I was then able to map through this newly created array in order to create a list of terrain types for each board, which were clickable links that would take the user to the specific Terrain page.

![Mapping terrain links code snippet](/readMe4_imgs/CarouselMapping.png)


## Build diary
**Day 1: Planning.** A detailed plan of the website was wireframed using excalidraw (below); the models and relationships using QuickDBD; a schedule of work using Trello. Backend Python models (boards, jwt_auth, pre_loved, terrain) & serialisers (all but jwt_auth) were created.

![Excalidraw planning](/readMe4_imgs/excalidraw4.png)

**Day 2: Backend.** Authentication functions completed & integrated with the preloved models. JWTAuthentication was used. My aim was to produce neat, readable code, so that any dev could pick up my programme and understand exactly the process (see code snippets above).
Research on CSS background animations for frontend began.

**Day 3: Backend completed.** Work completed on preloved boards section to ensure that owner updates on preloved posts. Authentication/UserSerializer completed & connections checked between models that use them. Migrations redone & Client file for frontend created. 

**Day 4: Frontend.** Focus on creating organised and well-structured code files across frontend & backend. Good draft of Board-selections page. Worked on using snowboards as list-selector divs & styling. Links through to the relevant Terrains pages created.

**Day 5: Frontend.** Focus on terrain pages - calling data from the API mapping through each board with a model categorisation for the relevant terrain pages & correctly presenting the desired data. Visually appealing images for each terrain and board collected. Board-selectors animated (SCSS) so that they rise from the bottom of page on page load, and rise on hover for Board-selection and Advice pages.

**Day 6: Frontend.** Advice page finalised with content and expanding advice boxes appearing on hover (SCSS). Styling for classes used across pages for consistency & ease. All-boards carousel added and styled using React-Slick (styling using React-Slick very frustrating). Data collection finalised.

**Day 7: Frontend complete.** Big day today! Login/Register + preloved page completed. Landing page arrows down for more content self-drawn & styled, glow pink and rise onHover & link to next page onClick. NavBar links & style finalised. Consistent stylisation throughout pages with focus on links (glow pink), onHover effects & background images checked to produce uniform experience through the site.

## Displays
**Landing page (below):** Clean & simple landing page, presents an image of a female snowboards, with the site name ‘Women that Shred’ (presented with an appealing ‘glitch’ effect) and a downward arrow to access the main page. Navbar present across the top, has a subtle colour-change transition that undulates continually throughout navigation of the site.

![Mapping terrain links code snippet](/readMe4_imgs/landing4.png)

**Boards-selection page (below):** pressing the downwards arrows or the ‘Boards’ navigation, takes the user to a boards selection page organised by terrain. Each board rises on hover and the dark background colour behind writing turns to bright pink to indicate that it is a clickable link. Clicking on the top 1-5 boards takes the user through to an index of available boards assigned to that specific terrain (e.g park boards, below). Clicking the bottom board will take the user to a carousel of all boards.

![Mapping terrain links code snippet](/readMe4_imgs/selection4.png)

**Terrain page (below, e.g. park boards):** on the terrain page, the user can scroll through a range of boards suitable for that terrain, which are presented with a parallax effect running over an image of a woman riding that terrain type. A link to where to buy each board is embedded within the ‘TEMPTED?’ text, which turns pink on hover to indicate it is a clickable link.

![Mapping terrain links code snippet](/readMe4_imgs/terrain4.png)

**All-boards Carousel (see below):** a React-Slick carousel is used to present all the boards on the site, navigated using side-arrows, green dots or swipe. Each board presents a list of terrains it is categorised for, which are clickable links (turn pink on hover). The user can also click through to the Advice page by clicking on ‘NEED SOME ADVICE?’, which likewise tuurns pink on hover to indicate a clickable link.

![Mapping terrain links code snippet](/readMe4_imgs/carousel4.png)

**Advice page (see below):** an advice page is available on the All-boards carousel page (above) and in the NavBar. The advice page uses the same design as the Boards-selection page, in this case hovering over a board activates an advice box, as well as rising the board and turning the text background pink. 

![Mapping terrain links code snippet](/readMe4_imgs/advice4.png)

**Preloved pages:** an area for users to buy and sell preloved boards is available for authenticated members only. If the user is not authenticated, the preloved boards page presents a message informing the user they must be logged in to access the area and link to the Log in/Registration pages. Once logged in, the user is able to view all posted preloved boards, and post a board of their own.

![Mapping terrain links code snippet](/readMe4_imgs/login4.png)
![Mapping terrain links code snippet](/readMe4_imgs/prelovedForm4.png)
![Mapping terrain links code snippet](/readMe4_imgs/preloved4.png)



## Key learning & Future improvements
* Embedded learning of Django (models, urls, views & serialisers)
* Embedded learning of postgreSQL & SQL databases
* Becoming increasingly confident with React.js to query a backend API (becoming second nature)
* Focus on creating organised and well-structured code files
* Becoming increasingly confident & efficient with using SCSS, classes & variables
* Enhanced understanding of creating a consistent & engaging user experience
### Challenges
* React-Slick Carousel - Although making progress, I find styling the pre-structured carousel challenging
### Wins
* I felt that I achieved a consistent look and feel across the site, which was fun and dynamic
* I was pleased with the styling throughout
* I was pleased with the array mapping to produce clickable links through the SQL relationships
### Future improvements
* The preloved boards page is incredibly simple at present - with more time I would build this out to create a nicer user-area & overall experience
* Originally I had planned to include an area for members to chat about ski domains & recommendations
* I would have liked the carousel transitions to be smoother

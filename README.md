<img src="https://github.com/Qinisfighting/FEND-Capstone---Travel-App/blob/main/src/client/img/banner.jpg" width="1200"> 

# Travel Planner 


## Overview

Capstone Project of Front End Web Developer Nanodegree Program from Udacity, aiming to create a web tool, with which user can enter the trip destination, the departing and returning date and personal notes, to create a travel plan with weather forecast, an image of the destination, information of the country and notes.

## Extended functionalities:

- Add end date and display length of trip.
- Pull in an alternative image.  
- Integrate the REST Countries API to pull in data for the country being visited.
- Allow the user to remove the trip.
- Incorporate icons into forecast.
- A memo function which allows user to enter information relating to the trip.
- A print button on the left which allows user to print their trip.
- Use Local Storage to save trips.
- Allow the user to add additional trips. 


<img src="https://github.com/Qinisfighting/FEND-Capstone---Travel-App/blob/main/src/client/img/demo.png" width="1200"> 


## Environment
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Build tools


![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
<img width="100px" alt="AXIOS" src="https://user-images.githubusercontent.com/8939680/57233884-20344080-6fe5-11e9-8df3-0df1282e1574.png">
<img width="100px" alt="AXIOS" src="https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png">

## API

- [geoNames API](http://www.geonames.org/export/web-services.html)
- [Weatherbit API](https://www.weatherbit.io/api)
- [Pixabay API](https://pixabay.com/api/docs/)
- [restCountry API](https://restcountries.com/)


## Dependencies

- cors
- body-parser
- webpack plugins and loaders 

## Installation 

- Clone the project to local device

- Make sure Node(v14.21.3) and npm(v6.14.4) are installed from the terminal, and run

   ```
   npm install
   ```

- By package compatibility issues, please install plugins and loaders with the proposed version set from [package.json](https://github.com/Qinisfighting/Project-FEND-Capstone---Travel-App/blob/main/package.json), and run

   ```
   npm i --legacy-peer-deps
   ```
    
## Start the project

- Sign up for the first three API ID/keys from the link above and make sure dotenv package is installed
- Create a .env file in the root of this project and fill the file with the API keys 

```
geoUsername = *********
weatherAPIKey = *************************
pixAPIKey = *************************
```

Command | Action
:------------: | :-------------:
`npm run build-prod` | build 
`npm start` | run 
`npm run build-dev` | develope 

## View the project

- [Local](http://localhost:7000/)
- [Heroku](https://qinstravelplanner.herokuapp.com/)

## Special thanks

- ["Promise chaining is dead. Long live async/await - LogRocket Blog" ]( https://blog.logrocket.com/promise-chaining-is-dead-long-live-async-await-445897870abc/)
- ["Axios vs. fetch(): Which is best for making HTTP requests? - LogRocket Blog" ](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/)
- [How to store objects in HTML5 localStorage](https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage)
- [How to use Local Storage with JavaScript](https://www.youtube.com/watch?v=AfVUiQ-my4Q&t=1462s)
- [Sort an Array of Objects by Date property in JavaScript ](https://bobbyhadz.com/blog/javascript-sort-array-of-objects-by-date-property)
- [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)
- [Scroll Back To Top Button](https://www.w3schools.com/howto/howto_js_dropdown.asp)
- [Clickable Dropdown](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)
- [Background image]( https://www.dreamstime.com/travel-accessories-light-blue-background-getting-ready-summer-vacation-d-rendering-image150871769)
- [Markdown badges](https://ileriayo.github.io/markdown-badges/)


## Extras
Adding new features, fixing bugs or any other questions, Please feel free to contact me: **Yanqin Q** (*yq.qualmann@gmail.com*)

 

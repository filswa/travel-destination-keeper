Hello!

Below You can find quick readme! and comments on this assignment.

This project was created with create-react-app.
To start the app, clone this repository and run
### 'npm start'
 in node.js command prompt.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Issues to fix:
- Initialize googleMapsAPI and placesAPI properly, so google.maps is available to every component, especially for autocomplete functionality, which at the moment is not implemented in SearchBar component

- Redesign components relations to pass data in a better way. e.g. make Map component SearchBar's child, so when new location is being searched, it can be passed as props to re-center the map according to searched query?

- Work on stylings, especially responsivity for search bar and add button

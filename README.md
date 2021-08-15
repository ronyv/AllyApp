# Ally App
` React Native app to fetch and display OKR's`

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/ronyv/AllyApp)

## Screenshot

<img width="473" alt="Screenshot 2021-08-15 at 9 11 30 PM" src="https://user-images.githubusercontent.com/15177814/129484152-6dad666b-2b47-4a81-af3f-7612fb654046.png">

## Features

- Fetch data from `https://okrcentral.github.io/sample-okrs/db.json`
- Segregate parent objectives based on `parent_objective_id` 
- Formatted data so that child objectives are put under repective parent items within the master array.
- Child data is displayed only upon selecting a parent objective.
- Filter option available to filter list based on category
- Activity indicator while data being fetched from api.

## Installation

```sh
npm install
npm run ios
```

## License

MIT


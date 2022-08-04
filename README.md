# Biking Weather

...for lack of a better name.

A React app that intakes a location name/area code, makes an API call to determine weather conditions, and tells if they are good for biking.

The user has the ability to enter both **location names** and **area codes** to determine the weather/conditions in an area. The user is presented with the temperature (actual and feels-like), chance of rain (current and in the next hour), and humidity. The data is also highlighted in either green (good for biking) or red (not good).

Data is retrieved from [WeatherAPI](https://www.weatherapi.com/) using the forecast endpoint.

![chrome_nWLgOFaZkx](https://user-images.githubusercontent.com/58154576/182970908-fcec81c5-1389-4f40-924c-bc2c512702d0.png)
![chrome_UIxYpOBpIL](https://user-images.githubusercontent.com/58154576/182970910-86ac68bc-d1e7-4681-941d-30b18df3dc7d.png)


## Setup

You will require an installation of node.js to run this application.

After you have cloned the repository locally:

1) Get an API key from [WeatherAPI](https://www.weatherapi.com/). You only need the free tier for this program to work, so hit 'Get Started Free' and follow the rest of the setup.

2) Take the `config-template.json` file in the `src` folder, rename it to `config.json`, and replace the current key value with your newly-received key.

3) Install dependencies using `npm i`.

4) Run the program by opening a terminal in the folder of this README and run `npm start`. This will open the application locally.

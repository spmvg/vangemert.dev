Date: 2 Dec. 2023
## When cheap energy turns green

It is sometimes said that cheap power means green power, but is that the case?
In this blogpost we compare emissions data with price deviations and the hour of the day.
It can be seen in the following figure that large negative price deviations — cheap power — indeed correspond to lower carbon emissions: but only during daytime.

![Electric power emissions vs. price and time](./images/electric_power_vs_price_and_time.png "Electric power emissions vs. price and time")

Our dataset consists of the following:
* Hourly EPEX day-ahead electricity prices. These are the electricity prices that one would have paid if one had a Dutch "dynamic electricity contract" in 2022.
* Total equivalent carbon emissions (including construction) from ElectricityMaps in 2022.

To define "cheap power" we have taken the difference of the electricity price with a 48h centered moving average.
This approach reveals distinct patterns in price fluctuations, characterized by pronounced peaks during morning hours and dinnertime, and noticeable dips at night and in the afternoon. 
The cheapest power occurs during the day, which is to be expected given the significant contribution of renewable energy sources during these hours.

The blue color in the graph indicates the cleanest power, while the yellow color indicates the dirtiest power.
The cleanest power seems to occur mainly during daytime, even though cheap power also occurs during the night.
This could be explained by the lack of solar production during the night.
So indeed: cheap power corresponds to lower carbon emissions — but only during daytime.
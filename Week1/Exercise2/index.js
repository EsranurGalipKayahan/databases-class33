import {
  openConnection,
  closeConnection,
  countries_greater_8_million,
  countries_have_land,
  cities_between_range,
  europen_countries,
  order_countries_by_surfacearea,
  cities_in_the_netherlands,
  population_of_rotterdam,
  countries_on_top_ten,
  cities_most_populated,
  population_of_the_world,
} from "./app.js";

openConnection();


countries_greater_8_million();


countries_have_land();


cities_between_range();


europen_countries();


order_countries_by_surfacearea();


cities_in_the_netherlands();


population_of_rotterdam();


countries_on_top_ten();


cities_most_populated();


population_of_the_world();

closeConnection();

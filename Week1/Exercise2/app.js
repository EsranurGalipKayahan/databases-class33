import mysql from "mysql";
import {
  HOST,
  CONN_SCSS_MSG,
  CONN_CLS_MSG,
} from "../Exercise1/sources/constants.js";
import keys from "../Exercise1/sources/keys.js";
import { useDb } from "../Exercise1/utils/sqls.js";

let connection;

export const openConnection = () => {
  connection = mysql.createConnection({
    host: HOST,
    user: keys.dbUser,
    password: keys.dbPassword,
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log(CONN_SCSS_MSG);
  });
  connection.query(useDb("world"), function (err, results, fields) {
    if (err) throw err;
  });
};
export const countries_greater_8_million = () => {
  const query =
    "SELECT name, population FROM country WHERE population>8000000; ";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********The names of countries with population greater than 8 million*********"
    );
    console.log(results);
  });
};
export const countries_have_land = () => {
  const query = "SELECT name FROM country WHERE name like '%land%';";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********The names of countries that have “land” in their names*********"
    );
    console.log(results);
  });
};
export const cities_between_range = () => {
  const query =
    "SELECT name, population FROM city WHERE population BETWEEN 500000 AND 1000000;";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********The names of the cities with population in between 500,000 and 1 million*********"
    );
    console.log(results);
  });
};
export const europen_countries = () => {
  const query = "SELECT name, continent FROM country WHERE continent='Europe';";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********The name of all the countries on the continent ‘Europe’*********"
    );
    console.log(results);
  });
};
export const order_countries_by_surfacearea = () => {
  const query =
    "SELECT name, surfacearea FROM country ORDER BY surfacearea DESC;";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********All the countries in the descending order of their surface areas*********"
    );
    console.log(results);
  });
};
export const cities_in_the_netherlands = () => {
  const query =
    "SELECT name, countryCode FROM city WHERE countryCode = (SELECT Code FROM country WHERE name='Netherlands');";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log(
      "*********The names of all the cities in the Netherlands*********"
    );
    console.log(results);
  });
};
export const population_of_rotterdam = () => {
  const query = "SELECT name, population FROM city WHERE name='Rotterdam';";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log("*********The population of Rotterdam*********");
    console.log(results);
  });
};
export const countries_on_top_ten = () => {
  const query =
    "SELECT name, surfacearea FROM country ORDER BY surfacearea DESC LIMIT 10;";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log("*********The top 10 countries by Surface Area*********");
    console.log(results);
  });
};

export const cities_most_populated = () => {
  const query =
    "SELECT name, population FROM city ORDER BY population DESC LIMIT 10 ;";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log("*********The top 10 most populated cities*********");
    console.log(results);
  });
};
export const population_of_the_world = () => {
  const query =
    "SELECT SUM(population) AS 'The Population of The World' FROM country;";
  connection.query(query, function (err, results, fields) {
    if (err) throw err;
    console.log("*********The population number of the world*********");
    console.log(results);
  });
};
export const closeConnection = () => {
  connection.end((err) => {
    if (err) console.log(err);
    console.log(CONN_CLS_MSG);
  });
};

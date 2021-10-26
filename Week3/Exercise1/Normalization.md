1)What columns violate 1NF?
	Rule 1: Single valued attributes (each column should have atomic value, no multiple values)
	-food_code and food_description have multiple values
	Rule 2 : Attribute domain should not change
	-for dinner_date columns,we can say that almost each record has different type
	Rule 3: Unique names for attributes/columns
	-This is good for the table
	Rule 4: Order does not matter
	-This is good for the table
And I would like to explain that the 6th record caused insertion anomoly, I think. Because the dinner_id, venue_code,venue_code, etc... are the same with Amit and Dan, except the date.

2)What entities do you recognize that could be extracted?
Members, Dinners, Venues, Food

3)Name all the tables and columns that would make a 3NF compliant solution.

Entities
--------
Members Table : member_id, member_name, member_address
Dinners	Table :	dinner_id, dinner_date, venue_code
Venues	Table : venue_code, venue_description
Food	Table : food_code, food_description

Relations
---------
Orders       Table : dinner_id, food_code
Participants Table : member_id, dinner_id
* First of all I have to check mysql secure_file_priv. Because if it is set to a variable, while executing the outfile statement it will give error.

To check it:
	1- Run this statement:  SHOW VARIABLES LIKE "secure_file_priv";
	2- In my computer it is set to C:\ProgramData\MySQL\MySQL Server 8.0\Uploads\
	3- Go to C:\ProgramData\MySQL\MySQL Server 8.0\ directory
	4- Find my.ini file (may be hidden)
	5- Set secure-file-priv="" under [mysqld]
	6- Now, restart the computer
	7- Run this statement again:  SHOW VARIABLES LIKE "secure_file_priv";
	8- It is now ""
	9- Run outfile statements now: 
		select * into outfile 'city.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from city;

		select * into outfile 'country.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from country;

		select * into outfile 'countrylanguage.csv' FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' from countrylanguage;
	10- We can reach the files in the C:\ProgramData\MySQL\MySQL Server 8.0\Data directory
	11- Create an account on mongodb.
	12- Create a cluster
	13- In security tab, add your ip by clicking add current ip address
	14- Connect Cluster0
	15- Choose cluster0 primary
	16- Copy the import adres like : cluster0-shard-00-01.oundx.mongodb.net:27017
	17- Open MongoDB Compass
	18- Connect cluster0-shard-00-01.oundx.mongodb.net:27017 with your password
	19- Click Create Database button
	20- Write database name as world and collection name as country first of all
	21- Go to the world database by selecting from the list where all the databases are listed
	22- Select country collection
	23- The body of the page, you will see import data button, click that
	24- By clicking browse button, select our country.csv file
	25- Select CSV file as input file type
	26- Select delimeter as comma
	27- Click Import button
	28- Click Done button if it is completed successfully, otherwise check the steps again given above
	29- I realiyed that it did not upload all the data correctly. I tried many times.
	30- The second way, install mongoimport
	31- For Windows machine, through cmd, I tried all combinations given below and more. But I could not import again
		a) By giving full path
		b) By changing the location of the files
		c) By changing connection properties
		d) By adding field names to the files, etc...
		e) I got many different errors:
		
				The system cannot find the file specified // I tried to fix by many ways
				error connecting to host: could not connect to server: connection() error occured during connection handshake: auth error: sasl conversation error: unable to authenticate using mechanism "SCRAM-SHA-1": (AtlasError) bad auth : Authentication failed.
				Server selection error: server selection timeout, current topology
				no collection specified, using filename '' as collection, error validating settings: invalid collection name: collection name cannot be an empty string, 'w' is not recognized as an internal or external command,operable program or batch file.
				I am still getting this error even though I use the correct syntax, I checked many times. But I could not solve it. 
			
			mongoimport --uri mongodb+srv://admin:12345@cluster0.oundx.mongodb.net/world --collection country --type csv --file country.csv --columnsHaveTypes --fieldFile fieldTypes.txt
			mongoimport --uri "mongodb://root:12345@cluster0.oundx.mongodb.net/world?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection country --file country.csv --type csv --columnsHaveTypes --fieldFile fieldTypes.txt
			mongoimport --uri mongodb+srv://admin:12345@cluster0.oundx.mongodb.net/world?ssl=true&replicaSet=myAtlasRS&authSource=admin --collection country --type csv --file country.csv --columnsHaveTypes --fieldFile fieldTypes.txt
			mongoimport --uri "mongodb://root:12345@cluster0-shard-00-01.oundx.mongodb.net:27017/world?ssl=true&replicaSet=myAtlasRS&authSource=admin" --collection country --file country.csv --type csv --columnsHaveTypes --fieldFile fieldTypes.txt
			mongoimport --uri mongodb+srv://root:12345@cluster0.oundx.mongodb.net/world --collection country --type CSV --file country.csv
			mongoimport --uri mongodb+srv://cluster0.oundx.mongodb.net/world?retryWrites=true&w=majority --username='root' --collection='country' --file=country.csv --type=csv --columnsHaveTypes --fieldFile=fieldTypes.txt
			mongoimport "mongodb+srv://root:12345@cluster0.oundx.mongodb.net/world" -d world -c country  --type csv --file=country.csv --headerline
			mongoimport --uri mongodb+srv://root:12345@cluster0.oundx.mongodb.net/world?retryWrites=true&w=majority  --collection='country' --file=country.csv --type=csv --columnsHaveTypes --fieldFile=fieldTypes.txt
			mongoimport --uri 'mongodb://root:12345@cluster0-shard-00-01.oundx.mongodb.net/world'
			mongoimport --uri mongodb+srv://root:12345@cluster0.oundx.mongodb.net/world?retryWrites=true&w=majority  -c country  --type csv --file country.csv --headerLine
			mongoimport --uri mongodb+srv://root:<12345>@cluster0-shard-00-01.oundx.mongodb.net/world --collection='country'
			mongoimport --host cluster0-shard-00-01.oundx.mongodb.net:27017 --db world --type csv --file C:\Users\esran\Desktop\country.csv --authenticationDatabase admin --ssl --username root --password 12345
			mongoimport --db=users --collection=contacts --type=csv  --columnsHaveTypes   --fields="name.string(),birthdate.date(2006-01-02),contacted.boolean(),followerCount.int32(),thumbnail.binary(base64)" --file=/example/file.csv
	
	32- The third way install Studio 3T
	33- Click Connect button
	34- Click New Connection
	35- Click From URI button
	36- Paste your cluster path (as in the previous steps)
	37- By checking the information in Authentication tab, save the connection
	38- Then select the newly created connection and then click connect button
	39- After the connection is established, find the world database
	40- Select the country collection
	41- In country.csv which is produced by MySQL has no field names, so the importing operation does not work properly. Therefore, write field names seperated with comma
	42- Then go back to Studio 3T and click Import button
	43- Select CSV file
	44- Click Select File
	45- Select country.csv
	46- Select delimeter as comma
	47- Select File contains header with field names
	48- Check automatically generated target options and correct if it has errors
	49- Then click Import
	50- It is done successfully.
	51- Do the same steps for city and countrylanguage
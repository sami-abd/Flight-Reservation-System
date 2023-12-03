/*
Populate database with sample records
*/
USE companyensf608;
INSERT INTO COMPANY (name)
VALUES
	("WestJet"),
	("Air Canada"),
    ("Flair");
    
INSERT INTO AIRCRAFT (name, capacity, companyID)
VALUES
	("Boeing 737-700", 120, 1),
    ("Boeing 737-800", 160, 1),
    ("Boeing 737-700", 120, 1),
    ("Airbus A318", 100, 1),
    ("Airbus A321", 200, 1);
    
INSERT INTO AIRPORT 
VALUES 
	("YYZ","Toronto"),
    ("YUL","Montreal"),
    ("YVR","Vancouver"),
    ("YEG","Edmonton"),
    ("YYC","Calgary"),
    ("YHZ","Halifax"),
    ("YOW","Ottawa"),
    ("YWG","Winnipeg");
    
INSERT INTO FLIGHT (
	departure,
    destination,
    date,
    aircraftID
)
VALUES 
	("YYZ", "YVR", "2023-12-20", 1),
    ("YYC", "YOW", "2023-12-23", 2);
    
INSERT INTO USER (
	userID,
    firstName,
    lastName,
    birthDate,
    email,
    street,
    city,
    province,
    password1
    
) 
VALUES 
    ('Emily', 'Thompson', '1989-07-15', 'emily.thompson@example.com', '123 Maple Street', 'Toronto', 'ON', "21235"),
    ('Jacob', 'Rodriguez', '1992-04-23', 'jacob.rodriguez@example.com', '456 Oak Avenue', 'Vancouver', 'BC',"21235"),
    ('Olivia', 'Davis', '1985-11-09', 'olivia.davis@example.com', '789 Pine Lane', 'Montreal', 'QC',"21235"),
    ('Ethan', 'Miller', '1990-09-30', 'ethan.miller@example.com', '101 Elm Boulevard', 'Calgary', 'AB',"21235"),
    ('Sophia', 'Anderson', '1987-03-18', 'sophia.anderson@example.com', '234 Cedar Road', 'Ottawa', 'ON',"21235"),
    ('Jackson', 'Smith', '1984-08-26', 'jackson.smith@example.com', '567 Birch Court', 'Edmonton', 'AB',"21235"),
    ('Ava', 'Martinez', '1995-01-12', 'ava.martinez@example.com', '890 Walnut Drive', 'Quebec City', 'QC',"21235"),
    ('Mason', 'Taylor', '1983-06-05', 'mason.taylor@example.com', '202 Spruce Street', 'Winnipeg', 'MB',"21235"),
    ('Harper', 'Wilson', '1998-12-20', 'harper.wilson@example.com', '345 Sycamore Avenue', 'Halifax', 'NS',"21235"),
    ('Liam', 'Johnson', '1982-10-08', 'liam.johnson@example.com', '678 Ash Lane', 'Saskatoon', 'SK',"21235");
    
INSERT INTO REGISTERED_USER 
VALUES 
	(1, 1, 1, 1),
    (2, 1, 1, 0),
    (3, 0, 1, 0),
    (4, 1, 1, 1);
    
INSERT INTO AIRLINE_AGENT 
VALUES 
	(5),
    (6);
    
INSERT INTO FLIGHT_ATTENDANT
VALUES 
	(7),
    (8),
    (9);
    
INSERT INTO SYSTEM_ADMIN 
VALUES 
	(10);
    
INSERT INTO FLIGHT_ATTENDANT_ASSIGNMENT (
	flightAttendantID,
    flightID
)
VALUES 
	(7, 1),
    (8, 2);
    
INSERT INTO BOOKING (
		flightID,
        firstName,
        lastName,
        email
)	
VALUES 
	(1, "Jim", "Terrance", "jim.terrance@example.com"),
    (2, "Mary", "Crawford", "mary.crawford@example.com");
    

    

    

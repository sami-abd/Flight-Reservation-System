/*
Populate database with sample records
*/
use companyensf608;
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
    time,
    aircraftID
)
VALUES 
	("YYZ", "YVR", "2023/12/20", "10:45:00", 1),
    ("YYC", "YEG", "2023/12/23", "16:20:00", 2),
	("YYC", "YEG", "2023/12/23", "10:45:00", 1),
    ("YYC", "YEG", "2023/12/23", "16:25:00", 2);
    
INSERT INTO USER (
    firstName,
    lastName,
    birthDate,
    email,
    street,
    city,
    province,
    password,
    userType
) 
VALUES 
    ('Emily', 'Thompson', '1989-07-15', 'emily.thompson@example.com', '123 Maple Street', 'Toronto', 'ON', "784215", "REGISTERED_USER"),
    ('Jacob', 'Rodriguez', '1992-04-23', 'jacob.rodriguez@example.com', '456 Oak Avenue', 'Vancouver', 'BC', "639870", "REGISTERED_USER"),
    ('Olivia', 'Davis', '1985-11-09', 'olivia.davis@example.com', '789 Pine Lane', 'Montreal', 'QC', "502346", "REGISTERED_USER"),
    ('Ethan', 'Miller', '1990-09-30', 'ethan.miller@example.com', '101 Elm Boulevard', 'Calgary', 'AB', "917582", "REGISTERED_USER"),
    ('Sophia', 'Anderson', '1987-03-18', 'sophia.anderson@example.com', '234 Cedar Road', 'Ottawa', 'ON', "364901", "REGISTERED_USER"),
    ('Jackson', 'Smith', '1984-08-26', 'jackson.smith@example.com', '567 Birch Court', 'Edmonton', 'AB', "125498", "AIRLINE_AGENT"),
    ('Ava', 'Martinez', '1995-01-12', 'ava.martinez@example.com', '890 Walnut Drive', 'Quebec City', 'QC', "876043", "FLIGHT_ATTENDANT"),
    ('Mason', 'Taylor', '1983-06-05', 'mason.taylor@example.com', '202 Spruce Street', 'Winnipeg', 'MB', "203719", "FLIGHT_ATTENDANT"),
    ('Harper', 'Wilson', '1998-12-20', 'harper.wilson@example.com', '345 Sycamore Avenue', 'Halifax', 'NS', "548306", "FLIGHT_ATTENDANT"),
    ('Liam', 'Johnson', '1982-10-08', 'liam.johnson@example.com', '678 Ash Lane', 'Saskatoon', 'SK', "690174", "SYSTEM_ADMIN");
    
UPDATE REGISTERED_USER
SET companyCard = 0, membership = 1, promotionAlert = 1
WHERE userID = 1;

UPDATE REGISTERED_USER
SET companyCard = 0, membership = 1, promotionAlert = 1
WHERE userID = 2;

UPDATE REGISTERED_USER
SET companyCard = 0, membership = 1, promotionAlert = 1
WHERE userID = 3;

UPDATE REGISTERED_USER
SET companyCard = 0, membership = 1, promotionAlert = 1
WHERE userID = 4;

UPDATE REGISTERED_USER
SET companyCard = 0, membership = 1, promotionAlert = 1
WHERE userID = 5;
    
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
        email,
        seatID,
        hasInsurance
)	
VALUES 
	(1, "Jim", "Terrance", "jim.terrance@example.com", 3, 1),
    (2, "Mary", "Crawford", "mary.crawford@example.com", 20, 0);
    

    

    

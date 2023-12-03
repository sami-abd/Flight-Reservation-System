-- BROWSE FLIGHTS 
SELECT* 
FROM FLIGHT
WHERE destination = "YVR"; -- user input

-- MAKE BOOKING 
INSERT INTO BOOKING (
		flightID,
        firstName,
        lastName,
        email,
        seatID,
        hasInsurance
)	
VALUES 
	(1, "Bob", "Turner", "bob.turner@example.com", 5, 1); -- user input
    
-- CANCEL FLIGHTS
DELETE FROM BOOKING WHERE bookingID = 1; -- user input 

-- BROWSE PASSENGER LIST BY AIRLINE_AGENT AND FLIGHT ATTENDANT
SELECT bookingID, firstName, LastName, email, seatID
FROM BOOKING 
WHERE flightID = 1; -- user input 

-- USER REGISTRATION 
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
    ('Carl', 'Bart', '1979-09-15', 'carl.bart@example.com', '123 Candy Street', 'Calgary', 'AB', "738315", "REGISTERED_USER"); -- user type depends on which function calls it.
    -- if user account is for FLIGHT_ATTENDANT, replace "REGISTERED_USER" with "FLIGHT_ATTENDANT".

-- USER REGISTRATION continued for REGISTERED_USER
SELECT userID 
FROM USER
WHERE email = "carl.bart@example.com"; -- read this value to determine which user to update preference setting for. 

UPDATE REGISTERED_USER
SET companyCard = 1, membership = 1, promotionAlert = 1 -- user input (TRUE(1), FALSE(0))
WHERE userID = 11; -- obtained from step before.

-- USER REGISTRATION continued for FLIGHT_ATTENDANT

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
    ('Mary', 'Lou', '2000-09-15', 'mary.lou@example.com', '123 Penny Circle', 'Calgary', 'AB', "723821", "FLIGHT_ATTENDANT"); 

-- FLIGHT_ATTENDANT register to work on a flight 

SELECT userID 
FROM USER
WHERE email = "mary.lou@example.com"; -- read this value to determine which flight attendant to sign up or remove from flight

INSERT INTO FLIGHT_ATTENDANT_ASSIGNMENT (
	flightAttendantID,
    flightID
)
VALUES 
	(11, 1);

-- FLIGHT_ATTENDANT remove from flight
DELETE FROM FLIGHT_ATTENDANT_ASSIGNMENT
WHERE flightAttendantID = 11 AND flightID = 1; -- user input 

-- DELETE USER 
DELETE FROM USER WHERE userID = 8; -- user to be deleted

-- SYSTEM_ADMIN STUFF -----------------
-- Browse flights id, origin, destination on a specified day
SELECT flightID, departure, destination, time
FROM FLIGHT
WHERE date = "2023-12-20"; -- user input

-- Browse list of crew on a flight
SELECT FLIGHT_ATTENDANT_ASSIGNMENT.flightAttendantID, USER.firstName, USER.lastName
FROM FLIGHT_ATTENDANT_ASSIGNMENT
JOIN USER ON FLIGHT_ATTENDANT_ASSIGNMENT.flightAttendantID = USER.userID
WHERE flightID = 1; -- user input 

-- Browse list of aircrafts a company owns 
SELECT companyID FROM COMPANY WHERE name = "WestJet"; -- read companyID from company name
SELECT aircraftID, name, capacity FROM AIRCRAFT WHERE companyID = 1; -- use the obtained companyID to retrieve list.

-- ADD or Remove Crew 
INSERT INTO FLIGHT_ATTENDANT_ASSIGNMENT (
	flightAttendantID,
    flightID
)
VALUES 
	(11, 1);

-- FLIGHT_ATTENDANT remove from flight
DELETE FROM FLIGHT_ATTENDANT_ASSIGNMENT
WHERE flightAttendantID = 11 AND flightID = 1; -- user input 

-- ADD / REMOVE FLIGHT 
-- add
INSERT INTO FLIGHT (
	departure,
    destination,
    date,
    time,
    aircraftID
)
VALUES 
	("YYZ", "YVR", "2023-12-20", "10:45:00", 1);
    





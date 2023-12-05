/*
Create entire FlightReservation Database
*/
drop database if exists companyensf608;
create database companyensf608;
use companyensf608;

DROP DATABASE IF EXISTS companyensf608;
CREATE DATABASE companyensf608;
USE companyensf608;

CREATE TABLE COMPANY (
	companyID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE AIRCRAFT (
	aircraftID INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    capacity INT NOT NULL,
    companyID INT NOT NULL,
    FOREIGN KEY (companyID) REFERENCES COMPANY(companyID) ON DELETE CASCADE
);

CREATE TABLE AIRPORT (
	airportID VARCHAR(50) PRIMARY KEY,
    city VARCHAR(50) NOT NULL
);

CREATE TABLE FLIGHT (
	flightID INT AUTO_INCREMENT PRIMARY KEY,
    departure VARCHAR(50) NOT NULL,
    FOREIGN KEY (departure) REFERENCES AIRPORT(airportID),
    destination VARCHAR(50) NOT NULL, 
    FOREIGN KEY (destination) REFERENCES AIRPORT(airportID),
    date DATE NOT NULL,
    time TIME NOT NULL,
    aircraftID INT NOT NULL,
	FOREIGN KEY (aircraftID) REFERENCES AIRCRAFT(aircraftID) ON DELETE CASCADE,
    Capacity INT NOT NULL
);AIRCRAFT

DELIMITER //
CREATE TRIGGER update_flight_capacity_trigger
BEFORE INSERT ON FLIGHT
FOR EACH ROW
BEGIN
    DECLARE flight_capacity INT;
    
    -- Retrieve the capacity from the corresponding AIRCRAFT
    SELECT capacity INTO flight_capacity
    FROM AIRCRAFT
    WHERE aircraftID = NEW.aircraftID;
    
    -- Update the capacity in the FLIGHT table
    SET NEW.capacity = flight_capacity;
END;
//
DELIMITER ;

CREATE TABLE SEAT (
	flightID INT NOT NULL,
    seatID INT NOT NULL,
    class VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    isAvailable TINYINT DEFAULT 1,
    PRIMARY KEY(flightID, seatID)
);

DELIMITER //

CREATE TRIGGER seat_update_after_flight_creation
AFTER INSERT ON FLIGHT
FOR EACH ROW
BEGIN
    DECLARE i INT DEFAULT 1;

    -- Loop to insert rows into SEAT based on the capacity of the plane
    WHILE i <= NEW.capacity DO
		IF i <= 0.2 * NEW.capacity THEN 
			INSERT INTO SEAT (flightID, seatID, class, price) VALUES (NEW.flightID, i, "Business", 200);
		ELSE IF i > 0.2 * NEW.capacity AND i <= 0.4 * NEW.capacity THEN 
			INSERT INTO SEAT (flightID, seatID, class, price) VALUES (NEW.flightID, i, "Comfort", 140);
		ELSE
			INSERT INTO SEAT (flightID, seatID, class, price) VALUES (NEW.flightID, i, "Ordinary", 100);
		END IF;
        END IF;
        SET i = i + 1;
    END WHILE;
END;
//

DELIMITER ;

-- Create trigger to automatically delete rows from SEAT when a record is deleted from PLANE
DELIMITER //

CREATE TRIGGER delete_seat_when_flight_removed
AFTER DELETE ON FLIGHT
FOR EACH ROW
BEGIN
    -- Delete rows from SEAT where planeID matches the deleted planeID
    DELETE FROM SEAT WHERE flightID = OLD.flightID;
END;
//

DELIMITER ;

CREATE TABLE USER (
	userID INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    birthDate DATE NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    street VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    province VARCHAR(50) NOT NULL,
    password INT NOT NULL,
    userType VARCHAR(50) NOT NULL
);

CREATE TABLE REGISTERED_USER (
	userID INT PRIMARY KEY,
    FOREIGN KEY (userID) REFERENCES USER(userID) ON DELETE CASCADE,
	companyCard TINYINT DEFAULT 0,
    membership TINYINT DEFAULT 0,
    promotionAlert TINYINT DEFAULT 1
);

CREATE TABLE AIRLINE_AGENT (
	userID INT PRIMARY KEY,
    FOREIGN KEY (userID) REFERENCES USER(userID) ON DELETE CASCADE
);

CREATE TABLE FLIGHT_ATTENDANT (
	userID INT PRIMARY KEY,
    FOREIGN KEY (userID) REFERENCES USER(userID) ON DELETE CASCADE
);

CREATE TABLE SYSTEM_ADMIN (
	userID INT PRIMARY KEY,
    FOREIGN KEY (userID) REFERENCES USER(userID) ON DELETE CASCADE
);

DELIMITER // 
CREATE TRIGGER usertype_assignment_after_user_added
AFTER INSERT ON USER
FOR EACH ROW
BEGIN 
	IF NEW.userType = "REGISTERED_USER" THEN
		INSERT INTO REGISTERED_USER (userID) VALUES (NEW.userID);
	ELSEIF NEW.userType = "AIRLINE_AGENT" THEN
		INSERT INTO AIRLINE_AGENT (userID) VALUES (NEW.userID);
	ELSEIF NEW.userType = "FLIGHT_ATTENDANT" THEN
		INSERT INTO FLIGHT_ATTENDANT (userID) VALUES (NEW.userID);
	ELSEIF NEW.userType = "SYSTEM_ADMIN" THEN
		INSERT INTO SYSTEM_ADMIN (userID) VALUES (NEW.userID);
	END IF;
END;
//
DELIMITER ;

CREATE TABLE FLIGHT_ATTENDANT_ASSIGNMENT (
	flightAttendantID INT,
    FOREIGN KEY (flightAttendantID) REFERENCES FLIGHT_ATTENDANT(userID) ON DELETE CASCADE,
    flightID INT,
    FOREIGN KEY (flightID) REFERENCES FLIGHT(flightID) ON DELETE CASCADE,
    PRIMARY KEY (flightAttendantID, flightID)
);

CREATE TABLE BOOKING (
	bookingID INT AUTO_INCREMENT PRIMARY KEY,
    flightID INT NOT NULL,
    FOREIGN KEY (flightID) REFERENCES FLIGHT(flightID),
    firstName VARCHAR(50) NOT NULL,
	lastName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    seatID INT,
    hasInsurance TINYINT NOT NULL
);

-- Create trigger to automatically make seat unavailable when a booking is created.
DELIMITER //
CREATE TRIGGER update_seat_after_booking_created
AFTER INSERT ON BOOKING
FOR EACH ROW
BEGIN
    UPDATE SEAT 
    SET isAvailable = 0
    WHERE flightID = NEW.flightID AND seatID = NEW.seatID;
END;
//
DELIMITER ;

-- Create trigger to automatically make seat available when a booking is cancelled.
DELIMITER //
CREATE TRIGGER update_seat_after_booking_cancelled
AFTER DELETE ON BOOKING
FOR EACH ROW
BEGIN
	UPDATE SEAT 
    SET isAvailable = 1
    WHERE flightID = OLD.flightID AND seatID = OLD.seatID;
END;
//
DELIMITER ;

-- Create trigger to check seat availability before booking is created
DELIMITER //

CREATE TRIGGER check_seat_availability_before_booking
BEFORE INSERT ON BOOKING
FOR EACH ROW
BEGIN
    DECLARE is_seat_available TINYINT;

    -- Check if the seat is available for the given flight
    SELECT isAvailable INTO is_seat_available
    FROM SEAT
    WHERE flightID = NEW.flightID AND seatID = NEW.seatID;

    -- If the seat is not available, raise an error or handle it according to your requirements
    IF is_seat_available = 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'The selected seat is not available for booking.';
    END IF;
END;
//
DELIMITER ;

ALTER TABLE booking
DROP FOREIGN KEY booking_ibfk_1;

ALTER TABLE booking
ADD CONSTRAINT booking_ibfk_1 
FOREIGN KEY (flightID) REFERENCES flight(flightID) ON DELETE CASCADE;



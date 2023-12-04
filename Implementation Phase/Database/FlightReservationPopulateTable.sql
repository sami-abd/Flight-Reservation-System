/*
Populate database with sample records
*/
use companyensf608;
<<<<<<< HEAD
=======

>>>>>>> 208386df00cb5516fd13c1acc50d4a0c8789549f
INSERT INTO COMPANY (name)
VALUES
	("WestJet"),
	("Air Canada"),
    ("Flair");
    
INSERT INTO AIRCRAFT (name, capacity, companyID)
VALUES
	("Airbus A320", 150, 1),
	("Boeing 787 Dreamliner", 240, 2),
	("Airbus A330", 300, 1),
	("Boeing 737 MAX", 230, 3),
	("Airbus A380", 555, 2),
	("Boeing 777", 400, 1),
	("Embraer E190", 100, 3),
	("Airbus A350", 325, 2),
	("Boeing 767", 250, 1),
	("Bombardier Q400", 78, 3),
	("Boeing 747", 467, 2),
	("Airbus A319", 124, 1),
	("Embraer E175", 88, 3),
	("Boeing 757", 239, 2),
	("Airbus A321", 200, 1),
	("Boeing 737-800", 189, 3),
	("Bombardier CRJ900", 76, 2),
	("Airbus A340", 375, 1),
	("Boeing 767-300", 218, 2),
	("Embraer E195", 118, 1);
    
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
    ('YYC', 'YEG', '2023-12-23', '20:41:00', 19),
	('YYC', 'YEG', '2023-12-23', '08:27:00', 9),
	('YYC', 'YEG', '2023-12-23', '18:05:00', 5),
	('YYC', 'YEG', '2023-12-23', '07:36:00', 12),
	('YYC', 'YEG', '2023-12-23', '20:41:00', 19),
	('YYZ', 'YHZ', '2023-12-23', '08:22:00', 9),
	('YUL', 'YYZ', '2023-12-23', '18:05:00', 5),
	('YHZ', 'YYC', '2023-12-23', '07:36:00', 12),
	('YWG', 'YEG', '2023-12-23', '22:16:00', 11),
	('YYC', 'YUL', '2024/08/14', '14:54:00', 6),
	('YVR', 'YWG', '2024/06/06', '11:43:00', 4),
	('YEG', 'YVR', '2024/04/07', '18:39:00', 16),
	('YWG', 'YOW', '2024/05/21', '03:36:00', 18),
	('YUL', 'YYC', '2024/02/18', '05:16:00', 12),
	('YUL', 'YOW', '2024/05/03', '20:47:00', 5),
	('YHZ', 'YYZ', '2024/07/07', '01:57:00', 3),
	('YOW', 'YHZ', '2024/11/30', '10:06:00', 13),
	('YYZ', 'YVR', '2024/05/09', '12:16:00', 5),
	('YEG', 'YYZ', '2024/08/27', '19:38:00', 2),
	('YYZ', 'YUL', '2024/04/25', '04:36:00', 8),
	('YVR', 'YWG', '2024/09/02', '17:03:00', 17),
	('YOW', 'YEG', '2024/01/13', '21:43:00', 14),
	('YWG', 'YHZ', '2024/07/11', '03:12:00', 11),
	('YYC', 'YVR', '2024/06/25', '09:39:00', 5),
	('YHZ', 'YYC', '2024/03/22', '13:37:00', 17),
	('YYZ', 'YWG', '2024/08/04', '06:24:00', 20),
	('YVR', 'YEG', '2024/11/06', '14:52:00', 9),
	('YUL', 'YWG', '2024/02/02', '01:34:00', 15),
	('YUL', 'YVR', '2024/10/24', '09:10:00', 16),
	('YEG', 'YUL', '2024/06/13', '20:32:00', 8),
	('YYC', 'YOW', '2024/04/15', '05:20:00', 15),
	('YWG', 'YYC', '2024/03/04', '18:52:00', 19),
	('YVR', 'YYC', '2024/01/01', '06:59:00', 7),
	('YYC', 'YHZ', '2024/05/27', '11:40:00', 13),
	('YOW', 'YYZ', '2024/06/30', '08:17:00', 19),
	('YUL', 'YHZ', '2024/02/21', '17:59:00', 11),
	('YHZ', 'YUL', '2024/04/04', '14:14:00', 1),
	('YYZ', 'YEG', '2024/03/19', '02:28:00', 17),
	('YUL', 'YVR', '2024/08/09', '12:52:00', 18),
	('YYC', 'YWG', '2024/01/09', '19:31:00', 10),
	('YVR', 'YUL', '2024/11/18', '04:00:00', 12),
	('YOW', 'YEG', '2024/02/27', '09:48:00', 14),
	('YWG', 'YYZ', '2024/09/25', '18:14:00', 6),
	('YHZ', 'YWG', '2024/11/12', '23:35:00', 13),
	('YYZ', 'YUL', '2024/04/12', '06:04:00', 18),
	('YUL', 'YHZ', '2024/06/07', '10:50:00', 20),
	('YWG', 'YVR', '2024/12/13', '15:21:00', 10),
	('YVR', 'YYC', '2024/07/18', '02:30:00', 4),
	('YYC', 'YOW', '2024/05/12', '16:48:00', 16),
	('YEG', 'YYZ', '2024/11/23', '21:06:00', 12),
	('YHZ', 'YYZ', '2024/08/21', '14:27:00', 15),
	('YWG', 'YVR', '2024/02/10', '03:43:00', 9),
	('YYZ', 'YUL', '2024/09/08', '09:18:00', 8),
	('YUL', 'YVR', '2024/10/31', '13:52:00', 6),
	('YVR', 'YYC', '2024/06/19', '20:27:00', 14),
	('YEG', 'YOW', '2024/04/26', '07:16:00', 7),
	('YYC', 'YHZ', '2024/01/26', '22:54:00', 16),
	('YOW', 'YWG', '2024/03/28', '04:24:00', 10),
	('YHZ', 'YYZ', '2024/09/15', '10:44:00', 10),
	('YYZ', 'YVR', '2024/08/03', '18:30:00', 8),
	('YVR', 'YYZ', '2024/07/24', '11:11:00', 12),
	('YEG', 'YYC', '2024/05/30', '04:00:00', 18),
	('YVR', 'YUL', '2024/09/30', '15:23:00', 13),
	('YUL', 'YEG', '2024/03/17', '07:12:00', 10),
	('YYC', 'YVR', '2024/10/02', '19:45:00', 16),
	('YOW', 'YHZ', '2024/01/20', '12:34:00', 8),
	('YYZ', 'YWG', '2024/07/02', '08:56:00', 19),
	('YHZ', 'YVR', '2024/04/29', '02:48:00', 14),
	('YWG', 'YYC', '2024/11/09', '16:07:00', 5),
	('YEG', 'YUL', '2024/08/11', '21:59:00', 18),
	('YYC', 'YUL', '2024/05/15', '10:21:00', 11),
	('YUL', 'YHZ', '2024/02/06', '14:40:00', 2),
	('YOW', 'YYC', '2024/06/23', '03:55:00', 7),
	('YVR', 'YOW', '2024/09/13', '18:09:00', 15),
	('YEG', 'YVR', '2024/01/29', '09:27:00', 12),
	('YWG', 'YUL', '2024/03/31', '22:38:00', 9),
	('YYZ', 'YHZ', '2024/08/26', '11:16:00', 6),
	('YUL', 'YYC', '2024/07/05', '13:32:00', 17),
	('YHZ', 'YYC', '2024/04/17', '16:47:00', 3),
	('YOW', 'YEG', '2024/02/14', '05:04:00', 20),
	('YYC', 'YHZ', '2024/10/11', '20:20:00', 4),
	('YVR', 'YEG', '2024/12/04', '08:29:00', 1),
	('YUL', 'YWG', '2024/06/30', '01:44:00', 13),
	('YHZ', 'YUL', '2024/03/25', '17:54:00', 16),
	('YWG', 'YOW', '2024/11/16', '10:07:00', 14),
	('YYZ', 'YVR', '2024/09/19', '19:18:00', 5),
	('YVR', 'YYZ', '2024/11/27', '10:39:00', 18),
	('YEG', 'YOW', '2024/01/07', '14:51:00', 9),
	('YYC', 'YHZ', '2024/06/11', '03:02:00', 15),
	('YOW', 'YYZ', '2024/05/24', '08:26:00', 1),
	('YUL', 'YHZ', '2024/10/18', '21:47:00', 10),
	('YHZ', 'YYZ', '2024/12/17', '12:08:00', 7),
	('YYZ', 'YUL', '2024/11/02', '04:23:00', 2),
	('YUL', 'YVR', '2024/01/15', '09:10:00', 16),
	('YVR', 'YEG', '2024/03/08', '18:45:00', 5),
	('YEG', 'YYC', '2024/05/02', '12:20:00', 12),
	('YYC', 'YHZ', '2023/12/28', '21:05:00', 3),
	('YHZ', 'YOW', '2024/02/17', '08:15:00', 19),
	('YOW', 'YWG', '2024/04/05', '15:50:00', 7),
	('YWG', 'YYZ', '2024/06/19', '06:40:00', 14),
	('YVR', 'YUL', '2024/09/30', '15:23:00', 13),
	('YUL', 'YEG', '2024/03/17', '07:12:00', 10),
	('YYC', 'YVR', '2024/10/02', '19:45:00', 16),
	('YOW', 'YHZ', '2024/01/20', '12:34:00', 8),
	('YYZ', 'YWG', '2024/07/02', '08:56:00', 19),
	('YHZ', 'YVR', '2024/04/29', '02:48:00', 14),
	('YWG', 'YYC', '2024/11/09', '16:07:00', 5),
	('YEG', 'YUL', '2024/08/11', '21:59:00', 18),
	('YYC', 'YUL', '2024/05/15', '10:21:00', 11),
	('YUL', 'YHZ', '2024/02/06', '14:40:00', 2),
	('YOW', 'YYC', '2024/06/23', '03:55:00', 7),
	('YVR', 'YOW', '2024/09/13', '18:09:00', 15),
	('YEG', 'YVR', '2024/01/29', '09:27:00', 12),
	('YWG', 'YUL', '2024/03/31', '22:38:00', 9),
	('YYZ', 'YHZ', '2024/08/26', '11:16:00', 6),
	('YUL', 'YYC', '2024/07/05', '13:32:00', 17),
	('YHZ', 'YYC', '2024/04/17', '16:47:00', 3),
	('YOW', 'YEG', '2024/02/14', '05:04:00', 20),
	('YYC', 'YHZ', '2024/10/11', '20:20:00', 4),
	('YVR', 'YEG', '2024/12/04', '08:29:00', 1),
    ('YOW', 'YYZ', '2024/08/20', '14:30:00', 8),
	('YEG', 'YOW', '2024/02/14', '05:04:00', 20),
	('YUL', 'YVR', '2024/12/20', '09:00:00', 17),
	('YYZ', 'YHZ', '2024/10/15', '14:15:00', 6),
	('YVR', 'YUL', '2024/06/02', '23:30:00', 10),
	('YWG', 'YEG', '2024/08/01', '17:45:00', 11),
	('YYC', 'YOW', '2024/03/12', '11:20:00', 2),
	('YHZ', 'YYC', '2024/09/07', '08:55:00', 13),
	('YWG', 'YYZ', '2024/01/28', '16:40:00', 19),
	('YUL', 'YEG', '2024/05/25', '06:05:00', 16),
	('YYC', 'YHZ', '2024/07/23', '01:50:00', 3),
	('YOW', 'YVR', '2024/11/18', '20:15:00', 7),
	('YVR', 'YYC', '2024/02/08', '09:30:00', 18),
	('YEG', 'YUL', '2024/10/05', '13:55:00', 15),
	('YYC', 'YVR', '2024/04/20', '03:10:00', 14),
	('YOW', 'YHZ', '2024/06/15', '22:25:00', 5),
	('YUL', 'YWG', '2024/09/28', '18:50:00', 1),
	('YWG', 'YYC', '2024/03/02', '14:00:00', 17),
	('YVR', 'YYZ', '2024/12/10', '10:35:00', 9),
	('YUL', 'YOW', '2024/07/05', '08:10:00', 4),
	('YHZ', 'YUL', '2024/01/18', '02:45:00', 12),
	('YYZ', 'YEG', '2024/04/13', '21:20:00', 8),
	('YUL', 'YVR', '2024/11/26', '12:55:00', 16),
	('YVR', 'YUL', '2024/06/13', '07:30:00', 19),
	('YEG', 'YYC', '2024/08/17', '16:45:00', 10),
	('YYC', 'YWG', '2024/02/01', '11:10:00', 14),
	('YHZ', 'YYZ', '2024/09/26', '05:35:00', 18),
	('YOW', 'YUL', '2024/03/20', '20:00:00', 13),
	('YWG', 'YVR', '2024/11/03', '08:25:00', 20),
	('YVR', 'YHZ', '2024/05/08', '03:50:00', 15),
	('YYZ', 'YUL', '2024/07/02', '23:15:00', 9),
	('YUL', 'YEG', '2024/01/09', '13:40:00', 7),
	('YVR', 'YEG', '2024/04/25', '06:05:00', 2),
	('YEG', 'YYC', '2024/10/20', '17:30:00', 16),
	('YYC', 'YOW', '2024/08/07', '12:55:00', 5),
	('YHZ', 'YYC', '2024/03/12', '20:20:00', 19),
	('YWG', 'YYZ', '2024/12/29', '10:45:00', 1),
	('YUL', 'YEG', '2024/09/30', '14:10:00', 6),
	('YOW', 'YVR', '2024/06/07', '04:35:00', 4),
	('YVR', 'YYC', '2024/01/02', '09:00:00', 12),
	('YEG', 'YUL', '2024/04/05', '14:25:00', 15),
	('YYC', 'YVR', '2024/11/02', '05:50:00', 3),
	('YHZ', 'YUL', '2024/08/27', '17:15:00', 11),
	('YWG', 'YYC', '2024/02/20', '21:40:00', 17),
	('YVR', 'YYZ', '2024/10/24', '12:05:00', 20),
	('YUL', 'YOW', '2024/06/17', '09:30:00', 14),
	('YHZ', 'YWG', '2024/12/14', '04:55:00', 10),
	('YYZ', 'YVR', '2024/07/11', '00:20:00', 7),
	('YVR', 'YYZ', '2024/05/14', '19:45:00', 16),
	('YEG', 'YOW', '2024/02/27', '11:10:00', 5),
	('YYC', 'YHZ', '2024/09/23', '22:35:00', 2),
	('YOW', 'YYZ', '2024/04/19', '07:00:00', 19),
	('YUL', 'YHZ', '2024/11/11', '15:25:00', 18),
	('YHZ', 'YYZ', '2024/03/17', '04:50:00', 8),
	('YYZ', 'YEG', '2024/08/12', '20:15:00', 17),
	('YUL', 'YVR', '2024/01/29', '01:40:00', 12),
	('YVR', 'YUL', '2024/10/27', '10:05:00', 10),
	('YEG', 'YYC', '2024/06/23', '04:30:00', 6);

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
	('Emily', 'Thompson', '1989/07/15', 'emily.thompson@example.com', '123 Maple Street', 'Toronto', 'ON', '784215', 'REGISTERED_USER'),
	('Matthew', 'Williams', '1985/02/23', 'matthew.williams@example.com', '456 Oak Avenue', 'Vancouver', 'BC', '598734', 'REGISTERED_USER'),
	('Olivia', 'Johnson', '1992/11/08', 'olivia.johnson@example.com', '789 Pine Road', 'Montreal', 'QC', '365821', 'FLIGHT_ATTENDANT'),
	('Daniel', 'Brown', '1987/05/12', 'daniel.brown@example.com', '567 Elm Lane', 'Calgary', 'AB', '952468', 'REGISTERED_USER'),
	('Ava', 'Miller', '1983/09/30', 'ava.miller@example.com', '890 Cedar Boulevard', 'Edmonton', 'AB', '741596', 'FLIGHT_ATTENDANT'),
	('Jackson', 'Davis', '1995/04/17', 'jackson.davis@example.com', '234 Birch Street', 'Ottawa', 'ON', '623487', 'REGISTERED_USER'),
	('Sophia', 'Martinez', '1986/12/05', 'sophia.martinez@example.com', '678 Pinecrest Drive', 'Winnipeg', 'MB', '854219', 'FLIGHT_ATTENDANT'),
	('Liam', 'Taylor', '1990/08/20', 'liam.taylor@example.com', '901 Willow Lane', 'Quebec City', 'QC', '369874', 'REGISTERED_USER'),
	('Ella', 'Anderson', '1984/03/14', 'ella.anderson@example.com', '345 Cedar Avenue', 'Halifax', 'NS', '487512', 'AIRLINE_AGENT'),
	('Noah', 'Moore', '1998/06/28', 'noah.moore@example.com', '123 Pinecrest Drive', 'Victoria', 'BC', '215634', 'REGISTERED_USER'),
	('Emma', 'Smith', '1993/10/05', 'emma.smith@example.com', '456 Birch Lane', 'Hamilton', 'ON', '365874', 'REGISTERED_USER'),
	('Mason', 'Johnson', '1988/04/18', 'mason.johnson@example.com', '789 Oak Street', 'Saskatoon', 'SK', '521469', 'FLIGHT_ATTENDANT'),
	('Aria', 'Brown', '1991/01/27', 'aria.brown@example.com', '234 Cedar Avenue', 'Regina', 'SK', '698742', 'REGISTERED_USER'),
	('Ethan', 'Miller', '1986/07/09', 'ethan.miller@example.com', '890 Maple Drive', 'Charlottetown', 'PE', '487596', 'REGISTERED_USER'),
	('Isabella', 'Davis', '1994/03/21', 'isabella.davis@example.com', '567 Elm Street', 'Fredericton', 'NB', '325874', 'FLIGHT_ATTENDANT'),
	('Liam', 'Anderson', '1982/12/14', 'liam.anderson@example.com', '901 Pine Road', 'Whitehorse', 'YT', '752413', 'REGISTERED_USER'),
	('Sophie', 'Taylor', '1989/08/29', 'sophie.taylor@example.com', '678 Willow Lane', 'Yellowknife', 'NT', '619837', 'FLIGHT_ATTENDANT'),
	('Noah', 'Martinez', '1996/05/02', 'noah.martinez@example.com', '123 Cedar Boulevard', 'Iqaluit', 'NU', '874596', 'REGISTERED_USER'),
	('Ava', 'Williams', '1984/11/16', 'ava.williams@example.com', '890 Oak Lane', 'St. Johns', 'NL', '452187', 'AIRLINE_AGENT'),
	('Jackson', 'Moore', '1997/06/09', 'jackson.moore@example.com', '345 Birch Drive', 'Halifax', 'NS', '963214', 'REGISTERED_USER'),
	('Grace', 'Harris', '1983/09/12', 'grace.harris@example.com', '567 Willow Street', 'Winnipeg', 'MB', '214365', 'REGISTERED_USER'),
	('Logan', 'Turner', '1990/02/25', 'logan.turner@example.com', '901 Cedar Drive', 'Calgary', 'AB', '598743', 'FLIGHT_ATTENDANT'),
	('Zoe', 'Collins', '1985/06/08', 'zoe.collins@example.com', '234 Pine Road', 'Toronto', 'ON', '874521', 'REGISTERED_USER'),
	('Carter', 'Smith', '1993/01/17', 'carter.smith@example.com', '678 Birch Lane', 'Vancouver', 'BC', '365874', 'REGISTERED_USER'),
	('Owen', 'Turner', '1995/04/04', 'owen.turner@example.com', '123 Cedar Drive', 'Edmonton', 'AB', '487596', 'REGISTERED_USER'),
	('Hazel', 'Lewis', '1986/11/21', 'hazel.lewis@example.com', '456 Willow Boulevard', 'Ottawa', 'ON', '632574', 'FLIGHT_ATTENDANT'),
	('Henry', 'Clark', '1991/08/14', 'henry.clark@example.com', '789 Pine Lane', 'Quebec City', 'QC', '965874', 'REGISTERED_USER'),
	('Nora', 'Adams', '1984/03/01', 'nora.adams@example.com', '234 Elm Street', 'Halifax', 'NS', '741369', 'AIRLINE_AGENT'),
	('Leo', 'Garcia', '1998/05/23', 'leo.garcia@example.com', '901 Cedar Lane', 'Victoria', 'BC', '528147', 'REGISTERED_USER'),
	('Chloe', 'Baker', '1992/12/07', 'chloe.baker@example.com', '567 Maple Lane', 'Charlottetown', 'PE', '147896', 'REGISTERED_USER'),
	('Elijah', 'Green', '1988/05/19', 'elijah.green@example.com', '890 Oak Street', 'Fredericton', 'NB', '369874', 'FLIGHT_ATTENDANT'),
	('Avery', 'Adams', '1983/02/02', 'avery.adams@example.com', '234 Pine Road', 'Iqaluit', 'NU', '785421', 'SYSTEM_ADMIN'),
	('Mia', 'Hill', '1994/09/14', 'mia.hill@example.com', '901 Willow Drive', 'Saskatoon', 'SK', '632587', 'SYSTEM_ADMIN'),
	('Mason', 'Turner', '1986/03/28', 'mason.turner@example.com', '567 Elm Avenue', 'St. Johns', 'NL', '215487', 'FLIGHT_ATTENDANT'),
	('Ella', 'Lewis', '1995/10/11', 'ella.lewis@example.com', '890 Cedar Lane', 'Whitehorse', 'YT', '478596', 'REGISTERED_USER'),
	('Oliver', 'White', '1989/07/25', 'oliver.white@example.com', '123 Birch Lane', 'Yellowknife', 'NT', '965874', 'FLIGHT_ATTENDANT'),
	('Aria', 'Jones', '1992/04/03', 'aria.jones@example.com', '456 Pine Drive', 'Halifax', 'NS', '321654', 'REGISTERED_USER'),
	('Ethan', 'Garcia', '1985/11/16', 'ethan.garcia@example.com', '789 Willow Street', 'Victoria', 'BC', '785214', 'REGISTERED_USER'),
	('Isabella', 'King', '1998/08/29', 'isabella.king@example.com', '901 Cedar Avenue', 'Calgary', 'AB', '632145', 'AIRLINE_AGENT'),
	('Liam', 'Wilson', '1984/03/12', 'liam.wilson@example.com', '234 Oak Drive', 'Montreal', 'QC', '415872', 'FLIGHT_ATTENDANT'),
	('Ava', 'Thompson', '1987/09/06', 'ava.thompson@example.com', '567 Cedar Lane', 'Toronto', 'ON', '987654', 'REGISTERED_USER'),
	('Jackson', 'Harris', '1996/06/23', 'jackson.harris@example.com', '890 Pine Road', 'Vancouver', 'BC', '321487', 'REGISTERED_USER'),
	('Sophia', 'Collins', '1982/12/17', 'sophia.collins@example.com', '123 Elm Street', 'Ottawa', 'ON', '632874', 'FLIGHT_ATTENDANT'),
	('Noah', 'Cooper', '1989/05/30', 'noah.cooper@example.com', '456 Birch Lane', 'Quebec City', 'QC', '874596', 'REGISTERED_USER'),
	('Emma', 'Lewis', '1995/02/13', 'emma.lewis@example.com', '678 Oak Avenue', 'Winnipeg', 'MB', '258741', 'REGISTERED_USER'),
	('Logan', 'Baker', '1986/09/26', 'logan.baker@example.com', '901 Pine Drive', 'Calgary', 'AB', '365874', 'FLIGHT_ATTENDANT'),
	('Zoe', 'Garcia', '1991/04/09', 'zoe.garcia@example.com', '234 Cedar Lane', 'Montreal', 'QC', '987654', 'REGISTERED_USER'),
	('Carter', 'Fisher', '1987/11/02', 'carter.fisher@example.com', '567 Willow Street', 'Vancouver', 'BC', '632145', 'AIRLINE_AGENT'),
	('Aubrey', 'White', '1994/07/15', 'aubrey.white@example.com', '890 Maple Road', 'Ottawa', 'ON', '741369', 'SYSTEM_ADMIN'),
	('Owen', 'Smith', '1983/03/31', 'owen.smith@example.com', '123 Cedar Lane', 'Saskatoon', 'SK', '852147', 'FLIGHT_ATTENDANT'),
	('Hazel', 'Turner', '1988/10/24', 'hazel.turner@example.com', '456 Elm Drive', 'Regina', 'SK', '365874', 'REGISTERED_USER'),
	('Henry', 'Wright', '1995/07/07', 'henry.wright@example.com', '789 Pine Road', 'Charlottetown', 'PE', '147896', 'REGISTERED_USER'),
	('Nora', 'Collins', '1981/01/18', 'nora.collins@example.com', '901 Maple Lane', 'Fredericton', 'NB', '965874', 'FLIGHT_ATTENDANT'),
	('Leo', 'Thompson', '1990/08/03', 'leo.thompson@example.com', '234 Cedar Drive', 'Whitehorse', 'YT', '369874', 'REGISTERED_USER'),
	('Chloe', 'Johnson', '1997/05/16', 'chloe.johnson@example.com', '567 Pine Street', 'Yellowknife', 'NT', '632145', 'REGISTERED_USER'),
	('Elijah', 'Baker', '1984/12/29', 'elijah.baker@example.com', '890 Willow Lane', 'Iqaluit', 'NU', '785214', 'FLIGHT_ATTENDANT'),
	('Avery', 'Garcia', '1989/09/11', 'avery.garcia@example.com', '123 Maple Drive', 'Halifax', 'NS', '874596', 'REGISTERED_USER'),
	('Mia', 'Clark', '1993/04/04', 'mia.clark@example.com', '456 Pine Lane', 'Victoria', 'BC', '321487', 'REGISTERED_USER'),
	('Mason', 'Hill', '1986/11/17', 'mason.hill@example.com', '901 Cedar Drive', 'Calgary', 'AB', '632874', 'FLIGHT_ATTENDANT'),
	('Ella', 'Wilson', '1995/06/30', 'ella.wilson@example.com', '567 Elm Avenue', 'Montreal', 'QC', '365874', 'REGISTERED_USER'),
	('Oliver', 'Collins', '1989/01/23', 'oliver.collins@example.com', '890 Pine Road', 'Vancouver', 'BC', '987654', 'FLIGHT_ATTENDANT'),
	('Aria', 'Cooper', '1992/08/15', 'aria.cooper@example.com', '123 Cedar Lane', 'Ottawa', 'ON', '365874', 'REGISTERED_USER'),
    ('Isabella', 'Hill', '1990/12/07', 'isabella.hill@example.com', '567 Cedar Drive', 'Winnipeg', 'MB', '632874', 'SYSTEM_ADMIN'),
	('Sophia', 'Garcia', '1992/04/13', 'sophia.garcia@example.com', '234 Pine Road', 'Montreal', 'QC', '987654', 'FLIGHT_ATTENDANT'),
	('Noah', 'Fisher', '1987/11/26', 'noah.fisher@example.com', '678 Cedar Lane', 'Toronto', 'ON', '632145', 'REGISTERED_USER'),
	('Emma', 'Harris', '1995/07/09', 'emma.harris@example.com', '890 Birch Lane', 'Vancouver', 'BC', '741369', 'REGISTERED_USER'),
	('Jackson', 'Thompson', '1982/02/22', 'jackson.thompson@example.com', '123 Maple Drive', 'Ottawa', 'ON', '365874', 'FLIGHT_ATTENDANT'),
	('Aria', 'Baker', '1989/09/15', 'aria.baker@example.com', '456 Pinecrest Drive', 'Winnipeg', 'MB', '852147', 'REGISTERED_USER'),
	('Ethan', 'Martinez', '1994/04/28', 'ethan.martinez@example.com', '789 Oak Street', 'Calgary', 'AB', '321487', 'REGISTERED_USER'),
	('Olivia', 'Turner', '1986/11/01', 'olivia.turner@example.com', '901 Cedar Avenue', 'Halifax', 'NS', '963214', 'FLIGHT_ATTENDANT'),
	('Ava', 'White', '1993/06/14', 'ava.white@example.com', '234 Maple Lane', 'Victoria', 'BC', '147896', 'REGISTERED_USER'),
	('Mason', 'Jones', '1983/03/27', 'mason.jones@example.com', '567 Pine Road', 'Saskatoon', 'SK', '874596', 'FLIGHT_ATTENDANT'),
	('Ella', 'Collins', '1990/10/10', 'ella.collins@example.com', '890 Elm Avenue', 'Regina', 'SK', '632874', 'REGISTERED_USER'),
	('Henry', 'Hill', '1985/05/23', 'henry.hill@example.com', '123 Cedar Lane', 'Charlottetown', 'PE', '365874', 'REGISTERED_USER'),
	('Sophie', 'Lewis', '1998/02/16', 'sophie.lewis@example.com', '456 Pinecrest Drive', 'Fredericton', 'NB', '874596', 'FLIGHT_ATTENDANT'),
	('Noah', 'Turner', '1984/09/30', 'noah.turner@example.com', '901 Cedar Avenue', 'St. Johns', 'NL', '321487', 'REGISTERED_USER'),
	('Emma', 'Baker', '1991/04/12', 'emma.baker@example.com', '234 Willow Lane', 'Whitehorse', 'YT', '852147', 'REGISTERED_USER'),
	('Liam', 'Garcia', '1996/12/25', 'liam.garcia@example.com', '567 Elm Street', 'Yellowknife', 'NT', '147896', 'FLIGHT_ATTENDANT'),
	('Ava', 'Taylor', '1981/01/08', 'ava.taylor@example.com', '890 Maple Drive', 'Iqaluit', 'NU', '874596', 'REGISTERED_USER'),
	('Oliver', 'Smith', '1988/08/22', 'oliver.smith@example.com', '123 Cedar Lane', 'Halifax', 'NS', '963214', 'REGISTERED_USER'),
	('Chloe', 'Collins', '1995/03/07', 'chloe.collins@example.com', '456 Pine Road', 'Victoria', 'BC', '632874', 'FLIGHT_ATTENDANT'),
	('Elijah', 'Turner', '1982/10/20', 'elijah.turner@example.com', '901 Maple Lane', 'Calgary', 'AB', '365874', 'REGISTERED_USER'),
	('Avery', 'Miller', '1989/07/03', 'avery.miller@example.com', '234 Cedar Avenue', 'Montreal', 'QC', '741369', 'AIRLINE_AGENT'),
	('Mia', 'Martinez', '1994/04/16', 'mia.martinez@example.com', '567 Elm Drive', 'Toronto', 'ON', '321487', 'REGISTERED_USER'),
	('Mason', 'White', '1986/11/29', 'mason.white@example.com', '890 Pine Road', 'Vancouver', 'BC', '852147', 'REGISTERED_USER'),
	('Ella', 'Harris', '1995/06/12', 'ella.harris@example.com', '123 Willow Lane', 'Ottawa', 'ON', '147896', 'FLIGHT_ATTENDANT'),
	('Oliver', 'Taylor', '1989/01/25', 'oliver.taylor@example.com', '456 Cedar Avenue', 'Winnipeg', 'MB', '365874', 'REGISTERED_USER'),
	('Aria', 'Collins', '1992/08/08', 'aria.collins@example.com', '901 Maple Drive', 'Calgary', 'AB', '632874', 'FLIGHT_ATTENDANT'),
	('Ethan', 'Baker', '1987/04/01', 'ethan.baker@example.com', '234 Pine Road', 'Toronto', 'ON', '741369', 'REGISTERED_USER'),
	('Isabella', 'Lewis', '1994/11/14', 'isabella.lewis@example.com', '567 Elm Lane', 'Vancouver', 'BC', '365874', 'REGISTERED_USER'),
	('Liam', 'Turner', '1982/06/27', 'liam.turner@example.com', '890 Willow Lane', 'Montreal', 'QC', '852147', 'FLIGHT_ATTENDANT'),
	('Sophia', 'Hill', '1990/03/10', 'sophia.hill@example.com', '123 Cedar Avenue', 'Calgary', 'AB', '365874', 'REGISTERED_USER'),
	('Noah', 'Garcia', '1985/10/23', 'noah.garcia@example.com', '456 Maple Lane', 'Edmonton', 'AB', '741369', 'REGISTERED_USER'),
	('Emma', 'Thompson', '1992/05/06', 'emma.thompson@example.com', '789 Oak Street', 'Halifax', 'NS', '632874', 'FLIGHT_ATTENDANT'),
	('Jackson', 'Clark', '1987/12/19', 'jackson.clark@example.com', '234 Cedar Lane', 'Victoria', 'BC', '365874', 'REGISTERED_USER'),
	('Aria', 'Moore', '1995/07/02', 'aria.moore@example.com', '901 Maple Drive', 'Calgary', 'AB', '852147', 'REGISTERED_USER'),
	('Ethan', 'Taylor', '1983/04/15', 'ethan.taylor@example.com', '567 Pine Road', 'Montreal', 'QC', '365874', 'FLIGHT_ATTENDANT'),
	('Olivia', 'White', '1998/11/28', 'olivia.white@example.com', '890 Cedar Lane', 'Toronto', 'ON', '741369', 'REGISTERED_USER'),
	('Liam', 'Collins', '1986/06/11', 'liam.collins@example.com', '123 Maple Drive', 'Vancouver', 'BC', '632874', 'REGISTERED_USER'),
	('Ava', 'Martinez', '1991/03/24', 'ava.martinez@example.com', '456 Elm Avenue', 'Ottawa', 'ON', '365874', 'FLIGHT_ATTENDANT'),
	('Henry', 'Turner', '1981/02/02', 'henry.turner@example.com', '567 Pinecrest Drive', 'Halifax', 'NS', '741369', 'AIRLINE_AGENT'),
	('Sophie', 'Baker', '1994/09/15', 'sophie.baker@example.com', '890 Elm Lane', 'Victoria', 'BC', '365874', 'REGISTERED_USER'),
	('Noah', 'Collins', '1987/04/18', 'noah.collins@example.com', '123 Cedar Lane', 'Saskatoon', 'SK', '852147', 'REGISTERED_USER'),
	('Sophia', 'Taylor', '1996/01/17', 'sophia.taylor@example.com', '234 Maple Drive', 'Whitehorse', 'YT', '365874', 'REGISTERED_USER'),
	('Emma', 'Clark', '1993/03/13', 'emma.clark@example.com', '890 Elm Lane', 'Iqaluit', 'NU', '365874', 'REGISTERED_USER'),
	('Liam', 'Hill', '1988/10/26', 'liam.hill@example.com', '123 Pine Road', 'Halifax', 'NS', '741369', 'REGISTERED_USER');
    
    
INSERT INTO FLIGHT_ATTENDANT_ASSIGNMENT (
	flightAttendantID,
    flightID
)
VALUES 
(3, 4), (5, 10), (7, 15), (12, 12), (15, 1), (17, 18), (22, 3), (26, 16), (31, 8), (34, 6), (36, 11), (40, 13), (43, 7), (46, 20), (50, 2), (53, 19), (56, 9), (59, 5), (61, 17), (64, 14), (67, 20), (70, 1), (72, 10), (75, 16), (78, 12), (81, 6), (86, 13), (88, 3), (91, 7), (94, 18), (97, 14), (100, 9), (3, 19), (5, 6), (7, 3), (12, 8), (15, 13), (17, 16), (22, 9), (26, 4), (31, 20), (34, 2), (36, 5), (40, 11), (43, 1), (46, 12), (50, 15), (53, 7), (56, 10), (59, 14), (64, 18), (67, 3), (70, 8), (72, 6), (78, 13), (81, 1), (86, 20), (88, 9), (91, 4), (94, 19), (97, 2), (100, 15), (3, 7), (5, 12), (7, 9), (12, 13), (15, 3), (22, 19), (26, 10), (31, 5), (34, 8), (40, 18), (46, 2), (50, 20), (53, 14), (56, 15), (59, 6), (61, 4), (64, 17), (67, 13), (70, 3), (72, 9), (75, 12), (78, 7), (81, 16), (86, 10), (88, 5), (91, 1), (94, 20), (97, 19), (100, 8);



INSERT INTO BOOKING (
		flightID,
        firstName,
        lastName,
        email,
        seatID,
        hasInsurance
)	
VALUES 
	( 3, 'Emily', 'Thompson','emily.thompson@example.com', 120, 1),
    ( 1, 'Emily', 'Thompson','emily.thompson@example.com', 100, 1),
	(3, "Emily", "Johnson", "emily.johnson@example.com", 42, 1),
	(12, "Jacob", "Miller", "jacob.miller@example.com", 15, 0),
	(7, "Olivia", "Smith", "olivia.smith@example.com", 78, 1),
	(19, "Ethan", "Davis", "ethan.davis@example.com", 54, 0),
	(5, "Ava", "Brown", "ava.brown@example.com", 91, 1),
	(14, "Sophia", "Martinez", "sophia.martinez@example.com", 26, 0),
	(2, "Logan", "Taylor", "logan.taylor@example.com", 63, 1),
	(10, "Madison", "Anderson", "madison.anderson@example.com", 37, 0),
	(17, "Liam", "Hernandez", "liam.hernandez@example.com", 84, 1),
	(8, "Avery", "Perez", "avery.perez@example.com", 49, 0),
	(6, "Abigail", "Moore", "abigail.moore@example.com", 72, 1),
	(15, "Mason", "Jackson", "mason.jackson@example.com", 19, 0),
	(1, "Emma", "White", "emma.white@example.com", 95, 1),
	(11, "Caleb", "Thomas", "caleb.thomas@example.com", 58, 0),
	(20, "Harper", "Clark", "harper.clark@example.com", 33, 1),
	(4, "Ella", "Turner", "ella.turner@example.com", 81, 0),
	(9, "Jackson", "Lewis", "jackson.lewis@example.com", 24, 1),
	(16, "Layla", "Ward", "layla.ward@example.com", 67, 0),
	(13, "Aiden", "Collins", "aiden.collins@example.com", 45, 1),
	(18, "Scarlett", "Baker", "scarlett.baker@example.com", 52, 0),
	(7, "Aria", "Cooper", "aria.cooper@example.com", 39, 1),
	(2, "Evelyn", "Hill", "evelyn.hill@example.com", 77, 0),
	(14, "Grayson", "Reed", "grayson.reed@example.com", 16, 1),
	(10, "Aiden", "Young", "aiden.young@example.com", 93, 0),
	(3, "Isabella", "Ward", "isabella.ward@example.com", 68, 1),
    (12, "Carter", "Bennett", "carter.bennett@example.com", 25, 0),
	(6, "Amelia", "Fisher", "amelia.fisher@example.com", 87, 1),
	(18, "Landon", "Mitchell", "landon.mitchell@example.com", 32, 0),
	(4, "Hazel", "Perry", "hazel.perry@example.com", 59, 1),
	(15, "Gabriel", "Sanders", "gabriel.sanders@example.com", 14, 0),
	(9, "Zoe", "Watson", "zoe.watson@example.com", 73, 1),
	(20, "Riley", "Fleming", "riley.fleming@example.com", 48, 0),
	(1, "Lily", "Morrison", "lily.morrison@example.com", 94, 1),
	(13, "Brayden", "Obrien", "brayden.obrien@example.com", 57, 0),
	(8, "Brooklyn", "Sullivan", "brooklyn.sullivan@example.com", 22, 1),
    (5, "Chloe", "Turner", "chloe.turner@example.com", 66, 0),
	(16, "Mia", "Fletcher", "mia.fletcher@example.com", 37, 1),
	(11, "Lucas", "Barnes", "lucas.barnes@example.com", 80, 0),
	(3, "Grace", "Ferguson", "grace.ferguson@example.com", 52, 1),
	(14, "Elijah", "Woods", "elijah.woods@example.com", 19, 0),
	(7, "Addison", "Graham", "addison.graham@example.com", 71, 1),
	(19, "Aubrey", "Palmer", "aubrey.palmer@example.com", 44, 0),
	(10, "Nathan", "Fisher", "nathan.fisher@example.com", 91, 1),
	(2, "Aaliyah", "Harrison", "aaliyah.harrison@example.com", 58, 0),
	(17, "Leo", "Perkins", "leo.perkins@example.com", 29, 1),
    (8, "Skylar", "Wright", "skylar.wright@example.com", 64, 0),
	(1, "Mila", "Knight", "mila.knight@example.com", 83, 1),
	(12, "Owen", "Hudson", "owen.hudson@example.com", 38, 0),
	(4, "Aiden", "Keller", "aiden.keller@example.com", 77, 1),
	(15, "Nora", "Cole", "nora.cole@example.com", 12, 0),
	(6, "Benjamin", "Owens", "benjamin.owens@example.com", 94, 1),
	(18, "Stella", "McCarthy", "stella.mccarthy@example.com", 41, 0),
	(11, "Eli", "Gibson", "eli.gibson@example.com", 55, 1),
	(3, "Scarlett", "Marshall", "scarlett.marshall@example.com", 26, 0),
	(16, "Matthew", "Hart", "matthew.hart@example.com", 69, 1),
	(9, "Aria", "Reid", "aria.reid@example.com", 47, 0),
	(2, "Isaac", "Fleming", "isaac.fleming@example.com", 78, 1),
	(17, "Nova", "Bryant", "nova.bryant@example.com", 33, 0),
	(7, "Zachary", "Holt", "zachary.holt@example.com", 86, 1),
	(20, "Penelope", "Sullivan", "penelope.sullivan@example.com", 21, 0),
	(13, "Hudson", "Fisher", "hudson.fisher@example.com", 50, 1),
	(5, "Leah", "Rogers", "leah.rogers@example.com", 71, 0),
	(14, "Caleb", "Larson", "caleb.larson@example.com", 94, 1),
	(10, "Amelia", "Graham", "amelia.graham@example.com", 19, 0),
	(19, "Evelyn", "Barnes", "evelyn.barnes@example.com", 62, 1),
    (21, "Sophie", "Wright", "sophie.wright@example.com", 60, 1),
	(22, "Cameron", "Porter", "cameron.porter@example.com", 31, 0),
	(23, "Peyton", "Harrison", "peyton.harrison@example.com", 74, 1),
	(24, "Levi", "Fisher", "levi.fisher@example.com", 28, 0),
	(25, "Aria", "Hill", "aria.hill@example.com", 65, 1),
	(26, "Miles", "Woods", "miles.woods@example.com", 37, 0),
	(27, "Harper", "Gomez", "harper.gomez@example.com", 82, 1),
	(28, "Zara", "Bennett", "zara.bennett@example.com", 53, 0),
	(29, "Kai", "Mitchell", "kai.mitchell@example.com", 19, 1),
	(30, "Nova", "Clark", "nova.clark@example.com", 44, 0);

    

    

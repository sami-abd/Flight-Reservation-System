# 614-Final-Project
# Project Overview
A collaborative full-stack flight reservation system developed at the University of Calgary, now forked for further enhancements and personal development. Aiming to improve features, code structure, and implement best practices.
## Folder Structure 
- **Design Phase:** In-progress design work.
- **Implementation Phase:** In-progress implementation work. 
- **miscellaneous:** Extra files for future reference.
  
## Technologies Used
- Frontend: React, HTML, CSS
- Backend: Node.js, Express
- Database: MySQL
- Version Control: Git
## To Run The Project:
All code for frontend and backend are in code folder (Except for SQL files that are in Implementation/Database)
1. **Prerequisites**: Ensure Node.js, MySQL, and MySQL Workbench are installed.
2. **Clone the Repository**:
   ```bash
   git clone https://github.com/sami-abd/Flight-Reservation-System.git
3.**Open Project in Visual Studio Code**: Right-click on `myreactapp` and `backend` folders to open integrated terminals.
4. **Install Dependencies**: Run `npm install` in both terminals.
5. **Set Up Database**:
   - Open MySQL Workbench and run both `FlightReservation... .sql` files to generate and populate tables.
   - Update `server.js` with your MySQL credentials:
     ```javascript
     host: "localhost",
     user: "root",
     password: "",
     database: "companyensf608"
     ```
6. **Start the Application**: Run `npm start` in both terminals.
7. **Access the Project**: Open your browser and navigate to `http://localhost:XXXX` to view the working React project.

## Features
- User Authentication
- Flight Search
- Booking Management
- Payment Integration
- Admin Panel for managing flights and users

## Technologies Used
- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Version Control**: Git

## Contributing
Fork the repository.
- Create a new branch (git checkout -b feature/AmazingFeature).
- Commit your changes (git commit -m 'Add some AmazingFeature').
- Push to the branch (git push origin feature/AmazingFeature).
- Open a Pull Request.

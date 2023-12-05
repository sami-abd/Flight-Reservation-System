# 614-Final-Project
## Folder Structure 
- **Design Phase:** In-progress design work.
- **Implementation Phase:** In-progress implementation work. 
- **Final Submission:** Completed work (Ideally, once a file is added, it will not be touched until final review for submission)
- **miscellaneous:** Extra files for future reference.
## Naming Convention 
![Alt text](miscellaneous/naming_convention_reference.png)

**Example:** If you are working on part 1 #2, add the file in sub-folder "Part 1" within folder "Design Phase" and name it "2-System use case diagram". 

## TO RUN PROJECT:
All code for frontend and backend are in code folder (Except for SQL files that are in Implementation/Database)
Before running ensure Node.JS and MYSQL & MYSQL workbench are installed
1. Clone repo (ideally through Visual Studio Code)
2. In Visual Studio code, right-click on myreactapp and backend folders to open integrated terminals for each
3. Enter: NPM install
   for each terminal
5. In workbench open and run both FlightReservation... .sql files to generate and populate tables
6. in server.js replace:
  host: "localhost",
  user: "root",
  password: "",
  database: "companyensf608",
with the appropriate entries found in mysql workbench then save file
7. In both terminals enter: npm start
8. The Project should now open a working react project in the browser at localhost:XXXX


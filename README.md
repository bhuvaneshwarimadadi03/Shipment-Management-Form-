# Shipment Management Form


## Description

This project is a **Shipment Management Form** built using **HTML, Bootstrap, JavaScript, and JsonPowerDB (JPDB)** as the backend.
It allows users to manage shipment records including:
- Shipment Number  
- Description  
- Source  
- Destination  
- Shipping Date  
- Expected Delivery Date  
The application uses **JPDB REST APIs** for database operations such as insert, update, and retrieve.  
It is fully client-side and uses AJAX for communication.

## Benefits of JsonPowerDB

- Simple to integrate using JavaScript only  
- No server-side programming required  
- High performance with low memory usage  
- Supports multiple data models:
  - JSON Document Database  
  - RDBMS-style Tables  
  - Key-Value Database  
  - GeoSpatial Database  
  - Time-Series Data  
- Secure API-key based authentication  
- Real-time data operations without page reload  


##  About JsonPowerDB
**JsonPowerDB (JPDB)** is a Real-time, high-performance, lightweight, and easy-to-use REST API-based multi-mode DBMS.
It supports:
- Serverless architecture  
- Pluggable API development  
- Fast JSON-based operations  
It is ideal for modern web and mobile applications.

## Release History

- **v1.0** – Created Shipment Management Form with JPDB integration (Save, Update, Reset).
- **v1.1** – Added primary key-based auto-fetch and form validation.
- **v1.2** – Improved UI and fixed enable/disable button logic.
- **Future** – Plan to add delete option and display all records in table.

## Scope of Functionalities
-  Add new shipment records  
-  Update existing shipment records  
-  Auto-fetch data using Shipment No  
-  Client-side validation  
-  No page reload during operations  


## Examples of Use

### Add New Shipment
- Enter a unique Shipment No  
- Fill all fields  
- Click **Save**

### Edit Shipment
- Enter existing Shipment No  
- Modify details  
- Click **Update**

### Reset Form
- Click **Reset** to clear all fields
  

### Future Improvements
- Delete functionality  
- Display all records in table format  
- Advanced validation system  


## Sources
- JPDB Official Docs: https://login2explore.com/jpdb/docs.html  
- Bootstrap 5: https://getbootstrap.com/docs/5.1/  
- jQuery CDN: https://cdnjs.com/libraries/jquery  


## Other Information
This project was developed as a learning exercise to integrate **JPDB with frontend technologies**.
It demonstrates basic CRUD operations and is suitable for beginner full-stack projects.

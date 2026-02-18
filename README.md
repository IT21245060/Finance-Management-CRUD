# Finance Management CRUD Application

A comprehensive full-stack MERN application for managing finance and warehousing operations with CRUD functionality, search capabilities, and PDF report generation.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-brightgreen)
![Express](https://img.shields.io/badge/Framework-Express-lightgrey)

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Usage Guide](#usage-guide)
- [PDF Report Generation](#pdf-report-generation)
- [Known Issues](#known-issues)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 📖 About the Project

This project is a **MERN-based CRUD system** that manages two main business areas in a single web application:

1. **Finance Management** - Track and manage expense records with bill details, vendor information, and pricing
2. **Distribution/Warehousing Management** - Manage cargo records including sender/receiver information, warehouse types, and item details

The application provides a complete workflow for creating, viewing, editing, and deleting records, with advanced search functionality and professional PDF report generation capabilities.

### Project Goals

- ✅ Provide a structured workflow for creating, viewing, editing, and deleting expense records
- ✅ Manage warehousing cargo details with comprehensive tracking
- ✅ Enable powerful search and filtering across all data sets
- ✅ Generate professional PDF reports for expenses and receiver information
- ✅ Deliver an intuitive dashboard interface for data visualization

---

## ✨ Features

### Finance Management Module
- 📊 **Dashboard** - Overview of financial data
- 📝 **Create/Edit Expenses** - Add and modify expense records with validation
- 🔍 **Search & Filter** - Find records by bill ID, vendor, date, price, or description
- 📄 **PDF Reports** - Generate downloadable expense reports
- 🗑️ **Delete Records** - Remove outdated or incorrect entries
- ✅ **Data Validation** - Ensure price format and required fields are correct

### Warehousing/Distribution Module
- 📦 **Cargo Management** - Track shipments with detailed information
- 👤 **Sender/Receiver Details** - Maintain contact and identification information
- 🏭 **Warehouse Tracking** - Record warehouse types and item counts
- ⚖️ **Weight Management** - Track gross weight of cargo
- 📅 **Date/Time Logging** - Automatic timestamp recording
- 🔎 **Advanced Search** - Filter by multiple fields
- 📄 **Receiver Reports** - Generate PDF reports for cargo recipients

### General Features
- 🔐 **User Authentication** - Login system
- 🎨 **Responsive UI** - Built with Bootstrap and Material Design
- 🔄 **Real-time Updates** - Immediate data synchronization
- 📱 **Mobile-Friendly** - Accessible on various devices

---

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB Atlas** - Cloud database service
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Body-Parser** - JSON body parsing middleware

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **Bootstrap** - CSS framework
- **React Bootstrap** - Bootstrap components for React
- **MDB React UI Kit** - Material Design components
- **jsPDF** - PDF generation library
- **jspdf-autotable** - Table plugin for jsPDF
- **SweetAlert2** - Beautiful alerts and modals

### Development Tools
- **Nodemon** - Auto-restart server on changes
- **Concurrently** - Run multiple commands simultaneously

---

## 🏗️ System Architecture

### High-Level Architecture
```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   React Client  │ ──────> │  Express API    │ ──────> │  MongoDB Atlas  │
│   (Port 3000)   │ <────── │  (Port 8000)    │ <────── │   (Cloud DB)    │
└─────────────────┘         └─────────────────┘         └─────────────────┘
      Axios                      REST API                    Mongoose

```

### Data Flow
```
User Action → React Component → Axios Request → Express Route → 
Mongoose Model → MongoDB → Response → State Update → UI Render
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB Atlas Account** - [Sign Up](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Finance Management CRUD"
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure MongoDB Connection**
   
   Update the MongoDB connection string in `server.js`:
   ```javascript
   const DB_URL = 'your-mongodb-atlas-connection-string';
   ```
   
   ⚠️ **Security Note:** For production, use environment variables instead of hardcoding credentials.

### Running the Application

#### Option 1: Run Both Client & Server (Recommended)
```bash
npm run dev
```

#### Option 2: Run Separately

**Start the backend server:**
```bash
npm run server
```

**Start the frontend client (in a new terminal):**
```bash
npm run client
```

#### Access the Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000

---

## 📁 Project Structure

```
Finance Management CRUD/
├── server.js                    # Express server configuration
├── package.json                 # Backend dependencies
├── routes/                      # API route handlers
│   ├── Expenses.js             # Finance/Expenses routes
│   └── lankans.js              # Warehousing routes
├── models/                      # Mongoose schemas
│   ├── Expenses.js             # Expenses data model
│   └── lankans.js              # Warehousing data model
├── client/                      # React frontend
│   ├── package.json            # Frontend dependencies
│   ├── public/                 # Static assets
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src/
│       ├── App.js              # Main app with routing
│       ├── App.css             # Global styles
│       ├── index.js            # React entry point
│       ├── components/         # React components
│       │   ├── ContactUs.js
│       │   ├── Footer.js
│       │   ├── Login.js
│       │   ├── NavBar.js
│       │   ├── NavBar1.js
│       │   ├── FinanceManagement/
│       │   │   ├── ExpensesCreatePost.js
│       │   │   ├── ExpensesEditPost.js
│       │   │   ├── ExpensesHome.js
│       │   │   ├── ExpensesPostDetails.js
│       │   │   └── ExpensesRreportgen.js
│       │   └── IncomeManagement/
│       │       ├── CreateSL.js
│       │       ├── EditSL.js
│       │       ├── HomeSL.js
│       │       ├── ReceiverReport.js
│       │       └── SLcargoDetails.js
│       └── DashBoard/
│           ├── DistributionDash.js
│           └── FinanceDash.js
├── docs/                        # Documentation
├── Charter/                     # Project charter
├── Proposal/                    # Project proposal
└── Final Report/               # Final reports
```

---

## 📡 API Documentation

### Server Configuration

**Server Port:** 8000  
**Database:** MongoDB Atlas  
**Middleware:** CORS, Body-Parser (JSON)

### Data Models

#### Expenses Model
**Collection:** `ShowRooms`
Fields:
- billId (String, required)
- vender (String, required)
- invoiceDate (String, required)
- dueDate (String, required)
- price (String, required)
- description (String, required)

**Collection:** `ShowRooms`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| billId | String | Yes | Unique bill identifier |
| vender | String | Yes | Vendor name |
| invoiceDate | String | Yes | Invoice date |
| dueDate | String | Yes | Payment due date |
| price | String | Yes | Price (format: XX.XX) |
| description | String | Yes | Expense description |

#### Warehousing Model
**Collection:** `warehousing`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| senderName | String | Yes | Sender's full name |
| phoneNo | String | Yes | Phone number (10 digits) |
| receiverName | String | Yes | Receiver's full name |
| receiverNIC | String | Yes | Receiver's NIC number |
| serialNumber | String | Yes | Cargo serial number |
| warehouseType | String | Yes | Type of warehouse |
| totItems | String | Yes | Total number of items |
| gWeight | String | Yes | Gross weight |
| date | String | Yes | Cargo date |
| time | String | Yes | Cargo time |
| description | String | No | Additional details |

### API Endpoints

#### Expenses (Finance Management)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/showroom/save` | Create a new expense record | Expense object |
| GET | `/showroom` | Retrieve all expense records | - |
| GET | `/showroom/:id` | Get expense by ID | - |
| PUT | `/showroom/update/:id` | Update expense record | Updated fields |
| DELETE | `/showroom/delete/:id` | Delete expense record | - |

**Example Request (Create Expense):**
```json
POST /showroom/save
{
  "billId": "INV001",
  "vender": "ABC Supplies",
  "invoiceDate": "2026-02-18",
  "dueDate": "2026-03-18",
  "price": "1500.00",
  "description": "Office supplies purchase"
}
```

**Example Response:**
```json
{
  "success": true,
  "message": "Expense saved successfully",
  "data": { ... }
}
```

#### Warehousing (Distribution Management)

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| POST | `/lankan/save` | Create a new cargo record | Cargo object |
| GET | `/lankan` | Retrieve all cargo records | - |
| GET | `/lankan/:id` | Get cargo by ID | - |
| PUT | `/lankan/update/:id` | Update cargo record | Updated fields |
| DELETE | `/lankan/delete/:id` | Delete cargo record | - |

**Example Request (Create Cargo):**
```json
POST /lankan/save
{
  "senderName": "John Doe",
  "phoneNo": "0771234567",
  "receiverName": "Jane Smith",
  "receiverNIC": "987654321V",
  "serialNumber": "SL2026001",
  "warehouseType": "Cold Storage",
  "totItems": "50",
  "gWeight": "250.5",
  "date": "2026-02-18",
  "time": "14:30",
  "description": "Perishable goods"
}
```

---

## 📘 Usage Guide

### Finance Management Workflow

1. **Access Dashboard**
   - Navigate to `/` to view the Finance Dashboard
   - View summary of expense records

2. **View All Expenses**
   - Click on "Expenses" or navigate to `/SRH`
   - Browse all expense records in a table
   - Use the search bar to filter by any field

3. **Create New Expense**
   - Click "Add New" button
   - Fill in all required fields
   - Ensure price follows format: `XX.XX`
   - Click "Submit" to save

4. **Edit Existing Expense**
   - Click "Edit" button on any record
   - Modify fields as needed
   - Submit to update

5. **Delete Expense**
   - Click "Delete" button on any record
   - Confirm deletion in the alert

6. **Generate PDF Report**
   - Navigate to `/SRrg`
   - View report preview
   - Click "Download PDF" button

### Warehousing Management Workflow

1. **Access Distribution Dashboard**
   - Navigate to `/dashdis`
   - View distribution overview

2. **View Cargo Records**
   - Navigate to `/HSL`
   - Browse all cargo entries
   - Use search to filter records

3. **Create Cargo Entry**
   - Click "Create" button
   - Fill in sender and receiver information
   - Add warehouse and cargo details
   - Ensure phone number is 10 digits
   - Submit the form

4. **Edit Cargo Record**
   - Click "Edit" on any record
   - Update information
   - Save changes

5. **View Cargo Details**
   - Click on any cargo entry
   - View complete information

---

## 📄 PDF Report Generation

The application includes powerful PDF generation capabilities using **jsPDF** and **jspdf-autotable**.

### Features
- ✅ Professional formatting
- ✅ Company logo/header
- ✅ Tabular data display
- ✅ Auto-generated date
- ✅ Downloadable format

### Generated Reports
- **Expense Report** - Complete list of all expense records
- **Receiver Report** - Cargo recipient information

### How It Works
1. Data is fetched from the backend
2. jsPDF creates a new PDF document
3. autoTable plugin formats data into tables
4. Document is downloaded automatically

---

## 🎨 Application Routes

### Frontend Routes (React Router)

| Path | Component | Description |
|------|-----------|-------------|
| `/` | FinanceDash | Finance dashboard |
| `/dashdis` | DistributionDash | Distribution dashboard |
| `/SRH` | ExpensesHome | Expenses listing |
| `/showroomadd` | ExpensesCreatePost | Create expense |
| `/showroomedit/:id` | ExpensesEditPost | Edit expense |
| `/showroompost/:id` | ExpensesPostDetails | View expense details |
| `/SRrg` | ExpensesRreportgen | Generate expense report |
| `/HSL` | HomeSL | Cargo listing |
| `/CSL` | CreateSL | Create cargo record |
| `/ESL/:id` | EditSL | Edit cargo record |
| `/SLCD/:id` | SLcargoDetails | View cargo details |

---

## 🐛 Known Issues

- ⚠️ Database credentials are hardcoded in `server.js` (should use environment variables)
- ⚠️ ReceiverReport component references undefined `/dlankan` endpoint
- ⚠️ No centralized error-handling middleware
- ⚠️ Limited schema validation beyond basic Mongoose required fields
- ⚠️ Some routes commented out in App.js
- ⚠️ Inconsistent naming (Expenses vs ShowRooms in collections)

---

## 🚀 Future Improvements

### Short-term
- [ ] Move database credentials to `.env` file
- [ ] Add centralized error handling
- [ ] Implement comprehensive input validation (Joi/express-validator)
- [ ] Add loading spinners for async operations
- [ ] Implement pagination for large datasets
- [ ] Add user authentication and authorization
- [ ] Standardize collection naming

### Long-term
- [ ] Add unit and integration tests
- [ ] Implement role-based access control
- [ ] Add email notifications
- [ ] Create data backup mechanism
- [ ] Add analytics and reporting features
- [ ] Implement dark mode
- [ ] Add export to Excel functionality
- [ ] Create mobile app version
- [ ] Add audit logging

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and conventions
- Write clear commit messages
- Update documentation for new features
- Test your changes thoroughly
- Ensure all validations pass

---

## 📄 License

This project is for educational and demonstration purposes. Please add an appropriate license file if you plan to use this in production.

---

## 📞 Contact

**Project Repository:** [GitHub Repository URL]

**Developer Contact:** [Your Email]

**Project Link:** [Deployment URL if available]

---

## 🙏 Acknowledgments

- **MERN Stack Documentation** - For comprehensive guides
- **React Community** - For excellent libraries and components
- **Bootstrap Team** - For responsive design framework
- **jsPDF Contributors** - For PDF generation capabilities
- **MongoDB Atlas** - For cloud database services

---

## 📚 Additional Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

---

## 📊 Project Statistics

**Last Updated:** February 18, 2026  
**Version:** 1.0.0  
**Status:** Active Development

---

**⭐ If you find this project helpful, please consider giving it a star!**

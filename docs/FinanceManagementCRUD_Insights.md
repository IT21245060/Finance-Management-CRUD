# Finance Management CRUD - Insights

Date: 2026-02-17

## 1. Executive Summary
This project is a MERN-based CRUD system that manages two business areas in a single web application:
- Finance management (expenses)
- Distribution / warehousing management (lankan cargo records)

The backend is an Express + MongoDB API that exposes REST endpoints for each area. The frontend is a React application that provides dashboards, list views, create/edit forms, and PDF report generation. The client connects to the server using axios through a local proxy.

## 2. System Overview
### 2.1 Goals
- Provide a structured workflow for creating, viewing, editing, and deleting expense records.
- Provide a structured workflow for capturing warehousing cargo details.
- Allow searching and listing of both data sets.
- Generate PDF reports for expense records and receiver reports.

### 2.2 High-level Architecture
- Node.js + Express server
- MongoDB Atlas database via Mongoose models
- React single-page app with React Router
- Axios HTTP client
- jsPDF + jspdf-autotable for PDF generation

## 3. Repository Structure
Root-level:
- server.js (Express app bootstrap)
- routes/ (REST routes for each domain)
- models/ (Mongoose schemas)
- client/ (React app)
- Charter/, Proposal/, Final Report/ (documentation folders)

Client-level:
- src/App.js (routing)
- src/components/ (feature pages)
- src/DashBoard/ (dashboard screens)
- src/index.js (React bootstrap)
- src/App.css / index.css (styling)

## 4. Backend Design
### 4.1 Dependencies (root package.json)
Key packages:
- express: HTTP server
- mongoose: MongoDB ORM
- body-parser: JSON body parsing
- cors: CORS support
- nodemon: dev server auto-restart
- concurrently: run client and server in parallel

### 4.2 Server Initialization (server.js)
- Creates an Express app
- Registers JSON and CORS middleware
- Mounts two route groups: Expenses and lankans
- Connects to MongoDB Atlas
- Listens on port 8000

Key constants:
- PORT = 8000
- DB_URL = MongoDB Atlas connection string

### 4.3 Data Models
#### 4.3.1 Expenses Model (models/Expenses.js)
Collection name: ShowRooms
Fields:
- billId (String, required)
- vender (String, required)
- invoiceDate (String, required)
- dueDate (String, required)
- price (String, required)
- description (String, required)

#### 4.3.2 Warehousing Model (models/lankans.js)
Collection name: warehousing
Fields:
- senderName (String, required)
- phoneNo (String, required)
- receiverName (String, required)
- receiverNIC (String, required)
- serialNumber (String, required)
- warehouseType (String, required)
- totItems (String, required)
- gWeight (String, required)
- date (String, required)
- time (String, required)
- description (String, optional)

### 4.4 API Routes
#### 4.4.1 Expenses Routes (routes/Expenses.js)
Base path: /
- POST /showroom/save
  - Creates an expense record
  - Body is mapped directly to the Mongoose schema

- GET /showroom
  - Returns all expense records
  - Response: { success: true, existingPosts: [...] }

- GET /showroom/:id
  - Returns a single record by MongoDB ObjectId

- PUT /showroom/update/:id
  - Updates a record with $set = req.body

- DELETE /showroom/delete/:id
  - Deletes a record and returns the deleted object

#### 4.4.2 Warehousing Routes (routes/lankans.js)
Base path: /
- POST /lankan/save
  - Creates a cargo record

- GET /lankan
  - Returns all cargo records

- GET /lankan/:id
  - Returns a single cargo record

- PUT /lankan/update/:id
  - Updates a cargo record

- DELETE /lankan/delete/:id
  - Deletes a cargo record

## 5. Frontend Design
### 5.1 Client Dependencies
Key packages from client/package.json:
- react, react-dom, react-scripts (React runtime)
- react-router-dom (SPA routing)
- axios (HTTP client)
- bootstrap, mdb-react-ui-kit, react-bootstrap (UI components)
- jsPDF, jspdf-autotable (PDF generation)

### 5.2 Routing (client/src/App.js)
Routes are declared using React Router v5:

Dashboard:
- / -> Finance dashboard (FinanceDash)
- /dashdis -> Distribution dashboard (DistributionDash)

Finance routes:
- /SRH -> ExpensesHome (listing)
- /showroomadd -> ExpensesCreatePost
- /showroomedit/:id -> ExpensesEditPost
- /showroompost/:id -> ExpensesPostDetails
- /SRrg -> ExpensesRreportgen (PDF report)

Distribution routes:
- /HSL -> HomeSL (listing)
- /CSL -> CreateSL
- /ESL/:id -> EditSL
- /SLCD/:id -> SLcargoDetails

### 5.3 Navigation and Shared UI
- NavBar1: top bar with logo
- NavBar: main navigation menu
- Footer: fixed footer with branding text

These are rendered globally in App.js.

## 6. Finance Module (Expenses)
### 6.1 Expenses Listing (ExpensesHome.js)
Responsibilities:
- Fetch all expenses from GET /showroom
- Display in a table with edit/delete actions
- Search by billId, vender, invoiceDate, dueDate, price, description

Flow:
1. componentDidMount -> retrievePosts()
2. retrievePosts() -> axios.get("/showroom")
3. Render table rows with edit/delete links
4. onDelete() -> axios.delete("/showroom/delete/:id")

### 6.2 Create Expenses (ExpensesCreatePost.js)
Responsibilities:
- Render a form for new expense creation
- Validate price format (decimal)
- Validate required fields
- Submit to POST /showroom/save

Validation notes:
- Price must match /^[\d]+[\.][\d]{2}$/
- Description length must be >= 4
- Empty fields show a SweetAlert error

### 6.3 Edit Expenses (ExpensesEditPost.js)
Responsibilities:
- Load an expense by id from GET /showroom/:id
- Populate form fields
- Validate price format and required fields
- Submit to PUT /showroom/update/:id

### 6.4 Expense Details (ExpensesPostDetails.js)
Responsibilities:
- Fetch a single record by id
- Render a read-only form for inspection

### 6.5 Expense PDF Report (ExpensesRreportgen.js)
Responsibilities:
- Fetch expense list
- Render table preview
- Generate PDF using jsPDF + autoTable

Report flow:
1. User clicks "Download PDF"
2. createPdf() uses the HTML table (#my-table) as data source
3. jsPDF writes header image and title
4. autoTable generates the tabular data
5. File downloads as "Expenses details report.pdf"

## 7. Distribution Module (Warehousing)
### 7.1 Warehousing Listing (HomeSL.js)
Responsibilities:
- Fetch all cargo records from GET /lankan
- Render in two tables:
  - Information table
  - Cargo arrival details table
- Search by several fields
- Delete and edit actions

### 7.2 Create Cargo Record (CreateSL.js)
Responsibilities:
- Form for new cargo entry
- Validations:
  - Phone number must be numeric and 10 digits
  - Description length >= 4
  - Required fields must be filled
- Submit to POST /lankan/save

### 7.3 Edit Cargo Record (EditSL.js)
Responsibilities:
- Load record by id from GET /lankan/:id
- Validate and update using PUT /lankan/update/:id

### 7.4 Cargo Details (SLcargoDetails.js)
Responsibilities:
- Fetch record and display a read-only view

### 7.5 Receiver Report (ReceiverReport.js)
This component is set up to generate a PDF report but references a different endpoint (/dlankan) which is not defined in server routes. It likely belongs to a separate or unfinished module. The App.js routing is commented out, so this screen is not currently reachable in the running app.

## 8. Data Flow Summary
Typical CRUD flow:
1. User clicks Create or Edit
2. React form component updates local state
3. Validations execute on submit
4. Axios sends data to REST endpoint
5. Express route writes to MongoDB via Mongoose
6. UI updates via navigation or refresh

## 9. Environment Configuration
- Client uses proxy in client/package.json: http://localhost:8000
- Backend connects to MongoDB Atlas with a hard-coded connection string
- Server runs on port 8000

## 10. Build and Run
### 10.1 Install Dependencies
From repository root:
- npm install
- cd client && npm install

### 10.2 Run Development
Option 1: Run both together (recommended)
- npm run dev

Option 2: Run separately
- npm run server
- npm run client

The client runs on port 3000 and proxies API calls to port 8000.

## 11. Deployment Notes
- The backend uses a hard-coded MongoDB Atlas URI; for production, move to environment variables.
- For production build:
  - cd client && npm run build
  - Serve the build directory via Express or a static host.

## 12. Risks and Known Gaps
- Sensitive DB credentials are committed in server.js
- No centralized error-handling middleware
- No schema validation beyond basic Mongoose required fields
- Some routes and screens are commented out or unused
- ReceiverReport uses undefined backend route

## 13. Suggested Improvements
- Move DB URL to .env
- Introduce validation middleware (e.g., Joi or express-validator)
- Add unit tests for routes and React components
- Use consistent naming (Expenses vs ShowRooms)
- Add pagination for large data sets

## 14. Appendix: Quick Endpoint Reference
Expenses:
- POST /showroom/save
- GET /showroom
- GET /showroom/:id
- PUT /showroom/update/:id
- DELETE /showroom/delete/:id

Warehousing:
- POST /lankan/save
- GET /lankan
- GET /lankan/:id
- PUT /lankan/update/:id
- DELETE /lankan/delete/:id

## 15. Appendix: Major UI Screens
Finance:
- Dashboard: FinanceDash
- Listing: ExpensesHome
- Create: ExpensesCreatePost
- Edit: ExpensesEditPost
- Details: ExpensesPostDetails
- Report: ExpensesRreportgen

Distribution:
- Dashboard: DistributionDash
- Listing: HomeSL
- Create: CreateSL
- Edit: EditSL
- Details: SLcargoDetails

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//...........................................FinanceManagment................................................. 
const showroomRoutes = require('./routes/Expenses');

//...........................................FinanceManagmentEND...............................................

//...........................................DistributionManagment................................................. 
const lankanRoutes = require('./routes/lankans');

//...........................................DistributionManagmentEnd...............................................

//app middleware
app.use(bodyParser.json());
app.use(cors());



//...........................................FinanceManagment................................................. 
app.use(showroomRoutes);

//...........................................FinanceManagmentEND...............................................

//...........................................DistributionManagment................................................. 
app.use(lankanRoutes);

//...........................................DistributionManagmentEnd...............................................


const PORT = 8000;
const DB_URL = 'mongodb://127.0.0.1:27017/finance_management_crud'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connected Error', err));

app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);

});
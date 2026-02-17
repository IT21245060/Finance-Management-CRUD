import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import Footer from './components/Footer';
import ShowRoomDash from './DashBoard/FinanceDash';
import ExpensesCreatePost from './components/FinanceManagement/ExpensesCreatePost';
import ExpensesEditPost from './components/FinanceManagement/ExpensesEditPost';
import ExpensesHome from './components/FinanceManagement/ExpensesHome';
import ExpensesPostDetails from './components/FinanceManagement/ExpensesPostDetails';
import ExpensesRreportgen from './components/FinanceManagement/ExpensesRreportgen';

import HomeSL from './components/IncomeManagement/HomeSL';
import CreateSL from './components/IncomeManagement/CreateSL';
import EditSL from './components/IncomeManagement/EditSL';
import SLcargoDetails from './components/IncomeManagement/SLcargoDetails';
// import Dhome from './components/DistributionManagement/Dhome';
// import DcreateSL from './components/DistributionManagement/DcreateSL';
// import DeditSL from './components/DistributionManagement/DeditSL';
// import DSLcargoDetails from './components/DistributionManagement/DSLcargoDetails';
import DistributionDash from './DashBoard/DistributionDash';
// import ReceiverReport from './components/DistributionManagement/ReceiverReport';




export default class App extends Component {
  render() {
    return (


      <BrowserRouter>
        {/*...................................................NavBar............................................... */}
        <div style={{ top: 0, position: 'sticky', zIndex: 99 }}>
          <NavBar1 />
          <NavBar />
        </div>
        {/*...................................................NavBarEnd............................................... */}

        {/*...................................................Home............................................... */}
        <div style={{ marginBlockStart: '-100px' }} >
         
          <Route path="/" exact component={ShowRoomDash}></Route>
          <Route path="/dashdis" exact component={DistributionDash}></Route>
          
 
          <div style={{marginBlockStart:'-8%'}}>
          
          </div>
          
        </div>
        {/*...................................................HomeEnd............................................... */}




        <div>
     



          {/*...........................................FinanceManagment............................................... */}
          <Route path="/SRH" exact component={ExpensesHome}></Route>
          <Route path="/SRrg" exact component={ExpensesRreportgen}></Route>
        <Route path="/showroomadd"component={ExpensesCreatePost}></Route>
        <Route path="/showroomedit/:id" component={ExpensesEditPost}></Route>
        <Route path="/showroompost/:id" component={ExpensesPostDetails}></Route>
       
        
       
          {/*...........................................FinanceManagmentEnd............................................... */}

          
          {/*...........................................DistrbutionManagment............................................... */}
          <Route path="/HSL" exact component={HomeSL}></Route>
          <Route path="/CSL" component={CreateSL}></Route>
          <Route path="/ESL/:id" component={EditSL}></Route>
          <Route path="/SLCD/:id" component={SLcargoDetails}></Route>
          {/* <Route path="/RR" exact component={ReceiverReport}></Route>
          <Route path="/DH" exact component={Dhome}></Route>
          <Route path="/DCSL" exact component={DcreateSL}></Route>
          <Route path="/DESL/:id" exact component={DeditSL}></Route>
          <Route path="/DSLCD/:id" exact component={DSLcargoDetails}></Route> */}
          {/*...........................................DistributionManagmentEnd............................................... */}





        </div>







        {/*...................................................Footer............................................... */}
        <div>
          <Footer />
        </div>
        {/*...................................................FooterEnd............................................... */}



      </BrowserRouter>

    )
  }


}































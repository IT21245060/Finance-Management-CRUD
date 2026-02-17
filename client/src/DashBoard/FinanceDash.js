import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';


export default class ShowRoomDash extends Component {
  render() {
    return (

      <div className="DashBG" style={{ zIndex: 98 }}>
        <div style={{marginBlockStart:'7%'}}>
          <center>
         <h1><span class="badge bg-primary text-white opacity-90 fs-1">Finance Management</span></h1>
         </center>
         </div>
            
 

        <div style={{marginBlockStart:'4%', marginLeft:'20%'}}>   
    <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='./expenseslogo.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Expenses</MDBCardTitle>
        <MDBCardText><br/>
          Handle the Expenses.
          <br/><br/><br/>
        </MDBCardText>
        <center>
        <MDBBtn href='/SRH' className="btn btn-primary text-white">Expenses</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>


        <div style={{marginLeft:'60%', marginBlockStart:'-30%'}}>
        <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Report Generate</MDBCardTitle>
        <MDBCardText>
        Expenses Details Report(PDF)
        <br/>
        <br/>
        <br/><br/>
        </MDBCardText>
        <center>
        <MDBBtn href='/SRrg' className="btn btn-primay text-white">Report Generate</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>


        <div style={{marginLeft:'60%', marginBlockStart:'5%'}}>
        <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='/report.jpg' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Report Generate</MDBCardTitle>
        <MDBCardText>
        Income Details Report(PDF)
        <br/>
        <br/>
        <br/><br/>
        </MDBCardText>
        <center>
        <MDBBtn href='#' className="btn btn-primay text-white">Income Report Generate</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>
        <div style={{marginLeft:'20%', marginBlockStart:'-32%'}}>
        <MDBCard style={{ maxWidth: '20rem' }}>
      <MDBCardImage src='./expenseslogo.png' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Income</MDBCardTitle>
        <MDBCardText>
        Handle the Incomes.
        <br/>
        <br/>
        <br/><br/>
        </MDBCardText>
        <center>
        <MDBBtn href='#' className="btn btn-primay text-white">Income</MDBBtn>
        </center>
      </MDBCardBody>
    </MDBCard>
        </div>
        <br/><br/><br/><br/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
        
       
    )
  }
}

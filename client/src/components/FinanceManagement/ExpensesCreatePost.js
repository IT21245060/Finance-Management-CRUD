
import React, { Component } from 'react'
import axios from 'axios'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import './Error.css'; 
import swal from '@sweetalert/with-react'




const priceRegex = RegExp(
    /^[\d]+[\.][\d]{2}$/
  );
  
  const formValid = formErrors => {
    let valid = true;
  
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false)
    });
  
    return valid;
  };

  
export default class ExpensesCreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            billId: "",
            vender: "",
            invoiceDate: "",
            dueDate: "",
            price: "",
            description: "",
            


            formErrors:{
                price:""
            }
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        let formErrors = this.state.formErrors;

    switch (name) {
      case "price":
        formErrors.price = priceRegex.test(value) ? ""
        : "price must be a decimal value";
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value}, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    btnDemo = (e) => {
        e.preventDefault();

        const { billId, vender, invoiceDate, dueDate, price ,description } = this.state;

        const data = {

            billId: billId,
            vender: vender,
            invoiceDate: invoiceDate,
            dueDate: dueDate,
            price: price,
            description: description
            
        

        }
        console.log(data)


        this.setState(
            {
                billId: "B1234",
                vender: "CEB",
                // invoiceDate: "02-02-2023",
                // dueDate: "04-03-2023",
                price: "64000.00",
                description: "Electricity bill of june month."
                
                

            }
        )

    }

    onSubmit = (e) => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
        const { billId, vender, invoiceDate,dueDate,price, description} = this.state;

        const data = {
            billId: billId,
            vender: vender,
            invoiceDate: invoiceDate,
            dueDate: dueDate,
            description: description,
            price: price,
           
        }
        console.log(data)

if (billId.length === 0 || vender.length === 0 || invoiceDate.length === 0 ||
            dueDate.length === 0 || price.length === 0 || description.length === 0) {
            swal("Please fill all the details")
            }
else if (description.length < 4)  {
    swal(" invalid Description !", "length should be greater than 3", "error");

}else {
    

        axios.post("/showroom/save", data).then((res) => {
            let path = "/SRH";
            if (res.data.success) {
                alert("Item Listing Successfully")
                this.props.history.push(path);
                this.setState(
                    {
                        billId: "",
                        vender: "",
                        invoiceDate: "",
                        dueDate: "",
                        price: "",
                        description: "",
                    }
                )
            }
        })

}
}
else {
        console.error('Form Invalid');
      }
    }
    render() {

        const { formErrors } = this.state;

        return (


            <div className="Kwarehouse">

                <div style={{ marginLeft: '20%', marginBlockStart: '12%' }}>

                    <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>

                        <MDBCardBody >

                            <MDBCardTitle><center><h1><span class="badge bg-primary text-white opacity-90">Add Expenses</span></h1></center></MDBCardTitle>

                            <MDBCardText>

                                <div>
                                    <form className="need-validation" noValidate>

                                        
                                        <div className="form-group" autocomplete="on" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Bill ID</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="billId"
                                                placeholder="Enter Bill ID (character should be less than 30)"
                                                value={this.state.billId}
                                                onChange={this.handleInputChange} />

                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Vender</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="vender"
                                                placeholder="Enter Vender Name (character shuld be less than 30)"
                                                value={this.state.vender}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Invoice Date</lable>
                                            <input type="date"
                                                className="form-control"
                                                name="invoiceDate"
                                                placeholder="Enter Invoice Date"
                                                value={this.state.invoiceDate}
                                                onChange={this.handleInputChange} />
                                        </div>
                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Due Date</lable>
                                            <input type="date"
                                                className="form-control"
                                                name="dueDate"
                                                placeholder="Enter Due Date"
                                                value={this.state.dueDate}
                                                onChange={this.handleInputChange} />
                                        </div>


                                     

                          
                                        <br />

                                        
                                        <div className="row">
                                            <div className="col">
                                   
                                            </div>

                                            <div className="col">
                                  
                                            </div>


                                        </div>

                                       

                                        <div className="container1" style={{ marginBottom: '15px' }}>
                                            <label style={{ marginBottom: '5px' }}>Description</label>
                                            <textarea className="form-control" rows="3"
                                                name="description" placeholder="Enter Description (character shuld be less than 200)"
                                                value={this.state.description}
                                                onChange={this.handleInputChange}>

                                            </textarea>
                                        </div>


                                        <div className="form-group" style={{ marginBottom: '15px' }}>
                                            <lable style={{ marginBottom: '5px' }}>Price</lable>
                                            <input type="text"
                                                className="form-control"
                                                name="price"
                                                placeholder="Enter Amount (Ex:xxx.xx)"
                                                value={this.state.price}
                                                onChange={this.handleInputChange} />

                        {formErrors.price.length > 0 && (
                <span className="errorMessage">{formErrors.price}</span>
                )} 

                                        </div>

                                  

                                    </form>
                                    
                                   <center>
                                        <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                            <i className="far fa-check-square" ></i>
                                            &nbsp; save
                                        </a>
                                        &nbsp;
                                        &nbsp;
                                        &nbsp;
                                        <button className="btn btn-success btn-lg text-dark" type="submit" onClick={this.btnDemo}>
                                            <i class='fas fa-bookmark'></i>
                                            &nbsp; <b>Demo</b>
                                        </button>
                                  </center>
                                    

                                </div>

                            </MDBCardText>

                        </MDBCardBody>

                    </MDBCard>
                </div>
                <br />
                <br />
                <br/>
                <br/>
            </div>


        )
    }
}

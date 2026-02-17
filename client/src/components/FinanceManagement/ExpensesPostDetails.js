import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';

// title
export default class ExpensesPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }
    componentDidMount() {

        const id = this.props.match.params.id;

        axios.get(`/showroom/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    post: res.data.post
                });

                console.log(this.state.post);
            }
        });
    }


    render() {
        const { billId, vender, invoiceDate,dueDate,price, description} = this.state.post;

        return (
            <div style={{ marginBlockStart: '9%', marginLeft: '20%' }}>
                <MDBCard className="opacity-90" style={{ maxWidth: '55rem' }}>
                    <MDBCardBody >
                        <MDBCardText>
                            <div className="container" style={{ margingTop: '20px' }}>
                                <br></br>
                                <h4>Bill ID: {billId}</h4><br></br>

                                <form>
                                    <h5>Bill Details</h5>

                                    <label>Bill ID</label>
                                    <input className="form-control" type="text" placeholder={billId} aria-label="Disabled input example" disabled></input>


                                    <label>Vender</label>
                                    <input className="form-control" type="text" placeholder={vender} aria-label="Disabled input example" disabled></input>


                                    <label>Invoice Date</label>
                                    <input className="form-control" type="text" placeholder={invoiceDate} aria-label="Disabled input example" disabled></input>


                                    <label>Due Date</label>
                                    <input className="form-control" type="text" placeholder={dueDate} aria-label="Disabled input example" disabled></input>


                                    <label>Price</label>
                                    <input className="form-control" type="text" placeholder={price} aria-label="Disabled input example" disabled></input>

                                  
                                    <label>Description</label>
                                    <input className="form-control" type="text" placeholder={description} aria-label="Disabled input example" disabled></input>

                         
                                    <br></br>

                                </form>

                            </div>

                        </MDBCardText>

                    </MDBCardBody>

                </MDBCard>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>


        )

    }
}
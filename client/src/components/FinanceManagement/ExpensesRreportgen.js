import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MDBCard, MDBCardBody } from 'mdb-react-ui-kit';


export default class ExpensesRreportgen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

  }
  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/showroom").then(res => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts
        });

        console.log(this.state.posts);
      }
    });
  }


  filterData(posts, searchKey) {
    const result = posts.filter((post) =>
      post.billId.toLowerCase().includes(searchKey) ||
      post.vender.toLowerCase().includes(searchKey) ||
      post.invoiceDate.toLowerCase().includes(searchKey) ||
      post.dueDate.toLowerCase().includes(searchKey) ||
      post.price.toLowerCase().includes(searchKey)

    )
    this.setState({ posts: result })
  }

  handleSearchArea = (e) => {
    const searchKey = (e.currentTarget.value);
    axios.get("/showroom").then(res => {
      if (res.data.success) {

        this.filterData(res.data.existingPosts, searchKey)
      }
    });
  }

  createPdf = (pdfBody) => {

    var doc = new jsPDF();
    var totalPagesExp = "{total_pages_count_string}"; //placeholder for total number of pages 
    doc.autoTable({
        didDrawPage: function (data) {

            // Header
            doc.setFontSize(14);
            var fileTitle = "Expenses Report";
            var img = 'https://i.ibb.co/0mhwfK9/techplanet-logo-for-report.jpg';
            doc.text(fileTitle, 15, 95);
            doc.addImage(img, 'JPEG', 2, 2, 206, 80);

            // Footer
            var pageSize = doc.internal.pageSize;
            //jsPDF 1.4+ uses getHeight, <1.4 uses .height
            var pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();
            // jsPDF 1.4+ uses getWidth, <1.4 uses .width
            var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

            doc.autoTable({
                html: '#my-table',
                startY: pageHeight - 200,
                theme: 'grid'
            });

            var str = "Page " + doc.internal.getNumberOfPages()
            // Total page number plugin only available in jspdf v1.0+
            if (typeof doc.putTotalPages === 'function') {
                str = str + " of " + totalPagesExp;
            }
            doc.setFontSize(10);
            doc.text(str, data.settings.margin.left, pageHeight - 10);
        },
        margin: {
            bottom: 60, //this decides how big your footer area will be
            top: 40 //this decides how big your header area will be.
        }
    });
    // Total page number plugin only available in jspdf v1.0+
    if (typeof doc.putTotalPages === 'function') {
        doc.putTotalPages(totalPagesExp);
    }

    doc.save('Expenses details report.pdf'); //this downloads a copy of the pdf in your local instance.
};

  render() {
    return (
      <div className="">
        <br />
        <div style={{ width: '20%', marginLeft: '80%', marginBlockStart:'7%' }}>
          <form className="d-flex">
            <input className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={this.handleSearchArea}>
            </input>
          </form>
        </div>
        <center>
          <h1><span class="badge text-dark opacity-90 fs-3" style={{marginBlockStart:'-1%'}}>Expenses Details Report</span></h1>
        </center>
        <div >
          <br />
          
          <table  id="my-table" class=" container table" >
            <thead class="table-info">
              <tr>
                <th scope="col">Serial No</th>
                <th scope="col">billId</th>       
                <th scope="col">vender</th>   
                <th scope="col">invoiceDate</th>
                <th scope="col">dueDate</th>
                <th scope="col">Price (LKR)</th>
                
                
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((posts, index) => (
                <tr key={index}>
                  <th class="table-light" scope="row">SRE23{index + 1}</th>
                  <td class="table-light">
                    <a href={`/showroompost/${posts._id}`} style={{ textDecoration: 'none' }}>
                      {posts.billId}
                    </a>
                  </td>
                  

                  <td class="table-light">{posts.vender}</td>                 
                  <td class="table-light">{posts.invoiceDate}</td>
                  <td class="table-light">{posts.dueDate}</td>
                  <td class="table-light">{posts.price}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>       
          
          <div>

          <center>
              <MDBCard shadow='0' border='white' background='white' className='mb-3'  style={{ maxWidth: '22rem' }}>
                <MDBCardBody >

                  <a className="btn btn-warning text-dark " onClick={this.createPdf}>
                    <i className="fa fa-file-pdf-o"></i>&nbsp;&nbsp;Download PDF
                  </a>
                  &nbsp;
                  <a className="btn btn-warning text-dark " href="/" >
                    Dash Board
                  </a>
                </MDBCardBody>
              </MDBCard>
            </center>
            
          </div>
          <br></br>
          <br></br>
          <br></br>
         
        </div>
       
      </div>
    )
  }
}















import React, { Component } from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export default class Footer extends Component {
  render() {
    return (
      <div style={{ marginBlockStart: '30px' }}>
        <MDBFooter className='bg-dark text-center text-lg-left fixed-bottom'>
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <div className='text-white'>
              &copy; {new Date().getFullYear()} Copyright | {' '}
              <a className='text-white'>Tech Planet (Pvt) Ltd : </a>
              <a className='text-white '>
                Web Design By : Tech Planet Group
              </a>
            </div>

          </div>
        </MDBFooter>
      </div>
    );

  }
}
import React from 'react';
import './WidgetLg.css'



const WidgetLg = () => {

  // const Button = ({ type }) => {
  //   return (
  //     <button className={"widgetLgButton" + type}>{type}</button>

  //   )
  // }
  return (

    <>

      <div className="container-fluid widgetLg">
        <span className="widgetLgTitle">Latest transactions</span>
        <div className="row ">
          <table className='widgetLgTable mt-3'>
          <tbody>

            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            {/* first */}
            <tr className='widgetLgTableList '>
              <td >
                <img className='widgetLgImg' src="../images/profile.jpeg" alt="" />
                Akendra
              </td>
              <td>2021 jan 5</td>
              <td>$34,000</td>
              <td className='approvedbtn'>
                <button >Approved</button>
              </td>
            </tr>
            {/* /second */}
            <tr className='widgetLgTableList '>
              <td >
                <img className='widgetLgImg' src="../images/profile.jpeg" alt="" />
                Akendra
              </td>
              <td>2021 jan 5</td>
              <td>$34,000</td>
              <td className='declinedbtn'>
                <button>Approved</button>
              </td>
            </tr>
            {/* third */}
            <tr className='widgetLgTableList '>
              <td >
                <img className='widgetLgImg' src="../images/profile.jpeg" alt="" />
                Akendra
              </td>
              <td>2021 jan 5</td>
              <td>$34,000</td>
              <td className='pendingbtn'>
                <button>Approved</button>
              </td>
            </tr>
            {/* /fourth */}
            <tr className='widgetLgTableList '>
              <td >
                <img className='widgetLgImg' src="../images/profile.jpeg" alt="" />
                Akendra
              </td>
              <td>2021 jan 5</td>
              <td>$34,000</td>
              <td className='approvedbtn'>
                <button>Approved</button>
              </td>
            </tr>



             {/* /fifth */}
             <tr className='widgetLgTableList '>
              <td >
                <img className='widgetLgImg' src="../images/profile.jpeg" alt="" />
                Akendra
              </td>
              <td>2021 jan 5</td>
              <td>$34,000</td>
              <td className='declinedbtn'>
                <button>Approved</button>
              </td>
            </tr>
          </tbody>
            
          </table>
        </div>
      </div>

    </>
  )
};

export default WidgetLg;

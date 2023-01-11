import React  from 'react' /*rfc + enter (react function based component)*/
import PropTypes from 'prop-types'//impt//
import { Link } from "react-router-dom";

export default function Navbar(props) {



  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.modeDarkLight} bg-${props.modeDarkLight}`}>
  <Link className="navbar-brand" to="/">{props.Maintitle}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About<span className="sr-only"></span></Link>
      </li>
    </ul>

    {/*enable dark or light mode*/}
    <form className="form-inline my-2 my-lg-0">
    <div className={`custom-control custom-switch text-${props.modeDarkLight ==="light" ? "dark" : "light"}`}>
      {/*text color ko alg se add kiya h*/}
      <input  onClick={props.handleMode} type="checkbox" className="custom-control-input" id="customSwitch1"/>
      <label className="custom-control-label " htmlFor="customSwitch1">{props.handleEnableMode}</label>
    </div>
    </form>

  </div>
</nav>
</>
  )
}

Navbar.propTypes = {
  Maintitle : PropTypes.string
};




/*inline css=>
style={{backgroundColor:"pink", border: "1px solid red" }}

internal css=>
style={any_name} ko tag me likho then uski definition return ke upr dedo like..

const any_name={ 
  backgroundColor:"pink",
   border: "1px solid red"
  }
*/


//****************props******************//
/* props ko as a argument pass kro
then jaha bhi change krna ho waha {props.any_name}kr do
then App.js me Navbar me us us prop ko pass kr do..*/

//*************proptype****************//
/*proptypes ko IMPORT kiya sbse upr using "impt "
then at the end create kr proptype object jo prop ka type batayega*/ 

/**************rfc + enter (react function based component)**************
import React from 'react'

export default function Navbar() {
  return (
    <div>
      
    </div>
  )
}
*/

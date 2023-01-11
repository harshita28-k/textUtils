import React , {useState} from 'react' //rfc//

export default function About() {
    const [cssStyle , setCssStyle] = useState({
        backgroundColor:"white",
        color:"black"
    })
    const [btnText , setBtnText] = useState("Enable dark mode")

    const enableDarkMode=()=>{
          if(cssStyle.color === "white"){
            setCssStyle({
                backgroundColor:"white",
                color:"black",
                border:"2px solid black"
            })
            setBtnText("Enable dark mode")
          }
          else
          {
            setCssStyle({
                backgroundColor:"black",
                color:"white",
                border:"1px solid white"
            })
            setBtnText("Enable light mode")
          }
    }

    /*jb navbar me mode switch ko on kiya to accordion me bhi effect dikhe....but uske liye accordion ke button 
    and function ko remove kro and usestate ko bhi and function me bhi props pass kro and App.js me bhi
     modeDarkLight ko as a prop pass kro*/
    /* let cssStyle = {
      color: props.modeDarkLight === "dark" ? "white" : "dark", 
      backgroundColor: props.modeDarkLight ==="dark" ? "dark" : "white"
    }*/


  return (
    <>
    <div className='container mt-4' style={cssStyle}> {/*internal css => style yaha pr object h*/}
        <h1 className="my-4">ACCORDION</h1>
    <div className="accordion" id="accordionExample">
  <div className="card" style={cssStyle}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button  style={cssStyle} className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyse your text</strong>
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample" >
      <div className="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div className="card" style={cssStyle}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button   style={cssStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Free to use</strong>
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card" style={cssStyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button  style={cssStyle} className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser comapatible</strong>
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>

<div className="container">
<button type="button" className="btn btn-primary my-3" onClick={enableDarkMode}>{btnText}</button>
</div>

</div>

    
    </>
  )
}

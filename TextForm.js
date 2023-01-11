import React ,{useState} from 'react' //rfc//

export default function TextForm(props) {

    const [text, setText] = useState("");/*means initially mere text box me kuch nhi likha h*/

    const handleOnChange=(event)=>{
        setText(event.target.value);
        /*event as a arg jo likha h usme jo bhi apn textarea me dalege vo PASS hoga..
        event.target.value means onChange event jo mera
         text h + jo mene next text likhungi us value ko setText kr de*/

         /*jese jese koi bhi value enter kr to hr value pr OnChange event call hoga and 
         vo vallue ko target kr ke setText kr dega*/
    }

    const handleUpClick = () =>{
         setText(text.toUpperCase()); 
        /*props.showAlert("Converted to Uppercase","success")*/
    }
    const handleLpClick=()=>{
        setText(text.toLowerCase());
        /*props.showAlert("Converted to Lowercase","success")*/
    }
    const handleClearText=()=>{
         setText("");
        /* props.showAlert("Text clear","success")*/
    }
  return (
   <>
   <div className={`container mt-4 text-${props.modeDarkLight ==="light" ? "dark" : "light"} `}>
    <h1>{props.textAreaHeading}</h1>
    <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1"></label>
    <textarea value={text} onChange={handleOnChange} style={{backgroundColor : props.modeDarkLight ==="light"? "white":"#13466e"}}className={`form-control text-${props.modeDarkLight ==="light" ? "dark" : "light"}` } id="exampleFormControlTextarea1" rows="8">{/*{text}*/}</textarea>
    {/*onChange=>The onchange event occurs when the value of an HTML element is changed.
    
    text ko as a value pass kiya to me nhi likh pa rhi thi in text area because value
     me pass krne se vo text fix ho gya therefore onChange event use me liya jisse me text
  area me or likh sakhu BUT AGR ME VALUE ME TEXT KO NA PASS KR ke normally pass kr du to 
   to isse value fix nhihogi or me aage or bhi likh paungi and mujhe onChange event use
    me nhi lena padega */}
  </div>
  <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleLpClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-2" onClick={handleClearText}>Clear Text</button>
  </div>

  <div className={`container mt-4 text-${props.modeDarkLight ==="light" ? "dark" : "light"} `}>
    <h4>Your Text Summary</h4>
    <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words,{text.length} characters</p>
    {/*.split(" ").length se jb textbox me kuch nhi likha h to bhi vo summary me 1word bata raha h.therfore we will use filter function
     <h4>Preview</h4>
     <p>{text.length>0? text: "Enter your text to preview here"}</p> {/*yha text usestate wala h*/}
  </div>
   </>
  )
}

/*split function split the string into an array like ek ek element ho jaye sara text(string)*/

/*fiter method takes a function as a argument and agr vo function true return krta h to hi vo element array me 
rahega otherwise vo element array me nahirahega*/
/*The filter() method creates a NEW ARRAY filled with elements that pass a test (TRUE RETURN VALUES) provided 
by a function.*/
/* filter((element)=>{
  return element.length!=0})*/
  /*filter method h jisme 1 arrow function pass kiya .or us arrow function ka argument element h*/
  /*yaha element hr us text ke splited part ko target karega jisme word and space aa */
  /*element,length==0 means space*/

  /* disabled={text.length===0}  means jb kuch bhi na likha ho to buttons ko disabled kr do*/
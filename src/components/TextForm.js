import React , { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = (event) =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = (event) =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClear = (event) =>{
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{

        setText(event.target.value);
    }
const [text, setText] = useState('');
  return (
      <>
      <div className='container'>
    <div className="mb-3">
        <h1> {props.title}</h1>
  <textarea className="form-control mb-3 mr-3 ml-1" onChange={handleOnChange}  id="textForm" rows="8" value={text}></textarea>
  <button className="btn btn-primary " onClick={handleUpClick}>Convert To upperCase</button>
  <button className="btn btn-primary" onClick={handleLowClick}>Convert to lowerCase</button>
  <button className="btn btn-primary" onClick={handleClear}>Clear</button>

</div>
</div>
<div className='container my-2'>
    <h6>Your text summary</h6>
    <p>{ text.length !== 0 ? text.split(' ').length : 0} words , {text.length} chracters</p>
    <p>{text.length !== 0 ? 0.008 * text.split(' ').length: 0} minutes read</p>
</div>
</>
  )
}

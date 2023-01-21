import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        alert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
        alert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        alert("Text Cleared!", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        alert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        alert("Extra spaces removed!", "success");
    }

    return (
        <>
        <div > 
            <h1> </h1>
            <div > 
            <textarea className='text' value={text} onChange={handleOnChange} placeholder='Write Text Here.............' > </textarea>
            </div>
            <br/> <br/>
            <button disabled={text.length===0}  onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}  onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0}  onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0}  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div >
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <br/> <br/>
            <div className='result'>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
            <br/> <br/>
        </div>
        </>
    )
}
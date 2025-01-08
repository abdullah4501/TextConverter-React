import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }
    const handleCapClick = ()=>{
        let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
        setText(newText);
    }
    const handleTogClick = ()=>{
        let newText = text.split(" ").map(word => word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join(" ");
        setText(newText);
    }
    const [text, setText] = useState(''); 

    return (
        <>
            <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} rows={10}></textarea>
                </div>

                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCapClick}>Captilize Each Word</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleTogClick}>Convert to Togglecase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

        </>
    )
}
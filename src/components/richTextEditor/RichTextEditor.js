import { useState ,useEffect} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function TextEditor() {
  const [body,setBody]=useState("");
  

   const handleBody = (content) => {
    setBody(content);
    
    localStorage.setItem('editorContent', content);
  };
  
  
  useEffect(() => {
   
    const storedContent = localStorage.getItem('editorContent');
    if (storedContent) {
      setBody(storedContent);
    }
  }, []);
  return (
   
    <div style={{display:"grid",justifyContent:"right", width: '700px', height: '150px', margin: 'auto' }} >
      <ReactQuill placeholder='wrtite something amazing...' theme="snow" modules={modules} formats={formats} onChange={handleBody} value={body}/>
    </div>

   
  );
}

const modules={
    
  toolbar:[
    [{size:[]},{font:[]}],
    ["bold","italic","underline","strike","blockquote"],
    [{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"},{align:[]}],
    ["link","image"],
 
 [{ 'color': [
  "#000000", // Black
  "#ffffff", // White
  "#ff0000", // Red
  "#00ff00", // Green
  "#0000ff", // Blue
  "#ffff00", // Yellow
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#ff6600", // Orange
  "#9966ff", // Purple
  "#6699ff", // Light Blue
  "#66ff99", // Light Green
  "#ffcc00", // Gold
  "#ff6666", // Light Red
  "#cccccc", // Light Gray
  "#999999", // Gray
  "#666666", // Dark Gray
]}, { 'background': [] }],
    ['clean'],
   
    
  ],
};
const formats=[
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
];
export default TextEditor;

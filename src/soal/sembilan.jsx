// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Sembilan(){
   
 return (
  <>
  
Tentukan nilai logaritma berikut ini <label> $$\log_31=...$$</label>
      <p style={{ fontSize: "small" }}>
        <input
          type="radio"
          name="no53"
          id="jno53"
          style={{ display: "inline-flex" }}
        />
        0<br />
        <input
          type="radio"
          name="no53"
          style={{ display: "inline-flex" }}
        />2 <br />
        <input type="radio" name="no53" style={{ display: "inline-flex" }} />3
        <br />
        <input type="radio" name="no53" style={{ display: "inline" }} />4<br />
      </p>
      <div id="rno53" />
      <hr />
      Tentukan nilai logaritma berikut ini <label> $$\log_525=...$$</label>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no54" style={{ display: "inline-flex" }} />0
        <br />
        <input
          type="radio"
          name="no54"
          id="jno54"
          style={{ display: "inline-flex" }}
        />
        2 <br />
        <input type="radio" name="no54" style={{ display: "inline-flex" }} />3
        <br />
        <input type="radio" name="no54" style={{ display: "inline" }} />4<br />
      </p>
      <div id="rno54" />
      <hr />
      Tentukan nilai logaritma berikut ini <label>$$\log_575=...$$</label>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no55" style={{ display: "inline" }} />0<br />
        <input
          type="radio"
          name="no55"
          id="jno55"
          style={{ display: "inline" }}
        />
        $$2+\log_53$$
        <br />
        <input type="radio" name="no55" style={{ display: "inline" }} />3<br />
        <input type="radio" name="no55" style={{ display: "inline" }} />4<br />
      </p>
      <div id="rno55" />
      <hr />
    </> );
   
}

export default Sembilan;
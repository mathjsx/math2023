// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Dua(){
   
 return (
  <>

      Bentuk sederhana dari
      <math>
        <msup>
          <mi>3</mi>
          <mn>2</mn>
        </msup>
        <mi>.</mi>
        <msup>
          
          <mi>3</mi>
          <mn>5</mn>
        </msup>
      </math>
    
    <p style={{ fontSize: "small" }}>
      <input type="radio" name="no32" style={{ display: "inline-flex" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>4</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input
        type="radio"
        name="no32"
        id="jno32"
        style={{ display: "inline-flex" }}
      />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>7</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no32" style={{ display: "inline-flex" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>5</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no32" style={{ display: "inline" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>6</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
    </p>
    <div id="rno32" />
    <hr />
    <p />
    </> );
   
}

export default Dua;
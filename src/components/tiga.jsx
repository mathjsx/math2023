// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Tiga(){
   
 return (
  <>

<p>
      Bentuk sederhana dari
      <math>
        <msup>
          <mi>3</mi>
          <mn>3</mn>
        </msup>
        <mi>.</mi>
        <msup>
          <mi>3</mi>
          <mn>-2</mn>
        </msup>
      </math>
    </p>
    <p style={{ fontSize: "small" }}>
      <input type="radio" name="no33" style={{ display: "inline-flex" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>2</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no33" style={{ display: "inline-flex" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>0</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no33" style={{ display: "inline" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>-1</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input
        type="radio"
        name="no33"
        id="jno33"
        style={{ display: "inline-flex" }}
      />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>1</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
    </p>
    <div id="rno33" />
    <hr />
    <p />
    </> );
   
}

export default Tiga;
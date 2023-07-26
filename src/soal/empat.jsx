// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Empat(){
   
 return (
  <>


<p>
      Bentuk sederhana dari
      <math>
        <msup>
          <mi>2</mi>
          <mn>3</mn>
        </msup>
        <mi>.</mi>
        <msup>
          <mi>3</mi>
          <mn>-2</mn>
        </msup>
        <mi>.</mi>
        <msup>
          <mi>3</mi>
          <mn>2</mn>
        </msup>
      </math>
    </p>
    <p style={{ fontSize: "small" }}>
      <input type="radio" name="no34" style={{ display: "inline-flex" }} />
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
      <input
        type="radio"
        name="no34"
        id="jno34"
        style={{ display: "inline-flex" }}
      />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>2</mi>
              <mn>3</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no34" style={{ display: "inline-flex" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>3</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
      <input type="radio" name="no34" style={{ display: "inline" }} />
      <math>
        <mi>
          <math>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>-4</mn>
            </msup>
          </math>
        </mi>
      </math>
      <br />
    </p>
    <div id="rno34" />
    <hr />
    <p />
    </> );
   
}

export default Empat;
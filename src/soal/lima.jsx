// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Lima(){
   
 return (
  <>
 
<p>
      Bentuk sederhana bilangan
      <math>
        <mfrac>
          <mi>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>4</mn>
            </msup>{" "}
          </mi>{" "}
          <mi>
            {" "}
            <msup>
              <mi>3</mi>
              <mn>6</mn>
            </msup>{" "}
          </mi>{" "}
        </mfrac>
      </math>
    </p>
    <p style={{ fontSize: "small" }}>
      <input type="radio" name="no35" style={{ display: "inline-flex" }} />
      <math>
        <msup>
          <mi>3</mi>
          <mn>2</mn>
        </msup>
      </math>
      <br />
      <input
        type="radio"
        name="no35"
        id="jno35"
        style={{ display: "inline-flex" }}
      />{" "}
      <msup>
        <math>
          <msup>
            <mi>3</mi>
            <mn>-2</mn>
          </msup>
        </math>
        <br />
        <input type="radio" name="no35" style={{ display: "inline-flex" }} />
        <math>
          <msup>
            <mi>3</mi>
            <mn>-1</mn>
          </msup>
        </math>
        <br />
        <input type="radio" name="no35" style={{ display: "inline" }} />
        <math>
          <msup>
            <mi>3</mi>
            <mn>4</mn>
          </msup>
        </math>
        <br />
      </msup>
    </p>
    <div id="rno35" />
    <hr />
    
      <p>
        bentuk akar dari bilangan berpangkat
        <math>
          <msup>
            <mi>5</mi>
            <mn>
              <math>
                <mfrac>
                  <mi> 3 </mi> <mi> 2 </mi>{" "}
                </mfrac>
              </math>
            </mn>
          </msup>
        </math>
      </p>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no36" style={{ display: "inline-flex" }} />
        <math>
          <msqrt>
            {" "}
            <mi> 5 </mi>
          </msqrt>
        </math>
        <br />
        <input
          type="radio"
          name="no36"
          id="jno36"
          style={{ display: "inline-flex" }}
        />
        <math>
          <msqrt>
            {" "}
            <mi>
              <msup>
                <mi>5</mi>
                <mn>3</mn>
              </msup>
            </mi>
          </msqrt>
        </math>
        <br />
        <input type="radio" name="no36" style={{ display: "inline-flex" }} />
        <math>
          <msqrt>
            {" "}
            <mi>
              <msup>
                <mi>5</mi>
                <mn>2</mn>
              </msup>
            </mi>
          </msqrt>
        </math>
        <br />
        <input type="radio" name="no36" style={{ display: "inline" }} />
        <math>
          <msqrt>
            {" "}
            <mi>
              <msup>
                <mi>3</mi>
                <mn>5</mn>
              </msup>
            </mi>
          </msqrt>
        </math>
        <br />
      </p>
      <div id="rno36" />
      <hr /> 
    </> );
   
}

export default Lima;
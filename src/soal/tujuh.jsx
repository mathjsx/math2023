// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Tujuh(){
   
 return (
  <>

<p>
        hasil pembagian akar
        <math>
          <mfrac>
            <mi>
              {" "}
              <msqrt>
                {" "}
                <mi> 12 </mi>
              </msqrt>{" "}
            </mi>{" "}
            <mi>
              <msqrt>
                {" "}
                <mi> 13 </mi>
              </msqrt>
            </mi>{" "}
          </mfrac>
        </math>
      </p>
      <p style={{ fontSize: "small" }}>
        <input
          type="radio"
          name="no39"
          id="jno39"
          style={{ display: "inline-flex" }}
        />
        <math>
          <msqrt>
            <mi>
              <mfrac>
                <mi> 12 </mi> <mi> 13</mi>
              </mfrac>
            </mi>
          </msqrt>
        </math>
        <br />
        <input type="radio" name="no39" style={{ display: "inline-flex" }} />
        <math>
          <mi>
            <mfrac>
              <mi> 12 </mi> <mi> 13</mi>
            </mfrac>
          </mi>
        </math>
        <br />
        <input type="radio" name="no39" style={{ display: "inline-flex" }} />
        <math>
          <msqrt>
            <mi>
              <mfrac>
                <mi> 1 </mi> <mi> 3</mi>
              </mfrac>
            </mi>
          </msqrt>
        </math>
        <br />
        <input type="radio" name="no39" style={{ display: "inline" }} />
        <math>
          <msqrt>
            <mi>
              <mfrac>
                <mi> 2 </mi> <mi> 3</mi>
              </mfrac>
            </mi>
          </msqrt>
        </math>
        <br />
      </p>
      <div id="rno39" />
      <hr />
      <p>
        perkalian akar
        <math>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>5</mn>
            </msup>
            <mn>3</mn>
          </mroot>
          <mo>.</mo>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>4</mn>
            </msup>
            <mn>3</mn>
          </mroot>
        </math>
      </p>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no40" style={{ display: "inline-flex" }} />
        <math>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>7</mn>
            </msup>
            <mn>3</mn>
          </mroot>
        </math>
        <br />
        <input type="radio" name="no40" style={{ display: "inline-flex" }} />
        <math>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>9</mn>
            </msup>
            <mn>2</mn>
          </mroot>
        </math>
        <br />
        <input type="radio" name="no40" style={{ display: "inline-flex" }} />
        <math>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>3</mn>
            </msup>
            <mn>3</mn>
          </mroot>
        </math>
        <br />
        <input
          type="radio"
          name="no40"
          id="jno40"
          style={{ display: "inline" }}
        />
        8
        <br />
      </p>
      <div id="rno40" />
      <hr />
    </> );
   
}

export default Tujuh;
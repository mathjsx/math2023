// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Enam(){
   
 return (
  <>

<p>
        bentuk akar dari bilangan berpangkat
        <math>
          <msup>
            <mi>2</mi>
            <mn>
              <math>
                <mfrac>
                  <mi> 2 </mi> <mi> 3 </mi>{" "}
                </mfrac>
              </math>
            </mn>
          </msup>
        </math>
      </p>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no37" style={{ display: "inline-flex" }} />
        <math>
          <msqrt>
            {" "}
            <mi> 2 </mi>
          </msqrt>
        </math>
        <br />
        <input
          type="radio"
          name="no37"
          id="jno37"
          style={{ display: "inline-flex" }}
        />
        <math>
          <mroot>
            <msup>
              <mi>2</mi>
              <mn>2</mn>
            </msup>
            <mn>3</mn>
          </mroot>
        </math>
        <br />
        <input type="radio" name="no37" style={{ display: "inline-flex" }} />
        <math>
          <msqrt>
            {" "}
            <mi>
              <msup>
                <mi>2</mi>
                <mn>3</mn>
              </msup>
            </mi>
          </msqrt>
        </math>
        <br />
        <input type="radio" name="no37" style={{ display: "inline" }} />
        <math>
          <msqrt>
            {" "}
            <mi>
              <msup>
                <mi>2</mi>
                <mn>5</mn>
              </msup>
            </mi>
          </msqrt>
        </math>
        <br />
      </p>
      <div id="rno37" />
      <hr />
      <p>
        perkalian akar
        <math>
          <msqrt>
            {" "}
            <mi>2</mi>
          </msqrt>
          <mi>. </mi>
          <msqrt>
            {" "}
            <mi> 3 </mi>
          </msqrt>
        </math>
      </p>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no38" style={{ display: "inline-flex" }} />
        6<br />
        <input
          type="radio"
          name="no38"
          id="jno38"
          style={{ display: "inline-flex" }}
        />{" "}
        <msup>
          <math>
            <msqrt>
              {" "}
              <mi> 6 </mi> <mo> </mo>
            </msqrt>
          </math>
          <br />
          <input type="radio" name="no38" style={{ display: "inline-flex" }} />
          <math>
            <msqrt>
              {" "}
              <mi> 5 </mi> <mo> </mo>
            </msqrt>
          </math>
          <br />
          <input type="radio" name="no38" style={{ display: "inline" }} />5
          <br />
        </msup>
      </p>
      <div id="rno38" />
      <hr />  
    </> );
   
}

export default Enam;
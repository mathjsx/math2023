import { MathJaxContext,MathJax } from "better-react-mathjax";

function Car() {
    return (
      <MathJaxContext>
        <MathJax >
  <math>
      <mfrac>
        <mn>45</mn>
        <mi>6</mi>
      </mfrac>
    </math>
        </MathJax>
        </MathJaxContext>
    
    );
  }
  
  export default Car;
  
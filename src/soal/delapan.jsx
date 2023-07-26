// import { MathJaxContext,MathJax } from "better-react-mathjax";

function Delapan(){
   
 return (
  <>
 
<h2>Logaritma</h2>
      $$a^c=b $$
      <p>bentuk bilangan berpangkat diatas dalam bentuk logaritmanya adalah</p>
      $$c=\log_ab$$
      <p />
      <p>
        a disebut basis;
        <br />
        b disebut numerus;
        <br />c adalah nilai logaritmanya
      </p>
      <br />
      <p>
        dengan demikian bilangan berpangkat
        <span>$$2^3=8 $$ </span>
        <br />
        dapat menjadi bentuk logaritma
        <span>$$3=\log_2 8$$ </span>
      </p>
      <p>atau</p>
      $$\log_2 8=3$$
      <br />
      $$\log_2 2^3=3$$
      <hr />
      <h5>Sifat 1:</h5>
      $$\log_aa^n=n$$
      <hr />
      <h5>Sifat 2:</h5>
      $$\log_aa.a=\log_aa+\log_aa$$
      <hr />
      <h5>Sifat 3:</h5>
      $$\log_aa.b=\log_aa+\log_ab$$
      <hr />
      <p>jika basis 10 maka simbol a dapat tidak ditulis</p>
      <h5>Sifat 4:</h5>
      
        $$\log{"{"}a.b{"}"}=\log{"{"}a{"}"}+\log{"{"}b{"}"}$$
      
      <hr />
      Tentukan nilai logaritma berikut <label>$$\log_2 16=...$$</label>
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no51" style={{ display: "inline-flex" }} />0
        <br />
        <input
          type="radio"
          name="no51"
          style={{ display: "inline-flex" }}
        />2 <br />
        <input type="radio" name="no51" style={{ display: "inline-flex" }} />3
        <br />
        <input
          type="radio"
          name="no51"
          id="jno51"
          style={{ display: "inline" }}
        />
        4<br />
      </p>
      <div id="rno51" />
      <hr />
      Tentukan nilai logaritma berikut ini $$\log_55=...$$
      <p style={{ fontSize: "small" }}>
        <input type="radio" name="no52" style={{ display: "inline-flex" }} />0
        <br />
        <input type="radio" name="no52" style={{ display: "inline-flex" }} />3
        <br />
        <input
          type="radio"
          name="no52"
          style={{ display: "inline-flex" }}
        />2 <br />
        <input
          type="radio"
          name="no52"
          id="jno52"
          style={{ display: "inline" }}
        />
        1<br />
      </p>
      <div id="rno52" />
      <hr /> 
    </> );
   
}

export default Delapan;
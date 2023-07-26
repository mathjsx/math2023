function kirim() {
  let poin=0
  const jno1=document.querySelector('#jno1')
  const nilai=document.querySelector('#nilai')
  if (jno1.checked){
      poin=poin+10}       
      else {
      }
nilai.innerHTML=poin
if(jno1.checked) jno1.checked=false
}
function Satu(props){
return (
  <>
<h1>Soal ke : {props.name}</h1>
<p id="nilai"></p> 

<form>
<ol>
<li><label>
  <input type="radio" name="soal1" id="jno1" value="opsi1" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal1" value="opsi2" /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal1" value="opsi3" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal1"  value="opsi4" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
</ol>
</form>
<button className="py-2 px-6 bg-slate-500 text-slate-200 rounded-3xl" onClick={kirim()}>cek nilai </button>
    </>
 );}
export default Satu;
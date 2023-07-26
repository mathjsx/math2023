import * as React from 'react';

function checkNilai() {
  let poin=0; 

  const jno1=document.querySelector('#jno1')
  const jno2=document.querySelector('#jno2')
  const jno3=document.querySelector('#jno3')
  const jno4=document.querySelector('#jno4')
  const jno5=document.querySelector('#jno5')
  const jno6=document.querySelector('#jno6')
  const jno7=document.querySelector('#jno7')
  const jno8=document.querySelector('#jno8')
  const jno9=document.querySelector('#jno9')
  const jno10=document.querySelector('#jno10')
const skore=document.querySelector('#skore')
  
  jno1.checked ? poin=poin+5: poin=poin-1;
  jno2.checked ? poin=poin+10: poin=poin-2;
  jno3.checked ? poin=poin+5: poin=poin-1;
  jno4.checked ? poin=poin+10: poin=poin-2;
  jno5.checked ? poin=poin+5: poin=poin-1;
  jno6.checked ? poin=poin+10: poin=poin-2;
  jno7.checked ? poin=poin+5: poin=poin-1;
  jno8.checked ? poin=poin+10: poin=poin-2;
  jno9.checked ? poin=poin+5: poin=poin-1;
  jno10.checked ? poin=poin+10: poin=poin-2;
  
  skore.innerHTML=poin
    

  };
 
export default function Satu(){


  
return (  
  <>
   <div id="bab0" className="border-2 p-4 m-2 rounded-3xl box-border border-blue-400 text-black bg-blue-300" >
  <h1 className='text-3xl bolt'>Bilangan Berpangkat</h1>
<form>
<ol>
<li>
<h1 className="text-xl underline">Soal 1</h1>
  <label>
  <input type="radio" id="jno1" name="soal1" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal1"  /><math>
  <msup>
    <mi>n</mi>

    
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal1"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal1"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 2</h1>
<li><label>
  <input type="radio"  name="soal2" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal2"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno2" name="soal2"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal2"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 3</h1>
<li><label>
  <input type="radio"  name="soal3" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal3"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno3" name="soal3"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal3"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 4</h1>
<li><label>
  <input type="radio"  name="soal4" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal4"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno4" name="soal4"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal4"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 5</h1>
<li><label>
  <input type="radio"  name="soal5" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal5"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno5" name="soal5"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal5"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li>
<h1 className="text-xl underline">Soal 6</h1>
  <label>
  <input type="radio" id="jno6" name="soal6" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal6"  /><math>
  <msup>
    <mi>n</mi>

    
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal6"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal6"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 7</h1>
<li><label>
  <input type="radio"  name="soal7" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal7"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno7" name="soal7"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal7"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 8</h1>
<li><label>
  <input type="radio"  name="soal8" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal8"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno8" name="soal8"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal8"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 9</h1>
<li><label>
  <input type="radio"  name="soal9" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal9"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno9" name="soal9"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal9"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<h1 className="text-xl underline">Soal 10</h1>
<li><label>
  <input type="radio"  name="soal10" /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>

<li><label>
  <input type="radio" name="soal10"  /><math>
  <msup>
    <mi>n</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" id="jno10" name="soal10"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
<li><label>
  <input type="radio" name="soal10"  /><math>
  <msup>
    <mi>a</mi>
    <mn>n</mn>
  </msup>
</math>
</label></li>
</ol>

</form>


<p id="skore"></p>
<button className="py-2 px-6 bg-slate-500 text-slate-200 rounded-3xl" onClick={checkNilai}>cek nilai  bilangan berpangkat</button>
<br />  
 
</div>
</>
)
};
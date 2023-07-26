
  function kirim() {
    let poin=0
    const jno1=document.querySelector('#jno1')
    if (jno1.checked){
        response="ok"
        poin=poin+10}       
        else {
        response="x" 
        }
rno1.innerHTML=response
nilai.innerHTML=poin
if(jno1.checked) jno1.checked=false
  }
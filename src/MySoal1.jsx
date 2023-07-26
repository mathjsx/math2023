import React, { Component } from "react";
// import Bab1 from './Bab1.js';
import Satu from './soal/satu';
// import Dua from './soal/dua';

class MySoal1 extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  formSubmit(event) {
    event.preventDefault();
    // console.log(this.state.selectedOption)
  }

  render() {

    return (

      <>
 

      
<div className="mx-auto w-full flex flex-wrap py-6 sm:px-0 lg:px-8">       
<aside className="border-green-400 text-black bg-green-200 border-2 p-4 rounded-3xl border-black w-full md:w-1/4 box-border">
<h3 className="text-black"> Tentang Portal Peta Pikiran</h3>
    
  <>
  <p>Bagaimana menggunakan situs ini?<br/>
  1.Arahkan pointer ke gambar mindmap<br/>
  2.Zoom dan geser  kesalah satu materi yang dikehendaki<br/>
  3.Klik caption vidio sesuai dengan materi<br/>
  4.Sambil mendengar audio/vidio  ... geser-geser gambar sesuai dengan narasi<br/>
  5.Pahami materi lalu kerjakan soalnya...ok, broo.</p>
  </>
</aside>

        <section className="w-full md:w-1/2 ">
          <div className=" flex flex-col space-y-4  ">
       <Satu/>
        {/* <Dua/> */}
        
          </div>
        </section>
        <aside className="border-green-400 text-black bg-green-200 border-2 p-4 rounded-3xl  w-full md:w-1/4 box-border">

    <h3 className="font-tangerine"> Tentang Portal Peta Pikiran</h3>
    
  <>
  <p>Bagaimana menggunakan situs ini?<br/>
 
  5.Pahami materi lalu kerjakan soalnya...ok, broo.</p>
  </>
</aside>
      </div>
      
      
    </>
    
    );
  }
}

export default MySoal1;
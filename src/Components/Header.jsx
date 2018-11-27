import React, { Component } from 'react';
class Inputs extends Component {
    constructor () {
        super()
        this.state = {
          value: '',
          name:"",
          date:""
          
        }
        this.changeNumber = this.changeNumber.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeDate = this.changeDate.bind(this)
      }
    
      changeNumber (event) {
        
         if(event.target.value.length<17 &&  !isNaN(Number(event.target.value))){
         
        this.setState({ 
          
            value:event.target.value
            
          })  }       
      }
      changeName (event) {
        
        if(event.target.value.length<17 &&  isNaN(event.target.value)){
       this.setState({ 
         
           name:event.target.value
           
         })  }       
     }
     changeDate (event) {
        
      if(event.target.value.length<5 &&  !isNaN(event.target.value)){
     this.setState({ 
       
         date:event.target.value
         
       })  }       
   }
       
        
        
      

    render(){
        return ( 
            <div className="Project">
            <div className="Credit">
                <div className="credit-card-text">
                   <span> CREDIT CARD</span>
                </div>
                <div className="puce-logo">
                   <img src="http://jamesdelaney.ie/dev/chip.png" />
                </div>

             <div className="card-information">
              <div className="logo-information">
               <div className="master-number">
                 <span>{(this.state.value.slice(0,4)+" "+this.state.value.slice(4,8)+" "+this.state.value.slice(8,12)+" "+this.state.value.slice(12,16)).padEnd(18,'X')}</span>
               </div>

               <div className="holder-card">
                 <div className="master-short-number">
                    <span>5257</span>
                 </div>
                 <div className="holder-card-text">
                   <div className="month-year">
                     <span> MONTH/YEAR </span>
                   </div>
                   <div className="holder-card-right">
                     <div className="valid">
                       {" "}
                       <span> VALID THIRU</span>
                     </div>
                     <div className="date">
                       <span>{(this.state.date.slice(0,2)<13?this.state.date.slice(0,2):12+"/"+this.state.date.slice(2,4)).padEnd(5,'-')}</span>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="holder-card-text">
                 <h1>{this.state.name.padEnd(15,'*').toUpperCase()}</h1>
               </div>
             </div>

             <div className="master-logo">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0S9gQ6Za6OyM5cS2tZoNC1ONHFDnWcPsPDTxSC5c4a8KYAj9DA" />
             </div>
           </div>
         </div>
            <div className="inputs">
            
            <input placeholder="CARD NUMBER" type="text" value={this.state.value} onChange={this.changeNumber} />
            
            
            
            <input placeholder="YOUR NAME" type="text" value={this.state.name} onChange={this.changeName}/>
            
            
            <input placeholder="XX/YY" type="text" value={this.state.date} onChange={this.changeDate}/>
            </div>
          </div>
          );
    }  }
  
 
export default Inputs;

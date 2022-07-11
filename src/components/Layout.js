import React,{useState} from 'react';
import "../assets/styles/layout.css";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Layout = () => {
  const [bill,setBill] = useState(0);
  const [tip , setTip] = useState(0.05);
  const [people,setPerson] = useState(0);
  const [tipAmount,setTipAmount] = useState(0);
  const [total,setTotal] = useState(0);


  const clickHandler = (e) => {
    setTip(parseInt(e.target.textContent)/100);
  }
  const changeHandler = (e) => {
    if( e.target.value === ""){
     setBill(0)
    } else if(e.target.value !== Number){
       setBill(parseInt(e.target.value))
   }}
   const personHandler = (e) => {
    if( e.target.value === ""){
     setPerson(0)
    } else if(e.target.value !== Number){
       setPerson(parseInt(e.target.value))
   }}
 
   if(people !== 0 & bill !==0){
     setTipAmount(((tip*bill)/people).toFixed(2));
     setTotal((bill / people) + tipAmount);
   }else{
     setTipAmount(0)
     setTotal(0)
   }
 
  return (
    <div className='layout'>
      <section className='right-container'>
          <div className='bill-container'>
              <label htmlFor='bill'>Bill</label>
              <input type="text" id='bill' placeholder='0' value={bill} onChange={changeHandler}/>
              <div>
                <img src={dollar} alt="dollar"/>
              </div>
          </div>
          <div className='tip-container'>
              <h4>Select Tip %</h4>
             <section className='tip-btns' onClick={clickHandler} value={people}>
                  <div>
                   5%
                  </div>
                  <div>
                    10%
                  </div>
                  <div>
                    15%
                  </div>
                  <div>
                    25%
                  </div>
                  <div>
                    50%
                  </div>
                  <div>
                    <input type="text" placeholder='Custum'/>
                  </div>
             </section>
          </div>
          <div className='people-container'>
              <label htmlFor='people'>Number Of People</label>
              <input type="text" id='people' placeholder='0' onChange={personHandler}/>
              <div>
                <img src={person} alt="person"/>
              </div>
          </div>
      </section>
      <section className='total-container'>
          <div className='child-total'>
              <div>
                  <p>Tip Amount</p>
                  <span>/person</span>
              </div>
              <div>
                  <h1>$ {tipAmount}</h1>
              </div>
          </div>
          <div className='child-total'>
              <div>
                  <p>Total</p>
                  <span>/person</span>
              </div>
              <div>
                  <h1>$ {total}</h1>
              </div>
          </div>
          <div className='reset-btn'>
              <button>Reset</button>
          </div>
      </section>
    </div>
  )
}

export default Layout
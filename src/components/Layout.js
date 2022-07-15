import React,{useState} from 'react';
import "../assets/styles/layout.css";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Layout = () => {
  const [bill,setBill] = useState(0);
  const [tip , setTip] = useState(0);
  const [people,setPerson] = useState(0);
  const [touched , setTouched] = useState(false);
  const [custom,setCustom] = useState('')


  const clickHandler = (e) => {
    setTip(parseInt(e.target.textContent)/100);
   
  }

  const changeHandler = (e) => {
    if( e.target.value === ""){
     setBill(0)
    } else if(!isNaN(e.target.value)){
       setBill(parseFloat(e.target.value))
   }}
   const personHandler = (e) => {
    if( e.target.value === ""){
     setPerson(0)
    } else if(e.target.value !== Number){
       setPerson(parseInt(e.target.value))
   }};

   const customHandler = (e) => {
     if(e.target.value === ""){
       setCustom('');
     }else if(e.target.value !== Number){
      const tip = setCustom(parseInt(e.target.value));
       console.log(tip)
     }
   }

 
  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setPerson(0);
    setTouched(false)
  };
 
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
             <section className={`tip-btns ${touched ? "touched-btn" : ""}`} onClick={clickHandler} value={people}>
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
                    <input type="text" placeholder='Custum'  value={custom} onChange={customHandler}/>
                  </div>
             </section>
          </div>
          <div  className={`people-container ${touched && people === 0 ? "touched-input" : ""}`}>
              <div className='warning-container'>
                  <label htmlFor='people'>Number Of People</label>
                  <span>Can't be zero</span>
              </div>
              <input type="text" id='people' placeholder='0' onChange={personHandler} className={`touched && ${people === 0} ? "touched-input" : ""`} onClick={e => setTouched(true)} value={people}/>
              <div className='img-wrapper'>
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
                  <h1>$ 
                    {
                      (bill !== 0 && people !== 0) ? ((bill * tip)/people).toFixed(2) : 0
                    }
                  </h1>
              </div>
          </div>
          <div className='child-total'>
              <div>
                  <p>Total</p>
                  <span>/person</span>
              </div>
              <div>
                  <h1>$ 
                    {
                      (bill !== 0 && people !== 0) ? ((bill * tip)/people + (bill/people)) : 0
                    }
                  </h1>
              </div>
          </div>
          <div className={`reset-btn ${bill === 0 && people === 0 ? '' : 'active'}`}>
              <button onClick={resetHandler}>Reset</button>
          </div>
      </section>
    </div>
  )
}

export default Layout
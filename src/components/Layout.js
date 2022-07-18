import React,{useState} from 'react';
import "../assets/styles/layout.css";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";

const Layout = () => {
  const tips = [5,10,15,25,50];
  const [bill,setBill] = useState(0);
  const [tip , setTip] = useState(0);
  const [people,setPerson] = useState(0);
  const [touched , setTouched] = useState(false);
  const [custom,setCustom] = useState(0);
  const [selected, setSelected] = useState(false);

  const clickHandler = (e) => {
    setTip(parseInt(e.target.textContent)/100);
   
  }

  const changeHandler = (e) => {
   setBill(e.target.value)
   }
   const personHandler = (e) => {
    if( e.target.value === ""){
     setPerson(0)
    } else if(e.target.value !== Number){
       setPerson(parseInt(e.target.value))
   }};

   const customHandler = (e) => {
     if(e.target.value === 0){
       setCustom(0)
       setTip(0);
     }else {
       setCustom(e.target.value);
       setTip((e.target.value)/100);
     }
   }
  
 
  const resetHandler = () => {
    setBill(0);
    setTip(0);
    setPerson(0);
    setTouched(false);
    setSelected(false);
  };
 
  return (
    <div className='layout'>
      <section className='right-container'>
          <div className='bill-container'>
              <label htmlFor='bill'>Bill</label>
              <input type="number" id='bill' placeholder='0' value={bill} onChange={changeHandler}/>
              <div>
                <img src={dollar} alt="dollar"/>
              </div>
          </div>
          <div className='tip-container'>
              <h4>Select Tip %</h4>
             <section className='tip-btns' onClick={clickHandler}  value={tip}>
                  {
                    tips.map((tip,index) => <div key={index} className={`btns ${selected ? "active" : ""}`}>{tip}%</div>)
                  }
                  <div>
                    <input type="number" placeholder='Custum'  value={custom} onChange={customHandler}/>
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
                      (bill !== 0 && people !== 0) ? ((bill * tip)/people + (bill/people)).toFixed(4) : 0
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
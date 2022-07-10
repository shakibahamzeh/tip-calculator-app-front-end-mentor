import React from 'react';
import "../assets/styles/layout.css";

const Layout = () => {
  return (
    <div className='layout'>
      <section className='right-container'>
          <div className='bill-container'>
              <label htmlFor='bill'>Bill</label>
              <input type="text" id='bill' placeholder='0'/>
              <span>$</span>
          </div>
          <div className='tip-container'>
              <h4>Select Tip %</h4>
             <section className='tip-btns'>
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
              <input type="text" id='people' placeholder='0'/>
          </div>
      </section>
      <section className='total-container'>
          <div className='child-total'>
              <div>
                  <p>Tip Amount</p>
                  <span>/person</span>
              </div>
              <div>
                  <h1>$4.27</h1>
              </div>
          </div>
          <div className='child-total'>
              <div>
                  <p>Total</p>
                  <span>/person</span>
              </div>
              <div>
                  <h1>$32.79</h1>
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
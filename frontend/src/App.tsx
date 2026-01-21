import { useState, useRef } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='app'>
        <div style={{width: '100%', height: '100%', backgroundColor: 'rgba(22, 21, 20, 1)', maxWidth: 728, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="circle-blur">
            
          </div>
          <div style={{width: '90%', height: '90%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div style={{width: '100%', height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <div style={{height: '100%', aspectRatio: 1, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 12,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <div style={{height: '100%', aspectRatio: 1, backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: 12,  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
                      <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Total Balance</p>
              </div>
              <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <p style={{color: 'white', fontSize: '50px'}}>$5,450.500</p>
              </div>
              <div style={{width: '100%', height: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <div style={{width: '50%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                  <div style={{width: '95%', height: '80%', borderRadius: 10, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p>Deposit</p>
                  </div>
                </div>
                <div style={{width: '50%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                  <div style={{width: '95%', height: '80%', borderRadius: 10, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <p>Withraw</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{width: '100%', height: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <div style={{width: '100%', height: '10%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <p style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Favorites</p>
              </div>
            </div>
            <div style={{position: 'fixed', width: '100%', height: '15%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', bottom: 30}}>
              <div style={{width: '90%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 15, backdropFilter: 'blur(3px)', border: '2px solid gray', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 15}}>
                <div className='barButton'>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V15C12.75 14.5858 12.4142 14.25 12 14.25C11.5858 14.25 11.25 14.5858 11.25 15V18Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C11.2749 1.25 10.6134 1.44911 9.88928 1.7871C9.18832 2.11428 8.37772 2.59716 7.36183 3.20233L5.90622 4.06943C4.78711 4.73606 3.89535 5.26727 3.22015 5.77524C2.52314 6.29963 1.99999 6.8396 1.65907 7.55072C1.31799 8.26219 1.22554 9.0068 1.25519 9.87584C1.2839 10.717 1.43105 11.7397 1.61556 13.0219L1.90792 15.0537C2.14531 16.7036 2.33368 18.0128 2.61512 19.0322C2.90523 20.0829 3.31686 20.9169 4.05965 21.5565C4.80184 22.1956 5.68984 22.4814 6.77634 22.6177C7.83154 22.75 9.16281 22.75 10.8423 22.75H13.1577C14.8372 22.75 16.1685 22.75 17.2237 22.6177C18.3102 22.4814 19.1982 22.1956 19.9404 21.5565C20.6831 20.9169 21.0948 20.0829 21.3849 19.0322C21.6663 18.0129 21.8547 16.7036 22.0921 15.0537L22.3844 13.0219C22.569 11.7396 22.7161 10.717 22.7448 9.87584C22.7745 9.0068 22.682 8.26219 22.3409 7.55072C22 6.8396 21.4769 6.29963 20.7799 5.77524C20.1047 5.26727 19.2129 4.73606 18.0938 4.06943L16.6382 3.20233C15.6223 2.59716 14.8117 2.11428 14.1107 1.7871C13.3866 1.44911 12.7251 1.25 12 1.25ZM8.09558 4.51121C9.15309 3.88126 9.89923 3.43781 10.5237 3.14633C11.1328 2.86203 11.5708 2.75 12 2.75C12.4293 2.75 12.8672 2.86203 13.4763 3.14633C14.1008 3.43781 14.8469 3.88126 15.9044 4.51121L17.2893 5.33615C18.4536 6.02973 19.2752 6.52034 19.8781 6.9739C20.4665 7.41662 20.7888 7.78294 20.9883 8.19917C21.1877 8.61505 21.2706 9.09337 21.2457 9.82469C21.2201 10.5745 21.0856 11.5163 20.8936 12.8511L20.6148 14.7884C20.3683 16.5016 20.1921 17.7162 19.939 18.633C19.6916 19.5289 19.3939 20.0476 18.9616 20.4198C18.5287 20.7926 17.9676 21.0127 17.037 21.1294C16.086 21.2486 14.8488 21.25 13.1061 21.25H10.8939C9.15124 21.25 7.91405 21.2486 6.963 21.1294C6.03246 21.0127 5.47129 20.7926 5.03841 20.4198C4.60614 20.0476 4.30838 19.5289 4.06102 18.633C3.80791 17.7162 3.6317 16.5016 3.3852 14.7884L3.10643 12.851C2.91437 11.5163 2.77991 10.5745 2.75432 9.82469C2.72937 9.09337 2.81229 8.61505 3.01167 8.19917C3.21121 7.78294 3.53347 7.41662 4.12194 6.9739C4.72482 6.52034 5.54643 6.02973 6.71074 5.33615L8.09558 4.51121Z" fill="white"/>
                  </svg>
                </div>
                <div className='barButton'>
                  <svg fill="white" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V6A3,3,0,0,0,20,3Zm1,15a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1ZM9,12v4a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0Zm4-2v6a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm4-2v8a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z"/></svg>
                </div>
                <div className='barButton'>
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13C19.4477 13 19 13.4477 19 14C19 14.5523 19.4477 15 20 15Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.775 0.985398C18.4919 0.460783 20.2821 1.55148 20.6033 3.3178L20.9362 5.14896C22.1346 5.54225 23 6.67006 23 8V10.7639C23.6137 11.3132 24 12.1115 24 13V15C24 15.8885 23.6137 16.6868 23 17.2361V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.51309 2.08174 5.27884 3.50118 5.04128L16.775 0.985398ZM21 16C21.5523 16 22 15.5523 22 15V13C22 12.4477 21.5523 12 21 12H18C17.4477 12 17 12.4477 17 13V15C17 15.5523 17.4477 16 18 16H21ZM21 18V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V8C3 7.44772 3.44772 7 4 7H20C20.55 7 20.9962 7.44396 21 7.99303L21 10H18C16.3431 10 15 11.3431 15 13V15C15 16.6569 16.3431 18 18 18H21ZM18.6954 3.60705L18.9412 5H10L17.4232 2.82301C17.9965 2.65104 18.5914 3.01769 18.6954 3.60705Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

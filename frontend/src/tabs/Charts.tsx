import {ProfileButton, NotificationButton} from '../components/IconButton'

import './style.css'

export default function Charts()
{
    return(
        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <div style={{width: '95%', height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 20}}>
                <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '30%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <ProfileButton />
                    </div>
                    <div style={{width: '30%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                        <p style={{color: 'white', fontSize: 20}}>ETH/USDT</p>
                        <svg width="20px" height="20px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="white" /></svg>
                    </div>
                    <div style={{width: '30%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                        <NotificationButton />
                    </div>
                </div>
                <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{width: '60%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                        <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                            <p style={{color: 'white', fontSize: '50px'}}>$5,450.500</p>
                        </div>
                        <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                            <p style={{color: 'rgba(2, 193, 115, 1)', fontSize: 20}}>0.89%</p>
                        </div>
                    </div>
                    <div style={{width: '40%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <div style={{width: '50%', height: '80%', minWidth: 120, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                                <p style={{color: 'white', fontSize: '20px'}}>1 hour</p>
                                <svg width="20px" height="20px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="white" /></svg>
                            </div>
                        </div>
                        <div style={{width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                            <div style={{width: '70%', height: '80%', minWidth: 150, borderRadius: 10, backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                                <p style={{color: 'white', fontSize: '20px'}}>Indicator</p>
                                <svg width="20px" height="20px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="white" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="charts-body">

            </div>
        </div>
    )
}
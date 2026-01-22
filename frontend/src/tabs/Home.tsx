import {WidgetButtonTall, WidgetButtonWide} from '../components/WidgetButton'
import TitleButton from '../components/TitleButton'
import {ProfileButton, NotificationButton} from '../components/IconButton'
import TapBar from '../components/TapBar'

export default function Home()
{
    return(
        <div style={{width: '100%', height: '100%'}}>
                        <div style={{width: '95%', height: '40%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                              <ProfileButton />
                            </div>
                            <div style={{width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                              <NotificationButton />
                            </div>
                          </div>
                          <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
                            <p style={{color: 'rgba(255, 255, 255, 0.6)'}}>Total Balance</p>
                          </div>
                          <div style={{width: '100%', height: '20%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <p style={{color: 'white', fontSize: '50px'}}>$5,450.500</p>
                          </div>
                          <div style={{width: '100%', height: '40%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <TitleButton title="Deposit"/>
                            <TitleButton title="Withdraw"/>
                          </div>
                        </div>
                        <div style={{width: '95%', height: '60%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                          <div style={{width: '100%', height: '10%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                            <p style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Favorites</p>
                          </div>
                          <div className='widget-body'>
                            <WidgetButtonTall />
                            <WidgetButtonTall />
                          </div>
                          <div style={{height: 50}}>
                            <p style={{color: 'white', fontSize: '20px', fontWeight: 'bold'}}>Popular cryptocurrency</p>
                          </div>
                          <div style={{width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 40}}>
                            <WidgetButtonWide />
                            <WidgetButtonWide />
                            <WidgetButtonWide />
                            <WidgetButtonWide />
                          </div>
                        </div>
                      </div>
    )
}
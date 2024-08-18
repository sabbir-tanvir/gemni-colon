import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemni</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sabbir.</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="crd">
                        <p>Are you having problem with coding?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="crd">
                        <p>You wanna solve some matrix problem </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="crd">
                        <p>I can help you with your girlfriend</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="crd">
                        <p>You wanna know the ending of the One pIece?</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        This ai can give some wrong information sometimes so place use it in your own risk
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Main


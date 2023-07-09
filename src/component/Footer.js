import { Instagram, LinkedIn } from '@mui/icons-material'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
       <div className="upper-footer">
            <div className="footer-description">
                <span>Purohit Social</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, explicabo.</span>
            </div>
            <div className="footer-subscribe">
                <form>
                    <input type="email" />
                    <input type="submit" value="Subscibe" />
                </form>
            </div>
            <div className="footer-contact">
                <div className="footer-follow">
                    <span>follow us</span>
                    <div className="footer-social-links">
                        <a href="https://www.linkedin.com/in/gautam-purohit-027417207" rel="noreferrer" target='_blank'><LinkedIn /></a>
                        <a href="https://instagram.com/purohit_gautam/" rel="noreferrer" target='_blank'><Instagram /></a>
                    </div>
                </div>
                <div className="footer-call-us">
                    <span>call us</span>
                    <a href='tel: 1234567890'>+91 1234567890</a>
                </div>
            </div>
       </div>
       <hr color='white' style={{width: '100%'}} />
       <div className="footer-bottom">
        <span>@2022 PurohitSocial. All Rights Reserved</span>
        <div>
            <span>Privacy Policy</span>
            <span>Terms & Condition</span>
        </div>
       </div>
    </div>
  )
}

import React from 'react'
import Link from "next/link";
export default function barfooter() {
  return (
    <>

    
<div className="x-button-actions linecuttop01 linecutbt01" id="account-actions-mobile">
      <div className="-outer-wrapper">
        <div className="-left-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block"><a href="#">เข้าสู่ระบบ</a></span>
              <Link href="#"><img width="300" height="300" src="all/login01-300x300.png" className="image wp-image-5207  attachment-medium size-medium" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" loading="lazy" /></Link>
            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block"><a href="#">สมัครสมาชิก</a></span>
              <Link href="#"><img width="300" height="300" src="/all/register01-300x300.png" className="image wp-image-5208  attachment-medium size-medium" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" loading="lazy" /></Link>
            </span>
          </span>
        </div>
        <span className="-center-wrapper js-footer-lobby-selector js-menu-mobile-container">
          <div className="-selected">
            <h2 className="widgettitle"><a href="#">เข้าเล่น</a></h2>
            <Link href="#"><img width="380" height="295" src="all/ezgif-4-605b28d0c8-1.gif" className="image wp-image-5209  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} title="เข้าเล่น" decoding="async" loading="lazy" /></Link>
          </div>            
        </span>
        <div className="-fake-center-bg-wrapper">
          <svg viewBox="-10 -1 30 12">
            <defs>
              <linearGradient id="rectangleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2f2f2f"></stop>
                <stop offset="100%" stopColor="#101010"></stop>
              </linearGradient>
            </defs>
            <path d="M-10 -1 H30 V12 H-10z M 5 5 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0z"></path>
          </svg>
        </div>
        <div className="-right-wrapper">
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block"><a href="https://google.com/">แนะนำเพื่อน</a></span>
              <img width="300" height="300" src="all/icon111-768x768-1-300x300.png" className="image wp-image-5211  attachment-medium size-medium" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" loading="lazy" />
            </span>
          </span>
          <span className="-item-wrapper">
            <span className="-ic-img">
              <span className="-textfooter d-block"><a href="#">ติดต่อเรา</a></span>
              <Link href="#"><img width="500" height="500" src="all/lineneon.png" className="image wp-image-5212  attachment-full size-full" alt="" style={{ maxWidth: '100%', height: 'auto' }} decoding="async" loading="lazy" /></Link>
            </span>
          </span>
        </div>
        <div className="-fully-overlay js-footer-lobby-overlay"></div>
      </div>
    </div>


      
    </>
  )
}

import React from 'react'

export default function Contact() {
  return (
    <div className='contacts'>
      <div className="contact-map">
      <iframe title='hello' src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.54586609814!2d72.73989445795758!3d21.159180203484432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1688221347105!5m2!1sen!2sin"} height={300} style={{border: '0', width: '100vw'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" placeholder='username' required />
          <input type="email" placeholder='email' required />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  )
}

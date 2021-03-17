import React from 'react';
import ContactItem from '../components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../components/Title';

function ContactPage() {
  return (
    <div>
      <div className='title'>
        <Title title={'Contact Me'} span={'Contact Me'}></Title>
      </div>
      <div className='ContactPage'>
        <div className='map-sect'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9037.090716123545!2d-117.10380148568035!3d47.66998601630816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1615948563021!5m2!1sen!2sus'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowfullScreen=''
            loading='lazy'
          ></iframe>
        </div>
        <div className='contact-sect'>
          <ContactItem icon={phone} text1={'C: 954-294-5473'} title={'Phone'} />
          <ContactItem
            icon={email}
            text1={'KarsenHansen@outlook.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={'Liberty Lake, WA'}
            text2={'US'}
            title={'Location'}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

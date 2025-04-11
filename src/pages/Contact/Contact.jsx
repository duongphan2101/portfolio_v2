import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <div className='contact-container container-fluid p-5' id='contact'>
            <div className="icon-contact d-flex justify-content-center align-items-center p-5">
                <ul className='p-0 m-0 d-flex justify-content-center align-items-center'>
                    <li className='li-contact'><a href="https://www.facebook.com/duong.phan.2111912"><i class="bi bi-facebook"></i></a></li>
                    <li className='li-contact'><a href="https://github.com/duongphan2101"><i class="bi bi-github"></i></a></li>
                    <li className='li-contact'><a href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/"><i class="bi bi-linkedin"></i></a></li>
                    <li className='li-contact'>
                        <a href="mailto:pndaiduong1912@gmail.com">
                            <i class="bi bi-envelope-at-fill"></i>
                        </a>
                    </li>
                    <li className='li-contact'><a href="tel:0975707511"><i class="bi bi-telephone-fill"></i></a></li>
                </ul>
            </div>

            <p className='text-center'>This is my personal portfolio website, fully designed and coded by me. <br /> Thank you for visiting! You can find the source code on my GitHub.</p>
        </div>
    );
}
export default Contact;
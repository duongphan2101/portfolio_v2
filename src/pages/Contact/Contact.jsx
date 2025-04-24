import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className='contact-container container-fluid p-5' id='contact'>
            <div className="row justify-content-center">
                <div className="icon-contact d-flex justify-content-center align-items-center p-4">
                    <ul className='contact-list d-flex flex-wrap justify-content-center align-items-center'>
                        <li className='li-contact'>
                            <a href="https://www.facebook.com/duong.phan.2111912"><i className="bi bi-facebook"></i></a>
                        </li>
                        <li className='li-contact'>
                            <a href="https://github.com/duongphan2101"><i className="bi bi-github"></i></a>
                        </li>
                        <li className='li-contact'>
                            <a href="https://www.linkedin.com/in/phan-nguyen-dai-duong-1a2138309/"><i className="bi bi-linkedin"></i></a>
                        </li>
                        <li className='li-contact'>
                            <a href="mailto:pndaiduong1912@gmail.com"><i className="bi bi-envelope-at-fill"></i></a>
                        </li>
                        <li className='li-contact'>
                            <a href="tel:0975707511"><i className="bi bi-telephone-fill"></i></a>
                        </li>
                    </ul>
                </div>

                <p className='text-center description'>
                    This is my personal portfolio website, fully designed and coded by me.
                    <br />
                    Thank you for visiting! You can find the source code on <a href="https://github.com/duongphan2101/portfolio_v2.git" className='mygit'>my GitHub</a>.
                </p>
            </div>
        </div>
    );
}

export default Contact;

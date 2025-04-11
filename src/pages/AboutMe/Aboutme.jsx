import Header from '../Header/Header';
import avatar from '../../assets/avt.jpg';
import './Aboutme.css';

function Aboutme() {
    return (
        <div>
            <Header />
            <main className="about-me-container d-flex align-items-center justify-content-end" id='about'>
                <div
                    className="avt"
                    style={{
                        backgroundImage: `url(${avatar})`,
                    }}
                ></div>

                <p className="text-about-me">
                    Hi! I'm Dương, a final-year Software Engineering student with a passion
                    for backend development. I enjoy learning new things and turning ideas
                    into practical, meaningful projects.
                </p>
            </main>

        </div>
    )
}

export default Aboutme;
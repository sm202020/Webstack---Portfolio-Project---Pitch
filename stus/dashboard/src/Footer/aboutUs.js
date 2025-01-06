import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import Samson from '../assets/Samson.jpg';
import MailIcon from '../assets/mailIcon.png';
import gitHubIcon from '../assets/gitHubIcon.png';
import linkedInIcon from '../assets/linkedinIcon.png';
import Smith from '../assets/Smith.jpg';
// import Najaatu from '../assets/Najaatu.jpg';
import Taofeek from '../assets/Taofeek.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function AboutUs(){
    const navigate = useNavigate();

    return(
        <>
        <Header onHeaderClick={() => navigate('/')}/>
        <nav className={css(AboutUsStyles.nav)}>
                    <button onClick={() => navigate('/login')} className={css(AboutUsStyles.navButton)}>Log In</button>
                    <button onClick={() => navigate('/signup')} className={css(AboutUsStyles.navButton)}>Sign Up</button>
        </nav>
        <div className={css(AboutUsStyles.body)}>
           <header className={css(AboutUsStyles.header)}>
                <h1 className={css(AboutUsStyles.headerH1)}>ABOUT US</h1>
           </header>
            <p><i><strong>Stus</strong> is a project management software web application that provides a platform to improve personal task planning. 
                It focus on delivering a digital work space that meets the important needs of user's while managing tasks,editing tasks ,
                updating tasks,organize tasks, and tracking progress.</i>
            </p>

            <h2>Mission Statement</h2>

            <p><i>Stus focus on delivering a digital work space that meets the essential needs of user's while managing tasks,
                 organize tasks, and tracking progress.</i>
            </p>

            <h2>Vision Statement</h2>

            <p><i>To allows users to create, edit, delete, and organize tasks efficiently, helping to boost productivity 
                and manage time effectively.</i>
            </p> 

            <h2 className={css(AboutUsStyles.headerH1)}>TEAM MEMBERS</h2>
            <div className={css(AboutUsStyles.main)}>
        
                <div className={css(AboutUsStyles.teamCard)}> 
                    <img src={Samson}  alt="Samson.jpg" className={css(AboutUsStyles.img)} />
                    <h3 className={css(AboutUsStyles.h3)}>Agbo Samson Udochukwu</h3>
                    <p className={css(AboutUsStyles.p)}><strong>Role: Full-stack Developer</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Focus on Backend Contribution</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Implementation of API, authentication</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Design landing page</strong></p>
                    <div className="links">
                      <a href="mailto:Samson@gmail.com" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={MailIcon} alt="Email" className={css(AboutUsStyles.icon)}  />
                        Email
                      </a>
                      <a href="https://github.com/Udoozy" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={gitHubIcon} alt="GitHub" className={css(AboutUsStyles.icon)} />
                        GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/samson-agbo-630053279" target="_blank" className={css(AboutUsStyles.a)} > 
                          <img src={linkedInIcon} alt="LinkedIn" className={css(AboutUsStyles.icon)} /> LinkedIn</a>
                    </div>
                </div>

                <div className={css(AboutUsStyles.teamCard)}>
                    <img src={Smith} alt="Smith's picture" className={css(AboutUsStyles.img)} />
                    <h3 className={css(AboutUsStyles.h3)}>Smith Mebawondu</h3>
                    <p className={css(AboutUsStyles.p)}><strong>Role: Frontend Developer</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Tester</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Work on Html and css files</strong></p>
                    <div className="links">
                      <a href="mailto:akinbode4life@gmail.com" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={MailIcon} alt="Email" className={css(AboutUsStyles.icon)} />
                        Email
                      </a>
                      <a href="https://github.com/sm202020" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={gitHubIcon} alt="GitHub" className={css(AboutUsStyles.icon)} />
                        GitHub
                      </a>
                      <a href="https://ng.linkedin.com/in/smith-mebawondu-5312221a0?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={linkedInIcon} alt="LinkedIn" className={css(AboutUsStyles.icon)} />
                        LinkedIn
                      </a>
                    </div>
                </div>

                <div className={css(AboutUsStyles.teamCard)}>
                    <img src={Taofeek} alt="Taofeek's picture" className={css(AboutUsStyles.img)} />
                    <h3 className={css(AboutUsStyles.h3)}>Ojewande Taofeek</h3>
                    <p className={css(AboutUsStyles.p)}><strong>Role: Designer</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Setup initial project files</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Creation of data models</strong></p>
                    <p className={css(AboutUsStyles.p)}><strong>Contributed to overall platform design</strong></p>
                    <div className="links">
                      <a href="mailto:taofeekojewande@nda.edu.ng" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={MailIcon} alt="Email" className={css(AboutUsStyles.icon)} />
                        Email
                      </a>
                      <a href="https://github.com/ojewande-taofeek" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={gitHubIcon} alt="GitHub" className={css(AboutUsStyles.icon)} />
                        GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/ojewande-taofeek?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" alt="LinkedIn" target="_blank" className={css(AboutUsStyles.a)} >
                        <img src={linkedInIcon} alt="LinkedIn" className={css(AboutUsStyles.icon)} />
                        LinkedIn 
                      </a>
                      
                    </div>
                </div>

                <div className={css(AboutUsStyles.teamCard)}>
                     <img src={Smith} alt="Najaatu's picture" className={css(AboutUsStyles.img)} />
                     <h3 className={css(AboutUsStyles.h3)}>Najaatu Atiku Umar</h3>
                     <p className={css(AboutUsStyles.p)}><strong>Role: Tester</strong></p>
                     <p className={css(AboutUsStyles.p)}><strong>Contributed to overall platform design</strong></p>
                     <div className="links">
                       <a href="najaatiku1@gmail.com" target="_blank" className={css(AboutUsStyles.a)} >
                         <img src={MailIcon} alt="Email" className={css(AboutUsStyles.icon)} />
                         Email
                       </a>
                       <a href="https://github.com/Atikunaja" target="_blank" className={css(AboutUsStyles.a)} >
                         <img src={gitHubIcon} alt="GitHub" className={css(AboutUsStyles.icon)} />
                         GitHub
                       </a>
                       <a href="https://www.linkedin.com/in/naja-atiku-099470227" target="_blank" className={css(AboutUsStyles.a)} >
                           <img src={linkedInIcon} alt="LinkedIn" className={css(AboutUsStyles.icon)} />
                           LinkedIn
                        </a>
                     </div>
                </div>
            </div>
            </div>
        </>

    )
}

const AboutUsStyles = StyleSheet.create({
    body: {
        fontFamily: 'Arial, "sans-serif"',
        margin: '0px',
        padding: '0px',
        backgroundColor: '#f4f4f9',
        color: '#333',
    },

    header: {
        backgroundColor: "#0077b5",
        color: 'white',
        padding: "20px 0",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        marginTop: "4rem",
    },

    headerH1: {
        margin: "0",
        fontSize: "2.5rem",
        textAlign: "center",
    },

    main: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        gap: "20px",
    },

    teamCard: {
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "100%",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        ":hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        },
    },

    img: {
        borderRadius: "50%",
        width: "120px",
        height: "120px",
        marginBottom: "15px",
    },

    h3:  {
    margin: "10px 0 5px",
    color: "#0077b5",
    },

    p: {
    margin: "5px 0",
    fontSize: "0.9rem",
    },

    a: {
    margin: "5px 10px",
    textDecoration: "none",
    color: "#0077b5",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    },

    icon: {
    width: "20px",
    height: "20px",
    marginRight: "5px",
    },
    nav: {
        position: "absolute",
        right: '0',
        top: '2rem',
    },
    navButton: {
        margin: "0 0.5rem",
        ":hover": {
            backgroundColor: 'aqua',
            cursor: "pointer",
        }
    },
})

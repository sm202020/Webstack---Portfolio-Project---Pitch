import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { StyleSheet, css } from 'aphrodite';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className={css(lpBodyStyles.homePageContainer)}>
                <Header />
                <div className={css(lpBodyStyles.lpBody)}>
                    <div>
                        <h2 className={css(lpBodyStyles.lpBodyHeading)}>Manage your daily tasks</h2>
                        <p className={css(lpBodyStyles.lpBodyTag)}>Easily plan and manage all your personal tasks</p>
                    </div>
                    <div className={css(lpBodyStyles.lpBodyLinks)}>
                        <button onClick={() => navigate('/signup')} className={css(lpBodyStyles.button)}>Sign Up</button>
                        <button onClick={() => navigate('/login')} className={css(lpBodyStyles.button)}>Sign In</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}


const lpBodyStyles = StyleSheet.create({
    homePageContainer: {
        width: "100%",
        height: "100vh",
        background: "white",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    lpBody: {
        position: "absolute",
        top: "10rem",
        left: "5rem",
        width: "60%",
        height: "50vh",
        '@media (max-width: 1240px)': {
            left: "1rem",
            top: "12rem",
            width: "80%",
        },
    },
    lpBodyHeading: {
        fontWeight: "bolder",
        fontSize: "3rem",
        marginBottom: "0",
        '@media (max-width: 1240px)': {
            fontSize: "2rem",
        },
    },
    lpBodyTag: {
        marginTop: "0rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
        '@media (max-width: 1240x)': {
            fontSize: "0.9rem",
        },
    },
    lpBodyLinks: {
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
        margin: "1rem",
        '@media (max-width: 1240x)': {
            width: "40%",
        },
    },

    button: {
        ":hover" : {
            backgroundColor: 'aqua',
            cursor: "pointer",
        },
        '@media (max-width: 1024px)': {
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            height: "3rem",
            width: '5rem',
        },
    },
})
import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { StyleSheet, css } from 'aphrodite';
import LogIn from '../Forms/logIn'; 
import SignUp from '../Forms/signup';

export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {displayLogIn: false, displaySignUp: false};
    }

    handleLogIn() {
        this.setState({ displayLogIn: true });
    }

    handleSignUp() {
        this.setState({ displaySignUp: true });
    }
    render() {
        return (
            <div>
            <div className={css(lpBodyStyles.homePage)}>
            <Header />
            <div className={css(lpBodyStyles.lpBody)}> 
                <div>
                     <h2 className={css(lpBodyStyles.lpBodyHeading)}>Manage your daily tasks</h2>
                     <p className={css(lpBodyStyles.lpBodyTag)}>Easily plan and manage all your personal tasks</p>
                </div>
                <div className={css(lpBodyStyles.lpBodyLinks)}>
                     <button onClick={this.handleSignUp} className={css(lpBodyStyles.button)}>Sign Up</button>
                     <button onClick={this.handleLogIn} className={css(lpBodyStyles.button)}>Sign In</button>
                </div>
            </div>  
            <Footer /> 
            </div>
            {this.state.displayLogIn && <LogIn />}
            {this.state.displaySignUp && <SignUp />}
            </div>
            
        )
    }
}

const lpBodyStyles = StyleSheet.create({
    
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
        cursor: "pointer",
        margin: "1rem",
        '@media (max-width: 1240x)': {
            width: "40%",
        },
    },

    button: {
        ":hover" : {
            backgroundColor: 'aqua',
        },
        '@media (max-width: 1024px)': {
            marginLeft: '0.5rem',
            marginRight: '0.5rem',
            height: "3rem",
            width: '5rem',
        },
    },
})
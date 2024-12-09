import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import LogIn from './logIn';
import SignUp from './signup';
import Header from '../Header/header';

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { displayLogIn: false, displaySignUp: false }
    }

    handleLogIn() {
        this.setState({ displayLogIn: true });
    }

    handleSignUp() {
        this.setState({ displaySignUp: true})
    }

    render() {
        return (
            <div>
                <Header />
            <div className={css(forgorPassStyles.container)}>
                <div className={css(forgorPassStyles.forgotP)}>
                    <h1 className={css(forgorPassStyles.formTitle)}>Forgot Password</h1>
				<form action="">
					<div className={css(forgorPassStyles.center, forgorPassStyles.mt20)}>
						<input className={css(forgorPassStyles.inputText)} type="email" id="forgotPassEmail" placeholder="Email Address" />
					</div>
					<div className={css(forgorPassStyles.center, forgorPassStyles.mt20)}> 
						<input className={css(forgorPassStyles.submitBtn)} type="submit" value="Reset Password" id="PasswordResetBtn" />
					</div>
				</form>
				<p className={css(forgorPassStyles.center, forgorPassStyles.mt20, forgorPassStyles.Acct)}>
					Back to the 
					<a onClick={this.handleLogIn} className={css(forgorPassStyles.AcctLink)}>Login page</a>
                    <a onClick={this.handleSignUp} className={css(forgorPassStyles.AcctLink)}>Sign Up</a>
				</p>
                </div>
                </div>
                {this.state.displayLogIn && <LogIn />};
                {this.state.displaySignUp && <SignUp />};
			</div>
        )
    }
}

const forgorPassStyles = StyleSheet.create({
    container: {
        height: '100vh',
	    width: '100%',
	    background: '#2e7ce2',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    forgotP: {
        width: "30%",
        height: "40%",
	    background: "#cecae5",
	    margin: "auto",
        marginTop: "5%",
	    borderRadius: "1rem",
	    boxSizing: "border-box",
	    padding: "1.5rem",
	    transform: "scale(1.2)",
	    boxShadow: "0 0 0.2rem 0 #ebeaf0",
        fontFamily: "'Nunito Sans', sans-serif",
        '@media (max-width: 950px)': {
            width: "60%",
            marginTop: "40%",
        },
    },
    formTitle: {
        textAlign: "center",
        paddingTop: "0",
        marginTop: "0",
        fontWeight: "bolder",
        letterSpacing: "0.1rem",
        fontSize: "2rem",
    },
    center: {
        textAlign: "center",
    },
    inputText: {
        textAlign: "left",
        width: "90%",
	    height: "1.7rem",
	    border: "0rem",
	    border: "0.01rem solid #747474",
	    boxSizing: "borderBox",
	    padding: "0.5rem",
	    borderRadius: "0.5rem",
	    fontSize: "1rem",
        margin: "auto",
	    fontFamily: "'Nunito Sans', sans-serif",
        ':focus': {
            outline: 'none',
        },
    },
    mt10: {
        marginTop: "0.4rem",
    },
    mt20: {
        marginTop: "0.8rem"
    },
    submitBtn: {
        width: "95%",
	    height: "2rem",
	    border: "0",
	    borderRadius: "0.5rem",
	    cursor: "pointer",
	    fontSize: "1rem",
	    letterSpacing: "0.05rem",
	    fontFamily: "'Nunito Sans', sans-serif",
	    fontWeight: "bolder",
	    transition: "0.4s",
	    backgroundColor: "#747474",
	    color: "#fff",
        ':hover': {
            backgroundColor: "#fff",
	        color: "#444",
        },
    },
    Acct: {
        letterSpacing: "0.06rem",
	    fontSize: "1rem",
	    color: "#747474;",
    },
    AcctLink: {
        fontStyle: "italic",
	    textDecoration: "none",
	    color: "#002b27",
	    fontWeight: "normal",
	    transition: "0.4s",
        marginLeft: "1rem",
        ':hover': {
            color: "#008d7f",
        },
    },
})

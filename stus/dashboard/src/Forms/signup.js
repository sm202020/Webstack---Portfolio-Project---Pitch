import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import LogIn from './logIn';
import Header from "../Header/header";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.state = { displayLogIn: false}
    }

    handleLogIn() {
        this.setState({ displayLogIn: true });
    }
    render() {
        return (
            <div>
                <Header />
            <div className={css(signUpStyles.container)}>
                <div className={css(signUpStyles.signUp)}>
                    <h1 className={css(signUpStyles.formTitle)}>Sign Up</h1>
				<form action="#">
					<div className={css(signUpStyles.center)}>
						<input className={css(signUpStyles.inputText)} type="text" placeholder="Full Name" />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="email" placeholder="Email Address" />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="password" placeholder="Password" />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="password" placeholder="Confirm Password" />
					</div>
					<div className={css(signUpStyles.center, signUpStyles.mt20)}>
						<input className={css(signUpStyles.submitBtn)} type="submit" value="SignUp" />
					</div>
				</form>
			    <p className={css([signUpStyles.center, signUpStyles.mt20, signUpStyles.Acct])}>
					Already have an account? 
					<a onClick={this.handleLogIn} className={css(signUpStyles.AcctLink)} href="#">Login now</a>
				</p>
                </div>
            </div>
            {this.state.displayLogIn && <LogIn />}
			</div>
        )
    }
}

const signUpStyles = StyleSheet.create({
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
    signUp: {
        width: "30%",
        height: "70%",
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
        width: "100%",
	    height: "2rem",
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
        width: "100%",
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
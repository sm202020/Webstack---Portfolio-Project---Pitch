import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import SignUp from "./signup";
import Header from "../Header/header";
import LandingPage from "../LandingPage/landingPage";
import ForgotPassword from "./forgotPassword";
import { auth } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'
//import { collection, getDocs } from "firebase/firestore";

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleHomePage = this.handleHomePage.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.handleLogInInputChange = this.handleLogInInputChange.bind(this);
        this.userLogIn = this.userLogIn.bind(this);
        this.state = { email: "", password: "",
                    dispalySignUp: false, displayHome: false,
                    displayForgotPassword: false};
    }

    async userLogIn(event) {
        event.preventDefault();
        const { email, password } = this.state;
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
            alert(`${email} logged in succesfully`);
        })
        .catch((error) => alert(error.message));
    }

    handleLogInInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSignUp() {
        this.setState({ dispalySignUp: true});
    }
    handleHomePage() {
        this.setState({ displayHome: true })
    }

    handleForgotPassword() {
        this.setState({ displayForgotPassword: true})
    }

    render() {

        const { email, password } = this.state;
        return (
            <div>
                <div onClick={this.handleHomePage}> 
                    <Header />
                </div>
            <div className={css(logInStyles.logInContainer)}>
                <div className={css(logInStyles.logIn)}>
                    <h1 className={css(logInStyles.formTitle)}>Login</h1>
                    <form onSubmit={this.userLogIn}>
                        <div className={css(logInStyles.center)}>
				    		<input  className={css(logInStyles.inputText)}  type="email" placeholder="Email Address" name="email" value={email} onChange={this.handleLogInInputChange} /> 
				    		<input  className={css([logInStyles.inputText, logInStyles.mt10])} type="password" placeholder="Password" name="password" value={password} onChange={this.handleLogInInputChange} />
				    	</div>
                        <div className={css([logInStyles.passRem, logInStyles.mt10])}>
				    		<div>
				    			<a onClick={this.handleForgotPassword} className={css(logInStyles.forgotPass)}>Forgot Password?</a>
				    		</div>
				    		<div>
				    			<input className={css(logInStyles.rememberMe)} id="rememberMe" type="checkbox" />
				    			<label htmlFor="rememberMe">Remember Me</label>
				    		</div>
				    	</div>

				    	<div className={css([logInStyles.center, logInStyles.mt20])}>
				    		<input className={css(logInStyles.submitBtn)}  type="submit" value="Login" id="LoginBtn" />
				    	</div>
                    </form>
                    <p  className={css([logInStyles.center, logInStyles.mt20, logInStyles.noAcct])}>
					    Don't have an account? 
					<a onClick={this.handleSignUp} className={css(logInStyles.noAcctLink)}>Sign Up</a>
				</p>
                </div>
            </div>
            {this.state.dispalySignUp && <SignUp />};
            {this.state.displayHome && <LandingPage />}
            {this.state.displayForgotPassword && <ForgotPassword />}
            </div>
        )
    }
}

const logInStyles = StyleSheet.create({
    logInContainer: {
        height: '100vh',
	    width: '100%',
	    background: '#2e7ce2',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,

    },
    logIn: {
        width: "30%",
        height: "60%",
	    background: "#cecae5",
	    margin: "auto",
        marginTop: "10%",
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
        paddingTop: "5%",
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
    passRem: {
        display: "flex",
	    justifyContent: "center",
	    gap: "1rem",
	    fontSize: "0.9rem",
        flexDirection: "row",
    },
    forgotPass: {
        color: "#002b27",
	    fontWeight: "bold",
	    transition: "0.4s",
        textDecoration: "none",
        fontStyle: "italic",
        ':hover': {
            color: "#f4f8f7",
            cursor: "pointer",
        },
    },
    rememberMe: {
        height: "0.8rem",

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
    noAcct: {
       letterSpacing: "0.06rem",
	    fontSize: "1rem",
	    color: "#747474;",
    },
    noAcctLink: {
        fontStyle: "italic",
	    textDecoration: "none",
	    color: "#002b27",
	    fontWeight: "normal",
	    transition: "0.4s",
        marginLeft: "1rem",
        ':hover': {
            color: "#008d7f",
            cursor: "pointer",
        },
    },
    
});

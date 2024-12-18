import React, { Component,  } from 'react';
import { StyleSheet, css } from 'aphrodite';
import LogIn from './logIn';
import Header from "../Header/header";
import LandingPage from '../LandingPage/landingPage';
import { db, auth } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleHomePage = this.handleHomePage.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.userSignUp = this.userSignUp.bind(this);
        this.createUser = this.createUser.bind(this);
        this.state = { name: "", email: "",
                        password: "", confirmPassword: "",
                        displayLogIn: false, displayHomePage: false,
                        signUpSuccess: false
                    };
    }

     handleSubmit(event) {
        event.preventDefault();
        this.userSignUp(event);
        this.createUser(event);
    }

    async createUser(event) {
        event.preventDefault();
       const { name, email, password, confirmPassword } = this.state;
       if (password !== confirmPassword) {
           alert("Passwords do not match");
           return;
       }
       try {
           await addDoc(collection(db, "backends"), { name, email, password });
           alert("SignUp successful");
       }
       catch(error) {
           alert(`Error from createUser: ${error.message}`);
       }
    }

    async userSignUp(event) {
        event.preventDefault();
        const { email, password } = this.state;
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("SignUp successfully");
            this.setState({ signUpSuccess: true });
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
    }

    handleLogIn() {
        this.setState({ displayLogIn: true });
    }

    handleHomePage() {
        this.setState({ displayHomePage: true });
    }

    handleInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    
    render() {
        const { name, email, password, confirmPassword,
            displayLogIn, displayHomePage, signUpSuccess } = this.state;

        if (signUpSuccess) {
            return <LogIn />
        }

        return (
            <div>
                <div onClick={this.handleHomePage}>
                    <Header />
                </div>
                

            <div className={css(signUpStyles.container)}>
                <div className={css(signUpStyles.signUp)}>
                    <h1 className={css(signUpStyles.formTitle)}>Sign Up</h1>
				<form onSubmit={this.handleSubmit}>
					<div className={css(signUpStyles.center)}>
						<input className={css(signUpStyles.inputText)} type="text" placeholder="Full Name" name='name' value={name} onChange={this.handleInputChange} />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="email" placeholder="Email Address" name='email' value={email} onChange={this.handleInputChange} />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="password" placeholder="Password" name='password' value={password} onChange={this.handleInputChange} />
						<input className={css([signUpStyles.inputText, signUpStyles.mt10])} type="password" placeholder="Confirm Password" name='confirmPassword' value={confirmPassword} onChange={this.handleInputChange} />
					</div>
					<div className={css(signUpStyles.center, signUpStyles.mt20)}>
						<input className={css(signUpStyles.submitBtn)} type="submit" value="SignUp" />
					</div>
				</form>
			    <p className={css([signUpStyles.center, signUpStyles.mt20, signUpStyles.Acct])}>
					Already have an account? 
					<a  className={css(signUpStyles.AcctLink)} onClick={this.handleLogIn}>Login now</a>
				</p>
                </div>
            </div>
            {displayLogIn && <LogIn />}
            {displayHomePage && <LandingPage />}
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
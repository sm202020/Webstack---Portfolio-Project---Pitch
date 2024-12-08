import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { StyleSheet, css } from 'aphrodite';

export class LandingPage extends Component {
    render() {
        return (
            <>
            <Header />
            <div className={css(lpBodyStyles.lpBody)}> 
                <div>
                     <h2 className={css(lpBodyStyles.lpBodyHeading)}>Manage your daily tasks</h2>
                     <p className={css(lpBodyStyles.lpBodyTag)}>Easily plan and manage all your personal tasks</p>
                </div>
                <div className={css(lpBodyStyles.lpBodyLinks)}>
                     <button className={css(lpBodyStyles.hover)}>Sign Up</button>
                     <button className={css(lpBodyStyles.hover)}>Sign In</button>
                </div>
            </div>  
            <Footer /> 
            </>
        )
    }
}

const lpBodyStyles = StyleSheet.create({
    lpBody: {
        position: "absolute",
        top: "10rem",
        left: "5rem",
        height: "30%",
        width: "60%",
    },
    lpBodyHeading: {
        fontWeight: "bolder",
        fontSize: "3rem",
        marginBottom: "0",
    },
    lpBodyTag: {
        marginTop: "0rem",
        fontWeight: "bold",
        fontSize: "1.5rem",
    },
    lpBodyLinks: {
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
    },
    hover: {
        ":hover" : {
            backgroundColor: 'aqua',
        }
    }
})
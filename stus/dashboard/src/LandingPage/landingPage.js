import React, { Component } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { StyleSheet, css } from 'aphrodite';

export class LandingPage extends Component {
    render() {
        return (
            <>
                <Header />
                <div> 
                    <div>
                        <h2>Manage your daily tasks</h2>
                        <p>Easily plan and manage all your personal tasks</p>
                    </div>
                    <div>
                        <p>Sign Up</p>
                        <p>Sign In</p>
                    </div>
                </div>
                <Footer /> 
            </>
        )
    }
}

const lpBodyStyles = StyleSheet.create({
    
})
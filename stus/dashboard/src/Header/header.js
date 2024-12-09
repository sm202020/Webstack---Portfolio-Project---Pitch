import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default class Header extends Component {
    render() {
    return (
        <div className={css(headerStyles.landingPage)}>
            <img src={logo} alt='logo' className={css(headerStyles.image)} />
            <h1 className={css(headerStyles.heading)}>STUS</h1>
            <p className={css(headerStyles.tagline)}>Your planning buddy</p>
        </div>
    )
    }
}

const headerStyles = StyleSheet.create({
    landingPage: {
        position: "absolute",
        top: '0.5rem',
        left: '1.5rem',
        display: "flex",
        flexDirection: 'row',
        flexWrap: "nowrap",
        height: "10%",
        width: "23%",
        border: "0.10rem solid blue",
        borderRadius: "1rem",
        '@media (max-width: 1024px)': {
            width: "45%",
        },
        zIndex: '1000',
        backgroundColor: "white",
    },
    image: {
        width: "40%",
        height: "100%",
        marginLeft: '0.7rem',
        '@media (max-width: 1024px)': {
            width: "30%",
        },
    },
    heading: {
        alignSelf: "center",
        width: "20%",
        marginRight: '1rem',
        fontSize: '2rem',
        '@media (max-width: 700px)': {
            marginRight: '0.5rem',
            fontSize: '1rem',
        },
    },
    tagline: {
        alignSelf: "baseline",
        marginLeft: '1rem',
        borderLeft: "0.05rem solid grey",
        paddingLeft: '0.5rem',
        fontSize: "1rem",
        '@media (max-width: 700px)': {
            marginLeft: '0.5rem',
            paddingLeft: '0.3rem',
            fontSize: '1rem',
            paddingTop: "-0.4rem",
        },
    },
});

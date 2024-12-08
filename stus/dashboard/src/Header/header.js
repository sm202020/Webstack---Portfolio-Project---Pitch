import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <div className={css(headerStyles.lanndingPage)}>
            <img src={logo} alt='logo' className={css(headerStyles.image)} />
            <h1 className={css(headerStyles.heading)}>STUS</h1>
            <p className={css(headerStyles.tagline)}>Your planning buddy</p>
        </div>
    )
}

const headerStyles = StyleSheet.create({
    lanndingPage: {
        position: "absolute",
        top: '1.5rem',
        left: '1.5rem',
        display: "flex",
        flexDirection: 'row',
        flexWrap: "nowrap",
        height: "10%",
        width: "23%",
        border: "0.10rem solid red",
        borderRadius: "1rem",


    },
    image: {
        width: "40%",
        height: "100%",
        marginLeft: '0.7rem',
    },
    heading: {
        alignSelf: "center",
        width: "20%",
        marginRight: '1rem',
    },
    tagline: {
        alignSelf: "baseline",
        marginLeft: '1rem',
        borderLeft: "0.05rem solid grey",
        paddingLeft: '0.5rem',
    },
});

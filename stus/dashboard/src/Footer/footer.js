import React from 'react';
import { getYear } from '../utils/getYear';
import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
    return (
    <footer className={css(footerStyles.footer)}>
        <p>Copyright {getYear()} - STUS Group</p>
    </footer>
    )
}

const footerStyles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: "2rem",
        left: "0",
        height: "5%",
        fontStyle: "italic",
        width: "100%",
        borderTop: "0.1rem solid red",
        textAlign: "center",
        fontWeight: 'bold',
    },
})

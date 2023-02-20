import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,500&display=swap');
    body {
        font-family: 'Montserrat', sans-serif;
        box-sizing: border-box;
        margin: 0;
        color: #191919
    }
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
        border: none;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    .middle {
        display: flex;
        align-items: center;
    }

    .pointer-opacity, .pointer {
        cursor: pointer;
    }
    .pointer-opacity:hover {
        opacity: 0.8;
        transition: all 200ms;
    }

    .link {
        color: #191919;
        font-size: 18px;
    }
    .link:hover {
    opacity: 0.7;
    transition: all 250ms linear;
    }

    .inner-icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 12px;
    }
    .right {
        right: 0;
        padding-right: 14px;
    }

    .loader {
        width: 24px;
        height: 24px;
        border: 3px solid #f7f7f7;
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
`
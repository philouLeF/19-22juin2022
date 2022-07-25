import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/synthwavebackground.jpg'

export const GlobaleStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Yantramanav', sans-serif;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Harttenschweiler, 'Arial Narrow Bold', sans-serif;
        background-image: linear-gradient(180deg, #FFFF4B, #F3257F);
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text,
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #352E5A);
        font-size: 70px;
        font-weight: 40;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        color: #F99365;
        cursor: pointer;
        background: rgba(23,9,45,0.5);
        border: none;
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`
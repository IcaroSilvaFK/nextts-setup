import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,html,#__next{
    width: 100%;
    height: 100%;

    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

  button,input{
    border: 0;
    outline: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul,ol{
    list-style: none;
  }
`

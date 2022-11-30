import styled from "styled-components"


export const bg__imageMovie = styled.div`

  .enabled{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 800px;
    background-size: cover;
    background-position: center top;
    transition: all .5s ease-in-out;
    will-change: opacity;
    overflow: hidden;  
    z-index: -1;
  }

  .enabled::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg,#020202 0,rgba(2,2,2,.96) 10%,rgba(2,2,2,.9) 22%,rgba(2,2,2,.66) 38%,rgba(2,2,2,.61) 58%,rgba(0,0,21,.76) 100%);
  }


`

export const main__bg = styled.main`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`

export const buttons__redirect = styled.div`
  display: flex;
  align-items: center;

  button{
    cursor: pointer;
  }

  .button__viewSerie-element, .button__seelater-element{
    border: none;
    margin: 2rem 1rem 0 0;
    border-radius: 2rem;
    padding: 0.9rem  2.5rem 0.9rem 1rem;
    background: rgb(247, 140, 31);
    color: #000;
    svg{
      margin: 0 1.5rem 0 0;
    }
  }

  .button__seelater-element{
    background: rgb(24, 27, 31);
    color: #fff;
    font-weight: 550;
  }

`
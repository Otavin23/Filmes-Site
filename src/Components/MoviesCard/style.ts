import styled from "styled-components"

export const backgroundCard = styled.section`
  background: var(--backgroundSecondary);
  width: 100%;
  display: flex;
  justify-content: center;
`

export const containerCard = styled.div`
  max-width: 1400px;
  width: 90%;
  height: 80%;

  h2 {
    color: var(--colorSecondary);
    text-transform: capitalize;
    font-size: clamp(16px, 2vw, 30px);
    opacity: 0.8;
    &::after {
      content: "";
      margin: 0 0 0 1rem;
      background-color: #c1c1c1;
      content: "";
      display: inline-block;
      height: 1px;
      position: relative;
      vertical-align: middle;
      width: 50%;
    }
  }
  margin: 3rem 0 0 0;
`

export const block__Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.5rem 0 0rem 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const card__block = styled.div`
  width: 210px;
  height: 370px;
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
`
export const card__image = styled.picture`
  width: 100%;
  height: 85%;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.2s linear 0s;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      opacity: 0.5;
      filter: contrast(130%);
    }
  }
`

import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 90%;
  height: calc(100vh - 140px);

  overflow: scroll;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 1fr);
`

export const Beer = styled.div`
  width: 350px;
  height: 350px;

  place-self: center;
  margin: 20px;
  border-radius: 20px;

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 80%;
    height: 75%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 90%;
    }
  }

  .title {
    width: 100%;
    height: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding-inline: 10px;

    text-align: center;

    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    color: #111;
  }
`

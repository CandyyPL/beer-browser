import styled from 'styled-components'
import ReactModal from 'react-modal'

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 60%;
  height: 75%;

  background-color: #fff;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.25);

  border-radius: 20px;
  padding: 50px;

  .close {
    position: absolute;
    top: 25px;
    right: 25px;

    width: 40px;
    height: 40px;

    background-color: #ddd;

    border: none;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    img {
      height: 50%;
    }

    transition: background-color 0.1s;

    &:hover {
      background-color: #bbb;
    }
  }
`

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .image {
    width: 25%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 90%;
    }
  }

  .info {
    width: 65%;
    height: 100%;

    font-family: 'Nunito', sans-serif;

    .name {
      font-size: 40px;
      font-weight: bold;
    }

    .tagline {
      font-size: 18px;
      font-weight: bolder;
    }

    .details {
      width: 80%;
      height: 50px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      font-size: 18px;
    }

    .description {
      margin-top: 20px;

      font-size: 22px;
    }
  }
`

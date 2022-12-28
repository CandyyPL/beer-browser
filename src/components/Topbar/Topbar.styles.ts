import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 80px;

  background-color: #fff;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #111;

  .left,
  .middle,
  .right {
    width: 30%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Nunito', sans-serif;
    color: #111;
  }

  .middle {
    font-size: 40px;
    font-weight: bold;
  }

  .right {
    font-size: 24px;
    font-weight: 500;

    .favCount {
      width: 30px;
      height: 40px;

      background-color: #ddd;

      border: none;
      border-radius: 5px;
      padding: 10px;
      margin: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      opacity: 0;
      transition: opacity 0.2s;

      &.active {
        opacity: 1;
      }
    }
  }
`

export const MenuButton = styled.span`
  cursor: pointer;

  position: relative;

  &::after {
    content: '';

    width: 100%;
    height: 2px;

    background-color: #111;

    position: absolute;
    bottom: 0;
    left: 0;

    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

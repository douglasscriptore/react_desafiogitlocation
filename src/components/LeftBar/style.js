import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100%;
  position: absolute;
  z-index: 1;
`

export const Content = styled.div`
  background: #fff;
  width: 350px;
  margin: 15px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);

  ul {
    list-style: none;
  }

  li {
    display: flex;

    justify-content: space-between !important;
    margin-top: 10px;
    padding: 5px;

    border-bottom: 1px solid #e6ecf0;
    cursor: pointer;

    &:first-child {
      margin-top: 0;
    }

    &:hover {
      background-color: #e8e8e8;
      border-radius: 4px;
    }

    div {
      display: flex !important;
      flex-direction: column;
      flex: 1;
      margin-left: 10px;
      justify-content: center;
      strong {
        font-size: 14px;
        color: #444444;
      }

      p {
        font-size: 12px;
        color: #868686;
      }
    }
  }
`

export const Actions = styled.section`
  flex-direction: row !important;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`

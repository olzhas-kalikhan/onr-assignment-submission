import styled from 'styled-components'
const CardField = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    width: 140px;
    height: 200px;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    text-align: center;
    ${({ active }) => active ?
        `   border : solid 1px #00AEEF;
            background: rgba(0, 174, 239, 0.10);
        `
        :
        `   border: solid 1px lightgrey;`
    }

`
export { CardField }
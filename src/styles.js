import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #FAFAFA;
    box-shadow: 0px 0px 8px 2px #a9a9a9;
    width: 30%;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
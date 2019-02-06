import styled from 'styled-components';

export const PictureContainer = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
`;



export const Picture = styled.span`
    border: 1px solid;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-image: url(${props => props.image});
`;

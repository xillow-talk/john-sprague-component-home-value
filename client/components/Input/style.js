import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
    padding: 0;
    margin: 0 0 0 60px;
    border: 1px solid #ccc;
`;

export const ReplyInput = styled.input`
    width: 100%
    padding: 5px 0;
    border-style: none;
    margin-left: 5px;
    &:focus {
    outline: none;
    }
    &:placeholder: {
        color: #ccc;
    }
`;

export const User = styled.a`
    font-size: 12px;
    display: flex;
    align-self: center;
    color: #38d;
    &: hover {
        color: #333;
    }
`;


export const ProfilePicture = styled.span`
    width: 20px;
    height: 20
    background-image: url(${props => (props.image ? props.image : 'linear-gradient(135deg,#846170,#70929c)')});
`;

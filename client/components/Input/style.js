export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    border: 1px solid #ccc;
    background-color: #fff;

`;

export const InputBorder = styled.div`
    width: 92%;
    display: flex;
    justify-content: center;
    margin: 0 0 0 60px;
    padding: 5px;
    background-color: #f2f2f2;
`;

export const ReplyInput = styled.input`
    width: 100%;
    height: 20px;
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
    font: 12px/1.4 "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Garuda,Verdana,Tahoma,sans-serif;
    color: #38d;
    padding: 3px;
    
    &: hover {
        color: #333;
    }
    ${props => props.deleting === false && `
        color: #fff;
        background: #06c;
        letter-spacing: 0.1px;
    `}
`;


export const ProfilePicture = styled.span`
    background-position: center;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    background-image: url(${props => (props.image ? props.image : 'linear-gradient(135deg,#846170,#70929c)')});
`;

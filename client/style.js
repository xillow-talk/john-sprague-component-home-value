import styled from 'styled-components';

export const CommentContainer = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    padding: 12px;
    width: 40%;
`;

export const Container = styled.div`
    flex-direction: column;
    display: flex;
`;

export const ReplyContainer = styled(Container)`
    width: 100%;
    height: 55px;
`;

export const TimeStamp = styled.span`
    padding: 5px;
    display: flex;
    color: #ccc;
    justify-content: flex-end;
`;

export const FontContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 98%;
`;

export const BorderContainer = styled.div`
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 6px;
    &:hover {
        border-color: #ccc;
    }
`;

export const Comment = styled.span`
    padding-left: 9px;
    font-family: sans-serif;
    font-size: 13px;
`;


export const Reply = styled.span`
    color: #333;
    padding-left: 10px;
`;

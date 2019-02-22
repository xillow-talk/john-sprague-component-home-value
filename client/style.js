export const CommentContainer = styled.div`
    display: flex;
    font-family: sans-serif;
    font-size: 12px;
    padding: 12px;
    width: 97%;
`;

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    width: 100%;
`;

export const ReplyContainer = styled(Container)`
    width: 20%;
    height: 55px;
`;

export const TimeStamp = styled.span`
    font-size: 11px;
    padding: 5px;
    display: flex;
    color: #999;
    justify-content: flex-end;
`;

export const FontContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

export const BorderContainer = styled.div`
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 6px;
    margin-right: 5px;
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

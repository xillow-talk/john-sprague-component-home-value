export const LoadingContainer = styled.div`
    padding: 200px 0;
    background: url(https://a-v2.sndcdn.com/assets/images/loader-db80c58.gif) no-repeat center center;
    clear: both;
    text-align: center;
    box-sizing: border-box;
    min-height: 40px;
    width: 100%;
`;


export const EndList = styled.div`
    clear: both;
    position: relative;
    top: -1px;
    height: 14px;
    margin: 25px 0 0 0;
    &:before{
        content: "";
        display: block;
        width: 100%;
        height: 14px;
        position: absolute;
        left: 0;
        top: -9px;
        background: url(https://a-v2.sndcdn.com/assets/images/stopper-9d4f27a.png) center center no-repeat;
    }
`;

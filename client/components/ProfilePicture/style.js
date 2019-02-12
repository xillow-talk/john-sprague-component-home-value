import styled from 'styled-components';

export const PictureContainer = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
`;


export const Picture = styled.span`
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background-image: url(${props => props.image});
`;


export const ProfileContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-self: center;
    padding-left: 15px;
    padding-top: 40px;
`;

export const Arrow = styled.div`
    border: 2px solid #333;
    border-width: 1px 1px 0 0;
    padding: 4px;
    transform: rotate(-45deg);
`;

export const Profile = styled.div`
    background-color: tomato;
    width: 150px;
    height: 200px;
    display: flex;
    position: absolute;
    align-self: center;
    margin-top: 5px;
    flex-direction: column;
    align-items: center;
`;

export const Photo = styled.span`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-top: 18px;
    background-image: url(${props => props.image});
`;


export const Username = styled.div`
    font-size: 16px;
    padding-top: 20px;
`;

export const FollowersContainer = styled.div`
    padding-top: 5px;
    color: #999;
`;


export const Followers = styled.span`
    padding-left: 6px;
`;


export const Follow = styled.div`

`;

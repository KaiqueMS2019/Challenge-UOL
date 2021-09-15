import {
    Section,
    Title,
    ListOfFollowersContainer,
    Followers
} from './styles';

const FollowersContainer = props => {
    console.log(props)

    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListOfFollowersContainer>
                {props?.followers?.map(follower => (
                    <Followers target="_blank" href= {follower?.html_url} key={follower?.id}>
                        <h2>{follower?.login}</h2>
                    </Followers>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
}

export default FollowersContainer;
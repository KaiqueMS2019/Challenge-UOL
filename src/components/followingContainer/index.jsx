import {
    Section,
    Title,
    ListOfFollowingContainer,
    Following
} from './styles';

const FollowingContainer = props => {
    console.log(props)

    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]}</Title>
            <ListOfFollowingContainer>
                {props?.following?.map(followings => (
                    <Following target="_blank" href= {followings?.html_url} key={followings?.id}>
                        <h2>{followings?.login}</h2>
                    </Following>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
}

export default FollowingContainer;
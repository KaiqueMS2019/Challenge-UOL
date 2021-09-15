import {
    Section,
    Title,
    ListOfStarredContainer,
    Starred
} from './styles';

const StarredContainer = props => {
    console.log(props)

    return (
        <Section>
            <Title>Estrelas de {(props.name)?.split(' ')[0]}</Title>
            <ListOfStarredContainer>
                {props?.starred?.map(star => (
                    <Starred target="_blank" href= {star?.html_url} key={star?.id}>
                        <h2>{star?.name}</h2>
                    </Starred>
                ))}
            </ListOfStarredContainer>
        </Section>
    );
}

export default StarredContainer;
import styled from 'styled-components';

export const Flex = styled.div`
display: flex;
flex-direction : ${props =>  props.direction || 'row'}
`
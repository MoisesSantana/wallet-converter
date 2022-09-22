import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--black);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--white);
    background-color: var(--blue);
    padding: 0 2rem;
    height: 3rem;
  }
`

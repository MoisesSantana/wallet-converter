import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--black-light);
  border-radius: var(--radius);
  width: 30rem;
  height: 20rem;
  gap: 2rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  button {
    font-size: 1rem;
    color: var(--white);
    background-color: var(--blue);
    padding: 0 2rem;
    height: 3rem;
  }
`

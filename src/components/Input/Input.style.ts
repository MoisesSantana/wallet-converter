import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  position: relative;
  gap: 0.4rem;
  width: 20rem;

  input {
    border-radius: var(--radius);
    background-color: var(--black);
    border: none;
    color: var(--white);
    font-size: 0.8rem;
    padding: 0.3rem;
  }

  .view-pass {
    position: absolute;
    right: 0.15rem;
    bottom: 0.15rem;
    cursor: pointer;
  }
`

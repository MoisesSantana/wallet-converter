import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  width: 100%;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 100%);
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`

export const SummaryCard = styled.div`
  grid: none;
  background-color: var(--black-light);
  padding: 1.5rem;
  border-radius: var(--radius);
  width: 100%;
  scroll-snap-align: start;
  color: var(--white);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &:nth-child(1) header {
    color: var(--green);
  }

  &:nth-child(2) header {
    color: var(--red);
  }

  &:nth-child(3) header {
    color: var(--blue);
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    line-height: 3rem;
  }
`

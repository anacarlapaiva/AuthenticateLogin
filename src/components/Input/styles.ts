import styled from 'styled-components';

export const Container = styled.div`

`;

export const InputComponent = styled.input<{ error?: boolean }>`
  height: .4rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background: transparent;
  width: 15rem;
  margin-bottom: 20px;
  /* margin-bottom:  ${({ error }) => (error ? "0" : "15px")};
  border-color: ${({ error }) => (error ? "#f00" : "#ddd")}; */


  &:hover,
  :focus{
    outline: none;
    border-color: #ccc;
    background: white;
    box-shadow: 0 0 0 2px #ccc;
  }
`;

// export const HelperText = styled.text<{ error?: boolean }>`
//   color: ${({ error }) => (error ? "#f00" : "#aaa")};
//   margin: 0.2rem;
//   @media screen and (max-width: 820px) {
//     width: 100%;
//     margin: 0 0 16px 0;
//   }
// `;
import styled from "styled-components";

export const Form = styled.div`
  background-color: ${props => props.theme.formBackground};
  border: none;
  box-shadow: 0 0 7px #ddd;
  border-radius: 5px;
  width: 800px;
  margin: 20px auto;
  padding: 16px 40px;
`;

export const Header = styled.div`
  font-size: 20px;
  color: ${props => props.theme.blue};
  width: 100%;
  border-bottom: 1px solid grey;
  
  > h4 {
    margin: 10px 0;
  }
`;

export const InputContainer = styled.div`
  margin-left: 2px;



  // display: grid;
  // grid-template-columns: 150px 500px 150px;
  // grid-gap: 10px;
  // grid-auto-rows: auto;
  // grid-auto-areas: "title field tooltip";
`;

export const InputBlock = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const Title = styled.div``;

export const Field = styled.div``;

export const Tooltip = styled.div``;



//   export const Form = styled.div`
//   background-color: ${props => props.theme.formBackground};
//   border: none;
//   box-shadow: 0 0 7px #ddd;
//   border-radius: 5px;
//   width: 800px;
//   margin: 20px auto;
//   padding: 16px 40px;
// `;

// export const Title = styled.div`
//   font-size: 20px;
//   color: ${props => props.theme.blue};
//   width: 100%;
//   border-bottom: 1px solid grey;
  
//   > h4 {
//     margin: 10px 0;
//   }
// `;

// export const InputContainer = styled.div`
//   margin-left: 2px;
// `;

// export const InputBlock = styled.div`
//   display: flex;
//   margin: 20px 0;
//   width: 100%;
// `;

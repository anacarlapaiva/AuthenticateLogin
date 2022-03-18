import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 470px;
`;

export const FormContent = styled.form`
  background-color: #f3f3f3;
  width: 26rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 16px 16px 0px;
  -webkit-box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);
  -moz-box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);
  box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);

    .content_top{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

  h1{ 
      font-size: 1.5rem;
      margin-bottom: 30px;

      &::before{
        content: '';
        background: url("user-interface.svg") no-repeat;
        width: 20px;
        height: 20px;
        float: left;
        margin: 0 6px 0 0;
      }
  }

  @media screen and (max-width: 1024px){
    border-radius: 8px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
   }
`;


export const FormContainer = styled.div`
display: flex;
flex-direction: column;

`;

export const PhotoLogin = styled.div`

    img{ 
        border-radius: 16px  0 0 16px;
        margin-top: 5px;
        max-width: 100%;
        height: 470px;
        -webkit-box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);
        -moz-box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);
        box-shadow: 0px 0px 9px 1px rgba(0,62,97,0.54);
    }

    @media screen and (max-width: 1024px){
    display: none;
   }
`;


import styled from "styled-components";
import Input from "./Components/Input";
import Button from "./Components/Button"

function App(){
    return <MainContent>
      <Helloadmin>Register Here!</Helloadmin>
      <InputContainer>
      <Input type="text"  placeholder="Email" />
      <Input type="password"  placeholder= "Password" />
      <Input type="password"  placeholder= "Confirm Password" />
      </InputContainer>
      <Forgotpassword>forgot password?</Forgotpassword>
      <ButtonContainer className="buttoncontainer">
        <Button content="Sign up" />
      </ButtonContainer>
     <HorizontalRule/>
     <Forgotpassword>Already Have an Account?</Forgotpassword>
     <ButtonContainer>
      <Button content= "Login"/>
     </ButtonContainer>
    </MainContent>
}
   const MainContent = styled.div`
            display:flex;
            align-items : center;
            flex-direction:column;
            height: 90vh;
            width:27vw;
            background: rgba(255, 255, 255, 0.15);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter:blur(8.5px);
            border-radius: 10px;
            color: rgb(57, 4, 121);
            letter-spacing: 0.4rem;
          `;
  const Helloadmin = styled.h2`
           margin: 3rem 0 2rem 0;
       `;

  const InputContainer = styled.div`
           display: flex;
           flex-direction:column;
           justify-content: center;
           align-items: center;
           height: 20%;
           width: 100%;
           gap:12px;
     `;
  
 const Forgotpassword =styled.h5`
             cursor :pointer;  
             align-items:center;
             justify-content:center;
     `;

  const ButtonContainer= styled.div`
          margin:0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content:center;
  `;
  
  const HorizontalRule = styled.hr`
         width:90%;
         height:0.3rem;
         border-radius:0.3rem;
         border:none;
         margin: 1.5rem 0 1rem 0;
         background: linear-gradient(to right , #390479 0%, #390479 79%);
         backdrop-filter:blur(25px);
  `;
export default App;
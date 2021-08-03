import styled from "styled-components";

const PageDefaultWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.laptop`
    width: 414px;
    height: 800px;
    min-height: 800px;
    box-shadow: 5px 5px 20px 20px rgb(0 0 0 / 10%);
  `}
`;

export default PageDefaultWrapper;

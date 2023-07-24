import styled from "styled-components";

// Cores definidas na paleta
const mainBackground = "#F7F7F7";
const highlightColor = "#007BFF";
const mainText = "#333333";
const secondaryText = "#888888";
const secondaryButtons = "#0056B3";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  padding: 16px;
  background-color: ${mainBackground};
  color: #fff;
  height: 100vh;
  flex-grow: 1;
  width: 100%;//aqui deixa a barra no canto
`;

export const Logo = styled.img`
  height: 48px;
  width: auto;
  margin-bottom: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${highlightColor};
  transition: background-color 0.3s;
  

  &:hover {
    background-color: #555;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  
  
`;

export const NavItem = styled.a`
  color: ${mainText};
  font-size: 16px;
  margin-bottom: 8px;
  text-decoration: none;
`;

export const ArrowIcon = styled.span`
  margin-left: 4px;
  transform: ${(props) =>
    props.isExpanded ? "rotate(180deg)" : "rotate(0)"};
  transition: transform 0.3s ease-in-out;
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid ${secondaryText};
  margin: 8px 0;
  width: 100%;
`;

export const PlusSign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${mainText};
  color: #fff;
  transition: background-color 0.3s;
  width: fit-content;
  margin-bottom: 8px;

  &:hover {
    background-color:#444 ;
  }

  span {
    margin-left: 8px;
  }
`;

export const FloatingWindowContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  color: ${mainText};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  width: 300px;
`;

export const WindowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const WindowTitle = styled.h3`
  font-size: 20px;
`;

export const WindowCloseButton = styled.button`
  background: transparent;
  border: none;
  color: #888;
  font-size: 20px;
  cursor: pointer;
`;

export const WindowForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const WindowLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const WindowInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 16px;
`;

export const WindowButton = styled.button`
  background-color: ${highlightColor};
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const NewProduction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${secondaryButtons};
  color: #fff;
  transition: background-color 0.3s;
  width: fit-content;
  margin-bottom: 8px;

  &:hover {
    background-color:#444 ;
  }

  span {
    margin-left: 8px;
  }
`;

// ... (código existente)

export const SectionSeparator = styled.hr`
  height: 1px;
  width: 100%;
  background-color: ${secondaryText};
  margin: 8px 0;
`;

// ... (resto do código)

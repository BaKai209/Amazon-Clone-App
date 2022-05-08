import styled from "styled-components";


export const Container = styled.div`
height: 60px;
background-color: #131921;
display: flex;
align-items: center;
color: white;
justify-content: space-between;
`

export const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`

export const HeaderOptionAdress = styled.div`
padding-left: 40px;
display: flex;
align-items: center;
justify-content: center;
`

export const OptionLineOne = styled.div`
`

export const OptionLineTwo = styled.div`
  font-weight: 700;
`

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: #FFFFFF;
  justify-content: space-between;
  :focus-within{
    box-shadow: 0 0 0 3px #f90;
  }
`

export const HeaderSearchInput = styled.input`
  flex-flow: 1;
  border: 4px;
  :focus{
    outline: none;
  }
`

export const HeaderSearchIconContainer = styled.div`
  background-color: #F0AD64;
  width: 45px;
  color: black;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
`

export const HeaderNavItems = styled.div`
 display: flex;
`

export const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
  cursor: pointer;
`

export const HeaderOptionCart = styled.div`
  display: flex;
  align-items: center;
  padding-right: 9px;

`

export const CartCount = styled.div`
  padding-left: 4px;
`
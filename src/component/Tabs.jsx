/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../tabsSlices';

const NavBar = styled.nav`
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
   overflow-x: auto;
`;

const Tab = styled.button`
  margin: 10px;
  background-color: ${props => (props.active ? '#f4ca01' : '#ccc')};
  color: ${props => (props.active ? 'white' : '#f4ca01')};
  border: 2px solid ${props => (props.active ? '#f4ca01' : 'transparent')};
  padding: 10px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 10px;

  &:hover {
    background-color: #f4ca01;
    color: white;
  }
`;

const Tabs = () => {
  const activeTab = useSelector(state => state.tabs.activeTab);
  const dispatch = useDispatch();
  return (
    <NavBar>
      {['All', 'Suit', 'Socks', 'Belt', 'Trousers', 'shoes' , 't-shirt'].map(tab => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => dispatch(setActiveTab(tab))}
        >
          {tab}
        </Tab>
      ))}
    </NavBar>
  );
};

export default Tabs;

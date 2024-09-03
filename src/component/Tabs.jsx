/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../tabsSlices';

const NavBar = styled.nav`
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 90px;
   overflow-x: auto;
   white-space:no-wrap;
    -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS devices
  
  // Optional: Add styles for scrollbar on Webkit browsers
  &::-webkit-scrollbar {
      height: 8px; /* height of the horizontal scrollbar */
  }
  
  &::-webkit-scrollbar-thumb {
      background: #888; /* color of the scroll thumb */
      border-radius: 10px; /* round edges for the scroll thumb */
  }

  &::-webkit-scrollbar-track {
      background: #ccc; /* color of the track */
  }
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

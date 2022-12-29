/*
TODO:
影をつけましょう
フッターの光る場所変わるバグ
*/
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
const BottomNav = () => {
  const [value, setValue] = useState(1)
  return (
    <>
      <Outlet />
      <Container>
        <BottomNavigation
          value={value}
          showLabels
          onChange={(e, newValue) => {
            setValue(newValue)
            // console.log(value)
          }}
        >
          <BottomNavigationAction label="いいね" icon={<FavoriteIcon />} component={Link} to={""} />
          <BottomNavigationAction label="さがす" icon={<SearchIcon />} component={Link} to={"search"} />
          <BottomNavigationAction label="イベント" icon={<EventAvailableIcon />} component={Link} to={"event"} />
        </BottomNavigation>
      </Container>
    </>
  )
}

export default BottomNav

const Container = styled.div`
    /* position: absolute; */
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 5rem;
    background-color: white;
`
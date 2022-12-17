import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const BottomNav = () => {
    const [value, setValue] = useState("")
    return (

        <StyledBottomNavigation
            value={value}
            showLabels
            onChange={(e, newValue) => {
                setValue(newValue)
            }}
        >
            <BottomNavigationAction label="いいね" icon={<FavoriteIcon />} component={Link} to={"/"} />
            <BottomNavigationAction label="さがす" icon={<SearchIcon />} component={Link} to={"/search"} />
            <BottomNavigationAction label="イベント" icon={<EventAvailableIcon />} component={Link} to={"/event"} />
        </StyledBottomNavigation>

    )
}

export default BottomNav

const StyledBottomNavigation = styled(BottomNavigation)`
    position: absolute;
    bottom: 1rem;
    width: 100%;
`
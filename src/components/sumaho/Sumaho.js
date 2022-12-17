import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
const Sumaho = () => {
    return (
        <>
            <BottomNavigation
                showLabels
                onChange={() => { console.log("a") }}
            >
                <BottomNavigationAction label="いいね" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="さがす" icon={<SearchIcon />} />
                <BottomNavigationAction label="イベント" icon={<EventAvailableIcon />} />
            </BottomNavigation>
        </>
    )
}

export default Sumaho
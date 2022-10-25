import React,{useState} from "react";
// import FormControlLabel from '@mui/material/FormControlLabel';

// function  Filter () {
//     return(
//         <div className="filter_container _container">
          
//         </div>
//     )
// }

// export default Filter;

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import CardItem from "../CardComponent/CardItem";

 function Filter() {
  
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
    };
    
    
    if(!invisible) {
        
    }


  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <FormControlLabel 
          sx={{ color: 'text.primary' }}
          control={<Switch checked={invisible} onChange={handleBadgeVisibility} />}
          label="Show favorites "
        />
      </div>
    </Box>
  );
}
export default Filter;
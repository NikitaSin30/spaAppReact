import React,{useState} from "react";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


 function Filter(showFavorites,checkFavorites) {

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
          control={<Switch checked={showFavorites} onChange ={() => checkFavorites()} />}
          label="Show favorites"

        />
      </div>
    </Box>
  );
}
export default Filter;

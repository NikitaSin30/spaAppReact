import React,{useState} from "react";
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


 function Filter(checkedFavorites,onCheckFavorites) {
// const [a,b] = useState(false)
// function c() {
//   b(() => !a)
//   console.log(1)
// }
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
          control={<Switch checked={checkedFavorites} onChange = {()=>onCheckFavorites()} />}
          label="Show favorites"

        />
      </div>
    </Box>
  );
}
export default Filter;

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

function Filter({ checkedFavorites, onChangeFavoriteFilter }) {
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
               control={
                  <Switch
                     checked={checkedFavorites}
                     onChange={onChangeFavoriteFilter}
                  />
               }
               label="Show favorites"
            />
         </div>
      </Box>
   );
}
export default Filter;

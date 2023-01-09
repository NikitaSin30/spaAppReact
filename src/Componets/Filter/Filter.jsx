import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import './Filter.css';

function Filter({ checkedFavorites, onChangeFavoriteFilter }) {
  return (
    <div className='filter-page'>
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
        <div className='form-control'>
          <FormControlLabel
            sx={{ color: 'text.primary' }}
            control={
              <Switch
                checked={checkedFavorites}
                onChange={onChangeFavoriteFilter}
              />
            }
            label='Show favorites'
          />
        </div>
      </Box>
    </div>
  );
}
export default Filter;

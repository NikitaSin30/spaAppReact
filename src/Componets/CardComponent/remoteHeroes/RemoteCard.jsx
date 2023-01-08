import { React } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import '../CardItem.css';

function RemoteCard({ id, name, image, rebuildCard }) {
   return (
      <Card className="card" id={id} sx={{ width: 300 }}>
         <div className="card-content">
            <CardMedia
               component="img"
               height="194"
               alt="Paella dish"
               src={image}
            />
            <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {name}
               </Typography>
            </CardContent>
            <div className="card-icons">
               <CardActions>
                  <IconButton
                     aria-label="share"
                     onClick={() => {
                        rebuildCard(id);
                     }}
                  >
                     <RestorePageIcon />
                  </IconButton>
               </CardActions>
            </div>
         </div>
      </Card>
   );
}

export default RemoteCard;

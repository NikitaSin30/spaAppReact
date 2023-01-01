import { React } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import CommentCard from './CommentCard.jsx';

function CardItem({
   name,
   image,
   deleteCard,
   id,
   likeCounter,
   onCheckLike,
   switchShowComments,
   isComments
}) {
   let commemtBlock = isComments
   return (
      <Card id={id} sx={{ maxWidth: 345 }}>
         {
            isComments ? null : <CardMedia
            component="img"
            height="194"
            alt="Paella dish"
            src={image}
         />
         }
         <CardContent>
            <Typography variant="body2" color="text.secondary">
               {name}
            </Typography>
         </CardContent>
         <CardActions disableSpacing>
            <Checkbox
               className="like"
               icon={<FavoriteBorder />}
               checkedIcon={<Favorite />}
               onClick={() => onCheckLike(id)}
            />
            <div className="counter">{likeCounter} likes</div>
            <IconButton aria-label="share" onClick={() => deleteCard(id)}>
               <DeleteIcon />
            </IconButton>
            <Button onClick={() =>switchShowComments(id)} size="md"  color="primary">
          Коментировать
        </Button>
         </CardActions>
         {
          commemtBlock ? <CommentCard/> : null
         }
      </Card>
   );
}

export default CardItem;

import  {React,useState} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { connect } from "react-redux"


 function CardItem({name,image,deleteCard,id,store,}) {
 
    // состояние сердечка 
   const [checked,setChecked] = useState(false);  
 

//    счетчик лайка решил реализовать таким образом , мне он показался самым локаничным 


 let likesCounter = 0
    if(checked){
        likesCounter += 1
        console.log(likesCounter)
    } 
 
 
  return (
    
    <Card  id ="id" sx={{ maxWidth: 345 }}>
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
      <CardActions disableSpacing>
      <Checkbox 
      className='like'
       icon={<FavoriteBorder />}
        checkedIcon={<Favorite/>} 
        checked={checked}
         onClick={() => setChecked(!checked) }  // считает лайки
         />
         <div className='counter'>{likesCounter} likes</div> 
         <IconButton aria-label="share" onClick={() => deleteCard(id)} > {/*// кнопка удалить ??? как связать с кнопкой из Filter и прогнать по условиям//  */} 
          <DeleteIcon/>
        </IconButton>
      </CardActions>
    </Card>
    
  );
}

export default CardItem;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import logo from '../assets/portfolio/logo.jpg';

export default function AboutLayout() {
  return (
    <div style={{position:'relative'}}>
    <Card sx={{ maxWidth: 400 }} style={{}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="green iguana"
        />
        <CardContent>
        
          <Typography variant="body2" color="text.secondary">
          I work as a <b>Frontend</b> and <b>React </b> developer 
           and have worked with data analysts using  
          <b>PowerBI</b>   and as well as <b>Figma</b>  design. 
            I enjoy hearing things out. I've gained a lot of knowledge 
            by paying close attention. I've discovered how to combine work and life.
             I am a very content individual. I had exciting dreams and ended up 
            studying computing and applied mathematics at the University of
           Jaffna in Sri Lanka.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
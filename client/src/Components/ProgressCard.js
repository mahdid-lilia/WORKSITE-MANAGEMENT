import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { Divider } from '@mui/material';
import { grid } from '@mui/system';
import ProgressBar from './ProgressBar';
export default function ProgressCard() {
  const theme = useTheme();

  return (
    <grid  container spacing={3}>
        <Card sx={{ display: 'flex' }} elevation={16}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                Chantier 1 
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Your progress
              </Typography>
              <ProgressBar/>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            
            </Box>
          </Box>
        </Card>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>

        <Card sx={{ display: 'flex' }} elevation={16}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Chantier 2
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Your progress
            </Typography>
            <ProgressBar/>

          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          </Box>
        </Box>
        </Card>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>

        <Card sx={{ display: 'flex' }} elevation={16}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Chantier 3
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Your progress
            </Typography>
            <ProgressBar/>

          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          </Box>
        </Box>
        </Card>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>

        <Card sx={{ display: 'flex' }} elevation={16} >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Chantier 4
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Your progress
            </Typography>
            <ProgressBar/>

          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          </Box>
        </Box>
        </Card>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>

        <Card sx={{ display: 'flex' }} elevation={16} >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Chantier 5
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Your progress
            </Typography>
            <ProgressBar/>

          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          </Box>
        </Box>
        </Card>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>
        <Divider style={{ background: '#ffff00' }} variant="middle"/>

        <Card sx={{ display: 'flex'  }} elevation={16} >
        <Box sx={{ display: 'flex' ,flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Chantier 6
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Your progress
            </Typography>
            <ProgressBar/>

          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          </Box>
        </Box>
        </Card>
    </grid>
  );
}

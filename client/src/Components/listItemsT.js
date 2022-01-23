import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ConstructionIcon from '@mui/icons-material/Construction';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import { Avatar, List } from '@mui/material';
import { Icon } from '@material-ui/core';
import { pink } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';



//------------------Handlers-------------------//


//---------------------------------------------//


const mytheme = createTheme({
  palette: {
    primary: {
      main: '#FF8E53',
    },
    secondary: {
      main: '#e2e2e2',
    },
  },
});

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
});
const menuItems = [
  {
    text: 'Chantiers',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <ConstructionIcon color='primary' fontSize='large' />,
    path: '/chantier',
  },
  {
    text: 'Taches',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <TaskAltIcon color='primary' fontSize='large' />,
    path: '/Taches',
  },
  {
    text: 'Equipement',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <HomeRepairServiceIcon color='primary' fontSize='large' />,
    path: '/Equipement',
  },
  {
    text: 'Reports',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <BarChartIcon color='primary' fontSize='large' />,
    path: '/Reports',
  },
  {
    text: 'Integration',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <LayersIcon color='primary' fontSize='large' />,
    path: '/Integration',
  },

]
const secondaryMenuItem = [
  {
    text: 'Les heurs par chantiers',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <StackedLineChartOutlinedIcon color='primary' fontSize='large' />,
    path: '/HeursChantier',
  },
  {
    text: 'Les heurs par ouvriers',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <StackedLineChartOutlinedIcon color='primary' fontSize='large' />,
    path: '/HeursOuvrier',
  },
  {
    text: 'Les heurs par jours',
    fontWeight: 'semibold',
    fontFamily: 'monospace',
    icon: <StackedLineChartOutlinedIcon color='primary' fontSize='large' />,
    path: '/HeurJour',
  },

  {
    text: 'Déconnexion',
    fontWeight: 'semibold',
    fontFamily: 'monospace',

    icon: <LogoutIcon color='primary' fontSize='large' />,
    path: '/HeurJour',
  },


]

export const mainListItems = (
  <div>
    <List>
      {menuItems.map(item => (
        <ListItem
          button
          key={item.text}
        >
          <ThemeProvider theme={mytheme}>
            <ListItemIcon>{item.icon}</ListItemIcon>
          </ThemeProvider>

          <ListItemText primary={item.text} />
        </ListItem>
      ))}

    </List>

  </div>
);

export default function SecondaryListItems({func}) {
  return (<div>
    <List>
      {secondaryMenuItem.map(item => (
        <ListItem
          onClick={() => func}
          button
          key={item.text}
        >
          <ThemeProvider theme={mytheme}>
            <ListItemIcon>{item.icon}</ListItemIcon>
          </ThemeProvider>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </div>);
}
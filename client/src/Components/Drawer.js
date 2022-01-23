import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import { Avatar, Button, ButtonGroup, Checkbox, FormControlLabel, FormGroup, Menu } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ConstructionIcon from '@mui/icons-material/Construction';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';

import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../styles/drawer.css'
import { Axios } from 'axios';
import { Link } from 'react-router-dom';

const drawerWidth = 270;
//const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const style = {

    //background : '#00bebe',
    //background: 'linear-gradient(45deg, #00bebe 10%, #FF8E53 90%)',
    background: 'linear-gradient(45deg,  #ffff00 10%, #FF8E53 90%)',


};
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);



//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//
//----------------------------------------------//


const MiniDrawer = () => {

    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [loginParams, setLoginParams] = useState(undefined);
    const [flag, setFlag] = useState(false);
    const [choice, setChoice] = useState('Ouvriers');
    const widthBtn = '70px';
    const handleDrawerOpen = () => {
        setOpen(true);
    };


    const menuItems = [
        {
            text: 'Chantiers',
            fontWeight: 'semibold',
            fontFamily: 'monospace',
            icon: <ConstructionIcon onClick={() => document.location.href = '/chantiers1'} color='primary' fontSize='large' />,

            path: '/chantiers1',
        },
        {
            text: 'Ouvriers',
            fontWeight: 'semibold',
            fontFamily: 'monospace',
            icon: <TaskAltIcon onClick={() => document.location.href = '/ouvriers1'} color='primary' fontSize='large' />,
            path: '/ouvriers1',
        },
        {
            text: 'Equipement',
            fontWeight: 'semibold',
            fontFamily: 'monospace',
            icon: <HomeRepairServiceIcon color='primary' fontSize='large' />,
            path: '/Equipement',
        },
        {
            text: 'Statistiques',
            fontWeight: 'semibold',
            fontFamily: 'monospace',
            icon: <BarChartIcon color='primary' fontSize='large' />,
            path: '/Reports',
        },
        {
            text: 'Intervention',
            fontWeight: 'semibold',
            fontFamily: 'monospace',
            icon: <LayersIcon color='primary' fontSize='large' />,
            path: '/Integration',
        },

    ];
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

            icon: <LogoutIcon onClick={logoutHandler} color='primary' fontSize='large' />,
            path: '/HeurJour',
        },


    ];
    function logoutHandler() {
        fetch("http://localhost:8000/", {
            method: 'POST'
        }).then(() => {
            // navigate("/home");
            document.location.href = "/home";
        });
    }

    const handleDrawerClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        fetch("http://localhost:8000/")
            .then(res => { return res.json() })
            .then(res => {
                setLoginParams(res);
                if (res.indicator) { setFlag(true); }
                else setFlag(false)
            });
    });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const [searchRes, setSearchRes] = useState(undefined);
    function searchHandler(option) {
        const toSend = searchRes;
        console.log(option);
        if (option === 'Ouvriers') {
            fetch('http://localhost:8000/OuvrierSearch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({toSend})
            });
            document.location.href= '/searchresults';
        }
        else if (option === 'Chantiers') {
            fetch('http://localhost:8000/ChantierSearch', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({toSend})
            });
            document.location.href= '/searchresultsc';
        }
    }

    return (
        <Box sx={{ display: 'flex', height: '100%' }} bgcolor="default" backgroundColor='#000000'>
            <CssBaseline />
            <AppBar open={open} color="default" style={style} >
                <Toolbar>
                    {flag && <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            width: widthBtn,
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />

                    </IconButton>}
                    <div style={{ display: 'inline' }} className='search-nav'>
                        <Search >

                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                name='search'
                                onChange={e => setSearchRes(e.target.value)}
                            />
                        </Search>
                    </div>




                    <div style={{ position: "relative", left: "-700px", width: 20 }}>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={openMenu ? 'long-menu' : undefined}
                            aria-expanded={openMenu ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClickMenu}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleCloseMenu}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === choice}
                                    onClick={() => {
                                        setChoice(option);
                                        handleCloseMenu();
                                        searchHandler(option);
                                    }}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>





                    {!flag &&
                        <Button type='link' href='/login' variant='none' color='success' className='btn-grad' sx={{ borderRadius: 20, position: 'relative', marginLeft: -40 }}>Se connecter</Button>
                    }
                    {flag &&
                        <Button onClick={logoutHandler} type='link' href='/login' variant='none' color='success' className='btn-grad' sx={{ borderRadius: 20, position: 'relative', marginLeft: -50 }}>Se déconnecter</Button>

                    }
                    <Button type='link' href='/home' variant='none' className='btn-grad' color='success' sx={{ borderRadius: 20, position: 'relative' }}>Accueil</Button>

                    <IconButton size="small" aria-label="show 4 new mails" color="inherit" sx={{ width: widthBtn }}>
                        <Avatar sx={{
                            bgcolor: 'coral'
                        }}>
                            <MailIcon />
                        </Avatar>
                    </IconButton>
                    <IconButton color="inherit" sx={{ width: widthBtn }}>
                        <Badge color="secondary">
                            <Avatar sx={{ bgcolor: 'coral' }} >
                                <NotificationsIcon />
                            </Avatar>
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ width: widthBtn }} size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge color="error"> {/*The number of notification */}
                            <Avatar alt="MAHDID Lilia" sx={{ bgcolor: 'coral' }} src='user/src/Assets/img/pics2.png' />
                        </Badge>
                    </IconButton>

                </Toolbar>
            </AppBar>

            {flag && <Drawer variant="permanent" open={open} bgColor='default' containerStyle={{ backgroundColor: '#e2e2e2' }}   >
                <Box >
                    <DrawerHeader backgroundColor="#e2e2e2">
                        <Typography
                            component="h7"
                            variant="h8"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}

                            textAlign='center'
                            fontWeight='semibold'
                            fontFamily='monospace'
                        >
                            WORKSITE-MANAGEMENT </Typography>
                        <IconButton sx={{ width: widthBtn }} onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>

                    </DrawerHeader>
                </Box>
                <Divider />

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


                <div>
                    <List>
                        {secondaryMenuItem.map(item => (
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

            </Drawer>}
        </Box>
    );
}
export default MiniDrawer;



const options = [
    'Ouvriers',
    'Chantiers',
    'Equipements'
];

const ITEM_HEIGHT = 48;
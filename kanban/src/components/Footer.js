// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import  AddIcon from '@material-ui/icons/AddIcon';
// import DeleteIcon from '@material-ui/icons/DeleteIcon';
// import  EditIcon from '@material-ui/icons/EditIcon';
// import ArrowBackIcon from '@material-ui/icons/ArrowBackIcon';
// import  ArrowForwardIcon from '@material-ui/icons/ArrowForwardIcon';
// import  SaveIcon from '@material-ui/icons/SaveIcon';
// import  ClearIcon  from '@material-ui/icons/ClearIcon';
// import { green, pink} from '@material-ui/core/colors';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));
  
//   const theme = createMuiTheme({
//     palette: {
//       primary: pink,
//       secondary: green
//     },
//   });
  

// function Footer() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//           <ThemeProvider theme={theme}>

//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>

//           <IconButton aria-label="delete" disabled color="primary">
//             <EditIcon />
//           </IconButton>

//           <IconButton color="secondary" aria-label="add">
//             <AddIcon />
//           </IconButton>

//           <IconButton color="primary" aria-label="add to shopping cart">
//             <ArrowBackIcon />
//           </IconButton>
    
//           <IconButton color="primary" aria-label="add to shopping cart">
//             <ArrowForwardIcon />
//           </IconButton>

//           <IconButton color="primary" aria-label="add to shopping cart">
//             <SaveIcon />
//           </IconButton>
         
//           <IconButton  color="primary" aria-label="add to shopping cart">
//             <ClearIcon />
//           </IconButton>
//           </ThemeProvider>

//         </div>
//       );
//     }
    
// export default Footer;
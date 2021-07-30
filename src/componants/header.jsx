import React from 'react';
import {AppBar, IconButton, makeStyles, Toolbar, Typography, Paper, Button, InputBase, NativeSelect, Avatar, } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const styles = makeStyles(() => ({
    app:{
        backgroundColor : '#131921',
    },
    div1: {
        borderColor: "#ffff",
        marginLeft: 2,
        border: 3,
        width:140,
    },
    paper: {
        color: '#ffff',
        borderColor: '#ffff',
        padding:0, 
        height:50,
        width:150,
    },
    div2:{
        marginLeft: 18,
        backgroundColor: '#ffff',
        display: 'flex',
        borderRadius: 70,
    },
    input: {
        width: 440,
        height: 38,
    },
    button: {
        backgroundColor: "#ffa726",
        color: "grey",
        height: 40,
        padding: 0,
    },
    typ: {
        fontSize: 10,
    },
    butt:{
        width: 10,
    },
    flag:{
        color:'#ffff',
    },
    flag1:{
        color:'#ffff',
    },
    typ1:{
        color:"#ffff",
        borderColor: '#ffff',
        padding:0, 
        height:50,
        width:130,
    },
    typ2:{
        fontSize:11,
    },
    order:{
        color:'#ffff',
        fontSize:11,
        padding:0,
        height: 50,
        width:100,
    },
    cart:{
        color:"#ffff",
        padding:0,
        height:55,
        width:60,
    },
    div4:{
        width:10,
    },
}));


function Header() {
    const classes = styles();
    return (
        <React.Fragment>
            <AppBar className={classes.app}>
                <Toolbar>
                    <IconButton edge='start' color='inherit' role='button' aria-label='menu'>
                        <MenuIcon fontSize='large'/>
                    </IconButton>
                    <Typography variant='h4' >amazons.in</Typography>
                   <div className={classes.div1}>
                       <Button variant='outlined' className={classes.paper}>
                       <LocationOnIcon fontSize='small' />
                       <Typography className={classes.typ}>
                            hello
                            <br/>
                            select your address
                        </Typography>
                       </Button>
                   </div>
                   <div className={classes.div2}>
                       <Paper className={classes.pap}>
                           <Button className={classes.butt}>
                               <NativeSelect>
                                   <option value="1">All</option>
                                   <option value="1">category2</option>
                                   <option value="1">category16</option>
                                   <option value="1">category1g</option>
                                   <option value="1">category1r</option>
                                   <option value="1">category1d</option>
                                   <option value="1">category14</option>
                                   <option value="1">category13</option>
                                   <option value="1">category11</option>
                               </NativeSelect>
                           </Button>
                        <InputBase className={classes.input} />
                        <Button className={classes.button} type='submit' aria-label='search' >
                            <SearchIcon />
                        </Button>
                       </Paper>
                   </div>
                   <div className={classes.flag}>
                       <Button className={classes.flag1}>
                       <Avatar variant="square" src='https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png' />
                       <ArrowDropDownIcon />
                       </Button>
                   </div>
                   <div>
                       <Button variant='outlined' className={classes.typ1}>
                           <Typography className={classes.typ2}>
                               hello,signin
                               <br/>
                               Account & Lists
                           </Typography>
                           <ArrowDropDownIcon />
                       </Button>
                   </div>
                   <div>
                       <Button className={classes.order}>
                           Returns
                           <br/>
                           & Orders
                       </Button>
                   </div>
                   <div className={classes.div4}>
                       <Button>
                           <ShoppingCartIcon className={classes.cart} />
                       </Button>
                   </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )    
}
export default Header;
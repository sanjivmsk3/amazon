import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const styles = makeStyles(() =>({
    app1:{
        marginTop:67,
        backgroundColor:'#232f3e',
        height:40,
    },
    btn1:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
    },
    btn2:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:16,
    },
    btn3:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:6,
    },
    btn4:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:8,
    },
    btn5:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:2,
    },
    btn6:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:15,
    },
    btn7:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:15,
    },
    btn8:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:15,
    },
    btn9:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:12,
    },
    btn10:{
        color:'#ffff',
        padding:0,
        marginTop:-19,
        fontSize:11,
        marginLeft:12,
    },
}));

function Appbar() {
    const classes = styles();
    return(
        <React.Fragment>
                <AppBar className={classes.app1}>
                    <Toolbar>
                        <Button className={classes.btn1}>Best Seller</Button>
                        <Button className={classes.btn2}>Today's Deals</Button>
                        <Button className={classes.btn3}>Mobiles</Button>
                        <Button className={classes.btn4}>Prime<ArrowDropDownIcon /></Button>
                        <Button className={classes.btn5}>New Realeases</Button>
                        <Button className={classes.btn6}>Customer Service</Button>
                        <Button className={classes.btn7}>Amazon Pay</Button>
                        <Button className={classes.btn8}>Computers</Button>
                        <Button className={classes.btn9}>Gift Ideas</Button>
                        <Button className={classes.btn10}>Gift Cards</Button>
                    </Toolbar>
                </AppBar>
        </React.Fragment>
    )
};
export default Appbar;
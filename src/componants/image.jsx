import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Link, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(() => ({
    img:{
        marginTop:108,
    },
    div:{
        width:340,
        backgroundColor: '#eeeeee ',
        marginLeft:12,
        float: 'left',
        height:410,
    },
    divlast:{
        width:260,
        float: 'right',
        height:420,
    },
    cards:{
        width:140,
        height:130,
        float: 'left',
        marginRight:10,
    },
    cardscontent:{
        marginTop: -19,
        marginLeft: -14,
    },
    cards1:{
        height:130,
    },
    cards2:{
        height:130,
        width:140,
        marginTop:4,
        float: 'left',
        marginRight:10,
    },
    cards3:{
        marginTop: 4,
        height:130,
        width:140,
    },
    typo:{
        marginTop:30,
    },
    cardsign:{
        width:250,
        marginLeft:-40,
    },
    bttn:{
        backgroundColor:'#ffa726',
        width:220,
        fontSize:11,
    },
    cardsign2:{
        width:250,
        marginLeft:-40,
        marginTop:10,
    },
}));

function Images() {
    const classes = styles();
    
    return(
        <React.Fragment>
            <div className={classes.img}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/EOSS-Dec/2PC._CB412283660_.jpg%22%20height=%22600px%22%20width=%221500px%22%20data-a-hires=%22https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/EOSS-Dec/1PC._CB412283660_.jpg" width="1349" height="600" />
            </div>
                <Container  className={classes.div}>
                    <Typography variant="h5">Home essentials | Amazon Brands & more</Typography>
                <Card className={classes.cards}>
                    <CardActionArea>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Bedsheets, curtains & more</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.cards1}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Cloth organizers, boxes & baskets</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards2}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Wall stickers & clocks</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards3}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Smart bulbs & string lights</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Typography className={classes.typo}>
                    <Link>See More</Link>
                </Typography>
                </Container>
                <Container  className={classes.div}>
                    <Typography variant="h5">Home essentials | Amazon Brands & more</Typography>
                <Card className={classes.cards}>
                    <CardActionArea>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Bedsheets, curtains & more</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.cards1}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Cloth organizers, boxes & baskets</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards2}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Wall stickers & clocks</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards3}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Smart bulbs & string lights</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Typography className={classes.typo}>
                    <Link>See More</Link>
                </Typography>
                </Container>
                <Container  className={classes.div}>
                    <Typography variant="h5">Home essentials | Amazon Brands & more</Typography>
                <Card className={classes.cards}>
                    <CardActionArea>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Bedsheets, curtains & more</Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                <Card className={classes.cards1}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-4_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Cloth organizers, boxes & baskets</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards2}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-2_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Wall stickers & clocks</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Card className={classes.cards3}>
                   <CardActionArea>
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-3_186x116._SY116_CB430773130_.jpg" width="140" alt=""/>
                    <CardContent className={classes.cardscontent}>
                        <Typography variant='body2'>Smart bulbs & string lights</Typography>
                    </CardContent>
                   </CardActionArea>
                </Card>
                <Typography className={classes.typo}>
                    <Link>See More</Link>
                </Typography>
                </Container>
                <Container  className={classes.divlast}>
                    <Card className={classes.cardsign}>
                        <CardHeader title='Sign in for your best experience' />
                        <CardContent>
                            <Button variant='outlined' className={classes.bttn}>Sign in securely</Button>
                        </CardContent>
                    </Card>  
                    <Card className={classes.cardsign2}>
                        <img width="250" height="235" src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt=""/>
                    </Card>            
                </Container>
                
        </React.Fragment>
    )    
};

export default Images;
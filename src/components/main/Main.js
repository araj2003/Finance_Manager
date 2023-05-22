import React,{useContext}from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/Context';
import usestyle from './styles'
import Form from './form/Form';
import List from './list/List';
import InfoCard from '../InfoCard';
const Main = () => {
    const classes = usestyle()
    const {balance} = useContext(ExpenseTrackerContext)
  return (
    <Card className={classes.root}>
      <CardHeader title = 'Expense Tracker'/>
      <CardContent>
        <Typography align='center' varient = 'h5'>Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
          
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      
      </CardContent>
    </Card>
  )
}

export default Main

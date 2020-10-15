import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from '@/../components/Box';
import Button from '@/../components/Button';
import IconButton from '@/../components/IconButton';
import DelelteIcon from '@/../components/icons/Delelte';
import FavoriteIcon from '@/../components/icons/Favorite';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <h1>Welcome to use fay material button.</h1>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <code>import Button from '@fay-material/Button'</code>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'default'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'default'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'text'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'default'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'text'} color={'default'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'outlined'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'default'}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'primary'}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'secondary'}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled variant={'outlined'} color={'default'}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button color={'primary'} startIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'secondary'} startIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'default'} startIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'primary'} startIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'secondary'} startIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'default'} startIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button color={'primary'} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'secondary'} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button color={'default'} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'primary'} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'secondary'} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button disabled color={'default'} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'outlined'} color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} color={'default'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'outlined'} disabled color={'default'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <Button variant={'text'} color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} color={'default'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'primary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Primary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'secondary'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Secondary</Button>
        </Box>
        <Box ml={2}>
          <Button variant={'text'} disabled color={'default'} startIcon={<FavoriteIcon/>} endIcon={<FavoriteIcon/>}>Default</Button>
        </Box>
      </Box>
      <Box mt={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box>
          <IconButton>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton color={'secondary'}>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton color={'default'}>
            <DelelteIcon/>
          </IconButton>
        </Box>
        <Box ml={2}>
          <IconButton disabled>
            <DelelteIcon/>
          </IconButton>
        </Box>
      </Box>
    </div>
  )
}
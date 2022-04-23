import { Box, Button, Stack, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

const Counter = () =>
{
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}>
        <Box sx={{
          minWidth: '500px',
          backgroundColor: '#fff',
          padding: '25px',
          borderRadius: '5px',
        }}>
          <TextField
            id="count"
            label="Count"
            value={count}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            margin="normal"
          />
          <Stack direction="row" spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => dispatch(increment())}
              endIcon={<AddIcon />}
            >
              Increment
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={() => dispatch(decrement())}
              endIcon={<RemoveIcon />}
            >
              Decrement
            </Button>
          </Stack>
          <TextField
            id="increment-amount"
            label="Increment Amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="outlined" color="success" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
              Add Amount
            </Button>
          </Stack>
        </Box>
      </Box>
    </div >
  );
};

export default Counter;

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './CitySelect.module.scss';

const CitySelect = () => {
  const [city, setCity] = React.useState('(Все города)');

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 300 }} className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Место</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          label="Место" 
          onChange={handleChange}
          className={styles.select}
        >
          <MenuItem value="(Все города)">(Все города)</MenuItem>
          <MenuItem value="Moscow">Moscow</MenuItem>
          <MenuItem value="Saint Petersburg">Saint Petersburg</MenuItem>
          <MenuItem value="Novosibirsk">Novosibirsk</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default CitySelect
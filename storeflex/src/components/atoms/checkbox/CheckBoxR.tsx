import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxR = () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
    );
} 
export default CheckBoxR;
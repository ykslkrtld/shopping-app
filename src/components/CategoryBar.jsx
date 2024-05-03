import axios from 'axios'
import { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';

const CategoryBar = () => {
  const [categories, setCategories] = useState([])
  const getCategories = async ()=> {
    try {
      const res = await axios("https://fakestoreapi.com/products/categories")
      setCategories(res.data)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])
  
  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <FormControl >        
         <RadioGroup
           row
           aria-labelledby="demo-row-radio-buttons-group-label"
           name="row-radio-buttons-group"
         >
           <FormControlLabel value="all" control={<Radio />} label="ALL" />
           {categories?.map((category,i)=>(
            <FormControlLabel key={i} value={category} control={<Radio />} label={category.toUpperCase()} />
           ))}
         </RadioGroup>
       </FormControl>
    </Box>
  )
}

export default CategoryBar
import axios from 'axios'
import { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/material';

const CategoryBar = ({onSelectCategory}) => {
  const [categories, setCategories] = useState([])
  const getCategories = async ()=> {
    try {
      const res = await axios("https://fakestoreapi.com/products/categories")
      setCategories(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  const handleCategoryChange = (event) => {
    onSelectCategory(event.target.value);
  };
  
  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <FormControl >        
         <RadioGroup
           row
           aria-labelledby="demo-row-radio-buttons-group-label"
           name="row-radio-buttons-group"
           sx={{justifyContent:"center"}}
           defaultValue="all"
           onChange={handleCategoryChange}
         >
           <FormControlLabel value="all" control={<Radio />} label="All" />
           {categories?.map((category,i)=>(
            <FormControlLabel key={i} value={category} control={<Radio />} label={category} sx={{textTransform:"capitalize"}} />
           ))}
         </RadioGroup>
       </FormControl>
    </Box>
  )
}

export default CategoryBar
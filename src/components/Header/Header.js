import React from "react";
import { ThemeProvider, createTheme} from '@mui/material/styles';
import {TextField,MenuItem} from '@mui/material';
import './Header.css';
import categories from "../../data/category";
const Header=( {setCategory,category,word,setWord,LightMode} )=>{

    const darkTheme = createTheme({
        palette: {
           primary:{
           main:LightMode?"#000":"#fff",
            },
          mode: LightMode?"light":"dark",
        },
      });
      const handleChange=(e)=>{
          setCategory(e.target.value);
          setWord("");
      };
    return(
        <div>
            <span className="title">
              {word?word:"Word Hunt"}
               
            </span>
         <div className="inputs">
            <ThemeProvider theme={darkTheme}>
            <TextField className="search" 
            label ="standard"
            value={word}
            onChange={(e)=> setWord(e.target.value)}
             />

            <TextField 
            className="select"
          select
          label='Language'
          value={category}
          onChange={handleChange}
          >

          {
            categories.map((option)=>(
              <MenuItem key={option.label} value={option.label}>
              {option.value}
              </MenuItem>

            ))
          }
         
           
          
        </TextField>
            </ThemeProvider>
         
         </div>
        </div>
    )
}
export default Header;
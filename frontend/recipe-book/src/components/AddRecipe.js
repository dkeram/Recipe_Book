import React, {useState} from "react";
import axios from 'axios';


const AddRecipe = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await axios.post('http://localhost:8000/recipes/', {
                recipe_name : recipeName,
                ingredients: ingredients,
                instructions: instructions
            });

            setRecipeName('');
            setIngredients('');
            setInstructions('');
        }catch(error){
            console.error('Error Adding recipe:', error);
        }
    };

    return(
        <div className='container mt-5'>
            <h2 className='mb-4'>Add New Recipe</h2>
            <form onSubmit={handleSubmit} className='mb-5'>
                <div className='mb-3'>
                    <label className='form-label'>Recipe Name:</label>
                    <input type='text' className='form-control' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Ingredients:</label>
                    <textarea className='form-control' value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
                </div>
                <div className='mb-3'>
                    <label className='form-laQbel'>Instructions:</label>
                    <textarea className='form-control' value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                </div>
                <button type='submit' className='addRecipe'>Add Recipe</button>
            </form>
        </div>
    );


};


export default AddRecipe;

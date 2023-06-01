import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);    

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }


    return ( 
        <>
            <h1> GifExpertApp </h1> 
                
            <AddCategory
                onNewCategory = {event => onAddCategory(event)}
            />
            
            {/* El MAP me perimte barrer cada uno de los elementos del arreglo y devolver algo nuevo */}
            {categories.map((categoria) => ( 
                <GifGrid                 
                    key= {categoria} 
                    category ={categoria}
                />
            ) ) }    
        </>
    )
}
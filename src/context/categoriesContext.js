import { createContext ,useState,useEffect} from "react";
import axios from "axios"
const CategoryContext = createContext();

const CategoryProvider = ({children})=>{
   const [categories,setCategories] = useState([]);




    return (
        <CategoryContext.Provider value={categories}>
                {children}
        </CategoryContext.Provider>
    )

}

export {CategoryContext,CategoryProvider}
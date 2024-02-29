import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext)

    //const {data} = useFetch("&s=spider man");

    const handleSubmit = t => {
        t.preventDefault();
        setQuery(title);
        //console.log("Title: ", title);
    }

    return (
        <div className="form-search">
            <h2>Biblioteca de Películas</h2>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Nombre de la película" onChange={t => setTitle(t.target.value)}/>
                <input type="submit" value="Buscar"/>
            </form>
            { error && <p className="error">La película no existe</p>}
        </div>
    );
}

export default FormSearch;
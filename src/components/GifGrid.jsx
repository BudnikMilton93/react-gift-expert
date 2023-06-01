import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  const { imagenes, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
          // El map cumple una misma funcion que el for. Aca estoy desestructurando el objeto imagen
          // para quedarme unicamente con el ID y el TITLE
          imagenes.map((image) => (
            <GifItem
              key={image.id}
              // Operador Spreach, sirve para expandir el objeto y poder acceder a todas las propiedades en el componente
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}

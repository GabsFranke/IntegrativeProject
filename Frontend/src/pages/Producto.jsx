import { useParams } from "react-router-dom";
import CalendarAvailableDay from "../components/calendarAvailableDay/CalendarAvailableDay";
import HeaderProducto from "../components/heading/Heading";
import ImageGallerry from "../components/imageGallery/ImageGallerry";
import Descripcion from "../components/product/Descripcion";
import Caracteristicas from "../components/product/Caracteristicas";
import Politicas from "../components/product/Politicas";
import GoogleMapC from "../components/product/GoogleMapC";
import "./producto.css";

const Producto = () => {
  let { id } = useParams();
  return (
    <div>
      <HeaderProducto id={id} />
      <div className="containerProducto">
        <ImageGallerry id={id} />
        <Descripcion id={id} />
        <Caracteristicas id={id} />
        <Politicas id={id} />
        <CalendarAvailableDay />
        <GoogleMapC />
      </div>
    </div>
  );
};

export default Producto;

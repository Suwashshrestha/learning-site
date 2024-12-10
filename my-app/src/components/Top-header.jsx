import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
const Top = () => {
  return (
    <div className="top-header">
        <div className="location">
      <div className="content"><FaMapMarkerAlt /><p>Manzana Maria Elena Leiva s/n., Vitoria, can 566656</p></div>
      </div>
      <div className="mail">
        <IoIosCall />
        <p>9846725863</p>
        <div style={{ width: "2px", height: "100%", backgroundColor: "black", margin: "0 10px"}} />
        <IoMdMail />
        <p>suwashshrestha5536@gmail.com</p>
      </div>
    </div>


  )
}

export default Top

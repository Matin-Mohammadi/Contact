import Contact from "./Contact";
import Spinner from "./Spinner";
import { PINK } from "../helpers/color";
import { Link } from "react-router-dom";
const Contacts = ({ contacts, loading }) => {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <Link className="btn m-2" style={{ backgroundColor: PINK }} to="/add">
                <i className="fa fa-plus-circle"></i>
                ایجاد مخاطب
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="row">
            {loading ? (
              <Spinner />
            ) : contacts.length > 0 ? (
              contacts.map((c) => <Contact key={c.id} contact={c} />)
            ) : (
              <div className="text-center">
                <p className="text-center h2 text-light">مخاطب یافت نشد</p>
                <img src={require("../assets/not.png")} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;

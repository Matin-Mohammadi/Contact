import { CURRENTLINE, YELLOW, CYAN, RED } from "../helpers/color";
const Contact = ({contact}) => {
  return (
    <>
      <div className="col-md-6 card" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-md-4">
              <img className="rounded" src="https://placehold.co/150" alt="" />
            </div>
            <div className="col-md-7">
              <div className="list-group">
                <div className="list-group-item list-group-item-dark">
                  نام و نام خانوادگی:{" "}
                  <span className="fw-bold">{contact.firstName}</span>
                </div>
                <div className="list-group-item list-group-item-dark">
                  شماره موبایل:
                  <span className="fw-bold">{contact.phone}</span>
                </div>
                <div className="list-group-item list-group-item-dark">
                  ایمیل:
                  <span className="fw-bold">{contact.email}</span>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <button className="btn" style={{ backgroundColor: YELLOW }}>
                <i className="fa fa-eye"></i>
              </button>
              <button className="btn" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pencil"></i>
              </button>
              <button className="btn" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

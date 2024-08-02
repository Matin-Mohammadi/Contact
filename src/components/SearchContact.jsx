import {PURPLE, CURRENTLINE, FOREGROUND, BACKGROUND} from "../helpers/color"
const SearchContact = () => {
  return (
    <div className="input-group" dir="ltr">
      <span className="input-group-text" style={{background: PURPLE, color: BACKGROUND, border: "none"}}>
        <i className="fa fa-search"></i>
      </span>
      <input type="text"
      placeholder="Search"
      dir="rtl"
      style={{background: CURRENTLINE, borderColor: PURPLE}} />
    </div>
  )
}

export default SearchContact
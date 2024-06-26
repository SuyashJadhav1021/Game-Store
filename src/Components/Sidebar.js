import React, { useState } from "react";
import "./Sidebar.css";
import { useGlobalContext } from "../Pages/Context";

//

function Sidebar() {
  const { genreList, getGenreId } = useGlobalContext();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar">
      <div className="title">Genre</div>
      {genreList.map((item, index) => {
        const { name, image_background: image, id } = item;
        return (
          <div
            key={index}
            className={
              activeIndex == index
                ? "sidebar-content active"
                : "sidebar-content"
            }
            onClick={() => {
              setActiveIndex(index);
              getGenreId(id);
            }}
          >
            <div className="sidebar-icon">
              <img src={image} alt="" />
            </div>
            <p>{name}</p>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Sidebar;

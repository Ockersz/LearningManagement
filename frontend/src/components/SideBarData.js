import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const SideBarData = ({ userType }) => {
  const renderContent = () => {
    return [
      {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/lecturer/dashboard",
      },
      {
        title: "Modules",
        icon: <ArticleIcon />,
        link: "/lecturer/moduleMenu",
      },
    ];
  };

  const content = renderContent().map((val, key) => {
    return (
      <ul className="SideBarList">
        <li
          key={key}
          id={window.location.pathname === val.link ? "active" : ""}
          className="row"
          onClick={() => {
            window.location.pathname = val.link;
          }}
        >
          {" "}
          <div id="icon">{val.icon}</div>
          <div id="title">{val.title}</div>
        </li>
      </ul>
    );
  });

  return <div>{content}</div>;
};

export default SideBarData;

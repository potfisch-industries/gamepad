import { ReactNode } from "react";
import "./SideBarAndContent.css";
export const SideBarAndContent = ({
  sideBar,
  content,
}: {
  sideBar: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div className="contentAndSideBar">
      <div className="sideBar">{sideBar}</div>
      <div className="content">{content}</div>
    </div>
  );
};

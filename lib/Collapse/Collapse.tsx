import { ReactNode } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./Collapse.css";
export const Collapse = ({
  open,
  setOpen,
  headline,
  content,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  headline: ReactNode;
  content: ReactNode;
}) => {
  return (
    <div>
      <h3 onClick={() => setOpen(!open)}>
        <div
          className="collapseHeader"
          style={{
            display: "flex",
            justifyContent: headline ? "space-between" : "flex-end",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          {headline}{" "}
          {open ? (
            <IoIosArrowUp size={"32px"} />
          ) : (
            <IoIosArrowDown size={"32px"} />
          )}
        </div>
      </h3>

      <div className={open ? "section" : "sectionCollapsed"}>{content}</div>
    </div>
  );
};

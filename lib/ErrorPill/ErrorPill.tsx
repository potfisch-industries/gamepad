import { ReactNode } from "react";
import { Pill } from "../Pill/Pill";

export const ErrorPill = ({ message }: { message?: ReactNode }) => {
  return <Pill center={message ?? "An Error occured"} />;
};

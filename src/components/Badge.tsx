import { Color } from "../types";

interface IBadge {
  color: Color;
  text: string
}

export const Badge = ({color, text} : IBadge) => {
  return (
    <button className={`badge bg-${color} col-2 m-0`}>{text}</button>
  )
}

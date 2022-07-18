import { BadgeLabel, Color } from "../types";

interface IBadge {
  label: BadgeLabel,
  color: Color;
  value: number;
}

export const Badge = ({ color, value, label }: IBadge) => {
  return <button className={`badge bg-${color} col-2 m-0`} >{`${label}: ${value}`}</button>;
};

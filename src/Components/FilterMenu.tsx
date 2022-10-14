import { Link } from "react-router-dom";

type FilterMenuProps = {
  menuLabel?: string;
  menuItems: {
    label: string;
    to: string;
  }[];
  activeTo?: string;
};

export function FilterMenu({
  menuItems,
  activeTo,
  menuLabel
}: FilterMenuProps) {
  return (
    <>
      {menuLabel && <p className="text-xs text-slate-500">{menuLabel}</p>}
      <ul className="flex -mx-4 -my-1 flex-wrap">
        {menuItems.map((item) => (
          <li
            key={item.to}
            className={`mx-4 my-1 underline-offset-4 ${
              activeTo === item.to ? "underline" : "no-underline text-slate-500"
            }`}
          >
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

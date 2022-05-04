import { useEffect } from "react";
import styles from "./Filter.module.css";
import { useStore } from "../../Context/store";

export const DropMenu = ({ setMenu }) => {
  const { drop_menu, control } = styles;
  const { filters, handleFilters } = useStore();

  useEffect(() => {
    function handleCLick({ target }) {
      const menu = document.getElementsByClassName(drop_menu)[0];
      if (!menu.contains(target)) {
        setMenu(false);
      }
    }

    function handleKeyboard({ key }) {
      if (key === "Escape") {
        setMenu(false);
      }
    }

    document.addEventListener("keydown", handleKeyboard);
    document.addEventListener("click", handleCLick);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
      document.removeEventListener("click", handleCLick);
    };
  }, [drop_menu, setMenu]);

  return (
    <ul className={drop_menu}>
      <li>Filters</li>

      <li>
        <select
          onChange={({ target }) =>
            handleFilters({ ...filters, state: target.value })
          }
          value={filters.state}
          className={control}
        >
          <option value="">State</option>
        </select>
      </li>

      <li>
        <select
          onChange={({ target }) =>
            handleFilters({ ...filters, city: target.value })
          }
          value={filters.city}
          className={control}
        >
          <option value="">City</option>
        </select>
      </li>
    </ul>
  );
};

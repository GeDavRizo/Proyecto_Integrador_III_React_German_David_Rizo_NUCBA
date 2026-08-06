/*
  Descripción: Barra de filtros que permite buscar productos por categoría y precio.
  Funciones:
    - Componente React FilterBar.
  Requiere:
    - Módulos locales del proyecto
    - React Redux
*/

import { useSelector } from "react-redux";
import { FilterBarContainer } from "./FilterBarStyles.js";
import { selectCategories } from "../../../redux/categories/categoriesSlice";

function FilterBar({ activeFilter, onFilterChange }) {
  const filters = useSelector(selectCategories);

  return (
    <FilterBarContainer>
      <div id="filter-btns" className="filters-row">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
            data-filter={filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>{" "}
    </FilterBarContainer>
  );
}

export default FilterBar;

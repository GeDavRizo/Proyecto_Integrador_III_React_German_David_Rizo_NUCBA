/*
  Archivo: src/components/products/FilterBar/FilterBar.jsx
  Descripción: Barra de filtros de productos.
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

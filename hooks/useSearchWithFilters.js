import { useState } from "react";

export default function useSearchWithFilters(queryKey) {
    const [search, setSearch] = useState("");
    const [activeFilters, setActiveFilters] = useState({});
    const [data, setData] = useState([]);
    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleFilter = (key, value) => {
        const newFilters = { ...activeFilters };
        if (value) {
            newFilters[key] = value;
        } else {
            delete newFilters[key];
        }

        setActiveFilters(newFilters);
    };

    return {
        search,
        activeFilters,
        data,
        setData,
        handleSearch,
        handleFilter,
    };
}
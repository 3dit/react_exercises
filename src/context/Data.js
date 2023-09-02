import { createContext } from "react";
import initializeCore from "../dataMan/data";
import { useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const core = initializeCore();

    return (
        <DataContext.Provider value={core}>
            { children }
        </DataContext.Provider>
    )
}

export { DataProvider };
export default DataContext;
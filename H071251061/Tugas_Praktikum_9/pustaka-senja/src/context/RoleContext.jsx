"use client";

import { createContext, useContext, useState, useEffect } from "react";

const RoleContext = createContext({
    role: "pembaca",
    setRole: () => {},
    toggleRole: () => {},
});

export function RoleProvider({ children }) {
    const [role, setRole] = useState("pembaca");

    useEffect(() => {
        const savedRole = localStorage.getItem("pustaka_senja_role");
        if (savedRole) {
        setRole(savedRole);
        }
    }, []);

    const toggleRole = () => {
        setRole((prev) => {
        const nextRole = prev === "admin" ? "pembaca" : "admin";
        localStorage.setItem("pustaka_senja_role", nextRole);
        return nextRole;
        });
    };

    return (
        <RoleContext.Provider value={{ role, setRole, toggleRole }}>
        {children}
        </RoleContext.Provider>
    );
    }

export function useRole() {
    const context = useContext(RoleContext);
    if (!context) {
        return { role: "pembaca", setRole: () => {}, toggleRole: () => {} };
    }
    return context;
}
import { Routes, Route } from "react-router"

import { Home } from "../pages/Home"
import { Products } from "../pages/Products"
import { Details } from "../pages/Details"
import { NotFound } from "../pages/NotFound"

export function AppRouter() {
    return (
        <Routes>

            <Route path="/" index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Details />} />
            
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
} 
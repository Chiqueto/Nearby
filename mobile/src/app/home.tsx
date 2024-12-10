import { View, Text, Alert } from "react-native";

import { api } from "@/service/api"
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";

export default function home() {
    const [categories, setCategories] = useState<CategoriesProps>([])


    async function fetchCategories() {
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "não foi possível carregar as categorias.")
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <View style={{ flex: 1 }}>
            <Categories data={categories} />

        </View>
    )
}
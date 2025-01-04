import {useEffect, useState} from 'react';
import Banner from '@components/Banner.tsx';
import Footer from '@components/Footer.tsx';
import List from '@components/List.tsx';
import Nav from '@components/Nav.tsx';
import Loader from '@components/Loader.tsx';
import {type Category, fetchCategories} from "@/apiService.ts";


export default function Recipe() {
    //three states to track what is going on:
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [_, setError] = useState<any>('');

    // a state to store what to filter with
    const [filter, setFilter] = useState('');

    const filterCategory = () => {
        return categories.filter(function (c) {
            return c.strCategory.toLowerCase().includes(filter.toLowerCase())
        });
    }

    //hook: useEffect | useState
    const loadCategories = async () => {
        try {
            setCategories(await fetchCategories());
            setIsLoading(false);
        } catch (error) {
            setCategories([])
            setIsLoading(false);
            setError(error);
        }
    }
    useEffect(() => {
        loadCategories();
    }, [])

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <div className="container-fluid">
            <Nav/>
            <Banner setFilter={setFilter}/>
            <List categories={filterCategory()}/>
            <Footer/>
        </div>
    )
}

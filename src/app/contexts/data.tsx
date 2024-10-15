/* eslint-disable @typescript-eslint/no-empty-object-type, react-hooks/exhaustive-deps */


import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Categories = {
    id: number;
    name: string;
    imgFront: string;
    imgBack: string;
    bgFront: string;
    bgBack: string;
    color: string;
    link: string;
};

type NewsArticle = {
    id: number;
    title: string;
    time: string;
    categories: string;
    image: string;
    description: string;
    text: string;
    pdf: string;
    video: string;
    photos: {
        id: number;
        alt: string;
        link: string;
    }[];
};

type LeProjetEducatifItem = {
    id: number;
    title: string;
    citation: string;
    text: string;
    textX: string;
    list: { id: number; text: string }[];
};

type Data = {
    categories: Categories[];
    news: NewsArticle[];
    leProjetEducatif: LeProjetEducatifItem[];
    error: string | null;
};

const initialData: Data = {
    categories: [],
    news: [],
    leProjetEducatif: [],
    error: null,
};

const DataContext = createContext<Data | null>(null);
export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
    const [error, setError] = useState<Error | null>(null);
    const [data, setData] = useState<Data>(initialData);
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch("/data.json");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const jsonData: Data = await response.json();
            setData(jsonData);
        } catch (err) {
            setError(err instanceof Error ? err : new Error("An error occurred"));
        }
    }, []);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <DataContext.Provider value={data}>{children}</DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
};

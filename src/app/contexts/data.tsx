import { createContext, useCallback, useContext, useEffect, useState, PropsWithChildren } from "react";

type Categories = {
  id: number;
  name: string;
  imgFront: string;
  imgBack:string;
  bgFront:string;
  bgBack:string;
  color:string;
  link:string;
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
  photos: {
    id: number;
    alt: string;
    link: string;
  }[];
};

type Data = {
  categories: Categories[];
  news: NewsArticle[]; 
  error: string | null;
};

const initialData: Data = {
  categories: [],
  news: [],
  error: null
};

const DataContext = createContext<Data | undefined>(undefined);
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const DataProvider = ({ children }: PropsWithChildren<{}>) => {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Data | undefined>(undefined);
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
    <DataContext.Provider value={data || initialData}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
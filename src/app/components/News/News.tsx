"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function News() {
    const { news, error } = useData();
    const [selectedCategory, setSelectedCategory] = useState("");
    if (error){ return <div>Error: {error}</div>}
    const sortedNews = news
        .map(article => {
            const [day, month, year] = article.time.split('/');
            return {
                ...article,
                parsedDate: new Date(Number(year), Number(month) - 1, Number(day)),
            };
        })
        .sort((a, b) => {
            const dateA = a.parsedDate?.getTime() || 0;
            const dateB = b.parsedDate?.getTime() || 0;
            return dateB - dateA;
        })
        .slice(0, 4);
    const filteredNews = selectedCategory ? sortedNews.filter(article => article.categories.includes(selectedCategory)) : sortedNews;
    const uniqueCategories = Array.from(new Set(news.flatMap(article => article.categories.split(', ').map(cat => cat.trim()))));
    return (
        <section className="w-full px-8 max-w-[1200px] mx-auto flex flex-col">
            <h3 className="text-3xl uppercase">Les Actualités</h3>
            <h4 className="text-3xl">Du groupe scolaire</h4>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="my-4 p-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
            </select>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {filteredNews.length === 0 ? (
                    <p>No news articles available.</p>
                ) : (
                    filteredNews.map(article => {
                        return (
                            <Link href={`/news/${article.id}`} key={article.id} className="flex flex-col mb-4 border p-4 rounded-3xl max-h-[500px] min-h-[350px] items-center justify-center">
                                <Image src={article.image} alt={article.title} width={300} height={200} className="rounded-2xl mb-2 max-h-[280px]"/>
                                <div className="flex flex-col w-full items-center justify-center">
                                    <h5 className="text-2xl font-bold">{article.title}</h5>
                                    <p className="text-sm text-gray-500">{article.time}</p>
                                    <div className="flex gap-2 mt-2 flex-wrap">
                                        {article.categories.split(', ').map((category, index) => (
                                            <span key={index} className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700">{category}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                )}
            </div>
        </section>
    );
}
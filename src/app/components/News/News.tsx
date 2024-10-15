"use client";

import { useData } from "@/app/contexts/data";
import Image from "next/image";
import Link from "next/link";

export default function News() {
    const { news, error } = useData();
    if (error){ return <div>Error: {error}</div>}
    return (
        <section className="w-full p-4 max-w-[1200px] mx-auto flex flex-col">
            <h3 className="text-3xl uppercase">Les Actualités</h3>
            <h4 className="text-3xl">Du groupe scolaire</h4>
            <div className="mt-4 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {news.length === 0 ? (
                    <p>No news articles available.</p>
                ) : (
                    news.map(article => (
                        <Link href={`/news/${article.id}`} key={article.id} className="flex flex-col mb-4 border p-4 rounded-3xl max-h-[500px] min-h-[350px] items-center justify-center">
                            <Image  src={article.image}  alt={article.title}  width={300} height={200} className="rounded-2xl mb-2"/>
                            <div className="flex flex-col w-full items-center justify-center">
                                <h5 className="text-2xl font-bold">{article.title}</h5>
                                <p className="text-sm text-gray-500">{article.time}</p>
                                <p className="text-sm text-gray-500">{article.categories}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </section>
    );
}

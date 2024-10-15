"use client";

import { useData } from "@/app/contexts/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    photos: { id: number; alt: string; link: string; }[];
};

interface ArticleProps {
    params: { id: string };
}

export default function Article({ params }: ArticleProps) {
    const { id } = params;
    const { news } = useData();
    const [article, setArticle] = useState<NewsArticle | null>(null);
    useEffect(() => {
        if (news && id) {
            const foundArticle = news.find(article => article.id === parseInt(id));
            setArticle(foundArticle || null);
        }
    }, [news, id]);
    if (!article) { return <div>Loading...</div>;}
    return (
        <main className="p-4 max-w-[1200px] mx-auto md:pt-[10vh] sm:pt-[5vh] flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl sm:mt-[10vh] md:mt-[5vh]">{article.title}</h1>
            <p>{article.time}</p>
            <Image src={article.image} alt={article.title} className="w-full h-auto rounded-3xl" width={400} height={300} />
            <p>{article.description}</p>
            {article.text && <p>{article.text}</p>}
            {article.video && (
                <div className="w-full h-auto rounded-3xl overflow-hidden">
                    <iframe src={article.video} width="100%" height="500" title="Video" style={{ border: 'none' }} allowFullScreen/>
                </div>
            )}
            {article.pdf && (
                <>
                    <div className="w-full h-[600px] overflow-scroll rounded-3xl">
                        <iframe src={article.pdf} width="100%" height="100%" title="PDF Document" style={{ border: 'none' }} />
                    </div>
                    <Link href={article.pdf} target="_blank" rel="noopener noreferrer" className="underline">Télécharger le PDF</Link>
                </>
            )}
            {article.photos.length > 0 && (
                <div className="w-full flex flex-col gap-4">
                    {article.photos.map(photo => (
                        <Image key={photo.id} src={photo.link} alt={photo.alt} className="w-full h-auto rounded-3xl" width={400} height={300} />
                    ))}
                </div>
            )}
        </main>
    );
}

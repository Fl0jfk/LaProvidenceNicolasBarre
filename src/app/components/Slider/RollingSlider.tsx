"use client"

import { useData } from "@/app/contexts/data";
import Slider from "./Slider";

export default function RollingSlider (){
    const data = useData();
    return (
        <section className="max-w-[1200px] w-full self-center mx-auto mt-4">
            <div className="p-4 flex flex-col gap-1">
                <h3 className="text-3xl"><span>3</span> établissements</h3>
                <p className="font-light">École, collège, lycée, trois directions, mais un seul projet éducatif, une seule tutelle, un même esprit, que nous vous invitons à découvrir.</p>
                <p className="font-light">Acquisition des savoirs, éducation à la liberté, annonce de l&apos;Evangile, trois objectifs qui nous semblent majeurs. Trois établissements dont nous percevrez l&apos;unité et les différences car, naturellement, on ne propose ni les mêmes règles, ni les mêmes méthodes d&apos;enseignement à l&apos;école, au collège ou au lycée.</p>
            </div>
            {data.categories[0] &&
                <div id="slideshow">
                    <Slider props={data.categories}/>
                </div>
            }
        </section>
    )
}
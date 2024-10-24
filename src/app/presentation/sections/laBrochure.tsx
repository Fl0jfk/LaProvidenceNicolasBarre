export default function LaBrochure(){
    return (
        <section id="laBrochure" className="flex flex-col items-center justify-center">
            <h1 className="w-[90%] text-center text-4xl max-w-[1200px] mx-auto xl:mb-12 uppercase font-bold">La brochure</h1>
            <h2 className="text-4xl font-light">du groupe scolaire</h2>
            <section className="p-8 max-w-[1200px] w-full mx-auto">
                <iframe className="w-full h-[700px] sm:h-[400px]" allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" src="https://e.issuu.com/embed.html?d=brochure_mesnil_esnard_2024_33b889f4b45288&amp;u=ekole.fr"/>
            </section>
        </section>
    )
}
import LeProjetEducatifSlider from "@/app/components/Slider/EducationalProjectSlider";
import { useData } from "@/app/contexts/data";
import Image from "next/image";

export default function Internat(){
    const { internat } = useData()
    return (
        <section id="lInternat" className="bg-gray-100 mt-6 pt-6 flex md:flex-col sm:flex-col gap-6">
            <div className="flex flex-col">
                <h3 className="uppercase font-bold text-3xl px-8">L&apos;internat</h3>
                <h4 className="text-3xl font-normal px-8">de la 6 ème à la terminale</h4>
                <p className="font-normal mt-8 px-8">L&apos;internat accueille 150 pensionnaires filles et garçons de la 6ème à la terminale: 25 places sont réservées aux collégiens et 125 places aux lycéens.</p>
                <p className="font-normal px-8">L&apos;internat est ouvert du lundi matin au vendredi soir.</p>
                <p className="font-normal px-8">Le retour en famille a lieu chaque semaine le vendredi soir.</p>
                <div className="py-8">
                    <LeProjetEducatifSlider slides={internat}/>
                </div>
                <div className="flex w-full justify-start px-8">
                    <Image alt="Image de l'école La Providence" src={"https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/groupe-scolaire-la-providence-nicolas-barre-le-mesnil-esnard-ecole-college-lycee-prive-6.jpg.webp"} width={350} height={350}/>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex w-full justify-end px-8">
                    <Image alt="Image de l'école La Providence" src={"https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/groupe-scolaire-la-providence-nicolas-barre-le-mesnil-esnard-ecole-college-lycee-prive-9.jpg.webp"} width={350} height={350}/>
                </div>
                <div>
                    <p>1</p>
                    <div>
                        <h4>Les moments de détente</h4>
                        <p>Ils sont une occasion de partager un moment au foyer, de se dépenser en salle de sport ou à l&apos;extérieur sur les différents terrains quand le temps le permet.</p>
                    </div>
                </div>
                <div>
                    <p>2</p>
                    <div>
                        <h4>Les études surveillées</h4>
                        <p>Elles ont lieu en salle (après les cours) et apportent un cadre satisfaisant pour le travail individuel.</p>
                        <p>Si nécessaire, les collégiens peuvent profiter d&apos;un suivi plus personnalisé dans le cadre de l&apos;accompagnement éducatif.</p>
                        <p>Le lundi et le jeudi, de 18h00 à 19h00, les élèves les plus en difficulté peuvent bénéficier de l&apos;étude alpha encadré par des étudiants de cursus sélectifs (sans surcoût pour les familles).</p>
                        <p>Les élèves de terminale peuvent être autorisés à travailler en autogestion.</p>
                        <p>Le CDI est accessible jusqu&apos;à 19h00.</p>
                        <p>Deux salles informatiques (60 postes) sont accessibles pour les lycéens jusqu&apos;à 19h00 puis de 19h30 à 20h30. Après le repas et le temps de détente les élèves peuvent poursuivre leur travail dans leur chambre.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
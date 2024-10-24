import Image from "next/image"

export default function NotreHistoire (){
    return (
        <section id="notreHistoire">
            <h3>Notre</h3>
            <h4>Histoire</h4>
            <Image src={"https://laprovidencenicolasbarre.s3.eu-west-3.amazonaws.com/images/histoire-groupe-scolaire-providence-nicolas-barre-mesnil-esnard.png.webp"} alt="Image qui représente la chronologie de l'histoire de La Providence" width={500} height={200}/>
        </section>
    )
}
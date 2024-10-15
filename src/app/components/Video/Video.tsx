export default function Video() {
    return (
        <section className="h-[490px] md:h-[650px] lg:h-[700px] xl:h-[700px] w-full mx-auto max-w-[1200px] flex flex-col">
            <iframe
                className="w-full h-[600px] md:h-[800px]"
                src="https://player.vimeo.com/video/706082592?autoplay=1&muted=1&controls=0&loop=1"
                title="Video de présentation La providence Nicolas Barré"
            />
        </section>
    );
}

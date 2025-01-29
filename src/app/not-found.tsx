import HomeLink from "@/components/HomeLink";
import ItemTitle from "../components/ItemTitle";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function NotFound() {
    return (
        <div className="bg-black min-h-screen w-screen flex justify-center items-center">
            <BackgroundVideo src="/videos/i-am-error.mp4" />
            <HomeLink />
            <ItemTitle className="mt-64 sm:mt-0" subtitle="Page not found...">Error 404</ItemTitle>
        </div>
    );
}
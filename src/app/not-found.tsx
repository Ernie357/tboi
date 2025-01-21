import HomeLink from "@/components/HomeLink";
import ItemTitle from "../components/ItemTitle";

export default function NotFound() {
    return (
        <div className="bg-black">
            <HomeLink />
            <div className="flex items-center justify-center min-h-screen w-full bg-isaac-crying-black-background-mobile sm:bg-black bg-no-repeat bg-contain bg-center">
                <div className="min-h-screen w-3/4 flex justify-center items-start sm:items-center bg-transparent sm:bg-error bg-center bg-contain bg-no-repeat">
                    <ItemTitle className="mt-64 sm:mt-0" subtitle="Page not found...">Error 404</ItemTitle>
                </div>
            </div>
        </div>
    );
}
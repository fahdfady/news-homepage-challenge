import Link from "next/link";
import { Separator } from "./ui/separator";

const NewsList = [
    {
        id: 1,
        title: "Hydrogen VS Electric Cars",
        description: "Will hydrogen-fueled cars ever catch up to EVs?",
        link: "#0",
    },
    {
        id: 2,
        title: "The Downsides of Al Artistry",
        description: "What are the possible adverse effects of on-demand Al image generation?",
        link: "#0",
    },
    {
        id: 3,
        title: "Is VC Funding Drying Up?",
        description: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
        link: "#0",
    },
]

export function NewsCard() {
    return (
        <div className="bg-gray-900 text-white md:min-h-[500px] px-6 py-12">
            <h2 className="text-4xl font-bold text-[#eba758] mb-8">New</h2>

            <div className="flex flex-col gap-3">

                {NewsList.map((item, index) => (
                    <>
                        <Link key={index} href={`/posts/${item.id}`} className="space-y-1">
                            <h3 className="text-xl font-bold hover:text-[#eba758] duration-100">{item.title}</h3>
                            <p className="text-lg text-white/70">{item.description}</p>
                        </Link>

                        {index < NewsList.length - 1 && <Separator className="my-4 border-gray-700" />}
                    </>
                ))}

            </div>
        </div >
    )
}
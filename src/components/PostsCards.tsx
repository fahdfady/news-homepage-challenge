import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const PostsList = [
    {
        id: 1,
        title: "Reviving Retro PCs",
        description: "",
        image:"",
    },
    {
        id: 2,
        title: "Top 10 Laptops of 2022 ",
        description: "",
        image:"",
    },
    {
        id: 3,
        title: "The Growth of Gaming",
        description: "",
        image:"",
    },
]

const FirstThreePosts = PostsList.slice(0, 3)

export function PostsCardsSection({ className }: { className?: string }) {
    return (
        <section className={cn(
            "",
            className,
        )}>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                {FirstThreePosts.map((post, index) => (
                    <Link href={`/posts/${post.id}`} className="flex justify-between gap-4 h-[120px]" key={index}>
                        <div className="w-[120px] h-[120px]">
                            <Image
                                src="/image-retro-pcs.jpg"
                                alt="the bright future of web 3.0?"
                                width={120}
                                height={120}
                                className="size-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col justify-between">
                            <h2 className="text-3xl font-extrabold text-secondary">01</h2>
                            <p className="text-xl font-bold">Reviving Retro PCs</p>
                            <p className="text-lg text-muted-foreground">What happens when old PCs are given modern upgrades?</p>
                        </div>
                    </Link>
                ))}

            </div>
        </section>
    )
}
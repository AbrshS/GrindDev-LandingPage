import Tag from "@/components/Tag";
import Image from "next/image";
import EthiopianImage from "@/assets/images/ethiopian-pattern.png";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="relative min-h-screen">
            <div className="flex justify-center pt-20">
                <Tag>INTRODUCING LAYERS</Tag>
            </div>

            <div className="flex items-center min-h-[calc(100vh-120px)]">
                {/* Background Pattern */}
                <div className="absolute left-0 top-20 h-[calc(100%-80px)] w-[40%] md:w-[45%] lg:w-[45%]">
                    <Image
                        src={EthiopianImage}
                        alt="Ethiopian Pattern"
                        fill
                        className="object-cover grayscale contrast-125 object-right scale-x-[-1]"
                    />
                </div>

                {/* Content */}
                <div className="container relative z-10">
                    <div className="ml-auto max-w-3xl lg:text-right px-4">
                        <h2 className="text-5xl md:text-6xl lg:text-8xl font-medium leading-tight">
                            Your creative process deserves better.
                        </h2>
                        <p className="text-white/40 mt-8 text-2xl md:text-3xl lg:text-4xl font-light">
                            {text}
                        </p>
                        <p className="text-[#AAFF00] text-3xl md:text-4xl lg:text-5xl mt-8 font-medium">
                            That&apos;s why we built Layers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image"; 
import Pointer from "@/components/pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                {/* Top Left Image */}
                <div className="absolute -left-32 -top-48 w-60 h-60 hidden lg:block">
                    <div className="w-full h-full bg-white/5 rounded-2xl transform -rotate-12">
                        {/* Image will go here */}
                        <Image
                            src={designExample1}
                            alt="Design Example 1"
                            fill
                        />
                    </div>
                </div>

                {/* Top Right Image */}
                <div className="absolute -right-32 -top-32 w-80 h-80 hidden lg:block">
                    <div className="w-full h-full bg-white/5 rounded-2xl transform rotate-12">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Bottom Left Image */}
                <div className="absolute -left-32 -bottom-32 w-80 h-80 hidden lg:block">
                    <div className="w-full h-full bg-white/5 rounded-2xl transform rotate-12">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Bottom Right Image */}
                <div className="absolute -right-32 -bottom-32 w-80 h-80 hidden lg:block">
                    <div className="w-full h-full bg-white/5 rounded-2xl transform -rotate-12">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Existing Pointer elements */}
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="ፈጣን"/>
                </div>
                <div className="absolute right-80">
                    <Pointer name="መገለጫ" color="red"/>
                </div>

                <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 rounded-full font-semibold">
                    ✨ $7.5M seed round raised
                </div>
                </div>
              
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-s-2xl mx-auto">
                    Design tools shoudn&apos;t slow you down. Layes combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 md:max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}

import CoolDivider from "@/components/about/CoolDivider";
import RedBox from "@/components/about/RedBox";
import Superheroes from '@/components/about/SuperHeroes/Superheroes';
import OurWorkSection from '@/components/about/OurWork/OurWorkSection';

export default function About() {
    return (
        <>
            <section className="bg-primaryBg text-white pt-12 lg:pt-28 px-3 lg:px-32 font-grotley grid grid-cols-2 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="relative pt-2 px-2 md:pt-5 md:px-5">
                        <img
                            className="absolute top-0 left-0 w-4 h-4 md:w-12 md:h-12"
                            src="/spark.svg"
                        />
                        <h1 className="text-2xl lg:text-5xl">About Us</h1>
                    </div>

                    <div className="mt-6 relative pt-5 lg:w-[645px]">
                        <img
                            className="absolute -right-16 -top-4 ml-4"
                            src="/spiral.svg"
                            width={70}
                            height={62}
                        />
                        <p className="hidden lg:block ml-5">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                        </p>

                        <p className="lg:hidden ml-2">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                        </p>
                    </div>
                </div>

                <div className="grid place-content-center">
                    <img
                        src="/wheel.svg"
                        width={200}
                        height={200}
                    />
                </div>
            </section>

            <div className="bg-primaryBg pt-12 relative">
                <div className="flex justify-between w-1/2">
                    <img src="/st_patricks_logo.svg" width={274} height={285} />

                    <div className="self-center z-50">
                        <img src="/yellow_logo.svg" width={97} height={108} />
                    </div>

                </div>
                <CoolDivider />
            </div>

            <section className="relative z-50 mt-[200px] grid grid-cols-1 lg:grid-cols-2">
                <div className="absolute hidden lg:block top-1/3 left-[45%]">
                    <img src="/illustration.svg" width={120} height={120} />
                </div>
                <RedBox pillText={'what we do'}>
                    <p className="w-[367px] h-[144px] mt-10">
                        Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                    </p>
                </RedBox>
                <div></div>
                <div></div>
                
                <div className="mt-40 lg:mt-0">
                    <RedBox pillText={'who we are'}>
                        <p className="w-[367px] h-[144px] mt-10">
                            Lorem ipsum dolor sit amet consectetur. Est mattis dignissim consectetur nulla platea. Amet faucibus leo aenean ante in nunc laoreet. Massa volutpat tellus in scelerisque libero aliquet nunc. Eu consectetur donec ultricies adipiscing.
                        </p>
                    </RedBox>
                </div> 
            </section>

            <section>
                <img src="/four_leaf_clover.svg" width={189} height={189} />
            </section>

            <Superheroes/>
            <OurWorkSection/>
        </>
    )
}


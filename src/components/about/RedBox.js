import YellowPill from "@/components/about/YellowPill";

export default function RedBox({ pillText, children }) {
    return <div 
        className="h-[238px] bg-primaryBg rounded-xl text-white flex flex-col items-center border-[3px] border-black">
        <YellowPill>
            <span className="capitalize text-xl font-satoshi font-semibold">{pillText}</span>
        </YellowPill>

        {children}
    </div>
}
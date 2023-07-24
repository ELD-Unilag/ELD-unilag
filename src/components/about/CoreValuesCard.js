
export default function CoreValuesCard({ item }) {
    return  <div className={`rounded-2xl w-40 h-40 lg:w-[333px] lg:h-[333px] text-white bg-[${item.bgColor}] py-4 text-center font-satoshi`}>
    <p className="font-bold text-xl lg:text-4xl">{item.title}</p>
    <p className="text-[10px] lg:text-xl mt-4">
        Strenghtened by the core of the values of the society
    </p>

    <div className="flex justify-center mt-3">
        <img src={item.imgURL} className="w-16 h-16 lg:w-48 lg:h-48" />
    </div>
</div>
}
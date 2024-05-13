import Image from "next/image"

const Card = (props) => {
    const { title, desc, imgSrc, downloadLink } = props


    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-2xl  ">
            <Image className="w-full h-80 object-fill p-10 rounded-xl" priority={true} src={imgSrc} alt="extension" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a
                    href="https://github.com/anukultyagi"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    Github
                </a>
                <a
                    href={downloadLink}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    Download
                </a>


            </div>
        </div>
    )
}

export default Card
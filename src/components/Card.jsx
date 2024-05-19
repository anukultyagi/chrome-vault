import { ErrorBoundary } from "next/dist/client/components/error-boundary"
import Image from "next/image"
import Link from "next/link"

const Card = (props) => {
    const { title, desc, imgSrc } = props


    return (
        <div className="max-w-sm mx-auto rounded overflow-hidden shadow-2xl  ">
            <Image className="w-full h-44 object-contain p-10 rounded-xl" priority={true} src={imgSrc} alt="extension" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {desc}
                </p>

            </div>
            <div className="px-6 pt-4 pb-2">
                <Link
                    target="_blank"
                    href="https://github.com/anukultyagi/Chrome-Extensions-Showcase"
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    Github
                </Link>
                <Link
                    href='/instructions'
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    Instructions
                </Link>


            </div>
        </div>
    )
}

export default Card
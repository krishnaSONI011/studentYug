import Image from "next/image";


type UserCardProps = {
  name: string;
  schoolName: string;
  avatarSrc: string;
  postImageSrc: string;
};

export default function UserCard({ name, schoolName, avatarSrc, postImageSrc }: UserCardProps){
    return(
        <>
        <div className="w-1/2  bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Header: Student info at top */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
                <Image src={avatarSrc} className="rounded-full" width={40} height={40} alt="User avatar" />
                <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{name}</p>
                    <p className="text-xs text-gray-500 leading-tight">{schoolName}</p>
                </div>
            </div>

            {/* Middle: Posted image */}
            <div className="relative bg-gray-50">
                <Image 
                    src={postImageSrc}
                    alt="Posted image"
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Bottom: Actions */}
            <div className="px-4 py-3 border-t border-gray-100 flex items-center justify-between">
                <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                    {/* Heart icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 3 13.102 3 10.5 3 8.015 5.014 6 7.5 6A4.5 4.5 0 0112 8.03 4.5 4.5 0 0116.5 6C18.986 6 21 8.015 21 10.5c0 2.602-1.688 4.86-3.989 7.007a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.218l-.022.012-.007.003a.75.75 0 01-.666 0z" />
                    </svg>
                    Like
                </button>
                <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                    {/* Share icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M7.5 7.5a3 3 0 115.485-1.772l4.708 2.704a3 3 0 11-.003 4.136l-4.705 2.703a3 3 0 11-.76-1.303l4.705-2.703a3.01 3.01 0 010-1.532l-4.708-2.704A3 3 0 017.5 7.5z" />
                    </svg>
                    Share
                </button>
            </div>
        </div>
        </>
    )
}
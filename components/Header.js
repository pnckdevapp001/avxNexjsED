import Link from "next/link";
// import Image from "next/image";

import Image from "next/image";
const Header = () => {
    return (
        <div className="justify-items-center">
           <Link href="/" passHref>
            <Image className="px-3 hover:opacity-70" title="ดูหนังAV คลิปหลุดไทย และ คลิปโซนเอเชีย ฟรีไม่มีโฆษณา" src="/AVFREE-NEW.png" alt="ดูหนังAV คลิปหลุดไทย และ คลิปโซนเอเชีย ฟรีไม่มีโฆษณา" width={300} height={150} />
            </Link>
        {/* <div className="flex flex-wrap justify-center">
            <li className="list-none py-4 my-8 pr-2">
                <Link href="/" as={`/`}>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> Home
                    </button>
                </Link>
            </li>
            <li className="list-none py-4 my-8 pr-2">
                <Link href="/tv" as={`/tv`}>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> TV Serire
                    </button>
                </Link>
            </li>
            <li className="list-none py-4 my-8 pr-2">
                <Link href="/search" as={`/search`}>
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span> ค้นหาหนัง ซีรี่ย์
                    </button>
                </Link>
            </li>
            <li className="list-none py-4 my-8 pr-2">
                <button>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> กลับไป AVFREEX24 v.Default
                </button>
            </li>
        </div> */}
        </div>
    );
}

export default Header;
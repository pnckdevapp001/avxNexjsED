import Link from "next/link";
const Tipads = () => {
  return (
    <div className="py-2 text-center">
      <footer
        className="text-white sticky top-[100vh] pt-4 pb-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <h1 className="htone py-3.5 text-center"><span className="hovo text-xl md:text-5xl">คลิปหลุดเอเชีย</span><br />คลังAV และ คลิปโซนเอเชีย<br /><span className="lfl">ฟรีไม่มีโฆษณา</span></h1>
        <Link href="https://avfreex24.com/" passHref>
        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span> กลับไป AVFREEX24 v.Default
        </button>
        </Link>
      </footer>
    </div>
  );
};

export default Tipads;

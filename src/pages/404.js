import Main from "@/layouts/main";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Main>
      <main className={"container"}>
        <div className={"flex items-center gap-x-[12px] text-sm pt-[60px]"}>
          <Link href="/" className={"text-[#808080]"}>
            Home
          </Link>
          <p>/</p>
          <Link href="/404">404 Error</Link>
        </div>

        <section className="container my-[140px]">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[110px] font-medium">404 Not Found</h1>
            <p className="mt-[40px] mb-[80px]">
              Your visited page not found. You may go home page.
            </p>

            <Link href="/">
              <button
                className={
                  "py-[16px] px-[48px] rounded-[4px] font-medium text-white bg-[#DB4444]  "
                }
              >
                Back to home page
              </button>
            </Link>
          </div>
        </section>
      </main>
    </Main>
  );
};

export default NotFoundPage;

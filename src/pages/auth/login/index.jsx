import Main from "@/layouts/main";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <Main>
      <div className={"h-[1px] w-full bg-[#B3B3B3]"}></div>
      <main
        className={
          "container grid grid-cols-12 gap-x-[30px] mt-[60px] mb-[140px]"
        }
      >
        <div className={" col-span-7 relative bg-[#CBE4E8] rounded-[4px]"}>
          <Image
            src="/images/login.png"
            alt="login"
            width={919}
            height={706}
            className={"overflow-hidden"}
          />
        </div>

        <div className={"col-span-5 flex flex-col justify-center items-center"}>
          <h2 className={"text-[36px] font-medium mb-[24px]"}>
            Log in to Exclusive
          </h2>

          <p className={""}>Enter your details below</p>

          <form className={"mt-[48px] space-y-[40px]"}>
            <input
              type="email"
              placeholder="Email or Phone Number"
              className={"w-full border-b p-[8px]"}
            />

            <input
              type="text"
              placeholder="Password"
              className={"w-full border-b p-[8px]"}
            />

            <div className={"flex gap-x-[87px]"}>
              <button
                className={
                  "bg-[#DB4444] rounded-[4px]    px-[48px]  py-[16px] inline-block text-white"
                }
              >
                Login
              </button>

              <button className={" rounded-[4px] text-[#DB4444]"}>
                <p>Forget Password?</p>
              </button>
            </div>
          </form>
        </div>
      </main>
    </Main>
  );
};

export default Login;

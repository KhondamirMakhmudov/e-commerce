import Main from "@/layouts/main";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
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
            Create an account
          </h2>

          <p className={""}>Enter your details below</p>

          <form className={"mt-[48px] space-y-[40px]"}>
            <input
              type="text"
              placeholder="First Name"
              className={"w-full border-b p-[8px]"}
            />

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

            <div>
              <button
                className={
                  "bg-[#DB4444] rounded-[4px] w-full py-[16px] text-white"
                }
              >
                Create Account
              </button>

              <button
                className={
                  "flex w-full gap-x-[16px] mb-[32px] mt-[16px] border py-[16px] justify-center rounded-[4px]"
                }
              >
                <Image
                  src="/images/google.png"
                  alt="google"
                  width={24}
                  height={24}
                />
                <p>Sign up with Google</p>
              </button>

              <div className={"flex gap-x-[16px] text-center"}>
                <p className={"text-[#4D4D4D]"}>Already have account?</p>
                <Link
                  className={"text-[#4D4D4D] border-b  pb-[4px]"}
                  href={"/auth/login"}
                >
                  Log in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Main>
  );
};

export default SignUp;

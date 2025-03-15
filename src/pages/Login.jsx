import React from "react";
import { BackgroundDetail } from "../components/BackgroundDetail";
import { KakaoButton } from "../components/KakaoButton";

export function Login() {
  return (
    <div className="min-h-screen overflow-hidden bg-violet-950 relative">
      <BackgroundDetail />
      <div className="relative z-10 flex overflow-hidden flex-col items-center w-full">
        <div className="container mx-auto max-w-[1784px]">
          <div className="flex gap-5 min-h-screen max-md:flex-col">
            <div className="w-[41%] max-md:w-full">
              <div className="flex overflow-hidden flex-col h-full px-16 pt-10 pb-44 w-full font-medium bg-white/10 backdrop-blur-sm text-stone-50 max-md:px-5 max-md:pb-24">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/367ee50e37083074929b2c169f0f6174965e835bdce36c0ca43680c15488f445?placeholderIfAbsent=true"
                  alt="Coalarm Logo"
                  className="object-contain w-[100px] h-auto"
                />
                <div className="flex-1 flex flex-col mt-56 max-md:mt-10">
                  <div className="ml-16 text-2xl tracking-tight max-md:ml-0">
                    빠르고 정확한 매매 시그널, 스마트한 투자 파트너
                  </div>
                  <h1 className="ml-16 text-7xl font-extrabold tracking-tighter max-md:ml-2.5 max-md:text-4xl">
                    코알람
                  </h1>
                  <div className="self-center mt-80 text-lg tracking-normal text-zinc-300 max-md:mt-10">
                    카카오 계정으로 간편하게 로그인하고, 다양한 서비스를 이용해
                    보세요.
                  </div>
                  <div className="mt-5 ml-16 max-md:ml-0">
                    <KakaoButton
                      className="px-40 max-md:px-5"
                      aria-label="카카오 계정으로 로그인"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[59%] max-md:w-full flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c25c9ce3bfa320605141de855be768c87d13e70d8ef93a5fb246bb0344cd40?placeholderIfAbsent=true"
                alt="Login page illustration"
                className="object-contain w-full h-auto max-h-[90vh]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

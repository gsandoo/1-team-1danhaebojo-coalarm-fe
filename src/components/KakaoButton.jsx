import React from "react";

export function KakaoButton({ className = "", ...props }) {
  return (
    <button
      className={`
        group relative flex items-center justify-center w-full
        px-6 py-4 bg-[#FEE500] rounded-[1000px]
        text-[#191919] text-2xl font-medium tracking-tight
        transition-all duration-300
        hover:bg-[#FEE500]/90 active:scale-[0.98]
        focus:outline-none focus:ring-2 focus:ring-[#FEE500] focus:ring-offset-2 focus:ring-offset-violet-950
        ${className}
      `}
      {...props}
    >
      <div className="absolute left-6 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.5C6.47715 2.5 2 6.08919 2 10.5C2 13.4858 3.94218 16.0855 6.89889 17.3973L5.81273 21.3262C5.71819 21.6045 5.96526 21.8753 6.22167 21.7509L10.9142 18.9827C11.2729 19.0229 11.6339 19.0474 12 19.0474C17.5228 19.0474 22 15.4582 22 11.0474C22 6.63657 17.5228 2.5 12 2.5Z"
            fill="#191919"
          />
        </svg>
      </div>
      카카오 로그인
    </button>
  );
}

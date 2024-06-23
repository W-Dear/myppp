import Link from "next/link";
import { Button } from "@/components/ui/button"; // 예시로 임포트된 컴포넌트

export function MyPPP() {
  return (
    <>
      <header className="w-full bg-[#BFB5A2] text-gray-50 py-6 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <Link className="flex items-center gap-2" href="#">
            <MagnetIcon className="w-8 h-8" />
            <span className="text-xl font-bold"></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#comics" className="hover:underline underline-offset-4">
              
            </Link>
          </nav>
          <div className="flex items-center gap-4 md:hidden">
            <Button size="icon" variant="ghost">
              <MenuIcon className="w-6 h-6" />
              <span className="sr-only">메뉴 토글</span>
            </Button>
          </div>
        </div>
      </header>
      <main>
        <section className="w-full bg-[#424242] text-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                안진섭
              </h1>
              <p className="text-gray-400 max-w-[600px] md:text-xl">
                흑백을 좋아하는 일러스트레이터입니다.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#comics"
                  className="inline-flex items-center justify-center rounded-md bg-[#BFB5A2] px-4 py-2 text-sm font-medium text-gray-950 shadow-sm transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-950 dark:hover:bg-gray-800 dark:focus:ring-gray-900 dark:ring-offset-gray-50 dark:dark:bg-gray-50 dark:dark:hover:bg-gray-50/90 dark:dark:focus:ring-gray-50"
                >
                  작품 보기
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="만화 일러스트"
                className="w-full max-w-[400px] md:max-w-none"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </section>
        
        <section className="w-full bg-[#756F67] text-gray-50 py-12 md:py-24 lg:py-32" id="comics">
          <div className="container max-w-6xl mx-auto">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">작업물</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <img
                  alt="Comic 1"
                  className="w-full h-auto rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <img
                  alt="Comic 2"
                  className="w-full h-auto rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <img
                  alt="Comic 3"
                  className="w-full h-auto rounded-lg object-cover"
                  height={400}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full bg-[#424242] text-gray-50 py-12 md:py-24 lg:py-32" id="contact">
          <div className="container max-w-6xl mx-auto">
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">연락하기</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-[#BFB5A2] rounded-lg p-6 space-y-4">
                <MailIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold"></h3>
                <a className="text-white hover:underline" href="mailto:example@example.com">
                  example@example.com
                </a>
              </div>
              <div className="bg-[#BFB5A2] rounded-lg p-6 space-y-4">
                <PhoneIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold"></h3>
                <a className="text-white hover:underline" href="#">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="bg-[#BFB5A2] rounded-lg p-6 space-y-4">
                <FacebookIcon className="w-8 h-8" />
                <h3 className="text-xl font-bold"></h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-white hover:underline">
                    000
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-[#BFB5A2] text-gray-50 py-6 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-sm"></div>
          <nav className="hidden md:flex items-center gap-6">
          </nav>
        </div>
      </footer>
    </>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function MagnetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
      <path d="m5 8 4 4" />
      <path d="m12 15 4 4" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

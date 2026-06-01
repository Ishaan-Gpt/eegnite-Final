import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
            <span className="text-[120px] md:text-[200px] font-bold leading-none text-black/5 select-none">404</span>
            <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-black -mt-8 mb-4">
                Page Not <span className="text-[#FF6105]">Found</span>
            </h1>
            <p className="text-black/50 text-lg mb-10 max-w-md">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                href="/"
                className="flex items-center gap-2 px-8 py-4 bg-[#FF6105] text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-black transition-colors"
            >
                <ArrowLeft size={16} />
                Back to Home
            </Link>
        </main>
    );
}

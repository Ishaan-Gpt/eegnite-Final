import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, User, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- MOCK DATA ---
const allPosts: Record<string, { title: string; content: string; image: string; category: string; date: string; author: string }> = {
    "top-10-seo-agencies-kolkata-2026": {
        title: "Top 10 SEO Agencies in Kolkata You Can Trust in 2026",
        category: "SEO",
        date: "Jan 17, 2026",
        author: "EEGNITE Team",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-[#6B5545] font-normal">In the ever-evolving world of digital marketing, choosing the right SEO agency is crucial for businesses looking to grow their online presence. With the increasing importance of SEO in driving traffic and enhancing website visibility, partnering with a reliable SEO agency can significantly impact your business’s success.</p>
            
            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">Why Choosing the Best SEO Agency Matters</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">When it comes to growing your online presence, SEO is not just a marketing tactic; it’s a necessity. For businesses in Kolkata, choosing the best SEO agency can make all the difference in standing out in a highly competitive digital landscape. A well-executed SEO strategy can improve your website’s ranking, drive organic traffic, and ultimately increase conversions.</p>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">Top 10 SEO Agencies in Kolkata</h2>
            <p class="mb-8 text-lg leading-relaxed text-[#6B5545]">Here are the top 10 SEO agencies in Kolkata that have consistently delivered tangible results for their clients, helping businesses achieve their digital marketing goals:</p>

            <div class="mb-12 p-8 bg-gray-50 rounded-3xl border border-black/5">
                <h3 class="text-2xl font-bold mb-4 text-[#FF6105] uppercase tracking-tight">1. EEGNITE</h3>
                <p class="mb-4 text-lg leading-relaxed text-[#6B5545]">EEGNITE stands out as one of Kolkata’s top SEO agencies, recognized for its innovative and results-driven SEO solutions. Specializing in keyword research and strategy making, on-page optimization, technical SEO, content refinement, and link-building activity, EEGNITE crafts customized strategies that deliver long-lasting results for businesses of all sizes.</p>
                <p class="text-lg leading-relaxed text-[#6B5545]">With a strong track record of success, EEGNITE has become a trusted name in the SEO and digital marketing industry, helping clients achieve significant improvements in online visibility and performance.</p>
            </div>

            <div class="space-y-8 mb-16">
                 <div class="flex gap-4 items-start">
                    <span class="text-[#2A1810] font-bold text-xl">02.</span>
                    <div>
                        <h4 class="text-xl font-bold text-[#2A1810] mb-2">Kreative Machinez</h4>
                        <p class="text-[#6B5545]">Known for delivering structured SEO strategies that help businesses enhance search visibility and build a consistent online presence.</p>
                    </div>
                </div>
                 <div class="flex gap-4 items-start">
                    <span class="text-[#2A1810] font-bold text-xl">03.</span>
                    <div>
                        <h4 class="text-xl font-bold text-[#2A1810] mb-2">Indus Net Technologies</h4>
                        <p class="text-[#6B5545]">Offers SEO services focused on improving website performance, user experience, and search visibility across both local and international markets.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <span class="text-[#2A1810] font-bold text-xl">04.</span>
                    <div>
                        <h4 class="text-xl font-bold text-[#2A1810] mb-2">SEO Control</h4>
                        <p class="text-[#6B5545]">Emphasizes local-focused SEO strategies designed to help businesses improve search rankings and visibility within competitive regional markets.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <span class="text-[#2A1810] font-bold text-xl">05.</span>
                    <div>
                        <h4 class="text-xl font-bold text-[#2A1810] mb-2">PromotEdge</h4>
                        <p class="text-[#6B5545]">Offers a mix of on-page SEO, content-driven strategies, and link-building efforts to support online growth for businesses at different stages.</p>
                    </div>
                </div>
                <div class="flex gap-4 items-start">
                    <span class="text-[#2A1810] font-bold text-xl">06.</span>
                    <div>
                        <h4 class="text-xl font-bold text-[#2A1810] mb-2">Webguru Infosystems</h4>
                        <p class="text-[#6B5545]">Uses a data-driven SEO approach to help businesses across various industries improve organic rankings and strengthen online visibility.</p>
                    </div>
                </div>
            </div>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">Why EEGNITE is the Best</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">When it comes to SEO services in Kolkata, there are many agencies to choose from, but none match EEGNITE's proven ability to drive real, measurable results. Their customized SEO strategies are designed to meet the goal of your business, ensuring improvements in search engine rankings and organic traffic.</p>
            
            <ul class="space-y-4 mb-10 mt-6">
                <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-2.5 shrink-0"></span>
                    <span class="text-lg text-[#6B5545]"><strong>Advanced AEO/GEO Models:</strong> Leveraging semantic search for AI-driven platforms like ChatGPT and Gemini.</span>
                </li>
                 <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-2.5 shrink-0"></span>
                    <span class="text-lg text-[#6B5545]"><strong>Technical Precision:</strong> Handling critical technical errors that most agencies overlook.</span>
                </li>
                 <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-2.5 shrink-0"></span>
                    <span class="text-lg text-[#6B5545]"><strong>Transparent Reporting:</strong> Regular performance reports using GA4 and Search Console.</span>
                </li>
            </ul>
        `
    },
    "local-seo-strategies-2026-google-maps": {
        title: "7 Proven Local SEO Strategies to Rank Higher in 2026",
        category: "Local Growth",
        date: "Jan 16, 2026",
        author: "EEGNITE Team",
        image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?auto=format&fit=crop&q=80&w=1600",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-[#6B5545] font-normal">Google Maps has taken over the front page of local businesses. If your business isn’t in the top 3 on Google Maps, it might as well not exist. In 2026, ranking higher on Google Maps is more critical than ever.</p>
            
            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">1. Your Google Business Profile Needs Constant Attention</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">You can’t just set up your Google Business Profile (GBP) and forget it. If you want to rank higher in Google Maps, your GBP needs to be continuously optimized.</p>
            <ul class="space-y-4 mb-8">
                <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-2.5 shrink-0"></span>
                    <span class="text-lg text-[#6B5545]"><strong>Accurate Details:</strong> NAP (Name, Address, Phone) consistency is non-negotiable.</span>
                </li>
                <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#FF6105] mt-2.5 shrink-0"></span>
                    <span class="text-lg text-[#6B5545]"><strong>Photos:</strong> Regularly update with high-quality images.</span>
                </li>
            </ul>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">2. Proximity Is Not in Your Control. Relevance Is.</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">Stop complaining about your location. Google doesn’t just care about how close you are; it cares about how <em>relevant</em> your business is. Use location-based keywords in your description and tailored content for your service areas.</p>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">3. Reviews Are a Ranking Signal</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">Reviews are more than vanity metrics. Quality and frequency matter. Engaging with every review—positive or negative—shows Google you are active and trustworthy.</p>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">4. Behavioral Signals Decide Winners</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">Google Maps tracks user behavior. Clicks, calls, direction requests—they all count. The more action people take on your profile, the better your chances of ranking. Drive traffic to your GBP profile from your website and social media.</p>

            <blockquote class="border-l-4 border-[#FF6105] pl-8 py-4 my-12 bg-gray-50 italic text-xl text-[#2A1810] font-serif">
                "Google Maps is the new homepage for local business."
            </blockquote>

            <h2 class="text-3xl font-bold mt-16 mb-8 text-[#FF6105] uppercase tracking-tight">Final Word</h2>
            <p class="mb-6 text-lg leading-relaxed text-[#6B5545]">Local SEO is an investment, not a quick fix. If you want to rank higher on Google Maps, you need to put in the work. Hiring an experienced agency like EEGNITE ensures you get a tailored, data-driven approach that works.</p>
        `
    },
};

// Required for Static Export
export async function generateStaticParams() {
    return Object.keys(allPosts).map((slug) => ({
        slug: slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = allPosts[slug] || {
        title: "Article Not Found",
        category: "Error",
        date: "N/A",
        author: "System",
        image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80&w=1600",
        content: `<p>The requested article could not be found.</p>`
    };

    return (
        <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FF6105] selection:text-white">
            <Navbar />

            <article className="pt-32 pb-24 md:pt-48 md:pb-32">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
                    <div className="flex items-center justify-center mb-8">
                        <Link href="/blog" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#6B5545] hover:text-[#FF6105] transition-colors">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Insights
                        </Link>
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F0] text-[#FF6105] border border-[#FF6105]/20 font-bold uppercase tracking-widest text-xs mb-8">
                        {post.category}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none mb-10 text-[#2A1810]">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#6B5545] uppercase tracking-widest">
                        <span className="flex items-center gap-2">
                            {post.date}
                        </span>
                        <span className="w-1 h-1 bg-[#FF6105]/20 rounded-full" />
                        <span className="flex items-center gap-2">
                            By {post.author}
                        </span>
                        <span className="w-1 h-1 bg-[#FF6105]/20 rounded-full" />
                        <span className="flex items-center gap-2">
                            5 min read
                        </span>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-[1920px] mx-auto px-4 md:px-12 mb-20">
                    <div className="aspect-[21/9] relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>

                {/* Content */}
                <div
                    className="max-w-3xl mx-auto px-6 text-[#2A1810]"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            {/* Next Read / Newsletter */}
            <section className="bg-white text-black py-24 px-6 md:px-12 border-t border-black/5">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-[#FF6105] font-bold uppercase tracking-widest text-sm mb-4 block">Stay Updated</span>
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none text-[#2A1810]">
                        Digital Growth <br />Delivered.
                    </h2>
                    <p className="text-[#6B5545] mb-10 text-lg max-w-xl mx-auto font-normal">
                        Join 5,000+ marketers and founders receiving our monthly strategic insights.
                    </p>
                    <div className="flex justify-center w-full">
                        <Button className="bg-[#FF6105] text-white hover:bg-black hover:text-white rounded-full px-12 py-8 text-lg font-bold uppercase tracking-widest transition-all">
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

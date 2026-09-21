import CountUp from "@/components/motion/CountUp";

export default function StatCounter({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <div className="text-4xl md:text-5xl font-display font-medium text-navy mb-2">
                <CountUp value={value} />
            </div>
            <div className="text-slate-600 text-sm md:text-base">{label}</div>
        </div>
    );
}

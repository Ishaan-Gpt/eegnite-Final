import StatCounter from "@/components/ui/StatCounter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const STATS = [
    { value: "500+", label: "Businesses served" },
    { value: "$2.1B", label: "Client revenue managed" },
    { value: "25+", label: "Years combined experience" },
    { value: "98%", label: "Client retention rate" },
];

export default function StatsBand() {
    return (
        <section className="py-16 md:py-20 bg-cream-200">
            <RevealGroup className="mh-container grid grid-cols-2 md:grid-cols-4 gap-10" stagger={0.08}>
                {STATS.map((s) => (
                    <RevealItem key={s.label}>
                        <StatCounter value={s.value} label={s.label} />
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}

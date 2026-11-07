import { BAHRAIN_SEO } from "@/data/bahrain-seo.data";
import { bahrainMetadata, BahrainServiceRoute } from "@/components/page-content/bahrainRoute";

export const metadata = bahrainMetadata(BAHRAIN_SEO);

export default function BahrainSeoPage() {
    return <BahrainServiceRoute data={BAHRAIN_SEO} />;
}

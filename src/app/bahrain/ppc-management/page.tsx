import { BAHRAIN_PPC } from "@/data/bahrain-ppc.data";
import { bahrainMetadata, BahrainServiceRoute } from "@/components/page-content/bahrainRoute";

export const metadata = bahrainMetadata(BAHRAIN_PPC);

export default function BahrainPpcPage() {
    return <BahrainServiceRoute data={BAHRAIN_PPC} />;
}

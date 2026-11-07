import { BAHRAIN_SMM } from "@/data/bahrain-smm.data";
import { bahrainMetadata, BahrainServiceRoute } from "@/components/page-content/bahrainRoute";

export const metadata = bahrainMetadata(BAHRAIN_SMM);

export default function BahrainSmmPage() {
    return <BahrainServiceRoute data={BAHRAIN_SMM} />;
}

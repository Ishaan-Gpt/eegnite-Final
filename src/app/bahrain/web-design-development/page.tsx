import { BAHRAIN_WEB } from "@/data/bahrain-web.data";
import { bahrainMetadata, BahrainServiceRoute } from "@/components/page-content/bahrainRoute";

export const metadata = bahrainMetadata(BAHRAIN_WEB);

export default function BahrainWebPage() {
    return <BahrainServiceRoute data={BAHRAIN_WEB} />;
}

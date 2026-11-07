import { BAHRAIN_EMAIL } from "@/data/bahrain-email.data";
import { bahrainMetadata, BahrainServiceRoute } from "@/components/page-content/bahrainRoute";

export const metadata = bahrainMetadata(BAHRAIN_EMAIL);

export default function BahrainEmailPage() {
    return <BahrainServiceRoute data={BAHRAIN_EMAIL} />;
}

import WidgetPreview from "../../components/collect/WidgetPreview";
import EmbedCode from "../../components/collect/EmbedCode";
import ExtensionInfo from "../../components/collect/ExtensionInfo";
import ApiKeyCard from "../../components/collect/ApiKeyCard";

export default function Collect() {
  return (
    <div className="p-6">

      {/* Page title */}
      <h1 className="text-2xl font-bold mb-6">
        Feedback Collection
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <WidgetPreview />
        <EmbedCode />
        <ExtensionInfo />
        <ApiKeyCard />

      </div>
    </div>
  );
}

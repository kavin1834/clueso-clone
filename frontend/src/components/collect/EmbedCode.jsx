import Card from "../ui/Card";

export default function EmbedCode() {
  return (
    <Card>
      <h2 className="text-xl font-semibold mb-2">
        Embed Widget Code
      </h2>

      <p className="text-gray-600 mb-3">
        Copy and paste this code into your website to enable feedback collection.
      </p>

      <pre className="bg-gray-900 text-green-400 p-4 rounded-md text-sm overflow-x-auto">
{`<script src="https://clueso.ai/widget.js"></script>
<script>
  Clueso.init({
    apiKey: "YOUR_API_KEY"
  });
</script>`}
      </pre>
    </Card>
  );
}

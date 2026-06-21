import {
  getFaqStructuredData,
  getMainStructuredData,
} from "@/lib/structured-data";

type JsonLdScriptProps = {
  data: Record<string, unknown>;
};

function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function StructuredData() {
  return (
    <>
      <JsonLdScript data={getMainStructuredData()} />
      <JsonLdScript data={getFaqStructuredData()} />
    </>
  );
}

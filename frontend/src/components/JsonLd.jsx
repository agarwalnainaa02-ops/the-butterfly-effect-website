/**
 * JsonLd — renders a <script type="application/ld+json"> tag.
 * Pass a plain JS object as `data`; it will be serialised for you.
 */
const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;

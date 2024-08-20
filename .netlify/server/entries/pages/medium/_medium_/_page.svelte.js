import { c as create_ssr_component, d as escape, e as each, v as validate_component } from "../../../../chunks/ssr.js";
import { a as artists } from "../../../../chunks/artists.js";
import { C as Card } from "../../../../chunks/Card.js";
const css = {
  code: ".page_title.svelte-n7lym2{text-align:center}.container.svelte-n7lym2{display:grid;grid-template-columns:repeat(3, 1fr)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n\\timport { artists } from '../../artists.js';\\r\\n\\timport Card from '$lib/components/Card.svelte';\\r\\n\\texport let data;\\r\\n\\r\\n\\tlet vals;\\r\\n\\tlet i;\\r\\n\\r\\n\\tconst matched = artists.filter((media) => media.Medium === data.medium);\\r\\n\\r\\n\\tfor (const [key, value] of Object.entries(matched)) {\\r\\n\\t\\t(vals = value), (i = key);\\r\\n\\t}\\r\\n<\/script>\\r\\n\\r\\n<svelte:head>\\r\\n\\t<title>EAF 2024 | {data.medium}</title>\\r\\n</svelte:head>\\r\\n\\r\\n<h2 class=\\"page_title\\">#{data.medium}</h2>\\r\\n<div class=\\"container\\">\\r\\n\\t{#each matched as vals, i}\\r\\n\\t\\t<Card\\r\\n\\t\\t\\twebsite={vals.Website}\\r\\n\\t\\t\\tbusinessName={vals['Business Name']}\\r\\n\\t\\t\\tfirstName={vals['First Name']}\\r\\n\\t\\t\\tlastName={vals['Last Name']}\\r\\n\\t\\t\\tmedium={vals.Medium}\\r\\n\\t\\t/>\\r\\n\\t{/each}\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.page_title {\\r\\n\\t\\ttext-align: center;\\r\\n\\t}\\r\\n\\t.container {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t\\tgrid-template-columns: repeat(3, 1fr);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAiCC,yBAAY,CACX,UAAU,CAAE,MACb,CACA,wBAAW,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACrC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const matched = artists.filter((media) => media.Medium === data.medium);
  for (const [key, value] of Object.entries(matched)) {
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1vwfnz1_START -->${$$result.title = `<title>EAF 2024 | ${escape(data.medium)}</title>`, ""}<!-- HEAD_svelte-1vwfnz1_END -->`, ""} <h2 class="page_title svelte-n7lym2">#${escape(data.medium)}</h2> <div class="container svelte-n7lym2">${each(matched, (vals, i) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        website: vals.Website,
        businessName: vals["Business Name"],
        firstName: vals["First Name"],
        lastName: vals["Last Name"],
        medium: vals.Medium
      },
      {},
      {}
    )}`;
  })} </div>`;
});
export {
  Page as default
};

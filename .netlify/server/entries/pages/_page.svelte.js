import { c as create_ssr_component, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { C as Card } from "../../chunks/Card.js";
import { a as artists } from "../../chunks/artists.js";
const css$1 = {
  code: ".container.svelte-chi1jf{display:grid}.list_box.svelte-chi1jf{display:flex;flex-wrap:wrap;background-color:var(--clr-blue);padding:1rem;margin-bottom:1rem;border-radius:0.25rem}a.svelte-chi1jf{font-weight:bold;font-size:small;margin:1rem;font-family:var(--font-accent)}a.svelte-chi1jf:hover{color:white;background-color:var(--clr-purple)}",
  map: `{"version":3,"file":"Cloud.svelte","sources":["Cloud.svelte"],"sourcesContent":["<script>\\r\\n\\timport { artists } from '../../routes/artists';\\r\\n\\t/**\\r\\n\\t * @type {string[]}\\r\\n\\t */\\r\\n\\tlet medList = [];\\r\\n\\r\\n\\tartists.forEach((artist) => {\\r\\n\\t\\tmedList.push(artist.Medium);\\r\\n\\t\\treturn medList;\\r\\n\\t});\\r\\n\\r\\n\\tconst mediumList = [...new Set(medList)];\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"container\\">\\r\\n\\t<h3>Mediums</h3>\\r\\n\\t<div class=\\"list_box\\">\\r\\n\\t\\t{#each mediumList.sort() as medium}\\r\\n\\t\\t\\t<div class=\\"card\\">\\r\\n\\t\\t\\t\\t<p>\\r\\n\\t\\t\\t\\t\\t<a href=\\"/medium/{medium}\\">#{medium}</a>\\r\\n\\t\\t\\t\\t</p>\\r\\n\\t\\t\\t</div>\\r\\n\\t\\t{/each}\\r\\n\\t</div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.container {\\r\\n\\t\\tdisplay: grid;\\r\\n\\t}\\r\\n\\t.list_box {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-wrap: wrap;\\r\\n\\t\\tbackground-color: var(--clr-blue);\\r\\n\\t\\tpadding: 1rem;\\r\\n\\t\\tmargin-bottom: 1rem;\\r\\n\\t\\tborder-radius: 0.25rem;\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tfont-weight: bold;\\r\\n\\t\\tfont-size: small;\\r\\n\\t\\tmargin: 1rem;\\r\\n\\t\\tfont-family: var(--font-accent);\\r\\n\\t}\\r\\n\\ta:hover {\\r\\n\\t\\tcolor: white;\\r\\n\\t\\tbackground-color: var(--clr-purple);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA6BC,wBAAW,CACV,OAAO,CAAE,IACV,CACA,uBAAU,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,IAAI,UAAU,CAAC,CACjC,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,OAChB,CACA,eAAE,CACD,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,aAAa,CAC/B,CACA,eAAC,MAAO,CACP,KAAK,CAAE,KAAK,CACZ,gBAAgB,CAAE,IAAI,YAAY,CACnC"}`
};
const Cloud = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let medList = [];
  artists.forEach((artist) => {
    medList.push(artist.Medium);
    return medList;
  });
  const mediumList = [...new Set(medList)];
  $$result.css.add(css$1);
  return `<div class="container svelte-chi1jf"><h3 data-svelte-h="svelte-d5z0cq">Mediums</h3> <div class="list_box svelte-chi1jf">${each(mediumList.sort(), (medium) => {
    return `<div class="card"><p><a href="${"/medium/" + escape(medium, true)}" class="svelte-chi1jf">#${escape(medium)}</a></p> </div>`;
  })}</div> </div>`;
});
const css = {
  code: ".container.svelte-1rx4abv{display:grid;grid-template-columns:repeat(3, 1fr)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Card from '$lib/components/Card.svelte';\\n\\timport Cloud from '$lib/components/Cloud.svelte';\\n\\n\\texport let data;\\n\\t// console.log(data);\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>EAF 2024 | Artists</title>\\n</svelte:head>\\n\\n<Cloud />\\n\\n<div class=\\"container\\">\\n\\t{#each data.summaries as { website, businessName, firstName, lastName, medium }}\\n\\t\\t<Card {website} {firstName} {lastName} {medium} {businessName} />\\n\\t{/each}\\n</div>\\n\\n<style>\\n\\t.container {\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(3, 1fr);\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqBC,yBAAW,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACrC"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ty1d3k_START -->${$$result.title = `<title>EAF 2024 | Artists</title>`, ""}<!-- HEAD_svelte-ty1d3k_END -->`, ""} ${validate_component(Cloud, "Cloud").$$render($$result, {}, {}, {})} <div class="container svelte-1rx4abv">${each(data.summaries, ({ website, businessName, firstName, lastName, medium }) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        website,
        firstName,
        lastName,
        medium,
        businessName
      },
      {},
      {}
    )}`;
  })} </div>`;
});
export {
  Page as default
};

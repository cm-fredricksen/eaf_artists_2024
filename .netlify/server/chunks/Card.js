import { c as create_ssr_component, b as add_attribute, d as escape } from "./ssr.js";
const css = {
  code: ".card.svelte-p95nbw{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:2px solid var(--clr-purple);border-radius:0.5rem;padding:1rem 1rem;margin:1rem}p.svelte-p95nbw{margin-top:1rem;margin-bottom:1rem}a.svelte-p95nbw{padding:0.5rem;border-radius:0.5rem;color:var(--clr-purple)}a.svelte-p95nbw:hover{color:var(--clr-blue);background-color:var(--clr-purple)}",
  map: '{"version":3,"file":"Card.svelte","sources":["Card.svelte"],"sourcesContent":["<script>\\r\\n\\texport let website, firstName, lastName, businessName, medium;\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"card\\">\\r\\n\\t<a href={website}>\\r\\n\\t\\t<h2>{businessName}</h2>\\r\\n\\t</a>\\r\\n\\t<p>by {firstName} {lastName}</p>\\r\\n\\t<a class=\\"tag\\" href=\\"/medium/{medium}\\">#{medium}</a>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n\\t.card {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tflex-direction: column;\\r\\n\\t\\talign-items: center;\\r\\n\\t\\tjustify-content: center;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tborder: 2px solid var(--clr-purple);\\r\\n\\t\\t/* outline: 2px solid var(--clr-blue); */\\r\\n\\t\\tborder-radius: 0.5rem;\\r\\n\\t\\tpadding: 1rem 1rem;\\r\\n\\t\\tmargin: 1rem;\\r\\n\\t}\\r\\n\\r\\n\\tp {\\r\\n\\t\\tmargin-top: 1rem;\\r\\n\\t\\tmargin-bottom: 1rem;\\r\\n\\t}\\r\\n\\r\\n\\ta {\\r\\n\\t\\tpadding: 0.5rem;\\r\\n\\t\\tborder-radius: 0.5rem;\\r\\n\\t\\tcolor: var(--clr-purple);\\r\\n\\t}\\r\\n\\r\\n\\ta:hover {\\r\\n\\t\\tcolor: var(--clr-blue);\\r\\n\\t\\tbackground-color: var(--clr-purple);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAaC,mBAAM,CACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,YAAY,CAAC,CAEnC,aAAa,CAAE,MAAM,CACrB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,MAAM,CAAE,IACT,CAEA,eAAE,CACD,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAChB,CAEA,eAAE,CACD,OAAO,CAAE,MAAM,CACf,aAAa,CAAE,MAAM,CACrB,KAAK,CAAE,IAAI,YAAY,CACxB,CAEA,eAAC,MAAO,CACP,KAAK,CAAE,IAAI,UAAU,CAAC,CACtB,gBAAgB,CAAE,IAAI,YAAY,CACnC"}'
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { website, firstName, lastName, businessName, medium } = $$props;
  if ($$props.website === void 0 && $$bindings.website && website !== void 0) $$bindings.website(website);
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0) $$bindings.firstName(firstName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0) $$bindings.lastName(lastName);
  if ($$props.businessName === void 0 && $$bindings.businessName && businessName !== void 0) $$bindings.businessName(businessName);
  if ($$props.medium === void 0 && $$bindings.medium && medium !== void 0) $$bindings.medium(medium);
  $$result.css.add(css);
  return `<div class="card svelte-p95nbw"><a${add_attribute("href", website, 0)} class="svelte-p95nbw"><h2>${escape(businessName)}</h2></a> <p class="svelte-p95nbw">by ${escape(firstName)} ${escape(lastName)}</p> <a class="tag svelte-p95nbw" href="${"/medium/" + escape(medium, true)}">#${escape(medium)}</a> </div>`;
});
export {
  Card as C
};

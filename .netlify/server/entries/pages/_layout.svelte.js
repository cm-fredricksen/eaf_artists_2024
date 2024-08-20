import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
const css$3 = {
  code: "nav.svelte-jpr6q8 a.svelte-jpr6q8{color:var(--clr-white);margin:0 1rem}nav.svelte-jpr6q8 a.svelte-jpr6q8:hover{color:var(--clr-blue)}",
  map: `{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\r\\n\\tconst links = [\\r\\n\\t\\t{\\r\\n\\t\\t\\ttitle: 'Artists',\\r\\n\\t\\t\\tpath: '/'\\r\\n\\t\\t},\\r\\n\\t\\t{\\r\\n\\t\\t\\ttitle: 'Eagan Art Festival',\\r\\n\\t\\t\\tpath: 'https://www.eaganartfestival.org/'\\r\\n\\t\\t}\\r\\n\\t];\\r\\n<\/script>\\r\\n\\r\\n<nav>\\r\\n\\t{#each links as { title, path }}\\r\\n\\t\\t<a href={path}>{title}</a>\\r\\n\\t{/each}\\r\\n</nav>\\r\\n\\r\\n<style>\\r\\n\\tnav a {\\r\\n\\t\\tcolor: var(--clr-white);\\r\\n\\t\\tmargin: 0 1rem;\\r\\n\\t}\\r\\n\\tnav a:hover {\\r\\n\\t\\tcolor: var(--clr-blue);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAoBC,iBAAG,CAAC,eAAE,CACL,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,MAAM,CAAE,CAAC,CAAC,IACX,CACA,iBAAG,CAAC,eAAC,MAAO,CACX,KAAK,CAAE,IAAI,UAAU,CACtB"}`
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    { title: "Artists", path: "/" },
    {
      title: "Eagan Art Festival",
      path: "https://www.eaganartfestival.org/"
    }
  ];
  $$result.css.add(css$3);
  return `<nav class="svelte-jpr6q8">${each(links, ({ title, path }) => {
    return `<a${add_attribute("href", path, 0)} class="svelte-jpr6q8">${escape(title)}</a>`;
  })} </nav>`;
});
const css$2 = {
  code: "header.svelte-1m6jjcx.svelte-1m6jjcx{display:flex;align-items:baseline;justify-content:space-between;padding:1rem 0.5rem;background-color:var(--clr-purple);color:var(--clr-white)}.title.svelte-1m6jjcx.svelte-1m6jjcx{display:flex;justify-content:space-between}.title.svelte-1m6jjcx h2.svelte-1m6jjcx{font-style:italic}header.svelte-1m6jjcx a.svelte-1m6jjcx{color:var(--clr-white);font-family:var(--font-text)}header.svelte-1m6jjcx a.svelte-1m6jjcx:hover{color:var(--clr-blue)}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n\\timport Nav from './Nav.svelte';\\r\\n<\/script>\\r\\n\\r\\n<header>\\r\\n\\t<div class=\\"title\\">\\r\\n\\t\\t<h2>Eagan Art Festival's</h2>\\r\\n\\t\\t<a href=\\"/\\">\\r\\n\\t\\t\\t<h1>Artists 2024</h1>\\r\\n\\t\\t</a>\\r\\n\\t</div>\\r\\n\\t<Nav />\\r\\n</header>\\r\\n\\r\\n<style>\\r\\n\\theader {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\talign-items: baseline;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t\\tpadding: 1rem 0.5rem;\\r\\n\\t\\tbackground-color: var(--clr-purple);\\r\\n\\t\\tcolor: var(--clr-white);\\r\\n\\t}\\r\\n\\t.title {\\r\\n\\t\\tdisplay: flex;\\r\\n\\t\\tjustify-content: space-between;\\r\\n\\t}\\r\\n\\t.title h2 {\\r\\n\\t\\tfont-style: italic;\\r\\n\\t}\\r\\n\\theader a {\\r\\n\\t\\tcolor: var(--clr-white);\\r\\n\\t\\tfont-family: var(--font-text);\\r\\n\\t}\\r\\n\\theader a:hover {\\r\\n\\t\\tcolor: var(--clr-blue);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAeC,oCAAO,CACN,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CAAC,MAAM,CACpB,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACnC,KAAK,CAAE,IAAI,WAAW,CACvB,CACA,oCAAO,CACN,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB,CACA,qBAAM,CAAC,iBAAG,CACT,UAAU,CAAE,MACb,CACA,qBAAM,CAAC,gBAAE,CACR,KAAK,CAAE,IAAI,WAAW,CAAC,CACvB,WAAW,CAAE,IAAI,WAAW,CAC7B,CACA,qBAAM,CAAC,gBAAC,MAAO,CACd,KAAK,CAAE,IAAI,UAAU,CACtB"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="svelte-1m6jjcx"><div class="title svelte-1m6jjcx" data-svelte-h="svelte-4y7jji"><h2 class="svelte-1m6jjcx">Eagan Art Festival&#39;s</h2> <a href="/" class="svelte-1m6jjcx"><h1>Artists 2024</h1></a></div> ${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} </header>`;
});
const css$1 = {
  code: "footer.svelte-zyh3qe{padding:2rem;text-align:center;background-color:var(--clr-purple);color:var(--clr-white)}a.svelte-zyh3qe{color:var(--clr-white)}a.svelte-zyh3qe:hover{color:var(--clr-blue)}",
  map: '{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<footer>\\r\\n\\t<p>\\r\\n\\t\\t&copy; {new Date().getFullYear()}\\r\\n\\t\\t<a href=\\"https://www.eaganartfestival.org/\\">Eagan Art Festival</a>\\r\\n\\t</p>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n\\tfooter {\\r\\n\\t\\tpadding: 2rem;\\r\\n\\t\\ttext-align: center;\\r\\n\\t\\tbackground-color: var(--clr-purple);\\r\\n\\t\\tcolor: var(--clr-white);\\r\\n\\t}\\r\\n\\ta {\\r\\n\\t\\tcolor: var(--clr-white);\\r\\n\\t}\\r\\n\\ta:hover {\\r\\n\\t\\tcolor: var(--clr-blue);\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAQC,oBAAO,CACN,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,MAAM,CAClB,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACnC,KAAK,CAAE,IAAI,WAAW,CACvB,CACA,eAAE,CACD,KAAK,CAAE,IAAI,WAAW,CACvB,CACA,eAAC,MAAO,CACP,KAAK,CAAE,IAAI,UAAU,CACtB"}'
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="svelte-zyh3qe"><p>© ${escape((/* @__PURE__ */ new Date()).getFullYear())} <a href="https://www.eaganartfestival.org/" class="svelte-zyh3qe" data-svelte-h="svelte-1mtrgv7">Eagan Art Festival</a></p> </footer>`;
});
const css = {
  code: ".container.svelte-1y05axk{width:80%;margin:2rem auto}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n\\timport '../app.css';\\r\\n\\timport Header from '$lib/components/Header.svelte';\\r\\n\\timport Footer from '$lib/components/Footer.svelte';\\r\\n<\/script>\\r\\n\\r\\n<Header />\\r\\n<div class=\\"container\\">\\r\\n\\t<slot />\\r\\n</div>\\r\\n<Footer />\\r\\n\\r\\n<style>\\r\\n\\t.container {\\r\\n\\t\\twidth: 80%;\\r\\n\\t\\tmargin: 2rem auto;\\r\\n\\t}\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAaC,yBAAW,CACV,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CAAC,IACd"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="container svelte-1y05axk">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

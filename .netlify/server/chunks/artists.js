const artists = [
  {
    "Last Name": "Aas",
    "First Name": "Ann",
    "Business Name": "AnnMade in Minnesota",
    Website: "http://www.annmadeinminnesota.com",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Alvarez",
    "First Name": "Tomas",
    "Business Name": "Tomas Alvarez Photography",
    Website: "http://www.tomalvarez.com",
    Medium: "Photography"
  },
  {
    "Last Name": "Anderson",
    "First Name": "Jackie",
    "Business Name": "Lavendart Design",
    Website: "https://nemaa.org/artists/lavendart-design/",
    Medium: "Painting"
  },
  {
    "Last Name": "Andrighetti",
    "First Name": "Ashley",
    "Business Name": "Handmade Love",
    Website: "https://handmadelovejewelry.myshopify.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Angell",
    "First Name": "Dave",
    "Business Name": "Angell's Images",
    Website: "http://www.angellsimages.com/",
    Medium: "Photography"
  },
  {
    "Last Name": "Arellano",
    "First Name": "Crystal",
    "Business Name": "JSM Photography",
    Website: "https://www.justshootmephotographymn.com/",
    Medium: "Photography"
  },
  {
    "Last Name": "Augustine",
    "First Name": "Ini",
    "Business Name": "Mystic Healing Stones",
    Website: "http://www.mystichealingstones.com/",
    Medium: "Mixed Media"
  },
  {
    "Last Name": "Bartunek",
    "First Name": "John",
    "Business Name": "John's Very Cool Glass Art",
    Website: "http://verycoolglassart.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Black",
    "First Name": "Amanda",
    "Business Name": "Black Loon Studio",
    Website: "http://blackloonstudio.com/",
    Medium: "Printmaking"
  },
  {
    "Last Name": "Bouchard",
    "First Name": "Peter",
    "Business Name": "Bouchard Photography",
    Website: "https://bouchardphotography.com/",
    Medium: "Photography"
  },
  {
    "Last Name": "Brening",
    "First Name": "Abbie",
    "Business Name": "Mid. West Co",
    Website: "http://www.getmidwestco.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Brueske",
    "First Name": "Kannika",
    "Business Name": "Origami by Kannika",
    Website: "http://www.origamibykannika.com/",
    Medium: "Origami"
  },
  {
    "Last Name": "Cartwright",
    "First Name": "John",
    "Business Name": "John Cartwright Railroad Art",
    Website: "http://www.artrail.com/",
    Medium: "Drawing"
  },
  {
    "Last Name": "Chilson",
    "First Name": "Zachary",
    "Business Name": "Chilly Pottery",
    Website: "http://zacharychilson.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Dickinson",
    "First Name": "Christy",
    "Business Name": "Anansi Studio",
    Website: "http://www.christy-dickinson.com/brushstrokepoetry",
    Medium: "Painting"
  },
  {
    "Last Name": "Draeger",
    "First Name": "Sharon",
    "Business Name": "Sharon Draeger Photography",
    Website: "http://sharondraeger.com/",
    Medium: "Photography"
  },
  {
    "Last Name": "Fennelly",
    "First Name": "Tesselen",
    "Business Name": "Kanga & Roo Pottery",
    Website: "https://www.kangaroopottery.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Figg",
    "First Name": "Mary",
    "Business Name": "Etchings By Mary",
    Website: null,
    Medium: "Drawing"
  },
  {
    "Last Name": "Figg",
    "First Name": "Chad",
    "Business Name": "Pour Holly",
    Website: "https://www.facebook.com/pourholly",
    Medium: "Painting"
  },
  {
    "Last Name": "Griepentrog",
    "First Name": "Leslie",
    "Business Name": "Carls Creations",
    Website: null,
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Guilfoyle",
    "First Name": "Colleen",
    "Business Name": "NorthStar FlowArt",
    Website: null,
    Medium: "Mixed Media"
  },
  {
    "Last Name": "Halbur",
    "First Name": "Ryan",
    "Business Name": "Iowa Creations",
    Website: "http://www.iowacreations.com/",
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Hale",
    "First Name": "Barbara",
    "Business Name": "Creations by Hand",
    Website: null,
    Medium: "Jewelry"
  },
  {
    "Last Name": "Hall",
    "First Name": "Kristin",
    "Business Name": "Fille de Cuivre",
    Website: "https://www.etsy.com/shop/FilledeCuivre",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Harbo",
    "First Name": "Gary",
    "Business Name": "Gary Harbo",
    Website: "http://garyharbo.com/",
    Medium: "Books: Literary"
  },
  {
    "Last Name": "Harnagel",
    "First Name": "Haley",
    "Business Name": "Life After Average",
    Website: "https://lifeafteraverage.com/",
    Medium: "Fiber Arts: Weaving"
  },
  {
    "Last Name": "Hayes",
    "First Name": "Meghan",
    "Business Name": "Dottir",
    Website: "http://www.dottirshop.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Hendricks",
    "First Name": "Robert",
    "Business Name": "Silverfish'N'Things by Bob",
    Website: null,
    Medium: "Mixed Media"
  },
  {
    "Last Name": "Hoaglund",
    "First Name": "Melissa Ann",
    "Business Name": "Melissa Unlimited",
    Website: null,
    Medium: "Paper: Mixed Media"
  },
  {
    "Last Name": "Hogan",
    "First Name": "Sean",
    "Business Name": "Hogans Carved Woodworks",
    Website: "http://hoganscarvedwoodworks.com/",
    Medium: "Sculpture: Woodworking"
  },
  {
    "Last Name": "Hovland",
    "First Name": "Nancy",
    "Business Name": "Hartford Avenue Quilts",
    Website: "http://www.hartfordavenuequilts.etsy.com/",
    Medium: "Fiber Arts: Quilts"
  },
  {
    "Last Name": "Hyde",
    "First Name": "Bridget",
    "Business Name": "Hyde Will Seek Artistry",
    Website: "https://www.hydewillseekartistry.com/shop-by-category.html#/",
    Medium: "Paper: Mixed Media"
  },
  {
    "Last Name": "Iburg",
    "First Name": "Lucy",
    "Business Name": "Lucy iburg",
    Website: null,
    Medium: "Fiber Arts: Clothing"
  },
  {
    "Last Name": "Illies",
    "First Name": "Stacey",
    "Business Name": "SIMI Company",
    Website: "http://francisandthesea.com/",
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Isaacs-herrig",
    "First Name": "Judith",
    "Business Name": "Judy's Art Works",
    Website: "http://judithisaacsherrig.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Islam",
    "First Name": "Tasia",
    "Business Name": "Halcyon Arts",
    Website: "https://halcyonartsmn.wixsite.com/halcyon-arts-mn",
    Medium: "Henna"
  },
  {
    "Last Name": "Kirchhoff",
    "First Name": "Gregory",
    "Business Name": "Tall Timber Woodcraft",
    Website: "http://www.facebook.com/talltimber21",
    Medium: "Sculpture: Woodworking"
  },
  {
    "Last Name": "Klein",
    "First Name": "Kevin",
    "Business Name": "Kevin Klein Art",
    Website: "http://www.kevinkleinart.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Koehler",
    "First Name": "Susan",
    "Business Name": "Leaf Street Pottery",
    Website: null,
    Medium: "Ceramics"
  },
  {
    "Last Name": "Kovacs",
    "First Name": "Emilie",
    "Business Name": "Emilia Rose Artwork",
    Website: "http://www.emiliaroseartwork.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Krasovska",
    "First Name": "Olga",
    "Business Name": "OLGA KRASOVSKA",
    Website: "http://www.artfromolga.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Kruempel",
    "First Name": "Kari",
    "Business Name": "Kari K Art",
    Website: "http://www.karikart.com/",
    Medium: "Paper: Mixed Media"
  },
  {
    "Last Name": "Krummen",
    "First Name": "Jill",
    "Business Name": "Birch and Palm Jewelry",
    Website: null,
    Medium: "Jewelry"
  },
  {
    "Last Name": "Laessig",
    "First Name": "Darron",
    "Business Name": "Yield the Crow",
    Website: "http://yieldthecrow.net/",
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Lange",
    "First Name": "Helga",
    "Business Name": "R A D I A T E",
    Website: "https://www.instagram.com/radiateactivewear",
    Medium: "Fiber Arts: Clothing"
  },
  {
    "Last Name": "Lenz",
    "First Name": "Sarah",
    "Business Name": "S Lenz - Ceramics",
    Website: null,
    Medium: "Ceramics"
  },
  {
    "Last Name": "Lenz",
    "First Name": "Stuart",
    "Business Name": "S Lenz - Metal Sculpture",
    Website: null,
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Linck-tollefsbol",
    "First Name": "Jennifer",
    "Business Name": "Ope Designs",
    Website: null,
    Medium: "Sculpture: Woodworking"
  },
  {
    "Last Name": "Manley",
    "First Name": "Melissa",
    "Business Name": "Just For Fun Jewelry",
    Website: null,
    Medium: "Jewelry"
  },
  {
    "Last Name": "Merrigan",
    "First Name": "Sullivan",
    "Business Name": "Sullivan Merrigan Photography",
    Website: "http://instagram.com/sullym_wildlife",
    Medium: "Photography"
  },
  {
    "Last Name": "Mielech",
    "First Name": "Peter",
    "Business Name": "PM Design",
    Website: "https://pmdesign-stp.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Mildred",
    "First Name": "Michelle",
    "Business Name": "Coloring Your Own",
    Website: "http://coloringyourown.com/",
    Medium: "Patterns"
  },
  {
    "Last Name": "Nicolae Johnson",
    "First Name": "Gina",
    "Business Name": "Gina Nicolae Johnson",
    Website: "http://www.sublimepaintings.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Parnell",
    "First Name": "Meghan",
    "Business Name": "Meghan Parnell Art",
    Website: "http://meghanparnellart.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Peck",
    "First Name": "Kerri",
    "Business Name": "(k)nots",
    Website: "https://etsy.me/3Eop1Ni",
    Medium: "Fiber Arts: Weaving"
  },
  {
    "Last Name": "Pestka",
    "First Name": "Debbie",
    "Business Name": "Rooted Journey",
    Website: "https://www.instagram.com/rootedjourney_mn/?hl=en",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Porter",
    "First Name": "Margaret",
    "Business Name": "MAP CREATIONS",
    Website: "http://map-creations.com/",
    Medium: "Glass"
  },
  {
    "Last Name": "Reger",
    "First Name": "Michelle",
    "Business Name": "Chelle Yea! handmade",
    Website: "http://etsy.com/shop/chelleyeahandmade",
    Medium: "Fiber Arts: Clothing"
  },
  {
    "Last Name": "Reller",
    "First Name": "Pauline",
    "Business Name": "Paulie's Glass Studio",
    Website: "https://www.pauliesstudio.com/",
    Medium: "Glass"
  },
  {
    "Last Name": "Rosemark",
    "First Name": "Amanda",
    "Business Name": "Media Studio One",
    Website: "http://www.mediastudio1.com/",
    Medium: "Paper: Mixed Media"
  },
  {
    "Last Name": "Roskens",
    "First Name": "Susan",
    "Business Name": "The Pressing Garden",
    Website: "https://the-pressing-garden.square.site/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Ross",
    "First Name": "Peter",
    "Business Name": "Peter Ross",
    Website: "http://peterrosscreates.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Schwendinger",
    "First Name": "Janine",
    "Business Name": "Wolf Tracks Clay",
    Website: "http://facebook.com/wolftracksclay",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Shapiro",
    "First Name": "Natalie",
    "Business Name": "Natalie Fine Shapiro",
    Website: "http://nataliefineshapiro.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Showalter",
    "First Name": "Steven",
    "Business Name": "Steven Showalter Pottery LLC",
    Website: "http://www.stevenshowalter.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Showalter",
    "First Name": "Mike",
    "Business Name": "Dale's Woodcraft",
    Website: "http://www.daleswoodcraft.com/",
    Medium: "Sculpture: Woodworking"
  },
  {
    "Last Name": "Siefkes",
    "First Name": "Savannah",
    "Business Name": "Adventure Jewels",
    Website: "https://www.adventurejewels.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Silpala Doan",
    "First Name": "Siiri",
    "Business Name": "Siiri Silpala Doan",
    Website: "http://www.siiriuspottery.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Sow",
    "First Name": "Adama",
    "Business Name": "CeramicSow",
    Website: "http://www.ceramicsow.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Stark",
    "First Name": "Anna",
    "Business Name": "Anna Stark Art",
    Website: "http://artbyannastark.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Stroessner",
    "First Name": "Nancy",
    "Business Name": "Prairie Sun Design",
    Website: "https://www.prairiesundesign.com/",
    Medium: "Fiber Arts: Textiles"
  },
  {
    "Last Name": "Strom",
    "First Name": "Lauren",
    "Business Name": "Artifacts of Joy",
    Website: "http://artifactsofjoy.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Tapager",
    "First Name": "John",
    "Business Name": "Minnesota iron works",
    Website: "http://minnesotaironworks.etsy.com/",
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Tate",
    "First Name": "Kelly",
    "Business Name": "Kelly Tate Photography",
    Website: "http://www.kellytatephotography.com/",
    Medium: "Photography"
  },
  {
    "Last Name": "Taylor",
    "First Name": "Maggie",
    "Business Name": "Boards & Brooches",
    Website: "https://www.etsy.com/shop/BoardsnBrooches",
    Medium: "Mixed Media"
  },
  {
    "Last Name": "Teesdale",
    "First Name": "Katie",
    "Business Name": "Teesdale Studios",
    Website: "http://katieteesdale.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Teske",
    "First Name": "Angel",
    "Business Name": "Earth Angel Jewelry",
    Website: "http://www.earthangeljewelry.com/",
    Medium: "Jewelry"
  },
  {
    "Last Name": "Thielges",
    "First Name": "Moriah",
    "Business Name": "Casa de Gallo",
    Website: "http://www.casadegalloart.com/",
    Medium: "Painting"
  },
  {
    "Last Name": "Ung",
    "First Name": "Sean",
    "Business Name": "Splendid Nature",
    Website: "http://coppercattailchimes.com/",
    Medium: "Sculpture: Metal Works"
  },
  {
    "Last Name": "Van Schooten",
    "First Name": "Heidi",
    "Business Name": "Heidi V. Pottery",
    Website: "https://heidivpottery.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Walker",
    "First Name": "Emily",
    "Business Name": "Emily Walker Art & Design",
    Website: "http://emilywalkerartdesign.com/",
    Medium: "Patterns"
  },
  {
    "Last Name": "Wells",
    "First Name": "Bryon",
    "Business Name": "Fine Impressions Gallery",
    Website: "http://byroaddisonwells/",
    Medium: "Painting"
  },
  {
    "Last Name": "Wieczorek",
    "First Name": "Johanna",
    "Business Name": "Johanna Moldenhauer Art",
    Website: "http://johannartist.com/",
    Medium: "Ceramics"
  },
  {
    "Last Name": "Willhite",
    "First Name": "Lynn",
    "Business Name": "Lynn Willhite Apparel",
    Website: null,
    Medium: "Fiber Arts: Clothing"
  }
];
export {
  artists as a
};

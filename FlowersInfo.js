var flowers = [
  {
    name: "Rose",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rose_Pink_1.jpg/960px-Rose_Pink_1.jpg?20220630065332",
    details: "Roses are widely cultivated ornamental shrubs known for their layered petals and fragrance. They grow in temperate regions worldwide and are used in gardens, bouquets, perfumes, and skincare products.",
    location: "Originally native to Asia, with some species from Europe, North America, and northwest Africa, now cultivated globally.",
    extinct: false,
    usages: "Ornamental gardening, cut flowers, perfume industry (rose oil), culinary uses (rose water, jams), and symbolic uses in art and literature.",
    nameStory: "The name 'rose' comes from the Latin word 'rosa', which itself likely originated from Greek 'rhodon', used in ancient times to describe this iconic flower."
  },
  {
    name: "Tulip",
    image: "https://th.bing.com/th/id/OIP.3gi_SG5N5c8R_Bi2LXeO_gHaEJ?w=387&h=183&c=7&r=0&o=5&cb=ucfimg2&dpr=1.5&pid=1.7&ucfimg=1",
    details: "Tulips are bulbous spring-blooming flowers with cup-shaped blooms. They are famous for their vibrant colors and simple form, often planted in large masses.",
    location: "Native to Central Asia and Turkey; heavily cultivated in the Netherlands and many temperate regions.",
    extinct: false,
    usages: "Ornamental bedding plant, cut flowers for arrangements, and historical economic symbol during the 'Tulip Mania' period in the Netherlands.",
    nameStory: "The name 'tulip' comes from the Turkish word 'tülbend' meaning turban, because the flower shape reminded people of a turban."
  },
  {
    name: "Sunflower",
    image: "https://ts4.mm.bing.net/th?id=OIP.F8EwX5v_QlpJK-ksKsfhFwHaE8&pid=15.1",
    details: "Sunflowers are tall annual plants with large yellow flower heads that follow the sun’s movement. They produce edible seeds and oil and are also ornamental.",
    location: "Native to North America, now grown worldwide in temperate and subtropical regions.",
    extinct: false,
    usages: "Food (seeds), sunflower oil production, ornamental fields, bird feed, and symbolic use as a sign of positivity and energy.",
    nameStory: "Called 'sunflower' because the flower resembles the sun and exhibits heliotropism, turning its head toward the sun while growing."
  },
  {
    name: "Orchid (Phalaenopsis)",
    image: "https://ts4.mm.bing.net/th?id=OIP.h8Uru9Jn6iKGQflB0s9IPwHaE8&pid=15.1",
    details: "Phalaenopsis orchids are tropical epiphytic plants known for their long-lasting, elegant flowers. They are popular houseplants and symbolize luxury and refinement.",
    location: "Native to Southeast Asia, the Philippines, and northern Australia; cultivated worldwide indoors.",
    extinct: false,
    usages: "Indoor ornamental plants, floral arrangements, corsages, and symbolic uses in weddings and special ceremonies.",
    nameStory: "The genus name 'Phalaenopsis' comes from Greek 'phalaina' (moth) and 'opsis' (appearance), because early botanists thought the flowers looked like moths in flight."
  },
  {
  "name": "Lily (Easter Lily)",
  "image": "https://th.bing.com/th/id/OIP.9LhH2FpjV16cnvgVmntvvQHaEJ?w=324&h=182&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  "details": "Easter lilies are trumpet-shaped white flowers with a strong fragrance. They are associated with purity and are commonly used in religious celebrations and funerals.",
  "location": "Native to the Ryukyu Islands of Japan and Taiwan, now cultivated widely in greenhouses and gardens.",
  "extinct": false,
  "usages": "Ornamental garden plant, potted holiday plant, and floral symbol in religious and cultural ceremonies, especially around Easter.",
  "nameStory": "Called 'Easter lily' because it became strongly associated with Christian Easter celebrations as a symbol of resurrection and purity."
},
  {
  "name": "Lotus (Sacred Lotus)",
  "image": "https://th.bing.com/th/id/OIP.M9933EF-r46RQNeK3xoz5AHaE7?w=275&h=183&c=7&r=0&o=5&cb=ucfimg2&dpr=1.5&pid=1.7&ucfimg=1",
  "details": "The sacred lotus is an aquatic plant with large circular leaves and striking pink or white flowers that emerge above the water surface.",
  "location": "Native to Asia, especially India, China, and parts of Southeast Asia; cultivated in ponds worldwide.",
  "extinct": false,
  "usages": "Ornamental in ponds, religious and spiritual symbol in Buddhism and Hinduism, and some parts used in traditional cuisine and medicine.",
  "nameStory": "The word 'lotus' comes from ancient Greek 'lotos', used for various plants; it became associated with this iconic water flower due to its spiritual symbolism."
}
,
  {
  "name": "Jasmine (Common Jasmine)",
  "image": "https://th.bing.com/th/id/OIP.31eAf8aKlPioIxOD0fBXWwHaE8?w=291&h=194&c=7&r=0&o=7&cb=ucfimg2&dpr=1.5&pid=1.7&rm=3&ucfimg=1",
  "details": "Common jasmine is a climbing plant with small white, highly fragrant flowers. It blooms heavily in warm seasons and is often trained over walls and trellises.",
  "location": "Native to the Himalayas, China, and parts of the Middle East; cultivated widely in warm and subtropical regions.",
  "extinct": false,
  "usages": "Perfume industry, teas (jasmine tea), ornamental climber, and cultural symbol of love and beauty in many regions.",
  "nameStory": "The name 'jasmine' derives from the Persian word 'yasmin', meaning 'gift from God', reflecting the flower's valued fragrance."
}
,
  {
    name: "Lavender",
    image: "https://th.bing.com/th/id/OIP.iRtssbpJtmjFYmNDWQW9OgHaFj?w=232&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.5&pid=1.7&ucfimg=1",
    details: "Lavender is a shrubby herb with purple flower spikes and a calming scent. It is both ornamental and functional, used in aromatherapy and household products.",
    location: "Native to the Mediterranean region; widely grown in Europe, North Africa, and other temperate regions.",
    extinct: false,
    usages: "Essential oils, perfumes, soaps, sachets, culinary seasoning, and decorative plant in gardens and fields.",
    nameStory: "The name 'lavender' likely comes from the Latin 'lavare', meaning 'to wash', because it was used historically to scent bathwater and laundry."
  },
  {
    name: "Daisy (Oxeye Daisy)",
    image: "https://th.bing.com/th/id/OIP.qNS-bA-AOZSFyIH0GbHP0QHaE8?w=261&h=180&c=7&r=0&o=5&cb=ucfimg2&dpr=1.5&pid=1.7&ucfimg=1",
    details: "Oxeye daisies have white petals surrounding a yellow center and are common in meadows. They symbolize innocence and simplicity.",
    location: "Native to Europe and temperate Asia; introduced and naturalized in North America and other regions.",
    extinct: false,
    usages: "Ornamental wildflower in naturalistic gardens, used in floral crafts, and sometimes in traditional herbal remedies.",
    nameStory: "The word 'daisy' originates from Old English 'dæges eage' meaning 'day's eye', because the flower opens in the morning and closes at night."
  },
  {
    name: "Cherry Blossom (Sakura)",
    image: "https://wallpapercrafter.com/desktop1/521226-sakura-blossom-sky-spring-cheery-blossom-tree.jpg",
    details: "Cherry blossoms are the pale pink or white flowers of ornamental cherry trees. They bloom briefly in spring, creating iconic landscapes.",
    location: "Native to Japan, Korea, and China; planted in many temperate cities worldwide.",
    extinct: false,
    usages: "Ornamental street and park trees, cultural festivals (hanami), and symbolic representation of the beauty and brevity of life.",
    nameStory: "In Japan, they are called 'sakura', a word that likely comes from 'saku' (to bloom) with an honorific suffix, reflecting their cultural importance."
  },
  {
    name: "Hibiscus (Chinese Hibiscus)",
    image: "https://th.bing.com/th/id/OIP.f1QdPskmkBVq6hbrSb2mtQHaFj?w=284&h=213&c=7&r=0&o=5&cb=ucfimg2&dpr=1.5&pid=1.7&ucfimg=1",
    details: "Chinese hibiscus is a tropical shrub with large, showy flowers in bright colors. The blooms are short-lived but produced continuously in warm climates.",
    location: "Native to East Asia; now cultivated in tropical and subtropical regions worldwide.",
    extinct: false,
    usages: "Ornamental garden and hedge plant, national or state symbol in some countries, herbal teas, and hair care preparations in some cultures.",
    nameStory: "The name 'hibiscus' comes from the Greek word 'hibiskos', used by the ancient physician Dioscorides to describe a similar marsh plant."
  },
  {
    name: "Daffodil",
    image: "https://ts3.mm.bing.net/th?id=OIP.-LMHw8QwiuchA92qOpy2iwHaE8&pid=15.1",
    details: "Daffodils are bulbous spring flowers with trumpet-shaped central coronas and petal-like tepals, usually yellow or white.",
    location: "Native to Europe and North Africa; widely cultivated in temperate regions.",
    extinct: false,
    usages: "Ornamental spring bulbs in gardens and parks, cut flowers, and symbols of rebirth and new beginnings.",
    nameStory: "The name 'daffodil' likely evolved from 'asphodel', another flower name, combined with 'daff'; the Latin genus 'Narcissus' comes from the Greek myth of Narcissus."
  },
  {
    name: "Iris (Bearded Iris)",
    image: "https://ts4.mm.bing.net/th?id=OIP.TaEAj50BX-P4SOUo3O7ksgHaFD&pid=15.1",
    details: "Bearded irises have sword-like leaves and large, intricate flowers with 'beards' of soft hairs on the falls. They come in many colors and patterns.",
    location: "Native mainly to Europe and the Mediterranean region; cultivated widely in temperate climates.",
    extinct: false,
    usages: "Ornamental perennials in borders and beds, symbolic use in art and heraldry (fleur-de-lis), and fragrance extraction from some species' rhizomes.",
    nameStory: "The name 'iris' comes from the Greek word for 'rainbow', referring to the wide range of flower colors in this genus."
  },
  {
    name: "Magnolia",
    image: "https://ts3.mm.bing.net/th?id=OIP.EZxWAqLkqNI24N5lmD8kdwHaEv&pid=15.1",
    details: "Magnolias are trees or shrubs with large, waxy flowers that can appear before the leaves. They are among the oldest flowering plant lineages.",
    location: "Native to East Asia and the Americas; cultivated in temperate and subtropical regions.",
    extinct: false,
    usages: "Ornamental trees in parks and gardens, symbols of dignity and nobility, and traditional medicinal uses of bark and flower parts.",
    nameStory: "Named 'Magnolia' in honor of French botanist Pierre Magnol, who contributed to the development of plant classification."
  },
  {
    name: "Camellia",
    image: "https://ts4.mm.bing.net/th?id=OIP.woSGC18QssVgC8T62q1wygHaE6&pid=15.1",
    details: "Camellias are evergreen shrubs with glossy leaves and rose-like flowers that bloom in cooler seasons. They are prized in ornamental gardens.",
    location: "Native to East Asia, particularly China, Japan, and Korea; grown in temperate and subtropical regions.",
    extinct: false,
    usages: "Ornamental shrubs, cut flowers, and related species (Camellia sinensis) are used to produce tea.",
    nameStory: "The genus 'Camellia' was named by Carl Linnaeus after Jesuit botanist Georg Joseph Kamel, recognizing his work on Asian plants."
  },
  {
    name: "Chrysanthemum",
    image: "https://ts3.mm.bing.net/th?id=OIP.cR1mod6ut4i_xwtxVdk5PwHaHa&pid=15.1",
    details: "Chrysanthemums are herbaceous plants or subshrubs with many flower forms and colors, often blooming in autumn.",
    location: "Native to East Asia and northeastern Europe; heavily cultivated in China and Japan, and worldwide as ornamentals.",
    extinct: false,
    usages: "Ornamental potted plants and garden flowers, cut flowers, cultural symbols of longevity, and chrysanthemum tea in some regions.",
    nameStory: "The name 'chrysanthemum' combines Greek 'chrysos' (gold) and 'anthemon' (flower), reflecting the original golden-colored forms."
  },
  {
    name: "Poppy (Common Poppy)",
    image: "https://ts2.mm.bing.net/th?id=OIP.Mb32YK4W7h1nCTkyQa8ZCAHaFj&pid=15.1",
    details: "Common poppies are annual wildflowers with delicate red petals and a dark center. They often grow in disturbed soils and fields.",
    location: "Native to Europe, North Africa, and temperate Asia; naturalized in many other regions.",
    extinct: false,
    usages: "Symbolic remembrance flower, ornamental wildflower, and inspiration for art and literature; related species used for seeds and medicines.",
    nameStory: "The English name 'poppy' comes from Old English 'popæg', influenced by Latin 'papaver', the classical word for poppy plants."
  },
  {
    name: "Gardenia",
    image: "https://ts1.mm.bing.net/th?id=OIP.ZyNTqvXOjufksjIVZizGJQHaE7&pid=15.1",
    details: "Gardenias are shrubs with glossy leaves and creamy white, highly fragrant flowers. They are popular but somewhat finicky house and garden plants.",
    location: "Native to tropical and subtropical regions of Africa, Asia, and Pacific islands; cultivated in warm climates and indoors.",
    extinct: false,
    usages: "Ornamental shrubs, houseplants, perfume ingredient, and symbolic flowers in corsages and weddings.",
    nameStory: "Named 'Gardenia' to honor Scottish-born American naturalist Alexander Garden, who studied plants in colonial America."
  },
  {
    name: "Bluebell (English Bluebell)",
    image: "https://www.dutchgrown.co.uk/cdn/shop/articles/spanish-bluebell-1_1024x1024.jpg?v=1724832448",
    details: "English bluebells are woodland plants with nodding, bell-shaped blue flowers that create carpets of color in spring.",
    location: "Native to western Europe, especially the British Isles; prefers shady woodlands and moist soils.",
    extinct: false,
    usages: "Wildflower displays in woodlands, symbolic of spring and fairy folklore in European traditions.",
    nameStory: "Called 'bluebell' because of the bell-like shape of the blue flowers; often linked to legends about bells calling fairies."
  },
  {
    name: "Carnation",
    image: "https://ts1.mm.bing.net/th?id=OIP.gIf0REivYxX9LmX4adyAeAHaIP&pid=15.1",
    details: "Carnations are long-lasting flowers with ruffled petals and a clove-like scent, commonly used in bouquets.",
    location: "Native to the Mediterranean region; cultivated widely in greenhouses and gardens.",
    extinct: false,
    usages: "Cut flowers for arrangements, boutonnieres and corsages, symbolic flowers for celebrations and remembrance days.",
    nameStory: "The name 'carnation' may come from Latin 'corona' (garland or crown), as the flowers were used in ancient ceremonial wreaths."
  },
  {
    name: "Geranium (Cranesbill)",
    image: "https://ts2.mm.bing.net/th?id=OIP.5e0EiBsR8zYBFhhGfmqkAAHaE8&pid=15.1",
    details: "Hardy geraniums are perennials with five-petaled flowers and deeply divided leaves, used as reliable garden plants.",
    location: "Native to temperate regions worldwide, especially the Mediterranean and Asia.",
    extinct: false,
    usages: "Ornamental groundcover and border plants; related pelargoniums used in containers and as houseplants.",
    nameStory: "The name 'Geranium' comes from the Greek 'geranos' meaning 'crane', referring to the beak-like shape of the seed pods."
  },
  {
    name: "Freesia",
    image: "https://ts2.mm.bing.net/th?id=OIP.Ad4Wj7EOB5Hu5a0HEbx2RgHaHa&pid=15.1",
    details: "Freesias are cormous plants with funnel-shaped, sweetly fragrant flowers arranged along one side of the stem.",
    location: "Native to southern Africa; cultivated worldwide as cut flowers and houseplants.",
    extinct: false,
    usages: "Cut flowers for bouquets, potted plants, and fragrance notes in perfumes and body care products.",
    nameStory: "Named 'Freesia' in honor of German physician and botanist Friedrich Freese, a friend of the botanist who described the genus."
  },
  {
    name: "Anemone (Poppy Anemone)",
    image: "https://ts2.mm.bing.net/th?id=OIP.KJuJihEAtkIJ40MPnK9tGgHaE7&pid=15.1",
    details: "Poppy anemones have brightly colored, poppy-like flowers with dark centers, often grown for early spring displays.",
    location: "Native to the Mediterranean region; grown in temperate gardens and as cut flowers.",
    extinct: false,
    usages: "Ornamental garden plant, cut flowers, and symbolic use in art and remembrance themes.",
    nameStory: "The name 'anemone' comes from the Greek word for 'wind', because the delicate petals were thought to open in response to the wind."
  },
  {
    name: "Foxglove",
    image: "https://ts2.mm.bing.net/th?id=OIP.8Lq_F9RReLPFoAhfJv4VSAHaG7&pid=15.1",
    details: "Foxglove is a tall biennial or perennial with tubular, bell-shaped flowers arranged on a spike. It is beautiful but highly toxic.",
    location: "Native to Europe, western Asia, and northwestern Africa; naturalized in North America.",
    extinct: false,
    usages: "Ornamental plant in cottage and woodland gardens; source of cardiac glycosides used in heart medications (under strict control).",
    nameStory: "The name 'foxglove' may come from 'folk's glove', referring to fairies (the 'little folk') and the glove-like flowers."
  },
  {
    name: "Hydrangea",
    image: "https://ts2.mm.bing.net/th?id=OIP.Jpgx4-8Xsfw_4Nge33x1IwHaE7&pid=15.1",
    details: "Hydrangeas are shrubs with large spherical or flattened flower clusters, often changing color with soil pH.",
    location: "Native to Asia and the Americas; widely cultivated in temperate gardens.",
    extinct: false,
    usages: "Ornamental shrubs for borders and foundation plantings, dried flower crafts, and symbolic flowers in ceremonies.",
    nameStory: "The name 'hydrangea' combines Greek 'hydor' (water) and 'angeion' (vessel), referring to the cup-like shape of its seed capsules or its need for moisture."
  },
  {
    name: "Snapdragon",
    image: "https://ts4.mm.bing.net/th?id=OIP.LncSqalFeIYh2Zty29H1DgHaE8&pid=15.1",
    details: "Snapdragons are herbaceous plants with tall spikes of flowers that open like a dragon's mouth when squeezed.",
    location: "Native to rocky areas of Europe, the United States, and North Africa; cultivated in gardens worldwide.",
    extinct: false,
    usages: "Ornamental bedding and border plants, cut flowers, and playful educational plants for children.",
    nameStory: "Called 'snapdragon' because the flower shape and its snapping action when pinched resemble a dragon opening its jaws."
  },
  {
    name: "Zinnia",
    image: "https://ts2.mm.bing.net/th?id=OIP.uMbv0m-Ts7emy7lpso-GHwHaE5&pid=15.1",
    details: "Zinnias are annual flowers with bright, daisy-like or dahlia-like blooms. They are easy to grow and loved by pollinators.",
    location: "Native to Mexico and the southwestern United States; cultivated in warm-season gardens worldwide.",
    extinct: false,
    usages: "Ornamental bedding plant, cut flowers, and pollinator-friendly plant for butterflies and bees.",
    nameStory: "Named 'Zinnia' in honor of German botanist Johann Gottfried Zinn, who studied these plants in the 18th century."
  },
  {
    name: "Lily of the Valley",
    image: "https://ts3.mm.bing.net/th?id=OIP.AUaNgOfHXE7TVcxLjKKiqQHaHa&pid=15.1",
    details: "Lily of the valley is a low-growing plant with arching stems of small, bell-shaped white flowers and a strong, sweet fragrance.",
    location: "Native to cool temperate regions of the Northern Hemisphere, especially Europe and Asia.",
    extinct: false,
    usages: "Ornamental groundcover in shady gardens, perfume ingredient, and symbolic flower in weddings and religious ceremonies; highly toxic if ingested.",
    nameStory: "Named 'lily of the valley' because its small white bells resemble lilies and it often grows in valley woodlands."
  },
  {
    name: "Plumeria (Frangipani)",
    image: "https://ts1.mm.bing.net/th?id=OIP.LHcOEmb5dxI0GO2U0v6b9AHaFj&pid=15.1",
    details: "Plumeria is a tropical tree or shrub with waxy, fragrant flowers commonly used to make leis and garlands.",
    location: "Native to Central America, Mexico, and the Caribbean; widely cultivated in tropical and subtropical regions.",
    extinct: false,
    usages: "Ornamental tree, floral garlands, religious offerings, and symbolic use in Polynesian and Asian cultures.",
    nameStory: "Named 'Plumeria' after French botanist Charles Plumier; the common name 'frangipani' comes from an Italian noble who created a similar perfume."
  },
  {
    name: "Water Lily",
    image: "https://th.bing.com/th/id/OIP.tNXgIFPcQHwb6CDfeMsAqgHaE8?w=108&h=108&c=1&bgcl=8b2533&r=0&o=7&cb=ucfimg1&dpr=1.5&pid=ImgRC&rm=3&ucfimg=1",
    details: "Water lilies are aquatic plants with round floating leaves and star-shaped flowers that rest on the water surface.",
    location: "Native to lakes and ponds across temperate and tropical regions worldwide.",
    extinct: false,
    usages: "Ornamental pond plants, inspiration in art (like Monet's paintings), and habitat supporters for aquatic life.",
    nameStory: "Called 'water lily' because they are lily-like flowers that grow directly on the surface of still water."
  },
  {
    name: "Calla Lily",
    image: "https://ts2.mm.bing.net/th?id=OIP.Px_KzlqI-WAB5MoBO1ppNgHaHa&pid=15.1",
    details: "Calla lilies are not true lilies but have elegant, trumpet-like spathes surrounding a central spike. They are popular in floral design.",
    location: "Native to southern Africa; grown in gardens, pots, and as cut flowers worldwide.",
    extinct: false,
    usages: "Wedding bouquets, funeral arrangements, ornamental plants, and symbolic flowers of purity and elegance.",
    nameStory: "The name 'calla' comes from the Greek 'kallos' meaning 'beauty', reflecting the graceful form of the flower."
  },
  {
    name: "Gazania",
    image: "https://ts3.mm.bing.net/th?id=OIP.-1m0HkbkPEX6H0HmqfiluQHaE7&pid=15.1",
    details: "Gazania is a low-growing plant with daisy-like flowers that open in the sun and close at night, often with bold patterns.",
    location: "Native to South Africa; grown as annuals or perennials in warm, sunny climates worldwide.",
    extinct: false,
    usages: "Ornamental groundcover and bedding plant for sunny, dry gardens and containers.",
    nameStory: "Named 'Gazania' in honor of Theodorus Gaza, a 15th-century Greek scholar who translated botanical works."
  },
  {
    name: "Sweet Pea",
    image: "https://ts1.mm.bing.net/th?id=OIP.u4vxx4tnOOkp9Orkk486SwHaFj&pid=15.1",
    details: "Sweet peas are climbing plants with delicate, fragrant flowers in many pastel and bright colors.",
    location: "Native to the Mediterranean region; cultivated worldwide in temperate climates.",
    extinct: false,
    usages: "Ornamental climber on trellises and fences, cut flowers for scented bouquets, symbolic of delicate pleasure.",
    nameStory: "Called 'sweet pea' because of the sweet fragrance of the flowers and their resemblance to edible pea flowers (though the seeds are toxic)."
  },
  {
    name: "Gladiolus",
    image: "https://www.almanac.com/sites/default/files/users/AlmanacStaffArchive/gladiolus-purple_full_width.jpg",
    details: "Gladiolus are cormous plants with tall flower spikes lined with funnel-shaped blooms, often used in formal arrangements.",
    location: "Native mainly to Africa and the Mediterranean region; cultivated widely in gardens and for the floral trade.",
    extinct: false,
    usages: "Cut flowers for bouquets and arrangements, garden border plants, symbolic of strength and moral integrity.",
    nameStory: "The name 'gladiolus' is from Latin 'gladius', meaning 'sword', referring to the sword-like shape of the leaves."
  },
  {
    name: "Ylang-Ylang",
    image: "https://ts1.mm.bing.net/th?id=OIP.2mKC-mNSk2cGmvx-R1Q3EwAAAA&pid=15.1",
    details: "Ylang-ylang is a tropical tree with drooping, star-like yellow-green flowers known for their intensely sweet fragrance.",
    location: "Native to Southeast Asia and the Pacific islands; cultivated in tropical regions.",
    extinct: false,
    usages: "Perfume industry (notably in Chanel No. 5), aromatherapy, ornamental tree, and traditional uses in hair oils.",
    nameStory: "The name 'ylang-ylang' is derived from the Tagalog term 'ilang-ilang', often interpreted as 'flower of flowers', emphasizing its strong scent."
  },
  {
    name: "Rafflesia arnoldii",
    image: "https://ts4.mm.bing.net/th?id=OIP.wknZd6I-aSA5L-XJIA1pHgHaE8&pid=15.1",
    details: "Rafflesia arnoldii produces one of the largest individual flowers in the world and emits a strong odor of decaying flesh to attract carrion flies.",
    location: "Native to rainforests of Sumatra and Borneo in Indonesia.",
    extinct: false,
    usages: "Not used ornamentally due to its smell; primarily of scientific and conservation interest, a flagship species for rainforest preservation.",
    nameStory: "Named 'Rafflesia arnoldii' to honor Sir Stamford Raffles and botanist Joseph Arnold, who were involved in its discovery and description."
  }
]

// المتغيرات العامة - Global Variables
var currentFlowers = flowers;

// عرض الأزهار - Display Flowers
function displayFlowers() {
  var grid = document.getElementById('grid');
  var noResults = document.getElementById('noResults');
  var results = document.getElementById('results');
  
  grid.innerHTML = '';
  
  if (currentFlowers.length === 0) {
    grid.style.display = 'none';
    noResults.style.display = 'block';
  } else {
    grid.style.display = 'flex';
    noResults.style.display = 'none';
    
    for (var i = 0; i < currentFlowers.length; i++) {
      var flower = currentFlowers[i];
      var card = createFlowerCard(flower);
      grid.appendChild(card);
    }
  }
  
  results.textContent = 'Showing ' + currentFlowers.length + ' flower(s)';
}

// إنشاء بطاقة زهرة - Create Flower Card
function createFlowerCard(flower) {
  var card = document.createElement('div');
  card.className = 'card';
  
  var img = document.createElement('img');
  img.src = flower.image;
  img.alt = flower.name;
  
  var title = document.createElement('h3');
  title.textContent = flower.name;
  
  var description = document.createElement('p');
  description.textContent = flower.details.substring(0, 60) + '...';
  
  var badgeContainer = document.createElement('div');
  badgeContainer.className = 'card-badge';
  
  var badge = document.createElement('span');
  badge.className = 'badge ' + (flower.extinct ? 'badge-extinct' : 'badge-safe');
  badge.textContent = flower.extinct ? 'Extinct' : 'Not Extinct';
  
  badgeContainer.appendChild(badge);
  
  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(badgeContainer);
  
  card.onclick = function() {
    openModal(flower);
  };
  
  return card;
}

// البحث عن الأزهار - Search Flowers
function searchFlowers() {
  var query = document.getElementById('searchInput').value.toLowerCase();
  currentFlowers = [];
  
  for (var i = 0; i < flowers.length; i++) {
    if (flowers[i].name.toLowerCase().indexOf(query) !== -1) {
      currentFlowers.push(flowers[i]);
    }
  }
  
  displayFlowers();
}

// فتح النافذة المنبثقة - Open Modal
function openModal(flower) {
  var modal = document.getElementById('modal');
  var content = document.getElementById('modalContent');
  
  content.innerHTML = '';
  
  var closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.textContent = '✕';
  closeBtn.onclick = closeModalBtn;
  
  var header = document.createElement('div');
  header.className = 'modal-header';
  var headerTitle = document.createElement('h2');
  headerTitle.textContent = flower.name;
  header.appendChild(headerTitle);
  
  var img = document.createElement('img');
  img.className = 'modal-image';
  img.src = flower.image;
  img.alt = flower.name;
  
  var badgeContainer = document.createElement('div');
  badgeContainer.className = 'modal-badge-container';
  var badge = document.createElement('span');
  badge.className = 'badge ' + (flower.extinct ? 'badge-extinct' : 'badge-safe');
  badge.textContent = flower.extinct ? ' Extinct' : ' Not Extinct';
  badgeContainer.appendChild(badge);
  
  var aboutSection = createSection('📖 About', flower.details, false);
  var locationSection = createSection('📍 Location', flower.location, false);
  var usagesSection = createSection('🌸 Usages', flower.usages, false);
  var storySection = createSection('📚 Name Story', flower.nameStory, true);
  
  content.appendChild(closeBtn);
  content.appendChild(header);
  content.appendChild(img);
  content.appendChild(badgeContainer);
  content.appendChild(aboutSection);
  content.appendChild(locationSection);
  content.appendChild(usagesSection);
  content.appendChild(storySection);
  
  modal.classList.add('active');
}

// إنشاء قسم في النافذة المنبثقة - Create Modal Section
function createSection(title, text, isItalic) {
  var section = document.createElement('div');
  section.className = 'section';
  
  var heading = document.createElement('h4');
  heading.textContent = title;
  
  var paragraph = document.createElement('p');
  paragraph.textContent = text;
  if (isItalic) {
    paragraph.className = 'italic';
  }
  
  section.appendChild(heading);
  section.appendChild(paragraph);
  
  return section;
}

// إغلاق النافذة المنبثقة من خلال الزر - Close Modal via Button
function closeModalBtn() {
  document.getElementById('modal').classList.remove('active');
}

// إغلاق النافذة المنبثقة من خلال النقر خارجها - Close Modal by Clicking Outside
function closeModal(event) {
  if (event.target.id === 'modal') {
    document.getElementById('modal').classList.remove('active');
  }
}

// فتح وإغلاق القائمة المنسدلة - Toggle Mobile Menu

function toggleMenu() {
  var mobileMenu = document.getElementById('mobileMenu');
  var overlay = document.getElementById('overlay');
  
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  } else {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  }
}

// تشغيل عند تحميل الصفحة - Run on Page Load
window.onload = function() {
  displayFlowers();
};
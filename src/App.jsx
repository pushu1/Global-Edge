import { useState, useEffect, useRef } from "react";
import fruitsImg from "./assets/products/fruits.png";
import SpicesImg from "./assets/products/Spices.png";  
import CoconutImg from "./assets/products/Coconut.png";  
import CoirProductsImg from "./assets/products/CoirProducts.png";  
import EdibleOilsImg from "./assets/products/EdibleOils.png"; 
import SugarImg from "./assets/products/Sugar.png"; 
import EthanolImg from "./assets/products/Ethanol.png";
import GrainsImg from "./assets/products/Grains.jpg";
import TapiocaImg from "./assets/products/Tapioca.png";
import GreenPapayaImg from "./assets/products/GreenPapaya.png";
import PineAppleImg from "./assets/products/PineApple.png";
import MangosteenImg from "./assets/products/Mangosteen.png";
import SemiHuskCoconutImg from "./assets/products/SemiHuskCoconut.png";
import JackfruitImg from "./assets/products/Jackfruit.png";
import YoungJackfruitImg from "./assets/products/YoungJackfruit.png";
import CinnamonImg from "./assets/products/Cinnamon.png";
import CinnamonC5Img from "./assets/products/CinnamonC5.png";
import CinnamonC4Img from "./assets/products/CinnamonC4.png";
import CinnamonC3Img from "./assets/products/CinnamonC3.png";
import CinnamonM4Img from "./assets/products/CinnamonM4.png";
import CinnamonChipsImg from "./assets/products/CinnamonChips.png";
import CinnamonPowderImg from "./assets/products/CinnamonPowder.png";
import ClovesHandPickedImg from "./assets/products/ClovesHandPicked.png";
import ClovesFAQImg from "./assets/products/ClovesFAQ.png";
import BlackPepper500GLImg from "./assets/products/BlackPepper500GL.png";
import BlackPepper525GLImg from "./assets/products/BlackPepper525GL.png";
import BlackPepper550GLImg from "./assets/products/BlackPepper550GL.png";
import CrackedBlackPepperImg from "./assets/products/CrackedBlackPepper.png";
import GroundBlackPepperImg from "./assets/products/GroundBlackPepper.png";
import CurryLeavesImg from "./assets/products/CurryLeaves.png";
import CuminImg from "./assets/products/Cumin.png";
import TurmericPowderImg from "./assets/products/TurmericPowder.png";
import CardamomImg from "./assets/products/Cardamom.png";
import CorianderImg from "./assets/products/Coriander.png";
import OrganicCoconutMilkImg from "./assets/products/OrganicCoconutMilk.png";
import OrganicCoconutCreamImg from "./assets/products/OrganicCoconutCream.png";
import OrganicCoconutMilkLightImg from "./assets/products/OrganicCoconutMilkLight.png";
import CoconutKernelProductsImg from "./assets/products/CoconutKernelProducts.png";
import SweetenedCoconutProductsImg from "./assets/products/SweetenedCoconutProducts.png";
import KingCoconutBeverageImg from "./assets/products/KingCoconutBeverage.png";
import VirginCoconutOilImg from "./assets/products/VirginCoconutOil.png";
import CoirMatsImg from "./assets/products/CoirMats.png";
import BristleFibreFibreBalesImg from "./assets/products/BristleFibreFibreBales.png";
import IndustrialErosionImg from "./assets/products/IndustrialErosion.png";
import CocoPeatGrowBagsImg from "./assets/products/CocoPeatGrowBags.png";
import CocoPeatBlocksImg from "./assets/products/CocoPeatBlocks.png";
import CocoPeatPlanterBagsImg from "./assets/products/CocoPeatPlanterBags.png";
import CoirPotsImg from "./assets/products/CoirPots.png";
import CoconutHuskChipsImg from "./assets/products/CoconutHuskChips.png";
import CoirWeedsMatImg from "./assets/products/CoirWeedsMat.png";
import GrowDiscsImg from "./assets/products/GrowDiscs.png";
import CocoPolesImg from "./assets/products/CocoPoles.png";
import GardenTwineImg from "./assets/products/GardenTwine.png";
import CoirRopeImg from "./assets/products/CoirRope.png";
import CoirBrushesImg from "./assets/products/CoirBrushes.png";
import CrudeCornOilImg from "./assets/products/CrudeCornOil.png";
import RefinedCornOilImg from "./assets/products/RefinedCornOil.png";
import CrudeSunflowerOilImg from "./assets/products/CrudeSunflowerOil.png";
import RefinedSunflowerOilImg from "./assets/products/RefinedSunflowerOil.png";
import CrudeSoybeanOilImg from "./assets/products/CrudeSoybeanOil.png";
import RefinedSoybeanOilImg from "./assets/products/RefinedSoybeanOil.png";
import VirginCoconutOil1Img from "./assets/products/VirginCoconutOil1.png";
import Sugar1Img from "./assets/products/Sugar1.png";
import Ethanol1Img from "./assets/products/Ethanol1.png";
import GrainsVariousImg from "./assets/products/GrainsVarious.png";
import AgroProductPremiumImg from "./assets/products/AgroProductPremium.png";
import MilletsImg from "./assets/products/Millets.png";
import HerbalMedicinalplantsImg from "./assets/products/HerbalMedicinalplants.png";
import OilseedsImg from "./assets/products/Oilseeds.png";
import NaturalSweetenersImg from "./assets/products/NaturalSweeteners.png";
import BasmatiRiceImg from "./assets/products/BasmatiRice.png";
import CuminSeedsImg from "./assets/products/CuminSeeds.png";
import DryGingerImg from "./assets/products/DryGinger.png";
import ChemicalsandFertilizersImg from "./assets/products/ChemicalsandFertilizers.png";
import CalciumChlorideImg from "./assets/products/CalciumChloride.png";
import MagnesiumChlorideImg from "./assets/products/MagnesiumChloride.png";
import HydrochloricAcidImg from "./assets/products/HydrochloricAcid.png";
import SodaAshImg from "./assets/products/SodaAsh.png";
import SulphuricAcidImg from "./assets/products/SulphuricAcid.png";
import UreaFertilizerImg from "./assets/products/UreaFertilizer.png";
import CopperOxideImg from "./assets/products/CopperOxide.png";
import ZincOxideImg from "./assets/products/ZincOxide.png";
import SulphurImg from "./assets/products/Sulphur.png";
import AceticAcidImg from "./assets/products/AceticAcid.png";
import LeatherGoodsImg from "./assets/products/LeatherGoods.png";
import LeatherBagsImg from "./assets/products/LeatherBags.png";
import BeltsImg from "./assets/products/Belts.png";
import WalletsImg from "./assets/products/Wallets.png";
import ShoesImg from "./assets/products/Shoes.png";
import LeatherGarmentsImg from "./assets/products/LeatherGarments.png";
import LeatherFurnitureImg from "./assets/products/LeatherFurniture.png";
import MineralsImg from "./assets/products/Minerals.png";
import PalmOilImg from "./assets/products/PalmOil.png";
import GroundnutOilImg from "./assets/products/GroundnutOil.png";
import CopperScrapImg from "./assets/products/CopperScrap.png";
import AluminumIngotsImg from "./assets/products/AluminumIngots.png";
import CopperMulberryImg from "./assets/products/CopperMulberry.png";
import BrassScrapImg from "./assets/products/BrassScrap.png";
import APBLogoImg from "./assets/products/APBLogo.png";
/* ─── COLOR TOKENS ───────────────────────────────────────────────── */
const C = {
  forest: "#1a3d2b",
  leaf:   "#2d6a4f",
  sage:   "#52b788",
  mint:   "#b7e4c7",
  earth:  "#8b5e3c",
  sand:   "#f4e8d1",
  cream:  "#fdf8f0",
  amber:  "#e07b39",
  white:  "#ffffff",
  ink:    "#1c1c1c",
  muted:  "#6b7280",
};

/* ─── GLOBAL STYLES injected into <head> ────────────────────────── */
const STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'DM Sans',sans-serif;background:${C.cream};color:${C.ink};overflow-x:hidden}

  ::-webkit-scrollbar{width:6px}
  ::-webkit-scrollbar-track{background:${C.sand}}
  ::-webkit-scrollbar-thumb{background:${C.leaf};border-radius:3px}

  .serif{font-family:'Playfair Display',serif}

  /* fade-up animation */
  @keyframes fadeUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes leafFloat{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-12px) rotate(2deg)}}
  @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
  @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}

  .anim-up{animation:fadeUp .7s ease both}
  .anim-in{animation:fadeIn .6s ease both}
  .delay-1{animation-delay:.1s}.delay-2{animation-delay:.2s}.delay-3{animation-delay:.3s}
  .delay-4{animation-delay:.4s}.delay-5{animation-delay:.5s}

  .hero-bg{
    background:
      radial-gradient(ellipse at 20% 50%, #1a0f2e 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, #1a0f2e 0%, transparent 50%),
      linear-gradient(160deg, ${C.forest} 0%, #d4c69a 40%, #1a2e1a 100%);
  }

  .card-hover{transition:transform .3s ease,box-shadow .3s ease}
  .card-hover:hover{transform:translateY(-6px);box-shadow:0 20px 48px rgba(0,0,0,.14)}

  .btn-primary{
    background:linear-gradient(135deg,${C.amber},#c9622a);
    color:#fff;border:none;cursor:pointer;
    transition:all .3s ease;
    font-family:'DM Sans',sans-serif;font-weight:600;
  }
  .btn-primary:hover{background:linear-gradient(135deg,#c9622a,#a84e1f);transform:translateY(-2px);box-shadow:0 8px 24px rgba(224,123,57,.4)}

  .btn-outline{
    background:transparent;border:2px solid ${C.leaf};color:${C.leaf};cursor:pointer;
    transition:all .3s ease;font-family:'DM Sans',sans-serif;font-weight:600;
  }
  .btn-outline:hover{background:${C.leaf};color:#fff;transform:translateY(-2px)}

  .gradient-text{
    background:linear-gradient(135deg,${C.sage},${C.amber});
    -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  }

  .section-divider{
    width:60px;height:4px;
    background:linear-gradient(90deg,${C.leaf},${C.amber});
    border-radius:2px;margin:12px 0 24px;
  }

  .nav-link{position:relative;transition:color .2s}
  .nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:${C.sage};transition:width .3s}
  .nav-link:hover::after,.nav-link.active::after{width:100%}

  .spec-tag{
    background:${C.mint};color:${C.forest};
    padding:4px 10px;border-radius:20px;font-size:12px;font-weight:600;display:inline-block;margin:3px 2px;
  }

  .grain::before{
    content:'';position:fixed;inset:0;pointer-events:none;z-index:999;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.025'/%3E%3C/svg%3E");
    opacity:.4;
  }

  .whatsapp-btn{
    position:fixed;bottom:24px;right:24px;z-index:1000;
    width:56px;height:56px;border-radius:50%;
    background:#25d366;display:flex;align-items:center;justify-content:center;
    box-shadow:0 4px 20px rgba(37,211,102,.5);cursor:pointer;
    transition:all .3s ease;text-decoration:none;
    animation:pulse 2s infinite;
  }
  .whatsapp-btn:hover{transform:scale(1.1);box-shadow:0 8px 32px rgba(37,211,102,.6)}

  input,textarea,select{outline:none;transition:border-color .2s,box-shadow .2s}
  input:focus,textarea:focus,select:focus{
    border-color:${C.leaf} !important;
    box-shadow:0 0 0 3px rgba(45,106,79,.15);
  }
`;

/* ─── DATA ───────────────────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "Agro",
    category: "Agro Product Premium",
    image: AgroProductPremiumImg,
    color: "#e07b39",
    bgColor: "#fff8f0",
    items: [
      { name: "Millets", image: MilletsImg, desc: "Nutrient-rich millets offering a healthy and sustainable food choice." },
      { name: "Herbal & Medicinal plants", image: HerbalMedicinalplantsImg, desc: "Naturally grown herbs known for their therapeutic and wellness benefits." },
      { name: "Oilseeds", image: OilseedsImg, desc: "High-quality oilseeds ideal for pure and nutritious oil extraction." },
      { name: "Natural Sweeteners", image: NaturalSweetenersImg, desc: "Healthy sugar alternatives derived from natural sources." },
      { name: "Natural Sweeteners", image: NaturalSweetenersImg, desc: "Healthy sugar alternatives derived from natural sources." },
      { name: "Basmati Rice", image: BasmatiRiceImg, desc: "Premium long-grain basmati rice with rich aroma and fine texture." },
    ],
  },

  {
    id: "Spices",
    category: "Spices",
    image: SpicesImg,
    color: "#e07b39",
    bgColor: "#fff8f0",
    items: [
      { name: "Curry Leaves", image: CurryLeavesImg, desc: "Aromatic fresh/dried curry leaves, integral to South Asian cuisine." },
      { name: "Cumin", image: CuminImg, desc: "High-quality whole cumin seeds with robust flavor." },
      { name: "Turmeric Powder", image: TurmericPowderImg, desc: "Bright, high-curcumin turmeric powder from trusted sources." },
      { name: "Cardamom", image: CardamomImg, desc: "Premium green cardamom pods with intense aroma." },
      { name: "Coriander", image: CorianderImg, desc: "Whole and ground coriander seeds for global markets." },
      { name: "Cumin Seeds", image: CuminSeedsImg, desc: "Aromatic cumin seeds with a warm and earthy flavor." },
      { name: "Dry Ginger", image: DryGingerImg, desc: "Dried ginger with a sharp taste and multiple health benefits." },
      { name: "Cinnamon C5 Extra Special", image: CinnamonImg, specs: ["Diameter: 8mm–9mm", "Origin: Sri Lanka"], desc: "Finest grade Sri Lankan true cinnamon, extremely thin and aromatic." },
      { name: "Cinnamon C5", image: CinnamonC5Img, specs: ["Diameter: 10mm–12mm", "Origin: Sri Lanka"], desc: "Premium Ceylon cinnamon sticks, internationally recognized grade." },
      { name: "Cinnamon C4", image: CinnamonC4Img, specs: ["Diameter: 13mm–14mm"], desc: "High-quality cinnamon quills suitable for culinary and industrial use." },
      { name: "Cinnamon C3", image: CinnamonC3Img, specs: ["Diameter: 15mm–17mm"], desc: "Standard-grade cinnamon quills for bulk export." },
      { name: "Cinnamon M4", image: CinnamonM4Img, specs: ["Diameter: 18mm–20mm"], desc: "Larger diameter cinnamon sticks for specific market requirements." },
      { name: "Cinnamon Chips", image: CinnamonChipsImg, specs: ["50%:50% blend"], desc: "Cinnamon chips blended from quillings and quills." },
      { name: "Cinnamon Powder", image: CinnamonPowderImg, specs: ["Made from Quillings & Chips"], desc: "Finely milled cinnamon powder for food manufacturing." },
      { name: "Cloves (Hand Picked)", image: ClovesHandPickedImg, specs: ["Moisture: 12–13%", "Headcount: 99%", "Stems: < 0.2%", "Origin: Sri Lanka"], desc: "Premium hand-selected whole cloves with minimal stems." },
      { name: "Cloves FAQ", image: ClovesFAQImg, specs: ["Moisture: max 13%", "Admixture: 3–4%", "Headless: 80–20", "Origin: Sri Lanka"], desc: "FAQ grade cloves with mixed color suitable for processing." },
      { name: "Black Pepper 500GL", image: BlackPepper500GLImg, specs: ["Moisture: 13–14% max"], desc: "500 GL grade whole black pepper berries." },
      { name: "Black Pepper 525GL", image: BlackPepper525GLImg, specs: ["Moisture: 13–14% max"], desc: "525 GL grade premium black pepper." },
      { name: "Black Pepper 550GL", image: BlackPepper550GLImg, specs: ["Moisture: 13–14% max"], desc: "550 GL grade — finest density black pepper." },
      { name: "Cracked Black Pepper ½", image: CrackedBlackPepperImg, specs: ["Moisture: 13–14% max"], desc: "Coarsely cracked black pepper for culinary use." },
      { name: "Ground Black Pepper (28 Mesh)", image: GroundBlackPepperImg, specs: ["Moisture: 13–14% max"], desc: "Finely ground black pepper, 28 mesh particle size." },
    ],
  },
    {
    id: "Chemicals",
    category: "Chemicals and Fertilizers",
     image: ChemicalsandFertilizersImg,
      color: "#e07b39",
      bgColor: "#fff8f0",
    items: [
      { name: "Calcium Chloride", image: CalciumChlorideImg, desc: "High-purity calcium chloride used for industrial and de-icing applications." },
      { name: "Magnesium Chloride", image: MagnesiumChlorideImg, desc: "Versatile compound used in agriculture, industry, and dust control." },
      { name: "Hydrochloric Acid", image: HydrochloricAcidImg, desc: "Versatile compound used in agriculture, industry, and dust control." },
      { name: "Soda Ash", image: SodaAshImg, desc: "Essential chemical for glass, detergent, and chemical production." },
      { name: "Sulphuric Acid", image: SulphuricAcidImg, desc: "Highly important industrial acid used in fertilizers and processing." },
      { name: "Urea Fertilizer", image: UreaFertilizerImg, desc: "Nitrogen-rich fertilizer that enhances crop growth and productivity." },
      { name: "Copper Oxide", image: CopperOxideImg, desc: "Industrial-grade compound used in ceramics, electronics, and pigments." },
      { name: "Zinc Oxide", image: ZincOxideImg, desc: "Industrial-grade compound used in ceramics, electronics, and pigments." },
      { name: "Sulphur", image: SulphurImg, desc: "Key element used in fertilizers, chemicals, and industrial applications." },
      { name: "Acetic Acid", image: AceticAcidImg, desc: "Widely used acid in food processing, chemicals, and industrial uses." },
    ],
  },

  {
    id: "Leather",
    category: "Leather Goods",
     image: LeatherGoodsImg,
      color: "#e07b39",
      bgColor: "#fff8f0",
    items: [
      { name: "Leather Bags", image: LeatherBagsImg, desc: "Premium quality leather bags combining durability with stylish design." },
      { name: "Belts", image: BeltsImg, desc: "Strong and elegant leather belts crafted for everyday use." },
      { name: "Wallets", image: WalletsImg, desc: "Finely crafted leather wallets offering durability and smart storage." },
      { name: "Shoes", image: ShoesImg, desc: "High-quality leather shoes designed for comfort and long-lasting wear." },
      { name: "LeatherGarments", image: LeatherGarmentsImg, desc: "Stylish leather apparel with superior finish and durability." },
      { name: "LeatherFurniture", image: LeatherFurnitureImg, desc: "Luxury leather furniture offering comfort, elegance, and durability." },
    ],
  },

    {
    id: "Minerals",
    category: "Minerals",
     image: MineralsImg,
      color: "#e07b39",
      bgColor: "#fff8f0",
    items: [
      { name: "Copper Scrap", image: CopperScrapImg, desc: "High-grade copper scrap suitable for recycling and industrial applications." },
      { name: "⁠Aluminum Ingots", image: AluminumIngotsImg, desc: "Premium quality aluminum ingots used in manufacturing and casting industries." },
      { name: "⁠Copper Mulberry", image: CopperMulberryImg, desc: "High-purity copper material widely used in electrical and industrial applications." },
      { name: "⁠Brass Scrap", image: BrassScrapImg, desc: "Quality brass scrap ideal for recycling and reuse in various industries." },
    ],
  },

  {
    id: "Coconut",
    category: "Coconut Products",
      image: CoconutImg,
      color: "#e07b39",
     bgColor: "#fff8f0",
    items: [
      { name: "Organic Coconut Milk", image: OrganicCoconutMilkImg, specs: ["Vegan", "Lactose-free", "Low carb", "Gluten-free"], desc: "Extracted from white coconut flesh. Perfect for Asian dishes, confectionaries, mocktails, ice cream, and desserts." },
      { name: "Organic Coconut Cream", image: OrganicCoconutCreamImg, specs: ["22% fat", "Shelf life: 24 months", "Origin: Sri Lanka"], desc: "Thick, rich coconut cream from Sri Lankan plantations. A dairy-free alternative for cooking, smoothies, and gourmet foods." },
      { name: "Organic Coconut Milk Light", image: OrganicCoconutMilkLightImg, specs: ["Lactose-free", "Low carbohydrates", "Shelf life: 24 months"], desc: "Lighter consistency coconut milk with natural flavor and aroma. Ideal for tropical cuisines and desserts." },
      { name: "Coconut Kernel Products", image: CoconutKernelProductsImg, desc: "Products from the edible white flesh of coconut, rich in nutrients and healthy fats for culinary and non-culinary applications." },
      { name: "Sweetened Coconut Products", image: SweetenedCoconutProductsImg, desc: "Coconut-based sweetened items for desserts, snacks, and beverages." },
      { name: "King Coconut Beverage (Bottled)", image: KingCoconutBeverageImg, desc: "Packaged beverage from Sri Lankan King Coconuts — sweeter and less fibrous than regular coconut water." },
      { name: "Virgin Coconut Oil", image: VirginCoconutOilImg, specs: ["Cold-pressed", "High MCFAs", "Rich antioxidants", "No chemicals"], desc: "Extracted from fresh coconut meat without heat. High-quality oil retaining all natural nutrients and beneficial properties." },
    ],
  },
  {
    id: "coir",
    category: "Coir Products",
     image: CoirProductsImg,
      color: "#e07b39",
     bgColor: "#fff8f0",
    items: [
      { name: "Coir Mats", image: CoirMatsImg, desc: "Natural coconut fiber mats for driveways, porches, and homes. Short, stiff bristles clean shoes effectively." },
      { name: "Bristle Fibre & Fibre Bales", image: BristleFibreFibreBalesImg, desc: "Natural coir fibre extracted from unripe coconuts through hot water retting and combing. Used in brushes, mattresses, and more." },
      { name: "Industrial Erosion Control Products", image: IndustrialErosionImg, desc: "Coir geotextiles for slope stabilization, erosion control, and environmental restoration projects." },
      { name: "Coco Peat Grow Bags", image: CocoPeatGrowBagsImg, desc: "Premium coco peat in grow-bag format for horticulture and greenhouse cultivation." },
      { name: "Coco Peat Blocks", image: CocoPeatBlocksImg, desc: "Compressed coir peat blocks for agriculture, hydroponics, and growing media." },
      { name: "Coco Peat Planter Bags", image: CocoPeatPlanterBagsImg, desc: "Ready-to-use planter bags with high-quality coco peat growing medium." },
      { name: "Coir Pots", image: CoirPotsImg, desc: "Biodegradable coir pots ideal for seedling propagation and transplanting." },
      { name: "Coconut Husk Chips", image: CoconutHuskChipsImg, desc: "Chunky coconut husk pieces for orchid growing and specialty horticulture." },
      { name: "Coir Weeds Mat", image: CoirWeedsMatImg, desc: "Weed-suppressing coir mats for sustainable garden management." },
      { name: "Grow Discs", image: GrowDiscsImg, desc: "Compact coir discs that expand when watered — ideal for seed starting." },
      { name: "Coco Poles", image: CocoPolesImg, desc: "Moss/coir poles for supporting climbing plants naturally." },
      { name: "Garden Twine", image: GardenTwineImg, desc: "Natural coir twine for garden tying, training, and support." },
      { name: "Coir Rope (Industrial)", image: CoirRopeImg, desc: "High-tensile coir rope manufactured from retted and defibered coconut husks." },
      { name: "Coir Brushes", image: CoirBrushesImg, desc: "Durable natural fibre brushes for kitchen and industrial cleaning." },
    ],
  },
  {
    id: "edible-oil",
      category: "Edible Oils",
      image: EdibleOilsImg,
      color: "#e07b39",
      bgColor: "#fff8f0",
    items: [
      { name: "Crude Corn Oil", image: CrudeCornOilImg, desc: "Extracted directly from corn germ via solvent extraction or mechanical pressing, in its raw unrefined state." },
      { name: "Refined Corn Oil", image: RefinedCornOilImg, desc: "Further processed to remove impurities, free fatty acids, and compounds affecting taste and shelf life." },
      { name: "Crude Sunflower Oil", image: CrudeSunflowerOilImg, desc: "Directly extracted from sunflower seeds, requiring further refining before consumption." },
      { name: "Refined Sunflower Oil", image: RefinedSunflowerOilImg, desc: "Premium sunflower oil purified through degumming, neutralization, bleaching, and deodorization." },
      { name: "Crude Soybean Oil", image: CrudeSoybeanOilImg, desc: "Raw soybean oil requiring further processing before export or consumption." },
      { name: "Refined Soybean Oil", image: RefinedSoybeanOilImg, desc: "High-quality refined soybean oil with free fatty acids, color, and odor removed." },
      { name: "Virgin Coconut Oil", image: VirginCoconutOil1Img, desc: "Premium VCO from fresh coconut meat, retaining full nutritional and beneficial properties." },
      { name: "Palm Oil", image: PalmOilImg, desc: "Versatile and cost-effective oil widely used in cooking and food processing." },
      { name: "Groundnut Oil", image: GroundnutOilImg, desc: "Pure peanut oil known for its rich flavor and high nutritional value." },
    ],
  },
  // {
  //   id: "sugar",
  //   category: "Sugar",
  //   image: SugarImg,
  //     color: "#e07b39",
  //     bgColor: "#fff8f0",
  //   items: [
  //     { name: "Sugar", image: Sugar1Img, desc: "High-quality refined and raw sugar for food manufacturing, retail, and industrial applications. Available in bulk quantities." },
  //   ],
  // },
  // {
  //   id: "ethanol",
  //   category: "Ethanol",
  //     image: EthanolImg,
  //     color: "#e07b39",
  //     bgColor: "#fff8f0",
  //   items: [
  //     { name: "Ethanol", image: Ethanol1Img, desc: "Industrial-grade ethanol for pharmaceutical, food, cosmetic, and industrial applications. Available in various purity grades." },
  //   ],
  // },
  {
    id: "grains",
    category: "Grains",
     image: GrainsImg,
      color: "#e07b39",
      bgColor: "#fff8f0",
    items: [
      { name: "Grains (Various)", image: GrainsVariousImg, desc: "A range of premium grains including red kidney beans, black beans, soybeans, and other legumes for global export markets." },
    ],
  },
];

const WHY_US = [
  { icon: "🏆", title: "Our Process", desc: "We follow a structured and transparent approach to ensure seamless global trade operations and client satisfaction at every stage." },
  { icon: "🌍", title: "Requirement Analysis", desc: "We understand your exact product specifications, quantity, quality standards, and target pricing." },
  { icon: "🌱", title: "Strategic Sourcing", desc: "We identify and engage reliable suppliers from our trusted network to match your requirements." },
  { icon: "🤝", title: "Quality Assurance", desc: "Products undergo strict quality checks and verification to ensure compliance with international standards." },
  { icon: "✈️", title: "Competitive Quotation", desc: "We provide transparent pricing with the best possible value based on market conditions." },
  { icon: "💡", title: "Order Confirmation", desc: "Once terms are finalised, we initiate the procurement and documentation process." },
  { icon: "💡", title: "Logistics & Documentation", desc: "We handle export documentation, shipping coordination, and compliance for smooth transactions." },
  { icon: "💡", title: "Delivery & Support", desc: "Timely shipment delivery with continuous updates and post-shipment assistance." },
];

/* ─── ICON COMPONENTS ────────────────────────────────────────────── */
const MenuIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─── NAVBAR ─────────────────────────────────────────────────────── */
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Products", id: "products" },
    { label: "Why Us", id: "whyus" },
    { label: "Contact", id: "contact" },
  ];

  const navigate = (id) => { setPage(id); setOpen(false); window.scrollTo(0,0); };

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:900,
      background: scrolled ? "rgba(26,61,43,0.97)" : "rgba(26,61,43,0.97)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? `1px solid rgba(82,183,136,.2)` : "none",
      transition:"all .35s ease",
      padding: scrolled ? "12px 0" : "20px 0",
    }}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        {/* Logo */}
        {/* <div onClick={() => navigate("home")} style={{cursor:"pointer",display:"flex",alignItems:"center",gap:10}}>
          <div style={{
            width:40,height:40,borderRadius:"50%",
            background:`linear-gradient(135deg,${C.sage},${C.amber})`,
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:18,
          }}>🌿</div>
          <div>
            <div className="serif" style={{color:"#fff",fontSize:26,fontWeight:700,lineHeight:1.1}}>APB Global</div>
          </div>
        </div> */}
        <div 
  onClick={() => navigate("home")} 
  style={{ cursor: "pointer" }}
>
  <img 
    src={APBLogoImg} 
    alt="APB Logo" 
    style={{ height: 40 }}
  />
</div>

        {/* Desktop links */}
        <div style={{display:"flex",gap:32,alignItems:"center"}} className="desktop-nav">
          {links.map(l => (
            <button key={l.id} onClick={() => navigate(l.id)}
              className={`nav-link ${page===l.id?"active":""}`}
              style={{background:"none",border:"none",cursor:"pointer",color:page===l.id?C.sage:"#e8f5ee",fontSize:14,fontWeight:500,padding:"4px 0"}}>
              {l.label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => navigate("contact")}
            style={{padding:"10px 22px",borderRadius:24,fontSize:13,letterSpacing:.5}}>
            Send Inquiry
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)}
          style={{background:"none",border:"none",color:"#fff",cursor:"pointer",display:"none"}}
          className="mobile-menu-btn">
          {open ? <CloseIcon/> : <MenuIcon/>}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{background:"rgba(26,61,43,.98)",padding:"16px 24px 24px",borderTop:`1px solid rgba(82,183,136,.2)`}}>
          {links.map(l => (
            <button key={l.id} onClick={() => navigate(l.id)}
              style={{display:"block",width:"100%",textAlign:"left",background:"none",border:"none",
                color:page===l.id?C.sage:"#e8f5ee",fontSize:16,fontWeight:500,padding:"14px 0",
                borderBottom:`1px solid rgba(82,183,136,.1)`,cursor:"pointer"}}>
              {l.label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => navigate("contact")}
            style={{marginTop:16,padding:"12px 28px",borderRadius:24,width:"100%",fontSize:14}}>
            Send Inquiry
          </button>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none !important}
          .mobile-menu-btn{display:flex !important}
        }
      `}</style>
    </nav>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────────────────── */
function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-bg" style={{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"}}>
        {/* Decorative circles */}
        <div style={{position:"absolute",top:"10%",right:"5%",width:300,height:300,borderRadius:"50%",
          border:`1px solid rgba(82,183,136,.15)`,pointerEvents:"none"}}/>
        <div style={{position:"absolute",top:"15%",right:"8%",width:200,height:200,borderRadius:"50%",
          border:`1px solid rgba(82,183,136,.1)`,pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:"10%",left:"-5%",width:400,height:400,borderRadius:"50%",
          background:"radial-gradient(circle,rgba(82,183,136,.06),transparent)",pointerEvents:"none"}}/>

        {/* Floating emojis */}
        {["🌿","🥥","🌶️","🫙"].map((e,i) => (
          <div key={i} style={{
            position:"absolute",fontSize:32,opacity:.50,
            top:`${20+i*18}%`,left:`${75+i*5}%`,
            animation:`leafFloat ${3+i*.5}s ease-in-out infinite`,
            animationDelay:`${i*.7}s`,
          }}>{e}</div>
        ))}

        {/* <div style={{width:"100%",padding:"120px 60px 80px"}}> */}
 <div style={{
             width: "100%",
             padding: "120px 60px 80px",
             display: "flex",
             justifyContent: "flex-start",   
             alignItems: "center"
}}>
          {/* <div style={{maxWidth:680}}> */}
          <div style={{
  maxWidth: 650,
  textAlign: "left"
}}>
            <div className="anim-up" style={{
              display:"inline-flex",alignItems:"center",gap:8,
              background:"rgba(82,183,136,.15)",border:`1px solid rgba(82,183,136,.3)`,
              borderRadius:24,padding:"6px 16px",marginBottom:24,
            }}>
              <span style={{width:8,height:8,borderRadius:"50%",background:C.sage,display:"inline-block"}}/>
              <span style={{color:C.sage,fontSize:13,fontWeight:500,letterSpacing:1.5,textTransform:"uppercase"}}>
                Supplying the world, seamlessly
              </span>
            </div>

            <h1 className="serif anim-up delay-1" style={{fontSize:"clamp(2.4rem,3vw,1rem)",color:"#fff",lineHeight:1.15,marginBottom:24}}>
            <span  style={{ background: "linear-gradient(90deg, #D4AF37, #FFC300)",fontSize: "1.3em", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700 }}> APB </span> Global Commodity And Outsourcing
              {/* From The Ground To <br/>Your Industry. */}
            </h1>

            <p className="anim-up delay-2" style={{color:"rgba(255,255,255,.72)",fontSize:17,lineHeight:1.7,marginBottom:36,maxWidth:520}}>
              From The Ground To Your Industry.
            </p>

            <div className="anim-up delay-3" style={{display:"flex",gap:16,flexWrap:"wrap"}}>
              <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0,0); }}
                style={{padding:"14px 32px",borderRadius:28,fontSize:15}}>
                Send an Inquiry →
              </button>
              <button className="btn-outline" onClick={() => { setPage("products"); window.scrollTo(0,0); }}
                style={{padding:"14px 32px",borderRadius:28,fontSize:15,borderColor:"rgba(82,183,136,.5)",color:"rgba(255,255,255,.85)"}}>
                View Products
              </button>
            </div>

            {/* Stats */}
            <div className="anim-up delay-4" style={{display:"flex",gap:40,marginTop:56,flexWrap:"wrap"}}>
              {[["8+","Product Categories"],["5+","Years Experience"],["Global","Export Network"]].map(([n,l]) => (
                <div key={l}>
                  <div className="serif" style={{fontSize:28,color:C.sage,fontWeight:700}}>{n}</div>
                  <div style={{color:"rgba(255,255,255,.5)",fontSize:13,marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      {/* <section style={{background:C.forest,padding:"24px 0",overflow:"hidden"}}>
        <div style={{display:"flex",gap:40,animation:"shimmer 20s linear infinite",whiteSpace:"nowrap",width:"max-content"}}>
          {[...PRODUCTS,...PRODUCTS].map((p,i) => (
            <span key={i} style={{color:"rgba(183,228,199,.6)",fontSize:14,fontWeight:500,letterSpacing:1.5,textTransform:"uppercase"}}>
              {p.emoji} {p.category}
            </span>
          ))}
        </div>
      </section> */}

      <section
  style={{
    background: "linear-gradient(90deg, #0f2a1d, #1a3d2b)",
    padding: "20px 0",
    overflow: "hidden"
  }}
>
  <div
    style={{
      display: "flex",
      gap: 50,
      whiteSpace: "nowrap",
      animation: "scrollX 25s linear infinite"
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.animationPlayState = "paused")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.animationPlayState = "running")
    }
  >
    {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
      <span
        onClick={() => {
  localStorage.setItem("activeCategory", p.id); // 👈 save category
  setPage("products"); // 👈 page change
}}
        style={{
          color: "#b7e4c7",
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "0.3s"
        }}
        onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
        onMouseLeave={(e) => (e.target.style.color = "#b7e4c7")}
      >
        {p.category}
      </span>
    ))}
  </div>
</section>

      {/* About teaser */}
      <section style={{maxWidth:1200,margin:"0 auto",padding:"80px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}} className="grid-responsive">
          <div>
            <div className="section-divider"/>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.6rem,)",color:C.forest,lineHeight:1.3,marginBottom:20}}>
              Powered by Networks<br/>Connecting Global Trade
            </h2>
            <p style={{color:C.muted,lineHeight:1.8,fontSize:16,marginBottom:16, textAlign: "left"}}>
              APB Global Commodity and Outsourcing is a dynamic international trading and service company specialising in the supply of metals, agro commodities, chemicals, and leather goods. Built on a foundation of trust, transparency, and performance, we deliver end-to-end solutions that simplify global trade. With a deep understanding of international markets and supply chains, we ensure consistent quality, competitive pricing, and timely delivery. 
            </p>
            <p style={{color:C.muted,lineHeight:1.8,fontSize:16,marginBottom:28, textAlign: "left"}}>
             Our team works closely with trusted suppliers and partners worldwide, enabling us to meet the evolving demands of modern businesses. In addition to commodities, our outsourcing services are designed to help organisations streamline operations, reduce overheads, and enhance efficiency. Whether it’s sourcing, logistics, or operational support, we act as a strategic partner focused on long-term value creation. At APB Global, we don’t just move goods—we build lasting business relationships.
            </p>
            <button className="btn-outline" onClick={() => { setPage("about"); window.scrollTo(0,0); }}
              style={{padding:"12px 28px",borderRadius:24,fontSize:14}}>
              Learn More About Us
            </button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
            {[
              { icon:"🌱",title:"Sustainable Sourcing",color:C.leaf },
              { icon:"🚢",title:"Global Export",color:C.amber },
              { icon:"🏅",title:"Quality Assured",color:C.earth },
              { icon:"🤝",title:"Trusted Partners",color:"#4a90a4" },
            ].map(item => (
              <div key={item.title} className="card-hover" style={{
                background:C.white,borderRadius:16,padding:24,
                boxShadow:"0 4px 20px rgba(0,0,0,.07)",textAlign:"center",
              }}>
                <div style={{fontSize:32,marginBottom:12}}>{item.icon}</div>
                <div style={{fontSize:13,fontWeight:600,color:item.color}}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section style={{background:C.sand,padding:"80px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px"}}>
          <div style={{textAlign:"center",marginBottom:48}}>
            <div className="section-divider" style={{margin:"0 auto 16px"}}/>
            <h2 className="serif" style={{fontSize:"clamp(1.8rem,3vw,2.4rem)",color:C.forest,marginBottom:12}}>Our Product Range</h2>
            <p style={{color:C.muted,fontSize:15,maxWidth:500,margin:"0 auto"}}>
              From farm to global market — explore our comprehensive export portfolio
            </p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",gap:20}}>
            {PRODUCTS.map(p => (
              <div key={p.id} className="card-hover" onClick={() => { setPage("products"); window.scrollTo(0,0); }}
                style={{
                  background:C.white,borderRadius:16,padding:28,cursor:"pointer",
                  boxShadow:"0 2px 16px rgba(0,0,0,.06)",
                  borderTop:`4px solid ${p.color}`,
                }}>
               <img 
               src={p.image} 
               alt={p.category}
               style={{
                width: 160,
               height: 160,
               objectFit: "cover",
               borderRadius: 16,
               boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
               marginBottom: 12,
               transition: "transform 0.3s ease"
  }}
               onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
               onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
/>
                <div className="serif" style={{fontSize:16,fontWeight:600,color:C.forest,marginBottom:6}}>{p.category}</div>
                <div style={{color:C.muted,fontSize:13}}>{p.items.length} product{p.items.length!==1?"s":""}</div>
                <div style={{marginTop:16,fontSize:12,color:p.color,fontWeight:600,letterSpacing:.5}}>Explore →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section style={{background:`linear-gradient(135deg,${C.forest},#0f2419)`,padding:"72px 24px",textAlign:"center"}}>
        <h2 className="serif" style={{fontSize:"clamp(1.6rem,3vw,2.4rem)",color:"#fff",marginBottom:16}}>
          Ready to Source Products?
        </h2>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:16,marginBottom:32,maxWidth:480,margin:"0 auto 32px"}}>
          Connect with us today and let's build a long-term partnership rooted in quality and trust.
        </p>
        <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0,0); }}
          style={{padding:"15px 40px",borderRadius:28,fontSize:15}}>
          Get in Touch →
        </button>
      </section>

      <style>{`
        @media(max-width:768px){.grid-responsive{grid-template-columns:1fr !important}}
      `}</style>
    </div>
  );
}

/* ─── ABOUT PAGE ─────────────────────────────────────────────────── */
function AboutPage() {
  return (
    <div style={{paddingTop:80}}>
      {/* Header */}
      <section style={{
        background:`linear-gradient(160deg,${C.forest} 0%,#0f2419 100%)`,
        padding:"80px 24px 60px",textAlign:"center",
      }}>
        <div className="section-divider" style={{margin:"0 auto 16px"}}/>
        <h1 className="serif" style={{fontSize:"clamp(2rem,3vw,2rem)",color:"#fff",marginBottom:16}}>APB Global commodity and outsourcing</h1>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:16,maxWidth:560,margin:"0 auto"}}>
          Your Reliable Partner In Domestic & International Trade
        </p>
      </section>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"64px 24px"}}>
        {/* About */}
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:56,marginBottom:64,alignItems:"start"}} className="grid-responsive">
          <div>
            <h2 className="serif" style={{fontSize:"1.8rem",color:C.forest,marginBottom:16}}>Who We Are</h2>
            <div className="section-divider"/>
            <p style={{color:C.muted,lineHeight:1.85,fontSize:16, textAlign: "left"}}>
              APB Global Commodity & Outsourcing is a premier export-oriented trading firm specialising in the global sourcing and supply of high-quality commodities and industrial products. Headquartered in India, the company is strategically positioned to connect international markets with reliable and competitively sourced goods.
              Our diverse portfolio includes agro products, chemicals, metals, leather goods, and minerals, carefully curated to meet the stringent quality and compliance standards of global buyers. We work closely with vetted manufacturers and suppliers to ensure consistency, traceability, and excellence across every shipment.
              With a strong focus on international trade, APB Global Commodity & Outsourcing offers end-to-end export solutions—from procurement and quality control to logistics and documentation—ensuring a seamless and efficient supply chain experience. Our operational expertise and market insight allow us to adapt swiftly to evolving global demands while maintaining cost efficiency and delivery reliability.
            We are committed to building long-term partnerships based on trust, integrity, and performance. By combining global reach with local expertise, APB Global Commodity & Outsourcing serves as a dependable partner for businesses seeking premium-quality exports from India.
            </p>
            
          </div>
          <div style={{background:C.sand,borderRadius:20,padding:32}}>
            <div style={{fontSize:40,marginBottom:16}}>🏢</div>
            <div style={{fontSize:13,color:C.muted,marginBottom:20,fontWeight:500,letterSpacing:1,textTransform:"uppercase"}}>Corporate Details</div>
            {[
              ["Company","APB Global Commodity and Outsourcing"],
              ["Incorporated","2017"],
              ["Reg. No","PV00323236"],
              ["GST","08ASBPD0759L1ZP"],
              ["VAT","179766353-2525"],
              ["Country","India"],
            ].map(([k,v]) => (
              <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"8px 0",borderBottom:`1px solid rgba(0,0,0,.07)`,fontSize:14}}>
                <span style={{color:C.muted,fontWeight:500}}>{k}</span>
                <span style={{color:C.ink,fontWeight:600,textAlign:"right",maxWidth:"55%"}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,marginBottom:64, textAlign: "left"}} className="grid-responsive">
          {[
            { icon:"🔭",title:"Our Vision",color:C.leaf,
              text:"To establish APB Global Commodity & Outsourcing as a distinguished global powerhouse in commodity trading—synonymous with prestige, reliability, and innovation. We envision shaping the future of international trade by setting elite benchmarks in quality, sustainability, and strategic sourcing while building a legacy of trust across global markets."},
            { icon:"🎯",title:"Our Mission",color:C.amber,
              text:"To curate and deliver world-class commodities through a refined global network built on trust, precision, and excellence. APB Global Commodity & Outsourcing is dedicated to sourcing and supplying premium agro products, metals, chemicals, leather goods, and minerals with uncompromising quality standards, fostering enduring partnerships and enabling seamless international trade."},
          ].map(item => (
            <div key={item.title} style={{
              background:C.white,borderRadius:20,padding:36,
              boxShadow:"0 4px 24px rgba(0,0,0,.08)",
              borderLeft:`5px solid ${item.color}`,
            }}>
              <div style={{fontSize:36,marginBottom:16}}>{item.icon}</div>
              <h3 className="serif" style={{fontSize:"1.5rem",color:C.forest,marginBottom:12}}>{item.title}</h3>
              <p style={{color:C.muted,lineHeight:1.8,fontSize:15}}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Founder */}
        <div style={{background:`linear-gradient(135deg,${C.forest},#1a4a2e)`,borderRadius:24,padding:48,marginBottom:48,color:"#fff"}}>
          <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:32,alignItems:"center"}} className="grid-responsive">
            <div style={{
              width:100,height:100,borderRadius:"50%",
              background:`linear-gradient(135deg,${C.sage},${C.amber})`,
              display:"flex",alignItems:"center",justifyContent:"center",
              fontSize:48,flexShrink:0,
            }}>👩‍💼</div>
            <div>
              <div style={{color:C.sage,fontSize:13,letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Visionary Founder</div>
              <h3 className="serif" style={{fontSize:"1.6rem",color:"#fff",marginBottom:4}}>Abhishek Chouhan</h3>
              <div style={{color:"rgba(255,255,255,.55)",fontSize:14,marginBottom:16}}>Founder/Managing Director</div>
              <p style={{color:"rgba(255,255,255,.75)",lineHeight:1.8,fontSize:15,fontStyle:"italic"}}>
                "I firmly believe that sustainable growth comes from integrity, discipline, and a relentless pursuit of excellence. With the continued support of our partners and clients, we are confident in our vision to create a lasting global impact."
              </p>
            </div>
          </div>
        </div>

        {/* Business Partner
        <div style={{background:C.sand,borderRadius:20,padding:36,border:`1px solid rgba(45,106,79,.15)`}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:20}}>
            <div style={{fontSize:28}}>🇬🇧</div>
            <h3 className="serif" style={{fontSize:"1.4rem",color:C.forest}}>Our Business Partner — Ananda TM Ltd</h3>
          </div>
          <p style={{color:C.muted,lineHeight:1.8,fontSize:15,marginBottom:20}}>
            We are proud to collaborate with Ananda TM Ltd, our trusted business partner based in the United Kingdom. Through this partnership, customers in the UK and Europe can conveniently access the full range of products offered by Global Edge Traders. Our collaboration ensures better accessibility, faster delivery, and reliable service for international clients, while maintaining the same high quality standards and competitive pricing.
          </p>
          <div style={{display:"flex",gap:24,flexWrap:"wrap"}}>
            {[
              ["📍","15 Sector, Chopasni Housing Board, Jodhpur, Rajasthan 324001"],
              ["📞","+91-9950694181,7014762083"],
              ["✉️","ajithdharmapala@yahoo.co.uk"],
            ].map(([ic,val]) => (
              <div key={val} style={{display:"flex",alignItems:"center",gap:8,fontSize:14,color:C.ink}}>
                <span>{ic}</span><span>{val}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      <style>{`@media(max-width:768px){.grid-responsive{grid-template-columns:1fr !important}}`}</style>
    </div>
  );
}

/* ─── PRODUCTS PAGE ──────────────────────────────────────────────── */
function ProductCard({ item, color }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: C.white,
      borderRadius: 16,
      padding: 16,
      boxShadow: "0 4px 20px rgba(0,0,0,.08)",
      border: "1px solid rgba(0,0,0,.05)",
      transition: "all 0.35s ease",
      cursor: "pointer",
      overflow: "hidden"
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-8px)";
      e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
    }}
    >

      {/* 🔥 IMAGE ADD */}
      {item.image && (
        <div style={{
          overflow: "hidden",
          borderRadius: 12,
          marginBottom: 12
        }}>
          <img 
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: 210,
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
        </div>
      )}

      {/* TEXT */}
      <h4 style={{
        fontSize: 15,
        fontWeight: 700,
        color: C.forest,
        marginBottom: 6
      }}>
        {item.name}
      </h4>

      <p style={{
        fontSize: 13,
        color: C.muted,
        lineHeight: 1.6,
        marginBottom: item.specs ? "10px" : "0"
      }}>
        {item.desc}
      </p>

      {item.specs && (
        <div style={{marginTop:8}}>
          {item.specs.map(s => (
            <span key={s} className="spec-tag">{s}</span>
          ))}
        </div>
      )}

    </div>
  );
}

function ProductsPage({ setPage }) {
  useEffect(() => {
  const category = localStorage.getItem("activeCategory");

  if (category) {
    setTimeout(() => {
      const el = document.getElementById(category);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        window.scrollBy(0, -80);
      }
    }, 300);

    localStorage.removeItem("activeCategory");
  }
}, []);
  const [active, setActive] = useState("all");

  const displayed = active === "all" ? PRODUCTS : PRODUCTS.filter(p => p.id === active);

  return (
    <div style={{paddingTop:80}}>
      <section style={{
        background:`linear-gradient(160deg,${C.forest},#0f2419)`,
        padding:"80px 24px 60px",textAlign:"center",
      }}>
        <div className="section-divider" style={{margin:"0 auto 16px"}}/>
        <h1 className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",marginBottom:12}}>Our Products</h1>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:16,maxWidth:520,margin:"0 auto"}}>
          Premium agricultural and consumer goods for global markets
        </p>
      </section>

      {/* Filter tabs */}
      <div style={{background:C.white,borderBottom:`1px solid ${C.sand}`,position:"sticky",top:68,zIndex:100,overflowX:"auto"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",gap:4,padding:"12px 24px"}}>
          <button onClick={() => setActive("all")}
            style={{
              padding:"8px 16px",borderRadius:20,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,whiteSpace:"nowrap",
              background:active==="all"?C.forest:"transparent",
              color:active==="all"?"#fff":C.muted,
              transition:"all .2s",
            }}>All</button>
          {PRODUCTS.map(p => (
            <button key={p.id} onClick={() => setActive(p.id)}
              style={{
                padding:"8px 16px",borderRadius:20,border:"none",cursor:"pointer",fontSize:13,fontWeight:600,whiteSpace:"nowrap",
                background:active===p.id?p.color:"transparent",
                color:active===p.id?"#fff":C.muted,
                transition:"all .2s",
              }}>
              {p.emoji} {p.category}
            </button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1200,margin:"0 auto",padding:"48px 24px"}}>
        {displayed.map(cat => (
          <div key={cat.id} id={cat.id} style={{marginBottom:64}}>
            <div style={{display:"flex",alignItems:"center",gap:16,marginBottom:28}}>
         <img
             src={cat.image}
             alt={cat.category}
             style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }}
/>
              <div>
                <h2 className="serif" style={{fontSize:"1.6rem",color:C.forest}}>{cat.category}</h2>
                <div style={{width:40,height:3,background:cat.color,borderRadius:2,marginTop:4}}/>
              </div>
              <div style={{marginLeft:"auto",
                background:cat.bgColor,color:cat.color,
                padding:"4px 14px",borderRadius:20,fontSize:13,fontWeight:600,
              }}>
                {cat.items.length} product{cat.items.length!==1?"s":""}
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:16}}>
              {cat.items.map((item,i) => <ProductCard key={i} item={item} color={cat.color}/>)}
            </div>
            <div style={{marginTop:20,textAlign:"right"}}>
              <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0,0); }}
                style={{padding:"10px 24px",borderRadius:20,fontSize:13}}>
                Inquire About {cat.category} →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── WHY US PAGE ────────────────────────────────────────────────── */
function WhyUsPage({ setPage }) {
  return (
    <div style={{paddingTop:80}}>
      <section style={{
        background:`linear-gradient(160deg,${C.forest},#0f2419)`,
        padding:"80px 24px 60px",textAlign:"center",
      }}>
        <div className="section-divider" style={{margin:"0 auto 16px"}}/>
        <h1 className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",marginBottom:12}}>Why Choose Us?</h1>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:16,maxWidth:520,margin:"0 auto"}}>
          Delivering agro products, metals, chemicals, leather goods, and minerals to international markets with trust and precision.
        </p>
      </section>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"64px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:28,marginBottom:64}}>
          {WHY_US.map((item,i) => (
            <div key={i} className="card-hover" style={{
              background:C.white,borderRadius:20,padding:36,
              boxShadow:"0 4px 24px rgba(0,0,0,.07)",
            }}>
              {/* <div style={{
                width:60,height:60,borderRadius:16,
                background:C.sand,
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:28,marginBottom:20,
              }}>
              {item.icon}</div> */}

              <div style={{
                      width:60,
                      height:60,
                      borderRadius:16,
                      background:C.sand,
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      fontSize:28,
                      marginBottom:20,
                      margin: "0 auto 20px" 
                         }}>
                      {item.icon}
                    </div>
              <h3 className="serif" style={{fontSize:"1.2rem",color:C.forest,marginBottom:10}}>{item.title}</h3>
              <p style={{color:C.muted,lineHeight:1.75,fontSize:15}}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background:`linear-gradient(135deg,${C.forest},#1a4a2e)`,
          borderRadius:24,padding:"48px 40px",
          textAlign:"center",color:"#fff",
        }}>
          <h2 className="serif" style={{fontSize:"2rem",marginBottom:16, color:"#fdf8f0"}}>Ready to Partner With Us?</h2>
          <p style={{color:"rgba(255,255,255,.65)",fontSize:16,marginBottom:28,maxWidth:460,margin:"0 auto 28px"}}>
            Join hundreds of global buyers who trust us for premium agricultural exports.
          </p>
          <button className="btn-primary" onClick={() => { setPage("contact"); window.scrollTo(0,0); }}
            style={{padding:"14px 36px",borderRadius:28,fontSize:15}}>
            Send an Inquiry →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────────────────── */
function ContactPage() {
  const [form, setForm] = useState({ name:"",email:"",phone:"",product:"",message:"" });
  const [sent, setSent] = useState(false);

  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in Name, Email and Message.");
      return;
    }
    console.log("Inquiry submitted:", form);
    setSent(true);
  };

  const inputStyle = {
    width:"100%",padding:"13px 16px",borderRadius:10,
    border:`1.5px solid #e0e0e0`,fontSize:14,
    fontFamily:"'DM Sans',sans-serif",background:"#fff",color:C.ink,
  };

  return (
    <div style={{paddingTop:80}}>
      <section style={{
        background:`linear-gradient(160deg,${C.forest},#0f2419)`,
        padding:"80px 24px 60px",textAlign:"center",
      }}>
        <div className="section-divider" style={{margin:"0 auto 16px"}}/>
        <h1 className="serif" style={{fontSize:"clamp(2rem,4vw,3rem)",color:"#fff",marginBottom:12}}>Contact & Inquiries</h1>
        <p style={{color:"rgba(255,255,255,.65)",fontSize:16,maxWidth:520,margin:"0 auto"}}>
          Reach out to us — we respond to every serious inquiry within 24 hours
        </p>
      </section>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"64px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"5fr 4fr",gap:48,alignItems:"start"}} className="grid-responsive">
          {/* Form */}
          <div style={{background:C.white,borderRadius:20,padding:40,boxShadow:"0 4px 32px rgba(0,0,0,.09)"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"40px 0"}}>
                <div style={{fontSize:64,marginBottom:16}}>✅</div>
                <h3 className="serif" style={{fontSize:"1.6rem",color:C.forest,marginBottom:12}}>Inquiry Sent!</h3>
                <p style={{color:C.muted,lineHeight:1.7}}>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSent(false)} style={{marginTop:24,padding:"12px 28px",borderRadius:24,fontSize:14}}>
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="serif" style={{fontSize:"1.5rem",color:C.forest,marginBottom:6}}>Send an Inquiry</h2>
                <div className="section-divider"/>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}} className="grid-responsive">
                  <div>
                    <label style={{display:"block",fontSize:13,fontWeight:600,color:C.ink,marginBottom:6}}>Full Name *</label>
                    <input style={inputStyle} placeholder="Your name" value={form.name} onChange={update("name")}/>
                  </div>
                  <div>
                    <label style={{display:"block",fontSize:13,fontWeight:600,color:C.ink,marginBottom:6}}>Email Address *</label>
                    <input style={inputStyle} type="email" placeholder="your@email.com" value={form.email} onChange={update("email")}/>
                  </div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16}} className="grid-responsive">
                  <div>
                    <label style={{display:"block",fontSize:13,fontWeight:600,color:C.ink,marginBottom:6}}>Phone Number</label>
                    <input style={inputStyle} placeholder="+1 234 567 890" value={form.phone} onChange={update("phone")}/>
                  </div>
                  <div>
                    <label style={{display:"block",fontSize:13,fontWeight:600,color:C.ink,marginBottom:6}}>Product of Interest</label>
                    <select style={{...inputStyle}} value={form.product} onChange={update("product")}>
                      <option value="">— Select a category —</option>
                      {PRODUCTS.map(p => <option key={p.id} value={p.category}>{p.emoji} {p.category}</option>)}
                      <option value="Multiple">Multiple Products</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                <div style={{marginBottom:24}}>
                  <label style={{display:"block",fontSize:13,fontWeight:600,color:C.ink,marginBottom:6}}>Message *</label>
                  <textarea style={{...inputStyle,height:130,resize:"vertical"}}
                    placeholder="Tell us about your requirements — quantities, target market, delivery timeline..."
                    value={form.message} onChange={update("message")}/>
                </div>
                <button className="btn-primary" onClick={submit}
                  style={{width:"100%",padding:"15px",borderRadius:12,fontSize:15,letterSpacing:.5}}>
                  Submit Inquiry →
                </button>
                <p style={{color:C.muted,fontSize:12,textAlign:"center",marginTop:12}}>
                  We respect your privacy. Your information will never be shared.
                </p>
              </>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h3 className="serif" style={{fontSize:"1.3rem",color:C.forest,marginBottom:6}}>Contact Information</h3>
            <div className="section-divider"/>
            <div style={{marginBottom:32}}>
              {[
                { icon:"📍",label:"Address",val:"15 Sector, Chopasni Housing Board, Jodhpur, Rajasthan 324001" },
                { icon:"📞",label:"Phone",val:"+91 99506-94181 , 70147-62083" },
                { icon:"✉️",label:"Email",val:"info@globaledgetraders.top" },
                { icon:"🌐",label:"Website",val:"https://globaledgetraders.top" },
              ].map(item => (
                <div key={item.label} style={{display:"flex",gap:14,marginBottom:20}}>
                  <div style={{
                    width:40,height:40,borderRadius:10,background:C.sand,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:18,flexShrink:0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{fontSize:12,color:C.muted,fontWeight:600,letterSpacing:.5,textTransform:"uppercase",marginBottom:2}}>{item.label}</div>
                    <div style={{fontSize:14,color:C.ink,lineHeight:1.5}}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* UK Partner */}
            {/* <div style={{background:C.sand,borderRadius:16,padding:24}}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
                <span style={{fontSize:22}}>🇬🇧</span>
                <h4 className="serif" style={{fontSize:"1rem",color:C.forest}}>UK Partner — Ananda TM Ltd</h4>
              </div>
              {[
                { icon:"📍",val:"11, Cromarty, Ipswich, IP4 3EU, UK" },
                { icon:"📞",val:"+44 7361 556886" },
                { icon:"✉️",val:"ajithdharmapala@yahoo.co.uk" },
              ].map(item => (
                <div key={item.val} style={{display:"flex",gap:10,marginBottom:10,fontSize:13,color:C.ink}}>
                  <span>{item.icon}</span><span>{item.val}</span>
                </div>
              ))}
            </div> */}

            {/* WhatsApp */}
            <a href="https://wa.me/7014762083?text=Hello%20Global%20Edge%20Traders%2C%20I%20am%20interested%20in%20your%20products."
              target="_blank" rel="noopener noreferrer"
              style={{
                display:"flex",alignItems:"center",gap:12,marginTop:20,
                background:"#25d366",color:"#fff",
                padding:"14px 20px",borderRadius:12,textDecoration:"none",
                fontWeight:600,fontSize:14,
                transition:"all .3s",
              }}
              onMouseEnter={e => e.currentTarget.style.background="#1ebe5d"}
              onMouseLeave={e => e.currentTarget.style.background="#25d366"}>
              <span style={{fontSize:22}}>💬</span>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){.grid-responsive{grid-template-columns:1fr !important}}`}</style>
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────────── */
function Footer({ setPage }) {
  return (
    <footer style={{background:C.forest,color:"rgba(255,255,255,.75)",padding:"56px 24px 32px" }}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1.5fr",gap:40,marginBottom:48,}} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
              {/* <div style={{
                width:40,height:40,borderRadius:"50%",
                background:`linear-gradient(135deg,${C.sage},${C.amber})`,
                display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,
                image: APBLogoImg,
              }}>🌿</div> */}
              
              <div style={{
  width:40,
  height:40,
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  overflow:"hidden"
}}>
  <img
    src={APBLogoImg}
    alt="Logo"
    style={{
      width:"100%",
      height:"100%",
      objectFit:"cover",
      borderRadius:"20%"
    }}
  />
</div>
              
              <div>
                <div className="serif" style={{color:"#fff",fontSize:16,fontWeight:700,lineHeight:1.1}}>APB Global</div>
              </div>
            </div>
            <p style={{fontSize:14,lineHeight:1.7,marginBottom:16,maxWidth:280, textAlign: "left" }}>
              From the Soil to the Ocean — Freshness Knows No Bounds. Your reliable partner in international agricultural trade.
            </p>
            <div style={{display:"flex",gap:12}}>
              {["🌿","🥥","🌶️"].map((e,i) => (
                <div key={i} style={{
                  width:36,height:36,borderRadius:8,
                  background:"rgba(255,255,255,.08)",
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,
                }}>{e}</div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{color:"#fff",fontWeight:700,fontSize:14,marginBottom:16,letterSpacing:.5,textTransform:"uppercase",}}>Navigate</h4>
            {["home","about","products","whyus","contact"].map(id => (
              <div key={id} style={{marginBottom:10, textAlign: "left" }}>
                <button onClick={() => { setPage(id); window.scrollTo(0,0); }}
                  style={{background:"none",border:"none",color:"rgba(255,255,255,.65)",cursor:"pointer",fontSize:14,padding:0,textTransform:"capitalize",
                    transition:"color .2s"}}
                  onMouseEnter={e => e.target.style.color=C.sage}
                  onMouseLeave={e => e.target.style.color="rgba(255,255,255,.65)"}>
                  {id === "whyus" ? "Why Choose Us" : id.charAt(0).toUpperCase()+id.slice(1)}
                </button>
              </div>
            ))}
          </div>

          {/* Products */}
          <div>
            <h4 style={{color:"#fff",fontWeight:700,fontSize:14,marginBottom:16,letterSpacing:.5,textTransform:"uppercase",}}>Products</h4>
            {PRODUCTS.map(p => (
              <div key={p.id} style={{marginBottom:10,fontSize:14,color:"rgba(255,255,255,.65)", textAlign: "left" }}>
                {p.emoji} {p.category}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{color:"#fff",fontWeight:700,fontSize:14,marginBottom:16,letterSpacing:.5,textTransform:"uppercase"}}>Get in Touch</h4>
            {[
              ["📍","15 Sector, Chopasni Housing Board, Jodhpur, Rajasthan 324001"],
              ["📞","+91 99506-94181 , 70147-62083"],
              ["✉️","info@globaledgetraders.top"],
              ["🌐","globaledgetraders.top"],
            ].map(([ic,val]) => (
              <div key={val} style={{display:"flex",gap:10,marginBottom:12,fontSize:14, textAlign: "left" }}>
                <span>{ic}</span><span style={{color:"rgba(255,255,255,.65)" }}>{val}</span>
              </div>
            ))}
            {/* <div style={{marginTop:16,paddingTop:16,borderTop:"1px solid rgba(255,255,255,.1)", textAlign: "left" }}>
              <div style={{fontSize:12,color:C.sage,fontWeight:600,marginBottom:8}}>🇬🇧 UK PARTNER</div>
              <div style={{fontSize:13,color:"rgba(255,255,255,.55)"}}>Ananda TM Ltd, Ipswich, UK</div>
            </div> */}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <div style={{fontSize:13,color:"rgba(255,255,255,.4)"}}>
            © 2026 APB Global (Pvt) Ltd. All rights reserved.
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr !important}}
        @media(max-width:600px){.footer-grid{grid-template-columns:1fr !important}}
      `}</style>
    </footer>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    // Inject global styles
    const style = document.createElement("style");
    style.textContent = STYLE;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const renderPage = () => {
    switch(page) {
      case "home":    return <HomePage setPage={setPage}/>;
      case "about":   return <AboutPage/>;
      case "products":return <ProductsPage setPage={setPage}/>;
      case "whyus":   return <WhyUsPage setPage={setPage}/>;
      case "contact": return <ContactPage/>;
      default:        return <HomePage setPage={setPage}/>;
    }
  };

  return (
    <div className="grain">
      <Navbar page={page} setPage={setPage}/>
      <main>{renderPage()}</main>
      <Footer setPage={setPage}/>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/9950694181?text=Hello%20Global%20Edge%20Traders%2C%20I%20am%20interested%20in%20your%20products."
        target="_blank" rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

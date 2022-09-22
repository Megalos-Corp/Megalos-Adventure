
onEvent('item.tags', event => {
    //Tag for rope ingredient
    event.add('mgls:rope', ['farmersdelight:straw', 'supplementaries:flax', 'druidcraftrg:hemp'])
    // Remove for supplementaries tag hidden rope 
    event.remove('supplementaries:ropes', ['druidcraftrg:rope', 'supplementaries:rope', 'quark:rope'])
    //Tag for unified hide
    event.add('forge:leather', ['minecraft:rabbit_hide', 'cnb:yeti_hide'])
    //Add Milk bottle of Neapolitan to forge:milk/milk_bottle tag
    event.add('forge:milk/milk_bottle', 'neapolitan:milk_bottle')
    event.add('forge:rollmatout/bottle_foods', 'neapolitan:milk_bottle')
    // Season tags for seeds
    event.add('sereneseasons:spring_crops', ['neapolitan:strawberry_pips', 'farmersrespite:tea_seeds', 'chococraft:gysahl_green_seeds', 'supplementaries:flax_seeds', 'alcocraft:hop_seeds'])
    event.add( 'sereneseasons:autumn_crops', ['chococraft:gysahl_green_seeds', 'supplementaries:flax_seeds'])
    event.add('sereneseasons:summer_crops', ['neapolitan:strawberry_pips', 'farmersrespite:tea_seeds', 'druidcraftrg:hemp_seeds', 'chococraft:gysahl_green_seeds'])
    event.add('sereneseasons:winter_crops', ['minecraft:pumpkin_seeds'])
    // Tag for Immovable blocks
    event.add('forge:immovable', 'minecraft:spawner')
    //
    event.add('mgls:deepslate', ['minecraft:deepslate', 'create:cut_deepslate', 'create:polished_cut_deepslate'])
    //Tag for selected scorchia blocks.
    event.add('mgls:scorchia', ['create:scorchia', 'create:polished_cut_scorchia', 'create:cut_scorchia'])
    //Tag for selected andesite blocks.
    event.add('mgls:andesite', ['minecraft:andesite', 'minecraft:polished_andesite', 'create:polished_cut_andesite', 'create:cut_andesite'])
    // Add zinc sheet in forge plate tag
    event.add('forge:plates/zinc', 'createdeco:zinc_sheet')
    //Add leather chocobo in forge leather tag
    event.add('forge:feathers', 'chococraft:chocobo_feather')
    //Create woodland fruits tag
    event.add('mgls:woodland_fruits', ['neapolitan:strawberries', 'minecraft:sweet_berries'])
    //add forge seeds
    event.add('forge:seeds', ['farmersrespite:tea_seeds', 'chococraft:gysahl_green_seeds'])
    //add items to cookie Jar
    event.add('supplementaries:cookies', ['neapolitan:strawberry_scones'])
    // Add Drinks tags
    event.add('toughasnails:drinks', ['twilightdelight:phytochemical_juice', 'twilightdelight:torchberry_juice', 'create:builders_tea', 'farmersrespite:green_tea', 'farmersrespite:yellow_tea', 'farmersrespite:black_tea', 'farmersrespite:rose_hip_tea', 'farmersrespite:dandelion_tea', 'farmersrespite:purulent_tea', 'twilightdelight:thorn_rose_tea', 'delightful:lavender_tea', 'wildberries:sweet_berry_jam', 'wildberries:blueberry_jam', 'wildberries:blackberry_jam', 'wildberries:cranberry_jam', 'wildberries:raspberry_jam', 'delightful:jelly_bottle', 'delightful:glow_jelly_bottle', 'farmersdelight:hot_cocoa', 'farmersrespite:coffee', 'minecraft:honey_bottle', 'neapolitan:strawberry_banana_smoothie', 'neapolitan:mint_milkshake', 'neapolitan:adzuki_milkshake', 'neapolitan:banana_milkshake', 'neapolitan:chocolate_milkshake', 'neapolitan:vanilla_milkshake', 'neapolitan:strawberry_milkshake', 'alcocraft:spruce_mug_sun_pale_ale', 'alcocraft:spruce_mug_digger_bitter', 'alcocraft:spruce_mug_nether_porter', 'alcocraft:spruce_mug_wither_stout', 'alcocraft:spruce_mug_magnet_pilsner', 'alcocraft:spruce_mug_drowned_ale', 'alcocraft:spruce_mug_night_rauch', 'alcocraft:spruce_mug_ice_beer', 'alcocraft:spruce_mug_kvass', 'alcocraft:spruce_mug_leprechaun_cider', 'alcocraft:spruce_mug_chorus_ale', 'alcocraft:spruce_mug_nether_star_lager'])
    //thirst Tags
    event.add('toughasnails:thirst/10_thirst_drinks', ['farmersdelight:hot_cocoa', 'farmersrespite:coffee'])
    event.add('toughasnails:thirst/8_thirst_drinks', ['twilightdelight:phytochemical_juice', 'twilightdelight:torchberry_juice'])
    event.add('toughasnails:thirst/7_thirst_drinks', ['create:builders_tea', 'farmersrespite:green_tea', 'farmersrespite:yellow_tea', 'farmersrespite:black_tea', 'farmersrespite:rose_hip_tea', 'farmersrespite:dandelion_tea', 'farmersrespite:purulent_tea', 'twilightdelight:thorn_rose_tea', 'delightful:lavender_tea', 'neapolitan:strawberry_banana_smoothie', 'neapolitan:mint_milkshake', 'neapolitan:adzuki_milkshake', 'neapolitan:banana_milkshake', 'neapolitan:chocolate_milkshake', 'neapolitan:vanilla_milkshake', 'neapolitan:strawberry_milkshake'])
    event.add('toughasnails:thirst/6_thirst_drinks', ['wildberries:sweet_berry_jam', 'wildberries:blueberry_jam', 'wildberries:blackberry_jam', 'wildberries:cranberry_jam', 'wildberries:raspberry_jam', 'delightful:jelly_bottle', 'delightful:glow_jelly_bottle', 'minecraft:honey_bottle', 'alcocraft:spruce_mug_sun_pale_ale', 'alcocraft:spruce_mug_digger_bitter', 'alcocraft:spruce_mug_nether_porter', 'alcocraft:spruce_mug_wither_stout', 'alcocraft:spruce_mug_magnet_pilsner', 'alcocraft:spruce_mug_drowned_ale', 'alcocraft:spruce_mug_night_rauch', 'alcocraft:spruce_mug_ice_beer', 'alcocraft:spruce_mug_kvass', 'alcocraft:spruce_mug_leprechaun_cider', 'alcocraft:spruce_mug_chorus_ale', 'alcocraft:spruce_mug_nether_star_lager'])
    //Hydratation Tags
    event.add('toughasnails:hydration/80_hydration_drinks', ['twilightdelight:phytochemical_juice', 'twilightdelight:torchberry_juice'])
    event.add('toughasnails:hydration/60_hydration_drinks', ['create:builders_tea', 'farmersrespite:green_tea', 'farmersrespite:yellow_tea', 'farmersrespite:black_tea', 'farmersrespite:rose_hip_tea', 'farmersrespite:dandelion_tea', 'farmersrespite:purulent_tea', 'twilightdelight:thorn_rose_tea', 'delightful:lavender_tea', 'farmersdelight:hot_cocoa', 'neapolitan:strawberry_banana_smoothie', 'neapolitan:mint_milkshake', 'neapolitan:adzuki_milkshake', 'neapolitan:banana_milkshake', 'neapolitan:chocolate_milkshake', 'neapolitan:vanilla_milkshake', 'neapolitan:strawberry_milkshake'])
    event.add('toughasnails:hydration/30_hydration_drinks', ['wildberries:sweet_berry_jam', 'wildberries:blueberry_jam', 'wildberries:blackberry_jam', 'wildberries:cranberry_jam', 'wildberries:raspberry_jam', 'delightful:jelly_bottle', 'delightful:glow_jelly_bottle', ])
    event.add('toughasnails:hydration/20_hydration_drinks', ['farmersrespite:coffee', 'minecraft:honey_bottle'])
    event.add('toughasnails:hydration/10_hydration_drinks', ['alcocraft:spruce_mug_sun_pale_ale', 'alcocraft:spruce_mug_digger_bitter', 'alcocraft:spruce_mug_nether_porter', 'alcocraft:spruce_mug_wither_stout', 'alcocraft:spruce_mug_magnet_pilsner', 'alcocraft:spruce_mug_drowned_ale', 'alcocraft:spruce_mug_night_rauch', 'alcocraft:spruce_mug_ice_beer', 'alcocraft:spruce_mug_kvass', 'alcocraft:spruce_mug_leprechaun_cider', 'alcocraft:spruce_mug_chorus_ale', 'alcocraft:spruce_mug_nether_star_lager'])
  })
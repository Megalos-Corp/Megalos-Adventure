
onEvent('item.tags', event => {
    //Tag for rope ingredient
    event.add('mgls:rope', ['farmersdelight:straw', 'supplementaries:flax', 'druidcraftrg:hemp'])
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
    event.add('forge:seeds', ['farmersrespite:tea_seeds', 'chococraft:gysahl_green_seeds', 'alcocraft:hop_seeds', 'druidcraftrg:hemp_seeds', '#dynamictrees:seeds'])
    //add items to cookie Jar
    event.add('supplementaries:cookies', ['neapolitan:strawberry_scones'])
    //add purified water to forge:water tag
    event.add('forge:water', 'kubejs:purified_water_bucket')
    //Add spatula to knife tag and harvestable tag
    event.add('forge:tools/knives', 'megalos_adventure:spatula')
    //Add Spatula to harvestable tools for overweight farming
    event.add('overweight_farming:overweight_harvestables', 'megalos_adventure:spatula')
    event.add('forge:stripped_logs', 'atmospheric:stripped_rosewood_log', 'atmospheric:stripped_morado_log', 'atmospheric:stripped_kousa_log', 'atmospheric:stripped_aspen_log', 'atmospheric:stripped_grimwood_log', 'atmospheric:stripped_yucca_log', 'upgrade_aquatic:stripped_driftwood_log', 'upgrade_aquatic:stripped_river_log')
    event.add('forge:stripped_wood', 'upgrade_aquatic:stripped_driftwood', 'upgrade_aquatic:stripped_river_wood', 'atmospheric:stripped_rosewood', 'atmospheric:stripped_morado_wood', 'atmospheric:stripped_morado_wood', 'atmospheric:stripped_kousa_wood', 'atmospheric:stripped_aspen_wood', 'atmospheric:stripped_grimwood', 'atmospheric:stripped_yucca_wood')
    // add tag for spools
    event.add('mgls:spools', 'createaddition:copper_spool', 'createaddition:gold_spool')
  })

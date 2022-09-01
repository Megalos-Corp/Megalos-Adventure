//ITEM TAGS
onEvent('item.tags', event => {

    //Create Tag for rope ingredient
    event.add('mgls:rope', ['farmersdelight:straw', 'supplementaries:flax', 'druidcraftrg:hemp'])
    // Remove hidden rope for supplementaries tag
    event.remove('supplementaries:ropes', ['druidcraftrg:rope', 'supplementaries:rope', 'quark:rope'])
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
  })
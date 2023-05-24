//Remove Uncrafting Table
  onEvent('jei.remove.categories', event => {
    event.remove('twilightforest:uncrafting')
  })
// Cacher des items dans JEI
onEvent('jei.hide.items', event => {
    // Remove Kubejs item
    event.hide([
        'kubejs:dummy_fluid_item'
        ])
    // Remove duplicated rope
    event.hide([
        'supplementaries:rope',
        'quark:rope'
    ])
    // Remove create dough
    event.hide([
        'create:dough'
    ])
    // Remove supplementaries firefly jar for dupli
    event.hide([
        'supplementaries:firefly_jar'
    ])
    // Suppression des objets désactivés de Quark
    event.hide([
        'quark:flamerang',
        'quark:pickarang',
        'quark:dragon_scale',
        'quark:chute',
        'quark:white_candle',
        'quark:orange_candle',
        'quark:magenta_candle',
        'quark:light_blue_candle',
        'quark:yellow_candle',
        'quark:lime_candle',
        'quark:pink_candle',
        'quark:gray_candle',
        'quark:light_gray_candle',
        'quark:cyan_candle',
        'quark:purple_candle',
        'quark:blue_candle',
        'quark:brown_candle',
        'quark:green_candle',
        'quark:red_candle',
        'quark:black_candle'
    ]) 
    //Hide supplementaries pancake
    event.hide([
        'supplementaries:pancake'
    ])
    //Hide duplicate Quark crates.
    event.hide([
        'quark:beetroot_crate',
        'quark:potato_crate',
        'quark:carrot_crate'
    ])
    //Hide zinc sheet of Create deco
    event.hide([
        'createdeco:zinc_sheet'
    ])
    //Hide usefulslime:slippery_slime_block
    event.hide([
        'usefulslime:slippery_slime_block'
    ])
    // Hide duplicate honey apple
    event.hide([
        'buzzier_bees:honey_apple'
    ])
    //hide all turtles of Computer Craft (not working)
    event.hide([
        'computercraft:turtle'
    ])
    // Hide tough as nails armor for temperature
    event.hide([
        '#toughasnails:heating_armor',
        '#toughasnails:cooling_armor'
    ])
    // hide neapolitan bar of chocolate
    event.hide([
        'neapolitan:chocolate_bar'
    ])
    //hide duplicate melon juice
    event.hide([
        'overweight_farming:melon_juice',
        'farmersdelight:melon_juice'
    ])
    //Hide Apple Cider
    event.hide([
        'farmersdelight:apple_cider'
    ])  
    //Hide Spout gun and radar
    event.hide([
        'create_things_and_misc:spout_gun',
        'create_things_and_misc:spout_gun_water',
        'create_things_and_misc:spout_gun_lava',
        'create_things_and_misc:spout_gun_chocolate',
        'create_things_and_misc:spout_gun_honey',
        'create_things_and_misc:spout_gun_slime',
        'create_things_and_misc:radar'
    ])
    //Hide Copper Scaffolding
    event.hide([
        'create_things_and_misc:copper_scaffolding'
    ])
    //Hide Thatch Mowzies Mobs
    event.hide([
        'mowziesmobs:thatch_block'
    ])
    // Hide pocket computer
    event.hide([
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced'
    ])
    //Hide uncraftable or wtf items of twilight forest
    event.hide([
        'twilightforest:cube_talisman',
        'twilightforest:cube_of_annihilation',
        'twilightforest:block_and_chain',
        'twilightforest:giant_sword',
        'twilightforest:giant_pickaxe'
    ])
    //Hide Create deco coins
    event.hide([
        'createdeco:zinc_coin',
        'createdeco:zinc_coinstack',
        'createdeco:copper_coin',
        'createdeco:copper_coinstack',
        'createdeco:brass_coin',
        'createdeco:brass_coinstack',
        'createdeco:iron_coin',
        'createdeco:iron_coinstack',
        'createdeco:gold_coin',
        'createdeco:gold_coinstack',
        'createdeco:netherite_coin',
        'createdeco:netherite_coinstack',
        'createdeco:cast_iron_coin',
        'createdeco:cast_iron_coinstack'
    ])
})
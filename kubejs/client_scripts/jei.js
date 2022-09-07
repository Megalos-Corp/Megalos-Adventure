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
    // Remove neptunium stuffs recipe
    event.hide([
        'aquaculture:neptunium_nugget',
        'aquaculture:neptunium_ingot',
        'aquaculture:neptunium_block',
        'aquaculture:neptunium_helmet',
        'aquaculture:neptunium_chestplate',
        'aquaculture:neptunium_leggings',
        'aquaculture:neptunium_boots',
        'aquaculture:neptunium_bow',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_fishing_rod',
        'aquaculture:neptunium_fillet_knife',
        'aquaculture:neptunes_bounty',
        ])
    // Suppression des objets désactivés de Quark
    event.hide([
        'quark:flamerang',
        'quark:pickarang',
        'quark:dragon_scale',
        'quark:chute',
        'quark:pipe',
        'quark:diamond_heart',
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
    //hide all turtles of Computer Craft
    event.hide([
        '#computercraft:turtle'
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
})
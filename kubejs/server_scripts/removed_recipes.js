onEvent('recipes', event => {
	// Change recipes here
	//suppression des recettes de la corde pour unifier les items. 
	event.remove({id: 'supplementaries:rope'})
	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'druidcraftrg:lead'})
	event.remove({id: 'druidcraftrg:rope'})
	// Suppression des craft de base du pain vanilla
	event.remove({id: 'quark:tweaks/crafting/utility/bent/bread'})
	event.remove({id: 'minecraft:bread'})
	event.remove({id: 'create:smelting/bread'})
	event.remove({id: 'create:smoking/bread'})
	//Unification de la pates à pain
	event.remove({id: 'farmersdelight:wheat_dough'})
	event.remove({id: 'create:crafting/appliances/dough'})
	event.remove({id: 'quark:tweaks/crafting/utility/bent/bread'})
	// Suppression du craft de base du riz
	event.remove({id: 'farmersdelight:rice'})
	// Suppression du firefly jar de supplementaries
	event.remove({id: 'supplementaries:firefly_jar_tf'})
	event.remove({id: 'supplementaries:firefly_jar'})
	//Remove supplementaries pancake
	event.remove({id: 'supplementaries:pancake'})
	//Remove buddycards card recipe with neptunium nuggets
	event.remove({id: 'buddycards:aquaculture/aquaculture_pack'})
	//Remove basic recipes for farmers delight juices
	event.remove({id: 'farmersdelight:melon_juice'})
	event.remove({id: 'farmersdelight:apple_cider'})
	//Remove duplicate Quark crates.
	event.remove({id: 'quark:building/crafting/compressed/beetroot_crate'})
	event.remove({id: 'quark:building/crafting/compressed/potato_crate'})
	event.remove({id: 'quark:building/crafting/compressed/carrot_crate'})
	event.remove({id: 'minecraft:pressing/zinc_sheet'})
	//Remove usefulslime:slippery_slime_block
	event.remove({id: 'usefulslime:slippery_slime_block'})
	//Remove juice recipe crafting with kettle
	event.remove({id: 'farmersrespite:brewing/melon_juice'})
	// Remove duplicate honey apple
	event.remove({id: 'buzzier_bees:honey/honey_apple'})
	// Remove turtles for Computer Craft
	event.remove({id: 'computercraft:turtle_normal'})
	event.remove({id: 'computercraft:impostor'})
	// Remove upgradable computer recipes
	event.remove({id: 'computercraft:computer_advanced_upgrade'})
	event.remove({id: 'computercraft:pocket_computer_advanced_upgrade'})
	event.remove({id: 'computercraft:pocket_computer_normal'})
	event.remove({id: 'computercraft:pocket_computer_normal_upgrade'})
	event.remove({id: 'computercraft:pocket_computer_advanced'})
	// Remove recipe for cake and add a recipe via createaddition base cake
	event.remove({id: 'farmersdelight:cake_from_milk_bottle'})
	event.remove({id: 'minecraft:cake'})
	event.remove({id: 'create:crafting/curiosities/cake'})
	event.remove({id: 'neapolitan:cake'})
	// Unificate chocolate create/neapolitan
	event.remove({id: 'neapolitan:chocolate/chocolate_bar'})
	// Unificate Melon Juice
	event.remove({id: 'sliceanddice:cooking/farmersdelight/cooking/melon_juice'})
	event.remove({id: 'toughasnails:melon_juice'})
	// Remove Spout Gun 
	event.remove({id: 'create_things_and_misc:spout_craft'})
	event.remove({id: 'create_things_and_misc:water_gun_c_raft'})
	event.remove({id: 'create_things_and_misc:spout_gun_lava'})
	event.remove({id: 'create_things_and_misc:copper_scaffolding_craft'})
	//Remove heated recipe for all juice
	event.remove({id: 'sliceanddice:cooking/toughasnails/cactus_juice'})
	event.remove({id: 'sliceanddice:cooking/toughasnails/sweet_berry_juice'})
	event.remove({id: 'sliceanddice:cooking/toughasnails/glow_berry_juice'})
	event.remove({id: 'sliceanddice:cooking/toughasnails/apple_juice'})
	event.remove({id: 'sliceanddice:cooking/toughasnails/chorus_fruit_juice'})
	event.remove({id: 'sliceanddice:cooking/toughasnails/pumpkin_juice'})
	//Remove basic recipe of Hot Cocoa
	event.remove({id: 'farmersdelight:cooking/hot_cocoa'})
	//Remove Apple cider recipe
	event.remove({id: 'farmersdelight:cooking/apple_cider'})
	event.remove({id: 'farmersrespite:brewing/apple_cider'})
	event.remove({id: 'farmersrespite:brewing/long_apple_cider'})
	event.remove({id: 'farmersrespite:brewing/strong_apple_cider'})
	//Remove thatch Mowzies Mobs
	event.remove({id: 'mowziesmobs:thatch_block'})
	//Remove block and chain of Twilight Forest
	event.remove({id: 'twilightforest:equipment/block_and_chain'})
	//Remove giant sword and pickaxe of Twilight Forest
	event.remove({id: 'twilightforest:equipment/giant_sword'})
	event.remove({id: 'twilightforest:equipment/giant_pickaxe'})
	//Remove cooking tea recipe
	event.remove({id: 'delightful:food/lavender_tea'})
})
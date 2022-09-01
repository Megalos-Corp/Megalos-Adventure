console.info('Hello, World! (You will see this line every time server resources reload)')
  onEvent('player.chat', (event) => {
	if (event.message.trim().equalsIgnoreCase('!report')) {
	  event.server.scheduleInTicks(1, event.server, (callback) => {
		callback.data.tell(Text.gold('-> Report Bug <-').click('https://forms.office.com/r/aUMeCBvTCM')) 
	  })
	}
  })
onEvent('recipes', event => {
	// Change recipes here
	//suppression des recettes de la corde pour unifier les items. 
	event.remove({id: 'supplementaries:rope'})
	event.remove({id: 'farmersdelight:rope'})
	event.remove({id: 'quark:building/crafting/rope'})
	event.remove({id: 'druidcraft:rope'})
	event.remove({id: 'druidcraft:lead'})
	// Unification du craft des cordes
	event.shaped('3x farmersdelight:rope', [
		' S ',
		' S ',
		' S '
	  ], {
		S: '#mgls:rope'
	  })
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
	event.remove({id: "computercraft:turtle_normal"})
	event.remove({id: "computercraft:impostor"})
	// Remove upgradable computer recipes
	event.remove({id: "computercraft:computer_advanced_upgrade"})
	event.remove({id: "computercraft:pocket_computer_advanced_upgrade"})
})
onEvent('item.tags', event => {
  // Remove for supplementaries tag hidden rope
  event.remove('supplementaries:ropes', ['druidcraftrg:rope', 'supplementaries:rope', 'quark:rope'])
  event.remove('forge:dough', 'create:dough')
  event.remove('forge:dough/wheat', 'create:dough')
})

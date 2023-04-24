migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g67iogq23x7u1k1")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g67iogq23x7u1k1")

  collection.listRule = null

  return dao.saveCollection(collection)
})

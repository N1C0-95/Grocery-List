migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ujg5jeegoy1bkc4")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ujg5jeegoy1bkc4")

  collection.listRule = null

  return dao.saveCollection(collection)
})

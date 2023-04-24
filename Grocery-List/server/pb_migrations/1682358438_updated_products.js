migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ujg5jeegoy1bkc4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bil37cpt",
    "name": "quantity",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ivjoch5q",
    "name": "field",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "bdzyidz59yosjbt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "idcleesi",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ujg5jeegoy1bkc4")

  // remove
  collection.schema.removeField("bil37cpt")

  // remove
  collection.schema.removeField("ivjoch5q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "idcleesi",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

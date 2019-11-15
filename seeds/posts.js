exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('Poems').del()
    .then(function () {
      // Inserts seed entries
      return knex('Poems').insert([
        {
          title: "\"Hope\" is the thing with feathers",
          author: "Emily Dickinson",
          lines: JSON.stringify([
            "\"Hope\" is the thing with feathers --",
            "That perches in the soul --",
            "And sings the tune without the words --",
            "And never stops -- at all --",
            "",
            "And sweetest -- in the Gale -- is heard --",
            "And sore must be the storm --",
            "That could abash the little Bird",
            "That kept so many warm --",
            "",
            "I've heard it in the chillest land --",
            "And on the strangest Sea --",
            "Yet, never, in Extremity,",
            "It asked a crumb -- of Me."
          ]),
          "linecount": "12"
        }
      ])
    })
}

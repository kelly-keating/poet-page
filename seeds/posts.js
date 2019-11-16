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
          linecount: 12
        },
        {
          title: "The Green Hills of Earth",
          author: "Robert A. Heinlein",
          lines: JSON.stringify([
            "Let the sweet fresh breezes heal me",
            "As they rove around the girth",
            "Of our lovely mother planet",
            "Of the cool, green hills of Earth.",
            "",
            "We've tried each spinning space mote",
            "And reckoned its true worth:",
            "Take us back again to the homes of men",
            "On the cool, green hills of Earth.",
            "",
            "The arching sky is calling",
            "Spacemen back to their trade.",
            "ALL HANDS! STAND BY! FREE FALLING!",
            "And the lights below us fade.",
            "",
            "Out ride the sons of Terra,",
            "Far drives the thundering jet,",
            "Up leaps a race of Earthmen,",
            "Out, far, and onward yet ---",
            "",
            "We pray for one last landing",
            "On the globe that gave us birth;",
            "Let us rest our eyes on the fleecy skies",
            "And the cool, green hills of Earth."
          ]),
          linecount: 20
        }
      ])
    })
}

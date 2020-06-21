import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };
    case "DELETE_CART_ITEM":
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          //state.movieCollection.foreach((movie) => movie.id === action.payload),
          state.movieCollection.find((movie) => movie.id === action.payload),
        ],
      };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    cart: [],
    dispatch: (action) => this.setState((state) => reducer(state, action)),
    movieCollection: [
      {
        id: 1,
        title: "aladdin",
        poster: "images/posters/aladdin.jpg",
        size: "2.1 GB",
        price: "2 Birr",
        description:
          "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
      },
      {
        id: 2,
        title: "aquaman",
        poster: "images/posters/aquaman.jpg",
        size: "1.9 GB",
        price: "2 Birr",
        description:
          "Arthur Curry the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war between the worlds of ocean and land.",
      },
      {
        id: 3,
        title: "artemis fowl",
        poster: "images/posters/artemis fowl.jpg",
        size: "844 MB",
        price: "2 Birr",
        description:
          "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
      },
      {
        id: 4,
        title: "avengers: endgame",
        poster: "images/posters/avengers endgame.jpg",
        size: "2.6 GB",
        price: "2 Birr",
        description:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      },
      {
        id: 5,
        title: "bad boys for life",
        poster: "images/posters/bad boys.jpg",
        size: "1.4 GB",
        price: "2 Birr",
        description:
          "The wife and son of a Mexican drug lord embark on a vengeful quest to kill all those involved in his trial and imprisonment -- including Miami Detective Mike Lowrey. When Mike gets wounded, he teams up with partner Marcus Burnett and AMMO -- a special tactical squad -- to bring the culprits to justice. But the old-school, wisecracking cops must soon learn to get along with their new elite counterparts if they are to take down the vicious cartel that threatens their lives.",
      },
      {
        id: 6,
        title: "black panther",
        poster: "images/posters/black panther.jpg",
        size: "2 GB",
        price: "2 Birr",
        description:
          "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past. ",
      },
      {
        id: 7,
        title: "black widow",
        poster: "images/posters/black widow.jpg",
        size: "2.4 GB",
        price: "2 Birr",
        description:
          "At birth the Black Widow (aka Natasha Romanova) is given to the KGB, which grooms her to become its ultimate operative. When the U.S.S.R. breaks up, the government tries to kill her as the action moves to present-day New York, where she is a freelance operative.",
      },
      {
        id: 8,
        title: "bloodshot",
        poster: "images/posters/bloodshot.jpg",
        size: "2.1 GB",
        price: "2 Birr",
        description:
          "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine - Bloodshot. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
      },
      {
        id: 9,
        title: "how to train your dragon: the hidden world ",
        poster: "images/posters/how to train your dragon the hidden world.jpg",
        size: "1.1 GB",
        price: "2 Birr",
        description:
          'When Hiccup discovers Toothless isn\'t the only Night Fury, he must seek "The Hidden World",a secret Dragon Utopia before a hired tyrant named Grimmel finds it first.',
      },
      {
        id: 10,
        title: "jumanji",
        poster: "images/posters/jumanj.jpg",
        size: "993 MB",
        price: "2 Birr",
        description:
          "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game..",
      },
      {
        id: 11,
        title: "mulan",
        poster: "images/posters/mulan.jpg",
        size: "1.6 GB",
        price: "2 Birr",
        description:
          "To save her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man to battle northern invaders in China.",
      },
      {
        id: 12,
        title: "onward",
        poster: "images/posters/onward.jpg",
        size: "1.5 GB",
        price: "2 Birr",
        description:
          "Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father. Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries. But when dear Mom finds out her sons are missing, she teams up with the legendary manticore to bring her beloved boys back home.",
      },
      {
        id: 13,
        title: "rampage",
        poster: "images/posters/rampage.jpg",
        size: "1 GB",
        price: "2 Birr",
        description:
          "When three different animals become infected with a dangerous pathogen, a primatologist and a geneticist team up to stop them from destroying Chicago.",
      },
      {
        id: 14,
        title: "spider-man: far from home",
        poster: "images/posters/spider man far from home.jpg",
        size: "1.8 GB",
        price: "2 Birr",
        description:
          "As Spider-Man, a beloved superhero, Peter Parker faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins",
      },
      {
        id: 15,
        title: "spider-man: into the spider-verse",
        poster: "images/posters/spider man into the spider verse.jpg",
        size: "1.3 GB",
        price: "2 Birr",
        description:
          "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities",
      },
      {
        id: 16,
        title: "the secret: dare to dream",
        poster: "images/posters/the secret dare to dream.jpg",
        size: "1.6 GB",
        price: "2 Birr",
        description:
          "Miranda Wells is a hardworking young widow who's struggling to raise three children on her own. A powerful storm soon brings a devastating challenge and a mysterious man, Bray Johnson, into her life. In just a few short days, Bray's presence reignites the family's spirit -- but he carries a secret that could change everything.",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

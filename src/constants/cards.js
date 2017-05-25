import { ATTACKS, WEATHER } from './threats'

export const PILES = {
  peace: { image: 'peace.svg' },
  monument: { image: 'monument.svg' }
}

export const CHARACTERS = [
  {
    name: 'Félix Moreau',
    charm: WEATHER.NIGHT,
    image: 'felix.svg'
  },
  {
    name: 'Gustave Bidau',
    charm: WEATHER.SNOW,
    image: 'gustave.svg'
  },
  {
    name: 'Charles Sauliére',
    charm: WEATHER.RAIN,
    image: 'charles.svg'
  },
  {
    name: 'Gaston Fayard',
    charm: ATTACKS.SHELL,
    image: 'gaston.svg'
  },
  {
    name: 'Lazare Bonticelli',
    charm: ATTACKS.WHISTLE,
    image: 'lazare.svg'
  },
  {
    name: 'Anselme Perrin',
    charm: ATTACKS.GAS,
    image: 'anselme.svg'
  },
]

export const TRIALS = [
  {
    attacks: [ATTACKS.GAS, ATTACKS.SHELL],
    weather: [WEATHER.NONE],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE, ATTACKS.SHELL],
    weather: [WEATHER.NONE],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS, ATTACKS.WHISTLE],
    weather: [WEATHER.NONE],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS, ATTACKS.WHISTLE, ATTACKS.SHELL],
    weather: [WEATHER.NONE],
    trap: false
  },
  {
    attacks: [],
    weather: [WEATHER.RAIN, WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [],
    weather: [WEATHER.NIGHT, WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [],
    weather: [WEATHER.SNOW, WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [],
    weather: [WEATHER.NIGHT, WEATHER.SNOW, WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS, ATTACKS.WHISTLE, ATTACKS.SHELL],
    weather: [WEATHER.NIGHT, WEATHER.SNOW, WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.SNOW],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.NIGHT],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.RAIN],
    trap: false
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.SNOW],
    trap: true
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.SNOW],
    trap: true
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.SNOW],
    trap: true
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.SNOW],
    trap: true
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.NIGHT],
    trap: true
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.NIGHT],
    trap: true
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.NIGHT],
    trap: true
  },
  {
    attacks: [ATTACKS.GAS],
    weather: [WEATHER.RAIN],
    trap: true
  },
  {
    attacks: [ATTACKS.SHELL],
    weather: [WEATHER.RAIN],
    trap: true
  },
  {
    attacks: [ATTACKS.WHISTLE],
    weather: [WEATHER.RAIN],
    trap: true
  },
]

export const HARD_KNOCKS = [
  {
    knocks: 0,
    threat: null,
    title: 'Merry Christmas',
    text: 'Discard a Hard Knock card from yourself of another player'
  },
  {
    knocks: 2,
    threat: null,
    title: 'Wounded',
    text: 'Counts as 2 Hard Knocks'
  },
  {
    knocks: 1,
    threat: WEATHER.RAIN,
    title: 'Trauma',
    text: null
  },
  {
    knocks: 1,
    threat: WEATHER.SNOW,
    title: 'Trauma',
    text: null
  },
  {
    knocks: 1,
    threat: WEATHER.NIGHT,
    title: 'Trauma',
    text: null
  },
  {
    knocks: 1,
    threat: ATTACKS.GAS,
    title: 'Phobia',
    text: null
  },
  {
    knocks: 1,
    threat: ATTACKS.WHISTLE,
    title: 'Phobia',
    text: null
  },
  {
    knocks: 1,
    threat: null,
    title: 'Mute',
    text: 'You can no longer speak or communicate with other players in any way. You may not use a speech.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Tyrannical',
    text: 'Take the Mission Leader role and keep it, preventing the distribution of speeches.'
  },

  {
    knocks: 1,
    threat: null,
    title: 'Demoralized',
    text: 'When the Morale drops, flip one extra card (minimum 4).'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Fragile',
    text: 'Other players cannot withdraw as long as they have any cards in hand.'
  },

  {
    knocks: 1,
    threat: null,
    title: 'Fearful',
    text: 'On your turn, you must withdraw if 2 identical Threats are active.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Panicked',
    text: 'During Withdrawal, draw your Support tile randomly.'
  },

  {
    knocks: 1,
    threat: null,
    title: 'Frenzied',
    text: 'At the beginning of a Mission, you must draw 2 extra cards.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Selfish',
    text: 'Your Support tile is always redirected to yourself.'
  },

  {
    knocks: 1,
    threat: null,
    title: 'Hardheaded',
    text: 'You cannot withdraw as long as you have 2 or more cards in hand.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Prideful',
    text: 'You may withdraw only if you hand is empty, or if you are the last one still in the Mission.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Clumsy',
    text: 'After your withdrawal, you must draw a Trial card and play it.'
  },
  {
    knocks: 1,
    threat: null,
    title: 'Absent-minded',
    text: 'Before withdrawing, choose and remove one of your Support tiles from the game.'
  },
]

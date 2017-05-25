import shuffle from 'lodash/shuffle'
import take from 'lodash/take'
import drop from 'lodash/drop'

import * as types from 'state/mutationTypes';
import { HARD_KNOCKS, TRIALS } from 'constants/cards';

export function shuffleAll({ dispatch }) {
  const shuffled = shuffle([].concat(HARD_KNOCKS, TRIALS))
  dispatch(types.SET_TRIALS_PILE, take(shuffled, 25))
  dispatch(types.SET_MORALE_RESERVE, drop(shuffled, 25))
}

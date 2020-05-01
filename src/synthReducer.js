import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';
import { v4 as id } from 'uuid';

function makeOscillator() {
  return {
    gain: undefined,
    id: id(),
    waveform: undefined,
  };
}

function makeVoice() {
  return { id: id(), oscillators: [makeOscillator()] };
}

export const initialState = {
  voices: [makeVoice()],
};

class SynthReducer extends ImmerReducer {
  addOscillator(voiceIdx) {
    this.draftState.voices[voiceIdx].oscillators.push(makeOscillator());
  }
  addVoice() {
    this.draftState.voices.push(makeVoice());
  }
  editOscillator(voiceIdx, oscIdx, key, val) {
    this.draftState.voices[voiceIdx].oscillators[oscIdx][key] = val;
  }
  removeOscillator(voiceIdx, oscIdx) {
    if (this.draftState.voices[voiceIdx].length > 1) {
      this.draftState.voices[voiceIdx].oscillators.splice(oscIdx, 1);
    }
  }
  removeVoice(voiceIdx) {
    if (this.draftState.voices.length > 1) {
      this.draftState.voices.splice(voiceIdx, 1);
    }
  }
}

export const actions = createActionCreators(SynthReducer);
export const synthReducer = createReducerFunction(SynthReducer);

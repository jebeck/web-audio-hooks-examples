import { assign, Machine } from 'xstate';

const keyboardMachine = Machine(
  {
    initial: 'inert',
    context: { notes: [] },
    states: {
      inert: {
        on: {
          KEYDOWN: {
            actions: assign({ notes: (_, { value }) => [..._.notes, value] }),
            target: 'playing',
          },
        },
      },
      playing: {
        on: {
          KEYDOWN: {
            actions: assign({ notes: (_, { value }) => [..._.notes, value] }),
          },
          KEYUP: [
            {
              actions: 'removeNote',
              target: 'inert',
              cond: 'notesEmpty',
            },
            {
              actions: 'removeNote',
              target: 'playing',
              cond: 'notesRemaining',
            },
          ],
          RESET: {
            actions: assign({ notes: () => [] }),
            target: 'inert',
          },
        },
      },
    },
  },
  {
    actions: {
      removeNote: assign({
        notes: (_, { value }) => _.notes.filter((note) => note !== value),
      }),
    },
    guards: {
      notesEmpty: (_, { value }) =>
        _.notes.length === 1 && _.notes[0] === value,
      notesRemaining: (_) => _.notes.length > 1,
    },
  }
);

export default keyboardMachine;

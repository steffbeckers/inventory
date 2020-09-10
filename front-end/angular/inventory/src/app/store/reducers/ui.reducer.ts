import { Action, createReducer, on } from '@ngrx/store';
import * as UIActions from '../actions/ui.actions';

export const uiFeatureKey = 'ui';

export interface State {
  theme: string;
}

export const initialState: State = {
  theme: 'dark', // dark, light
};

export const reducer = createReducer(
  initialState,
  on(UIActions.toggleTheme, state => {
    return {
      ...state,
      theme: state.theme === 'dark' ? 'light' : 'dark'
    };
  }),
);


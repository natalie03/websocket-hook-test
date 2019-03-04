export const SAVE_NAME = 'SAVE_NAME';
export const CHANGE_SCREEN = 'CHANGE_SCREEN';

export function saveName(name) {
  return {
      type: SAVE_NAME,
      payload: name
  };
}

export function changeScreen(index) {
  return {
      type: CHANGE_SCREEN,
      payload: index
  };
}
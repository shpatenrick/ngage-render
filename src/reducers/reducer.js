import { combineReducers } from 'redux';
import type from './type';
import user from './user';
import question from './question';
import answer from './answer';
import {questions} from './questions';
import {session, invalidRoom, presentation} from './session';

export default combineReducers({
  user,
  type,
  question,
  questions,
  answer,
  session,
  invalidRoom,
  presentation
});

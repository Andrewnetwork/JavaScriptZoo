import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect} from 'react-redux';
import { Dispatch } from 'redux';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
      onIncrement: () => {
          console.log("On increment dispatched.");
          dispatch(actions.incrementEnthusiasm());
      },
      onDecrement: () => {
          console.log("On decrement dispatched.");
          dispatch(actions.decrementEnthusiasm());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
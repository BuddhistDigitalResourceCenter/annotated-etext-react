//@flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from "redux";
import {CollectionServiceInterface} from './AnnotationTypes';
import type {CollectionInfo, URL} from './AnnotationTypes';

type LayerSelectorProps = {
    collections: Array<CollectionInfo>
};

const initialState = {
    collections: []
}

class LayerServiceList extends React.Component<LayerSelectorProps> {

  static defaultProps = {
    collections: []
  };

  render() {
        const res = <div></div>;
        return res;
  };
}

const mapStateToProps = (state = initialState, ownProps: Object): Object => {
    let props = { ...ownProps, collections: state.collections }
    return props ;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
     /*
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
    */
  };
};

const LayerServiceListContainer = connect(
    mapStateToProps
)(LayerServiceList);

export default LayerServiceListContainer;

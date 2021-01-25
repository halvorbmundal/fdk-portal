import React, { memo, FC, ComponentType } from 'react';
import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import * as actions from './redux/actions';
import type { ESPage, PublicService } from '../../types';
import { PublicServiceEvent } from '../../types';

export interface Props {
  publicServices: PublicService[];
  publicServicesAggregations: any;
  publicServicesPage: ESPage;
  publicServicesEvents: PublicServiceEvent[];
  publicServicesActions: typeof actions;
  publicServicesRequiredBy: PublicService[];
  publicServicesRelatedBy: PublicService[];
}

const withPublicServices = (Component: ComponentType<any>) => {
  const WrappedComponent = (props: Props) => <Component {...props} />;

  const mapStateToProps = (state: any) => ({
    publicServices: state.PublicServicesReducer.get('publicServices')?.toJS(),
    publicServicesAggregations:
      state.PublicServicesReducer.get('publicServicesAggregations')?.toJS() ??
      null,
    publicServicesPage:
      state.PublicServicesReducer.get('publicServicesPage')?.toJS() ?? null,
    publicServicesEvents: state.PublicServicesReducer.get(
      'publicServicesEvents'
    )?.toJS(),
    publicServicesRequiredBy: state.PublicServicesReducer.get(
      'publicServicesRequiredBy'
    ).toJS(),
    publicServicesRelatedBy: state.PublicServicesReducer.get(
      'publicServicesRelatedBy'
    ).toJS()
  });

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    publicServicesActions: bindActionCreators(actions, dispatch)
  });

  return compose<FC>(
    memo,
    connect(mapStateToProps, mapDispatchToProps)
  )(WrappedComponent);
};

export default withPublicServices;

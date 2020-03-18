import { cleanup } from '@testing-library/react';

import {
  Expectation,
  expectCorrectRootElement,
  expectStyleRules
} from '../../../../../../test/utils';

import { SC as ExpansionPanelSC } from '../../../../expansion-panel';

import SC from '../styled';

afterEach(cleanup);

describe('Styled components for DatasetDistribution component', () => {
  describe('SC.DatasetDistribution component', () => {
    it(Expectation.ROOT_ELEMENT, () => {
      expectCorrectRootElement(SC.DatasetDistribution, 'div');
    });

    it(Expectation.STYLE_RULES, () => {
      expectStyleRules(SC.DatasetDistribution, [
        { property: 'background', value: 'white' },
        { property: 'border-radius', value: '5px' },
        { property: 'overflow', value: 'hidden' },
        {
          property: 'margin-top',
          value: '10px',
          options: { modifier: '&:nth-of-type(n + 2)' }
        },
        {
          property: 'padding',
          value: '12px 24px',
          options: { modifier: `& > ${ExpansionPanelSC.ExpansionPanel.Head}` }
        },
        {
          property: 'min-width',
          value: '0',
          options: {
            modifier: `& > ${ExpansionPanelSC.ExpansionPanel.Head} > ${ExpansionPanelSC.ExpansionPanel.HeadContent}`
          }
        },
        {
          property: 'margin-left',
          value: '24px',
          options: {
            modifier: `& > ${ExpansionPanelSC.ExpansionPanel.Head} > ${ExpansionPanelSC.ExpansionPanel.HeadExpansionIndicator}`
          }
        },
        {
          property: 'padding',
          value: '0px 24px 12px',
          options: { modifier: `& > ${ExpansionPanelSC.ExpansionPanel.Body}` }
        }
      ]);
    });
  });
});
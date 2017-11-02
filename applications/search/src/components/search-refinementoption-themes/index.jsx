import * as React from 'react';
import localization from '../../components/localization';

export class RefinementOptionThemes extends React.Component {
  render() {
    const { bemBlocks, itemKey, label, active, onClick, count } = this.props; // eslint-disable-line react/prop-types
    let themeLabel = '';
    if (window.themes.length > 0) {
      if (label === 'Ukjent') {
        themeLabel = label;
      } else {
        const lang = localization.getLanguage();
        if(_.find(window.themes, label.substr(-4))) {
          themeLabel = _.find(window.themes, label.substr(-4))[label.substr(-4)][lang];
        } else if(label === 'showmorelabel') {
          themeLabel = label;
          return (
            <label htmlFor="showAllThemesToggle" >{localization.facet.showmore}</label>
          )
        } else if(label === 'showfewerlabel') {
          return (
            <label htmlFor="showAllThemesToggle" >{localization.facet.showfewer}</label>
          )
        } else if(label === 'showmoreinput') {
          return (
            <input type="checkbox" id="showAllThemesToggle"  />
          )

        }
      }
    }
    const id = encodeURIComponent((itemKey + Math.random()));
    return (
      <div className="checkbox">
        <label htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            checked={active}
            onChange={onClick}
            className={`${bemBlocks.option().state({ active })} list-group-item fdk-label fdk-label-default`}
          />
          <label className="checkbox-replacement" htmlFor={id} />
          {themeLabel} ({count})
        </label>
      </div>
    );
  }
}

import React, { FC, memo } from 'react';

import { News } from '../../../../types';
import Item from '../article-item/article-item.component';
import HeaderSC from '../header/styled';
import localization from '../../../../lib/localization';

interface Props {
  news?: News[];
}

const NewsList: FC<Props> = ({ news }) => {
  if (news && news.length > 0) {
    return (
      <div>
        <HeaderSC.Header>
          <span>{localization.news}</span>
        </HeaderSC.Header>

        {news.map((item: News) => (
          <Item
            key={item.id}
            id={item.id}
            date={item.attributes.created}
            title={item.attributes.title}
            abstract={item.attributes.field_ingress}
          />
        ))}
      </div>
    );
  }
  return null;
};

export default memo(NewsList);
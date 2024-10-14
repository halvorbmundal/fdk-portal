import Button from '@fellesdatakatalog/button';
import React from 'react';
import translations from '../../../../lib/localization';
import { AccessRequest } from '../../../../types';
import SC from './styled';
import {
  EventAction,
  EventCategory,
  trackSiteImproveEvent
} from '../../../analytics-siteimprove/utils';

const getAppliactionLink = async (location: string): Promise<string> => {
  const accessRequestApi = `https://access-request.api.staging.fellesdatakatalog.digdir.no`;

  const response = await fetch(
    `${accessRequestApi}/access-request/${translations._language}${location}`
  );

  return response.text();
};

export function AccessRequestButton({
  accessRequest,
  entityId,
  accessRequestUrl
}: {
  accessRequestUrl: string | undefined;
  accessRequest: AccessRequest | undefined;
  entityId: string | undefined;
}) {
  const trackAccessRequest = () => {
    trackSiteImproveEvent({
      category: EventCategory.DETAILS_PAGE,
      action: EventAction.REQUEST_ACCESS,
      label: entityId
    });
  };

  const isEnturDataset = entityId === '8b285b05-dd33-31db-a1b6-0cf605bf05dd';

  if (accessRequestUrl === 'soknad.kudaf.no' || isEnturDataset) {
    return (
      <SC.AccessRequest>
        <Button
          onClick={() => {
            trackAccessRequest();
            getAppliactionLink(location.pathname).then(url => {
              window.location.href = url;
            });
          }}
        >
          {translations.detailsPage.requestDataButton}
        </Button>
      </SC.AccessRequest>
    );
  }

  if (accessRequest === undefined) {
    return null;
  }

  return (
    <SC.AccessRequest>
      <a href={accessRequest.requestAddress} target='_blank' rel='noreferrer'>
        <Button onClick={trackAccessRequest}>
          {translations.detailsPage.requestDataButton}
        </Button>
      </a>
    </SC.AccessRequest>
  );
}

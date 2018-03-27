import React from 'react';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router-dom';

import localization from '../../components/localization';

const About = () => {
  const meta = {
    title: `Om ${localization.about.title}`,
    description: localization.about.ingress
  };
  return (
    <div className="container">
      <div className="fdk-container-path" />
      <DocumentMeta {...meta} />
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1 className="fdk-margin-bottom">{localization.about.title}</h1>
          <div className="fdk-margin-bottom">
            <p className="fdk-ingress">{localization.about.titleSub}</p>
            <p className="fdk-ingress">{localization.about.ingress}</p>
          </div>
          <div className="fdk-textregular">
            {
              // eslint-disable-next-line react/no-danger
            }
            <p
              dangerouslySetInnerHTML={{ __html: localization.about.maintext }}
            />
            {
              // eslint-disable-next-line react/no-danger
            }
            <p
              dangerouslySetInnerHTML={{
                __html: localization.about.dataNorgeText
              }}
            />
            <p>
              <b>{localization.about.register}</b>
              <br />
              <Link to="/about-registration">
                {localization.about.helpToRegister}
              </Link>
            </p>
            <p>
              <a
                title="Lenke til registreringsløsning"
                target="_blank"
                rel="noopener noreferrer"
                href="https://registrering-fdk.ppe.brreg.no/"
              >
                <span className="fdk-button fdk-button-default">
                  Kom i gang med registreringen
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

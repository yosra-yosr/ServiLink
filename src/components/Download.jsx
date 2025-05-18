import React from 'react';
import { Typography, Button, Row, Col } from 'antd';
import { AppleOutlined, AndroidOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Download = () => {
  const { t } = useTranslation(['download']);

  // Récupération des avantages depuis la traduction
  const benefits = t('benefits', { returnObjects: true });

  return (
    <section className="download" id="download">
      <div className="download-shape download-shape-1"></div>
      <div className="download-shape download-shape-2"></div>
      <div className="download-shape download-shape-3"></div>
      
      <div className="container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className="download-content">
              <div className="download-badge">
                <span>{t('badge')}</span>
              </div>
              
              <Title level={2} className="download-title">
                {t('title')}
              </Title>
              
              <Paragraph className="download-description">
                {t('description')}
              </Paragraph>
              
              <div className="download-features">
                {benefits.map((benefit, index) => (
                  <div className="download-feature-item" key={index}>
                    <CheckCircleOutlined className="download-feature-icon" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="download-buttons">

                <a href="https://www.figma.com/proto/O0lbzwDv6XSC0AGCTdcgv8/ServiLink?node-id=297-4370&t=meUHn0JZPiXhhDYV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=297%3A4370" 
                target="_blank" 
                rel="noopener noreferrer">
                  <Button 
                    type="primary" 
                    icon={<AndroidOutlined />} 
                    size="large" 
                    className="download-btn android-btn"
                  >
                    <div>
                      <span>{t('downloadOn')}</span>
                      <p>{t('googlePlay')}</p>
                    </div>
                  </Button>
                </a>

                <a href="https://www.figma.com/proto/O0lbzwDv6XSC0AGCTdcgv8/ServiLink?node-id=297-4370&t=meUHn0JZPiXhhDYV-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=297%3A4370" target="_blank" rel="noopener noreferrer">
                  <Button 
                    type="primary" 
                    icon={<AppleOutlined />} 
                    size="large" 
                    className="download-btn apple-btn"
                  >
                    <div>
                      <span>{t('downloadOn')}</span>
                      <p>{t('appStore')}</p>
                    </div>
                  </Button>
                </a>
              </div>
              
            </div>
          </Col>
          
          {/* <Col xs={24} lg={12} className="download-image-col">
            <div className="download-image-container">
              <div className="download-phone-mockup">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              <div className="download-phone-mockup download-phone-second">
                <img src="/images/SplashScreen.png" alt="ServiLink App" className="download-phone" />
              </div>
              <div className="download-badge-floating download-badge-1">
                <div className="download-badge-icon">⭐</div>
                <span>{t('badges.rating')}</span>
              </div>
              <div className="download-badge-floating download-badge-2">
                <div className="download-badge-icon">🚀</div>
                <span>{t('badges.fast')}</span>
              </div>
              <div className="download-badge-floating download-badge-3">
                <div className="download-badge-icon">👍</div>
                <span>{t('badges.reliable')}</span>
              </div>
            </div>
          </Col> */}
           <Col xs={24} md={12} className="hero-image-container">
                      <div className="phone-mockup">
                        <div className="phone-frame">
                          <img src="/images/downloadPrototype.png" alt="ServiLink App" className="phone-screen" />
                        </div>
                        <div className="download-badge-floating download-badge-1">
                <div className="download-badge-icon">⭐</div>
                <span>{t('badges.rating')}</span>
              </div>
              <div className="download-badge-floating download-badge-2">
                <div className="download-badge-icon">🚀</div>
                <span>{t('badges.fast')}</span>
              </div>
              <div className="download-badge-floating download-badge-3">
                <div className="download-badge-icon">👍</div>
                <span>{t('badges.reliable')}</span>
              </div>
                      </div>
                    </Col>
        </Row>
      </div>
    </section>
  );
};

export default Download;
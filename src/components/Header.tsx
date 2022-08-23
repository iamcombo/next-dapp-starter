import { Col, Layout, Row } from 'antd';
import { ConnectKitButton } from 'connectkit';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [client, setClient] = useState<boolean>(false);

  useEffect(() => {
    setClient(true);
  },[]);
  
  return (
    <div>
      <div className={styles.header}>
        <Layout.Header className={styles.headerContainer}>
          <Row style={{height: '100%'}} justify='space-between' align='middle'>
            <Col></Col>
            <Col>
              {client && <ConnectKitButton />}
            </Col>
          </Row>
        </Layout.Header>
      </div>
      <div className={styles.headerBorder} />
    </div>
  )
}

export default Header;
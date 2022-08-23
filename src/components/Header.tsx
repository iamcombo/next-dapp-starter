import { Col, Layout, Row } from 'antd';
import { ConnectKitButton } from 'connectkit';
import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  },[]);
  
  if(!mounted) return null;
  return (
    <div>
      <div className={styles.header}>
        <Layout.Header className={styles.headerContainer}>
          <Row style={{height: '100%'}} justify='space-between' align='middle'>
            <Col></Col>
            <Col>
              <ConnectKitButton />
            </Col>
          </Row>
        </Layout.Header>
      </div>
      <div className={styles.headerBorder} />
    </div>
  )
}

export default Header;
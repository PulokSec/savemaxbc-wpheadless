import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface MyProps {
  name: string;
}

const ConfirmationEmail = ({ name }: MyProps) => (
  <Html>
    <Head />
    <Preview>
      Form Submission Confirmation - Save Max Westcoast Realty Inc.
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Column>
            <Img
              style={sectionLogo}
              src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Save-Max-Westcoast-Realty.png'
              width='155'
              height='50'
              alt='Google Play'
            />
          </Column>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>
            Form Submission Confirmation - Save Max Westcoast Realty Inc.
          </Text>
          <Text style={paragraph}>Dear {name}</Text>
          <Text style={paragraph}>
            Thank you for choosing Save Max Westcoast Realty Inc. for your real
            estate needs. We appreciate the opportunity to assist you in your
            property search or sale.
          </Text>
        </Section>
        <Section style={paragraphList}>
          <Text style={paragraph}>
            Your form submission details have been successfully received, and
            one of our experienced agents will review the information provided.
            Rest assured, we will promptly get in touch with you to discuss your
            requirements and preferences in more detail.
          </Text>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            If you have any immediate questions or additional information to
            share, feel free to reach out to us at{' '}
            <Link href='mailto:admin@savemaxwestcoast.com' style={link}>
              admin@savemaxwestcoast.com
            </Link>
          </Text>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph, fontSize: '20px', ...headerBlue }}>
            Save Max Westcoast Realty Inc
          </Text>
        </Section>

        <Section style={containerContact}>
          <Text style={paragraph}>Connect with us</Text>
          <Row
            align='left'
            style={{
              width: '84px',
              float: 'left',
            }}
          >
            <Column style={{ paddingRight: '4px' }}>
              <Link href='https://www.facebook.com/SMWestcoastRealty'>
                <Img
                  width='28'
                  height='28'
                  src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/12/107175_circle_facebook_icon.png'
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: '4px' }}>
              <Link href='https://www.instagram.com/savemaxwestcoast/'>
                <Img
                  width='28'
                  height='28'
                  src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/12/3225191_app_instagram_logo_media_popular_icon.png'
                />
              </Link>
            </Column>
          </Row>
        </Section>
        <Section style={containerContact}>
          <Row
            align='left'
            style={{
              width: '84px',
              float: 'left',
            }}
          >
            <Img
              width='380'
              height='110'
              src='https://savemaxbc.wpengine.com/wp-content/uploads/2023/10/Save-Max-Westcoast-Realty.png'
            />
          </Row>
        </Section>
        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: '12px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Save Max Unit 288, 12899 76 Avenue
            Surrey. BC. V3W1E6
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);
export default ConfirmationEmail;
const main = {
  backgroundColor: '#dbddde',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: '0 40px',
};

const headerBlue = {
  color: '#0F2650',
};

const container = {
  margin: '30px auto',
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 5,
  overflow: 'hidden',
};

const containerContact = {
  backgroundColor: '#f0fcff',
  width: '90%',
  borderRadius: '5px',
  overflow: 'hidden',
  paddingLeft: '20px',
};

const heading = {
  fontSize: '14px',
  lineHeight: '26px',
  fontWeight: '700',
  color: '#004dcf',
};

const paragraphContent = {
  padding: '0 40px',
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#3c4043',
};

const link = {
  ...paragraph,
  color: '#004dcf',
};

const hr = {
  borderColor: '#e8eaed',
  margin: '20px 0',
};
